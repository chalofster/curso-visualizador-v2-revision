/* Motor de curso SCORM 1.2 — genérico y autocontenido.
   El contenido del curso vive en contenido.js (variable global CONTENIDO):
   CONTENIDO = { id, titulo, aprobacion, modulos:[{id,titulo,color}], pantallas:[...] }
   Tipos de pantalla: contenido | quiz | vf | clasificar | flashcards | ordenar | emparejar | examen | video
   (toda pantalla acepta ademas "html" previo y "chip" del módulo).

   Cierre en la plataforma (02-10-2026, un paquete por módulo y sin examen final):
   - Un ejercicio vf, clasificar o emparejar con "evalua: true" informa nota: «passed» o «failed»
     segun el umbral de CONTENIDO.aprobacion. Se conserva el mejor intento.
   - Un paquete sin pantalla que evalue se marca «completed» al visitar todas sus pantallas.
   Hasta esa fecha solo el examen informaba algo, y un paquete sin examen quedaba «incomplete»
   para siempre. */
(function () {
  "use strict";

  var P = CONTENIDO.pantallas;
  var estado = { actual: 0, visitadas: [], examen: null };
  var TIPOS_QUE_EVALUAN = { vf: true, clasificar: true, emparejar: true };
  var conEvaluacion = P.some(function (p) {
    return p.tipo === "examen" || (p.evalua && TIPOS_QUE_EVALUAN[p.tipo]);
  });
  var completoInformado = false;

  /* ---------- Persistencia (suspend_data, máx 4096) ---------- */
  function guardar() {
    var v = estado.visitadas.map(function (x) { return x ? "1" : "0"; }).join("");
    SCORM.guardarAvance(JSON.stringify({ p: estado.actual, v: v, e: estado.examen }));
  }
  function restaurar() {
    var crudo = SCORM.leerAvance();
    estado.visitadas = P.map(function () { return false; });
    if (!crudo) return;
    try {
      var d = JSON.parse(crudo);
      if (typeof d.p === "number" && d.p >= 0 && d.p < P.length) estado.actual = d.p;
      if (typeof d.v === "string") {
        for (var i = 0; i < P.length && i < d.v.length; i++) estado.visitadas[i] = d.v.charAt(i) === "1";
      }
      if (typeof d.e === "number") estado.examen = d.e;
    } catch (e) { /* avance corrupto: se parte de cero */ }
  }

  /* ---------- Utilidades ---------- */
  function el(sel) { return document.querySelector(sel); }
  function crear(tag, clase, html) {
    var n = document.createElement(tag);
    if (clase) n.className = clase;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function esc(t) {
    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function barajar(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function moduloDe(pant) { return CONTENIDO.modulos[pant.modulo]; }

  /* Accesibilidad: el color del modulo lo define el curso y puede ser claro.
     Se mide la luminancia real del fondo ya aplicado y se elige texto blanco
     o azul oscuro, para no quedar bajo el 4.5:1 que exige WCAG AA en texto
     pequeno. Debe llamarse con el nodo ya insertado en el documento. */
  /* Luminancia relativa WCAG de un color computado. null si no se puede leer. */
  function luminancia(rgb) {
    var m = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(rgb);
    if (!m) return null;
    var c = [1, 2, 3].map(function (i) {
      var v = parseInt(m[i], 10) / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }

  function razon(La, Lb) {
    return (Math.max(La, Lb) + 0.05) / (Math.min(La, Lb) + 0.05);
  }

  /* Elige el color de texto del chip midiendo, no suponiendo. El color de fondo
     lo define el curso y puede ser cualquiera, asi que se prueban los candidatos
     y gana el de mejor razon de contraste medida sobre el color ya computado.
     No basta con descartar el blanco: la alternativa oscura tambien puede quedar
     bajo AA (--c-azul-oscuro sobre el cian de categoria mide 4,06:1). */
  function ajustarContraste(nodo) {
    var Lb = luminancia(window.getComputedStyle(nodo).backgroundColor);
    if (Lb === null) return;
    var sonda = document.createElement("span");
    sonda.style.cssText = "position:absolute;visibility:hidden";
    nodo.appendChild(sonda);
    var mejor = null, mejorRazon = -1;
    ["#fff", "var(--c-azul-oscuro, #16294F)", "var(--c-texto, #12151c)"].forEach(function (cand) {
      sonda.style.color = cand;
      var Lt = luminancia(window.getComputedStyle(sonda).color);
      if (Lt === null) return;
      var r = razon(Lt, Lb);
      if (r > mejorRazon) { mejorRazon = r; mejor = cand; }
    });
    nodo.removeChild(sonda);
    if (mejor) nodo.style.color = mejor;
  }

  /* ---------- Índice lateral ---------- */
  function pintarIndice() {
    var nav = el("#indice"); nav.innerHTML = "";
    var modAnterior = -1;
    P.forEach(function (pant, i) {
      if (pant.modulo !== modAnterior) {
        modAnterior = pant.modulo;
        var m = moduloDe(pant);
        var enc = crear("div", "ind-modulo");
        enc.appendChild(crear("span", "punto")).style.background = m.color;
        enc.appendChild(document.createTextNode(m.titulo));
        nav.appendChild(enc);
      }
      var b = crear("button", "ind-pantalla", esc(pant.titulo));
      if (i === estado.actual) b.classList.add("actual");
      if (estado.visitadas[i]) b.classList.add("visitada");
      b.addEventListener("click", function () { irA(i); });
      nav.appendChild(b);
    });
  }

  function pintarProgreso() {
    var visit = estado.visitadas.filter(Boolean).length;
    var pct = Math.round(visit * 100 / P.length);
    el("#progreso-relleno").style.width = pct + "%";
    el("#progreso-texto").textContent = pct + "%";
    el("#posicion").textContent = (estado.actual + 1) + " / " + P.length;
  }

  /* ---------- Render de pantallas ---------- */
  function render() {
    var pant = P[estado.actual];
    var m = moduloDe(pant);
    var esc_ = el("#escenario"); esc_.innerHTML = "";
    var caja = crear("div", "pantalla");

    var chip = crear("span", "chip-modulo", esc(m.titulo));
    chip.style.background = m.color;
    caja.appendChild(chip);
    caja.appendChild(crear("h1", null, esc(pant.titulo)));

    if (pant.html) caja.appendChild(crear("div", null, pant.html));

    var renders = {
      contenido: function () { /* solo html */ },
      quiz: renderQuiz, vf: renderVF, clasificar: renderClasificar,
      flashcards: renderFlash, ordenar: renderOrdenar, emparejar: renderEmparejar,
      examen: renderExamen, video: renderVideo
    };
    if (renders[pant.tipo] && pant.tipo !== "contenido") renders[pant.tipo](caja, pant, m);

    esc_.appendChild(caja);
    ajustarContraste(chip);
    esc_.scrollTop = 0;

    estado.visitadas[estado.actual] = true;
    guardar(); pintarIndice(); pintarProgreso();
    informarCompleto();
    el("#btn-anterior").disabled = estado.actual === 0;
    el("#btn-siguiente").disabled = estado.actual === P.length - 1;
  }

  function renderQuiz(caja, pant) {
    var act = crear("div", "actividad");
    act.appendChild(crear("div", "act-instruccion", pant.instruccion || "Selecciona una alternativa:"));
    var zonaRetro = crear("div");
    pant.opciones.forEach(function (op) {
      var b = crear("button", "opcion", op.t);
      b.addEventListener("click", function () {
        act.querySelectorAll(".opcion").forEach(function (x) { x.disabled = true; });
        b.classList.add(op.ok ? "correcta" : "incorrecta");
        if (!op.ok) {
          act.querySelectorAll(".opcion").forEach(function (x, idx) {
            if (pant.opciones[idx].ok) x.classList.add("correcta");
          });
        }
        zonaRetro.innerHTML = "";
        zonaRetro.appendChild(crear("div", "retro " + (op.ok ? "ok" : "no"),
          (op.ok ? "<strong>¡Correcto!</strong> " : "<strong>Revisemos:</strong> ") + (op.retro || "")));
        if (pant.revelar) zonaRetro.appendChild(crear("div", null, pant.revelar));
      });
      act.appendChild(b);
    });
    act.appendChild(zonaRetro);
    caja.appendChild(act);
  }

  /* ---------- Cierre en la plataforma ---------- */
  /* Paquete sin ejercicio que evalue: «completed» al visitar todas las pantallas. Con ejercicio,
     el estado lo gobierna solo el ejercicio, para no mezclar «completed» con «failed». */
  function informarCompleto() {
    if (conEvaluacion || completoInformado) return;
    if (estado.visitadas.every(Boolean)) {
      SCORM.marcarCompleto();
      completoInformado = true;
    }
  }

  /* Un intento terminado de un ejercicio con "evalua: true". Informa el mejor resultado entre
     intentos, igual que el examen, y deja un boton para volver a intentarlo desde cero. */
  function registrarEvaluacion(pant, aciertos, total, zona) {
    if (!pant.evalua || !TIPOS_QUE_EVALUAN[pant.tipo] || !total) return;
    var minimo = pant.minimo || CONTENIDO.aprobacion || 60;
    var puntaje = Math.round(aciertos * 100 / total);
    var mejor = Math.max(puntaje, estado.examen === null ? 0 : estado.examen);
    estado.examen = mejor;
    SCORM.reportarNota(mejor, mejor >= minimo);
    guardar();
    zona.appendChild(resumenExamen(puntaje, minimo, pant));
    var otra = crear("button", "btn btn-secundario", "Intentar de nuevo");
    otra.type = "button";
    otra.addEventListener("click", function () { render(); });
    zona.appendChild(otra);
  }

  /* Video local del paquete: ruta, poster y subtitulos son propiedades de la pantalla y se
     asignan con setAttribute, nunca dentro de una cadena de marcado. Sin «muted»: en el curso
     la locucion es la pieza. */
  function renderVideo(caja, pant) {
    var marco = crear("div", "video-wrap");
    var v = document.createElement("video");
    v.setAttribute("controls", "");
    v.setAttribute("preload", "none");
    v.setAttribute("playsinline", "");
    if (pant.poster) v.setAttribute("poster", pant.poster);
    var fuente = document.createElement("source");
    fuente.setAttribute("src", pant.video);
    fuente.setAttribute("type", "video/mp4");
    v.appendChild(fuente);
    if (pant.subtitulos) {
      var pista = document.createElement("track");
      pista.setAttribute("kind", "subtitles");
      pista.setAttribute("srclang", "es");
      pista.setAttribute("label", "Español");
      pista.setAttribute("default", "");
      pista.setAttribute("src", pant.subtitulos);
      v.appendChild(pista);
    }
    marco.appendChild(v);
    var pie = crear("div", "video-titulo");
    pie.textContent = pant.titulo + (pant.duracion ? " · " + pant.duracion : "");
    marco.appendChild(pie);
    caja.appendChild(marco);
  }

  function renderVF(caja, pant) {
    var respondidos = 0, aciertos = 0;
    var zonaFinal = crear("div");
    pant.items.forEach(function (item, n) {
      var act = crear("div", "actividad");
      act.appendChild(crear("div", "act-instruccion", (n + 1) + ". " + item.t));
      var zonaRetro = crear("div");
      ["Verdadero", "Falso"].forEach(function (etq, idx) {
        var esV = idx === 0;
        var b = crear("button", "opcion", etq);
        b.addEventListener("click", function () {
          act.querySelectorAll(".opcion").forEach(function (x) { x.disabled = true; });
          var acierta = (esV === item.v);
          b.classList.add(acierta ? "correcta" : "incorrecta");
          zonaRetro.innerHTML = "";
          zonaRetro.appendChild(crear("div", "retro " + (acierta ? "ok" : "no"),
            (acierta ? "<strong>¡Correcto!</strong> " : "<strong>La respuesta era «" + (item.v ? "Verdadero" : "Falso") + "».</strong> ") + (item.retro || "")));
          respondidos++;
          if (acierta) aciertos++;
          if (respondidos === pant.items.length) registrarEvaluacion(pant, aciertos, pant.items.length, zonaFinal);
        });
        act.appendChild(b);
      });
      act.appendChild(zonaRetro);
      caja.appendChild(act);
    });
    caja.appendChild(zonaFinal);
  }

  function renderClasificar(caja, pant) {
    var act = crear("div", "actividad");
    act.appendChild(crear("div", "act-instruccion", pant.instruccion));
    var fichasZona = crear("div", "clasif-fichas");
    var cats = crear("div", "clasif-cats");
    var seleccion = null;
    var pendientes = barajar(pant.fichas).length;
    var aciertos = 0;

    var zonas = {};
    pant.categorias.forEach(function (cat) {
      var c = crear("div", "cat");
      var h = crear("h4", null, esc(cat.nombre)); h.style.color = cat.color || "var(--c-azul)";
      c.appendChild(h);
      var z = crear("div", "cat-zona");
      c.appendChild(z);
      zonas[cat.id] = z;
      c.addEventListener("click", function () {
        if (!seleccion) return;
        var ficha = seleccion; seleccion = null;
        var ok = ficha.dataset.cat === cat.id;
        var puesta = crear("span", "ficha-puesta " + (ok ? "ok" : "no"), esc(ficha.textContent));
        puesta.title = ok ? "Correcto" : "Iba en otra categoría";
        z.appendChild(puesta);
        if (!ok) {
          var buena = crear("span", "ficha-puesta ok", esc(ficha.textContent));
          zonas[ficha.dataset.cat].appendChild(buena);
        }
        ficha.remove();
        pendientes--;
        if (ok) aciertos++;
        if (pendientes === 0) {
          act.appendChild(crear("div", "retro info", pant.cierre || "Actividad completada. Revisa dónde quedó cada caso."));
          registrarEvaluacion(pant, aciertos, pant.fichas.length, act);
        }
        act.querySelectorAll(".cat").forEach(function (x) { x.classList.remove("recibe"); });
      });
      cats.appendChild(c);
    });

    barajar(pant.fichas).forEach(function (f) {
      var b = crear("button", "ficha", esc(f.t));
      b.dataset.cat = f.cat;
      b.addEventListener("click", function (ev) {
        ev.stopPropagation();
        act.querySelectorAll(".ficha").forEach(function (x) { x.classList.remove("seleccionada"); });
        b.classList.add("seleccionada");
        seleccion = b;
        act.querySelectorAll(".cat").forEach(function (x) { x.classList.add("recibe"); });
      });
      fichasZona.appendChild(b);
    });

    act.appendChild(crear("p", null, "<em>Toca un caso y luego la categoría donde corresponde.</em>"));
    act.appendChild(fichasZona);
    act.appendChild(cats);
    caja.appendChild(act);
  }

  function renderFlash(caja, pant) {
    var act = crear("div", "actividad");
    act.appendChild(crear("div", "act-instruccion", pant.instruccion || "Toca cada tarjeta para ver la definición oficial:"));
    var grid = crear("div", "flash-grid");
    pant.tarjetas.forEach(function (t) {
      var f = crear("div", "flash");
      f.setAttribute("role", "button"); f.setAttribute("tabindex", "0");
      var inner = crear("div", "flash-inner");
      inner.appendChild(crear("div", "flash-cara flash-frente", esc(t.frente)));
      inner.appendChild(crear("div", "flash-cara flash-dorso", esc(t.dorso)));
      f.appendChild(inner);
      function voltear() { f.classList.toggle("volteada"); }
      f.addEventListener("click", voltear);
      f.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); voltear(); } });
      grid.appendChild(f);
    });
    act.appendChild(grid);
    caja.appendChild(act);
  }

  function renderOrdenar(caja, pant) {
    var act = crear("div", "actividad");
    act.appendChild(crear("div", "act-instruccion", pant.instruccion));
    var lista = crear("div");
    var orden = barajar(pant.pasos.map(function (t, i) { return { t: t, pos: i }; }));
    /* evitar que salga ya ordenada */
    var yaOrdenada = orden.every(function (x, i) { return x.pos === i; });
    if (yaOrdenada && orden.length > 1) { var t0 = orden[0]; orden[0] = orden[1]; orden[1] = t0; }

    function pintar() {
      lista.innerHTML = "";
      orden.forEach(function (item, i) {
        var fila = crear("div", "orden-item");
        fila.appendChild(crear("span", "num", (i + 1) + "."));
        fila.appendChild(crear("span", null, esc(item.t)));
        var fl = crear("span", "flechas");
        var up = crear("button", null, "▲"); up.disabled = i === 0;
        var dn = crear("button", null, "▼"); dn.disabled = i === orden.length - 1;
        up.addEventListener("click", function () { orden.splice(i - 1, 0, orden.splice(i, 1)[0]); pintar(); });
        dn.addEventListener("click", function () { orden.splice(i + 1, 0, orden.splice(i, 1)[0]); pintar(); });
        fl.appendChild(up); fl.appendChild(dn);
        fila.appendChild(fl);
        lista.appendChild(fila);
      });
    }
    pintar();
    var comprobar = crear("button", "btn btn-primario", "Comprobar orden");
    var zonaRetro = crear("div");
    comprobar.addEventListener("click", function () {
      var todoOk = true;
      lista.querySelectorAll(".orden-item").forEach(function (fila, i) {
        var ok = orden[i].pos === i;
        fila.classList.remove("ok", "no");
        fila.classList.add(ok ? "ok" : "no");
        if (!ok) todoOk = false;
      });
      zonaRetro.innerHTML = "";
      zonaRetro.appendChild(crear("div", "retro " + (todoOk ? "ok" : "no"),
        todoOk ? "<strong>¡Correcto!</strong> " + (pant.cierre || "") : "Aún hay pasos fuera de lugar: los marcados en rojo. Reordena y vuelve a comprobar."));
    });
    act.appendChild(lista);
    act.appendChild(comprobar);
    act.appendChild(zonaRetro);
    caja.appendChild(act);
  }

  function renderEmparejar(caja, pant) {
    var act = crear("div", "actividad");
    act.appendChild(crear("div", "act-instruccion", pant.instruccion));
    var opciones = barajar(pant.pares.map(function (p) { return p.der; }));
    var filas = [];
    pant.pares.forEach(function (p) {
      var fila = crear("div", "pareja");
      fila.appendChild(crear("label", null, esc(p.izq)));
      var sel = crear("select");
      sel.appendChild(crear("option", null, "— elige —"));
      opciones.forEach(function (o) { var op = crear("option", null, esc(o)); op.value = o; sel.appendChild(op); });
      fila.appendChild(sel);
      filas.push({ fila: fila, sel: sel, correcto: p.der });
      act.appendChild(fila);
    });
    var comprobar = crear("button", "btn btn-primario", "Comprobar");
    var zonaRetro = crear("div");
    comprobar.addEventListener("click", function () {
      var aciertos = 0;
      filas.forEach(function (f) {
        var ok = f.sel.value === f.correcto;
        f.fila.classList.remove("ok", "no");
        f.fila.classList.add(ok ? "ok" : "no");
        if (ok) aciertos++;
      });
      zonaRetro.innerHTML = "";
      if (pant.evalua) {
        /* En un ejercicio que evalua, el primer «Comprobar» es el intento: se bloquea, y se
           vuelve a intentar desde cero con el boton, no corrigiendo las marcadas en rojo. */
        filas.forEach(function (f) { f.sel.disabled = true; });
        comprobar.disabled = true;
        zonaRetro.appendChild(crear("div", "retro " + (aciertos === filas.length ? "ok" : "no"),
          "Tienes " + aciertos + " de " + filas.length + " correctas. " + (pant.cierre || "")));
        registrarEvaluacion(pant, aciertos, filas.length, zonaRetro);
        return;
      }
      zonaRetro.appendChild(crear("div", "retro " + (aciertos === filas.length ? "ok" : "no"),
        aciertos === filas.length ? "<strong>¡Correcto!</strong> " + (pant.cierre || "")
          : "Tienes " + aciertos + " de " + filas.length + " correctas. Corrige las marcadas en rojo."));
    });
    act.appendChild(comprobar);
    act.appendChild(zonaRetro);
    caja.appendChild(act);
  }

  function renderExamen(caja, pant) {
    var minimo = pant.minimo || CONTENIDO.aprobacion || 60;
    if (estado.examen !== null) {
      caja.appendChild(resumenExamen(estado.examen, minimo, pant, caja));
    }
    var form = crear("div");
    var respuestas = pant.preguntas.map(function () { return null; });
    pant.preguntas.forEach(function (preg, i) {
      var bloque = crear("div", "examen-preg");
      bloque.appendChild(crear("h3", null, (i + 1) + ". " + preg.t));
      preg.opciones.forEach(function (op, j) {
        var b = crear("button", "opcion", op.t);
        b.addEventListener("click", function () {
          respuestas[i] = j;
          bloque.querySelectorAll(".opcion").forEach(function (x) { x.style.borderColor = ""; x.style.background = ""; });
          b.style.borderColor = "var(--c-azul)"; b.style.background = "var(--c-fondo)";
        });
        bloque.appendChild(b);
      });
      form.appendChild(bloque);
    });
    var enviar = crear("button", "btn btn-primario", "Enviar evaluación");
    var zona = crear("div");
    enviar.addEventListener("click", function () {
      if (respuestas.some(function (r) { return r === null; })) {
        zona.innerHTML = "";
        zona.appendChild(crear("div", "retro no", "Responde todas las preguntas antes de enviar."));
        return;
      }
      var aciertos = 0;
      pant.preguntas.forEach(function (preg, i) { if (preg.opciones[respuestas[i]].ok) aciertos++; });
      var puntaje = Math.round(aciertos * 100 / pant.preguntas.length);
      /* Se conserva y reporta el mejor resultado entre intentos */
      var mejor = Math.max(puntaje, estado.examen === null ? 0 : estado.examen);
      estado.examen = mejor;
      SCORM.reportarNota(mejor, mejor >= minimo);
      guardar();
      zona.innerHTML = "";
      zona.appendChild(resumenExamen(puntaje, minimo, pant, caja));
      zona.scrollIntoView({ behavior: "smooth" });
    });
    form.appendChild(enviar);
    form.appendChild(zona);
    caja.appendChild(form);
  }

  function resumenExamen(puntaje, minimo, pant) {
    var aprobado = puntaje >= minimo;
    var esEjercicio = pant.tipo !== "examen";
    var r = crear("div", "resultado-examen " + (aprobado ? "aprobado" : "reprobado"));
    r.appendChild(crear("div", "puntaje", puntaje + "%"));
    r.appendChild(crear("p", null, aprobado
      ? (esEjercicio
        ? "<strong>Aprobaste este módulo.</strong> Tu resultado quedó registrado en la plataforma."
        : "<strong>¡Felicitaciones, aprobaste!</strong> Tu resultado quedó registrado en la plataforma.")
      : (esEjercicio
        ? "Necesitas " + minimo + "% para aprobar el módulo. Revisa lo marcado y vuelve a intentarlo: se registra tu mejor resultado."
        : "Necesitas " + minimo + "% para aprobar. Repasa los módulos y vuelve a intentarlo: puedes responder la evaluación otra vez.")));
    return r;
  }

  /* ---------- Navegación ---------- */
  function irA(i) {
    if (i < 0 || i >= P.length) return;
    estado.actual = i;
    render();
  }

  /* ---------- Arranque ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    SCORM.init();
    if (SCORM.esLocal()) {
      var aviso = crear("div", "aviso-local",
        "Vista previa sin LMS: el avance se guarda solo en este navegador.");
      document.body.insertBefore(aviso, el("#app"));
    }
    var estatusPrevio = SCORM.get("cmi.core.lesson_status");
    if (estatusPrevio === "not attempted" || estatusPrevio === "") SCORM.marcarIncompleto();

    document.title = CONTENIDO.titulo;
    el("#titulo-curso").textContent = CONTENIDO.titulo;
    restaurar();
    /* Deep-link para QA: index.html#p12 abre la pantalla 13 (índice base 0) */
    var m = /^#p(\d+)$/.exec(location.hash || "");
    if (m) { var idx = parseInt(m[1], 10); if (idx >= 0 && idx < P.length) estado.actual = idx; }
    el("#btn-anterior").addEventListener("click", function () { irA(estado.actual - 1); });
    el("#btn-siguiente").addEventListener("click", function () { irA(estado.actual + 1); });
    el("#btn-menu").addEventListener("click", function () { el("#indice").classList.toggle("oculto"); });
    render();
  });
})();
