const CONTENIDO = {
  id: "cl.ine.censo.visualizador-v2.M4",
  titulo: "Curso Visualizador Geográfico Censo 2024 · M4 — ¿Cómo mido o delimito un área?",
  aprobacion: 60,
  modulos: [
    {id: "B", titulo: "Presentación del módulo", color: "var(--ine-blue)"},
    {id: "M4", titulo: "¿Cómo mido o delimito un área?", color: "var(--accent-category)"}
  ],
  pantallas: [

{ modulo: 0, tipo: "contenido", titulo: "¿Qué necesitas hacer sobre el mapa?",
  html: "<p>Medir, juntar territorios, mirar alrededor de un punto: el visualizador tiene una herramienta para cada pregunta. Parte por la tuya:</p>" +
    "<div class='dos-columnas'>" +
    "<div class='tarjeta'><h3>¿Cuánto mide?</h3><p><span class='badge badge-1'>Medir distancia y área</span></p><p>La distancia entre dos puntos. Con tres o más, el perímetro y el área.</p></div>" +
    "<div class='tarjeta'><h3>¿Cuántos son, si junto varios territorios?</h3><p><span class='badge badge-2'>Selección múltiple</span></p><p>La suma de sus cantidades, aunque no estén juntos o sean de comunas distintas.</p></div>" +
    "</div>" +
    "<div class='dos-columnas'>" +
    "<div class='tarjeta'><h3>¿Qué hay alrededor de un punto?</h3><p><span class='badge badge-3'>Buffer (radio)</span></p><p>Los territorios completos que toca un círculo del radio que elijas.</p></div>" +
    "<div class='tarjeta'><h3>¿Qué hay dentro de un área que ya tengo?</h3><p><span class='badge'>Desde archivo</span></p><p>Los territorios que toca tu área, cargada desde un archivo GeoJSON o KML, entre otros formatos.</p></div>" +
    "</div>" +
    "<figure class='captura'><div class='marco' style='max-width:400px'>" +
    "<img src='assets/capturas/v2_m4_menu_herramientas.png' alt='Barra de herramientas de la izquierda con la llave inglesa activa y su menú «Herramientas»: Medir distancia y área y Selección múltiple, desplegada en Punteo individual, Mano alzada, Rectángulo, Buffer (radio), Polígono, Desde archivo y Limpiar selección'>" +
    "</div><figcaption>Todas están en la llave inglesa de la barra izquierda, «Herramientas de análisis». «Selección múltiple» despliega sus seis formas.</figcaption></figure>" +
    "<p>Este módulo enseña a usarlas y, sobre todo, <strong>qué se puede afirmar con el número que entregan</strong>. Y una cosa que el mapa no muestra: los territorios demasiado pequeños para publicarse por separado.</p>" },

{ modulo: 1, tipo: "video", titulo: "El recorrido, en video",
  html: "<p>Las herramientas de análisis, de corrido, sobre la Región Metropolitana: el menú de la llave inglesa, la selección con su suma y la medición de una distancia y de un área. Fíjate en el clic y el doble clic de la medición: es el detalle que más se equivoca.</p>",
  video: "assets/video/E-R4-video.mp4",
  poster: "assets/video/E-R4-video.jpg",
  subtitulos: "assets/video/E-R4-video.vtt",
  duracion: "0:55" },

{ modulo: 1, tipo: "contenido", titulo: "Misión: dos manzanas, dos comunas",
  html: "<p>Ahora sobre tu comuna: vas a juntar dos manzanas que no son de la misma comuna y a leer qué hace el panel con ellas.</p>" +
    "<div class='mision'><div class='m-cab'>Misión · sobre el visualizador en vivo</div><div class='m-cuerpo'>" +
    "<ol>" +
    "<li>Abre el visualizador con el enlace de abajo y acepta los términos de uso. Elige la temática <strong>Edad</strong> y el indicador <strong>«Personas de 60 años o más»</strong>. Marca <strong>solo tu región</strong>, sin comuna, y fija el nivel <strong>«Manzanas - Entidades»</strong>.</li>" +
    "<li>Acércate al límite entre tu comuna y una vecina.</li>" +
    "<li>Abre la llave inglesa: <strong>«Selección múltiple»</strong>, <strong>«Punteo individual»</strong>. Haz clic en una manzana de tu comuna y en otra de la vecina. Lee la cifra del panel derecho y lo que dice debajo.</li>" +
    "<li>El mapa está en <strong>«% Relativo»</strong>: lo deja así el indicador. Pásalo a <strong>«# Absoluto»</strong> y vuelve. ¿Cambió la cifra del panel?</li>" +
    "<li>Cambia el indicador a <strong>«Promedio de edad»</strong>. ¿Qué dice el panel?</li>" +
    "<li>Por último, en la llave, <strong>«Medir distancia y área»</strong>: clic en una de tus manzanas y doble clic en la otra. Anota la distancia.</li>" +
    "</ol>" +
    "<details class='ayuda'><summary>¿Algo no aparece como esperabas?</summary><div class='ayuda-cuerpo'><ul>" +
    "<li><strong>No puedes seleccionar la manzana de la comuna vecina:</strong> tienes una comuna marcada, y entonces solo se dibujan sus manzanas. Desmárcala y deja solo la región.</li>" +
    "<li><strong>No ves «Selección múltiple» ni «Medir distancia y área»:</strong> están en la llave inglesa. El menú se cierra con el primer clic en el mapa; la herramienta sigue activa.</li>" +
    "<li><strong>Al pasar el cursor aparece un cuadro con «Manzana 43 | Zona 3 | …»:</strong> identifica la manzana, pero ese número es el de la manzana dentro de su zona, no su código. El código de 13 dígitos, Manzent, está en el panel de la derecha y en el CSV.</li>" +
    "<li><strong>No encuentras «# Absoluto»:</strong> está en la leyenda, y con la tabla abierta la leyenda se oculta. Pulsa «Leyenda», bajo el mapa.</li>" +
    "<li><strong>La selección desapareció:</strong> se borra al cambiar de nivel. Fija el nivel antes de seleccionar.</li>" +
    "<li><strong>La distancia salió el doble y el área en cero:</strong> hiciste clic y además doble clic en el último punto. Basta el doble clic.</li>" +
    "</ul></div></details>" +
    "<p><a class='enlace-externo' href='https://storage.googleapis.com/visualizador_v2/index.html' target='_blank' rel='noopener'>Ir al visualizador</a></p>" +
    "<label for='m4-respuesta'><strong>Anota tus resultados</strong></label>" +
    "<textarea id='m4-respuesta' rows='3' style='width:100%;font:inherit;padding:10px;border:2px solid var(--c-borde);border-radius:8px;margin-top:6px' placeholder='La cifra del panel y lo que dice debajo; si cambió en # Absoluto; lo que dijo con el promedio; la distancia'></textarea>" +
    "<div class='valor-esperado'><strong>Contrasta en la pantalla siguiente.</strong> Lo que escribas aquí no se envía ni se corrige.</div>" +
    "</div></div>" +
    "<div class='tarjeta'><h3>Conceptos de esta pantalla</h3><p>Definiciones oficiales del INE. Cada enlace abre el documento (PDF) en otra pestaña, en la página citada.</p><p><strong>Manzana:</strong> «la unidad geográfica básica con fines estadísticos que conforman zonas censales en áreas urbanas y aldeas en el ámbito rural, contiene un grupo de viviendas contiguas o separadas, edificios, establecimientos y/o predios, delimitados por rasgos geográficos, culturales y naturales». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=20' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 20</a></p><p><strong>Entidad rural:</strong> «un asentamiento humano con población menor o igual a 1.000 habitantes, o entre 1.001 y 2.000 habitantes donde más del 50% de la población que declara haber trabajado se dedica a actividades primarias». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=20' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 20</a></p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Cómo se resuelve",
  html: "<p>Así se ve con una manzana de Quilpué y otra de Villa Alemana, una a cada lado del límite comunal:</p>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_m4_dos_manzanas.png' alt='Mapa de manzanas en el límite entre Quilpué y Villa Alemana, con dos manzanas vecinas seleccionadas a cada lado de la línea negra del límite comunal; a la derecha, el panel dice 2 elementos seleccionados, Quilpué, Villa Alemana, y 90 personas de 60 años o más, agregado de 2 elementos'>" +
    "<span class='rot' style='left:23%;top:30%'>1 · Una manzana de cada comuna</span>" +
    "<span class='rot' style='left:17%;top:80%'>2 · El límite comunal</span>" +
    "<span class='rot' style='left:53%;top:42%'>3 · El panel suma: 90</span>" +
    "</div><figcaption><span class='paso-num'>1</span> 39 personas de 60 años o más en la de Quilpué y 51 en la de Villa Alemana. <span class='paso-num'>2</span> La línea negra. <span class='paso-num'>3</span> «Σ Agregado de 2 elementos». Abajo, fuera de la imagen, se abre sola la «Tabla de datos · Selección actual», con un registro por manzana.</figcaption></figure>" +
    "<div class='comparacion'>" +
    "<div class='col'><h4>En «% Relativo» y en «# Absoluto»</h4><p class='cifra'>90</p><p class='detalle'>La misma cifra en los dos modos: el panel suma <strong>cantidades</strong>, nunca porcentajes. El porcentaje de las dos juntas no es la suma de sus porcentajes.</p></div>" +
    "<div class='col'><h4>Con «Promedio de edad»</h4><p class='cifra'>No suma</p><p class='detalle'>El panel dice que ese indicador no se agrega entre territorios. Es la regla del módulo 2, aplicada por la propia herramienta.</p></div>" +
    "</div>" +
    "<p><strong>Si una manzana no tiene el dato</strong>, el panel suma las que sí lo tienen y lo dice: «Σ Suma de 1 de 2 elementos (1 sin dato)». Con «Personas de 60 años o más» no apareció ninguna en Quilpué ni en Villa Alemana; con «Inmigrantes internacionales», sí.</p>" +
    "<p>La distancia que mediste es tuya: no hay un valor correcto. Si va a un informe, dila como lo que es: <strong>«distancia aproximada, medida sobre el Visualizador Geográfico Censo 2024»</strong>.</p>" +
    "<div class='destacado'><p><strong>La trampa del doble clic:</strong> si haces clic en el punto de llegada y después doble clic en el mismo punto, el panel cuenta el tramo de ida y vuelta. En una prueba, 61,41 km se volvieron 122,83 km, con «Área 0 m²».</p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Una referencia, no una medida oficial",
  html: "<p>Lo que entregan estas herramientas es <strong>una referencia</strong>, no una medida oficial:</p>" +
    "<div class='comparacion'>" +
    "<div class='col ok'><h4>Para esto sirve</h4><ul class='lista-limpia'>" +
    "<li>Dimensionar un sector antes de salir a terreno</li>" +
    "<li>Estimar cuánta población hay cerca de un servicio</li>" +
    "<li>Comparar dos áreas entre sí</li>" +
    "<li>Mostrar un orden de magnitud, diciendo de dónde salió</li>" +
    "</ul></div>" +
    "<div class='col no'><h4>Para esto no sirve</h4><ul class='lista-limpia'>" +
    "<li>Respaldar un deslinde</li>" +
    "<li>Acreditar una superficie ante un tercero</li>" +
    "<li>Sustentar un acto administrativo</li>" +
    "<li>Todo lo que deba resistir una impugnación</li>" +
    "</ul></div>" +
    "</div>" +
    "<h2>El buffer no recorta</h2>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_m4_buffer_comunas.png' alt='Mapa de la Región de Valparaíso por comunas, con Valparaíso, Concón, Viña del Mar, Quilpué, Limache y Villa Alemana contorneadas en rosado como seleccionadas; sin círculo dibujado; el panel derecho dice 6 elementos seleccionados y suma 236.208 personas de 60 años o más, agregado de 6 elementos; abajo, la tabla de la selección dice 6 registros'>" +
    "<span class='rot' style='left:3%;top:66%'>1 · Seis comunas enteras</span>" +
    "<span class='rot' style='right:22%;top:15%'>2 · El panel suma las seis: 236.208</span>" +
    "<span class='rot' style='left:56%;top:71%'>3 · La tabla: 6 registros</span>" +
    "</div><figcaption>Un radio de 8.000 metros desde un punto de la ciudad de Quilpué. <span class='paso-num'>1</span> El círculo no queda dibujado: lo que queda son las comunas que tocó, completas. <span class='paso-num'>2</span> El panel suma las seis. <span class='paso-num'>3</span> La tabla, que se abre sola, las enumera. Desde otro punto, el número de comunas cambia.</figcaption></figure>" +
    "<p>Lo seleccionado son esos territorios enteros, no la población que vive dentro del círculo.</p>" +
    "<div class='advertencia'><p><strong>El visualizador no advierte nada de esto.</strong> Si usas el número, dilo tú: «aproximado, medido sobre el visualizador» o «comunas que tocan un radio de ocho kilómetros».</p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Lo que el mapa no muestra",
  html: "<p>Las unidades con <strong>una a tres viviendas ocupadas con morador presente</strong> no se publican por separado: se agrupan con una unidad cercana, y sus datos pasan a la unidad resultante. El INE llama a esto <strong>indeterminación geográfica</strong>, y el nombre designa esto y nada más.</p>" +
    "<div class='comparacion'>" +
    "<div class='col'><h4>Antes del resguardo</h4><p class='detalle'><strong>Manzana A</strong>: 2 viviendas ocupadas<br><strong>Manzana B</strong>: 40 viviendas ocupadas</p></div>" +
    "<div class='col'><h4>Lo que publica el visualizador</h4><p class='detalle'><strong>Una sola unidad</strong>: el dibujo de A y de B, con un solo registro de 42 viviendas ocupadas. A no se puede seleccionar por separado.</p></div>" +
    "</div>" +
    "<p class='detalle'>Ejemplo con cifras inventadas. La regla viene del manual de cartografía del Censo 2024.</p>" +
    "<p><strong>Se puede comprobar en los datos:</strong> en las 2.013 manzanas de Quilpué, ninguna tiene una, dos o tres viviendas ocupadas. Es la única forma en que este resguardo se deja ver, porque lo que produce es una ausencia.</p>" +
    "<div class='dos-columnas' style='align-items:start'>" +
    "<div class='tarjeta'><h3>No es lo mismo que una manzana vacía</h3><p>Una manzana donde no se censó a nadie <strong>sí aparece</strong>, y el panel lo dice: «Sin datos censales». En Quilpué son 268 de 2.013.</p></div>" +
    "<figure class='captura'><div class='marco' style='max-width:290px'>" +
    "<img src='assets/capturas/v2_m4_panel_sin_datos_censales.png' alt='Panel derecho de la manzana 5801011001003 de Quilpué: sus códigos; en lugar de una cifra, «Sin datos censales»; el contexto geográfico, del país a la zona; y siete indicadores en S/D'>" +
    "</div><figcaption>Una manzana de Quilpué sin población censada.</figcaption></figure>" +
    "</div>" +
    "<div class='advertencia'><p>Si buscas una unidad pequeña y no la encuentras, <strong>no es un error</strong>: fue agrupada, y sus datos están en la vecina. Si tu análisis necesita el detalle original, el visualizador no es la fuente: hay que pedirlo por los canales del INE, con el resguardo correspondiente.</p></div>" +
    "<p class='detalle'>En el mapa verás también localidades y entidades llamadas «Indeterminada», con datos: son entidades rurales agrupadas por este mismo resguardo. En las manzanas urbanas, en cambio, nada marca la agrupación, y es a propósito: los códigos se reasignan para que la numeración no delate dónde hubo una. Si usas una unidad «Indeterminada», decláralo.</p>" +
    "<div class='tarjeta'><h3>Conceptos de esta pantalla</h3><p>Definiciones oficiales del INE. Cada enlace abre el documento (PDF) en otra pestaña, en la página citada.</p><p><strong>Indeterminación geográfica:</strong> «la agrupación de datos espaciales, iniciando por las unidades territoriales de menor tamaño —como entidades de población rural, manzanas urbanas o aldeas— y avanzando progresivamente hacia niveles superiores […]». <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/N5_Nota%20Tecnica_indeterminacion_geografica_CPV2024.pdf#page=1' target='_blank' rel='noopener' style='color:var(--c-azul)'>Nota técnica 5, p. 1</a> · <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/Manual_uso_cartografia_CPV2024.pdf#page=8' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de cartografía, p. 8</a></p><p><strong>Vivienda particular ocupada con moradores presentes:</strong> las viviendas particulares ocupadas son «aquellas viviendas particulares en las que viven personas de manera habitual y fueron contabilizadas durante el proceso de recolección oficial de datos»; «con moradores presentes», las que tenían a sus residentes en el momento de la visita. Esta última precisión es del curso: los documentos oficiales usan el término sin definirlo. <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/03/Glosario_CPV2024-1.pdf#page=2' target='_blank' rel='noopener' style='color:var(--c-azul)'>Glosario de conceptos generales, p. 2</a></p><p><strong>Población censada:</strong> «el total de personas contabilizadas y caracterizadas socio-demográficamente en el proceso de recolección censal». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/03/Glosario_CPV2024-1.pdf#page=2' target='_blank' rel='noopener' style='color:var(--c-azul)'>Glosario de conceptos generales, p. 2</a></p><p><strong>«Indeterminada»:</strong> cuando una entidad rural se agrupa por este resguardo, su categoría pasa a «Indeterminada» y su nombre a «INDETERMINADA»; si la agrupación junta entidades de localidades distintas, se crea una localidad indeterminada. <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/N5_Nota%20Tecnica_indeterminacion_geografica_CPV2024.pdf#page=6' target='_blank' rel='noopener' style='color:var(--c-azul)'>Nota técnica 5, p. 6</a> y <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/N5_Nota%20Tecnica_indeterminacion_geografica_CPV2024.pdf#page=8' target='_blank' rel='noopener' style='color:var(--c-azul)'>p. 8</a></p><p><strong>No confundir con la anonimización de los microdatos:</strong> es otro resguardo, para otra base: aplica «Recodificación global» y «Supresión parcial de variables», y «se suprime la información para categorías con menos de 50 casos a nivel de comuna». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=46' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 46</a> · <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/Presentacion_microdatos_CPV2024.pdf#page=25' target='_blank' rel='noopener' style='color:var(--c-azul)'>Presentación de microdatos, p. 25</a></p></div>" },

{ modulo: 1, tipo: "video", titulo: "Por qué una manzana aparece unida a otra",
  html: "<p>Lo mismo de la pantalla anterior, en movimiento, más dos cosas que ahí no están: con qué criterios se elige la unidad con que se agrupa y qué ley obliga a hacerlo. Si no puedes reproducir el video, esto es lo que dice:</p>" +
    "<ul>" +
    "<li>Las manzanas y entidades con una a tres viviendas ocupadas con morador presente no se publican por separado: se agrupan con una unidad cercana del mismo estrato.</li>" +
    "<li>Se agrupan con la vecina más cercana, la de menos viviendas ocupadas y, en primer lugar, dentro de la misma zona censal o localidad.</li>" +
    "<li>El resultado es un polígono multiparte: varias manzanas, un solo código y una sola fila.</li>" +
    "<li>Antes de afirmar algo sobre «esa manzana», mira si es una unidad agrupada.</li>" +
    "</ul>" +
    "<div class='tarjeta'><h3>Conceptos de esta pantalla</h3><p>Definiciones oficiales del INE. Cada enlace abre el documento (PDF) en otra pestaña, en la página citada.</p><p><strong>Estrato censal:</strong> «Clasificación geográfica […] que distingue entre áreas urbanas, subdivididas en manzanas, y dos tipos de área rural: el área rural concentrada o “aldea”, también subdividida en manzanas, y el área rural dispersa, subdividida en entidades». <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/N5_Nota%20Tecnica_indeterminacion_geografica_CPV2024.pdf#page=1' target='_blank' rel='noopener' style='color:var(--c-azul)'>Nota técnica 5, p. 1</a></p><p><strong>Zona censal y localidad:</strong> en el área urbana, «Entidad urbana → Zona Censal → Manzana»; en la rural, «Localidad → Entidad rural → Manzana aldea (solo en categoría Aldea)». Las traza el INE «con objetivos operativos, por lo que no revisten un carácter legal». <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/Manual_uso_cartografia_CPV2024.pdf#page=6' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de cartografía, p. 6</a></p><p><strong>Polígono multiparte:</strong> «Esta técnica, propia de los Sistemas de Información Geográfica (SIG), permite agrupar múltiples elementos (manzanas y entidades) en un único registro tabular». <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/Manual_uso_cartografia_CPV2024.pdf#page=9' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de cartografía, p. 9</a></p></div>",
  video: "assets/video/V-indeterminacion-video.mp4",
  poster: "assets/video/V-indeterminacion-video.jpg",
  subtitulos: "assets/video/V-indeterminacion-video.vtt",
  duracion: "2:17" },

{ modulo: 1, tipo: "vf", titulo: "Ejercicio: tres comunas seleccionadas", evalua: true,
  html: "<p>Haz esta tarea en el visualizador antes de responder: temática Edad, indicador «Personas de 60 años o más», región Valparaíso y nivel «Comunas». Con «Selección múltiple», «Punteo individual», selecciona <strong>Quilpué, Villa Alemana y Viña del Mar</strong>, y descarga el CSV desde la tabla.</p>" +
    "<p>Después decide si cada afirmación es verdadera o falsa. Este ejercicio es la evaluación del módulo.</p>",
  items: [
    { t: "El panel muestra 149.536 personas de 60 años o más.", v: true,
      retro: "Es 39.250 + 30.182 + 80.104: el panel suma las cantidades de las tres comunas." },
    { t: "Con el mapa en «% Relativo», el panel muestra 69,6 %, la suma de los tres porcentajes.", v: false,
      retro: "El panel suma cantidades también en «% Relativo». Sumar los porcentajes de territorios distintos no da el porcentaje del conjunto." },
    { t: "Con «Promedio de edad», el panel avisa que ese indicador no se agrega entre territorios.", v: true,
      retro: "Un promedio no se suma: el promedio de las tres juntas no es la suma de sus promedios." },
    { t: "El CSV de la selección trae las 38 comunas de la región.", v: false,
      retro: "Trae solo las tres seleccionadas." },
    { t: "El nombre del archivo dice que es una selección de tres comunas.", v: false,
      retro: "Se llama «CPV24_R05_Comunas_edad.csv», igual que el de toda la región. Dilo en tu nota al pie." },
    { t: "Si una de las manzanas que seleccionas no tiene el dato, el panel suma las demás y dice cuántas quedaron sin dato.", v: true,
      retro: "Lo dice así: «Σ Suma de 1 de 2 elementos (1 sin dato)»." },
    { t: "Con una comuna marcada en el filtro, puedes seleccionar manzanas de la comuna vecina.", v: false,
      retro: "Con una comuna marcada solo se dibujan sus manzanas. Para cruzar el límite, deja marcada solo la región." },
    { t: "Un buffer de 8.000 metros cuenta la población que vive dentro del círculo.", v: false,
      retro: "Selecciona las comunas completas que toca el círculo, no la población de adentro." },
    { t: "La superficie que mides en el visualizador sirve para acreditar un terreno ante una notaría.", v: false,
      retro: "Es una referencia: sirve para orientarse y comparar, no para acreditar." }
  ],
  cierre: "La selección suma cantidades y declara lo que falta; el archivo trae solo lo seleccionado, pero no lo dice en su nombre; y la medición orienta, no acredita. Escribir eso al lado del número es lo que lo vuelve verificable." }
  ]
};
