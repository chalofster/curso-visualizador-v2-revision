const CONTENIDO = {
  id: "cl.ine.censo.visualizador-v2.M5",
  titulo: "Curso Visualizador Geográfico Censo 2024 · M5 — ¿Cómo descargo los datos y el mapa?",
  aprobacion: 60,
  modulos: [
    {id: "B", titulo: "Presentación del módulo", color: "var(--ine-blue)"},
    {id: "M5", titulo: "¿Cómo descargo los datos y el mapa?", color: "var(--accent-category)"}
  ],
  pantallas: [

{ modulo: 0, tipo: "contenido", titulo: "Dos lugares, tres salidas",
  html: "<p>Lo que ves en el visualizador te lo puedes llevar de <strong>tres maneras</strong>. Todas salen de <strong>dos lugares</strong> de la pantalla del mapa:</p>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_m5_dos_lugares.png' alt='Pantalla del mapa con la región de Valparaíso por comunas y la tabla de datos abierta abajo. A la izquierda, en la barra de herramientas, el botón de la cámara; bajo el mapa, el botón Tabla; en la barra de la tabla, el botón CSV y una flecha'>" +
    "<span class='rot' style='left:19.5%;top:14%'>1 · La cámara: la imagen</span>" +
    "<span class='rot' style='left:61.5%;top:66%'>2 · «Tabla»: la tabla de datos</span>" +
    "<span class='rot' style='right:1.5%;top:71.5%'>3 · Las descargas</span>" +
    "</div><figcaption><span class='paso-num'>1</span> La cámara, en la barra de la izquierda. <span class='paso-num'>2</span> El botón «Tabla», bajo el mapa, abre la tabla de datos. <span class='paso-num'>3</span> Dentro de la tabla, el botón «CSV» y la flecha «▾».</figcaption></figure>" +
    "<div class='dos-columnas'>" +
    "<div class='tarjeta'><h3>La tabla de datos</h3><ul class='lista-limpia'>" +
    "<li><strong>La tabla</strong>, para consultar los valores sin salir del visualizador</li>" +
    "<li><strong>CSV</strong>, un archivo de texto con los datos separados por punto y coma, para trabajarlos en tu planilla</li>" +
    "</ul></div>" +
    "<div class='tarjeta'><h3>La cámara</h3><ul class='lista-limpia'>" +
    "<li><strong>La imagen</strong>, un archivo PNG, para pegar el mapa en un informe o una presentación</li>" +
    "</ul></div>" +
    "</div>" +
    "<p>En las dos pantallas siguientes vemos cada lugar con calma. Después solo las nombramos.</p>" +
    "<div class='destacado'><p><strong>Las tres tienen algo en común:</strong> traen lo que tienes en pantalla en el momento en que haces clic, o solo lo que seleccionaste, si seleccionaste algo. Es la idea que recorre todo el módulo.</p></div>" },

{ modulo: 0, tipo: "contenido", titulo: "La tabla de datos y sus descargas",
  html: "<p>La <strong>tabla de datos</strong> es la tabla de atributos del mapa: <strong>una fila por cada territorio</strong> que tienes en pantalla y <strong>una columna por cada indicador</strong> de la temática que elegiste, en cantidad y en porcentaje. Se abre con el botón «Tabla», bajo el mapa, y se cierra con la ×.</p>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_m5_tabla_descargas.png' alt='Extremo derecho de la barra de título de la tabla de datos: «36 registros», los botones A− y A+, el botón CSV, una flecha y la ×; debajo, las primeras filas con los valores de las comunas de Valparaíso'>" +
    "<span class='rot' style='left:50%;top:38%'>1 · Cuántas filas trae</span>" +
    "<span class='rot' style='right:8%;top:38%'>2 · «CSV»</span>" +
    "<span class='rot' style='right:1%;top:62%'>3 · «▾»: opciones</span>" +
    "</div><figcaption><span class='paso-num'>1</span> La barra de título dice cuántos registros trae. <span class='paso-num'>2</span> «CSV» baja la tabla como archivo. <span class='paso-num'>3</span> La flecha abre las opciones de descarga.</figcaption></figure>" +
    "<div class='tres-columnas'>" +
    "<div class='tarjeta'><span class='badge badge-1'>CSV</span><h3>La tabla, como archivo</h3><p>Trae las mismas filas y todas las columnas de la temática. Se abre en tu planilla: la misión de este módulo lo hace paso a paso.</p></div>" +
    "<div class='tarjeta'><span class='badge badge-2'>▾ Opciones</span><h3>Más temáticas</h3><p>La flecha junto al CSV muestra la temática activa. Con «Agregar temáticas» marcas otras, o todas, y las descargas en el mismo archivo.</p></div>" +
    "<div class='tarjeta'><span class='badge badge-3'>500 filas</span><h3>En pantalla, hasta 500</h3><p>La tabla en pantalla muestra hasta 500 filas y lo dice donde cuenta los registros, en la barra de título («Mostrando 500 de…»). El CSV las trae todas.</p></div>" +
    "</div>" +
    "<div class='dos-columnas' style='align-items:start'>" +
    "<figure class='captura'><div class='marco' style='max-width:310px'>" +
    "<img src='assets/capturas/v2_m5_opciones_descarga.png' alt='Menú «Opciones de descarga» abierto sobre la flecha de la tabla: «Descargar CSV», «Temática activa: Edad», el botón Agregar temáticas y el botón Descargar'>" +
    "</div><figcaption><span class='paso-num'>1</span> Al abrir la flecha: la temática activa y «Agregar temáticas».</figcaption></figure>" +
    "<figure class='captura'><div class='marco' style='max-width:310px'>" +
    "<img src='assets/capturas/v2_m5_opciones_agregar.png' alt='El mismo menú después de pulsar Agregar temáticas: bajo «Seleccionar temáticas», la lista de temáticas con casillas y Edad marcada; abajo, Seleccionar todas y Descargar'>" +
    "</div><figcaption><span class='paso-num'>2</span> Con «Agregar temáticas»: las 35, cada una con su casilla, y «Seleccionar todas».</figcaption></figure>" +
    "</div>" +
    "<p>El CSV trae los valores, en cantidad y en porcentaje, pero no el dibujo de los territorios.</p>" },

{ modulo: 0, tipo: "contenido", titulo: "La imagen",
  html: "<p>La <strong>cámara</strong>, en la barra de la izquierda, exporta el mapa como <strong>imagen PNG</strong>, lista para pegar en un informe o una presentación. Al pulsarla, ofrece dos caminos:</p>" +
    "<figure class='captura'><div class='marco' style='max-width:410px'>" +
    "<img src='assets/capturas/v2_m5_menu_camara.png' alt='Barra de herramientas de la izquierda con la cámara activa y su menú «Exportar mapa como PNG», con dos opciones: Exportar vista actual y Seleccionar elementos a exportar'>" +
    "</div><figcaption>El menú de la cámara, «Exportar mapa como PNG».</figcaption></figure>" +
    "<div class='comparacion'>" +
    "<div class='col'><h4>«Exportar vista actual»</h4><p class='detalle'>El mapa tal como lo ves, con todos los territorios que están en pantalla.</p></div>" +
    "<div class='col'><h4>«Seleccionar elementos a exportar»</h4><p class='detalle'>Eliges los territorios que saldrán con color: con un rectángulo, a mano alzada o de a uno con «Punteo». La selección se suma, un contador dice cuántos llevas y «Exportar» genera la imagen.</p></div>" +
    "</div>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_m5_seleccion_banner.png' alt='Barra «Seleccione los elementos a exportar:» sobre un mapa de manzanas de Quilpué, con tres botones para elegir, el contador «11 elementos seleccionados» y el botón Exportar; las manzanas elegidas llevan un borde punteado'>" +
    "<span class='rot' style='left:40%;top:16%'>1 · Cómo elegir</span>" +
    "<span class='rot' style='left:54%;top:27%'>2 · Cuántos llevas</span>" +
    "<span class='rot' style='right:9%;top:16%'>3 · «Exportar»</span>" +
    "</div><figcaption><span class='paso-num'>1</span> Rectángulo, mano alzada o «Punteo», de a uno. <span class='paso-num'>2</span> El contador suma lo que vas eligiendo. <span class='paso-num'>3</span> «Exportar» genera la imagen. Lo elegido queda con borde punteado.</figcaption></figure>" +
    "<p>Cualquiera de los dos sale con una <strong>viñeta institucional</strong>: logos, título, fuente, fecha, leyenda, norte y escala. Qué dice y qué calla esa viñeta lo vemos más adelante, en «La imagen se lleva tus decisiones».</p>" },

{ modulo: 1, tipo: "video", titulo: "El recorrido, en video",
  html: "<p>Las salidas de la pantalla del mapa, de corrido: la tabla, la imagen —completa o solo una parte— y el CSV, con la Región Metropolitana y el nivel fijado en «Comunas».</p>",
  video: "assets/video/E-R5-video.mp4",
  poster: "assets/video/E-R5-video.jpg",
  subtitulos: "assets/video/E-R5-video.vtt",
  duracion: "1:09" },

{ modulo: 1, tipo: "contenido", titulo: "Misión: descarga, abre y cita",
  html: "<p>Última salida al visualizador del curso. Vas a bajar los datos de las comunas de tu región, abrirlos en tu planilla y escribir la nota al pie con que los citarías en un informe.</p>" +
    "<div class='mision'><div class='m-cab'>Misión · sobre el visualizador en vivo</div><div class='m-cuerpo'>" +
    "<ol>" +
    "<li>Abre el visualizador con el enlace de abajo. La primera vez te pide aceptar los términos de uso: marca la casilla y pulsa <strong>«Aceptar»</strong>.</li>" +
    "<li>Elige la temática <strong>Edad</strong> y el indicador <strong>«Personas de 60 años o más»</strong>.</li>" +
    "<li>Marca <strong>tu región</strong> y fija el nivel <strong>«Comunas»</strong>.</li>" +
    "<li>Abre <strong>«Tabla»</strong> y anota cuántos registros dice su barra de título.</li>" +
    "<li>Descarga con <strong>«CSV»</strong> y ábrelo en tu planilla, como muestra el esquema de abajo. Cuenta las filas: ¿son todas las comunas de tu región?</li>" +
    "<li>Exporta la imagen con la cámara, <strong>«Exportar vista actual»</strong>, y lee la viñeta.</li>" +
    "<li>Escribe la nota al pie con que citarías el CSV.</li>" +
    "</ol>" +
    "</div></div>" +
    "<p><strong>Del CSV a tu planilla, en cuatro pasos:</strong></p>" +
    "<ol class='flujo'>" +
    "<li><span class='paso-num'>1</span><strong>Doble clic</strong>Con la configuración de Chile, el archivo se abre con una columna por dato.</li>" +
    "<li class='fuera'><span class='paso-num'>2</span><span class='etiqueta'>Solo si falla</span><strong>¿Todo en una columna?</strong>En una planilla en blanco, pestaña «Datos», la opción para importar desde texto o CSV (su nombre cambia según la versión de Excel). Elige el archivo; como delimitador, el punto y coma, y como origen del archivo, UTF-8. Después, carga los datos.</li>" +
    "<li><span class='paso-num'>3</span><strong>Cuenta las filas</strong>Sin el encabezado. Compáralas con los registros de la tabla y con las comunas de tu región.</li>" +
    "<li><span class='paso-num'>4</span><strong>Guárdalo como libro</strong>Si vas a trabajarlo, guárdalo en formato de Excel: el CSV no conserva formatos.</li>" +
    "</ol>" +
    "<details class='ayuda'><summary>¿Algo no aparece como esperabas?</summary><div class='ayuda-cuerpo'><ul>" +
    "<li><strong>No ves el botón «CSV»:</strong> está dentro de la tabla. Abre «Tabla» primero.</li>" +
    "<li><strong>El archivo trae menos comunas que tu región:</strong> trae las que estaban en pantalla. Aléjate hasta ver la región completa y descárgalo de nuevo. En una prueba con Valparaíso, Isla de Pascua y Juan Fernández quedaron fuera de la vista de la región: el archivo trajo 36 de 38.</li>" +
    "<li><strong>El número de registros no cambia al moverte:</strong> mueve un poco el mapa; la tabla se pone al día.</li>" +
    "<li><strong>El archivo trae solo dos columnas:</strong> no había temática elegida. Elígela antes de descargar.</li>" +
    "</ul></div></details>" +
    "<p><a class='enlace-externo' href='https://storage.googleapis.com/visualizador_v2/index.html' target='_blank' rel='noopener'>Ir al visualizador</a></p>" +
    "<label for='m5-respuesta'><strong>Tu nota al pie</strong></label>" +
    "<textarea id='m5-respuesta' rows='4' style='width:100%;font:inherit;padding:10px;border:2px solid var(--c-borde);border-radius:8px;margin-top:6px' placeholder='Fuente, territorios, indicador, y si son porcentajes o cantidades'></textarea>" +
    "<div class='valor-esperado'><strong>Contrasta en la pantalla siguiente.</strong> Lo que escribas aquí no se envía ni se corrige.</div>" },

{ modulo: 1, tipo: "contenido", titulo: "Cómo se resuelve",
  html: "<p>Lo primero era <strong>contar las filas</strong>. El CSV trae las comunas que estaban en pantalla, no todas las de la región que marcaste, y no avisa. Con Valparaíso:</p>" +
    "<figure class='barras-par'><div class='bp-paneles'>" +
    "<div class='bp-panel'><p class='bp-titulo'>La región entera en pantalla<span>Como la deja el visualizador al marcarla</span></p>" +
    "<div class='bp-fila'><span class='bp-etq'>La región</span><span class='bp-pista'><span class='bp-barra bp-c' style='width:66%'></span><span class='bp-valor'>38</span></span></div>" +
    "<div class='bp-fila'><span class='bp-etq'>El CSV</span><span class='bp-pista'><span class='bp-barra bp-a' style='width:62.5%'></span><span class='bp-valor'>36</span></span></div>" +
    "</div>" +
    "<div class='bp-panel'><p class='bp-titulo'>Acercado a Quilpué<span>Con la misma región marcada</span></p>" +
    "<div class='bp-fila'><span class='bp-etq'>La región</span><span class='bp-pista'><span class='bp-barra bp-c' style='width:66%'></span><span class='bp-valor'>38</span></span></div>" +
    "<div class='bp-fila'><span class='bp-etq'>El CSV</span><span class='bp-pista'><span class='bp-barra bp-a' style='width:19.1%'></span><span class='bp-valor'>11</span></span></div>" +
    "</div></div>" +
    "<figcaption>Comunas de la Región de Valparaíso y filas del CSV, en la misma escala. En la vista de la región faltan Isla de Pascua y Juan Fernández, que quedan fuera de la pantalla. Con otra pantalla o con otro acercamiento cambian los números, no el mecanismo.</figcaption></figure>" +
    "<div class='comparacion'>" +
    "<div class='col'><h4>Lo que pone la imagen</h4><ul class='lista-limpia'>" +
    "<li>«Fuente: INE · Censo de Población y Vivienda 2024»</li>" +
    "<li>El nivel y el indicador: «Comunas · Personas de 60 años o más»</li>" +
    "<li>Leyenda, norte, escala y sistema de referencia</li>" +
    "</ul></div>" +
    "<div class='col'><h4>Lo que solo pones tú</h4><ul class='lista-limpia'>" +
    "<li>Qué territorio filtraste y cuántos trae el archivo</li>" +
    "<li>Si son porcentajes o cantidades</li>" +
    "<li>Que el dato es del Censo 2024, aunque la imagen traiga la fecha de hoy</li>" +
    "</ul></div>" +
    "</div>" +
    "<p><strong>Una nota al pie completa tiene tres partes:</strong></p>" +
    "<div class='destacado'><p><span class='badge badge-1'>1 · Fuente</span> Fuente: INE, Censo de Población y Vivienda 2024, consultado en el Visualizador Geográfico Censo 2024 el 13 de octubre de 2026.</p>" +
    "<p><span class='badge badge-2'>2 · Universo</span> Comunas de la Región de Valparaíso: 36 de 38; no incluye Isla de Pascua ni Juan Fernández.</p>" +
    "<p><span class='badge badge-3'>3 · Decisiones</span> Personas de 60 años o más, como porcentaje de la población de cada comuna.</p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "La imagen se lleva tus decisiones",
  html: "<p>La viñeta de la imagen trae fuente, fecha, leyenda, norte y escala. Lo que no trae es <strong>cómo armaste el mapa</strong>. La misma imagen, exportada en los dos modos:</p>" +
    "<div class='dos-columnas'>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_m5_vineta_relativo.png' alt='Viñeta de la imagen exportada en porcentaje: título «Regiones · Personas de 60 años o más», leyenda que termina en 23,3 % y tabla encabezada por Ñuble, 23,3 %'>" +
    "<span class='rot' style='left:55%;top:11%'>1 · El título</span>" +
    "<span class='rot' style='left:42%;top:23.5%'>2 · Leyenda en %</span>" +
    "<span class='rot' style='left:40%;top:42.5%'>3 · Ñuble primero</span>" +
    "</div><figcaption>«% Relativo».</figcaption></figure>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_m5_vineta_absoluto.png' alt='Viñeta de la imagen exportada en cantidad: el mismo título, leyenda que termina en 1.392.757 y tabla encabezada por Metropolitana de Santiago, 1.392.757'>" +
    "<span class='rot' style='left:55%;top:11%'>1 · El mismo título</span>" +
    "<span class='rot' style='left:42%;top:23.5%'>2 · Leyenda en personas</span>" +
    "<span class='rot' style='left:40%;top:42.5%'>3 · Santiago primero</span>" +
    "</div><figcaption>«# Absoluto».</figcaption></figure>" +
    "</div>" +
    "<p>Cambian los colores, la leyenda y el orden de la tabla. <strong>El título y el nombre del archivo no cambian</strong>: en las dos imágenes, el título dice «Regiones · Personas de 60 años o más» y el archivo se llama «CPV24_RCL_Regiones_edad_60_mas.png».</p>" +
    "<div class='advertencia'><p><strong>Quien reciba la imagen solo puede adivinar el modo por el formato de los números.</strong> Escríbelo en el texto que la acompaña: «en porcentaje de la población de cada región» o «en número de personas».</p></div>" +
    "<h2>Si exportas solo una parte</h2>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_m5_png_seleccion.png' alt='Imagen exportada con «Seleccionar elementos a exportar»: el mapa se encuadra en un grupo de manzanas del centro de Quilpué, las únicas con color; a la izquierda, la viñeta con una tabla de esas manzanas'>" +
    "</div><figcaption>Con «Seleccionar elementos a exportar», la imagen se encuadra en lo que elegiste y su tabla lo enumera, una manzana por fila. El título no dice que es una selección.</figcaption></figure>" +
    "<div class='comparacion'>" +
    "<div class='col ok'><h4>La viñeta dice</h4><ul class='lista-limpia'>" +
    "<li>El nivel y el indicador</li>" +
    "<li>La fuente: INE, Censo 2024</li>" +
    "<li>La fecha en que exportaste</li>" +
    "</ul></div>" +
    "<div class='col no'><h4>La viñeta calla</h4><ul class='lista-limpia'>" +
    "<li>Qué territorio filtraste</li>" +
    "<li>Si es porcentaje o cantidad</li>" +
    "<li>Que es una selección, y no la vista completa</li>" +
    "</ul></div>" +
    "</div>" },

{ modulo: 1, tipo: "contenido", titulo: "Lo que bajas es lo que ves",
  html: "<p>Las salidas leen el mapa en el momento en que haces clic: traen <strong>los territorios que están en pantalla</strong>, no los que marcaste en el filtro. El filtro nombra unidades de la <strong>división político-administrativa (DPA)</strong>: una región, sus comunas. La salida trae solo las que se ven. Cinco casos; con otra pantalla o con otro acercamiento cambian los números, no el mecanismo.</p>" +
    "<div class='grafico'>" +
    "<p class='g-titulo'>Frente a la DPA: lo que marcaste y lo que trajo</p>" +
    "<div class='g-fila' style='flex-wrap:wrap;gap:4px 10px;margin:14px 0'>" +
    "<span style='flex:1 1 100%;font-size:13.5px'><strong>CSV · Valparaíso, como la deja el visualizador</strong></span>" +
    "<span class='g-barra-wrap' style='display:flex;overflow:hidden'><span class='g-barra' style='width:94.7%;background:var(--c-azul)'>36</span></span>" +
    "<span class='g-eti' style='width:8em;text-align:left'>de 38 comunas</span>" +
    "<span style='flex:1 1 100%;font-size:12.5px;color:var(--c-texto-suave)'>Faltaron 2: Isla de Pascua y Juan Fernández, fuera de la pantalla</span>" +
    "</div>" +
    "<div class='g-fila' style='flex-wrap:wrap;gap:4px 10px;margin:14px 0'>" +
    "<span style='flex:1 1 100%;font-size:13.5px'><strong>CSV · Valparaíso, acercado a Quilpué</strong></span>" +
    "<span class='g-barra-wrap' style='display:flex;overflow:hidden'><span class='g-barra' style='width:28.9%;background:var(--c-azul)'>11</span></span>" +
    "<span class='g-eti' style='width:8em;text-align:left'>de 38 comunas</span>" +
    "<span style='flex:1 1 100%;font-size:12.5px;color:var(--c-texto-suave)'>Faltaron 27: las que quedaron fuera del acercamiento</span>" +
    "</div>" +
    "<div class='g-fila' style='flex-wrap:wrap;gap:4px 10px;margin:14px 0'>" +
    "<span style='flex:1 1 100%;font-size:13.5px'><strong>Imagen · comunas de todo el país</strong></span>" +
    "<span class='g-barra-wrap' style='display:flex;overflow:hidden'><span class='g-barra' style='width:17.4%;background:var(--c-azul)'>60</span></span>" +
    "<span class='g-eti' style='width:8em;text-align:left'>de 345 comunas</span>" +
    "<span style='flex:1 1 100%;font-size:12.5px;color:var(--c-texto-suave)'>Faltaron 285, todas con menor porcentaje de personas de 60 años o más: la tabla de la imagen trae solo las de mayor valor</span>" +
    "</div>" +
    "<p class='g-titulo' style='margin-top:22px'>Frente a la pantalla: lo que se veía y lo que trajo</p>" +
    "<div class='g-fila' style='flex-wrap:wrap;gap:4px 10px;margin:14px 0'>" +
    "<span style='flex:1 1 100%;font-size:13.5px'><strong>CSV · manzanas de Quilpué, de cerca</strong></span>" +
    "<span class='g-barra-wrap' style='display:flex;overflow:hidden'><span class='g-barra' style='width:87%;background:var(--c-azul)'>87</span></span>" +
    "<span class='g-eti' style='width:8em;text-align:left'>de 100 manzanas</span>" +
    "<span style='flex:1 1 100%;font-size:12.5px;color:var(--c-texto-suave)'>Faltaron 13: las que quedaban bajo el panel de la izquierda</span>" +
    "</div>" +
    "<div class='g-fila' style='flex-wrap:wrap;gap:4px 10px;margin:14px 0'>" +
    "<span style='flex:1 1 100%;font-size:13.5px'><strong>Tabla en pantalla · manzanas de Quilpué, más de lejos</strong></span>" +
    "<span class='g-barra-wrap' style='display:flex;overflow:hidden'><span class='g-barra' style='width:38.7%;background:var(--c-azul)'>500</span></span>" +
    "<span class='g-eti' style='width:8em;text-align:left'>de 1.291 manzanas</span>" +
    "<span style='flex:1 1 100%;font-size:12.5px;color:var(--c-texto-suave)'>La tabla dice «Mostrando 500 de 1291 registros». El CSV, en cambio, trae las 1.291</span>" +
    "</div>" +
    "<p class='g-nota'>Cada barra completa es lo que marcaste o lo que se veía; la parte azul, lo que trajo la salida; la parte clara, lo que faltó.</p>" +
    "</div>" +
    "<div class='advertencia'><p><strong>La tabla de la imagen no es un ranking del país.</strong> Trae las comunas de mayor valor que caben, agrupadas por región, y lo dice al pie: «Se muestran los 60 de mayor valor, de 345 elementos visibles». Si recortas la imagen o copias la tabla, esa nota se pierde: escríbela tú.</p></div>" +
    "<div class='destacado'><p><strong>Antes de usar un archivo, cuenta sus filas</strong> y compáralas con los territorios que querías. Si faltan, aléjate hasta tenerlos todos en pantalla y descárgalo de nuevo.</p></div>" +
    "<p><strong>Una selección se llama igual que la región.</strong> Si seleccionas tres comunas y descargas, el archivo trae solo esas tres filas, pero se llama como el de toda la región: «CPV24_R05_Comunas_edad.csv». El nombre no lo dice; tu nota sí.</p>" +
    "<div class='destacado'><p><strong>Para copiar y completar:</strong></p>" +
    "<p>Fuente: INE, Censo de Población y Vivienda 2024, consultado en el Visualizador Geográfico Censo 2024 el [fecha]. [Nivel y territorios: cuántos y cuáles]. [Indicador], en [porcentaje de… / número de…].</p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Del CSV a tu planilla",
  html: "<p>Abierto en la planilla, el CSV es la tabla de datos con otro formato. Antes de trabajar con él, revisa tres cosas.</p>" +
    "<h2>1 · Que cada dato quede en su columna</h2>" +
    "<div class='comparacion'>" +
    "<div class='col ok'><h4>Bien abierto</h4><div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Región</th><th scope='col'>Cód.Reg.</th><th scope='col'>% Personas de 60 años o más</th></tr></thead>" +
    "<tbody><tr><td>Arica y Parinacota</td><td>15</td><td>17,8</td></tr></tbody></table></div>" +
    "<p class='detalle'>Una columna por dato. El porcentaje viene sin el signo %: está en el nombre de la columna.</p></div>" +
    "<div class='col no'><h4>Todo en una columna</h4><p class='detalle'>Arica y Parinacota;15;36,4;15757;6,4;28473;11,6;…</p>" +
    "<p class='detalle'>La planilla no reconoció el punto y coma. Impórtalo desde la pestaña «Datos», como en el paso 2 de la misión.</p></div>" +
    "</div>" +
    "<h2>2 · Que los códigos se lean enteros</h2>" +
    "<div class='comparacion'>" +
    "<div class='col no'><h4>Lo que ves</h4><p class='cifra'>5,8011E+12</p><p class='detalle'>La columna «Manzent», en un CSV de manzanas</p></div>" +
    "<div class='col ok'><h4>Lo que es</h4><p class='cifra'>5801121001008</p><p class='detalle'>El código de 13 dígitos de la manzana</p></div>" +
    "</div>" +
    "<p>El valor está completo; solo se muestra abreviado. Lo mismo pasa con «ID_Entidad», el código de 12 dígitos de la entidad, que se ve «5,801E+11». Selecciona cada columna, abre «Formato de celdas...» con el botón derecho y elige «Número», con 0 decimales.</p>" +
    "<h2>3 · Que una celda vacía no se lea como cero</h2>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Manzent</th><th scope='col'>Personas de 60 años o más</th><th scope='col'>% Personas de 60 años o más</th><th scope='col'>Promedio de edad</th></tr></thead>" +
    "<tbody><tr><td>5801011002023</td><td>0</td><td></td><td></td></tr></tbody></table></div>" +
    "<p>Es una manzana de Quilpué sin personas: no hay porcentaje ni promedio que calcular. Otras celdas quedan vacías porque el dato está protegido. <strong>El archivo no dice cuál de las dos es</strong>: no las cuentes como cero y, si las hay, dilo en tu nota.</p>" +
    "<div class='advertencia'><p><strong>Filas «Indeterminada».</strong> En algunas comunas aparece una entidad o localidad llamada «Indeterminada»: son entidades rurales que se agruparon para resguardar la confidencialidad. En las manzanas urbanas, en cambio, nada marca la agrupación, y es a propósito: que no veas esa fila no prueba que no haya unidades agrupadas. La fila «Indeterminada» viaja como cualquier otra. Antes de sumar o comparar manzanas, búscala y declara si la incluiste.</p></div>" +
    "<div class='tarjeta'><h3>Conceptos de esta pantalla</h3><p>Definiciones oficiales del INE. Cada enlace abre el documento (PDF) en otra pestaña, en la página citada.</p><p><strong>Manzana:</strong> «la unidad geográfica básica con fines estadísticos que conforman zonas censales en áreas urbanas y aldeas en el ámbito rural, contiene un grupo de viviendas contiguas o separadas, edificios, establecimientos y/o predios, delimitados por rasgos geográficos, culturales y naturales». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=20' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 20</a></p><p><strong>Entidad rural:</strong> «un asentamiento humano con población menor o igual a 1.000 habitantes, o entre 1.001 y 2.000 habitantes donde más del 50% de la población que declara haber trabajado se dedica a actividades primarias». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=20' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 20</a></p><p><strong>«Indeterminada»:</strong> cuando una entidad rural se agrupa por este resguardo, su categoría pasa a «Indeterminada» y su nombre a «INDETERMINADA»; si la agrupación junta entidades de localidades distintas, se crea una localidad indeterminada. <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/N5_Nota%20Tecnica_indeterminacion_geografica_CPV2024.pdf#page=6' target='_blank' rel='noopener' style='color:var(--c-azul)'>Nota técnica 5, p. 6</a> y <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/N5_Nota%20Tecnica_indeterminacion_geografica_CPV2024.pdf#page=8' target='_blank' rel='noopener' style='color:var(--c-azul)'>p. 8</a></p></div>" },

{ modulo: 1, tipo: "emparejar", titulo: "Ejercicio: lo que encuentras al abrir el archivo", evalua: true,
  instruccion: "Siete cosas que puedes encontrar al descargar datos del visualizador y abrirlos. Une cada una con lo que significa o con lo que hay que hacer. Este ejercicio es la evaluación del módulo.",
  pares: [
    { izq: "Tu región tiene 38 comunas y el CSV trae 36 filas", der: "Trae lo que estaba en pantalla: alejarse y descargarlo de nuevo, o decirlo en la nota" },
    { izq: "Todo quedó en la primera columna, separado por punto y coma", der: "Importarlo desde la pestaña «Datos», con el punto y coma como delimitador" },
    { izq: "El código de manzana se ve «5,8011E+12»", der: "Darle a la columna el formato «Número», con 0 decimales" },
    { izq: "En una fila, el porcentaje y el promedio están en blanco", der: "No contarla como cero: el archivo no dice por qué está vacía" },
    { izq: "La columna «% Personas de 60 años o más» dice 17,8, sin el signo", der: "Es un porcentaje: el signo está en el nombre de la columna" },
    { izq: "El mapa exportado en «% Relativo» y en «# Absoluto» tiene el mismo título", der: "Escribir en el texto si son porcentajes o personas" },
    { izq: "Necesitas dos temáticas en el mismo archivo y la flecha del CSV solo muestra la temática activa", der: "Pulsar «Agregar temáticas», marcarlas y descargar" }
  ],
  cierre: "Las siete vienen de lo mismo: un archivo trae datos, pero no cómo se produjeron. Contar las filas, abrirlo bien, leer cada columna como lo que es y escribir lo que el archivo calla es lo que convierte algo descargado en un dato que otra persona puede verificar." }
  ]
};
