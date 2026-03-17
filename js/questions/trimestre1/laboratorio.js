// ============================================
// LABORATORIO DE INVESTIGACIÓN - TRIMESTRE 1
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const laboratorioInvestigacion1 = {
    id: "laboratorio1",
    nombre: "LABORATORIO DE INVESTIGACIÓN I",
    icono: "🔬",
    descripcion: "Metodología de la investigación, epistemología, métodos y técnicas",
    modulos: {
        // ========== MÓDULO 1: BASES Y FUNDAMENTOS DE LA INVESTIGACIÓN ==========
        modulo1: {
            nombre: "Módulo 1: Bases y fundamentos de la Investigación",
            actividades: {
                // ACTIVIDAD 1: Epistemología, tipos de conocimiento, fenómenos sociales
                act1: {
                    nombre: "Actividad 1: Epistemología y fenómenos sociales",
                    desc: "Conocimiento, epistemología, tipos de conocimiento, trabajo, derechos humanos, violencia de género, corrupción, delincuencia",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Epistemología",
                            q: "¿Qué estudia la epistemología?",
                            options: [
                                "Los valores morales",
                                "La producción y validación del conocimiento científico",
                                "El ser en general",
                                "La belleza y el arte"
                            ],
                            answerIndex: 1,
                            explain: "La epistemología es una disciplina filosófica que estudia las causas, fundamentos y métodos por los cuales se genera el conocimiento, en particular el científico."
                        },
                        {
                            topic: "Conocimiento",
                            q: "¿Qué tipo de conocimiento se basa en la fe y certeza de un ser supremo?",
                            options: [
                                "Conocimiento científico",
                                "Conocimiento empírico",
                                "Conocimiento religioso",
                                "Conocimiento intuitivo"
                            ],
                            answerIndex: 2,
                            explain: "El conocimiento religioso se basa en la fe y certeza de que el mundo fue creado por un ser supremo, con un sistema de creencias incuestionables."
                        },
                        {
                            topic: "Conocimiento",
                            q: "¿Qué tipo de conocimiento es producto de la relación de los sentidos y las emociones con el mundo?",
                            options: [
                                "Conocimiento científico",
                                "Conocimiento intuitivo",
                                "Conocimiento filosófico",
                                "Conocimiento empírico"
                            ],
                            answerIndex: 1,
                            explain: "El conocimiento intuitivo es producto de la relación de los sentidos y las emociones con el mundo, es no sistematizado, no científico y no comprobable."
                        },
                        {
                            topic: "Método científico",
                            q: "¿Cuál es una característica del método científico?",
                            options: [
                                "Es subjetivo",
                                "No puede verificarse",
                                "Es fáctico, parte de hechos reales",
                                "Se basa en dogmas"
                            ],
                            answerIndex: 2,
                            explain: "El método científico es fáctico, es decir, parte de hechos reales y tiene una referencia empírica."
                        },
                        {
                            topic: "Conocimiento científico",
                            q: "¿Qué característica del conocimiento científico indica que se pueden predecir ciertos resultados?",
                            options: [
                                "Es analítico",
                                "Es predictivo",
                                "Es especializado",
                                "Es abierto"
                            ],
                            answerIndex: 1,
                            explain: "El conocimiento científico es predictivo porque a partir de resultados obtenidos en el pasado y presente, puede predecir la ocurrencia de ciertos resultados."
                        },
                        {
                            topic: "Trabajo",
                            q: "¿Qué autor consideraba que 'la fuerza de trabajo es el motor de la historia'?",
                            options: [
                                "Emile Durkheim",
                                "Max Weber",
                                "Karl Marx",
                                "Pierre Bourdieu"
                            ],
                            answerIndex: 2,
                            explain: "Para Marx el trabajo es un asunto elemental en el desarrollo de la humanidad, 'la fuerza de trabajo es el motor de la historia'."
                        },
                        {
                            topic: "Derechos Humanos",
                            q: "¿En qué año se proclamó la Declaración Universal de los Derechos Humanos?",
                            options: [
                                "1910",
                                "1948",
                                "1954",
                                "1968"
                            ],
                            answerIndex: 1,
                            explain: "La Declaración Universal de los Derechos Humanos fue proclamada en 1948."
                        },
                        {
                            topic: "Violencia infantil",
                            q: "Según UNICEF, ¿qué tipo de violencia implica el uso de la fuerza en reprimendas que pueden implicar crueldad?",
                            options: [
                                "Violencia sexual",
                                "Violencia emocional",
                                "Violencia física",
                                "Violencia institucional"
                            ],
                            answerIndex: 2,
                            explain: "La violencia física implica el uso de la fuerza en la aplicación de condenas y reprimendas que pueden implicar crueldad, intimidación y degradación."
                        },
                        {
                            topic: "Feminicidio",
                            q: "¿En qué año se reconoció el feminicidio dentro del marco legal en México?",
                            options: [
                                "2000",
                                "2005",
                                "2007",
                                "2010"
                            ],
                            answerIndex: 2,
                            explain: "Fue hasta 2007 que en México se reconoció al feminicidio dentro del marco legal."
                        },
                        {
                            topic: "Corrupción",
                            q: "¿Qué porcentaje del PIB pierde una nación que no es transparente según el FMI?",
                            options: [
                                "2%",
                                "5%",
                                "10%",
                                "15%"
                            ],
                            answerIndex: 1,
                            explain: "De acuerdo a datos del Fondo Monetario Internacional (FMI), toda nación que no sea transparente en sus procesos económicos y políticos pierde un 5% en su nivel de inversión."
                        }
                    ]
                },
                // ACTIVIDAD 2: Paradigmas, tipos de conocimiento, método científico
                act2: {
                    nombre: "Actividad 2: Paradigmas y método científico",
                    desc: "Paradigmas de investigación, tipos de conocimiento, método científico, ciencias formales y fácticas, ciencias sociales",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Paradigmas",
                            q: "¿Qué es un paradigma de investigación?",
                            options: [
                                "Un resultado de investigación",
                                "Conjunto de actitudes y creencias para abordar la realidad",
                                "Una técnica de recolección de datos",
                                "Un instrumento de medición"
                            ],
                            answerIndex: 1,
                            explain: "Un paradigma es un conjunto de actitudes, creencias y maneras de ver la realidad con las que los investigadores deciden abordar el estudio."
                        },
                        {
                            topic: "Conocimiento",
                            q: "¿Qué postura filosófica se apegada al mundo real externo al sujeto?",
                            options: [
                                "Idealismo",
                                "Realismo",
                                "Escepticismo",
                                "Dogmatismo"
                            ],
                            answerIndex: 1,
                            explain: "El realismo está apegado al mundo real externo al sujeto, buscando la objetividad."
                        },
                        {
                            topic: "Conocimiento",
                            q: "¿Qué postura filosófica se relaciona con el sujeto y la interpretación que hace del mundo?",
                            options: [
                                "Realismo",
                                "Idealismo",
                                "Empirismo",
                                "Positivismo"
                            ],
                            answerIndex: 1,
                            explain: "El idealismo se relaciona con el sujeto y la interpretación que hace del mundo real, vinculado a la subjetividad."
                        },
                        {
                            topic: "Método científico",
                            q: "¿Cuál es el primer paso del método científico según Schaefer?",
                            options: [
                                "Plantear la hipótesis",
                                "Definir el problema",
                                "Revisar la literatura",
                                "Seleccionar el diseño de investigación"
                            ],
                            answerIndex: 1,
                            explain: "El primer paso de toda investigación científica es definir el problema, delimitar lo que se quiere investigar."
                        },
                        {
                            topic: "Hipótesis",
                            q: "¿Qué es una hipótesis?",
                            options: [
                                "Un resultado comprobado",
                                "Una afirmación especulativa acerca de la relación entre variables",
                                "Una técnica de investigación",
                                "Un instrumento de medición"
                            ],
                            answerIndex: 1,
                            explain: "Una hipótesis es una afirmación especulativa acerca de la relación entre dos o más factores conocidos como variables."
                        },
                        {
                            topic: "Ciencias",
                            q: "¿Cómo se clasifican las ciencias según Mario Bunge?",
                            options: [
                                "Naturales y sociales",
                                "Formales y fácticas",
                                "Exactas y humanas",
                                "Básicas y aplicadas"
                            ],
                            answerIndex: 1,
                            explain: "Mario Bunge clasifica las ciencias en formales y fácticas."
                        },
                        {
                            topic: "Ciencias Sociales",
                            q: "¿Qué autor es considerado fundador del funcionalismo en Ciencias Sociales?",
                            options: [
                                "Karl Marx",
                                "Max Weber",
                                "Emile Durkheim",
                                "Auguste Comte"
                            ],
                            answerIndex: 2,
                            explain: "Emile Durkheim (1858-1917) es el fundador del funcionalismo."
                        },
                        {
                            topic: "Ciencias Sociales",
                            q: "¿Qué nivel de análisis se relaciona con el todo social?",
                            options: [
                                "Micro",
                                "Macro",
                                "Meso",
                                "Particular"
                            ],
                            answerIndex: 1,
                            explain: "El nivel macro se relaciona con el todo, ejerciendo ciertas influencias en las partes."
                        },
                        {
                            topic: "Sociología",
                            q: "¿Quién acuñó el término 'sociología' en 1838?",
                            options: [
                                "Emile Durkheim",
                                "Karl Marx",
                                "Max Weber",
                                "Auguste Comte"
                            ],
                            answerIndex: 3,
                            explain: "El término sociología lo acuña Auguste Comte en 1838."
                        },
                        {
                            topic: "Historia",
                            q: "¿A quién se considera el padre de la historia?",
                            options: [
                                "Aristóteles",
                                "Platón",
                                "Heródoto",
                                "Tucídides"
                            ],
                            answerIndex: 2,
                            explain: "A Heródoto se le considera el padre de la historia."
                        }
                    ]
                },
                // ACTIVIDAD 3: Tipos de investigación, enfoques, métodos, instrumentos, APA
                act3: {
                    nombre: "Actividad 3: Métodos, técnicas e instrumentos",
                    desc: "Tipos de investigación, enfoques cualitativo y cuantitativo, métodos de investigación, técnicas e instrumentos, población y muestra, estilo APA",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Tipos de investigación",
                            q: "¿Qué tipo de investigación busca formular nuevas teorías de carácter universal?",
                            options: [
                                "Investigación aplicada",
                                "Investigación pura o básica",
                                "Investigación documental",
                                "Investigación de campo"
                            ],
                            answerIndex: 1,
                            explain: "La investigación pura o básica busca formular nuevas teorías de carácter universal, como el conocimiento filosófico y científico."
                        },
                        {
                            topic: "Enfoques",
                            q: "¿Qué enfoque de investigación se basa en la recolección de datos sin medición numérica?",
                            options: [
                                "Cuantitativo",
                                "Cualitativo",
                                "Mixto",
                                "Experimental"
                            ],
                            answerIndex: 1,
                            explain: "El enfoque cualitativo utiliza la recolección de datos sin medición numérica para descubrir o afinar preguntas de investigación."
                        },
                        {
                            topic: "Métodos",
                            q: "¿Qué método consiste en una operación lógica que va de lo particular a lo general?",
                            options: [
                                "Método deductivo",
                                "Método inductivo",
                                "Método analítico",
                                "Método sintético"
                            ],
                            answerIndex: 1,
                            explain: "El método inductivo consiste en una operación lógica que va de lo particular a lo general, apoyándose en la observación repetida de fenómenos."
                        },
                        {
                            topic: "Métodos",
                            q: "¿Qué método utilizó Aristóteles y se conforma por cuatro pasos: los fenómenos se aprehenden, parte de lo general, considera antecedentes, examina con el pensamiento?",
                            options: [
                                "Método inductivo",
                                "Método deductivo",
                                "Método de síntesis",
                                "Método experimental"
                            ],
                            answerIndex: 2,
                            explain: "Aristóteles utilizó el método de síntesis, que consiste en cuatro pasos para averiguar el conocimiento empírico."
                        },
                        {
                            topic: "Técnicas",
                            q: "¿Qué técnica de investigación consiste en la atención metódica hacia un objeto para conocerlo?",
                            options: [
                                "Encuesta",
                                "Entrevista",
                                "Observación",
                                "Experimentación"
                            ],
                            answerIndex: 2,
                            explain: "La observación se refiere a la atención metódica hacia un objeto, con la finalidad de conocerlo."
                        },
                        {
                            topic: "Instrumentos",
                            q: "¿Qué instrumento se utiliza en la técnica de encuesta?",
                            options: [
                                "Guía de observación",
                                "Guía de entrevista",
                                "Cuestionario",
                                "Prueba o test"
                            ],
                            answerIndex: 2,
                            explain: "Para realizar una encuesta, se recomienda el uso del cuestionario, que consiste en un conjunto de preguntas por escrito."
                        },
                        {
                            topic: "Población y muestra",
                            q: "¿Qué tipo de muestreo permite que todos los miembros de la población tengan la misma posibilidad de ser elegidos?",
                            options: [
                                "Muestreo no probabilístico",
                                "Muestreo probabilístico",
                                "Muestreo por voluntarios",
                                "Muestreo de expertos"
                            ],
                            answerIndex: 1,
                            explain: "En el muestreo probabilístico o aleatorio, todos los miembros de la población tienen la misma posibilidad de ser parte del estudio."
                        },
                        {
                            topic: "APA",
                            q: "¿Qué significa la sigla APA?",
                            options: [
                                "Asociación de Psicólogos Americanos",
                                "American Psychological Association",
                                "Academia de Publicaciones Académicas",
                                "Asociación de Profesores de América"
                            ],
                            answerIndex: 1,
                            explain: "APA significa American Psychological Association, que publica el manual de estilo para publicaciones académicas."
                        },
                        {
                            topic: "Citas",
                            q: "¿Cómo se llama la cita que tiene menos de 40 palabras y se escribe entre comillas?",
                            options: [
                                "Cita en bloque",
                                "Cita textual corta",
                                "Cita de parafraseo",
                                "Cita narrativa"
                            ],
                            answerIndex: 1,
                            explain: "La cita corta tiene menos de 40 palabras y se escribe inmersa en el texto, entre comillas y sin cursiva."
                        },
                        {
                            topic: "Confiabilidad",
                            q: "¿Qué parámetro se refiere al nivel en que un instrumento produce los mismos resultados en condiciones similares?",
                            options: [
                                "Validez",
                                "Confiabilidad",
                                "Objetividad",
                                "Precisión"
                            ],
                            answerIndex: 1,
                            explain: "La confiabilidad se refiere al nivel en que un instrumento produce los mismos resultados después de haberse aplicado a sujetos semejantes en condiciones similares."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: LA CONSTRUCCIÓN DE LA INVESTIGACIÓN ==========
        modulo2: {
            nombre: "Módulo 2: La construcción de la investigación",
            actividades: {
                // ACTIVIDAD 1: Protocolo, selección del tema, planteamiento del problema, hipótesis, objetivos
                act1: {
                    nombre: "Actividad 1: Protocolo de investigación",
                    desc: "Selección y delimitación del tema, planteamiento del problema, hipótesis, variables, objetivos, justificación, cronograma",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Selección del tema",
                            q: "¿Cuál es una fuente de ideas para investigación según Del Cid y Sandoval?",
                            options: [
                                "Solo libros",
                                "Ámbito académico, organizacional y laboral",
                                "Únicamente internet",
                                "Solamente expertos"
                            ],
                            answerIndex: 1,
                            explain: "Las fuentes que proporcionan ideas para investigación se clasifican en ámbitos: académico, organizacional y laboral."
                        },
                        {
                            topic: "Delimitación del tema",
                            q: "¿En qué aspectos se debe delimitar un tema de investigación según Tamayo?",
                            options: [
                                "Solo tiempo",
                                "Tiempo, espacio y estructura temática",
                                "Únicamente espacio",
                                "Población y muestra"
                            ],
                            answerIndex: 1,
                            explain: "La delimitación del tema se hace en relación con el tiempo, el espacio y la estructura temática."
                        },
                        {
                            topic: "Planteamiento del problema",
                            q: "¿Cómo se formula el planteamiento del problema según Balestrini?",
                            options: [
                                "Con hipótesis",
                                "A través de preguntas precisas",
                                "Con objetivos",
                                "Con justificación"
                            ],
                            answerIndex: 1,
                            explain: "La forma más directa para determinar un problema de investigación es a través de la formulación de preguntas lo suficientemente precisas."
                        },
                        {
                            topic: "Variables",
                            q: "¿Qué es una variable según Hernández?",
                            options: [
                                "Un resultado fijo",
                                "Una propiedad que puede fluctuar y medirse",
                                "Una hipótesis comprobada",
                                "Un instrumento de medición"
                            ],
                            answerIndex: 1,
                            explain: "Una variable es una propiedad que puede fluctuar y cuya variación es susceptible de medirse u observarse."
                        },
                        {
                            topic: "Hipótesis",
                            q: "¿Qué tipo de hipótesis propone una relación entre varias variables?",
                            options: [
                                "Hipótesis descriptiva",
                                "Hipótesis correlacional",
                                "Hipótesis nula",
                                "Hipótesis alternativa"
                            ],
                            answerIndex: 1,
                            explain: "Las hipótesis correlacionales especifican las relaciones entre dos o más variables y corresponden a estudios correlacionales."
                        },
                        {
                            topic: "Hipótesis",
                            q: "¿Qué tipo de hipótesis niega lo que establece la hipótesis de investigación?",
                            options: [
                                "Hipótesis alternativa",
                                "Hipótesis nula",
                                "Hipótesis estadística",
                                "Hipótesis causal"
                            ],
                            answerIndex: 1,
                            explain: "Las hipótesis nulas son proposiciones que niegan o refutan la relación entre variables establecida en la hipótesis de investigación."
                        },
                        {
                            topic: "Objetivos",
                            q: "¿Con qué tipo de verbo se redactan los objetivos de investigación?",
                            options: [
                                "Verbos en pasado",
                                "Verbos en infinitivo",
                                "Verbos en gerundio",
                                "Verbos en futuro"
                            ],
                            answerIndex: 1,
                            explain: "Los objetivos se redactan con verbos en forma infinitiva (terminación ar, er, ir)."
                        },
                        {
                            topic: "Justificación",
                            q: "¿Qué pregunta responde la justificación en una investigación?",
                            options: [
                                "¿Qué se investiga?",
                                "¿Por qué y para qué es importante estudiar el tema?",
                                "¿Cómo se investiga?",
                                "¿Quién investiga?"
                            ],
                            answerIndex: 1,
                            explain: "La justificación expone con claridad y precisión el ¿por qué? y ¿para qué? es importante estudiar el tema seleccionado."
                        },
                        {
                            topic: "Cronograma",
                            q: "¿Qué herramienta permite programar las actividades de investigación en el tiempo?",
                            options: [
                                "Presupuesto",
                                "Cronograma",
                                "Índice",
                                "Marco teórico"
                            ],
                            answerIndex: 1,
                            explain: "El cronograma permite programar las actividades de investigación en el tiempo, distribuyéndolas por meses."
                        },
                        {
                            topic: "Hipótesis",
                            q: "¿Cuál es una razón por la que las hipótesis son herramientas indispensables según Kerlinger y Lee?",
                            options: [
                                "Porque son fáciles de redactar",
                                "Porque permiten el avance del conocimiento trascendiendo al individuo",
                                "Porque siempre son verdaderas",
                                "Porque no requieren comprobación"
                            ],
                            answerIndex: 1,
                            explain: "Las hipótesis permiten el avance del conocimiento porque trascienden al individuo; su comprobación o refutación se lleva a cabo independientemente de los valores del investigador."
                        }
                    ]
                },
                // ACTIVIDAD 2: Marco teórico, fuentes de información, revisión de literatura
                act2: {
                    nombre: "Actividad 2: Marco teórico",
                    desc: "Marco teórico, funciones, elementos, tipos, revisión de literatura, fuentes de información, adopción de teorías",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Marco teórico",
                            q: "¿Qué es el marco teórico?",
                            options: [
                                "La recolección de datos",
                                "La recopilación escrita de datos obtenidos al investigar sobre el problema",
                                "El análisis estadístico",
                                "La presentación de resultados"
                            ],
                            answerIndex: 1,
                            explain: "El marco teórico es la recopilación escrita de los datos obtenidos al investigar en libros, artículos y fuentes sobre el estado pasado y actual del problema en estudio."
                        },
                        {
                            topic: "Marco teórico",
                            q: "¿Cuál es una función del marco teórico según Hernández?",
                            options: [
                                "Recolectar datos",
                                "Ayudar a prevenir errores cometidos en otras investigaciones",
                                "Aplicar instrumentos",
                                "Tabular resultados"
                            ],
                            answerIndex: 1,
                            explain: "Una función del marco teórico es ayudar a prevenir errores que se han cometido en otras investigaciones."
                        },
                        {
                            topic: "Marco teórico",
                            q: "¿Qué tipo de marco teórico se enfoca en los hechos pasados relacionados con el tema?",
                            options: [
                                "Marco conceptual",
                                "Marco histórico",
                                "Marco referencial",
                                "Marco jurídico"
                            ],
                            answerIndex: 1,
                            explain: "El marco histórico se enfoca en los hechos pasados, sus antecedentes y evolución histórica del tema."
                        },
                        {
                            topic: "Fuentes de información",
                            q: "¿Qué tipo de fuente de información presenta resultados de un trabajo original?",
                            options: [
                                "Fuente secundaria",
                                "Fuente primaria",
                                "Fuente terciaria",
                                "Fuente electrónica"
                            ],
                            answerIndex: 1,
                            explain: "Las fuentes primarias presentan la información resultante de un trabajo original."
                        },
                        {
                            topic: "Fuentes de información",
                            q: "¿Qué tipo de fuente son las antologías y compilaciones?",
                            options: [
                                "Fuentes primarias",
                                "Fuentes secundarias",
                                "Fuentes terciarias",
                                "Fuentes electrónicas"
                            ],
                            answerIndex: 1,
                            explain: "Las antologías y compilaciones son fuentes secundarias, ya que remiten a documentos primarios."
                        },
                        {
                            topic: "Revisión de literatura",
                            q: "¿Qué se utiliza para buscar información de manera precisa en la revisión de literatura?",
                            options: [
                                "Párrafos completos",
                                "Palabras clave o descriptores",
                                "Títulos largos",
                                "Resúmenes"
                            ],
                            answerIndex: 1,
                            explain: "La forma correcta de revisar la literatura es a través de palabras clave o descriptores representativos del tema."
                        },
                        {
                            topic: "Construcción del marco teórico",
                            q: "¿Qué método de construcción del marco teórico consiste en ordenar por criterios lógicos como orden cronológico?",
                            options: [
                                "Método por índices",
                                "Método de mapeo",
                                "Método vertebrar",
                                "Método analítico"
                            ],
                            answerIndex: 1,
                            explain: "El método de mapeo consiste en ordenar de acuerdo con criterios lógicos como orden cronológico, subtemas o teorías."
                        },
                        {
                            topic: "Adopción de teorías",
                            q: "¿Qué estrategia se recomienda cuando existe una teoría completamente desarrollada?",
                            options: [
                                "Crear una nueva teoría",
                                "Tomarla como base para el marco teórico",
                                "Ignorarla",
                                "Buscar otra teoría"
                            ],
                            answerIndex: 1,
                            explain: "Cuando existe una teoría completamente desarrollada, la mejor estrategia es tomarla para construir el marco teórico."
                        },
                        {
                            topic: "Redacción",
                            q: "¿Qué tipo de frases se recomienda usar como enlace en la redacción del marco teórico?",
                            options: [
                                "Frases cortas",
                                "Frases de enlace como 'de este modo', 'en otras palabras'",
                                "Solo signos de puntuación",
                                "Números"
                            ],
                            answerIndex: 1,
                            explain: "Se recomienda utilizar frases de enlace como: de este modo, hay que recordar, en otras palabras, es decir, por último, en conclusión."
                        },
                        {
                            topic: "Marco teórico",
                            q: "¿Qué elemento del marco teórico se refiere al listado de términos con sus respectivas variables?",
                            options: [
                                "Antecedentes",
                                "Base teórica",
                                "Definición de términos",
                                "Hipótesis"
                            ],
                            answerIndex: 2,
                            explain: "La definición de términos se refiere al listado de términos o conceptos, cada uno con sus respectivas variables y formas de ser medidos."
                        }
                    ]
                },
                // ACTIVIDAD 3: Instrumentos, escalas Likert, aplicación, codificación
                act3: {
                    nombre: "Actividad 3: Instrumentos y recolección de datos",
                    desc: "Elaboración de instrumentos, tránsito de variable a ítem, codificación, niveles de medición, cuestionarios, escalas Likert, aplicación",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Instrumentos",
                            q: "¿Cuál es el orden correcto para elaborar un instrumento desde la variable hasta el reactivo?",
                            options: [
                                "Indicador → dimensión → variable → reactivo",
                                "Variable → dimensión → indicador → reactivo",
                                "Reactivo → indicador → dimensión → variable",
                                "Dimensión → variable → indicador → reactivo"
                            ],
                            answerIndex: 1,
                            explain: "El orden es: variable → dimensión → indicador → reactivo (ítem)."
                        },
                        {
                            topic: "Codificación",
                            q: "¿Qué es la codificación en la elaboración de instrumentos?",
                            options: [
                                "Diseñar las preguntas",
                                "Asignar un valor numérico o código a las respuestas",
                                "Aplicar la prueba piloto",
                                "Redactar la introducción"
                            ],
                            answerIndex: 1,
                            explain: "La codificación consiste en asignar un valor numérico o un código a las respuestas de los reactivos."
                        },
                        {
                            topic: "Niveles de medición",
                            q: "¿Qué nivel de medición tiene categorías sin jerarquía, solo para diferenciar?",
                            options: [
                                "Ordinal",
                                "Nominal",
                                "Intervalo",
                                "Razón"
                            ],
                            answerIndex: 1,
                            explain: "El nivel nominal puede tener dos o más categorías, sin que ninguna represente mayor jerarquía que la otra, sirve únicamente para diferenciarlas."
                        },
                        {
                            topic: "Niveles de medición",
                            q: "¿Qué nivel de medición incluye el cero como valor absoluto?",
                            options: [
                                "Nominal",
                                "Ordinal",
                                "Intervalo",
                                "Razón"
                            ],
                            answerIndex: 3,
                            explain: "El nivel de razón incluye el cero como un valor absoluto del punto donde no existe el valor que se necesita medir."
                        },
                        {
                            topic: "Cuestionarios",
                            q: "¿Qué tipo de preguntas no delimitan de antemano las alternativas de respuesta?",
                            options: [
                                "Preguntas cerradas",
                                "Preguntas abiertas",
                                "Preguntas dicotómicas",
                                "Preguntas de opción múltiple"
                            ],
                            answerIndex: 1,
                            explain: "Las preguntas abiertas no delimitan de antemano las alternativas de respuesta, el número de categorías es muy elevado."
                        },
                        {
                            topic: "Escalas Likert",
                            q: "¿Quién propuso las escalas Likert?",
                            options: [
                                "Hernández Sampieri",
                                "Rensis Likert",
                                "Karl Marx",
                                "Auguste Comte"
                            ],
                            answerIndex: 1,
                            explain: "Las escalas Likert fueron propuestas por Rensis Likert en 1932."
                        },
                        {
                            topic: "Escalas Likert",
                            q: "¿Cuántas categorías de respuesta tiene típicamente una escala Likert?",
                            options: [
                                "Tres",
                                "Cinco",
                                "Siete",
                                "Diez"
                            ],
                            answerIndex: 1,
                            explain: "La escala Likert típicamente presenta cinco categorías de respuesta, a las que se asigna un valor numérico."
                        },
                        {
                            topic: "Prueba piloto",
                            q: "¿Qué es una prueba piloto?",
                            options: [
                                "La aplicación definitiva del instrumento",
                                "Aplicar el instrumento a un grupo pequeño de la población",
                                "La tabulación de datos",
                                "El análisis de resultados"
                            ],
                            answerIndex: 1,
                            explain: "La prueba piloto consiste en aplicar la herramienta elegida a un grupo pequeño de la población donde se realizará el estudio."
                        },
                        {
                            topic: "Aplicación",
                            q: "¿En qué fase de la aplicación se debe realizar la presentación personal del encuestador?",
                            options: [
                                "Fase de desarrollo",
                                "Fase de inicio",
                                "Fase de registro",
                                "Fase de cierre"
                            ],
                            answerIndex: 1,
                            explain: "En la fase de inicio, el entrevistador debe realizar una presentación personal, cuidar su imagen y eliminar la posible tensión del participante."
                        },
                        {
                            topic: "Instrumentos",
                            q: "¿Qué elemento debe incluir la portada de un instrumento?",
                            options: [
                                "Análisis de resultados",
                                "Nombre del cuestionario y logotipo institucional",
                                "Conclusiones",
                                "Referencias"
                            ],
                            answerIndex: 1,
                            explain: "La portada debe incluir: nombre del cuestionario y logotipo de la institución que lo patrocina."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: INVESTIGACIÓN: RECOLECCIÓN, ANÁLISIS Y SOLUCIÓN ==========
        modulo3: {
            nombre: "Módulo 3: Investigación: recolección, análisis y solución",
            actividades: {
                // ACTIVIDAD 1: Procesamiento de información, tabulación
                act1: {
                    nombre: "Actividad 1: Procesamiento de información",
                    desc: "Procesamiento de datos, tabulación, tablas de frecuencia, programas estadísticos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Procesamiento",
                            q: "¿Qué es la tabulación en el procesamiento de datos?",
                            options: [
                                "Analizar estadísticamente",
                                "Expresar las cifras recolectadas por medio de una cuadrícula",
                                "Interpretar resultados",
                                "Redactar conclusiones"
                            ],
                            answerIndex: 1,
                            explain: "La tabulación implica la expresión de las cifras recolectadas por medio de una cuadrícula, denominada matriz de vaciado de datos."
                        },
                        {
                            topic: "Programas estadísticos",
                            q: "¿Qué significa la sigla SPSS?",
                            options: [
                                "Sistema de Procesamiento de Series Estadísticas",
                                "Statistical Package for the Social Sciences",
                                "Software para Procesos Sociales",
                                "Sistema de Probabilidad y Estadística"
                            ],
                            answerIndex: 1,
                            explain: "SPSS significa Statistical Package for the Social Sciences (Paquete Estadístico para las Ciencias Sociales)."
                        },
                        {
                            topic: "Tabulación",
                            q: "¿Qué contienen las tablas de vaciado de datos?",
                            options: [
                                "Solo los resultados finales",
                                "Las preguntas y respuestas codificadas",
                                "Únicamente las conclusiones",
                                "Las hipótesis"
                            ],
                            answerIndex: 1,
                            explain: "Las tablas de vaciado contienen las preguntas y las respuestas del instrumento debidamente codificadas."
                        },
                        {
                            topic: "Frecuencias",
                            q: "En el ejemplo de la investigación sobre elección de licenciatura, ¿qué porcentaje respondió que le gusta su carrera?",
                            options: [
                                "80%",
                                "90%",
                                "93%",
                                "100%"
                            ],
                            answerIndex: 2,
                            explain: "En el ejemplo, el 93% de los encuestados respondió que sí le gusta su carrera."
                        },
                        {
                            topic: "Frecuencias",
                            q: "En la tabla de frecuencias, ¿qué representa la columna de 'frecuencia'?",
                            options: [
                                "El porcentaje",
                                "El número de respuestas por categoría",
                                "El valor numérico asignado",
                                "La pregunta"
                            ],
                            answerIndex: 1,
                            explain: "La columna de frecuencia indica el número de respuestas obtenidas para cada categoría."
                        },
                        {
                            topic: "Procesamiento",
                            q: "¿Para qué sirve la codificación en la tabulación?",
                            options: [
                                "Para hacer más largas las respuestas",
                                "Para facilitar la tabulación asignando números o letras",
                                "Para eliminar respuestas",
                                "Para redactar conclusiones"
                            ],
                            answerIndex: 1,
                            explain: "La codificación consiste en asignar un número o letra a cada alternativa de respuesta para facilitar su tabulación."
                        },
                        {
                            topic: "Programas estadísticos",
                            q: "¿Qué programa es un sistema de análisis estadístico?",
                            options: [
                                "Word",
                                "Excel",
                                "SAS",
                                "PowerPoint"
                            ],
                            answerIndex: 2,
                            explain: "SAS (Sistema de análisis estadístico) es uno de los programas para analizar datos obtenidos en investigaciones."
                        },
                        {
                            topic: "Tabulación",
                            q: "¿Dónde se pueden incluir las tablas de resultados por ítem?",
                            options: [
                                "Solo en la portada",
                                "En el procesamiento de información o en anexos",
                                "Únicamente en el resumen",
                                "En las conclusiones"
                            ],
                            answerIndex: 1,
                            explain: "Las tablas de resultados por ítem pueden incluirse en el apartado de procesamiento de información o en los anexos del trabajo."
                        },
                        {
                            topic: "Ejemplo",
                            q: "En el ejemplo de la investigación, ¿cuántos aprendientes fueron encuestados?",
                            options: [
                                "10",
                                "15",
                                "20",
                                "25"
                            ],
                            answerIndex: 1,
                            explain: "Se realizó una encuesta a 15 aprendientes de la Licenciatura en Psicopedagogía."
                        },
                        {
                            topic: "Frecuencias",
                            q: "En la pregunta sobre si la carrera corresponde a primera, segunda o última opción, ¿qué porcentaje respondió 'última'?",
                            options: [
                                "6%",
                                "7%",
                                "16%",
                                "47%"
                            ],
                            answerIndex: 2,
                            explain: "El 6% de los encuestados (1 persona) respondió que la carrera fue su última opción."
                        }
                    ]
                },
                // ACTIVIDAD 2: Análisis de resultados, gráficas, conclusiones
                act2: {
                    nombre: "Actividad 2: Análisis de resultados",
                    desc: "Análisis de resultados, factores del análisis, recomendaciones, gráficas, conclusiones y sugerencias",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Análisis de resultados",
                            q: "¿De qué depende el análisis de datos según Hernández?",
                            options: [
                                "Solo del tamaño de la muestra",
                                "Nivel de medición, hipótesis e interés del investigador",
                                "Únicamente del enfoque",
                                "Del presupuesto"
                            ],
                            answerIndex: 1,
                            explain: "El análisis de datos depende del nivel de medición de las variables, la manera como se hayan formulado las hipótesis y el interés del investigador."
                        },
                        {
                            topic: "Enfoques",
                            q: "¿En qué enfoque se seleccionan pruebas estadísticas apropiadas?",
                            options: [
                                "Cualitativo",
                                "Cuantitativo",
                                "Mixto",
                                "Documental"
                            ],
                            answerIndex: 1,
                            explain: "En el enfoque cuantitativo se seleccionan las pruebas estadísticas apropiadas para analizar la información."
                        },
                        {
                            topic: "Interpretación",
                            q: "¿Qué paso es parte de la interpretación de resultados?",
                            options: [
                                "Aplicar el instrumento",
                                "Comparar resultados con otros estudios similares",
                                "Diseñar la muestra",
                                "Redactar la introducción"
                            ],
                            answerIndex: 1,
                            explain: "Un paso de la interpretación es comparar los resultados actuales con aquellos obtenidos por otros investigadores en estudios similares."
                        },
                        {
                            topic: "Presentación",
                            q: "¿Qué tipo de gráfica se utiliza para representar datos en forma circular?",
                            options: [
                                "Gráfica de barras",
                                "Gráfica de pastel",
                                "Gráfica de líneas",
                                "Histograma"
                            ],
                            answerIndex: 1,
                            explain: "La gráfica de pastel (o circular) se utiliza para representar datos en forma de círculo dividido en segmentos."
                        },
                        {
                            topic: "Resultados",
                            q: "¿Qué paso propone Hernández para preparar los resultados?",
                            options: [
                                "Aplicar instrumentos",
                                "Revisar cada resultado",
                                "Seleccionar el tema",
                                "Definir la muestra"
                            ],
                            answerIndex: 1,
                            explain: "El primer paso para preparar los resultados es revisar cada resultado: análisis general, específico, valores resultantes, tablas y gráficas."
                        },
                        {
                            topic: "Conclusiones",
                            q: "¿Qué características debe tener la redacción de conclusiones?",
                            options: [
                                "Extensa y detallada",
                                "Precisión, brevedad y claridad",
                                "Técnica y compleja",
                                "Subjetiva y personal"
                            ],
                            answerIndex: 1,
                            explain: "Al escribir la conclusión se debe cuidar la precisión, la brevedad, la claridad, así como la ortografía y redacción."
                        },
                        {
                            topic: "Interpretación",
                            q: "¿En qué se debe contextualizar los hallazgos para comprenderlos mejor?",
                            options: [
                                "En la opinión personal",
                                "En un marco teórico de referencia",
                                "En la muestra",
                                "En el cronograma"
                            ],
                            answerIndex: 1,
                            explain: "Se deben contextualizar los hallazgos en un marco teórico de referencia que explique las conductas, opiniones y actitudes observadas."
                        },
                        {
                            topic: "Gráficas",
                            q: "En el ejemplo de la pregunta 1, ¿qué porcentaje representa la respuesta 'NO'?",
                            options: [
                                "7%",
                                "10%",
                                "15%",
                                "20%"
                            ],
                            answerIndex: 1,
                            explain: "En el ejemplo, el 10% de los entrevistados respondió que no le gusta su carrera."
                        },
                        {
                            topic: "Sugerencias",
                            q: "¿Qué deben incluir las sugerencias en una investigación?",
                            options: [
                                "Los resultados obtenidos",
                                "Recomendaciones para nuevos estudios",
                                "La portada",
                                "El índice"
                            ],
                            answerIndex: 1,
                            explain: "Se deben presentar recomendaciones para nuevos estudios, sugerir nuevas interrogantes, muestras e instrumentos."
                        },
                        {
                            topic: "Análisis",
                            q: "¿Qué se debe hacer después de organizar los resultados descriptivos e inferenciales?",
                            options: [
                                "Aplicar instrumentos",
                                "Cotejar con diferentes resultados",
                                "Definir la muestra",
                                "Seleccionar el tema"
                            ],
                            answerIndex: 1,
                            explain: "Después de organizar los resultados, se deben cotejar con diferentes resultados para verificar su congruencia."
                        }
                    ]
                },
                // ACTIVIDAD 3: Reporte final, estructura, normas institucionales
                act3: {
                    nombre: "Actividad 3: Reporte de investigación",
                    desc: "Presentación del reporte final, elementos del reporte, resumen, método, normas institucionales",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Reporte de investigación",
                            q: "¿Qué debe incluir el reporte final de investigación?",
                            options: [
                                "Solo los resultados",
                                "Descripción del proceso y resultados obtenidos",
                                "Únicamente la introducción",
                                "Solamente las conclusiones"
                            ],
                            answerIndex: 1,
                            explain: "El reporte final debe incluir una descripción del proceso que se llevó a cabo, así como los resultados obtenidos."
                        },
                        {
                            topic: "Resumen",
                            q: "¿Cuántas palabras recomienda APA para el resumen?",
                            options: [
                                "Máximo 100 palabras",
                                "Máximo 150 palabras",
                                "Máximo 200 palabras",
                                "Máximo 250 palabras"
                            ],
                            answerIndex: 1,
                            explain: "De acuerdo con las normas APA, no se recomienda que el resumen exceda las 150 palabras."
                        },
                        {
                            topic: "Resumen",
                            q: "¿Qué característica debe tener el resumen?",
                            options: [
                                "Extenso",
                                "Comprensible, sencillo, informativo, preciso, conciso, específico",
                                "Complejo",
                                "Detallado"
                            ],
                            answerIndex: 1,
                            explain: "El resumen debe ser comprensible, sencillo, informativo, preciso, conciso y específico."
                        },
                        {
                            topic: "Método",
                            q: "¿Qué elemento NO pertenece al apartado de método?",
                            options: [
                                "Enfoque",
                                "Contexto",
                                "Resultados",
                                "Muestra"
                            ],
                            answerIndex: 2,
                            explain: "El apartado de método incluye enfoque, contexto, diseño, instrumento, muestra y procedimiento. Los resultados son un apartado separado."
                        },
                        {
                            topic: "Portada",
                            q: "¿Qué datos debe incluir la portada del reporte?",
                            options: [
                                "Solo el título",
                                "Título, autores, afiliación institucional",
                                "Únicamente el resumen",
                                "Solamente las conclusiones"
                            ],
                            answerIndex: 1,
                            explain: "La portada incluye: título del trabajo, nombre de los autores y datos de la afiliación institucional."
                        },
                        {
                            topic: "Referencias",
                            q: "¿Cómo se ordenan las referencias en el reporte?",
                            options: [
                                "Por orden de aparición",
                                "Alfabéticamente",
                                "Por tamaño",
                                "Aleatoriamente"
                            ],
                            answerIndex: 1,
                            explain: "Las referencias se registran en orden alfabético, en el formato de acuerdo al campo académico."
                        },
                        {
                            topic: "Apéndices",
                            q: "¿Qué se incluye en los apéndices?",
                            options: [
                                "Las conclusiones",
                                "Información detallada de instrumentos o material experimental",
                                "El resumen",
                                "La introducción"
                            ],
                            answerIndex: 1,
                            explain: "Los apéndices incluyen información más detallada de los instrumentos utilizados o del material experimental."
                        },
                        {
                            topic: "Contextos no académicos",
                            q: "¿Qué requisito debe cumplir un reporte no académico?",
                            options: [
                                "Ser extenso",
                                "Ser breve y de fácil comprensión",
                                "Incluir muchas citas",
                                "Tener lenguaje técnico"
                            ],
                            answerIndex: 1,
                            explain: "Los reportes no académicos deben ser breves, de fácil comprensión y con orientación visual del contenido."
                        },
                        {
                            topic: "Artículos periodísticos",
                            q: "¿Qué característica deben tener los artículos periodísticos sobre investigación?",
                            options: [
                                "Complejidad técnica",
                                "Brevedad y claridad",
                                "Extensión detallada",
                                "Lenguaje especializado"
                            ],
                            answerIndex: 1,
                            explain: "Los artículos periodísticos deben cumplir con estándares de brevedad, claridad y aplicabilidad a situaciones cotidianas."
                        },
                        {
                            topic: "Discusión",
                            q: "¿Qué se comenta en el apartado de discusión?",
                            options: [
                                "La metodología",
                                "Los principales resultados, aciertos y limitaciones",
                                "La muestra",
                                "Los instrumentos"
                            ],
                            answerIndex: 1,
                            explain: "En la discusión se comentan los principales resultados obtenidos, los aciertos y limitaciones de la investigación."
                        }
                    ]
                }
            }
        }
    }
};

export default laboratorioInvestigacion1;