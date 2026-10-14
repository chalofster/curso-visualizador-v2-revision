/* Wrapper SCORM 1.2 — autocontenido, sin dependencias.
   Busca window.API en la jerarquía de frames (hasta 10 niveles) según el estándar.
   Si no hay LMS (apertura directa del index.html), opera en modo local con localStorage
   para que el curso siga siendo navegable y el avance no se pierda. */
(function () {
  "use strict";

  function buscarAPI(win) {
    var intentos = 0;
    while (win && intentos < 10) {
      if (win.API) return win.API;
      if (win.parent && win.parent !== win) { win = win.parent; intentos++; continue; }
      break;
    }
    if (window.opener) {
      try { return buscarAPI(window.opener); } catch (e) { /* cross-origin */ }
    }
    return null;
  }

  var api = null;
  var iniciado = false;
  var modoLocal = false;
  var CLAVE_LOCAL = "scorm_local_" + (window.CONTENIDO ? CONTENIDO.id : "curso");

  var SCORM = {
    init: function () {
      api = buscarAPI(window);
      if (api) {
        var ok = api.LMSInitialize("");
        iniciado = (ok === "true" || ok === true);
        if (!iniciado) { modoLocal = true; }
      } else {
        modoLocal = true;
      }
      return iniciado;
    },
    esLocal: function () { return modoLocal; },
    get: function (elemento) {
      if (iniciado) return api.LMSGetValue(elemento);
      if (elemento === "cmi.suspend_data") {
        try { return localStorage.getItem(CLAVE_LOCAL) || ""; } catch (e) { return ""; }
      }
      return "";
    },
    set: function (elemento, valor) {
      if (iniciado) return api.LMSSetValue(elemento, String(valor));
      if (elemento === "cmi.suspend_data") {
        try { localStorage.setItem(CLAVE_LOCAL, String(valor)); } catch (e) { /* lleno */ }
      }
      return "true";
    },
    commit: function () {
      if (iniciado) return api.LMSCommit("");
      return "true";
    },
    fin: function () {
      if (iniciado) { api.LMSCommit(""); api.LMSFinish(""); iniciado = false; }
    },
    /* Atajos de reporte */
    guardarAvance: function (cadena) {
      /* cmi.suspend_data admite máx. 4096 caracteres en SCORM 1.2 */
      if (cadena.length > 4000) { cadena = cadena.substring(0, 4000); }
      this.set("cmi.suspend_data", cadena);
      this.commit();
    },
    leerAvance: function () { return this.get("cmi.suspend_data"); },
    marcarIncompleto: function () { this.set("cmi.core.lesson_status", "incomplete"); this.commit(); },
    marcarCompleto: function () { this.set("cmi.core.lesson_status", "completed"); this.commit(); },
    reportarNota: function (puntaje, aprobado) {
      this.set("cmi.core.score.min", "0");
      this.set("cmi.core.score.max", "100");
      this.set("cmi.core.score.raw", String(Math.round(puntaje)));
      this.set("cmi.core.lesson_status", aprobado ? "passed" : "failed");
      this.commit();
    }
  };

  window.addEventListener("beforeunload", function () { SCORM.fin(); });
  window.SCORM = SCORM;
})();
