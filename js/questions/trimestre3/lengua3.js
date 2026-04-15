// ============================================
// LENGUA Y COMUNICACIÓN III - TERCER TRIMESTRE
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const lenguaComunicacionIII = {
    id: "lenguaComunicacionIII",
    nombre: "LENGUA Y COMUNICACIÓN III",
    icono: "✍️",
    descripcion: "Exploración del ensayo como género literario, su estructura, tipos, y proceso de elaboración, así como la exposición oral y el debate.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: El ensayo una inmersión profunda",
            actividades: {
                act1: {
                    nombre: "Actividad 1: La trascendencia del ensayo",
                    desc: "Definición, características y relevancia del ensayo como género literario y de reflexión.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Definición de ensayo",
                            q: "¿Quién es considerado el principal representante del ensayo?",
                            options: ["Francis Bacon", "Michel de Montaigne", "René Descartes", "John Locke"],
                            answerIndex: 1,
                            explain: "Michel de Montaigne (1533-1592), filósofo, escritor y humanista francés, es considerado el principal representante del ensayo."
                        },
                        {
                            topic: "Características del ensayo",
                            q: "Según Oliveros (2019), ¿cuál es una característica del ensayo?",
                            options: ["Libertad temática", "Obligación de agotar el tema", "Lenguaje estrictamente científico", "Extensión fija"],
                            answerIndex: 0,
                            explain: "La libertad temática es una característica del ensayo, que permite abordar una o más temáticas sobre cualquier problema."
                        },
                        {
                            topic: "Ensayo",
                            q: "Según López (2014), el ensayo es un texto del género:",
                            options: ["Narrativo", "Lírico", "Argumentativo", "Descriptivo"],
                            answerIndex: 2,
                            explain: "López define el ensayo como una clase de texto del género argumentativo, donde se expone y defiende un punto de vista."
                        },
                        {
                            topic: "Propósito del ensayo",
                            q: "Según Arenas Cruz (1997), ¿qué busca el ensayista?",
                            options: ["Agotar todas las posibilidades del tema", "Aportar una idea de cómo propone que percibamos su postura", "Demostrar verdades absolutas", "Escribir una novela"],
                            answerIndex: 1,
                            explain: "El ensayista no intenta agotar el tema, sino aportar una idea de cómo propone que percibamos su postura."
                        },
                        {
                            topic: "Características del ensayo",
                            q: "¿Qué implica la 'integración de ciencia y literatura' en el ensayo?",
                            options: ["Usar solo datos científicos", "Usar solo recursos literarios", "Tratamiento científico de la información con estilo artístico", "Excluir cualquier recurso literario"],
                            answerIndex: 2,
                            explain: "La integración de ciencia y literatura se expresa en el tratamiento científico de la información y en el estilo artístico del autor."
                        },
                        {
                            topic: "Tono polémico",
                            q: "¿Cuál es la función del tono polémico en el ensayo?",
                            options: ["Aburrir al lector", "Inquietar al lector e invitarlo a adentrarse en la lectura", "Mostrar objetividad total", "Evitar controversias"],
                            answerIndex: 1,
                            explain: "El tono polémico inquieta al lector y lo invita a adentrarse en la lectura, relacionándose con la toma de posturas controvertidas."
                        },
                        {
                            topic: "Ensayo",
                            q: "Según el contenido, el ensayo es otra modalidad de:",
                            options: ["Investigación", "Poesía", "Teatro", "Novela"],
                            answerIndex: 0,
                            explain: "El ensayo es otra modalidad de investigación, que puede ser argumentativo, interpretativo, descriptivo y crítico."
                        },
                        {
                            topic: "Originalidad en el ensayo",
                            q: "¿En qué radica la originalidad del ensayo?",
                            options: ["Solo en el tema", "Solo en la forma", "En lo innovador y singular de los temas y en la forma novedosa de tratarlos", "En la extensión del texto"],
                            answerIndex: 2,
                            explain: "La originalidad radica tanto en lo innovador y singular de los temas, como en la forma novedosa de tratarlos."
                        },
                        {
                            topic: "Profundidad del ensayo",
                            q: "¿Qué señala la característica de 'profundidad' en el ensayo?",
                            options: ["La brevedad del texto", "El carácter exhaustivo del análisis y alcance de reflexiones", "La falta de argumentos", "La superficialidad del tema"],
                            answerIndex: 1,
                            explain: "La profundidad señala el carácter exhaustivo del análisis y al alcance de las reflexiones y argumentos mostrados."
                        },
                        {
                            topic: "Función del ensayo",
                            q: "¿Qué fomenta el ensayo según el contenido?",
                            options: ["La repetición de ideas", "La reflexión desde una perspectiva innovadora y creativa", "El dogmatismo", "La memorización"],
                            answerIndex: 1,
                            explain: "El ensayo fomenta la reflexión desde una perspectiva innovadora y creativa."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Tipos de ensayo",
                    desc: "Identificación de los diferentes tipos de ensayo y sus características.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Tipos de ensayo",
                            q: "¿Cuál es la diferencia entre ensayo científico y ensayo literario según Monroy (2013)?",
                            options: ["Uno es más largo que el otro", "El científico se orienta al pensamiento conceptual y la objetividad; el literario al pensamiento metafórico y la subjetividad", "El científico usa verso; el literario usa prosa", "No hay diferencia"],
                            answerIndex: 1,
                            explain: "El ensayo científico se orienta al pensamiento conceptual, objetividad y formalidad; el literario al pensamiento metafórico, subjetividad e informalidad."
                        },
                        {
                            topic: "Ensayo analítico",
                            q: "¿Qué explora el ensayo de tipo analítico?",
                            options: ["La defensa de una postura", "La discusión sobre un tema específico abordando preguntas sin respuesta", "La narración de una historia", "La descripción de un paisaje"],
                            answerIndex: 1,
                            explain: "El ensayo analítico explora la discusión sobre un tema específico, abordando las preguntas que aún están sin respuesta."
                        },
                        {
                            topic: "Ensayo argumentativo",
                            q: "¿Qué implica el ensayo argumentativo?",
                            options: ["Solo describir un tema", "La toma de postura y defensa de argumentos", "Narrar una anécdota", "Explicar un concepto sin opinar"],
                            answerIndex: 1,
                            explain: "El ensayo argumentativo implica la toma de postura y la defensa de argumentos en torno a un tema específico."
                        },
                        {
                            topic: "Origen del ensayo",
                            q: "¿En qué siglo se formaliza el género ensayístico con Michel de Montaigne?",
                            options: ["Siglo XV", "Siglo XVI", "Siglo XVII", "Siglo XVIII"],
                            answerIndex: 1,
                            explain: "El origen formal del ensayo como género se da en el siglo XVI con Michel de Montaigne, quien publicó sus ensayos en 1580."
                        },
                        {
                            topic: "Precursores del ensayo",
                            q: "¿Quiénes son los dos precursores del ensayo en las letras francesas e inglesas respectivamente?",
                            options: ["Montaigne y Bacon", "Descartes y Locke", "Voltaire y Rousseau", "Séneca y Horacio"],
                            answerIndex: 0,
                            explain: "Montaigne en las letras francesas y Francis Bacon en las inglesas son los dos precursores del género ensayístico."
                        },
                        {
                            topic: "Ensayo en América Latina",
                            q: "¿Qué documentos se consideran los primeros ejemplos del ensayo en América Latina?",
                            options: ["Poemas indígenas", "Cartas de relación y crónicas de conquistadores y misioneros", "Novelas de la independencia", "Discursos políticos del siglo XX"],
                            answerIndex: 1,
                            explain: "Las cartas de relación y las crónicas que escribieron los conquistadores, monjes y misioneros son considerados los primeros ejemplos del ensayo en América Latina."
                        },
                        {
                            topic: "Estructura del ensayo",
                            q: "¿Cuáles son las tres partes fundamentales de un ensayo?",
                            options: ["Inicio, desarrollo, cierre", "Introducción, cuerpo, conclusión", "Planteamiento, nudo, desenlace", "Tesis, antítesis, síntesis"],
                            answerIndex: 1,
                            explain: "Las tres partes fundamentales del ensayo son: introducción (capta el interés y presenta la temática), cuerpo (argumentos) y conclusión (cierre)."
                        },
                        {
                            topic: "Ensayo científico",
                            q: "¿Con qué otro nombre se conoce al ensayo científico?",
                            options: ["Género literario-puro", "Género literario-científico", "Género científico-técnico", "Género académico"],
                            answerIndex: 1,
                            explain: "El ensayo científico es conocido también como género 'literario-científico', pues involucra la lógica de la naturaleza con la capacidad imaginativa del autor."
                        },
                        {
                            topic: "Ensayo literario",
                            q: "¿Qué trasciende el ensayo literario según Ochoa et al. (2007)?",
                            options: ["La lógica", "La estética y las normas", "La ciencia", "La historia"],
                            answerIndex: 1,
                            explain: "El ensayo literario trasciende la estética y las normas, plasmando de manera libre y subjetiva las reflexiones del autor sobre la vida."
                        },
                        {
                            topic: "Metodología del ensayo",
                            q: "¿Cuál es la metodología sugerida para desarrollar un ensayo?",
                            options: ["Selección de tema, búsqueda de fuentes, estructuración, borrador y redacción final", "Escribir directamente sin planear", "Solo leer un libro", "Copiar información de internet"],
                            answerIndex: 0,
                            explain: "La metodología sugerida es: selección de tema, búsqueda de fuentes de información, estructura del tema, elaboración de borrador y redacción final."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Selección y delimitación del tema",
                    desc: "Procesos de selección, delimitación temática, planteamiento del problema y construcción del marco teórico.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Fuentes de ideas",
                            q: "Según Monje (2011), ¿de dónde pueden surgir las ideas para una investigación?",
                            options: ["Solo de libros", "De la experiencia, material impreso, audiovisual, teorías, observaciones, conversaciones, creencias", "Exclusivamente de experimentos", "Únicamente de la intuición"],
                            answerIndex: 1,
                            explain: "Las ideas surgen de diversas fuentes: experiencia, material impreso, audiovisual, teorías, observaciones, conversaciones, creencias e intuiciones."
                        },
                        {
                            topic: "Delimitación del tema",
                            q: "Según Tamayo (2003), ¿en relación con qué aspectos se debe delimitar un tema?",
                            options: ["Solo el tiempo", "Solo el espacio", "Tiempo, espacio y estructura temática", "Solo la metodología"],
                            answerIndex: 2,
                            explain: "La delimitación del tema se hace en relación con el tiempo (cuándo), el espacio (dónde) y la estructura temática (enfoque)."
                        },
                        {
                            topic: "Planteamiento del problema",
                            q: "Según Balestrini (2006), ¿cuál es la forma más directa para determinar un problema de investigación?",
                            options: ["Leer muchos libros", "Formular preguntas precisas", "Hacer experimentos", "Entrevistar expertos"],
                            answerIndex: 1,
                            explain: "La forma más directa para determinar un problema de investigación es a través de la formulación de preguntas lo suficientemente precisas."
                        },
                        {
                            topic: "Estado de la cuestión",
                            q: "¿Qué es el 'estado de la cuestión' en una investigación?",
                            options: ["La conclusión del estudio", "La búsqueda y análisis de la bibliografía existente sobre un tema", "La hipótesis", "El resumen ejecutivo"],
                            answerIndex: 1,
                            explain: "El estado de la cuestión está dirigido a determinar y evaluar las distintas líneas de investigación existentes sobre un tema."
                        },
                        {
                            topic: "Variables",
                            q: "¿Qué debe expresar el planteamiento del problema según Hernández et al. (2014)?",
                            options: ["Una opinión personal", "Una relación entre dos o más conceptos o variables", "Un deseo del investigador", "Una crítica social"],
                            answerIndex: 1,
                            explain: "El planteamiento del problema debe expresar una relación entre dos o más conceptos o variables que permitan su medición."
                        },
                        {
                            topic: "Fuentes de información",
                            q: "¿Qué son las fuentes primarias de información?",
                            options: ["Las que citan a otras fuentes", "Las que presentan información resultante de un trabajo original", "Los diccionarios", "Las enciclopedias"],
                            answerIndex: 1,
                            explain: "Las fuentes primarias presentan la información resultante de un trabajo original, como libros, informes técnicos, tesis, periódicos, etc."
                        },
                        {
                            topic: "Marco teórico",
                            q: "Según Hernández et al. (2010), ¿cuál es un método para construir el marco teórico?",
                            options: ["Mapeo", "Lluvia de ideas", "Observación directa", "Experimento controlado"],
                            answerIndex: 0,
                            explain: "Uno de los métodos para construir el marco teórico es el de mapeo, que consiste en ordenar la información según criterios lógicos como orden cronológico o subtemas."
                        },
                        {
                            topic: "Pregunta de investigación",
                            q: "¿Qué debe hacer el investigador después de identificar los conceptos a investigar?",
                            options: ["Redactar la pregunta de investigación", "Concluir el estudio", "Publicar los resultados", "Desechar la idea"],
                            answerIndex: 0,
                            explain: "Una vez identificados los conceptos, se redacta la pregunta de investigación, que debe delimitarse a un espacio físico y población específica."
                        },
                        {
                            topic: "Motivación en investigación",
                            q: "¿Por qué es importante la motivación en la selección del tema de investigación?",
                            options: ["No es importante", "Porque la investigación es un proyecto a largo plazo que implica recursos y esfuerzo", "Solo para cumplir con requisitos", "Para impresionar a otros"],
                            answerIndex: 1,
                            explain: "La motivación es importante porque una investigación es un proyecto a largo plazo que implica recursos, esfuerzo y muchas horas de trabajo."
                        },
                        {
                            topic: "Criterios del planteamiento",
                            q: "¿Qué criterio debe cumplir el planteamiento del problema según Hernández et al. (2014)?",
                            options: ["Ser subjetivo", "Formularse como pregunta con claridad", "Ser imposible de probar", "Evitar la observación empírica"],
                            answerIndex: 1,
                            explain: "El planteamiento debe formularse como pregunta, con claridad y sin ambigüedades, por ejemplo: ¿Qué efecto?, ¿En qué condiciones?, etc."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: El ensayo frente a otros textos",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Reseña crítica y focalización narrativa",
                    desc: "Distinción entre el ensayo, la reseña crítica y los tipos de focalización narrativa.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Reseña crítica",
                            q: "¿Cuáles son los componentes esenciales de una reseña crítica?",
                            options: ["Introducción y conclusión", "Síntesis y evaluación crítica", "Título y subtítulo", "Índice y bibliografía"],
                            answerIndex: 1,
                            explain: "Los componentes esenciales de la reseña crítica son la síntesis (identificación de aspectos generales) y la evaluación crítica (exposición argumentada de un juicio)."
                        },
                        {
                            topic: "Focalización narrativa",
                            q: "Según Gerard Genette, ¿cuáles son los tres tipos de focalización?",
                            options: ["Primera, segunda y tercera persona", "Cero, interna y externa", "Pasado, presente y futuro", "Protagonista, testigo y omnisciente"],
                            answerIndex: 1,
                            explain: "Genette distingue tres tipos de focalización: cero (narrador omnisciente que sabe más que el personaje), interna (sabe lo mismo que el personaje) y externa (sabe menos que el personaje)."
                        },
                        {
                            topic: "Reseña crítica",
                            q: "¿Qué elementos se agregan a las reseñas críticas enfocadas en el arte, como las cinematográficas?",
                            options: ["Datos históricos", "Elemento publicitario", "Resumen biográfico del autor", "Análisis matemático"],
                            answerIndex: 1,
                            explain: "En las reseñas críticas de arte se agrega el elemento publicitario, ya que se difunden en revistas, periódicos o medios especializados en cultura."
                        },
                        {
                            topic: "Focalización cero",
                            q: "¿Qué caracteriza a la focalización cero?",
                            options: ["El narrador sabe más que el personaje", "El narrador sabe lo mismo que el personaje", "El narrador sabe menos que el personaje", "No hay narrador"],
                            answerIndex: 0,
                            explain: "En la focalización cero, el narrador es omnisciente y sabe más que el personaje, conoce todo sobre los acontecimientos."
                        },
                        {
                            topic: "Focalización interna",
                            q: "¿Qué caracteriza a la focalización interna?",
                            options: ["El narrador sabe más que el personaje", "El narrador sabe lo mismo que el personaje", "El narrador sabe menos que el personaje", "La historia se cuenta en segunda persona"],
                            answerIndex: 1,
                            explain: "En la focalización interna, el narrador sabe lo mismo que el personaje y la historia se cuenta a través de su perspectiva."
                        },
                        {
                            topic: "Focalización externa",
                            q: "¿Qué caracteriza a la focalización externa?",
                            options: ["El narrador sabe más que el personaje", "El narrador sabe lo mismo que el personaje", "El narrador sabe menos que el personaje", "No hay personajes"],
                            answerIndex: 2,
                            explain: "En la focalización externa, el narrador sabe menos que el personaje y solo puede describir lo que ve u oye sin acceder a pensamientos."
                        },
                        {
                            topic: "Reseña crítica",
                            q: "Según Ferrari y Vázquez (2005), ¿qué implica la elaboración de una reseña crítica?",
                            options: ["Haber comprendido plenamente el texto para emitir juicios fundamentados", "Solo leer el título", "Copiar la contraportada", "Escribir sin leer la obra"],
                            answerIndex: 0,
                            explain: "La elaboración de una reseña crítica implica haber comprendido plenamente el texto para emitir juicios de valor fundamentados y adecuarlos al público."
                        },
                        {
                            topic: "Focalización",
                            q: "¿Qué es la focalización narrativa?",
                            options: ["El lugar donde ocurre la historia", "El modo en el que se relatan los acontecimientos de una historia", "El tiempo en que transcurre la historia", "El número de personajes"],
                            answerIndex: 1,
                            explain: "La focalización es 'el modo en el que se relatan los acontecimientos de una historia', según Ríos (1994)."
                        },
                        {
                            topic: "Reseña crítica",
                            q: "¿Con qué finalidad se escribe una reseña crítica?",
                            options: ["Para resumir un libro", "Para invitar al público a consultar una obra o brindar un adelanto", "Para vender más ejemplares", "Para criticar al autor"],
                            answerIndex: 1,
                            explain: "La reseña crítica plasma impresiones sobre una obra con la finalidad de invitar al público a consultarla o brindar un adelanto de lo que encontrará."
                        },
                        {
                            topic: "Genette",
                            q: "¿Quién realizó las distinciones sobre los tipos de focalización retomadas por Vitoux?",
                            options: ["Roland Barthes", "Gerard Genette", "Mijaíl Bajtín", "Vladimir Propp"],
                            answerIndex: 1,
                            explain: "Vitoux retoma las distinciones realizadas por Gerard Genette sobre los tipos de focalización narrativa."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: El narrador",
                    desc: "Identificación de los tipos de narrador según su participación y nivel de conocimiento.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Narrador intradiegético",
                            q: "¿Qué significa que un narrador sea intradiegético?",
                            options: ["Que está fuera de la historia", "Que pertenece o participa de la historia que cuenta", "Que narra en segunda persona", "Que usa solo el presente"],
                            answerIndex: 1,
                            explain: "Un narrador intradiegético pertenece o participa de la historia que cuenta, es decir, es un personaje de la historia."
                        },
                        {
                            topic: "Narrador extradiegético",
                            q: "¿Qué significa que un narrador sea extradiegético?",
                            options: ["Que participa de la historia", "Que está fuera de la historia y no participa de los sucesos que narra", "Que narra en primera persona", "Que es el protagonista"],
                            answerIndex: 1,
                            explain: "Un narrador extradiegético está fuera de la historia, no participa de los sucesos que narra."
                        },
                        {
                            topic: "Narrador protagonista",
                            q: "¿Cómo narra el narrador protagonista?",
                            options: ["En tercera persona sus propias aventuras", "En primera persona sus propias aventuras", "En segunda persona", "Solo describe lo que ve"],
                            answerIndex: 1,
                            explain: "El narrador protagonista es narrador en primera persona de sus propias aventuras, narra lo que a él o ella le acontece."
                        },
                        {
                            topic: "Narrador testigo",
                            q: "¿Qué caracteriza al narrador testigo?",
                            options: ["Es el protagonista", "Narra en primera persona pero no es el protagonista, es un personaje secundario", "Es omnisciente", "No participa de la historia"],
                            answerIndex: 1,
                            explain: "El narrador testigo narra en primera persona pero no es el protagonista, es un personaje secundario que narra lo que le acontece a alguien más."
                        },
                        {
                            topic: "Narrador omnisciente",
                            q: "¿Qué caracteriza al narrador omnisciente?",
                            options: ["Usa la primera persona", "Usa la tercera persona y conoce todo sobre los acontecimientos", "Solo conoce lo que ve", "Narra en segunda persona"],
                            answerIndex: 1,
                            explain: "El narrador omnisciente usa la tercera persona y conoce todo sobre los acontecimientos: pasado, futuro, pensamientos y sentimientos de los personajes."
                        },
                        {
                            topic: "Narrador equisciente",
                            q: "¿Cuánto sabe el narrador equisciente?",
                            options: ["Sabe más que los personajes", "Sabe lo mismo o menos que los personajes", "Sabe todo", "No sabe nada"],
                            answerIndex: 1,
                            explain: "El narrador equisciente sabe lo mismo o menos que los personajes de la historia, solo conoce lo que conoce el protagonista."
                        },
                        {
                            topic: "Narrador deficiente",
                            q: "¿Cuánto sabe el narrador deficiente?",
                            options: ["Sabe más que el protagonista", "Sabe menos que el protagonista", "Sabe todo", "Sabe lo mismo que el protagonista"],
                            answerIndex: 1,
                            explain: "El narrador deficiente conoce menos que el protagonista acerca de la historia que cuenta, es solo un testigo de los acontecimientos."
                        },
                        {
                            topic: "Narrador y autor",
                            q: "Según Barthes (2002), ¿qué relación existe entre el autor y el narrador?",
                            options: ["Son la misma persona", "No pueden confundirse para nada", "El autor es siempre el narrador", "El narrador es el autor disfrazado"],
                            answerIndex: 1,
                            explain: "Barthes señala que 'no puede confundirse para nada' al autor de un relato con el narrador."
                        },
                        {
                            topic: "Identificación del narrador",
                            q: "¿Qué pronombre personal indica la presencia del narrador?",
                            options: ["Yo, tú, él, ella, ellos", "Nosotros", "Vosotros", "Ellas"],
                            answerIndex: 0,
                            explain: "Una de las formas de definir el tipo de narrador es identificando el pronombre personal que indica su presencia: yo, tú, él, ella, ellos."
                        },
                        {
                            topic: "Historia y discurso",
                            q: "¿Cuál es la diferencia entre historia y discurso?",
                            options: ["Historia es lo que se cuenta; discurso es cómo se cuenta", "Historia es cómo se cuenta; discurso es qué se cuenta", "Son sinónimos", "Historia es el final; discurso es el principio"],
                            answerIndex: 0,
                            explain: "La historia responde a ¿qué se cuenta? (sucesión ordenada de acontecimientos); el discurso responde a ¿cómo se cuenta? (el orden elegido por el autor)."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Marco espaciotemporal, tiempo y ambiente",
                    desc: "Identificación del ámbito, tiempo narrativo y ambiente en la argumentación crítica.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Marco espaciotemporal",
                            q: "¿Qué es el marco espaciotemporal en una narración?",
                            options: ["El número de personajes", "El espacio y tiempo en los que se desarrollan los acontecimientos", "El género literario", "El narrador"],
                            answerIndex: 1,
                            explain: "El marco espaciotemporal se refiere al espacio (lugar) y al tiempo (periodo de duración) en los que se desarrollan los acontecimientos de la historia."
                        },
                        {
                            topic: "Anacronías",
                            q: "¿Qué son las anacronías en una narración?",
                            options: ["Errores de tiempo", "Recursos que rompen con el orden cronológico de la historia", "Personajes secundarios", "Descripciones de espacios"],
                            answerIndex: 1,
                            explain: "Las anacronías son recursos que rompen con el orden cronológico de la historia, como la prolepsis y la analepsis."
                        },
                        {
                            topic: "Analepsis",
                            q: "¿Qué es la analepsis?",
                            options: ["Un salto hacia el futuro", "Un recuerdo o evocación de un hecho pasado", "Una descripción del espacio", "Un diálogo entre personajes"],
                            answerIndex: 1,
                            explain: "La analepsis se da cuando el personaje o narrador recuerda y revive un hecho pasado al contarlo (flashback)."
                        },
                        {
                            topic: "Prolepsis",
                            q: "¿Qué es la prolepsis?",
                            options: ["Un recuerdo del pasado", "Una evocación de un hecho futuro aún no acontecido", "Una descripción detallada", "Un cambio de narrador"],
                            answerIndex: 1,
                            explain: "La prolepsis evoca un hecho que aún no acontece en la historia, un suceso futuro (flashforward)."
                        },
                        {
                            topic: "In media res",
                            q: "¿Qué significa que un relato comience 'in media res'?",
                            options: ["Por el principio", "Por el final", "En la mitad de las cosas", "Por el diálogo"],
                            answerIndex: 2,
                            explain: "'In media res' significa 'en la mitad de las cosas', cuando el relato inicia en el medio de la historia cronológica."
                        },
                        {
                            topic: "Ambiente narrativo",
                            q: "¿En qué se apoya el ambiente de una novela?",
                            options: ["En los diálogos", "En la descripción", "En la acción", "En el narrador"],
                            answerIndex: 1,
                            explain: "El ambiente se apoya en la descripción, pues por medio de ella se puntualizan detalles de personajes, objetos y espacios."
                        },
                        {
                            topic: "Descripción objetiva",
                            q: "¿Qué caracteriza a una descripción objetiva?",
                            options: ["Expresa sentimientos", "Solo informa, predomina la función referencial con lenguaje denotativo", "Usa muchos adjetivos", "Es subjetiva"],
                            answerIndex: 1,
                            explain: "La descripción objetiva solo informa, predomina la función referencial y se utiliza un lenguaje denotativo."
                        },
                        {
                            topic: "Descripción subjetiva",
                            q: "¿Qué caracteriza a una descripción subjetiva?",
                            options: ["Solo informa datos", "El personaje o narrador expresa sentimientos y emociones usando lenguaje con adjetivos", "Es breve", "No usa recursos literarios"],
                            answerIndex: 1,
                            explain: "La descripción subjetiva expresa sentimientos y emociones, utiliza lenguaje con más adjetivos y recursos literarios."
                        },
                        {
                            topic: "Estructura interna de la novela",
                            q: "¿Cuáles son las tres partes de la estructura interna de la novela?",
                            options: ["Principio, medio y fin", "Introducción, desarrollo y desenlace", "Inicio, nudo y desenlace", "Todas las anteriores son correctas"],
                            answerIndex: 3,
                            explain: "Las tres partes son: introducción o inicio, desarrollo/nudo/clímax, y desenlace o desenredo final."
                        },
                        {
                            topic: "Tiempo narrativo",
                            q: "¿Cómo se indica el tiempo en una narración?",
                            options: ["Solo con fechas", "Con palabras como hoy, ayer, mañana, conjugaciones verbales y descripciones ambientales", "Solo con el clima", "Con el número de páginas"],
                            answerIndex: 1,
                            explain: "El tiempo se distingue con palabras como hoy, ayer, mañana, conjugaciones verbales, y también indica un tiempo ambiental."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Proyecto transversal: mi realidad a través de un ensayo",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Planeación y estructuración del ensayo",
                    desc: "Desarrollo de las etapas de selección del tema, consulta de fuentes y reconsideración del problema.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Planeación del ensayo",
                            q: "Según Medina Haro y Salman Rocha (2019), ¿cuántos puntos clave contempla la hoja de planeación del ensayo?",
                            options: ["Siete", "Ocho", "Nueve", "Diez"],
                            answerIndex: 2,
                            explain: "La hoja de planeación del ensayo contempla nueve puntos esenciales, desde la selección del tema hasta la conclusión."
                        },
                        {
                            topic: "Hipótesis en el ensayo",
                            q: "¿Cómo debe ser la hipótesis en la planeación del ensayo?",
                            options: ["Superficial", "Lo suficientemente profunda para dar paso a la discusión", "Irrelevante", "Opcional"],
                            answerIndex: 1,
                            explain: "La elaboración de la hipótesis debe ser lo suficientemente profunda para dar paso a la discusión y, al mismo tiempo, clara."
                        },
                        {
                            topic: "Contraargumento",
                            q: "¿Por qué es importante mostrar un contraargumento en el ensayo?",
                            options: ["Para debilitar la tesis", "Para mostrar que el autor es capaz de considerar posturas alternativas", "Para confundir al lector", "No es importante"],
                            answerIndex: 1,
                            explain: "Mostrar un contraargumento enriquece la discusión y muestra que el autor es capaz de considerar posturas alternativas."
                        },
                        {
                            topic: "Estructura del ensayo",
                            q: "¿Cuál es la estructura de redacción del ensayo?",
                            options: ["Tesis, antítesis, síntesis", "Introducción, desarrollo, conclusión", "Planteamiento, nudo, desenlace", "Inicio, cuerpo, cierre"],
                            answerIndex: 1,
                            explain: "La estructura de redacción del ensayo es: introducción (presentación de hipótesis y contexto), desarrollo (argumentos y contraargumentos) y conclusión."
                        },
                        {
                            topic: "Introducción del ensayo",
                            q: "¿Qué debe contener la introducción del ensayo?",
                            options: ["Solo el título", "La presentación de la hipótesis junto con el contexto y el problema", "La bibliografía", "Los agradecimientos"],
                            answerIndex: 1,
                            explain: "La introducción debe presentar la hipótesis junto con los elementos necesarios: contexto y presentación del problema."
                        },
                        {
                            topic: "Refutación",
                            q: "¿Qué se debe hacer después de presentar un contraargumento?",
                            options: ["Ignorarlo", "Presentar ideas que lo refuten y refuercen lo sostenido", "Cambiar de tema", "Aceptarlo sin más"],
                            answerIndex: 1,
                            explain: "A los contraargumentos deben presentarse ideas que los refuten y que al mismo tiempo refuercen lo que se ha sostenido."
                        },
                        {
                            topic: "Conclusión del ensayo",
                            q: "¿Qué se presenta en la conclusión del ensayo?",
                            options: ["Nuevos argumentos", "La reanudación de la hipótesis y las planteadas", "La bibliografía", "Un resumen del cuerpo"],
                            answerIndex: 1,
                            explain: "La conclusión presenta la reanudación de la hipótesis y las planteadas, cerrando la discusión."
                        },
                        {
                            topic: "Argumentos en ensayo",
                            q: "¿Cómo deben sustentarse los argumentos en un ensayo?",
                            options: ["Con opiniones personales", "Con ideas, hechos y ejemplos", "Solo con citas textuales", "Con imágenes"],
                            answerIndex: 1,
                            explain: "Junto a las ideas, se deben presentar los hechos y ejemplos que sustenten los argumentos presentados."
                        },
                        {
                            topic: "Selección del tema",
                            q: "¿A qué debe responder la selección del tema en un ensayo?",
                            options: ["A las modas", "A las necesidades e inquietudes del ensayista y su contexto", "A lo que sea más fácil", "A lo que tenga más información"],
                            answerIndex: 1,
                            explain: "La selección del tema debe responder a las necesidades e inquietudes, no solo de la comunidad o contexto, sino del propio ensayista."
                        },
                        {
                            topic: "Bibliografía básica",
                            q: "¿Para qué sirve la bibliografía básica en la planeación del ensayo?",
                            options: ["Para llenar páginas", "Para que el estudiante cuente con un bagaje mínimo sobre el tema que pueda derivar en argumentos", "Para decorar el trabajo", "No sirve"],
                            answerIndex: 1,
                            explain: "La bibliografía básica es importante para que el estudiante cuente con un bagaje mínimo sobre el tema que pueda derivar en argumentos."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Exposición oral",
                    desc: "Preparación y realización de la exposición oral formal del ensayo.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Exposición oral",
                            q: "¿Qué debe contener el guion de exposición?",
                            options: ["Solo el título", "Presentación, introducción, desarrollo, cierre y conclusiones", "Solo la bibliografía", "Solo los agradecimientos"],
                            answerIndex: 1,
                            explain: "El guion de exposición debe contener: presentación, introducción, desarrollo, cierre y conclusiones."
                        },
                        {
                            topic: "Preguntas básicas",
                            q: "¿Cuáles son las preguntas básicas de investigación para preparar una exposición?",
                            options: ["¿Qué?, ¿Quién?, ¿Cómo?, ¿Cuándo?, ¿Dónde?, ¿Por qué?, ¿Para qué?", "¿Cuál?, ¿Cuánto?, ¿Cuándo?", "¿Dónde?, ¿Cómo?, ¿Por qué?", "¿Qué?, ¿Cuándo?, ¿Dónde?"],
                            answerIndex: 0,
                            explain: "Las preguntas básicas son: ¿Qué?, ¿Quién?, ¿Cómo?, ¿Cuándo?, ¿Dónde?, ¿Por qué? y ¿Para qué? para fijar metas y objetivos."
                        },
                        {
                            topic: "Cualidades del expositor",
                            q: "Según Antonio Rojas Tapia, ¿qué es el volumen en la voz del expositor?",
                            options: ["La velocidad al hablar", "La fuerza con que se expelen las palabras", "La claridad en la pronunciación", "La entonación"],
                            answerIndex: 1,
                            explain: "El volumen es la fuerza con que se expelen las palabras y debe estar en consonancia con el sitio donde se halle."
                        },
                        {
                            topic: "Material de apoyo",
                            q: "¿Qué recomendación se da para las diapositivas de una exposición?",
                            options: ["Llenarlas de texto", "Evitar sobrecarga de texto, usar palabras clave y esquemas", "Usar tipografía pequeña", "Usar colores brillantes"],
                            answerIndex: 1,
                            explain: "Se recomienda evitar sobrecarga de texto, anotar palabras clave, elaborar esquemas y cuidar la paleta de colores."
                        },
                        {
                            topic: "Cualidades del expositor",
                            q: "¿Qué es la dicción según Rojas Tapia?",
                            options: ["El volumen de la voz", "La pronunciación clara, precisa y consciente", "La velocidad al hablar", "La postura corporal"],
                            answerIndex: 1,
                            explain: "La dicción es la pronunciación clara, precisa y consciente de las palabras."
                        },
                        {
                            topic: "Exposición oral",
                            q: "¿Qué debe considerar el expositor sobre la audiencia?",
                            options: ["Ignorarla", "Establecer una conexión mediante ejemplos o anécdotas", "Hablar sin mirarla", "Usar tecnicismos"],
                            answerIndex: 1,
                            explain: "Es importante establecer una conexión con el público mediante algún ejemplo o anécdota que se relacione con el tema expuesto."
                        },
                        {
                            topic: "Cualidades del expositor",
                            q: "¿Qué es la fluidez en la voz del expositor?",
                            options: ["La fuerza de la voz", "La velocidad o ritmo con que se habla", "La claridad en la pronunciación", "La postura corporal"],
                            answerIndex: 1,
                            explain: "La fluidez es la velocidad o ritmo con que se habla, evitando extremos como hablar demasiado lento o muy rápido."
                        },
                        {
                            topic: "Trabajo en equipo",
                            q: "En una exposición en equipo, ¿qué debe hacer cada integrante respecto al tema?",
                            options: ["Conocer solo su parte", "Conocer la totalidad del tema para apoyar en caso de problemas", "No es necesario prepararse", "Solo el líder debe saber"],
                            answerIndex: 1,
                            explain: "Cada integrante deberá conocer la totalidad del tema para apoyar a su equipo en caso del surgimiento de un problema."
                        },
                        {
                            topic: "Cualidades del expositor",
                            q: "¿Qué es la entonación según Rojas Tapia?",
                            options: ["La fuerza de la voz", "Matizar la voz, darle énfasis, hacer que suban y bajen los tonos", "La velocidad al hablar", "La postura corporal"],
                            answerIndex: 1,
                            explain: "La entonación consiste en matizar la voz, darle énfasis, hacer que suban y bajen los tonos de acuerdo con la intención del hablante."
                        },
                        {
                            topic: "Cierre de exposición",
                            q: "¿Qué se debe hacer al finalizar la exposición?",
                            options: ["Terminar sin más", "Abrir un espacio para interactuar con el público mediante preguntas y comentarios", "Salir corriendo", "Leer la bibliografía"],
                            answerIndex: 1,
                            explain: "Es importante abrir un espacio para interactuar con el público mediante preguntas y comentarios, permitiendo resolver dudas y enriquecer la discusión."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Debate",
                    desc: "Participación en debate para defender y contraponer puntos de vista sobre el ensayo.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Definición de debate",
                            q: "¿Qué es un debate?",
                            options: ["Una conversación informal", "Un espacio de discusión sobre un tema polémico entre dos o más personas con posturas opuestas", "Una conferencia magistral", "Un monólogo"],
                            answerIndex: 1,
                            explain: "El debate es un espacio de discusión sobre un tema polémico entre dos personas o grupos con posturas opuestas, usualmente a favor o en contra."
                        },
                        {
                            topic: "Participantes del debate",
                            q: "¿Quiénes participan en un debate?",
                            options: ["Solo ponentes", "Ponentes, secretario y moderador", "Solo moderador", "Audiencia únicamente"],
                            answerIndex: 1,
                            explain: "Los participantes del debate son: ponentes (defienden su postura), secretario (anota ideas principales) y moderador (designa turnos y vigila el tiempo)."
                        },
                        {
                            topic: "Función del moderador",
                            q: "¿Cuál es la función del moderador en un debate?",
                            options: ["Defender una postura", "Designar y vigilar el cumplimiento del tiempo y otorgar turnos", "Anotar las ideas", "Dar la bienvenida solo"],
                            answerIndex: 1,
                            explain: "El moderador designa y vigila el cumplimiento del tiempo disponible para cada participante y otorga los turnos."
                        },
                        {
                            topic: "Función del secretario",
                            q: "¿Qué hace el secretario en un debate?",
                            options: ["Defiende una postura", "Modera los turnos", "Anota las ideas principales expuestas por cada participante y expone un resumen final", "Decide al ganador"],
                            answerIndex: 2,
                            explain: "El secretario anota las ideas principales expuestas por cada participante y al término expone un resumen que las contenga."
                        },
                        {
                            topic: "Preparación para debate",
                            q: "¿Cuántos argumentos debe anotar aproximadamente cada participante antes de un debate?",
                            options: ["Uno o dos", "De cinco a diez", "Más de veinte", "Ninguno"],
                            answerIndex: 1,
                            explain: "Independientemente de la postura, el participante deberá anotar de cinco a diez argumentos que desee discutir."
                        },
                        {
                            topic: "Contraargumentación",
                            q: "¿Qué debe hacer el participante para prepararse ante los contraargumentos?",
                            options: ["Ignorarlos", "Adoptar la postura contraria y atacar sus propios argumentos para detectar puntos débiles", "Cambiar de tema", "Retirarse del debate"],
                            answerIndex: 1,
                            explain: "El participante debe adoptar la postura contraria y atacar sus propios argumentos para detectar puntos débiles y reforzarlos."
                        },
                        {
                            topic: "Resultado del debate",
                            q: "¿Qué se obtiene al finalizar un debate?",
                            options: ["Un ganador y un perdedor", "Un mejor resultado, pues quien resulte con mayor dominio del tema evita caer en posturas intimidatorias", "Un premio", "Una sanción"],
                            answerIndex: 1,
                            explain: "En el debate no hay ganadores ni perdedores; se obtiene un mejor resultado ya que quien tenga mayor dominio evita posturas intimidatorias e irrespetuosas."
                        },
                        {
                            topic: "Recomendaciones para debate",
                            q: "¿Qué deben mantener todos los participantes en un debate?",
                            options: ["La subjetividad", "La objetividad", "La agresividad", "El silencio"],
                            answerIndex: 1,
                            explain: "Todos los participantes deben mantener la objetividad y atender las recomendaciones sobre el expositor y la audiencia."
                        },
                        {
                            topic: "Guion de debate",
                            q: "¿Qué elementos contiene el desarrollo del debate en un guion?",
                            options: ["Solo el tema", "Tema, subtema, argumento, contraargumento, réplica", "Solo las conclusiones", "Solo la despedida"],
                            answerIndex: 1,
                            explain: "El desarrollo del debate incluye: tema, subtema, argumento, contraargumento y réplica por cada participante."
                        },
                        {
                            topic: "Tema polémico",
                            q: "¿Qué tipo de tema se discute en un debate?",
                            options: ["Cualquier tema", "Un tema polémico o controversial", "Solo temas científicos", "Solo temas históricos"],
                            answerIndex: 1,
                            explain: "En el debate se discute un tema controversial o polémico que permite posturas opuestas."
                        }
                    ]
                }
            }
        }
    }
};

export default lenguaComunicacionIII;