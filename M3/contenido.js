const CONTENIDO = {
  id: "cl.ine.censo.visualizador-v2.M3",
  titulo: "Curso Visualizador Geográfico Censo 2024 · M3 — ¿Cómo comparo dos indicadores?",
  aprobacion: 60,
  modulos: [
    {id: "B", titulo: "Presentación del módulo", color: "var(--ine-blue)"},
    {id: "M3", titulo: "¿Cómo comparo dos indicadores?", color: "var(--accent-category)"}
  ],
  pantallas: [

{ modulo: 0, tipo: "contenido", titulo: "Presentación del módulo",
  html: "<p>El <strong>«Mapa comparado»</strong> muestra <strong>dos indicadores a la vez</strong> sobre el mismo territorio. Cada uno se divide en tres tramos —bajo, medio y alto— y del cruce salen nueve casillas, cada una con su color. El color de un territorio dice en qué casilla cayó.</p>" +
    "<div class='matriz3-wrap' style='max-width:600px;margin:18px auto;padding:14px 12px 10px;border:2px solid var(--c-azul);border-radius:12px;background:var(--c-blanco)'><table class='matriz3' style='border-spacing:3px'>" +
    "<caption>En la diagonal, los dos indicadores suben juntos: es el patrón. En las dos esquinas con borde, uno es alto y el otro bajo: son los territorios que no siguen el patrón, y suelen ser los más interesantes.</caption>" +
    "<thead><tr><td class='m3-vacio'></td><th colspan='3' scope='colgroup' class='m3-eje'>Indicador del eje horizontal</th></tr>" +
    "<tr><th scope='col' class='m3-eje'>Indicador del eje vertical</th><th scope='col'>Bajo</th><th scope='col'>Medio</th><th scope='col'>Alto</th></tr></thead>" +
    "<tbody>" +
    "<tr><th scope='row'>Alto</th><td class='discordante'><strong>Alto · Bajo</strong><small>No sigue el patrón</small></td><td></td><td class='sigue'><strong>Alto · Alto</strong><small>Los dos altos</small></td></tr>" +
    "<tr><th scope='row'>Medio</th><td></td><td class='sigue'></td><td></td></tr>" +
    "<tr><th scope='row'>Bajo</th><td class='sigue'><strong>Bajo · Bajo</strong><small>Los dos bajos</small></td><td></td><td class='discordante'><strong>Bajo · Alto</strong><small>No sigue el patrón</small></td></tr>" +
    "</tbody></table></div>" +
    "<p><strong>Cómo se lee una casilla:</strong></p>" +
    "<ol>" +
    "<li>Busca la <strong>fila</strong>: dónde cae el territorio en el indicador del eje vertical.</li>" +
    "<li>Busca la <strong>columna</strong>: dónde cae en el indicador del eje horizontal.</li>" +
    "<li>La casilla donde se cruzan es su color en el mapa. Su nombre lleva primero la palabra del eje vertical: «Alto · Bajo» es alto en el vertical y bajo en el horizontal.</li>" +
    "</ol>" +
    "<p>No eliges dos indicadores cualesquiera: el visualizador trae <strong>25 comparaciones ya definidas</strong>, repartidas en 20 de sus 35 temáticas; en las otras 15 no hay mapa comparado. Y al entrar en «Mapa comparado» desaparece el control «% Relativo» / «# Absoluto»: cada eje ya trae definido cómo se calcula.</p>" +
    "<div class='destacado'><p>Es la función más fácil de usar mal: en dos clics produce una imagen que parece un hallazgo. Este módulo enseña a leerla y, sobre todo, <strong>qué se puede afirmar con ella y qué no</strong>.</p></div>" +
    "<p><em>A este tipo de mapa se le llama <strong>bivariado</strong>. Es el término técnico: en el visualizador no aparece como rótulo.</em></p>" },

{ modulo: 1, tipo: "video", titulo: "El recorrido, en video",
  html: "<p>El mapa comparado, de corrido, con el par «Analfabetismo y envejecimiento». Fíjate en dos cosas: los pares se eligen <strong>dentro de la temática</strong>, y la leyenda se abre sola, con los números de cada eje. El video parte con el nivel fijado en «Comunas».</p>",
  video: "assets/video/E-R3-video.mp4",
  poster: "assets/video/E-R3-video.jpg",
  subtitulos: "assets/video/E-R3-video.vtt",
  duracion: "1:07" },

{ modulo: 1, tipo: "contenido", titulo: "Misión: tu comuna en el mapa comparado",
  html: "<p>Ahora te toca a ti, sobre el visualizador en vivo: vas a ubicar tu comuna en la matriz de nueve casillas, con el mismo par del video.</p>" +
    "<div class='mision'><div class='m-cab'>Misión · sobre el visualizador en vivo</div><div class='m-cuerpo'>" +
    "<ol>" +
    "<li>Abre el visualizador con el enlace de abajo. La primera vez te pide aceptar los términos de uso: marca la casilla y pulsa <strong>«Aceptar»</strong>.</li>" +
    "<li>Elige la temática <strong>Asistencia</strong>, en la dimensión Población, y cambia de «Ver un indicador» a <strong>«Mapa comparado»</strong>.</li>" +
    "<li>Elige el par <strong>«Analfabetismo y envejecimiento»</strong>.</li>" +
    "<li>Acércate a tu comuna con la rueda del mouse o con los botones + y −.</li>" +
    "<li>En el control del nivel, fija <strong>«Comunas»</strong>.</li>" +
    "<li>Haz clic en tu comuna: el panel de la derecha muestra sus dos valores y, junto a cada uno, si es <strong>«Bajo»</strong>, <strong>«Medio»</strong> o <strong>«Alto»</strong>.</li>" +
    "<li>Con esos dos grupos, busca su casilla en la leyenda y compárala con el color de tu comuna en el mapa.</li>" +
    "</ol>" +
    "<details class='ayuda'><summary>¿Algo no aparece como esperabas?</summary><div class='ayuda-cuerpo'><ul>" +
    "<li><strong>«Esta temática no tiene comparaciones predefinidas»:</strong> la temática que elegiste no tiene mapa comparado; solo 20 de las 35 lo tienen. Para esta misión, elige Asistencia.</li>" +
    "<li><strong>El mapa tiene colores, pero no ves la matriz de nueve casillas:</strong> falta elegir el par. La leyenda del mapa comparado aparece recién ahí.</li>" +
    "<li><strong>Cerraste la leyenda:</strong> se vuelve a abrir con el botón «Leyenda», abajo del mapa.</li>" +
    "<li><strong>No uses la lista de regiones ni la de comunas</strong> en esta misión. Marcar un territorio lo filtra, y el filtro cambia los cortes de la leyenda: lo vemos en el caso de este módulo.</li>" +
    "<li><strong>Míralo hecho:</strong> en el video de la pantalla anterior, entre el 0:09 y el 0:22 se elige el par.</li>" +
    "</ul></div></details>" +
    "<p><a class='enlace-externo' href='https://storage.googleapis.com/visualizador_v2/index.html' target='_blank' rel='noopener'>Ir al visualizador</a></p>" +
    "<label for='m3-respuesta'><strong>Anota tres cosas</strong></label>" +
    "<textarea id='m3-respuesta' rows='3' style='width:100%;font:inherit;padding:10px;border:2px solid var(--c-borde);border-radius:8px;margin-top:6px' placeholder='Los dos valores de tu comuna y la casilla en que cae'></textarea>" +
    "<div class='valor-esperado'><strong>Contrasta en la pantalla siguiente.</strong> Lo que escribas aquí no se envía ni se corrige.</div>" +
    "</div></div>" +
    "<p><strong>Una lectura guiada, con Quilpué:</strong></p>" +
    "<figure class='captura'><div class='marco'>" +
    "<img src='assets/capturas/v2_m3_lectura_quilpue.png' alt='Mapa comparado de Valparaíso y Santiago por comunas con el par Analfabetismo y envejecimiento: a la izquierda, la tarjeta del par elegida; abajo, la leyenda de nueve casillas con 0 %, 3 % y más de 5 % en el eje horizontal y 9 %, 21 % y más de 24 % en el vertical; al centro, Quilpué marcada; a la derecha, el panel con 1,0 % de personas de 15 años o más que no saben leer o escribir, Bajo, y 24,1 % de personas de 60 años o más, Alto'>" +
    "<span class='rot' style='left:15.5%;top:56.5%'>1 · El par</span>" +
    "<span class='rot' style='right:15%;top:15%'>2 · Sus dos valores y su grupo</span>" +
    "<span class='rot' style='left:38.5%;top:85%'>3 · Los números de cada eje</span>" +
    "<span class='rot' style='left:44%;top:52.5%'>4 · Quilpué y su casilla</span>" +
    "</div><figcaption><span class='paso-num'>1</span> «Analfabetismo y envejecimiento», en la temática Asistencia. <span class='paso-num'>2</span> El panel da 1,0 % de personas de 15 años o más que no saben leer o escribir, <strong>«Bajo»</strong>, y 24,1 % de personas de 60 años o más, <strong>«Alto»</strong>. <span class='paso-num'>3</span> La leyenda muestra dónde están los cortes: «3%» y «&gt; 5%» en el eje horizontal; «21%» y «&gt; 24%» en el vertical. <span class='paso-num'>4</span> Alto en el eje vertical y bajo en el horizontal: la casilla «Alto · Bajo», el mismo color que tiene Quilpué en el mapa.</figcaption></figure>" },

{ modulo: 1, tipo: "contenido", titulo: "Cómo se resuelve",
  html: "<p>Al hacer clic en tu comuna, el panel de la derecha te dio sus dos valores y, junto a cada uno, en qué grupo cae: <strong>«Bajo»</strong>, <strong>«Medio»</strong> o <strong>«Alto»</strong>. Con esos dos grupos se ubica la casilla. Así se resuelve con Quilpué, en el mapa por comunas y sin filtro:</p>" +
    "<ol class='flujo'>" +
    "<li><span class='paso-num'>1</span><strong>Eje horizontal: «Bajo»</strong>1,0 % de personas de 15 años o más que no saben leer o escribir.</li>" +
    "<li><span class='paso-num'>2</span><strong>Eje vertical: «Alto»</strong>24,1 % de personas de 60 años o más.</li>" +
    "<li><span class='paso-num'>3</span><strong>La casilla</strong>Fila «Alto», columna «Bajo»: «Alto · Bajo».</li>" +
    "<li><span class='paso-num'>4</span><strong>Qué significa</strong>Muchas personas mayores y poco analfabetismo: Quilpué no sigue el patrón.</li>" +
    "</ol>" +
    "<div class='matriz3-wrap' style='max-width:600px;margin:18px auto;padding:14px 12px 10px;border:2px solid var(--c-azul);border-radius:12px;background:var(--c-blanco)'><table class='matriz3' style='border-spacing:3px'>" +
    "<caption>Quilpué cae en una de las dos esquinas con borde: alto en un indicador y bajo en el otro.</caption>" +
    "<thead><tr><td class='m3-vacio'></td><th colspan='3' scope='colgroup' class='m3-eje'>% personas de 15 años o más que no saben leer o escribir</th></tr>" +
    "<tr><th scope='col' class='m3-eje'>% personas de 60 años o más</th><th scope='col'>Bajo</th><th scope='col'>Medio</th><th scope='col'>Alto</th></tr></thead>" +
    "<tbody>" +
    "<tr><th scope='row'>Alto</th><td class='discordante'><strong>Quilpué</strong><small>Alto · Bajo</small></td><td></td><td class='sigue'></td></tr>" +
    "<tr><th scope='row'>Medio</th><td></td><td class='sigue'></td><td></td></tr>" +
    "<tr><th scope='row'>Bajo</th><td class='sigue'></td><td></td><td class='discordante'></td></tr>" +
    "</tbody></table></div>" +
    "<p>Si tu comuna cayó en la diagonal, sigue el patrón: los dos indicadores van juntos. Si cayó en una esquina con borde, como Quilpué, es de las que no lo siguen.</p>" +
    "<div class='advertencia'><p><strong>El grupo que dice el panel vale para el mapa que armaste:</strong> nivel «Comunas», sin filtro. Con un filtro o con otro nivel, la misma comuna puede cambiar de grupo sin que cambien sus valores. Lo vemos en el caso de este módulo.</p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Coincidir no es causar",
  html: "<p>Que dos indicadores sean altos en las mismas comunas significa exactamente eso: que <strong>coinciden en el territorio</strong>. No significa que uno provoque al otro. Un ejemplo clásico de las clases de estadística, que popularizó Robert Matthews en la revista <em>Teaching Statistics</em> (2000): en Europa, los países con más parejas de cigüeñas tienen más nacimientos. Las cigüeñas no traen guaguas: los países más grandes tienen más de las dos cosas.</p>" +
    "<div class='dos-columnas'>" +
    "<div class='tarjeta'><h3>Las cigüeñas</h3><div style='padding:10px 12px;border-radius:8px;font-size:13.5px;line-height:1.35;text-align:center;margin:0 auto;max-width:80%;background:var(--c-azul-claro);border:2px solid var(--c-azul)'><strong>Tercer factor</strong><br>El tamaño del país</div><div style='display:grid;grid-template-columns:1fr 1fr;gap:0 14px'><span aria-hidden='true' style='display:block;width:0;height:0;margin:4px auto;border-left:8px solid transparent;border-right:8px solid transparent;border-top:12px solid var(--c-azul)'></span><span aria-hidden='true' style='display:block;width:0;height:0;margin:4px auto;border-left:8px solid transparent;border-right:8px solid transparent;border-top:12px solid var(--c-azul)'></span><div style='padding:10px 12px;border-radius:8px;font-size:13.5px;line-height:1.35;text-align:center;background:var(--c-blanco);border:1px solid var(--c-borde)'>Más parejas de cigüeñas</div><div style='padding:10px 12px;border-radius:8px;font-size:13.5px;line-height:1.35;text-align:center;background:var(--c-blanco);border:1px solid var(--c-borde)'>Más nacimientos</div></div><p style='margin:8px 0 0;padding-top:6px;border-top:2px dashed var(--c-naranjo);text-align:center;font-size:12.5px'>Coinciden, pero ninguno causa el otro</p></div>" +
    "<div class='tarjeta'><h3>Alto del Carmen</h3><p><strong>Lo que el mapa muestra:</strong> 28,2 % de las personas tiene 60 años o más y 6,5 % de las de 15 años o más no sabe leer o escribir. Los dos, altos.</p><p style='margin-top:8px;padding-top:6px;border-top:2px dashed var(--c-naranjo)'><strong>Lo que no muestra:</strong> quiénes son las personas que no saben leer o escribir. Que sean las mayores es una explicación posible, no un dato del mapa.</p></div>" +
    "</div>" +
    "<div class='comparacion'>" +
    "<div class='col no'><h4>No se sostiene</h4><p>«En Alto del Carmen, el envejecimiento <strong>eleva</strong> el analfabetismo.»</p>" +
    "<p class='detalle'>La dirección —qué produce qué— no está en ningún dato: la puso quien escribió la frase.</p></div>" +
    "<div class='col ok'><h4>Se sostiene</h4><p>«En Alto del Carmen, el analfabetismo y el envejecimiento son altos a la vez. Una explicación posible, que no sale del mapa: <strong>las generaciones mayores tuvieron menos acceso a la escuela</strong>.»</p>" +
    "<p class='detalle'>Describe lo que el mapa muestra, y lo que agrega lo declara como lo que es: una explicación traída de fuera.</p></div>" +
    "</div>" +
    "<div class='destacado'><p><strong>Ante cualquier par que coincida, pregúntate: ¿hay algo que explique los dos a la vez?</strong> Si lo encuentras, nómbralo. Y al revisar un texto, busca el verbo: produce, provoca, causa, eleva, genera, lleva a, se debe a. Si el verbo que une los dos indicadores tiene dirección, la afirmación agrega algo que el mapa no muestra.</p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Cómo se compara: el caso de Freirina",
  html: "<p>Comparar dos indicadores en el mapa son cuatro pasos, y el segundo es el que más se olvida:</p>" +
    "<ol class='flujo'>" +
    "<li><span class='paso-num'>1</span><strong>Elige el par</strong>Dentro de la temática: 20 de las 35 traen comparaciones.</li>" +
    "<li class='fuera'><span class='paso-num'>2</span><span class='etiqueta'>Decide</span><strong>Fija el universo</strong>El nivel, y si filtras una región o no. De eso salen los cortes.</li>" +
    "<li><span class='paso-num'>3</span><strong>Lee cada eje</strong>Con los números de la leyenda: bajo, medio o alto.</li>" +
    "<li><span class='paso-num'>4</span><strong>Dilo con su universo</strong>«Entre las comunas del país…», «entre las de Atacama…».</li>" +
    "</ol>" +
    "<h2>El caso de Freirina</h2>" +
    "<p>Freirina es una de las nueve comunas de la Región de Atacama. Vamos a mirarla dos veces con el mismo par, «Analfabetismo y envejecimiento», y el nivel en «Comunas»: primero en el mapa de todo el país, sin filtro; después con la Región de Atacama marcada en la lista de regiones. Sus dos valores no cambian —3,8 % de personas de 15 años o más que no saben leer o escribir y 22,5 % de personas de 60 años o más—, pero su casilla sí. La razón está en cómo se arman los tramos.</p>" +
    "<div class='destacado'><p><strong>Qué es un corte.</strong> El visualizador ordena las comunas de menor a mayor en cada indicador y las parte en tres grupos del mismo tamaño: el tercio más bajo, el del medio y el más alto. El corte es el valor donde termina un tercio. Si cambias el conjunto de comunas que se reparte —con un filtro o con otro nivel—, cambian los cortes.</p></div>" +
    "<p>Así quedan los cortes del eje horizontal en los dos mapas, con Freirina en su lugar:</p>" +
    "<figure style='margin:18px 0'>" +
    "<div style='margin:10px 0 18px'><p style='margin:0 0 2px;font-size:13px;font-weight:700;color:var(--c-azul)'>Entre las 345 comunas del país</p><div style='position:relative;padding:24px 0 26px'><div style='display:flex;height:28px;border-radius:6px;overflow:hidden;border:1px solid var(--c-borde);font-size:12px;font-weight:700'><span style='width:17.9%;background:var(--c-fondo);color:var(--c-texto);display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap'>Bajo</span><span style='width:15.0%;background:var(--c-azul-claro);color:var(--c-texto);display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap'>Medio</span><span style='flex:1;background:var(--c-azul-medio);color:var(--c-blanco);display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap'>Alto</span></div><span style='position:absolute;left:17.9%;top:54px;transform:translateX(-50%);font-size:12px;color:var(--c-texto-suave);white-space:nowrap'>3%</span><span style='position:absolute;left:32.9%;top:54px;transform:translateX(-50%);font-size:12px;color:var(--c-texto-suave);white-space:nowrap'>&gt; 5%</span><span style='position:absolute;left:27.1%;top:18px;height:40px;border-left:3px solid var(--c-naranjo)'></span><span style='position:absolute;left:27.1%;top:0;transform:translateX(-50%);font-size:12px;font-weight:700;white-space:nowrap'>Freirina 3,8 %</span></div></div>" +
    "<div style='margin:10px 0 18px'><p style='margin:0 0 2px;font-size:13px;font-weight:700;color:var(--c-azul)'>Entre las 9 comunas de Atacama</p><div style='position:relative;padding:24px 0 26px'><div style='display:flex;height:28px;border-radius:6px;overflow:hidden;border:1px solid var(--c-borde);font-size:12px;font-weight:700'><span style='width:12.1%;background:var(--c-fondo);color:var(--c-texto);display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap'>Bajo</span><span style='width:5.8%;background:var(--c-azul-claro);color:var(--c-texto);display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap'></span><span style='flex:1;background:var(--c-azul-medio);color:var(--c-blanco);display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap'>Alto</span></div><span style='position:absolute;left:12.1%;top:54px;transform:translateX(-50%);font-size:12px;color:var(--c-texto-suave);white-space:nowrap'>2%</span><span style='position:absolute;left:17.9%;top:54px;transform:translateX(-50%);font-size:12px;color:var(--c-texto-suave);white-space:nowrap'>&gt; 3%</span><span style='position:absolute;left:27.1%;top:18px;height:40px;border-left:3px solid var(--c-naranjo)'></span><span style='position:absolute;left:27.1%;top:0;transform:translateX(-50%);font-size:12px;font-weight:700;white-space:nowrap'>Freirina 3,8 %</span></div></div>" +
    "<figcaption>% personas de 15 años o más que no saben leer o escribir, en la misma escala. Freirina queda en el mismo lugar; los cortes se mueven.</figcaption></figure>" +
    "<div class='comparacion'>" +
    "<div class='col'><h4>Sin filtro · el país</h4><p class='cifra'>Medio · Medio</p><p class='detalle'>Freirina, en la casilla del centro.</p></div>" +
    "<div class='col'><h4>Con filtro Atacama</h4><p class='cifra'>Alto · Alto</p><p class='detalle'>Freirina, en la esquina alta. Con personas mayores pasa lo mismo: su 22,5 % es medio en el país y alto en Atacama.</p></div>" +
    "</div>" +
    "<div class='advertencia'><p><strong>La casilla no es una propiedad de la comuna:</strong> es su lugar dentro de un universo. Fija el nivel antes de comparar: en automático cambia solo al acercarte, y con él los cortes.</p></div>" +
    "<div class='destacado'><p><strong>Así lo hacen otros.</strong> La Oficina Nacional de Estadísticas del Reino Unido usó un mapa de este tipo para la mortalidad por COVID-19 de 2020, con dos tramos por eje cortados en la mediana. Un tutorial publicado en la revista <em>Preventing Chronic Disease</em>, de Estados Unidos, usa tres tramos con el mismo número de territorios, como el visualizador, y advierte que territorios con valores parecidos pueden caer en tramos distintos.</p></div>" },

{ modulo: 1, tipo: "contenido", titulo: "Comparaciones que exigen más cuidado",
  html: "<p>Algunas comparaciones cruzan una <strong>característica de un grupo de población</strong> —su edad, su origen— con una <strong>condición de vida</strong>. Son legítimas y responden preguntas de política pública. Pero leídas como causa, o como si hablaran de personas, producen <strong>una afirmación discriminatoria con apariencia de dato oficial</strong>. Tres del catálogo actual, en el mapa por comunas y sin filtro:</p>" +
    "<div class='tabla-wrap'><table class='tabla'>" +
    "<thead><tr><th scope='col'>Comparación</th><th scope='col'>Lo que muestra el mapa</th><th scope='col'>Lo que el mapa no dice</th></tr></thead>" +
    "<tbody>" +
    "<tr><td>«Analfabetismo y envejecimiento»<br>Temática Asistencia</td><td>63 comunas con los dos altos</td><td>Que quienes no saben leer o escribir sean las personas mayores</td></tr>" +
    "<tr><td>«Inmigración internacional y ocupación»<br>Temática Inmigración internacional</td><td>78 comunas con los dos altos</td><td>Que las personas ocupadas sean las inmigrantes, ni que la inmigración cree o quite empleo</td></tr>" +
    "<tr><td>«Envejecimiento y acceso a internet»<br>Temática Edad</td><td>76 comunas en la casilla «Alto» de personas mayores y «Bajo» de hogares con internet</td><td>Que los hogares sin internet sean los de personas mayores. En El Quisco, 32,4 % de las personas tiene 60 años o más y 95,0 % de los hogares tiene internet: está entre las 12 comunas con los dos altos</td></tr>" +
    "</tbody></table></div>" +
    "<div class='advertencia'><p><strong>El mapa habla de comunas, no de personas.</strong> Maipú tiene 6,2 % de inmigrantes internacionales y 56,0 % de personas ocupadas: los dos altos. El mapa no dice cuántas de esas personas ocupadas llegaron de otro país. Con estas comparaciones, primero escribe la pregunta y después abre el mapa.</p></div>" +
    "<div class='destacado'><p><strong>Para contrastar: «Pozo negro y basura enterrada o quemada»</strong>, en la temática Instalaciones sanitarias. Cruza dos condiciones de las viviendas, no un grupo de población. Coincide mucho —84 comunas en la casilla alta de los dos y solo 8 en las esquinas con borde— y aun así leerla como causa sería un error: una explicación posible, que no sale del mapa, es que donde no llega el alcantarillado tampoco llega la recolección de basura. La diferencia está en otra parte: un error con este par no le atribuye nada a un grupo de personas.</p></div>" +
    "<h2>Antes de afirmar algo con un mapa comparado</h2>" +
    "<ol class='flujo'>" +
    "<li><span class='paso-num'>1</span><strong>¿Qué mide cada eje?</strong>Un porcentaje de personas, de hogares o de viviendas: cada uno sobre su propio total.</li>" +
    "<li><span class='paso-num'>2</span><strong>¿Contra qué universo?</strong>El nivel y el filtro con que produjiste el mapa: de ellos salen los cortes.</li>" +
    "<li><span class='paso-num'>3</span><strong>¿Cerca de un corte?</strong>Si el valor está junto a un número de la leyenda, la casilla es frágil: dilo. Quilpué es «Alto» en personas mayores por 0,3 punto.</li>" +
    "<li><span class='paso-num'>4</span><strong>¿Qué verbo usé?</strong>Si tiene dirección —eleva, genera, lleva a—, lo pusiste tú. Si hay un tercer factor, nómbralo.</li>" +
    "</ol>" +
    "<div class='tarjeta'><h3>Conceptos de esta pantalla</h3><p>Definiciones oficiales del INE. Cada enlace abre el documento (PDF) en otra pestaña, en la página citada.</p><p><strong>Inmigración internacional:</strong> «el movimiento de personas que llegan a residir habitualmente al país desde el extranjero». El censo la identifica con la pregunta 25: «Cuando nació, ¿en qué comuna o país vivía su madre?». <a href='https://censo2024.ine.gob.cl/wp-content/uploads/2025/04/Glosario_fecundidad_migracion_CPV2024.pdf#page=2' target='_blank' rel='noopener' style='color:var(--c-azul)'>Glosario de fecundidad y migración, p. 2</a></p></div>" },

{ modulo: 1, tipo: "clasificar", titulo: "Ejercicio: ¿esta afirmación se sostiene?", evalua: true,
  html: "<p>Diez afirmaciones hechas con un mapa comparado. Clasifica cada una: <strong>se sostiene</strong>, <strong>no se sostiene</strong> o <strong>depende del filtro o del nivel</strong>. La tercera es la que hay que aprender a ver: afirmaciones sin error de lógica a las que les falta decir contra qué universo se hicieron. Este ejercicio es la evaluación del módulo.</p>",
  instruccion: "Clasifica cada afirmación según lo que se puede defender:",
  categorias: [
    { id: "si", nombre: "Se sostiene" },
    { id: "no", nombre: "No se sostiene" },
    { id: "universo", nombre: "Depende del filtro o del nivel" }
  ],
  fichas: [
    { t: "Entre todas las comunas del país, Alto del Carmen está en la casilla alta de los dos indicadores", cat: "si" },
    { t: "En estas comunas, el envejecimiento eleva el analfabetismo", cat: "no" },
    { t: "Freirina está en la casilla alta de los dos indicadores", cat: "universo" },
    { t: "Entre las 345 comunas del país, hay algunas con muchas personas mayores y poco analfabetismo: no todas siguen el patrón", cat: "si" },
    { t: "La inmigración internacional genera ocupación en estas comunas", cat: "no" },
    { t: "Mi comuna está en la casilla «Bajo · Bajo» del mapa comparado", cat: "universo" },
    { t: "Los dos indicadores coinciden; una explicación posible, que no sale del mapa, es que las generaciones mayores tuvieron menos acceso a la escuela", cat: "si" },
    { t: "En estas comunas, el envejecimiento lleva a tener menos internet en el hogar", cat: "no" },
    { t: "Entre las 345 comunas del país, 84 están en la casilla alta de pozo negro y de basura enterrada o quemada", cat: "si" },
    { t: "Tierra Amarilla está en la clase media de analfabetismo", cat: "universo" }
  ],
  cierre: "Las tres que no se sostienen tienen un verbo con dirección: eleva, genera, lleva a. Las tres que dependen del filtro o del nivel no tienen error de lógica, pero ubican una comuna en una casilla sin decir contra qué universo: Freirina, por ejemplo, queda al centro de la matriz entre las comunas del país y sube de casilla con el filtro de Atacama. Compáralas con la de Alto del Carmen, que dice «entre todas las comunas del país»: por eso esa sí se sostiene." }
  ]
};
