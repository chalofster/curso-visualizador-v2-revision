const CONTENIDO = {
  id: "cl.ine.censo.visualizador-v2.M1",
  titulo: "Curso Visualizador Geográfico Censo 2024 · M1 — ¿Cómo veo un indicador en mi comuna?",
  aprobacion: 60,
  modulos: [
    {id: "B", titulo: "Bienvenida", color: "var(--ine-blue)"},
    {id: "M1", titulo: "¿Cómo veo un indicador en mi comuna?", color: "var(--accent-category)"}
  ],
  pantallas: [

{ modulo: 0, tipo: "contenido", titulo: "Bienvenida",
  html: "<div class='portada'>" +
    "<div class='logos'>" +
    "<img src='assets/logos/logo-ine-original-recorte.png' alt='Instituto Nacional de Estadísticas, Chile'>" +
    "<img src='assets/logos/logo-censo-color-transparente.png' alt='Censo 2024, Población y Vivienda Chile'>" +
    "</div>" +
    "<p class='bajada'>Curso de uso e interpretación del Visualizador Geográfico Censo 2024</p>" +
    "</div>" +
    "<p>Este curso te prepara para usar el Visualizador Geográfico Censo 2024 y, sobre todo, para <strong>leer bien lo que muestra</strong>. No es un manual de la herramienta: acá trabajamos el criterio con que se lee un mapa.</p>" +
    "<p>Se organiza en <strong>cinco preguntas</strong>, una por módulo. Cada módulo es corto: un video del recorrido, una práctica sobre el visualizador real, un caso con datos del censo y un ejercicio.</p>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Módulo</th><th scope='col'>Pregunta</th></tr></thead><tbody>" +
    "<tr><td><strong>1</strong></td><td><strong>¿Cómo veo un indicador en mi comuna?</strong> · este módulo</td></tr>" +
    "<tr><td>2</td><td>¿Cómo armo mi ficha territorial?</td></tr>" +
    "<tr><td>3</td><td>¿Cómo comparo dos indicadores?</td></tr>" +
    "<tr><td>4</td><td>¿Cómo mido o delimito un área?</td></tr>" +
    "<tr><td>5</td><td>¿Cómo descargo los datos y el mapa?</td></tr>" +
    "</tbody></table></div>" +
    "<p>Los módulos se publican de a uno. Este primero trae la regla más importante del curso: <strong>un dato, muchos mapas</strong>.</p>" +
    "<div class='zigzag'></div>" },

{ modulo: 0, tipo: "contenido", titulo: "El Visualizador Geográfico Censo 2024",
  html: "<p>El <strong>Visualizador Geográfico Censo 2024</strong> es la herramienta pública del Instituto Nacional de Estadísticas (INE) para consultar los resultados del censo sobre el territorio. Trae dos funciones clave: la <strong>ficha territorial</strong> y el <strong>mapa comparado</strong>.</p>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_vista_general.png' alt='Vista general del visualizador con Quilpué seleccionada: a la izquierda, el panel para elegir qué mirar; al centro, el mapa por comunas del porcentaje de personas de 15 años o más que no saben leer o escribir, con su leyenda; a la derecha, el panel de detalles de Quilpué, con el botón Crear ficha territorial al pie'>" +
    "<span class='rot' style='left:1.5%;top:75%'>1 · Qué mirar</span>" +
    "<span class='rot' style='left:36%;top:13%'>2 · El mapa</span>" +
    "<span class='rot' style='right:1.5%;top:62%'>3 · Los detalles</span>" +
    "</div><figcaption><span class='paso-num'>1</span> A la izquierda eliges qué mirar. <span class='paso-num'>2</span> Al centro, el mapa. <span class='paso-num'>3</span> A la derecha, los detalles del territorio que selecciones; al pie, «Crear ficha territorial» abre su ficha.</figcaption></figure>" +
    "<div class='destacado'><p><strong>Si buscas «Compartir»:</strong> en el mapa no hay un botón para compartir la vista. Está en la ficha territorial, como «Compartir vista», y copia un enlace a la ficha con su configuración.</p></div>" +
    "<p>Las definiciones oficiales, las notas técnicas y los manuales del Censo 2024 están en la <a href='https://censo2024.ine.gob.cl/resultados/' target='_blank' rel='noopener' style='color:var(--c-azul)'>página de resultados del censo</a> (se abre en otra pestaña). El curso cita la página exacta de cada documento donde usa un concepto.</p>" },

{ modulo: 0, tipo: "contenido", titulo: "Cómo se practica en este curso",
  html: "<p>Cada módulo sigue los mismos cuatro pasos:</p>" +
    "<ol class='flujo'>" +
    "<li><span class='paso-num'>1</span><strong>Mira</strong>El video del recorrido, con un ejemplo real.</li>" +
    "<li class='fuera'><span class='paso-num'>2</span><span class='etiqueta'>En otra pestaña</span><strong>Practica</strong>Una misión sobre el visualizador en vivo.</li>" +
    "<li><span class='paso-num'>3</span><strong>Contrasta y lee</strong>De vuelta en el curso, compruebas tu resultado y lees un caso con datos del censo.</li>" +
    "<li><span class='paso-num'>4</span><strong>Demuestra</strong>Respondes el ejercicio: es la evaluación del módulo.</li>" +
    "</ol>" +
    "<p>En cada módulo vas a salir a trabajar sobre el visualizador real, con datos del censo. Ábrelo <strong>en otra pestaña</strong> y déjalo abierto: lo vas a necesitar en unos minutos.</p>" +
    "<p><a class='enlace-externo' href='https://storage.googleapis.com/visualizador_v2/index.html' target='_blank' rel='noopener'>Abrir el visualizador en una pestaña nueva</a></p>" +
    "<p>Si te pierdes dentro de la herramienta, vuelve al video del módulo: muestra el camino completo sobre la pantalla real, y cada misión trae una ayuda plegable con lo que suele fallar.</p>" },

{ modulo: 1, tipo: "video", titulo: "El recorrido, en video",
  html: "<p>El camino completo, de corrido, con Quilpué como ejemplo. Fíjate en el orden: primero <strong>qué</strong> mirar —temática e indicador—, después <strong>dónde</strong> y al final <strong>a qué escala</strong>. En el visualizador, ese orden se sigue siempre.</p>",
  video: "assets/video/E-R1-video.mp4",
  poster: "assets/video/E-R1-video.jpg",
  subtitulos: "assets/video/E-R1-video.vtt",
  duracion: "1:12" },

{ modulo: 1, tipo: "contenido", titulo: "Misión: tu comuna en el mapa",
  html: "<p>Ahora te toca a ti, sobre el visualizador en vivo. Una pista para el primer paso: los datos se ordenan en tres dimensiones —<strong>Población, Hogares y Viviendas</strong>— que se abren en 35 temáticas. La primera pregunta es qué cuentas: personas, hogares o viviendas.</p>" +
    "<div class='mision'><div class='m-cab'>Misión · sobre el visualizador en vivo</div><div class='m-cuerpo'>" +
    "<ol>" +
    "<li>Abre el visualizador con el enlace de abajo. La primera vez te pide aceptar los términos de uso: marca la casilla y pulsa <strong>«Aceptar»</strong>.</li>" +
    "<li>Elige la temática <strong>Edad</strong>, en la dimensión Población, y el indicador <strong>Personas de 60 años o más</strong>.</li>" +
    "<li>Elige tu región y marca tu comuna en la lista.</li>" +
    "<li>Mira el control del nivel geográfico: ¿qué nivel eligió el modo automático?</li>" +
    "<li>Cambia el nivel a <strong>«Zonas - Localidades»</strong> y acércate a la ciudad.</li>" +
    "</ol>" +
    "<details class='ayuda'><summary>¿No encuentras tu comuna?</summary><div class='ayuda-cuerpo'><ul>" +
    "<li><strong>Primero, la región.</strong> La lista de comunas muestra solo las de la región que marcaste. Si tu comuna no aparece, revisa que marcaste la región correcta.</li>" +
    "<li><strong>Usa el campo «Buscar comuna...».</strong> La lupa que está junto al menú de temáticas es otro buscador: busca indicadores, no comunas.</li>" +
    "<li><strong>Escribir no basta:</strong> cuando tu comuna aparezca en la lista, marca su casilla.</li>" +
    "<li><strong>Míralo hecho:</strong> en el video de la pantalla anterior, entre el 0:25 y el 0:39 se eligen la región y la comuna.</li>" +
    "</ul></div></details>" +
    "<p><a class='enlace-externo' href='https://storage.googleapis.com/visualizador_v2/index.html' target='_blank' rel='noopener'>Ir al visualizador</a></p>" +
    "<label for='m1-respuesta'><strong>Anota dos cosas</strong></label>" +
    "<textarea id='m1-respuesta' rows='3' style='width:100%;font:inherit;padding:10px;border:2px solid var(--c-borde);border-radius:8px;margin-top:6px' placeholder='El nivel que eligió el automático y cuántos colores ves dentro de tu comuna con Zonas - Localidades'></textarea>" +
    "<div class='valor-esperado'><strong>Contrasta en la pantalla siguiente.</strong> Lo que escribas aquí no se envía ni se corrige.</div>" +
    "</div></div>" +
    "<div class='tarjeta'><h3>Conceptos de esta pantalla</h3><p>Definiciones oficiales del INE. Cada enlace abre el documento (PDF) en otra pestaña, en la página citada.</p><p><strong>Vivienda particular:</strong> «toda construcción estructuralmente separada e independiente ubicada dentro de un sitio, la cual se encuentra destinada, total o parcialmente, para el alojamiento de personas y hogares». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/03/Glosario_CPV2024-1.pdf#page=1' target='_blank' rel='noopener' style='color:var(--c-azul)'>Glosario de conceptos generales, p. 1</a></p><p><strong>Hogar:</strong> «una o más personas, que residen en una misma vivienda o parte de ella y se benefician de un mismo presupuesto para alimentación. Las personas que conforman un hogar pueden tener vínculos familiares o no». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/03/Glosario_CPV2024-1.pdf#page=1' target='_blank' rel='noopener' style='color:var(--c-azul)'>Glosario de conceptos generales, p. 1</a></p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Cómo se resuelve",
  html: "<p>Al marcar tu comuna, el mapa se acerca a ella y el modo automático cambia de nivel por su cuenta. Si quedó en <strong>«Centros Urbanos - Aldeas»</strong>, cada ciudad o aldea es una sola unidad con un solo valor: por eso tu comuna se veía de uno o de muy pocos colores. Si tu comuna es muy extensa, pudo quedar en «Comunas»: una sola unidad, un solo color. Con «Zonas - Localidades» aparecieron las diferencias dentro de ella. <strong>El indicador era el mismo; cambió el nivel.</strong></p>" +
    "<h2>Cómo decide el automático</h2>" +
    "<p>En «Automático (según zoom)» el mapa elige el nivel por <strong>cuánta superficie tienes a la vista</strong>: regiones sobre 500.000 km², comunas entre 5.000 y 500.000 km² y, bajo 5.000 km², centros urbanos y aldeas. <strong>Ahí se detiene</strong>: zonas y manzanas se eligen a mano. El control del nivel lo indica con una letra, <strong>«A»</strong> si el nivel es automático y <strong>«M»</strong> si lo elegiste tú. Un nivel elegido a mano queda fijo hasta que vuelvas a «Automático (según zoom)»; solo zonas y manzanas se sueltan solas si te alejas bajo el zoom 12.</p>" +
    "<div class='escala' role='group' aria-label='Hasta dónde llega el nivel automático'><div class='escala-cuerpo'>" +
    "<div class='escala-grupo auto'><p class='escala-cab'>Los elige el automático <span class='nivel-letra'>A</span></p><ol>" +
    "<li>Regiones<small>Sobre 500.000 km² a la vista</small></li>" +
    "<li>Comunas<small>Entre 5.000 y 500.000 km²</small></li>" +
    "<li>Centros Urbanos - Aldeas<small>Bajo 5.000 km²</small></li>" +
    "</ol></div>" +
    "<div class='escala-tope'>Aquí se detiene</div>" +
    "<div class='escala-grupo mano'><p class='escala-cab'>Solo a mano <span class='nivel-letra'>M</span></p><ol>" +
    "<li>Zonas - Localidades<small>Lo eliges en el control del nivel</small></li>" +
    "<li>Manzanas - Entidades<small>Lo eliges en el control del nivel</small></li>" +
    "</ol></div>" +
    "</div><p class='escala-eje'><span>Más territorio a la vista</span><span>Más cerca</span></p></div>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Nivel</th><th scope='col'>La pregunta que responde</th></tr></thead><tbody>" +
    "<tr><td><strong>Regiones</strong></td><td>¿Cómo se distribuye en el país?</td></tr>" +
    "<tr><td><strong>Comunas</strong></td><td>¿Cómo se compara mi comuna con las demás?</td></tr>" +
    "<tr><td><strong>Centros Urbanos - Aldeas</strong></td><td>¿Qué pasa en las ciudades y pueblos, y no en todo el territorio comunal?</td></tr>" +
    "<tr><td><strong>Zonas - Localidades</strong></td><td>¿Cómo se distribuye dentro de la comuna?</td></tr>" +
    "<tr><td><strong>Manzanas - Entidades</strong></td><td>¿Dónde exactamente, a escala de barrio?</td></tr>" +
    "</tbody></table></div>" +
    "<h2>Tu comuna frente a la región y el país</h2>" +
    "<p>Con el nivel en «Comunas», al hacer clic en tu comuna sobre el mapa, el panel de la derecha muestra bajo su valor el <strong>contexto geográfico</strong>: el mismo indicador en los territorios que la contienen. Para las personas de 60 años o más:</p>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Territorio</th><th scope='col'>Personas de 60 años o más</th></tr></thead><tbody>" +
    "<tr><td>Quilpué</td><td>24,1 % (39.250)</td></tr>" +
    "<tr><td>Región de Valparaíso</td><td>22,9 % (433.342)</td></tr>" +
    "<tr><td>País</td><td>19,8 % (3.665.028)</td></tr>" +
    "</tbody></table></div>" +
    "<p>Y en el nivel «Regiones», sin nada seleccionado, el panel muestra el <strong>valor nacional</strong> de todos los indicadores de la temática. Es la primera referencia para saber si un valor es alto o bajo.</p>" +
    "<div class='tarjeta'><h3>Conceptos de esta pantalla</h3><p>Definiciones oficiales del INE. Cada enlace abre el documento (PDF) en otra pestaña, en la página citada.</p><p><strong>Entidad urbana:</strong> «un asentamiento humano con continuidad y concentración de construcciones en un amanzanamiento regular con población mayor a 2.000 habitantes, o entre 1.001 y 2.000 habitantes donde menos del 50% de la población que declara haber trabajado se dedica a actividades primarias». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=20' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 20</a></p><p><strong>Aldea:</strong> «el área rural concentrada o “aldea”, también subdividida en manzanas». Tiene entre 301 y 2.000 habitantes, con «amanzanamiento, concentración, continuidad de construcciones». <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/N5_Nota%20Tecnica_indeterminacion_geografica_CPV2024.pdf#page=1' target='_blank' rel='noopener' style='color:var(--c-azul)'>Nota técnica 5, p. 1</a> · <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/Manual_uso_cartografia_CPV2024.pdf#page=6' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de cartografía, p. 6</a></p><p><strong>Entidad rural:</strong> «un asentamiento humano con población menor o igual a 1.000 habitantes, o entre 1.001 y 2.000 habitantes donde más del 50% de la población que declara haber trabajado se dedica a actividades primarias». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=20' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 20</a></p><p><strong>Zona censal y localidad:</strong> en el área urbana, «Entidad urbana → Zona Censal → Manzana»; en la rural, «Localidad → Entidad rural → Manzana aldea (solo en categoría Aldea)». Las traza el INE «con objetivos operativos, por lo que no revisten un carácter legal». <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/Manual_uso_cartografia_CPV2024.pdf#page=6' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de cartografía, p. 6</a></p><p><strong>Manzana:</strong> «la unidad geográfica básica con fines estadísticos que conforman zonas censales en áreas urbanas y aldeas en el ámbito rural, contiene un grupo de viviendas contiguas o separadas, edificios, establecimientos y/o predios, delimitados por rasgos geográficos, culturales y naturales». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=20' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 20</a></p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Un dato, muchos mapas",
  html: "<p>Estos dos mapas muestran el mismo indicador —personas de 60 años o más—, en el mismo territorio y con los mismos cortes. No cambió ni un número, y no se leen igual: en el de la derecha, Alto del Carmen parece una alerta.</p>" +
    "<div class='dos-columnas'>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_paleta_fria.png' alt='Mapa comunal del porcentaje de personas de 60 años o más en Atacama y Coquimbo, con paleta de amarillo a azul oscuro'>" +
    "</div><figcaption>Paleta YlGnBu.</figcaption></figure>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_paleta_calida.png' alt='El mismo mapa comunal y los mismos cortes, con paleta de amarillo a rojo intenso'>" +
    "</div><figcaption>Paleta YlOrRd. Mismos cortes: 19 %, 21,3 %, 23,2 %, 25,1 % y 36,2 %.</figcaption></figure>" +
    "</div>" +
    "<p>Un mapa temático <strong>no es una fotografía del territorio</strong>: se construye con decisiones. Seis de ellas cambian lo que ves sin tocar el dato.</p>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Qué cambian</th><th scope='col'>Decisión</th></tr></thead><tbody>" +
    "<tr><td rowspan='4'><strong>El color que recibe cada territorio</strong></td><td>La paleta</td></tr>" +
    "<tr><td>«% Relativo» o «# Absoluto», en el control «Ver:»</td></tr>" +
    "<tr><td>El método de clasificación, que cambia junto con «Ver:»</td></tr>" +
    "<tr><td>El nivel geográfico</td></tr>" +
    "<tr><td rowspan='2'><strong>Cómo se ve ese color</strong></td><td>La transparencia</td></tr>" +
    "<tr><td>El mapa base</td></tr>" +
    "</tbody></table></div>" +
    "<div class='destacado'><p>Por eso, antes de leer un color, lee la <strong>leyenda</strong>: el nombre del indicador, los cortes bajo la barra y, al pie, el método de clasificación. Ahí están escritas las decisiones.</p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "El caso de Atacama: el nivel decide los cortes",
  html: "<p>Los cinco tramos de color se calculan con <strong>todos los territorios del nivel activo</strong>. Si cambia el nivel, cambia el universo que se clasifica, y con él los cortes. Estas dos imágenes tienen el mismo encuadre, el mismo indicador y la misma paleta; solo cambió el nivel.</p>" +
    "<div class='dos-columnas'>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_nivel_regiones.png' alt='Mapa por regiones: Atacama aparece como un solo bloque verde claro y Coquimbo como un solo bloque turquesa'>" +
    "</div><figcaption>Nivel «Regiones». Cortes: 18,2 · 19,2 · 20,8 · 21,5 %; máximo 23,3 %.</figcaption></figure>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_nivel_comunas.png' alt='El mismo encuadre por comunas: el territorio de Atacama se abre en comunas que van del amarillo pálido al azul oscuro'>" +
    "</div><figcaption>Nivel «Comunas». Cortes: 19 · 21,3 · 23,2 · 25,1 %; máximo 36,2 %.</figcaption></figure>" +
    "</div>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Nivel</th><th scope='col'>Territorio</th><th scope='col'>60 años o más</th><th scope='col'>Clase</th></tr></thead><tbody>" +
    "<tr><td>Regiones</td><td>Región de Atacama</td><td>18,3 %</td><td>2.ª de cinco</td></tr>" +
    "<tr><td>Comunas</td><td>Copiapó</td><td>16,3 %</td><td>1.ª, la más baja</td></tr>" +
    "<tr><td>Comunas</td><td>Alto del Carmen</td><td>28,2 %</td><td>5.ª, la más alta</td></tr>" +
    "</tbody></table></div>" +
    "<p>Casi <strong>doce puntos</strong> separan a dos comunas de una región que el mapa por regiones pinta de un solo tono. Y el 18,3 % regional no describe a ninguna de las dos.</p>" +
    "<h2>El color dice el orden, no la distancia</h2>" +
    "<p>En el mapa por regiones, la clase más clara reúne a Tarapacá (14,0 %) y a Arica y Parinacota (17,8 %), con 3,8 puntos entre ellas. Magallanes (20,6 %) y Biobío (20,8 %), en cambio, quedan en clases distintas por 0,2 puntos. Las cinco franjas de la leyenda miden lo mismo en pantalla: la distancia real la dicen sus números.</p>" +
    "<div class='advertencia'><p><strong>El automático cambia de nivel solo.</strong> Al acercarte, pasa de regiones a comunas y de ahí a centros urbanos, y cada cambio recalcula los cortes. Antes de comparar o exportar un mapa, mira qué nivel indica el control y qué cortes tiene la leyenda.</p></div>" +
    "<p><em>Cifras en vista nacional, con el nivel fijado y sin filtrar un territorio. Si filtras una región, el visualizador recalcula los cortes.</em></p>" },

{ modulo: 1, tipo: "contenido", titulo: "Porcentaje o cantidad",
  html: "<p>El control «Ver:» de la leyenda tiene dos posiciones que responden preguntas distintas. <strong>«% Relativo»</strong> dice qué proporción representa el indicador sobre su total; <strong>«# Absoluto»</strong>, cuántos casos son. Ninguna es la correcta en general. Dos comunas de Atacama, con el mismo indicador:</p>" +
    "<figure class='barras-par'><div class='bp-paneles'>" +
    "<div class='bp-panel'><p class='bp-titulo'>«% Relativo»<span>Qué proporción de su población tiene 60 años o más</span></p>" +
    "<div class='bp-fila'><span class='bp-etq'>Alto del Carmen</span><span class='bp-pista'><span class='bp-barra bp-a' style='width:66%'></span><span class='bp-valor'>28,2 %</span></span></div>" +
    "<div class='bp-fila'><span class='bp-etq'>Copiapó</span><span class='bp-pista'><span class='bp-barra bp-c' style='width:38.1%'></span><span class='bp-valor'>16,3 %</span></span></div>" +
    "</div>" +
    "<div class='bp-panel'><p class='bp-titulo'>«# Absoluto»<span>Cuántas personas de 60 años o más viven ahí</span></p>" +
    "<div class='bp-fila'><span class='bp-etq'>Alto del Carmen</span><span class='bp-pista'><span class='bp-barra bp-a' style='width:3.24%'></span><span class='bp-valor'>1.349</span></span></div>" +
    "<div class='bp-fila'><span class='bp-etq'>Copiapó</span><span class='bp-pista'><span class='bp-barra bp-c' style='width:66%'></span><span class='bp-valor'>27.495</span></span></div>" +
    "</div></div>" +
    "<figcaption>Las mismas dos comunas y el mismo indicador. Cada panel tiene su propia escala: un porcentaje y una cantidad no se miden con la misma regla.</figcaption></figure>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Comuna</th><th scope='col'>«% Relativo»</th><th scope='col'>«# Absoluto»</th></tr></thead><tbody>" +
    "<tr><td>Alto del Carmen</td><td>28,2 % · la clase más alta</td><td>1.349 personas · la clase más baja</td></tr>" +
    "<tr><td>Copiapó</td><td>16,3 % · la clase más baja</td><td>27.495 personas · la 3.ª clase</td></tr>" +
    "</tbody></table></div>" +
    "<p>Alto del Carmen tiene la población más envejecida de la región; Copiapó, muchas más personas mayores. Los dos mapas son ciertos: responden preguntas distintas.</p>" +
    "<p>Al cambiar «Ver:» cambia también el método de clasificación —cuantiles en porcentaje, brechas naturales (Jenks) en cantidad—, y la línea al pie de la leyenda lo declara. «Ver:» aparece solo en los indicadores que tienen versión en porcentaje: en «Personas», por ejemplo, no está.</p>" +
    "<h2>Cuando el denominador es chico</h2>" +
    "<p>Una manzana de Quilpué tiene 77 personas: ahí, <strong>una sola persona mueve el porcentaje en 1,3 puntos</strong>. En la comuna completa, con 162.559 personas, la misma persona lo mueve en 0,0006. A nivel de manzana, mira también «# Absoluto» antes de afirmar algo.</p>" +
    "<div class='destacado'><p><strong>Antes de afirmar algo con un mapa</strong>, responde tres preguntas en la leyenda: ¿qué indicador es?, ¿porcentaje o cantidad?, ¿dónde caen los cortes? Y un gris no siempre es un cero: la casilla gris de la leyenda marca «0 o sin datos» (se lee al posar el cursor sobre ella). Lo vemos más adelante en el curso.</p></div>" },

{ modulo: 1, tipo: "emparejar", titulo: "Práctica: ¿dónde lo busco?",
  instruccion: "Práctica sin nota. Cada pregunta se responde con un indicador que vive en una dimensión y una temática del visualizador. Indica dónde lo buscarías.",
  pares: [
    { izq: "¿Cuántas viviendas de mi comuna se abastecen con camión aljibe?", der: "Viviendas · Fuente de agua para uso doméstico" },
    { izq: "¿Qué porcentaje de la población es inmigrante internacional?", der: "Población · Inmigración internacional" },
    { izq: "¿Cuántos hogares tienen acceso a internet?", der: "Hogares · Acceso a internet" },
    { izq: "¿Cuál es el promedio de escolaridad de las personas adultas?", der: "Población · Años de escolaridad" },
    { izq: "¿Cuántas viviendas están hacinadas?", der: "Viviendas · Espacio y ocupación de la vivienda" },
    { izq: "¿Con qué se calefaccionan los hogares de esta zona?", der: "Hogares · Energía o combustible para calefaccionar" },
    { izq: "¿Cuántas personas de 60 años o más viven acá?", der: "Población · Edad" }
  ],
  cierre: "Fíjate en el patrón: si la pregunta cuenta <strong>personas</strong>, la dimensión es Población; si cuenta <strong>hogares</strong>, Hogares; si cuenta <strong>viviendas</strong>, Viviendas. Una pregunta mal encuadrada lleva a la temática equivocada, y a un porcentaje calculado sobre otro total." },

{ modulo: 1, tipo: "clasificar", titulo: "Ejercicio: ¿qué cambió en el mapa?", evalua: true,
  html: "<p>Seis situaciones. En cada una, alguien tocó algo y el mapa se ve distinto, aunque el dato es el mismo. Decide si cambió <strong>el color que recibe cada territorio</strong> o solo <strong>cómo se ve ese color</strong>. Este ejercicio es la evaluación del módulo.</p>",
  instruccion: "Clasifica cada situación según lo que cambió:",
  categorias: [
    { id: "cod", nombre: "Cambió el color que recibe cada territorio" },
    { id: "pre", nombre: "Cambió solo cómo se ve el color" }
  ],
  fichas: [
    { t: "Cambié la paleta a «Viridis (daltonismo)» para proyectar el mapa", cat: "cod" },
    { t: "Moví el control «Transparencia» hasta ver las calles del fondo", cat: "pre" },
    { t: "Cambié el mapa base de «Claro» a «Satélite Esri»", cat: "pre" },
    { t: "Pasé el control «Ver:» de «% Relativo» a «# Absoluto»", cat: "cod" },
    { t: "Me acerqué y el nivel pasó solo de «Regiones» a «Comunas»", cat: "cod" },
    { t: "Elegí «Zonas - Localidades» en el control del nivel", cat: "cod" }
  ],
  cierre: "La paleta, «Ver:» y el nivel cambian el color asignado: la paleta cambia los colores de la leyenda, y «Ver:» y el nivel, además, sus cortes. La transparencia y el mapa base dejan la leyenda intacta: cambian cómo percibes el mismo color. Y fíjate en «me acerqué»: es la única en que el nivel cambió sin que lo eligieras." }
  ]
};
