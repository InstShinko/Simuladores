// ============================================
// LENGUA Y COMUNICACIÓN I - TRIMESTRE 1
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const lenguaComunicacion1 = {
    id: "lengua1",
    nombre: "LENGUA Y COMUNICACIÓN I",
    icono: "📖",
    descripcion: "Lectura de textos, redacción, literatura, exposición oral",
    modulos: {
        // ========== MÓDULO 1: DIVERSOS TIPOS DE TEXTOS ==========
        modulo1: {
            nombre: "Módulo 1: Diversos tipos de textos",
            actividades: {
                // ACTIVIDAD 1: Lectura de textos, fases, estrategias, lengua oral
                act1: {
                    nombre: "Actividad 1: Lectura de textos y lengua oral",
                    desc: "Fases de lectura, estrategias de comprensión, texto oral vs escrito, dificultades de la comunicación",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Fases de lectura",
                            q: "¿Cuáles son las tres fases de la lectura según Durango?",
                            options: [
                                "Inicio, desarrollo y final",
                                "Prelectura, lectura y poslectura",
                                "Introducción, nudo y desenlace",
                                "Exploratoria, analítica y crítica"
                            ],
                            answerIndex: 1,
                            explain: "Las tres fases de la lectura son: prelectura, lectura y poslectura."
                        },
                        {
                            topic: "Prelectura",
                            q: "¿Qué actividad corresponde a la fase de prelectura?",
                            options: [
                                "Subrayar ideas importantes",
                                "Predecir el contenido a partir del título",
                                "Elaborar un resumen",
                                "Evaluar el proceso lector"
                            ],
                            answerIndex: 1,
                            explain: "En la prelectura se determina el propósito, se predice el contenido y se anticipa a partir de marcas como el título."
                        },
                        {
                            topic: "Poslectura",
                            q: "¿Qué actividad se realiza en la fase de poslectura?",
                            options: [
                                "Tomar notas",
                                "Parafrasear la lectura",
                                "Elaborar un resumen",
                                "Identificar palabras clave"
                            ],
                            answerIndex: 2,
                            explain: "En la poslectura se elabora resumen, se evalúa el proceso y sus resultados."
                        },
                        {
                            topic: "Comprensión lectora",
                            q: "Según David Cooper, ¿qué es la comprensión lectora?",
                            options: [
                                "Leer rápidamente un texto",
                                "El proceso de elaborar significado relacionando ideas del texto con ideas previas",
                                "Memorizar el contenido",
                                "Identificar palabras desconocidas"
                            ],
                            answerIndex: 1,
                            explain: "La comprensión lectora es el proceso de elaborar el significado aprendiendo las ideas relevantes del texto y relacionándolas con ideas que ya se tienen."
                        },
                        {
                            topic: "Lectura referencial",
                            q: "¿Qué otro nombre recibe la lectura referencial?",
                            options: [
                                "Lectura crítica",
                                "Lectura exploratoria o de consulta",
                                "Lectura analítica",
                                "Lectura estructural"
                            ],
                            answerIndex: 1,
                            explain: "La lectura referencial también se llama lectura exploratoria, de consulta, superficial, ligera, corriente o informativa."
                        },
                        {
                            topic: "Texto oral vs escrito",
                            q: "¿Cuál es una diferencia significativa entre texto oral y escrito?",
                            options: [
                                "El texto oral es más importante",
                                "El texto escrito permanece en el tiempo mediante un soporte",
                                "El texto oral siempre es más claro",
                                "El texto escrito no tiene errores"
                            ],
                            answerIndex: 1,
                            explain: "El texto escrito permanece en el tiempo mediante un soporte (papel o medio digital), a diferencia del oral."
                        },
                        {
                            topic: "Factores de comunicación",
                            q: "¿Qué tipo de factor de dificultad en la comunicación oral es imputable al lugar o ambiente?",
                            options: [
                                "Factores internos",
                                "Factores externos",
                                "Factores lingüísticos",
                                "Factores psicológicos"
                            ],
                            answerIndex: 1,
                            explain: "Los factores externos suelen ser ajenos a los interlocutores y son imputables al lugar, ambiente o ruidos."
                        },
                        {
                            topic: "Dificultades del emisor",
                            q: "¿Cuál es una dificultad del emisor en la comunicación oral?",
                            options: [
                                "Incapacidad para escuchar atentamente",
                                "Vocabulario pobre y sintaxis deficiente",
                                "Prejuicios y conjeturas",
                                "Pérdida de señal"
                            ],
                            answerIndex: 1,
                            explain: "Las dificultades del emisor incluyen pobreza de vocabulario, sintaxis deficiente, pronunciación incorrecta, entre otras."
                        },
                        {
                            topic: "Expresión oral",
                            q: "¿Cuáles son las dos modalidades de la expresión oral?",
                            options: [
                                "Conferencia y debate",
                                "Diálogo y monólogo",
                                "Entrevista y exposición",
                                "Foro y panel"
                            ],
                            answerIndex: 1,
                            explain: "La expresión oral sucede en las modalidades de diálogo y monólogo."
                        },
                        {
                            topic: "Tipos de comunicación oral",
                            q: "¿Qué tipo de comunicación oral es una reunión de miembros de una colectividad para discutir cuestiones de interés común?",
                            options: [
                                "Conferencia",
                                "Asamblea",
                                "Seminario",
                                "Simposio"
                            ],
                            answerIndex: 1,
                            explain: "La asamblea es la reunión de miembros de una colectividad para discutir cuestiones de interés común y adoptar decisiones."
                        }
                    ]
                },
                // ACTIVIDAD 2: Composición de textos, proceso de escritura, propiedades de la redacción
                act2: {
                    nombre: "Actividad 2: Composición de textos",
                    desc: "Proceso de escritura, planeación, redacción, revisión, propiedades de la redacción, búsqueda en internet",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Proceso de escritura",
                            q: "¿Cuáles son las etapas del proceso de escritura?",
                            options: [
                                "Introducción, desarrollo y conclusión",
                                "Planeación, redacción, revisión y reescritura",
                                "Título, subtítulo y párrafos",
                                "Prelectura, lectura y poslectura"
                            ],
                            answerIndex: 1,
                            explain: "El proceso de escritura comprende planeación, redacción, revisión y reescritura."
                        },
                        {
                            topic: "Planeación",
                            q: "¿En qué consiste la planeación de un texto?",
                            options: [
                                "Escribir sin detenerse",
                                "Marcar un horizonte, generar y organizar ideas",
                                "Corregir errores ortográficos",
                                "Publicar el texto"
                            ],
                            answerIndex: 1,
                            explain: "La planeación consiste en marcar un horizonte para el escrito, generar ideas y organizarlas bajo una estructura."
                        },
                        {
                            topic: "Redacción",
                            q: "Según la RAE, ¿qué es redactar?",
                            options: [
                                "Hablar en público",
                                "Poner por escrito algo sucedido, acordado o pensado",
                                "Leer cuidadosamente",
                                "Resumir un texto"
                            ],
                            answerIndex: 1,
                            explain: "Redactar es poner por escrito algo sucedido, acordado o pensado con anterioridad."
                        },
                        {
                            topic: "Revisión",
                            q: "¿Por qué se recomienda que la revisión la realice una persona distinta al autor?",
                            options: [
                                "Porque el autor no sabe leer",
                                "Porque los errores propios pueden pasar desapercibidos",
                                "Porque es más rápido",
                                "Porque el autor no debe corregir"
                            ],
                            answerIndex: 1,
                            explain: "Es recomendable que la revisión la realice una persona distinta porque al ser ideas propias, los errores son susceptibles de pasar desapercibidos."
                        },
                        {
                            topic: "Adecuación",
                            q: "¿Qué propiedad de la redacción se refiere a usar palabras y tono apropiados según el destinatario?",
                            options: [
                                "Coherencia",
                                "Adecuación",
                                "Cohesión",
                                "Claridad"
                            ],
                            answerIndex: 1,
                            explain: "La adecuación exige comunicarse con palabras, expresiones y tonos apropiados según el contexto y destinatario."
                        },
                        {
                            topic: "Coherencia",
                            q: "¿Qué característica tiene un texto coherente?",
                            options: [
                                "Usa palabras rebuscadas",
                                "Presenta información explícita, ordenada y con sentido",
                                "Tiene muchos signos de puntuación",
                                "Usa diferentes tipos de letra"
                            ],
                            answerIndex: 1,
                            explain: "Un texto coherente tiene tema, estructura, relación, función, congruencia, jerarquía y relevancia."
                        },
                        {
                            topic: "Cohesión",
                            q: "¿Qué son los mecanismos de cohesión?",
                            options: [
                                "Las ideas principales",
                                "Elementos lingüísticos que indican relación entre ideas y párrafos",
                                "Los signos de puntuación solamente",
                                "Las imágenes del texto"
                            ],
                            answerIndex: 1,
                            explain: "Los mecanismos de cohesión son elementos lingüísticos que indican la relación y unión entre ideas, párrafos y partes del texto."
                        },
                        {
                            topic: "Búsqueda en internet",
                            q: "¿Qué factor ha contribuido al aumento de información en internet?",
                            options: [
                                "Alto costo de publicación",
                                "Facilidad de publicar y bajo costo",
                                "Dificultad para acceder",
                                "Pocos usuarios"
                            ],
                            answerIndex: 1,
                            explain: "Factores como facilidad de publicar, bajo costo, dinamismo y creciente número de personas con acceso han aumentado la información en internet."
                        },
                        {
                            topic: "Fuentes confiables",
                            q: "¿Qué ejemplo de fuente confiable menciona el texto?",
                            options: [
                                "elrincondelvago.com",
                                "Sitios de investigación de la UNAM",
                                "Wikipedia",
                                "Blogs personales"
                            ],
                            answerIndex: 1,
                            explain: "Los sitios de investigación de la UNAM son un ejemplo de fuente confiable, a diferencia de sitios como elrincondelvago.com."
                        },
                        {
                            topic: "Búsqueda efectiva",
                            q: "¿Cuál es el primer paso recomendado para una búsqueda efectiva en internet?",
                            options: [
                                "Evaluar resultados",
                                "Formular una pregunta efectiva",
                                "Identificar fuentes pertinentes",
                                "Construir búsquedas complejas"
                            ],
                            answerIndex: 1,
                            explain: "El primer paso es formular de manera efectiva un cuestionamiento o pregunta: ¿Qué necesito saber y de qué?"
                        }
                    ]
                },
                // ACTIVIDAD 3: Resumen y relato simple
                act3: {
                    nombre: "Actividad 3: Resumen y relato simple",
                    desc: "Definiciones de resumen según autores, características del relato simple",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Resumen",
                            q: "Según Moreiro (1988), ¿cuál es la principal función del resumen?",
                            options: [
                                "Sintetizar información",
                                "Proporcionar información para decidir si consultar el documento original",
                                "Criticar el texto",
                                "Aprender vocabulario"
                            ],
                            answerIndex: 1,
                            explain: "Moreiro señala que la función del resumen es proporcionar al usuario información acerca de los documentos cuya consulta le interesa."
                        },
                        {
                            topic: "Resumen",
                            q: "Para Hurtado (2005), ¿qué debe integrar un resumen?",
                            options: [
                                "Solo las ideas principales",
                                "Una síntesis representativa con tesis central e integración de crítica",
                                "Las palabras clave",
                                "La opinión del autor"
                            ],
                            answerIndex: 1,
                            explain: "Hurtado define el resumen como construir una síntesis representativa del texto original que englobe su tesis central, integrando una crítica de quien lo elabora."
                        },
                        {
                            topic: "Resumen",
                            q: "Según Díez (2010), ¿qué facilita el resumen?",
                            options: [
                                "La memorización",
                                "La comprensión del documento",
                                "La velocidad de lectura",
                                "La escritura creativa"
                            ],
                            answerIndex: 1,
                            explain: "Díez señala que el resumen es el resultado de un proceso de abstracción que sintetiza aspectos esenciales facilitando su comprensión."
                        },
                        {
                            topic: "Relato simple",
                            q: "¿Cómo define Labov (1972) los relatos simples?",
                            options: [
                                "Relatos con muchas descripciones",
                                "Aquellos que contienen solamente cláusulas narrativas ordenadas secuencialmente",
                                "Relatos con diálogos extensos",
                                "Narraciones con personajes complejos"
                            ],
                            answerIndex: 1,
                            explain: "Labov define los relatos simples como aquellos que contienen solamente cláusulas narrativas ordenadas siguiendo la secuencia temporal."
                        },
                        {
                            topic: "Relato desarrollado",
                            q: "¿Qué secciones pueden tener los relatos desarrollados según Labov?",
                            options: [
                                "Introducción, nudo y desenlace",
                                "Resumen, orientación, evaluación y coda",
                                "Planteamiento, conflicto y final",
                                "Inicio, desarrollo y conclusión"
                            ],
                            answerIndex: 1,
                            explain: "Los relatos desarrollados tienen varias secciones: resumen, orientación, evaluación y coda."
                        },
                        {
                            topic: "Resumen",
                            q: "¿Qué beneficio aporta desarrollar la habilidad de elaborar resúmenes?",
                            options: [
                                "Escribir más rápido",
                                "Reconocer puntos importantes y ser breves y concretos",
                                "Memorizar textos completos",
                                "Hablar en público"
                            ],
                            answerIndex: 1,
                            explain: "Elaborar resúmenes permite reconocer puntos importantes, ser breves, concretos y comprender diversos temas."
                        },
                        {
                            topic: "Relato simple",
                            q: "¿Qué característica tienen las cláusulas narrativas del relato simple?",
                            options: [
                                "Son descriptivas",
                                "Están ordenadas siguiendo la secuencia temporal",
                                "Son reflexivas",
                                "Incluyen diálogos"
                            ],
                            answerIndex: 1,
                            explain: "Las cláusulas narrativas del relato simple están ordenadas siguiendo la secuencia temporal de los hechos."
                        },
                        {
                            topic: "Resumen",
                            q: "¿Qué tipo de proceso implica el resumen según Díez?",
                            options: [
                                "Proceso de copia",
                                "Proceso de abstracción",
                                "Proceso de ampliación",
                                "Proceso de decoración"
                            ],
                            answerIndex: 1,
                            explain: "Díez señala que el resumen es el resultado de un proceso de abstracción."
                        },
                        {
                            topic: "Resumen",
                            q: "¿Qué permite decidir al lector según Moreiro?",
                            options: [
                                "Si comprar el libro",
                                "Si consultar o no el documento original",
                                "Si memorizar el texto",
                                "Si traducir el documento"
                            ],
                            answerIndex: 1,
                            explain: "A través del resumen, el lector toma decisiones respecto a un documento original: consultarlo, rechazarlo o guardarlo para después."
                        },
                        {
                            topic: "Relato simple",
                            q: "¿Qué tipo de lenguaje predomina en el relato simple?",
                            options: [
                                "Poético",
                                "Narrativo básico",
                                "Argumentativo",
                                "Descriptivo complejo"
                            ],
                            answerIndex: 1,
                            explain: "El relato simple se enfoca en la narración básica de hechos sin elementos complejos."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: TEXTOS LITERARIOS ==========
        modulo2: {
            nombre: "Módulo 2: Textos literarios",
            actividades: {
                // ACTIVIDAD 1: Épocas literarias, textos informativos, géneros periodísticos
                act1: {
                    nombre: "Actividad 1: Épocas literarias y textos informativos",
                    desc: "Contexto social de la literatura, géneros periodísticos informativos (noticia, reportaje, entrevista, artículo)",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Contexto literario",
                            q: "Según Sapiro, ¿qué representan las obras literarias?",
                            options: [
                                "Solo la imaginación del autor",
                                "Representaciones de una época y de las cuestiones sociales",
                                "Ideas universales",
                                "Ficción sin relación con la realidad"
                            ],
                            answerIndex: 1,
                            explain: "Las obras literarias son representaciones de una época y de las cuestiones sociales según Sapiro."
                        },
                        {
                            topic: "Autor",
                            q: "¿Qué ejemplos de autores colectivos o míticos se mencionan en la Antigüedad?",
                            options: [
                                "Cervantes y Shakespeare",
                                "Homero, Moisés y Viasa",
                                "Dante y Virgilio",
                                "Sófocles y Eurípides"
                            ],
                            answerIndex: 1,
                            explain: "En la Antigüedad se mencionan casos como Homero (La Ilíada y La Odisea), Moisés (Pentateuco) y Viasa (Mahabharata)."
                        },
                        {
                            topic: "Textos informativos",
                            q: "¿Qué característica principal tiene un texto informativo?",
                            options: [
                                "Expresa emociones del autor",
                                "Transmite la realidad de forma objetiva",
                                "Es subjetivo",
                                "Utiliza lenguaje poético"
                            ],
                            answerIndex: 1,
                            explain: "Un texto informativo transmite la realidad de forma objetiva, con lenguaje preciso, claro y directo."
                        },
                        {
                            topic: "Noticia",
                            q: "¿Qué condiciones debe cumplir una noticia?",
                            options: [
                                "Ser larga y detallada",
                                "Ser veraz, exacta, objetiva y clara",
                                "Incluir opiniones",
                                "Tener muchas imágenes"
                            ],
                            answerIndex: 1,
                            explain: "Las condiciones para que un relato sea noticia son: veraz, exacto, objetivo y claro."
                        },
                        {
                            topic: "Noticia",
                            q: "¿Qué preguntas debe responder la entrada de una noticia?",
                            options: [
                                "Solo qué y cuándo",
                                "Qué, cómo, cuándo, dónde, quién, por qué",
                                "Dónde y por qué",
                                "Quién y cómo"
                            ],
                            answerIndex: 1,
                            explain: "La entrada debe responder: qué, cómo, cuándo, dónde, quién, por qué."
                        },
                        {
                            topic: "Reportaje",
                            q: "¿Qué característica distingue al reportaje de otros géneros?",
                            options: [
                                "Es muy breve",
                                "Incluye antecedentes, causas, consecuencias y pruebas estadísticas",
                                "Solo presenta opiniones",
                                "No tiene estructura"
                            ],
                            answerIndex: 1,
                            explain: "El reportaje incluye antecedentes, causas, derivaciones, consecuencias, pruebas y estadísticas; es una investigación descriptiva y detallada."
                        },
                        {
                            topic: "Entrevista",
                            q: "¿Cuál es la estructura básica de una entrevista?",
                            options: [
                                "Preguntas y respuestas solamente",
                                "Introducción (semblanza), cuerpo de preguntas-respuestas y cierre",
                                "Título, subtítulo y desarrollo",
                                "Planteamiento, nudo y desenlace"
                            ],
                            answerIndex: 1,
                            explain: "La entrevista consta de: introducción con presentación y semblanza, cuerpo de preguntas y respuestas, y cierre con conclusiones."
                        },
                        {
                            topic: "Artículo",
                            q: "¿Qué tipo de texto es un artículo periodístico?",
                            options: [
                                "Objetivo y sin opinión",
                                "Expone el punto de vista de un especialista",
                                "Solo noticias",
                                "Narrativo"
                            ],
                            answerIndex: 1,
                            explain: "El artículo expone el punto de vista de algún especialista en un tema de interés general, con subjetividad e ideología."
                        },
                        {
                            topic: "Ensayo periodístico",
                            q: "¿En qué se basa un ensayo periodístico?",
                            options: [
                                "Solo en hechos",
                                "En una tesis clara, argumentos pertinentes y forma argumentativa",
                                "En entrevistas",
                                "En datos estadísticos"
                            ],
                            answerIndex: 1,
                            explain: "El ensayo periodístico se basa en una tesis clara, argumentos pertinentes y una forma de argumentación apropiada."
                        },
                        {
                            topic: "Noticia",
                            q: "¿Qué significa que una noticia sea exacta?",
                            options: [
                                "Que sea verdadera",
                                "Que los datos coincidan y sean coherentes",
                                "Que sea breve",
                                "Que tenga imágenes"
                            ],
                            answerIndex: 1,
                            explain: "Exactitud significa que los datos que integran la realidad de un hecho coincidan o sean coherentes."
                        }
                    ]
                },
                // ACTIVIDAD 2: Narrativa, cuento, novela
                act2: {
                    nombre: "Actividad 2: Narrativa",
                    desc: "Cuento, novela, clasificaciones, características",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Narrativa",
                            q: "Según la RAE, ¿qué géneros constituyen la narrativa?",
                            options: [
                                "Poesía y drama",
                                "Cuento y novela",
                                "Ensayo y crónica",
                                "Lírica y épica"
                            ],
                            answerIndex: 1,
                            explain: "La narrativa es un género literario constituido por el cuento y la novela."
                        },
                        {
                            topic: "Cuento",
                            q: "¿Qué característica tiene el cuento?",
                            options: [
                                "Relato extenso en prosa",
                                "Relato breve en prosa",
                                "Texto en verso",
                                "Obra teatral"
                            ],
                            answerIndex: 1,
                            explain: "El cuento es un relato breve en prosa."
                        },
                        {
                            topic: "Cuento",
                            q: "¿Cuál es el antecedente del cuento?",
                            options: [
                                "La novela",
                                "La fábula",
                                "La epopeya",
                                "El mito"
                            ],
                            answerIndex: 1,
                            explain: "El cuento se considera más antiguo y se toma como antecedente a la fábula."
                        },
                        {
                            topic: "Cuentos populares",
                            q: "¿A qué corresponden los cuentos populares?",
                            options: [
                                "A la literatura moderna",
                                "A las tradiciones orales y relatos feéricos o legendarios",
                                "A la ciencia ficción",
                                "Al género policiaco"
                            ],
                            answerIndex: 1,
                            explain: "Los cuentos populares corresponden a las tradiciones orales, a relatos feéricos o legendarios."
                        },
                        {
                            topic: "Cuentos literarios",
                            q: "¿A qué pertenecen los cuentos literarios?",
                            options: [
                                "A la tradición oral",
                                "A la literatura moderna",
                                "A la poesía",
                                "Al teatro"
                            ],
                            answerIndex: 1,
                            explain: "Los cuentos literarios pertenecen a la literatura moderna."
                        },
                        {
                            topic: "Subgéneros del cuento",
                            q: "¿Qué subgéneros pertenecen al cuento literario?",
                            options: [
                                "Realista y costumbrista",
                                "Policiaco, horror, fantástico, ciencia ficción",
                                "Histórico y filosófico",
                                "Psicológico y de aventuras"
                            ],
                            answerIndex: 1,
                            explain: "Los cuentos literarios se extienden en subgéneros como policiaco, horror, fantástico y ciencia ficción."
                        },
                        {
                            topic: "Novela",
                            q: "¿Qué es una novela?",
                            options: [
                                "Relato breve en verso",
                                "Relato extenso en prosa que cuenta acciones de ficción",
                                "Texto dramático",
                                "Poema épico"
                            ],
                            answerIndex: 1,
                            explain: "La novela es un relato extenso en prosa que cuenta una cadena de acciones, sucesos y corresponde fundamentalmente a la ficción."
                        },
                        {
                            topic: "Tipos de novela",
                            q: "¿Qué tipo de novela se menciona en la clasificación?",
                            options: [
                                "Solo realista",
                                "Realista, costumbrista, histórica, filosófica, psicológica",
                                "Únicamente de ciencia ficción",
                                "Solamente de aventuras"
                            ],
                            answerIndex: 1,
                            explain: "Las novelas se dividen en realista, costumbrista, histórica, filosófica, psicológica, ciencia ficción, horror y aventuras."
                        },
                        {
                            topic: "Estructura de la novela",
                            q: "¿Cómo se estructura la novela?",
                            options: [
                                "En escenas",
                                "Por medio de capítulos",
                                "En actos",
                                "En estrofas"
                            ],
                            answerIndex: 1,
                            explain: "La novela se estructura por medio de capítulos."
                        },
                        {
                            topic: "Trama novelística",
                            q: "¿Cómo puede ser la trama de una novela?",
                            options: [
                                "Solo lineal",
                                "Lineal o no lineal",
                                "Únicamente circular",
                                "Solamente ascendente"
                            ],
                            answerIndex: 1,
                            explain: "La trama de la novela puede ser lineal o no lineal."
                        }
                    ]
                },
                // ACTIVIDAD 3: Diseño de personajes, estructura narrativa, intertextualidad
                act3: {
                    nombre: "Actividad 3: Personajes y estructura narrativa",
                    desc: "Tipos de personajes, acciones, estructura del texto narrativo, intertextualidad, representantes del género narrativo",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Personajes",
                            q: "Según Barthes, ¿qué es un personaje?",
                            options: [
                                "El autor de la historia",
                                "El participante de la historia, de los acontecimientos",
                                "El narrador",
                                "El lector"
                            ],
                            answerIndex: 1,
                            explain: "El personaje es el participante de la historia, de los acontecimientos."
                        },
                        {
                            topic: "Clasificación de personajes",
                            q: "¿Cómo clasificó A.J. Greimas a los personajes?",
                            options: [
                                "Por su aspecto físico",
                                "Según lo que hacen, no según lo que son",
                                "Por su edad",
                                "Por su género"
                            ],
                            answerIndex: 1,
                            explain: "Greimas clasificó a los personajes según lo que hacen, no según lo que son en un sentido estereotípico."
                        },
                        {
                            topic: "Tipos de personajes",
                            q: "¿Cuál es el personaje principal de la historia?",
                            options: [
                                "Antagonista",
                                "Protagonista",
                                "Secundario",
                                "Incidental"
                            ],
                            answerIndex: 1,
                            explain: "El protagonista es el personaje principal de la historia."
                        },
                        {
                            topic: "Antagonista",
                            q: "Según Propp, ¿qué elementos caracterizan al antagonista?",
                            options: [
                                "Ayuda al héroe",
                                "Daño, combate, persecución o lucha contra el héroe",
                                "Es neutral",
                                "Narra la historia"
                            ],
                            answerIndex: 1,
                            explain: "Los elementos del antagonista son el daño, el combate, la persecución o cualquier otra forma de lucha contra el héroe."
                        },
                        {
                            topic: "Estructura narrativa",
                            q: "¿Cuáles son las tres partes de un texto narrativo?",
                            options: [
                                "Planteamiento, conflicto, resolución",
                                "Inicio, nudo o clímax, desenlace",
                                "Introducción, desarrollo, conclusión",
                                "Presentación, trama, final"
                            ],
                            answerIndex: 1,
                            explain: "La estructura de un texto narrativo se divide en inicio, nudo o clímax y desenlace."
                        },
                        {
                            topic: "Clímax",
                            q: "¿Qué es el nudo o clímax?",
                            options: [
                                "El inicio de la historia",
                                "El punto más álgido del conflicto narrativo",
                                "La resolución del conflicto",
                                "La presentación de personajes"
                            ],
                            answerIndex: 1,
                            explain: "El nudo o clímax es el punto más álgido del conflicto narrativo, donde se presenta la mayor tensión."
                        },
                        {
                            topic: "Intertextualidad",
                            q: "¿Qué es la intertextualidad según el Instituto Cervantes?",
                            options: [
                                "La relación entre autor y lector",
                                "La relación que un texto mantiene con otros textos",
                                "La estructura interna del texto",
                                "El género literario"
                            ],
                            answerIndex: 1,
                            explain: "La intertextualidad es la relación que un texto mantiene con otros textos, contemporáneos o históricos."
                        },
                        {
                            topic: "Ejemplo de intertextualidad",
                            q: "¿Qué obra de James Joyce hace referencia a La Odisea de Homero?",
                            options: [
                                "Retrato del artista adolescente",
                                "Ulises",
                                "Dublineses",
                                "Finnegans Wake"
                            ],
                            answerIndex: 1,
                            explain: "Ulises de James Joyce hace referencia a La Odisea de Homero, a su tema y a su personaje."
                        },
                        {
                            topic: "Representantes universales",
                            q: "¿Qué autor universal del género narrativo se menciona?",
                            options: [
                                "Sófocles",
                                "Homero",
                                "Píndaro",
                                "Safo"
                            ],
                            answerIndex: 1,
                            explain: "Homero es uno de los representantes más importantes del género narrativo con La Ilíada y La Odisea."
                        },
                        {
                            topic: "Representantes latinoamericanos",
                            q: "¿Qué autor mexicano destacado del género narrativo se menciona?",
                            options: [
                                "Octavio Paz",
                                "Juan Rulfo",
                                "Alfonso Reyes",
                                "Carlos Monsiváis"
                            ],
                            answerIndex: 1,
                            explain: "Juan Rulfo es uno de los representantes mexicanos destacados del género narrativo."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: LA PRODUCCIÓN DE TEXTOS ==========
        modulo3: {
            nombre: "Módulo 3: La producción de textos",
            actividades: {
                // ACTIVIDAD 1: Estrategias de comprensión, lectura inferencial, cualidades de la redacción
                act1: {
                    nombre: "Actividad 1: Estrategias de comprensión lectora",
                    desc: "Lectura referencial, inferencial, estructural, analítica, crítica, cualidades de la redacción",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Lectura inferencial",
                            q: "¿Qué es la lectura inferencial?",
                            options: [
                                "Leer rápidamente",
                                "Proceso que conlleva conocimientos previos para complementar la lectura y derivar conclusiones",
                                "Leer en voz alta",
                                "Memorizar el texto"
                            ],
                            answerIndex: 1,
                            explain: "La lectura inferencial tiene que ver con referencias sobre algo semejante, usando conocimientos previos, experiencias y contexto."
                        },
                        {
                            topic: "Tipos de inferencias",
                            q: "¿Qué tipo de inferencia se refiere a los motivos del autor o personajes?",
                            options: [
                                "Inferencia causal",
                                "Inferencia por actitud",
                                "Inferencia secuencial",
                                "Inferencia comparativa"
                            ],
                            answerIndex: 1,
                            explain: "La inferencia por actitud se refiere a los motivos del autor sobre el texto, de los personajes, acciones o sucesos."
                        },
                        {
                            topic: "Lectura estructural",
                            q: "¿En qué consiste la lectura estructural?",
                            options: [
                                "Leer entre líneas",
                                "Identificar la estructura formal del texto como un todo constituido por partes",
                                "Leer solo el final",
                                "Buscar definiciones"
                            ],
                            answerIndex: 1,
                            explain: "La lectura estructural consiste en identificar la estructura formal del texto, considerándolo como un todo constituido por partes cohesionadas."
                        },
                        {
                            topic: "Lectura analítica",
                            q: "¿Qué otro nombre recibe la lectura analítica?",
                            options: [
                                "Lectura superficial",
                                "Lectura de búsqueda y lectura de comprensión",
                                "Lectura de consulta",
                                "Lectura exploratoria"
                            ],
                            answerIndex: 1,
                            explain: "A la lectura analítica se le conoce también como lectura de búsqueda y lectura de comprensión."
                        },
                        {
                            topic: "Lectura crítica",
                            q: "¿Qué tipo de juicios se emiten en la lectura crítica?",
                            options: [
                                "Juicios sin fundamento",
                                "Juicios valorativos desde una posición documentada y sustentada",
                                "Juicios apresurados",
                                "Opiniones personales"
                            ],
                            answerIndex: 1,
                            explain: "La lectura crítica permite emitir juicios valorativos desde una posición documentada y sustentada."
                        },
                        {
                            topic: "Claridad",
                            q: "¿Qué significa la claridad en la redacción?",
                            options: [
                                "Usar palabras difíciles",
                                "Escribir de manera que el lector entienda sin necesidad de releer",
                                "Escribir mucho",
                                "Usar tecnicismos"
                            ],
                            answerIndex: 1,
                            explain: "La claridad consiste en escribir un texto de manera que el lector pueda entenderlo con facilidad sin verse obligado a releer."
                        },
                        {
                            topic: "Concisión",
                            q: "¿En qué consiste la concisión?",
                            options: [
                                "Usar muchas palabras",
                                "Emplear palabras específicas y precisas con el menor número de palabras",
                                "Repetir ideas",
                                "Ser ambiguo"
                            ],
                            answerIndex: 1,
                            explain: "La concisión reside en emplear palabras específicas y precisas para expresar objetivamente lo que se quiere con el menor número de palabras."
                        },
                        {
                            topic: "Coherencia",
                            q: "¿Qué permite la coherencia en un texto?",
                            options: [
                                "Identificar el tema central y los temas derivados",
                                "Usar sinónimos",
                                "Tener muchos signos de puntuación",
                                "Cambiar de tema constantemente"
                            ],
                            answerIndex: 0,
                            explain: "La coherencia permite identificar el tema central y los temas que se derivan de él, estableciendo relaciones entre oraciones."
                        },
                        {
                            topic: "Fluidez",
                            q: "¿Cuándo se percibe la fluidez en un texto?",
                            options: [
                                "Cuando es difícil de leer",
                                "Cuando el lector desarrolla con facilidad el mensaje y siente necesidad de continuar",
                                "Cuando tiene palabras rebuscadas",
                                "Cuando es muy extenso"
                            ],
                            answerIndex: 1,
                            explain: "La fluidez se percibe cuando el lector desarrolla con facilidad el mensaje y siente la necesidad de continuar la lectura."
                        },
                        {
                            topic: "Originalidad",
                            q: "¿En qué radica la originalidad del estilo según Martín y Sánchez?",
                            options: [
                                "En temas nuevos",
                                "En la sinceridad",
                                "En palabras difíciles",
                                "En imitar a otros"
                            ],
                            answerIndex: 1,
                            explain: "La originalidad del estilo radica, de modo casi exclusivo, en la sinceridad."
                        }
                    ]
                },
                // ACTIVIDAD 2: Mapas mentales, elementos no verbales
                act2: {
                    nombre: "Actividad 2: Mapas mentales y apoyos visuales",
                    desc: "Mapa mental, elementos, elaboración, utilidad, gráficos y organizadores gráficos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Mapa mental",
                            q: "Según Campos, ¿qué es un mapa mental?",
                            options: [
                                "Un resumen escrito",
                                "La configuración gráfica que representa un estado del conocimiento",
                                "Una lista de ideas",
                                "Un esquema numérico"
                            ],
                            answerIndex: 1,
                            explain: "El mapa mental es la configuración gráfica que representa un estado del conocimiento."
                        },
                        {
                            topic: "Mapa mental",
                            q: "¿Cómo se visualiza un mapa mental según Buzan?",
                            options: [
                                "Como una tabla",
                                "Como una neurona con ramas que se expanden del centro",
                                "Como un círculo",
                                "Como una pirámide"
                            ],
                            answerIndex: 1,
                            explain: "El mapa mental se visualiza como una neurona con ramas que se expanden de su centro a través de patrones de asociación."
                        },
                        {
                            topic: "Elementos del mapa mental",
                            q: "¿Qué elementos se utilizan en un mapa mental?",
                            options: [
                                "Solo palabras",
                                "Palabras, códigos, color, figuras geométricas, números, imágenes, ramas",
                                "Únicamente imágenes",
                                "Solamente números"
                            ],
                            answerIndex: 1,
                            explain: "Los elementos del mapa mental incluyen palabras, códigos, color, figuras geométricas, números, imágenes y ramas."
                        },
                        {
                            topic: "Ramas",
                            q: "¿Qué representan las ramas gruesas en un mapa mental?",
                            options: [
                                "Ideas secundarias",
                                "Ideas principales que irradian de la imagen central",
                                "Detalles sin importancia",
                                "Conceptos aislados"
                            ],
                            answerIndex: 1,
                            explain: "Las ramas más gruesas acompañan a las ideas principales del tema e irradian de la imagen central."
                        },
                        {
                            topic: "Elaboración del mapa mental",
                            q: "¿Cuál es el primer paso para elaborar un mapa mental?",
                            options: [
                                "Diseñar la imagen central",
                                "Realizar una tormenta de ideas asociadas al tema central",
                                "Revisar correcciones",
                                "Adecuar el mapa con colores"
                            ],
                            answerIndex: 1,
                            explain: "El primer paso es realizar una tormenta de ideas asociadas al tema central, agrupándolas por niveles."
                        },
                        {
                            topic: "Utilidad del mapa mental",
                            q: "¿Qué beneficio aporta el mapa mental?",
                            options: [
                                "Confunde al lector",
                                "Ordena el conocimiento previo y mejora la memoria",
                                "Oculta información",
                                "Solo es decorativo"
                            ],
                            answerIndex: 1,
                            explain: "El mapa mental ordena el conocimiento previo, reorganiza la estructura cognitiva y mejora habilidades como el recuerdo y la memoria."
                        },
                        {
                            topic: "Gráficos",
                            q: "¿Cuál es la función de los gráficos en una exposición?",
                            options: [
                                "Distraer al público",
                                "Apoyar el desarrollo ilustrando el contenido",
                                "Sustituir al expositor",
                                "Llenar espacio"
                            ],
                            answerIndex: 1,
                            explain: "Los gráficos son recursos visuales que apoyan la exposición ilustrando el contenido que se aborde."
                        },
                        {
                            topic: "Organizadores gráficos",
                            q: "¿Qué tipo de apoyo visual desarrolla el contenido además de ilustrar?",
                            options: [
                                "Fotografías",
                                "Organizadores gráficos",
                                "Vectores",
                                "Dibujos simples"
                            ],
                            answerIndex: 1,
                            explain: "Los organizadores gráficos además de ilustrar, desarrollan el contenido."
                        },
                        {
                            topic: "Ejemplos de organizadores",
                            q: "¿Qué organizador gráfico se menciona en el texto?",
                            options: [
                                "Mapa conceptual",
                                "Diagrama de Venn",
                                "Cuadro comparativo",
                                "Línea del tiempo"
                            ],
                            answerIndex: 1,
                            explain: "El diagrama de Venn es uno de los organizadores gráficos mencionados."
                        },
                        {
                            topic: "TIC en exposiciones",
                            q: "¿Qué precaución debe tenerse con el uso de TIC en exposiciones?",
                            options: [
                                "Usar la mayor cantidad posible",
                                "No abusar de ellas, son solo un recurso, no sustituyen al expositor",
                                "Evitarlas completamente",
                                "Usar solo tecnología de punta"
                            ],
                            answerIndex: 1,
                            explain: "Se debe tener cuidado de no abusar de las TIC; son solo un recurso y no más importantes que el expositor."
                        }
                    ]
                },
                // ACTIVIDAD 3: Exposición oral, preparación, cualidades del expositor
                act3: {
                    nombre: "Actividad 3: Exposición oral",
                    desc: "Preparación de exposición, planeación, material de apoyo, cualidades del expositor, audiencia",
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
                            q: "¿Qué recurso se menciona para apoyar una exposición?",
                            options: [
                                "Solo la voz",
                                "Esquemas, gráficos, materiales audiovisuales, diapositivas",
                                "Únicamente el pizarrón",
                                "Solamente la memoria"
                            ],
                            answerIndex: 1,
                            explain: "Los recursos incluyen esquemas, gráficos, materiales audiovisuales, diapositivas, pizarrón y rotafolio."
                        },
                        {
                            topic: "Preguntas de planeación",
                            q: "¿Qué pregunta de planeación ayuda a definir la metodología y recursos?",
                            options: [
                                "¿Qué?",
                                "¿Cómo?",
                                "¿Cuándo?",
                                "¿Por qué?"
                            ],
                            answerIndex: 1,
                            explain: "La pregunta ¿Cómo? define la metodología, pasos a seguir y recursos que facilitarán la exposición."
                        },
                        {
                            topic: "Preguntas de planeación",
                            q: "¿Qué pregunta sustenta todo el trabajo dotándolo de sentido?",
                            options: [
                                "¿Qué?",
                                "¿Para qué?",
                                "¿Dónde?",
                                "¿Quién?"
                            ],
                            answerIndex: 1,
                            explain: "La pregunta ¿Para qué? es quizá la más útil, pues sustenta todo el trabajo dotándolo de sentido."
                        },
                        {
                            topic: "Material de apoyo",
                            q: "¿Qué se recomienda anotar en las fichas de trabajo?",
                            options: [
                                "El texto completo",
                                "Definiciones, ejemplos y datos relevantes",
                                "Solo títulos",
                                "Preguntas para el público"
                            ],
                            answerIndex: 1,
                            explain: "Se recomienda preparar fichas con definiciones, ejemplos o cualquier dato relevante que requiera explicación detallada."
                        },
                        {
                            topic: "Diapositivas",
                            q: "¿Cuántas diapositivas se recomienda no exceder?",
                            options: [
                                "5",
                                "10",
                                "20",
                                "30"
                            ],
                            answerIndex: 1,
                            explain: "Se recomienda no excederse de diez diapositivas, dependiendo de la extensión del material."
                        },
                        {
                            topic: "Cualidades del expositor",
                            q: "Según Rojas Tapia, ¿qué cualidad se refiere a la pronunciación clara y precisa?",
                            options: [
                                "Volumen",
                                "Dicción",
                                "Fluidez",
                                "Entonación"
                            ],
                            answerIndex: 1,
                            explain: "La dicción es la pronunciación clara, precisa y consciente."
                        },
                        {
                            topic: "Cualidades del expositor",
                            q: "¿Qué cualidad implica matizar la voz y darle énfasis?",
                            options: [
                                "Volumen",
                                "Entonación",
                                "Fluidez",
                                "Manejo de audiencia"
                            ],
                            answerIndex: 1,
                            explain: "La entonación consiste en matizar la voz, darle énfasis, hacer que suban y bajen los tonos según la intención."
                        },
                        {
                            topic: "Audiencia",
                            q: "¿Qué se debe considerar del público al exponer?",
                            options: [
                                "Ignorar sus reacciones",
                                "Su diversidad, edad, estilo de vida y ocupación",
                                "Hablar solo para uno mismo",
                                "No aceptar preguntas"
                            ],
                            answerIndex: 1,
                            explain: "Se debe considerar la diversidad del público, su estilo de vida, edad y ocupación; evitar comentarios ofensivos."
                        },
                        {
                            topic: "Cierre de exposición",
                            q: "¿Qué se recomienda al finalizar la exposición?",
                            options: [
                                "Salir rápidamente",
                                "Abrir espacio para preguntas y comentarios",
                                "No interactuar con el público",
                                "Leer nuevamente todo"
                            ],
                            answerIndex: 1,
                            explain: "Es importante abrir un espacio para interactuar con el público mediante preguntas y comentarios al finalizar."
                        }
                    ]
                }
            }
        }
    }
};

export default lenguaComunicacion1;