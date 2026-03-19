// ============================================
// LENGUA Y COMUNICACIÓN II - SEGUNDO TRIMESTRE
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const lengua2 = {
    id: "lengua2",
    nombre: "LENGUA Y COMUNICACIÓN II",
    icono: "📖",
    descripcion: "Reseña, comentario crítico, análisis literario, exposición oral, debate",
    modulos: {
        // ========== MÓDULO 1: RESEÑA Y COMENTARIO CRÍTICO ==========
        modulo1: {
            nombre: "Módulo 1: Reseña y comentario crítico",
            actividades: {
                // ACTIVIDAD 1: Reseña cinematográfica
                act1: {
                    nombre: "Actividad 1: Reseña cinematográfica",
                    desc: "Definición de reseña, estructura de la reseña cinematográfica, tipos de reseña",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Reseña",
                            q: "¿Qué es una reseña?",
                            options: [
                                "Un texto que resume un acontecimiento y permite emitir juicios de valor",
                                "Una narración extensa sin opinión",
                                "Un reportaje objetivo",
                                "Una noticia periodística"
                            ],
                            answerIndex: 0,
                            explain: "La reseña es un escrito breve que resume un acontecimiento, informa y permite al lector emitir juicios de valor."
                        },
                        {
                            topic: "Reseña cinematográfica",
                            q: "¿Cuál es la extensión promedio de una reseña cinematográfica escrita?",
                            options: [
                                "100-200 palabras",
                                "600-1200 palabras",
                                "2000-3000 palabras",
                                "Más de 5000 palabras"
                            ],
                            answerIndex: 1,
                            explain: "Las reseñas cinematográficas escritas suelen tener entre 600 y 1200 palabras, según el medio de difusión."
                        },
                        {
                            topic: "Reseña cinematográfica",
                            q: "¿Qué información se incluye en la introducción de una reseña cinematográfica?",
                            options: [
                                "Solo el nombre de la película",
                                "Año, dirección, actores, productores y un breve adelanto",
                                "La opinión del autor",
                                "La calificación final"
                            ],
                            answerIndex: 1,
                            explain: "La introducción presenta información básica como año, director, actores, productores y un breve adelanto del contenido."
                        },
                        {
                            topic: "Reseña cinematográfica",
                            q: "¿Qué parte de la reseña destaca la trama principal y el contexto de la película?",
                            options: [
                                "Introducción",
                                "Resumen",
                                "Análisis",
                                "Evaluación"
                            ],
                            answerIndex: 1,
                            explain: "El resumen destaca los elementos diferenciadores como la trama principal y el contexto histórico y geográfico."
                        },
                        {
                            topic: "Reseña cinematográfica",
                            q: "¿En qué parte de la reseña se detallan las impresiones del autor con argumentación?",
                            options: [
                                "Introducción",
                                "Resumen",
                                "Análisis",
                                "Conclusión"
                            ],
                            answerIndex: 2,
                            explain: "En el análisis se detallan las impresiones del autor sobre el contenido, y su credibilidad depende de la argumentación."
                        },
                        {
                            topic: "Reseña cinematográfica",
                            q: "¿Cómo debe ser la crítica en una reseña?",
                            options: [
                                "Subjetiva sin fundamentos",
                                "Con argumentos sólidos, objetividad y lógica",
                                "Solo positiva",
                                "Solo negativa"
                            ],
                            answerIndex: 1,
                            explain: "La crítica debe contar con argumentos sólidos, expuesta desde la objetividad y la lógica en todo momento."
                        },
                        {
                            topic: "Reseña",
                            q: "¿Qué tipo de redacción utiliza el autor de una reseña?",
                            options: [
                                "Totalmente objetiva",
                                "Subjetiva",
                                "Científica",
                                "Técnica"
                            ],
                            answerIndex: 1,
                            explain: "El autor de la reseña realiza una redacción subjetiva al momento de escribirla."
                        },
                        {
                            topic: "Reseña cinematográfica",
                            q: "¿Qué se incluye en la evaluación de una reseña cinematográfica?",
                            options: [
                                "El resumen de la trama",
                                "La calificación de calidad y los motivos de aprobación o desaprobación",
                                "Los datos técnicos",
                                "El contexto histórico"
                            ],
                            answerIndex: 1,
                            explain: "La evaluación califica la calidad del filme, repasa los motivos de aprobación o desaprobación y refuerza por qué ver o no la película."
                        },
                        {
                            topic: "Reseña cinematográfica",
                            q: "¿Cómo se presenta la conclusión de una reseña?",
                            options: [
                                "Como un resumen de la trama",
                                "Como un juicio de valor fundamentado en el criterio del autor",
                                "Como una lista de actores",
                                "Como una sinopsis"
                            ],
                            answerIndex: 1,
                            explain: "La conclusión viene dada por un juicio de valor fundamentado en el criterio del autor."
                        },
                        {
                            topic: "Reseña",
                            q: "¿Qué permite la reseña al lector?",
                            options: [
                                "Conocer la biografía del autor",
                                "Emitir juicios de valor sobre el acontecimiento reseñado",
                                "Aprender vocabulario nuevo",
                                "Memorizar datos"
                            ],
                            answerIndex: 1,
                            explain: "La reseña informa y permite al lector emitir juicios de valor sobre el acontecimiento reseñado."
                        }
                    ]
                },
                // ACTIVIDAD 2: Comentario crítico
                act2: {
                    nombre: "Actividad 2: Comentario crítico",
                    desc: "Definición, tipos, estructura, diferencia con reseña",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Comentario crítico",
                            q: "¿Qué es un comentario crítico?",
                            options: [
                                "Un resumen objetivo de un texto",
                                "Un texto que expresa un punto de vista sobre un tema con análisis neutro",
                                "Una noticia periodística",
                                "Una descripción sin opinión"
                            ],
                            answerIndex: 1,
                            explain: "El comentario crítico consiste en brindar un punto de vista sobre un tema, situación o suceso con análisis desde una perspectiva neutra."
                        },
                        {
                            topic: "Tipos de comentario crítico",
                            q: "¿Qué caracteriza a un comentario crítico constructivo?",
                            options: [
                                "Solo critica sin aportar",
                                "Busca mejorar lo deficiente mediante comentarios puntuales",
                                "Es siempre negativo",
                                "No promueve reflexión"
                            ],
                            answerIndex: 1,
                            explain: "Los comentarios constructivos buscan mejorar aquello que es deficiente mediante comentarios puntuales y promueven reflexión."
                        },
                        {
                            topic: "Tipos de comentario crítico",
                            q: "¿Qué caracteriza a un comentario crítico destructivo?",
                            options: [
                                "Propone soluciones",
                                "Emite opiniones negativas sin oportunidad de mejora",
                                "Es constructivo",
                                "Busca el diálogo"
                            ],
                            answerIndex: 1,
                            explain: "Los comentarios destructivos pretenden emitir opiniones negativas sin oportunidad de ser mejorar, solo expresan subjetividad."
                        },
                        {
                            topic: "Estructura del comentario crítico",
                            q: "¿Cuáles son las partes de un comentario crítico?",
                            options: [
                                "Título, desarrollo y conclusión",
                                "Encabezado, introducción, desarrollo y conclusiones",
                                "Introducción, nudo y desenlace",
                                "Planteamiento, conflicto y resolución"
                            ],
                            answerIndex: 1,
                            explain: "La estructura del comentario crítico consta de encabezado, introducción, desarrollo y conclusiones."
                        },
                        {
                            topic: "Comentario crítico",
                            q: "¿Qué función tiene la introducción en el comentario crítico?",
                            options: [
                                "Presentar los datos del autor",
                                "Contextualizar la información del comentario",
                                "Dar la opinión final",
                                "Resumir el texto"
                            ],
                            answerIndex: 1,
                            explain: "La introducción hace referencia a un breve texto que contextualiza la información que se presenta en todo el comentario crítico."
                        },
                        {
                            topic: "Reseña vs Comentario crítico",
                            q: "Según la tabla comparativa, ¿qué característica tiene la reseña?",
                            options: [
                                "Técnica didáctica",
                                "Lenguaje claro e información breve",
                                "Visión crítica",
                                "Capacidad comunicativa"
                            ],
                            answerIndex: 1,
                            explain: "La reseña se caracteriza por lenguaje claro, información breve, argumentación y análisis objetivo."
                        },
                        {
                            topic: "Reseña vs Comentario crítico",
                            q: "Según la tabla comparativa, ¿qué característica tiene el comentario crítico?",
                            options: [
                                "Lenguaje claro",
                                "Información breve",
                                "Visión crítica y capacidad comunicativa",
                                "Análisis objetivo"
                            ],
                            answerIndex: 2,
                            explain: "El comentario crítico se caracteriza por ser técnica didáctica, desarrollar comprensión de textos, promover lectura y escritura, y tener visión crítica."
                        },
                        {
                            topic: "Comentario crítico",
                            q: "¿En qué parte del comentario crítico se redacta detalladamente con cohesión y coherencia?",
                            options: [
                                "Encabezado",
                                "Introducción",
                                "Desarrollo",
                                "Conclusiones"
                            ],
                            answerIndex: 2,
                            explain: "El desarrollo consiste en redactar de manera detallada el comentario crítico, considerando cohesión y coherencia."
                        },
                        {
                            topic: "Comentario crítico",
                            q: "¿Cuál es la función de las conclusiones en el comentario crítico?",
                            options: [
                                "Presentar el tema",
                                "Contextualizar",
                                "Exponer consideraciones finales",
                                "Criticar destructivamente"
                            ],
                            answerIndex: 2,
                            explain: "Las conclusiones son las consideraciones finales sobre el comentario crítico en general."
                        },
                        {
                            topic: "Comentario crítico",
                            q: "¿Qué promueven tanto la reseña como el comentario crítico?",
                            options: [
                                "La memorización",
                                "La lectura y el análisis de la información",
                                "La escritura creativa",
                                "La poesía"
                            ],
                            answerIndex: 1,
                            explain: "Ambos elementos implementan la realización de la lectura y promueven el análisis de la información."
                        }
                    ]
                },
                // ACTIVIDAD 3: Etapas de composición
                act3: {
                    nombre: "Actividad 3: Etapas de composición",
                    desc: "Búsqueda del tema, valoración argumentada, etapas del proceso",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Búsqueda del tema",
                            q: "¿Qué implica la búsqueda del tema para una reseña?",
                            options: [
                                "Solo leer un libro",
                                "Recopilar información de diversas fuentes bibliográficas y medios",
                                "Escribir sin investigar",
                                "Ver una película"
                            ],
                            answerIndex: 1,
                            explain: "La búsqueda consiste en una recopilación de información enfocada a un tema en diversas fuentes bibliográficas como medios electrónicos o libros."
                        },
                        {
                            topic: "Fuentes de información",
                            q: "¿Qué tipo de fuente se menciona para la búsqueda de temas?",
                            options: [
                                "Solo libros de texto",
                                "Noticias periodísticas, reportajes, programas de TV, entrevistas, publicidad",
                                "Únicamente enciclopedias",
                                "Solamente internet"
                            ],
                            answerIndex: 1,
                            explain: "Las fuentes incluyen noticias escritas, noticieros, reportajes, programas de entretenimiento, telenovelas, series, entrevistas y mensajes publicitarios."
                        },
                        {
                            topic: "Valoración argumentada",
                            q: "¿Qué son los señalamientos críticos en la valoración de un texto?",
                            options: [
                                "La conclusión final",
                                "Indicación directa sobre un tema o situación a investigar",
                                "El resumen",
                                "La introducción"
                            ],
                            answerIndex: 1,
                            explain: "Los señalamientos críticos son la indicación directa sobre un tema o situación a investigar."
                        },
                        {
                            topic: "Valoración argumentada",
                            q: "¿Qué son los argumentos en el análisis de un texto?",
                            options: [
                                "La descripción del tema",
                                "La opinión mediante una justificación razonable",
                                "La selección de ideas",
                                "El resumen final"
                            ],
                            answerIndex: 1,
                            explain: "Los argumentos promueven la opinión mediante una justificación razonable."
                        },
                        {
                            topic: "Valoración argumentada",
                            q: "¿Qué es la clasificación en el proceso de análisis?",
                            options: [
                                "Escribir sin orden",
                                "Selección y agrupación de diversas cosas o situaciones afines",
                                "La crítica destructiva",
                                "La introducción"
                            ],
                            answerIndex: 1,
                            explain: "La clasificación promueve la selección y agrupación de diversas cosas o situaciones afines entre sí."
                        },
                        {
                            topic: "Etapas de composición",
                            q: "¿Cuál es la primera etapa en la composición de una reseña?",
                            options: [
                                "Planeación",
                                "Lectura atenta del texto",
                                "Composición",
                                "Revisión"
                            ],
                            answerIndex: 1,
                            explain: "La primera etapa es la lectura atenta del texto o estudio de la fuente de información."
                        },
                        {
                            topic: "Etapas de composición",
                            q: "¿Qué etapa sigue después de la organización de ideas?",
                            options: [
                                "Lectura atenta",
                                "Planeación de la reseña",
                                "Composición",
                                "Revisión"
                            ],
                            answerIndex: 1,
                            explain: "Después de organizar las ideas sigue la planeación de la reseña y comentario crítico."
                        },
                        {
                            topic: "Etapas de composición",
                            q: "¿Qué permite la revisión de la reseña?",
                            options: [
                                "Iniciar la escritura",
                                "Modificar y pulir el documento para mejorarlo",
                                "Buscar el tema",
                                "Leer el texto"
                            ],
                            answerIndex: 1,
                            explain: "La revisión permite modificar y pulir el documento para tener un mejor producto final."
                        },
                        {
                            topic: "Herramientas de revisión",
                            q: "¿Qué herramienta se sugiere para la revisión?",
                            options: [
                                "Mapas mentales",
                                "Listas de cotejo",
                                "Diagramas de flujo",
                                "Gráficas"
                            ],
                            answerIndex: 1,
                            explain: "Se sugieren listas de cotejo como opciones de revisión para una mejor realización del escrito."
                        },
                        {
                            topic: "Lectura atenta",
                            q: "¿Qué permite la lectura atenta?",
                            options: [
                                "Leer rápidamente",
                                "Delimitar información y organizar ideas principales",
                                "Saltarse párrafos",
                                "Solo buscar palabras clave"
                            ],
                            answerIndex: 1,
                            explain: "La lectura atenta permite delimitar la información necesaria para generar y organizar las ideas principales."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: ANÁLISIS DE LA RESEÑA Y EL COMENTARIO CRÍTICO ==========
        modulo2: {
            nombre: "Módulo 2: Análisis de la reseña y el comentario crítico",
            actividades: {
                // ACTIVIDAD 1: Tipos de lectura
                act1: {
                    nombre: "Actividad 1: Tipos de lectura",
                    desc: "Lectura informativa, de estudio, recreativa, lectura atenta",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Lectura",
                            q: "Según Torres, ¿qué es la lectura?",
                            options: [
                                "Un pasatiempo",
                                "El más poderoso de los medios para adquirir información",
                                "Una obligación escolar",
                                "Un proceso mecánico"
                            ],
                            answerIndex: 1,
                            explain: "La lectura es el más poderoso de los medios para adquirir información (Torres, 2003)."
                        },
                        {
                            topic: "Lectura informativa",
                            q: "¿Cuál es la finalidad de la lectura informativa?",
                            options: [
                                "Entretenerse",
                                "Mantener actualizado al lector sobre avances científicos y actualidad",
                                "Aprender un tema a profundidad",
                                "Analizar textos literarios"
                            ],
                            answerIndex: 1,
                            explain: "La lectura informativa busca mantener actualizado al lector sobre avances científicos o tecnológicos y sobre lo que sucede en el mundo."
                        },
                        {
                            topic: "Lectura informativa",
                            q: "¿A qué tipo de publicaciones se aplica principalmente la lectura informativa?",
                            options: [
                                "Novelas y cuentos",
                                "Periódicos y revistas",
                                "Libros de texto",
                                "Poesía"
                            ],
                            answerIndex: 1,
                            explain: "La lectura informativa se aplica generalmente a periódicos y revistas."
                        },
                        {
                            topic: "Lectura de estudio",
                            q: "¿Qué requiere la lectura con fines de estudio o trabajo?",
                            options: [
                                "Lectura superficial",
                                "Mayor capacidad de análisis y reflexión",
                                "Solo revisar títulos",
                                "Leer rápidamente"
                            ],
                            answerIndex: 1,
                            explain: "La lectura con fines de estudio requiere mayor capacidad de análisis y reflexión para comprender, interpretar y profundizar un texto."
                        },
                        {
                            topic: "Lectura de estudio",
                            q: "¿Cuál es el propósito de la lectura de estudio?",
                            options: [
                                "Entretenerse",
                                "Comprender, interpretar y profundizar un texto específico",
                                "Informarse rápidamente",
                                "Leer por placer"
                            ],
                            answerIndex: 1,
                            explain: "Su propósito es comprender, interpretar y profundizar un texto específico; es la base del aprendizaje académico."
                        },
                        {
                            topic: "Lectura recreativa",
                            q: "¿Cuál es el propósito de la lectura recreativa?",
                            options: [
                                "Obtener información",
                                "Analizar textos",
                                "Resaltar el goce y placer",
                                "Estudiar"
                            ],
                            answerIndex: 2,
                            explain: "La lectura recreativa tiene como propósito específico resaltar el goce y placer de la lectura."
                        },
                        {
                            topic: "Lectura recreativa",
                            q: "¿Qué ejemplos de lectura recreativa se mencionan?",
                            options: [
                                "Periódicos y revistas",
                                "Historietas, cuentos, novelas, poemas",
                                "Libros de texto",
                                "Enciclopedias"
                            ],
                            answerIndex: 1,
                            explain: "Ejemplos de lectura recreativa son historietas, cuentos, novelas, poemas y textos dramáticos."
                        },
                        {
                            topic: "Lectura atenta",
                            q: "¿Qué logra la lectura atenta en el lector?",
                            options: [
                                "Comprensión superficial",
                                "Interpretación del texto relacionada con valores, creencias y actitudes",
                                "Solo memorización",
                                "Lectura rápida"
                            ],
                            answerIndex: 1,
                            explain: "La lectura atenta lleva al lector a la interpretación del texto, relacionándose con sus propios valores, creencias y actitudes."
                        },
                        {
                            topic: "Tipos de lectura",
                            q: "¿Cómo se clasifica la lectura según las necesidades?",
                            options: [
                                "Lenta y rápida",
                                "Informativa, con fines de trabajo, recreativa",
                                "Oral y silenciosa",
                                "Técnica y literaria"
                            ],
                            answerIndex: 1,
                            explain: "La lectura se puede clasificar en informativa, con fines de trabajo y recreativa."
                        },
                        {
                            topic: "Lectura atenta",
                            q: "¿Qué permite identificar la lectura atenta en el análisis de información?",
                            options: [
                                "Los errores ortográficos",
                                "Las ideas relevantes dentro de un texto",
                                "La longitud del texto",
                                "El número de páginas"
                            ],
                            answerIndex: 1,
                            explain: "La lectura atenta permite a los aprendientes identificar las ideas relevantes dentro de un texto al llevar a cabo el análisis de la información."
                        }
                    ]
                },
                // ACTIVIDAD 2: Estructura de la reseña
                act2: {
                    nombre: "Actividad 2: Estructura de la reseña",
                    desc: "Elementos de la reseña, comentario crítico personal, planeación",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Estructura de la reseña",
                            q: "¿Cuál es la estructura tradicional de una reseña?",
                            options: [
                                "Introducción, desarrollo, conclusión",
                                "Título, presentación (ficha técnica), resumen, comentario crítico, conclusiones",
                                "Planteamiento, nudo, desenlace",
                                "Tema, argumentos, cierre"
                            ],
                            answerIndex: 1,
                            explain: "La estructura tradicional de una reseña incluye: título, presentación (ficha técnica), resumen, comentario crítico y conclusiones."
                        },
                        {
                            topic: "Comentario crítico personal",
                            q: "Según González, ¿qué constituye el comentario crítico personal?",
                            options: [
                                "Un resumen del texto",
                                "Una técnica didáctica para desarrollar comprensión de textos",
                                "Una opinión sin fundamento",
                                "Una descripción objetiva"
                            ],
                            answerIndex: 1,
                            explain: "El comentario crítico personal constituye una verdadera técnica didáctica para desarrollar la comprensión de textos."
                        },
                        {
                            topic: "Comentario crítico personal",
                            q: "¿Qué actitudes permite lograr el comentario crítico personal?",
                            options: [
                                "Pasividad y conformismo",
                                "Actitud reflexiva, dialogante, libre y responsable",
                                "Indiferencia",
                                "Agresividad"
                            ],
                            answerIndex: 1,
                            explain: "Permite lograr una actitud reflexiva, dialogante, libre y responsable con respecto a las habilidades de lectura y escritura."
                        },
                        {
                            topic: "Planeación de la reseña",
                            q: "¿Qué se debe hacer antes de redactar un texto académico como la reseña?",
                            options: [
                                "Escribir directamente",
                                "Reflexionar primero y luego redactar",
                                "Solo leer",
                                "Copiar ejemplos"
                            ],
                            answerIndex: 1,
                            explain: "Elaborar un texto académico implica tener bases que sirvan de estructura, donde primero se reflexiona y luego se redacta."
                        },
                        {
                            topic: "Selección del tema",
                            q: "¿Qué permite una adecuada selección del tema en una reseña?",
                            options: [
                                "Confundir al público",
                                "Llegar al público correcto desde una postura asertiva y crítica",
                                "Hacer el texto más largo",
                                "Evitar la crítica"
                            ],
                            answerIndex: 1,
                            explain: "Dependiendo de la selección del tema, los aprendientes pueden llegar al público correcto interactuando desde una postura asertiva y crítica."
                        },
                        {
                            topic: "Ficha técnica",
                            q: "¿Qué elemento de la reseña corresponde a la ficha técnica?",
                            options: [
                                "El título",
                                "La presentación con datos de la obra",
                                "El resumen",
                                "Las conclusiones"
                            ],
                            answerIndex: 1,
                            explain: "La presentación o ficha técnica es el segundo elemento de la estructura tradicional de una reseña."
                        },
                        {
                            topic: "Resumen en la reseña",
                            q: "¿Qué función cumple el resumen en la reseña?",
                            options: [
                                "Presentar la opinión del autor",
                                "Sintetizar la obra reseñada",
                                "Dar los datos técnicos",
                                "Concluir el texto"
                            ],
                            answerIndex: 1,
                            explain: "El resumen es una síntesis de la obra que se está reseñando."
                        },
                        {
                            topic: "Comentario crítico en la reseña",
                            q: "¿Dónde se ubica el comentario crítico dentro de la estructura de la reseña?",
                            options: [
                                "Al inicio",
                                "Después del resumen y antes de las conclusiones",
                                "En el título",
                                "En la ficha técnica"
                            ],
                            answerIndex: 1,
                            explain: "El comentario crítico se ubica después del resumen y antes de las conclusiones."
                        },
                        {
                            topic: "Conclusiones de la reseña",
                            q: "¿Qué se presenta en las conclusiones de la reseña?",
                            options: [
                                "La ficha técnica",
                                "El resumen",
                                "Las consideraciones finales del análisis",
                                "El título"
                            ],
                            answerIndex: 2,
                            explain: "Las conclusiones son las consideraciones finales del análisis realizado."
                        },
                        {
                            topic: "Planeación",
                            q: "¿Qué se debe considerar en la planeación de una reseña?",
                            options: [
                                "Solo el tema",
                                "La estructura y organización de ideas",
                                "Únicamente la extensión",
                                "Solamente el público"
                            ],
                            answerIndex: 1,
                            explain: "La planeación implica tener bases que sirvan de estructura para la organización de nuestras ideas."
                        }
                    ]
                },
                // ACTIVIDAD 3: Revisión de la reseña
                act3: {
                    nombre: "Actividad 3: Revisión de la reseña",
                    desc: "Criterios de evaluación, indicadores, verificación de contenido y forma",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Revisión",
                            q: "¿Por qué es fundamental establecer criterios de evaluación en la revisión?",
                            options: [
                                "Para hacer más largo el texto",
                                "Para asegurar que la reseña cumpla con lo previamente determinado",
                                "Para evitar leer",
                                "Para complicar el proceso"
                            ],
                            answerIndex: 1,
                            explain: "Es fundamental establecer criterios de evaluación que sirvan como indicadores base para asegurar que la reseña cumpla con lo previamente determinado."
                        },
                        {
                            topic: "Criterios de evaluación",
                            q: "¿Qué aspectos se deben valorar con los criterios de evaluación?",
                            options: [
                                "Solo la extensión",
                                "Tanto el contenido como la forma del texto",
                                "Únicamente la ortografía",
                                "Solamente el título"
                            ],
                            answerIndex: 1,
                            explain: "Los criterios sirven para comprender y valorar no solo el contenido, sino también la forma del texto."
                        },
                        {
                            topic: "Indicadores de evaluación",
                            q: "¿Qué función tienen los indicadores de evaluación?",
                            options: [
                                "Confundir al escritor",
                                "Servir como base para verificar la calidad de la reseña",
                                "Aumentar la longitud del texto",
                                "Sustituir la revisión"
                            ],
                            answerIndex: 1,
                            explain: "Los indicadores sirven como base para comprender y valorar el contenido y la forma del texto."
                        },
                        {
                            topic: "Revisión",
                            q: "¿Qué se busca asegurar con la revisión de la reseña?",
                            options: [
                                "Que sea más larga",
                                "Que cumpla con los criterios establecidos",
                                "Que tenga más citas",
                                "Que sea subjetiva"
                            ],
                            answerIndex: 1,
                            explain: "La revisión busca asegurar que el desarrollo de la reseña cumpla con lo previamente determinado."
                        },
                        {
                            topic: "Contenido y forma",
                            q: "¿Qué aspectos del texto se evalúan con los criterios?",
                            options: [
                                "Solo el contenido",
                                "Contenido y forma",
                                "Solo la forma",
                                "Únicamente el estilo"
                            ],
                            answerIndex: 1,
                            explain: "Se evalúa tanto el contenido como la forma del texto."
                        },
                        {
                            topic: "Indicadores",
                            q: "¿Qué se muestra en la figura sobre indicadores de evaluación?",
                            options: [
                                "La estructura de la reseña",
                                "Ejemplos de indicadores para evaluar la reseña",
                                "El título de la reseña",
                                "Las fuentes de información"
                            ],
                            answerIndex: 1,
                            explain: "En la figura se muestran ejemplos de indicadores de evaluación para la reseña."
                        },
                        {
                            topic: "Revisión",
                            q: "¿Cuál es el objetivo principal de la revisión?",
                            options: [
                                "Publicar inmediatamente",
                                "Verificar la calidad y hacer ajustes necesarios",
                                "Eliminar contenido",
                                "Añadir más texto"
                            ],
                            answerIndex: 1,
                            explain: "La revisión permite verificar la calidad del texto y hacer los ajustes necesarios antes de finalizar."
                        },
                        {
                            topic: "Criterios",
                            q: "¿Qué tipo de criterios se deben establecer para la evaluación?",
                            options: [
                                "Subjetivos",
                                "Claros y específicos",
                                "Aleatorios",
                                "Confusos"
                            ],
                            answerIndex: 1,
                            explain: "Se deben establecer criterios claros que sirvan como indicadores base para la evaluación."
                        },
                        {
                            topic: "Revisión",
                            q: "¿Qué etapa del proceso de composición corresponde a la revisión?",
                            options: [
                                "Primera etapa",
                                "Etapa final",
                                "Etapa intermedia",
                                "No es parte del proceso"
                            ],
                            answerIndex: 1,
                            explain: "La revisión es la etapa final del proceso de composición de la reseña y comentario crítico."
                        },
                        {
                            topic: "Indicadores",
                            q: "¿Para qué sirven los indicadores de evaluación?",
                            options: [
                                "Para iniciar la escritura",
                                "Para valorar el cumplimiento de los objetivos",
                                "Para buscar el tema",
                                "Para leer el texto"
                            ],
                            answerIndex: 1,
                            explain: "Los indicadores sirven para valorar si el texto cumple con los objetivos y criterios establecidos."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: EL COMENTARIO CRÍTICO ==========
        modulo3: {
            nombre: "Módulo 3: El comentario crítico",
            actividades: {
                // ACTIVIDAD 1: Exposición oral formal
                act1: {
                    nombre: "Actividad 1: Exposición oral",
                    desc: "Preparación, planeación, preguntas de investigación, recursos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Exposición oral",
                            q: "¿Qué es una exposición oral?",
                            options: [
                                "Leer un texto frente a otros",
                                "Una forma de presentar resultados de investigación ante un auditorio",
                                "Un diálogo entre dos personas",
                                "Una entrevista"
                            ],
                            answerIndex: 1,
                            explain: "La exposición oral es una forma de presentar los resultados de una investigación ante un auditorio."
                        },
                        {
                            topic: "Recursos de exposición",
                            q: "¿Qué recursos se pueden usar en una exposición oral?",
                            options: [
                                "Solo la voz",
                                "Esquemas, gráficos, recursos audiovisuales, diapositivas, pizarrón",
                                "Únicamente el pizarrón",
                                "Solamente la memoria"
                            ],
                            answerIndex: 1,
                            explain: "Se pueden usar esquemas, gráficos, recursos audiovisuales como videos, diapositivas, pizarrón o rotafolio."
                        },
                        {
                            topic: "Trabajo previo",
                            q: "¿Qué se necesita antes de exponer?",
                            options: [
                                "Ninguna preparación",
                                "Concluir una investigación y dominar el tema",
                                "Solo leer el tema una vez",
                                "Memorizar el texto"
                            ],
                            answerIndex: 1,
                            explain: "Se debe concluir una investigación sobre el tema y poseer dominio del mismo."
                        },
                        {
                            topic: "Guion de exposición",
                            q: "¿Qué debe contener el guion de exposición?",
                            options: [
                                "Solo el título",
                                "Presentación, introducción, desarrollo, cierre y conclusiones",
                                "Únicamente las ideas principales",
                                "Solamente las preguntas"
                            ],
                            answerIndex: 1,
                            explain: "El guion debe contener presentación, introducción, desarrollo, cierre y conclusiones."
                        },
                        {
                            topic: "Preguntas de investigación",
                            q: "¿Qué pregunta ayuda a definir la metodología y recursos?",
                            options: [
                                "¿Qué?",
                                "¿Cómo?",
                                "¿Cuándo?",
                                "¿Por qué?"
                            ],
                            answerIndex: 1,
                            explain: "La pregunta ¿Cómo? define la metodología, pasos a seguir y recursos para la exposición."
                        },
                        {
                            topic: "Preguntas de investigación",
                            q: "¿Qué pregunta sustenta todo el trabajo dotándolo de sentido?",
                            options: [
                                "¿Qué?",
                                "¿Para qué?",
                                "¿Dónde?",
                                "¿Quién?"
                            ],
                            answerIndex: 1,
                            explain: "La pregunta ¿Para qué? es la más útil, pues sustenta todo el trabajo dotándolo de sentido."
                        },
                        {
                            topic: "Preguntas de investigación",
                            q: "¿Qué pregunta considera el espacio físico y recursos disponibles?",
                            options: [
                                "¿Qué?",
                                "¿Dónde?",
                                "¿Cómo?",
                                "¿Cuándo?"
                            ],
                            answerIndex: 1,
                            explain: "¿Dónde? ayuda a planificar según la distribución del lugar y recursos disponibles."
                        },
                        {
                            topic: "Exposición oral",
                            q: "¿Qué parte de la exposición es la más significativa?",
                            options: [
                                "El texto escrito",
                                "La exposición oral",
                                "Los materiales de apoyo",
                                "Las diapositivas"
                            ],
                            answerIndex: 1,
                            explain: "La exposición oral es la parte más significativa, mientras que el texto escrito desarrolla los materiales de apoyo."
                        },
                        {
                            topic: "Materiales de apoyo",
                            q: "¿Cuál es la finalidad de los materiales de apoyo?",
                            options: [
                                "Reemplazar al expositor",
                                "Ilustrar aspectos importantes del tema",
                                "Distraer al público",
                                "Ocupar tiempo"
                            ],
                            answerIndex: 1,
                            explain: "Los materiales de apoyo tienen la finalidad de ilustrar aspectos importantes del tema a desarrollar."
                        },
                        {
                            topic: "Preguntas de investigación",
                            q: "¿Qué pregunta ayuda a identificar quiénes participarán en la exposición?",
                            options: [
                                "¿Qué?",
                                "¿Quién?",
                                "¿Cómo?",
                                "¿Por qué?"
                            ],
                            answerIndex: 1,
                            explain: "¿Quién? ayuda a identificar participantes y considerar al público."
                        }
                    ]
                },
                // ACTIVIDAD 2: Decisiones de personajes y mesa redonda
                act2: {
                    nombre: "Actividad 2: Personajes y mesa redonda",
                    desc: "Decisiones de personajes, mesa redonda, elementos y fases",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Personajes literarios",
                            q: "¿Qué contribuyen las características y desenvolvimiento de los personajes?",
                            options: [
                                "A confundir al lector",
                                "A personificar la narrativa de la obra literaria",
                                "A alargar la historia",
                                "A complicar la trama"
                            ],
                            answerIndex: 1,
                            explain: "Las características y el desenvolvimiento de los personajes contribuyen a personificar la narrativa de cualquier obra literaria."
                        },
                        {
                            topic: "Decisiones de personajes",
                            q: "¿Cómo impactan las decisiones de los personajes?",
                            options: [
                                "No impactan",
                                "Impactan según la percepción del receptor",
                                "Solo impactan al autor",
                                "Impactan igual a todos"
                            ],
                            answerIndex: 1,
                            explain: "La toma de sus decisiones impacta según la percepción del receptor."
                        },
                        {
                            topic: "Mesa redonda",
                            q: "¿Qué es una mesa redonda según Ríos et al.?",
                            options: [
                                "Un debate con ganadores",
                                "Un espacio que permite expresión de puntos de vista divergentes sobre un tema",
                                "Una conferencia",
                                "Una exposición individual"
                            ],
                            answerIndex: 1,
                            explain: "La mesa redonda es un espacio que permite la expresión de puntos de vista divergentes sobre un tema por parte de un equipo de expertos."
                        },
                        {
                            topic: "Mesa redonda",
                            q: "¿Quién dirige la mesa redonda?",
                            options: [
                                "Los participantes",
                                "Un moderador",
                                "El público",
                                "El secretario"
                            ],
                            answerIndex: 1,
                            explain: "La mesa redonda es dirigida por un moderador."
                        },
                        {
                            topic: "Mesa redonda",
                            q: "¿Cuál es la finalidad de la mesa redonda?",
                            options: [
                                "Llegar a un consenso",
                                "Obtener información especializada mediante confrontación de puntos de vista",
                                "Elegir un ganador",
                                "Imponer una opinión"
                            ],
                            answerIndex: 1,
                            explain: "La finalidad es obtener información especializada y actualizada sobre un tema a partir de la confrontación de diversos puntos de vista."
                        },
                        {
                            topic: "Moderador",
                            q: "¿Cuál es la función principal del moderador?",
                            options: [
                                "Dar su opinión",
                                "Apoyar a organizar aportaciones y guiar participaciones",
                                "Criticar a los participantes",
                                "Votar"
                            ],
                            answerIndex: 1,
                            explain: "El moderador apoya a organizar las aportaciones, guía las participaciones y da una breve presentación."
                        },
                        {
                            topic: "Participantes",
                            q: "¿Qué hacen los participantes en una mesa redonda?",
                            options: [
                                "Solo escuchan",
                                "Crean diálogo con diversos puntos de vista basados en análisis previo",
                                "Evalúan al moderador",
                                "Toman notas"
                            ],
                            answerIndex: 1,
                            explain: "Los participantes crean un diálogo con los diversos puntos de vista acerca de un tema, basados en análisis previo."
                        },
                        {
                            topic: "Público",
                            q: "¿Qué puede hacer el público en una mesa redonda?",
                            options: [
                                "Solo observar",
                                "Generar interrogantes o comentarios, enriqueciendo la discusión",
                                "Decidir quién gana",
                                "Moderar"
                            ],
                            answerIndex: 1,
                            explain: "El público puede generar interrogantes o comentarios que pueden enriquecer la mesa redonda."
                        },
                        {
                            topic: "Mesa redonda",
                            q: "¿Qué promueve la mesa redonda como actividad?",
                            options: [
                                "La memorización",
                                "La previa lectura y análisis para compartir puntos de vista",
                                "La escritura creativa",
                                "La poesía"
                            ],
                            answerIndex: 1,
                            explain: "La mesa redonda promueve la previa lectura y análisis para compartir un punto de vista acerca de los personajes en una obra literaria."
                        },
                        {
                            topic: "Mesa redonda",
                            q: "¿Qué elemento es indispensable en una mesa redonda?",
                            options: [
                                "Ganadores",
                                "Moderador, participantes y público (opcional)",
                                "Premios",
                                "Jurado"
                            ],
                            answerIndex: 1,
                            explain: "Los elementos indispensables son moderador, participantes, y público (aunque opcional)."
                        }
                    ]
                },
                // ACTIVIDAD 3: Debate
                act3: {
                    nombre: "Actividad 3: Debate",
                    desc: "Definición, organización, participantes, funciones, recomendaciones",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Debate",
                            q: "¿Qué es un debate?",
                            options: [
                                "Una exposición individual",
                                "Un espacio de discusión sobre un tema polémico entre dos personas o grupos con posturas opuestas",
                                "Una conferencia",
                                "Una mesa redonda"
                            ],
                            answerIndex: 1,
                            explain: "El debate es un espacio de discusión sobre un tema polémico entre dos personas o grupos con posturas opuestas (a favor o en contra)."
                        },
                        {
                            topic: "Debate",
                            q: "¿Cómo se denominan usualmente las posturas en un debate?",
                            options: [
                                "Verdadero o falso",
                                "A favor o en contra",
                                "Correcto o incorrecto",
                                "Bueno o malo"
                            ],
                            answerIndex: 1,
                            explain: "Las posturas opuestas se denominan usualmente a favor o en contra."
                        },
                        {
                            topic: "Preparación del debate",
                            q: "¿Cuántos argumentos se recomienda anotar por participante?",
                            options: [
                                "1-2",
                                "5-10",
                                "15-20",
                                "Más de 30"
                            ],
                            answerIndex: 1,
                            explain: "Se recomienda anotar de cinco a diez argumentos que se deseen discutir."
                        },
                        {
                            topic: "Preparación del debate",
                            q: "¿Para qué sirve adoptar la postura contraria en la preparación?",
                            options: [
                                "Para confundirse",
                                "Para anticipar puntos débiles y reforzar argumentos",
                                "Para cambiar de opinión",
                                "Para rendirse"
                            ],
                            answerIndex: 1,
                            explain: "Adoptar la postura contraria ayuda a darse cuenta de los puntos débiles y reforzar la postura propia."
                        },
                        {
                            topic: "Debate",
                            q: "¿Hay ganadores o perdedores en un debate?",
                            options: [
                                "Sí, siempre hay un ganador",
                                "No, simplemente se obtiene un mejor resultado",
                                "Solo hay perdedores",
                                "Depende del moderador"
                            ],
                            answerIndex: 1,
                            explain: "En el debate no hay ganadores ni perdedores, simplemente se obtiene un mejor resultado."
                        },
                        {
                            topic: "Participantes del debate",
                            q: "¿Quiénes son los ponentes en un debate?",
                            options: [
                                "Los que toman notas",
                                "Los que defienden con argumentos su postura sobre el tema",
                                "Los que moderan",
                                "El público"
                            ],
                            answerIndex: 1,
                            explain: "Los ponentes defienden con argumentos su postura sobre el tema y deben tener preparación previa."
                        },
                        {
                            topic: "Secretario",
                            q: "¿Qué función tiene el secretario en un debate?",
                            options: [
                                "Moderar",
                                "Anotar ideas principales y exponer resumen final",
                                "Defender una postura",
                                "Vigilar el tiempo"
                            ],
                            answerIndex: 1,
                            explain: "El secretario anota las ideas principales expuestas y al término expone un resumen con las ideas principales."
                        },
                        {
                            topic: "Moderador",
                            q: "¿Qué función tiene el moderador en un debate?",
                            options: [
                                "Defender una postura",
                                "Designar y vigilar tiempos, otorgar turnos",
                                "Anotar ideas",
                                "Ser público"
                            ],
                            answerIndex: 1,
                            explain: "El moderador designa y vigila el cumplimiento del tiempo y otorga los turnos a cada participante."
                        },
                        {
                            topic: "Recomendaciones",
                            q: "¿Qué deben mantener todos los participantes en un debate?",
                            options: [
                                "Subjetividad",
                                "Objetividad",
                                "Agresividad",
                                "Pasividad"
                            ],
                            answerIndex: 1,
                            explain: "Todos los participantes deben mantener la objetividad durante el debate."
                        },
                        {
                            topic: "Debate",
                            q: "¿Qué tipo de trabajo previo requiere el debate?",
                            options: [
                                "Ninguno",
                                "Preparación de argumentos críticos y razonados",
                                "Solo leer el tema",
                                "Memorizar textos"
                            ],
                            answerIndex: 1,
                            explain: "El debate requiere un trabajo previo donde los participantes preparen la defensa de su postura mediante argumentos críticos y razonados."
                        }
                    ]
                }
            }
        }
    }
};

export default lengua2;