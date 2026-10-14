const CONTENIDO = {
  id: "cl.ine.censo.visualizador-v2.M2",
  titulo: "Curso Visualizador Geográfico Censo 2024 · M2 — ¿Cómo armo mi ficha territorial?",
  aprobacion: 60,
  modulos: [
    {id: "B", titulo: "Presentación del módulo", color: "var(--ine-blue)"},
    {id: "M2", titulo: "¿Cómo armo mi ficha territorial?", color: "var(--accent-category)"}
  ],
  pantallas: [

{ modulo: 0, tipo: "contenido", titulo: "Presentación del módulo",
  html: "<p>La <strong>ficha territorial</strong> es el perfil completo de un territorio: sus cifras principales, cada una junto a la del territorio que lo contiene y, en comunas y regiones, la del país. Se abre desde el mapa con <strong>«Crear ficha territorial»</strong>, en una pestaña aparte, y sirve para los nueve niveles, del país a la manzana.</p>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_m2_ficha_partes.png' alt='Parte superior de la ficha territorial de Quilpué: arriba, el territorio puesto y el botón Agregar territorio; la barra con nivel geográfico, Cómo utilizar la ficha, Exportar PDF y compartir; a la izquierda, la biblioteca de indicadores; al centro, el resumen en palabras, la barra de secciones y las primeras cuatro cifras del Resumen, cada una con su región y su país'>" +
    "<span class='rot' style='right:8%;top:1.5%'>1 · «Agregar territorio»</span>" +
    "<span class='rot' style='right:17.5%;top:10%'>2 · «Cómo utilizar la ficha»</span>" +
    "<span class='rot' style='right:1%;top:16.5%'>3 · PDF y compartir</span>" +
    "<span class='rot' style='left:1%;top:52%'>4 · La biblioteca</span>" +
    "<span class='rot' style='left:66%;top:23.5%'>5 · El resumen en palabras</span>" +
    "<span class='rot' style='right:69.5%;top:89%'>6 · Región y país</span>" +
    "</div><figcaption><span class='paso-num'>1</span> Hasta tres territorios del mismo nivel. <span class='paso-num'>2</span> La ayuda de la propia ficha. <span class='paso-num'>3</span> La ficha se exporta o se comparte. <span class='paso-num'>4</span> Los 199 indicadores, para agregar a la ficha. <span class='paso-num'>5</span> Cuatro frases. <span class='paso-num'>6</span> Cada cifra, con su región y su país.</figcaption></figure>" +
    "<p>Debajo siguen cuatro secciones fijas —Resumen, Población, Hogares y Vivienda y servicios—, con <strong>16 cifras iguales en los nueve niveles</strong>, y al final lo que tú agregues desde la biblioteca.</p>" +
    "<p>Una ficha se arma para responder una pregunta. Este módulo enseña tres cosas que hay que saber antes de usarla: <strong>contra qué se compara cada cifra</strong>, <strong>qué cifras se pueden sumar</strong> y <strong>qué significa cuando falta un dato</strong>.</p>" },

{ modulo: 1, tipo: "video", titulo: "El recorrido, en video",
  html: "<p>La ficha de Quilpué, de corrido: el resumen, las cifras con su región y su país, la biblioteca y la comparación con Viña del Mar. Fíjate en que la ficha <strong>se arma</strong>: trae una base fija y tú le agregas lo que te sirve.</p>",
  video: "assets/video/E-R2-video.mp4",
  poster: "assets/video/E-R2-video.jpg",
  subtitulos: "assets/video/E-R2-video.vtt",
  duracion: "0:52" },

{ modulo: 1, tipo: "contenido", titulo: "Misión: arma la ficha de tu comuna",
  html: "<p>Ahora te toca a ti. Vas a armar la ficha de tu comuna y a compararla con una vecina.</p>" +
    "<div class='mision'><div class='m-cab'>Misión · sobre el visualizador en vivo</div><div class='m-cuerpo'>" +
    "<ol>" +
    "<li>Abre el visualizador con el enlace de abajo y acepta los términos de uso. En el mapa, elige la temática <strong>Edad</strong> y el indicador <strong>«Personas de 60 años o más»</strong>. Marca tu región y tu comuna, fija el nivel en <strong>«Comunas»</strong> y <strong>haz clic en tu comuna sobre el mapa</strong>. Abajo del panel derecho, pulsa <strong>«Crear ficha territorial»</strong>: la ficha se abre en otra pestaña, con una ventana de ayuda que cierras con «Cerrar».</li>" +
    "<li>En el Resumen, elige tres cifras y compara cada una con las líneas de la región y del país que tiene debajo. ¿Tu comuna está sobre o bajo?</li>" +
    "<li>En la sección <strong>Hogares</strong>, mira la tarjeta «Hogares unipersonales»: la cifra grande es un porcentaje de los hogares, y debajo está cuántos hogares son.</li>" +
    "<li>En la biblioteca de la izquierda, agrega una temática completa que te interese.</li>" +
    "<li>Con el botón <strong>«Agregar territorio»</strong>, arriba a la derecha, marca una comuna vecina y pulsa <strong>«Agregar»</strong>.</li>" +
    "<li>Mira las «Personas» y el «Promedio de edad» de las dos comunas. ¿Cuál de las dos cifras podrías sumar para tener el total de ambas?</li>" +
    "</ol>" +
    "<details class='ayuda'><summary>¿Algo no aparece como esperabas?</summary><div class='ayuda-cuerpo'><ul>" +
    "<li><strong>Se abrió la ficha del País:</strong> marcar la comuna en la lista no basta. Haz clic en ella sobre el mapa y vuelve a crear la ficha.</li>" +
    "<li><strong>Se abrió la ficha de tu ciudad, no la de tu comuna:</strong> el nivel estaba en automático, que con una comuna marcada pasa a «Centros Urbanos - Aldeas». Fija «Comunas» y vuelve a hacer clic en el mapa.</li>" +
    "<li><strong>«Nivel geográfico» está gris:</strong> el primer territorio fija el nivel. Para cambiarlo hay que quitar todos los territorios con su ×.</li>" +
    "<li><strong>No encuentras cómo volver al mapa:</strong> la ficha no tiene ese enlace. El mapa sigue abierto en la pestaña anterior.</li>" +
    "<li><strong>«Agregar territorio» no responde:</strong> ya hay tres territorios, el tope. Quita uno con su × para agregar otro.</li>" +
    "</ul></div></details>" +
    "<p><a class='enlace-externo' href='https://storage.googleapis.com/visualizador_v2/index.html' target='_blank' rel='noopener'>Ir al visualizador</a></p>" +
    "<label for='m2-respuesta'><strong>Anota tus respuestas</strong></label>" +
    "<textarea id='m2-respuesta' rows='3' style='width:100%;font:inherit;padding:10px;border:2px solid var(--c-borde);border-radius:8px;margin-top:6px' placeholder='Tres cifras de tu comuna frente a la región y el país, y cuál se puede sumar'></textarea>" +
    "<div class='valor-esperado'><strong>Contrasta en la pantalla siguiente.</strong> Lo que escribas aquí no se envía ni se corrige.</div>" +
    "</div></div>" +
    "<p><strong>Así se ven los pasos 1, 2 y 5:</strong></p>" +
    "<div class='tres-columnas' style='align-items:start'>" +
    "<figure class='captura'><div class='marco'><img src='assets/capturas/v2_m2_paso_crear_ficha.png' alt='Panel derecho del mapa con Quilpué seleccionada: su código 5801, su nombre y sus cifras; una franja marca el tramo vacío del panel que se omitió y, debajo, al pie, el botón Crear ficha territorial'>" +
    "<span class='rot' style='right:4%;top:87.5%'>El botón</span></div>" +
    "<figcaption><span class='paso-num'>1</span> Con tu comuna seleccionada en el mapa, el botón está al pie del panel. La imagen se salta la parte vacía del panel.</figcaption></figure>" +
    "<figure class='captura'><div class='marco'><img src='assets/capturas/v2_m2_paso_referencias.png' alt='Dos tarjetas del Resumen de Quilpué: Personas, 162.559, con Región Valparaíso 1.896.053 y País 18.480.432 debajo; Hogares, 59.451, con Región Valparaíso 701.072 y País 6.596.527'></div>" +
    "<figcaption><span class='paso-num'>2</span> Bajo cada cifra, la de la región y la del país.</figcaption></figure>" +
    "<figure class='captura'><div class='marco'><img src='assets/capturas/v2_m2_paso_comparable.png' alt='Ventana Agregar territorio abierta desde la ficha de Quilpué: nivel geográfico Comuna, región Valparaíso, buscador por nombre y la lista de comunas con casillas, con Viña del Mar marcada; al pie, 1 seleccionado (máximo 2), Cancelar y Agregar'></div>" +
    "<figcaption><span class='paso-num'>5</span> La ventana parte en tu región; puedes cambiarla o buscar por nombre. Marca la comuna y pulsa «Agregar».</figcaption></figure>" +
    "</div>" },

{ modulo: 1, tipo: "contenido", titulo: "Cómo se resuelve",
  html: "<p>Con un solo territorio, cada cifra trae debajo la de su <strong>territorio superior</strong> y, en comunas y regiones, la del <strong>país</strong>. En Quilpué, por ejemplo:</p>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Cifra</th><th scope='col'>Quilpué</th><th scope='col'>Región de Valparaíso</th><th scope='col'>País</th></tr></thead>" +
    "<tbody>" +
    "<tr><td>Promedio de edad</td><td>40,5 años</td><td>39,5 años</td><td>38,1 años</td></tr>" +
    "<tr><td>Personas</td><td>162.559</td><td>1.896.053</td><td>18.480.432</td></tr>" +
    "</tbody></table></div>" +
    "<p>Contra qué se compara depende del nivel. Al bajar, el país deja de aparecer y la referencia pasa a ser el territorio que contiene al tuyo:</p>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Nivel de la ficha</th><th scope='col'>Cada cifra se compara con…</th></tr></thead>" +
    "<tbody>" +
    "<tr><td>País</td><td>Nada: es el nivel más alto</td></tr>" +
    "<tr><td>Región</td><td>El país</td></tr>" +
    "<tr><td>Comuna</td><td>Su región y el país</td></tr>" +
    "<tr><td>Área urbana, aldea o localidad</td><td>Su comuna y su región</td></tr>" +
    "<tr><td>Zona</td><td>Su área urbana y su comuna</td></tr>" +
    "<tr><td>Manzana</td><td>Su zona, su área urbana o aldea, y su comuna</td></tr>" +
    "<tr><td>Entidad rural</td><td>Su localidad y su comuna</td></tr>" +
    "</tbody></table></div>" +
    "<p>Y la pregunta final: las <strong>«Personas»</strong> de dos comunas sí se suman, porque son conteos de territorios que no se tocan. El <strong>«Promedio de edad»</strong>, no: el promedio de las dos juntas depende de cuántas personas tiene cada una. Al comparar, la ficha pasa a una tabla: una columna por territorio y, al lado, la región y el país. No agrega una fila de totales: la suma, si corresponde, la haces tú.</p>" +
    "<div class='destacado'><p>Con la densidad pasa lo mismo, y se ve más: Quilpué tiene 303,3 habitantes por kilómetro cuadrado y Viña del Mar 2.778,9. Sumarlas da un número que no describe a ninguna de las dos ni a ambas juntas.</p></div>" +
    "<div class='tarjeta'><h3>Conceptos de esta pantalla</h3><p>Definiciones oficiales del INE. Cada enlace abre el documento (PDF) en otra pestaña, en la página citada.</p><p><strong>Entidad urbana:</strong> «un asentamiento humano con continuidad y concentración de construcciones en un amanzanamiento regular con población mayor a 2.000 habitantes, o entre 1.001 y 2.000 habitantes donde menos del 50% de la población que declara haber trabajado se dedica a actividades primarias». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=20' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 20</a></p><p><strong>Aldea:</strong> «el área rural concentrada o “aldea”, también subdividida en manzanas». Tiene entre 301 y 2.000 habitantes, con «amanzanamiento, concentración, continuidad de construcciones». <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/N5_Nota%20Tecnica_indeterminacion_geografica_CPV2024.pdf#page=1' target='_blank' rel='noopener' style='color:var(--c-azul)'>Nota técnica 5, p. 1</a> · <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/Manual_uso_cartografia_CPV2024.pdf#page=6' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de cartografía, p. 6</a></p><p><strong>Entidad rural:</strong> «un asentamiento humano con población menor o igual a 1.000 habitantes, o entre 1.001 y 2.000 habitantes donde más del 50% de la población que declara haber trabajado se dedica a actividades primarias». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=20' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 20</a></p><p><strong>Zona censal y localidad:</strong> en el área urbana, «Entidad urbana → Zona Censal → Manzana»; en la rural, «Localidad → Entidad rural → Manzana aldea (solo en categoría Aldea)». Las traza el INE «con objetivos operativos, por lo que no revisten un carácter legal». <a href='https://storage.googleapis.com/bktdescargascenso2024/Datos_agregados/Manual_uso_cartografia_CPV2024.pdf#page=6' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de cartografía, p. 6</a></p><p><strong>Manzana:</strong> «la unidad geográfica básica con fines estadísticos que conforman zonas censales en áreas urbanas y aldeas en el ámbito rural, contiene un grupo de viviendas contiguas o separadas, edificios, establecimientos y/o predios, delimitados por rasgos geográficos, culturales y naturales». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=20' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 20</a></p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Lo que se suma y lo que no",
  html: "<p>Antes de sumar cifras de dos fichas, tres preguntas. Si las respuestas son «se cuenta», «el conteo» y «sí», la suma vale:</p>" +
    "<ol class='flujo'>" +
    "<li><span class='paso-num'>1</span><strong>¿Se cuenta o se calcula?</strong>Personas, hogares y viviendas se cuentan. Un promedio, una razón o una densidad se calculan: no se suman.</li>" +
    "<li><span class='paso-num'>2</span><strong>¿Es el conteo o su porcentaje?</strong>El conteo se suma; su porcentaje, no: 20,5 % más 26,7 % no es el de las dos comunas juntas.</li>" +
    "<li><span class='paso-num'>3</span><strong>¿Mismo nivel y no se tocan?</strong>Dos comunas, o dos manzanas. No una comuna con su región: la comuna ya está contada dentro.</li>" +
    "<li class='fuera'><span class='etiqueta'>Resultado</span><strong>Se suma</strong>Y el resultado es el total de los dos territorios juntos.</li>" +
    "</ol>" +
    "<p>Las 16 cifras fijas de la ficha, según la primera pregunta:</p>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Sección</th><th scope='col'>Se cuentan: se suman</th><th scope='col'>Se calculan: no se suman</th></tr></thead>" +
    "<tbody>" +
    "<tr><td>Resumen</td><td>Personas · Hogares · Viviendas particulares</td><td>Promedio de personas por hogar · Promedio de edad · Razón hombre - mujer · Densidad poblacional</td></tr>" +
    "<tr><td>Hogares</td><td>Hogares unipersonales · Hogares con jefatura de hogar femenina · Hogares solo de personas de 60 años o más</td><td>—</td></tr>" +
    "<tr><td>Vivienda y servicios</td><td>Viviendas particulares ocupadas · Déficit habitacional cuantitativo · Viviendas hacinadas · Red pública (agua) · WC dentro de la vivienda, conectado al alcantarillado · Acceso a internet (hogares)</td><td>—</td></tr>" +
    "<tr><td><strong>Total</strong></td><td><strong>12</strong></td><td><strong>4</strong></td></tr>" +
    "</tbody></table></div>" +
    "<div class='advertencia'><p><strong>El error no avisa.</strong> La ficha no dice qué cifras se suman, y una planilla suma promedios y porcentajes igual que conteos: el resultado se ve como cualquier otro número. En las tarjetas de Hogares y de Vivienda, además, la cifra grande es el porcentaje: para sumar, usa el número que va debajo.</p></div>" +
    "<div class='tarjeta'><h3>Conceptos de esta pantalla</h3><p>Definiciones oficiales del INE. Cada enlace abre el documento (PDF) en otra pestaña, en la página citada.</p><p><strong>Hogar:</strong> «una o más personas, que residen en una misma vivienda o parte de ella y se benefician de un mismo presupuesto para alimentación. Las personas que conforman un hogar pueden tener vínculos familiares o no». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/03/Glosario_CPV2024-1.pdf#page=1' target='_blank' rel='noopener' style='color:var(--c-azul)'>Glosario de conceptos generales, p. 1</a></p><p><strong>Vivienda particular ocupada:</strong> «aquellas viviendas particulares en las que viven personas de manera habitual y fueron contabilizadas durante el proceso de recolección oficial de datos. Al momento de la visita puede que estas personas se hayan encontrado o no presentes». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/03/Glosario_CPV2024-1.pdf#page=2' target='_blank' rel='noopener' style='color:var(--c-azul)'>Glosario de conceptos generales, p. 2</a></p><p><strong>Hogares con jefatura de hogar femenina:</strong> «Porcentaje de hogares en que su jefatura de hogar es de sexo mujer». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=81' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 81</a></p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Cada porcentaje tiene su total",
  html: "<p>Un porcentaje dice cuántos de un total, y en la ficha cada indicador tiene el suyo: el de las <strong>personas</strong>, el de los <strong>hogares</strong> o el de las <strong>viviendas</strong>. Las tarjetas de Hogares y de Vivienda lo anotan bajo el nombre («% de hogares», «% de viviendas»), y tres de ellas traen un botón «i» con su definición; en las demás cifras hay que preguntárselo. Tres cifras de Quilpué, cada una sobre su total:</p>" +
    "<figure class='barras-par'><div class='bp-paneles'>" +
    "<div class='bp-panel'><p class='bp-titulo'>Sobre las personas<span>162.559 personas en Quilpué = toda la barra</span></p>" +
    "<div class='bp-fila'><span class='bp-etq'>60 años o más</span><span class='bp-pista' style='background:var(--c-fondo);border:1px solid var(--c-borde);border-left:2px solid var(--c-texto-suave);border-radius:0 4px 4px 0'><span class='bp-barra bp-a' style='width:24.1%'></span><span class='bp-valor'>24,1 %</span></span></div>" +
    "</div>" +
    "<div class='bp-panel'><p class='bp-titulo'>Sobre los hogares<span>59.451 hogares en Quilpué = toda la barra</span></p>" +
    "<div class='bp-fila'><span class='bp-etq'>Solo de 60 años o más</span><span class='bp-pista' style='background:var(--c-fondo);border:1px solid var(--c-borde);border-left:2px solid var(--c-texto-suave);border-radius:0 4px 4px 0'><span class='bp-barra bp-c' style='width:20%'></span><span class='bp-valor'>20,0 %</span></span></div>" +
    "<div class='bp-fila'><span class='bp-etq'>Unipersonales</span><span class='bp-pista' style='background:var(--c-fondo);border:1px solid var(--c-borde);border-left:2px solid var(--c-texto-suave);border-radius:0 4px 4px 0'><span class='bp-barra bp-c' style='width:20.5%'></span><span class='bp-valor'>20,5 %</span></span></div>" +
    "</div></div>" +
    "<figcaption>Cada barra completa es el total de su panel: las personas en uno, los hogares en el otro.</figcaption></figure>" +
    "<p>El 24,1 % y el 20,0 % <strong>no se pueden comparar</strong>: uno cuenta personas y el otro hogares. En cambio, el 20,0 % y el 20,5 % sí comparten total: los dos son porcentajes de los hogares.</p>" +
    "<div class='destacado'><p>A veces el total es un grupo más chico. En la temática «Asistencia», cada indicador se calcula sobre su tramo de edad: la asistencia de 6 a 13 años, sobre las personas de 6 a 13. Y hay una excepción en la ficha: el <strong>déficit habitacional</strong> se expresa como «% de viviendas», porque se habla de viviendas con déficit, pero se calcula sobre los hogares. Las viviendas hacinadas, en cambio, sí son un porcentaje de las viviendas. <strong>Antes de comparar dos porcentajes, pregúntate de qué total son.</strong> Si no es el mismo, compara cada uno con su región o su país, no entre ellos.</p></div>" +
    "<div class='tarjeta'><h3>Conceptos de esta pantalla</h3><p>Definiciones oficiales del INE. Cada enlace abre el documento (PDF) en otra pestaña, en la página citada.</p><p><strong>Viviendas hacinadas:</strong> el hacinamiento es «la relación entre el total de personas que reside en una vivienda y el total de dormitorios que hay en esta y que son de uso exclusivo para dormir». Una vivienda está hacinada con «2,5 o más personas por dormitorio», o si no tiene dormitorios y residen «dos o más personas». Se calcula sobre las viviendas particulares ocupadas con moradores presentes. <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/12/manual_uso_microdatos_censo2024.pdf#page=102' target='_blank' rel='noopener' style='color:var(--c-azul)'>Manual de uso de microdatos, p. 102</a></p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Cuando falta el dato",
  html: "<p>No todo lo que se ve vacío o en cero significa lo mismo. Una manzana de Quilpué con 384 personas lo muestra en la misma ficha:</p>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_m2_manzana_tres_estados.png' alt='Tres tarjetas bajo el título Indicadores agregados, en la ficha de la manzana 5801011001018 de Quilpué: Personas de 60 años o más, 120 y 31,3 %; Inmigrantes internacionales, S/D; Afrodescendientes, 0 y 0,0 %. Bajo cada una, las cifras de su zona, de su área urbana y de la comuna'>" +
    "<span class='rot' style='left:32%;top:29%'>1 · Un valor</span>" +
    "<span class='rot' style='left:81%;top:30%'>2 · S/D</span>" +
    "<span class='rot' style='left:31%;top:73%'>3 · Un cero</span>" +
    "</div><figcaption><span class='paso-num'>1</span> 120 personas de 60 años o más: el 31,3 % de la manzana. <span class='paso-num'>2</span> Inmigrantes internacionales: S/D. <span class='paso-num'>3</span> Afrodescendientes: 0, es decir, 0,0 %.</figcaption></figure>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Lo que ves</th><th scope='col'>Qué significa</th><th scope='col'>Qué no significa</th></tr></thead>" +
    "<tbody>" +
    "<tr><td>«0»</td><td>Se contó y no hay casos</td><td>Que falte el dato</td></tr>" +
    "<tr><td>«S/D» en un promedio o una razón, o «-» en la tabla de una comparación</td><td>No hay población sobre la cual calcularlo</td><td>Que se haya ocultado algo</td></tr>" +
    "<tr><td>«S/D» en una característica de las personas</td><td>Lo más probable: el dato existe, pero no se publica a ese nivel por <strong>secreto estadístico</strong></td><td>Que el valor sea cero</td></tr>" +
    "</tbody></table></div>" +
    "<h2>Por qué se protege un dato</h2>" +
    "<ol class='flujo'>" +
    "<li><span class='paso-num'>1</span><strong>Pocos casos</strong>En una manzana, muy pocas personas tienen cierta característica.</li>" +
    "<li><span class='paso-num'>2</span><strong>Se las podría identificar</strong>Con la cifra y el lugar, alguien podría saber quiénes son.</li>" +
    "<li><span class='paso-num'>3</span><strong>La cifra no se publica</strong>En el mapa, el panel dice que no está disponible «por razones de control de divulgación». En la ficha, lo más probable es que se vea como «S/D».</li>" +
    "<li class='fuera'><span class='paso-num'>4</span><span class='etiqueta'>Qué hacer</span><strong>Búscala más arriba</strong>En la zona, el área urbana o la comuna, donde sí se publica.</li>" +
    "</ol>" +
    "<p>El secreto estadístico es una <strong>obligación legal</strong> del INE (Ley N° 17.374; Ley N° 19.628, sobre protección de la vida privada). Su huella se ve en los datos de las personas —origen, nacionalidad, pueblo, lengua, religión—: en las 2.013 manzanas de Quilpué, esas características nunca aparecen con 1, 2 o 3 personas. La ficha no dice cuál es la regla; ese patrón es lo que se observa.</p>" +
    "<div class='advertencia'><p><strong>Un «S/D» sumado como cero deja el total por debajo del real</strong>, y no sabes cuánto.</p></div>" +
    "<div class='destacado'><p><strong>Una trampa que vas a encontrar:</strong> en las manzanas sin base censal, la ficha muestra «Promedio de edad 0,0 años». No es un dato: esa manzana no tiene personas. En Quilpué son 268 de 2.013.</p></div>" +
    "<div class='tarjeta'><h3>Conceptos de esta pantalla</h3><p>Definiciones oficiales del INE. Cada enlace abre el documento (PDF) en otra pestaña, en la página citada.</p><p><strong>Inmigración internacional:</strong> «el movimiento de personas que llegan a residir habitualmente al país desde el extranjero». El censo la identifica con la pregunta 25: «Cuando nació, ¿en qué comuna o país vivía su madre?». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/04/Glosario_fecundidad_migracion_CPV2024.pdf#page=2' target='_blank' rel='noopener' style='color:var(--c-azul)'>Glosario de fecundidad y migración, p. 2</a></p></div>" },

{ modulo: 1, tipo: "clasificar", titulo: "Ejercicio: ¿se puede sumar?", evalua: true,
  html: "<p>Nueve sumas que alguien quiere hacer con fichas territoriales. Clasifica cada una: <strong>se puede sumar</strong>, <strong>no se suma</strong> o <strong>el total queda incompleto</strong>. La tercera es la que no avisa: la suma se puede hacer, pero falta un dato que no es cero. Este ejercicio es la evaluación del módulo.</p>",
  instruccion: "Clasifica cada suma:",
  categorias: [
    { id: "si", nombre: "Se puede sumar" },
    { id: "no", nombre: "No se suma" },
    { id: "incompleto", nombre: "El total queda incompleto" }
  ],
  fichas: [
    { t: "Las «Personas» de dos comunas vecinas, para tener la población de ambas", cat: "si" },
    { t: "Los «Hogares con jefatura de hogar femenina» de tres comunas", cat: "si" },
    { t: "Las «Viviendas hacinadas» de cuatro manzanas, todas con valor", cat: "si" },
    { t: "El «Promedio de edad» de dos comunas", cat: "no" },
    { t: "La «Densidad poblacional» de Quilpué y la de Viña del Mar", cat: "no" },
    { t: "El porcentaje de hogares unipersonales de dos comunas", cat: "no" },
    { t: "Las «Personas» de Quilpué y las de la Región de Valparaíso", cat: "no" },
    { t: "Los «Inmigrantes internacionales» de cinco manzanas, dos de ellas con «S/D»", cat: "incompleto" },
    { t: "Las personas de un pueblo originario de diez manzanas, tres de ellas con «S/D»", cat: "incompleto" }
  ],
  cierre: "Se suman los conteos de territorios que no se tocan. No se suman los promedios, las razones, las densidades ni los porcentajes, y tampoco un territorio con el que lo contiene: Quilpué ya está dentro de la región. Y una suma con «S/D» se puede hacer, pero el resultado queda bajo el real sin decir cuánto: ese total hay que buscarlo en el nivel donde se publica." }
  ]
};
