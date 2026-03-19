// ============================================
// CULTURA DIGITAL II - SEGUNDO TRIMESTRE
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const cultural2 = {
    id: "cultural2",
    nombre: "CULTURA DIGITAL II",
    icono: "💻",
    descripcion: "Software educativo, TIC, búsqueda en internet, periodismo virtual, Excel, análisis de datos",
    modulos: {
        // ========== MÓDULO 1: HABILIDADES DIGITALES PARA EL APRENDIZAJE Y LA COLABORACIÓN ==========
        modulo1: {
            nombre: "Módulo 1: Habilidades Digitales para el Aprendizaje y la Colaboración",
            actividades: {
                // ACTIVIDAD 1: Software educativo y habilidades digitales
                act1: {
                    nombre: "Actividad 1: Software educativo",
                    desc: "Definición de software educativo, tipos, características, habilidades digitales",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Software educativo",
                            q: "¿Qué es el software educativo?",
                            options: [
                                "Cualquier programa de computadora",
                                "Programas que permiten cumplir o apoyar funciones educativas",
                                "Solo juegos didácticos",
                                "Aplicaciones de entretenimiento"
                            ],
                            answerIndex: 1,
                            explain: "El software educativo son aquellos programas que permiten cumplir o apoyar funciones educativas, diseñados con una estrategia pedagógica."
                        },
                        {
                            topic: "Software de simulación",
                            q: "¿Cuál es el objetivo principal del software de simulación?",
                            options: [
                                "Entretener al usuario",
                                "Recrear situaciones para mejorar el rendimiento",
                                "Evaluar conocimientos",
                                "Enseñar programación"
                            ],
                            answerIndex: 1,
                            explain: "Los software de simulación sirven para recrear situaciones relacionadas con actividades que el aprendiente desarrolla, mejorando su rendimiento."
                        },
                        {
                            topic: "Software de juego educativo",
                            q: "¿Qué buscan los software de juego educativo?",
                            options: [
                                "Solo divertir",
                                "Incentivar al aprendiente mediante interacción y recompensas",
                                "Reemplazar al maestro",
                                "Enseñar sin esfuerzo"
                            ],
                            answerIndex: 1,
                            explain: "Los juegos educativos buscan incentivar al aprendiente a través de interacción, recompensas o actividades dinámicas para captar su interés."
                        },
                        {
                            topic: "Programas tutoriales",
                            q: "¿Cómo funcionan los programas tutoriales?",
                            options: [
                                "Mediante ejercicios prácticos",
                                "A través de videos con aspectos relevantes del tema",
                                "Con simulaciones interactivas",
                                "Resolviendo problemas"
                            ],
                            answerIndex: 1,
                            explain: "Los programas tutoriales utilizan videos donde se suministran los aspectos más relevantes del tema, permitiendo vínculo con tecnologías."
                        },
                        {
                            topic: "Características del software educativo",
                            q: "¿Cuál es una característica del software educativo?",
                            options: [
                                "No tiene propósito didáctico",
                                "Tiene un propósito didáctico en relación con el objetivo",
                                "Solo funciona sin internet",
                                "Es siempre comercial"
                            ],
                            answerIndex: 1,
                            explain: "El software educativo tiene un propósito didáctico en relación con el objetivo que se persigue, enfocándose en enseñar al aprendiente."
                        },
                        {
                            topic: "Habilidades digitales",
                            q: "¿Qué permite la alfabetización digital?",
                            options: [
                                "Leer libros digitales",
                                "Utilizar herramientas y tecnologías digitales de manera efectiva",
                                "Navegar en internet",
                                "Programar computadoras"
                            ],
                            answerIndex: 1,
                            explain: "La alfabetización digital es la capacidad de utilizar las herramientas y tecnologías digitales de manera efectiva."
                        },
                        {
                            topic: "Ciudadanía digital",
                            q: "¿Qué implica la ciudadanía digital?",
                            options: [
                                "Tener acceso a internet",
                                "Participar de manera responsable y ética en el mundo digital",
                                "Ser usuario de redes sociales",
                                "Tener cuenta de correo"
                            ],
                            answerIndex: 1,
                            explain: "La ciudadanía digital es la capacidad de participar de manera responsable y ética en el mundo digital."
                        },
                        {
                            topic: "Creatividad digital",
                            q: "¿Qué es la creatividad digital?",
                            options: [
                                "Copiar contenido de internet",
                                "Crear contenido innovador y original con herramientas digitales",
                                "Compartir memes",
                                "Usar plantillas prediseñadas"
                            ],
                            answerIndex: 1,
                            explain: "La creatividad digital es la capacidad de utilizar herramientas digitales para crear contenido innovador y original."
                        },
                        {
                            topic: "Innovación digital",
                            q: "¿En qué consiste la innovación digital?",
                            options: [
                                "Usar tecnología antigua",
                                "Resolver problemas y crear nuevas oportunidades con tecnología",
                                "Solo programar",
                                "Comprar dispositivos nuevos"
                            ],
                            answerIndex: 1,
                            explain: "La innovación digital es la capacidad de utilizar herramientas digitales para resolver problemas y crear nuevas oportunidades."
                        },
                        {
                            topic: "Habilidades digitales",
                            q: "¿Qué habilidad permite acceder al conocimiento y la experiencia?",
                            options: [
                                "Programación",
                                "Uso de tecnologías digitales para aprendizaje",
                                "Diseño gráfico",
                                "Mantenimiento de computadoras"
                            ],
                            answerIndex: 1,
                            explain: "Las tecnologías digitales permiten acceder al conocimiento y la experiencia, innovar y hacer más eficientes los procesos."
                        }
                    ]
                },
                // ACTIVIDAD 2: Software libre vs comercial, plataformas educativas
                act2: {
                    nombre: "Actividad 2: Software educativo y plataformas",
                    desc: "Software libre y comercial, ejemplos de software educativo, plataformas educativas, TIC",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Software comercial",
                            q: "¿Qué característica tiene el software comercial?",
                            options: [
                                "Es gratuito siempre",
                                "Tiene ventajas sobresalientes pero requiere costo adicional",
                                "No tiene soporte",
                                "Es de código abierto"
                            ],
                            answerIndex: 1,
                            explain: "El software comercial tiene ventajas sobresalientes pero el usuario solo puede acceder con un costo adicional."
                        },
                        {
                            topic: "Software libre",
                            q: "¿Qué es el software libre?",
                            options: [
                                "Software que no sirve",
                                "Software con prestaciones interesantes sin costo",
                                "Software sin actualizaciones",
                                "Software de paga"
                            ],
                            answerIndex: 1,
                            explain: "El software libre tiene prestaciones interesantes que satisfacen la necesidad de adquisición del conocimiento sin costo."
                        },
                        {
                            topic: "Kalzium",
                            q: "¿Para qué sirve el software Kalzium?",
                            options: [
                                "Aprender idiomas",
                                "Explorar la tabla periódica",
                                "Editar audio",
                                "Crear mapas conceptuales"
                            ],
                            answerIndex: 1,
                            explain: "Kalzium es un software libre para computadoras que sirve para explorar al detalle la tabla periódica."
                        },
                        {
                            topic: "Celestia",
                            q: "¿Qué permite hacer Celestia?",
                            options: [
                                "Editar imágenes",
                                "Viajar por la galaxia con mapa interactivo del universo",
                                "Aprender mecanografía",
                                "Crear cuestionarios"
                            ],
                            answerIndex: 1,
                            explain: "Celestia es un programa libre con mapa interactivo del universo, imágenes reales de objetos en el espacio, permite viajar por la galaxia."
                        },
                        {
                            topic: "IHMC CmapTools",
                            q: "¿Para qué sirve IHMC CmapTools?",
                            options: [
                                "Editar videos",
                                "Desarrollar mapas conceptuales",
                                "Programar en Scratch",
                                "Aprender matemáticas"
                            ],
                            answerIndex: 1,
                            explain: "IHMC CmapTools es software libre óptimo para desarrollar mapas conceptuales, representaciones gráficas del conocimiento."
                        },
                        {
                            topic: "Scratch",
                            q: "¿Qué permite aprender Scratch?",
                            options: [
                                "Edición de audio",
                                "Bases de la programación y lógica",
                                "Diseño gráfico",
                                "Cálculo avanzado"
                            ],
                            answerIndex: 1,
                            explain: "Scratch y Scratch Jr son software libre para aprender las bases de la programación y la lógica."
                        },
                        {
                            topic: "Plataforma educativa",
                            q: "¿Qué es una plataforma educativa?",
                            options: [
                                "Un software de diseño",
                                "Un sitio web para cursos virtuales con materiales, foros, tareas",
                                "Una red social",
                                "Un buscador"
                            ],
                            answerIndex: 1,
                            explain: "Una plataforma educativa es un sitio web que permite al tutor tener espacio virtual para colocar materiales, foros, wikis, tareas, test, chats."
                        },
                        {
                            topic: "Herramientas de comunicación",
                            q: "¿Qué herramienta permite colaboración en tiempo real?",
                            options: [
                                "Google Scholar",
                                "Zoom o Microsoft Teams",
                                "Mendeley",
                                "WordPress"
                            ],
                            answerIndex: 1,
                            explain: "Zoom, Google Meet, Microsoft Teams, Slack son herramientas de comunicación que permiten conectarse y trabajar juntos en tiempo real."
                        },
                        {
                            topic: "Herramientas de investigación",
                            q: "¿Qué herramienta es útil para gestión de información académica?",
                            options: [
                                "Trello",
                                "Mendeley o Zotero",
                                "Adobe Creative Cloud",
                                "Google Docs"
                            ],
                            answerIndex: 1,
                            explain: "Mendeley y Zotero son herramientas de investigación y gestión de información que permiten organizar y analizar información académica."
                        },
                        {
                            topic: "Beneficios de TIC",
                            q: "¿Qué beneficio ofrecen las TIC para el aprendizaje?",
                            options: [
                                "Aislamiento social",
                                "Acceso a gran cantidad de información y recursos educativos",
                                "Menor comunicación",
                                "Solo entretenimiento"
                            ],
                            answerIndex: 1,
                            explain: "Las TIC permiten acceso a gran cantidad de información y recursos educativos de forma rápida y sencilla."
                        }
                    ]
                },
                // ACTIVIDAD 3: Búsqueda de información en internet
                act3: {
                    nombre: "Actividad 3: Búsqueda en internet",
                    desc: "Búsqueda de información, factores de crecimiento, recomendaciones, técnicas de búsqueda",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Internet",
                            q: "¿Cómo es conocido internet como fuente de información?",
                            options: [
                                "La red social mundial",
                                "La biblioteca mundial de la era digital",
                                "El archivo nacional",
                                "La enciclopedia virtual"
                            ],
                            answerIndex: 1,
                            explain: "Internet es conocido como la biblioteca mundial de la era digital por su vasta colección de recursos multimediales."
                        },
                        {
                            topic: "Factores de crecimiento",
                            q: "¿Qué factor ha contribuido al aumento de información en internet?",
                            options: [
                                "Alto costo de publicación",
                                "Facilidad de publicar y bajo costo",
                                "Dificultad para acceder",
                                "Pocos usuarios"
                            ],
                            answerIndex: 1,
                            explain: "Factores como facilidad de publicar, bajo costo, dinamismo e interactividad han aumentado la información en internet."
                        },
                        {
                            topic: "Fuentes confiables",
                            q: "¿Qué ejemplo de fuente confiable se menciona?",
                            options: [
                                "elrincondelvago.com",
                                "Sitios de investigación de la UNAM",
                                "Wikipedia",
                                "Blogs personales"
                            ],
                            answerIndex: 1,
                            explain: "Los sitios de investigación de la UNAM son ejemplo de fuente confiable, a diferencia de sitios como elrincondelvago.com."
                        },
                        {
                            topic: "Recomendaciones",
                            q: "¿Cuál es el primer paso para una búsqueda efectiva?",
                            options: [
                                "Evaluar resultados",
                                "Formular una pregunta efectiva",
                                "Construir búsquedas complejas",
                                "Gestionar información"
                            ],
                            answerIndex: 1,
                            explain: "El primer paso es formular de manera efectiva un cuestionamiento o pregunta: ¿Qué necesito saber y de qué?"
                        },
                        {
                            topic: "Búsqueda por voz",
                            q: "¿Qué comando se usa para búsqueda por voz en Android?",
                            options: [
                                "Hola Siri",
                                "Ok Google",
                                "Alexa",
                                "Hey Cortana"
                            ],
                            answerIndex: 1,
                            explain: "En Android se puede usar el comando 'Ok Google' para realizar búsquedas por voz."
                        },
                        {
                            topic: "Búsqueda en redes",
                            q: "¿Qué símbolo se usa para buscar en redes sociales?",
                            options: [
                                "#",
                                "@",
                                "$",
                                "-"
                            ],
                            answerIndex: 1,
                            explain: "El símbolo @ se usa para búsqueda en medios sociales, por ejemplo: @facebook Mildred."
                        },
                        {
                            topic: "Excluir palabras",
                            q: "¿Qué símbolo permite excluir palabras en una búsqueda?",
                            options: [
                                "+",
                                "-",
                                "*",
                                "&"
                            ],
                            answerIndex: 1,
                            explain: "El símbolo – (menos) delante de la palabra la excluye de la búsqueda. Ejemplo: jaguar -animal"
                        },
                        {
                            topic: "Palabra exacta",
                            q: "¿Cómo se busca una palabra exacta en Google?",
                            options: [
                                "Entre paréntesis",
                                "Entre comillas",
                                "Entre corchetes",
                                "Entre signos de admiración"
                            ],
                            answerIndex: 1,
                            explain: "Para buscar una palabra exacta se encierra entre comillas: \"montaña más alta del mundo\""
                        },
                        {
                            topic: "Búsqueda por imágenes",
                            q: "¿Cómo se puede buscar información usando una imagen?",
                            options: [
                                "Describiendo la imagen",
                                "Por URL o subiendo el archivo en images.google.com",
                                "Escribiendo el nombre",
                                "No es posible"
                            ],
                            answerIndex: 1,
                            explain: "Se puede buscar por imagen ingresando la URL o subiendo el archivo en https://www.google.com.mx/imghp"
                        },
                        {
                            topic: "Sitio específico",
                            q: "¿Qué sintaxis se usa para buscar en un sitio específico?",
                            options: [
                                "url:",
                                "site:",
                                "web:",
                                "domain:"
                            ],
                            answerIndex: 1,
                            explain: "Se usa site: seguido del dominio. Ejemplo: site:nintendo.com para buscar contenido en ese sitio."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: INVESTIGACIÓN Y DISEÑO DIGITAL ==========
        modulo2: {
            nombre: "Módulo 2: Investigación y Diseño Digital",
            actividades: {
                // ACTIVIDAD 1: Comunicación vs información, historia de la comunicación
                act1: {
                    nombre: "Actividad 1: Comunicación e información",
                    desc: "Diferencia entre comunicación e información, historia de la comunicación, evolución digital",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Comunicación",
                            q: "Según Santos, ¿qué es la comunicación?",
                            options: [
                                "Intercambio de datos",
                                "Elemento fundamental en la cotidianidad que involucra lenguaje y habla",
                                "Transmisión de información",
                                "Uso de tecnología"
                            ],
                            answerIndex: 1,
                            explain: "La comunicación es un elemento fundamental en la cotidianidad que involucra durante el aprendizaje de la lengua, la apropiación del lenguaje y el ejercicio del habla."
                        },
                        {
                            topic: "Comunicación humanista",
                            q: "Según la perspectiva humanista, ¿cuál es la función básica de la comunicación?",
                            options: [
                                "Intercambiar información",
                                "Desarrollar relaciones",
                                "Transmitir datos",
                                "Persuadir"
                            ],
                            answerIndex: 1,
                            explain: "Desde la perspectiva humanista, la función básica de la comunicación consiste en desarrollar relaciones, más que en intercambiar información."
                        },
                        {
                            topic: "Retórica",
                            q: "¿Qué elementos componían la retórica de Aristóteles?",
                            options: [
                                "Emisor, receptor, canal",
                                "Locutor, discurso y oyente",
                                "Texto, contexto, mensaje",
                                "Código, mensaje, canal"
                            ],
                            answerIndex: 1,
                            explain: "La retórica de Aristóteles estaba compuesta por tres elementos: el locutor, el discurso y el oyente, con intención de persuadir."
                        },
                        {
                            topic: "Información",
                            q: "¿Qué significa etimológicamente 'información'?",
                            options: [
                                "Enviar mensajes",
                                "Resaltar o distinguir",
                                "Comunicar ideas",
                                "Transmitir datos"
                            ],
                            answerIndex: 1,
                            explain: "Información proviene de su etimología que significa resaltar o distinguir, dar a conocer una idea de manera estructurada."
                        },
                        {
                            topic: "Tecnologías",
                            q: "¿Qué son las tecnologías según el texto?",
                            options: [
                                "Solo computadoras",
                                "Herramientas de innovación microelectrónica para procesar información",
                                "Redes sociales",
                                "Programas de computadora"
                            ],
                            answerIndex: 1,
                            explain: "Las tecnologías son herramientas de innovación microelectrónica que permiten procesar y acumular enormes cantidades de contenido informativo."
                        },
                        {
                            topic: "Fuente confiable",
                            q: "¿Qué ejemplo de página confiable se menciona?",
                            options: [
                                "Wikipedia",
                                "Redalyc",
                                "Blogspot",
                                "Facebook"
                            ],
                            answerIndex: 1,
                            explain: "Redalyc es un sistema de indización que integra revistas de calidad científica y editorial de la región."
                        },
                        {
                            topic: "Comunicación prehistórica",
                            q: "¿Qué medio de comunicación usaban en la prehistoria?",
                            options: [
                                "Teléfono",
                                "Fuego (humo)",
                                "Radio",
                                "Periódico"
                            ],
                            answerIndex: 1,
                            explain: "El fuego (humo) se usaba para ubicarse e incluso defenderse en la prehistoria."
                        },
                        {
                            topic: "Trueque",
                            q: "¿Por qué el trueque se considera comunicación?",
                            options: [
                                "Porque usaba monedas",
                                "Porque intercambiaban objetos de valor como forma de interacción",
                                "Porque escribían mensajes",
                                "Porque usaba papel"
                            ],
                            answerIndex: 1,
                            explain: "El trueque, aunque era medio de comercio, se consideraba comunicación porque consistía en intercambiar objetos de valor."
                        },
                        {
                            topic: "Evolución digital",
                            q: "¿Qué dispositivos ganaron relevancia en el siglo XXI?",
                            options: [
                                "Radio e imprenta",
                                "Teléfonos celulares, tabletas, TV alta resolución",
                                "Periódicos",
                                "Cartas"
                            ],
                            answerIndex: 1,
                            explain: "En el siglo XXI se incorporaron teléfonos celulares, tabletas, TV con alta resolución y otros dispositivos digitales."
                        },
                        {
                            topic: "Audiolibros",
                            q: "¿Qué programas se mencionan para escuchar audiolibros?",
                            options: [
                                "Word, Excel",
                                "Audible, AudioLibros, Audioteka, iVoox",
                                "Photoshop, Illustrator",
                                "Chrome, Firefox"
                            ],
                            answerIndex: 1,
                            explain: "Programas como Audible, AudioLibros, Audioteka, iVoox Podcast permiten escuchar audiolibros en cualquier momento."
                        }
                    ]
                },
                // ACTIVIDAD 2: Periódico virtual, internet, características
                act2: {
                    nombre: "Actividad 2: Periódico virtual e internet",
                    desc: "Ciberperiodismo, características del periodismo digital, internet, servicios",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Ciberperiodismo",
                            q: "¿Qué es el periodismo virtual?",
                            options: [
                                "Periodismo impreso",
                                "Modalidad del periodismo cuyo entorno es internet",
                                "Radio en línea",
                                "Televisión digital"
                            ],
                            answerIndex: 1,
                            explain: "El periodismo virtual, también llamado ciberperiodismo, es una modalidad del ejercicio periodístico cuyo principal entorno de desarrollo es internet."
                        },
                        {
                            topic: "Multimedialidad",
                            q: "¿Qué característica del periodismo virtual permite integrar texto, audio, video y gráficos?",
                            options: [
                                "Hipertextualidad",
                                "Multimedialidad",
                                "Interactividad",
                                "Inmediatez"
                            ],
                            answerIndex: 1,
                            explain: "La multimedialidad permite integrar en una misma plataforma formatos de texto, audio, video, gráficos, fotografías y animaciones."
                        },
                        {
                            topic: "Hipertextualidad",
                            q: "¿Qué permite la hipertextualidad?",
                            options: [
                                "Ver videos",
                                "Acceder a información de manera multidireccional y no lineal mediante enlaces",
                                "Comentar noticias",
                                "Compartir en redes"
                            ],
                            answerIndex: 1,
                            explain: "La hipertextualidad permite acceder a la información de manera multidireccional y no lineal a través de enlaces con relación al texto."
                        },
                        {
                            topic: "Interactividad",
                            q: "¿En qué consiste la interactividad en medios digitales?",
                            options: [
                                "Solo ver contenido",
                                "Posibilidad de interactuar con el medio, autores y texto",
                                "Leer noticias",
                                "Escuchar radio"
                            ],
                            answerIndex: 1,
                            explain: "La interactividad se refiere a la posibilidad que tienen los usuarios de interactuar con el medio, los autores y el texto."
                        },
                        {
                            topic: "Internet",
                            q: "¿Qué significa la palabra internet?",
                            options: [
                                "Red internacional",
                                "Inter (entre) + net (network - red electrónica)",
                                "Sistema de comunicación",
                                "World Wide Web"
                            ],
                            answerIndex: 1,
                            explain: "Internet tiene sus raíces en el inglés: inter (entre) y net (proveniente de network, red electrónica)."
                        },
                        {
                            topic: "Internet",
                            q: "¿Cómo se escribe correctamente internet?",
                            options: [
                                "Con minúscula y artículo",
                                "En mayúscula y sin artículo",
                                "Con artículo definido",
                                "Con guión"
                            ],
                            answerIndex: 1,
                            explain: "Internet es un término que siempre debe ser escrito en mayúscula y sin un artículo que lo acompañe."
                        },
                        {
                            topic: "Características de internet",
                            q: "¿Qué significa que internet sea universal?",
                            options: [
                                "Que es caro",
                                "Que tiene alcance mundial y se puede acceder a información de otros países",
                                "Que solo sirve para comunicación",
                                "Que es técnico"
                            ],
                            answerIndex: 1,
                            explain: "Universal significa que es un fenómeno extendido en todo el mundo por el gran alcance a través de su conectividad."
                        },
                        {
                            topic: "Características de internet",
                            q: "¿Por qué internet es considerado económico?",
                            options: [
                                "Porque es gratis",
                                "Porque consultas, búsquedas e investigaciones tienen costo mínimo en tiempo y dinero",
                                "Porque no requiere inversión",
                                "Porque los dispositivos son baratos"
                            ],
                            answerIndex: 1,
                            explain: "Es económico porque debido a la gran concentración de información, las consultas y búsquedas se realizan por un costo mínimo."
                        },
                        {
                            topic: "Comercio electrónico",
                            q: "¿Cómo ha crecido el comercio electrónico?",
                            options: [
                                "Solo para grandes empresas",
                                "Exponencialmente para grandes cadenas y pequeñas empresas",
                                "Ha disminuido",
                                "Solo para productos digitales"
                            ],
                            answerIndex: 1,
                            explain: "El comercio electrónico ha crecido exponencialmente para grandes cadenas y pequeñas empresas, que venden productos a todo el mundo."
                        },
                        {
                            topic: "Libertad en internet",
                            q: "¿Qué aspecto positivo y negativo tiene la libertad en internet?",
                            options: [
                                "Solo positivo",
                                "Permite expresarse libremente pero también facilita información falsa",
                                "Solo negativo",
                                "No tiene consecuencias"
                            ],
                            answerIndex: 1,
                            explain: "La libertad permite expresarse libremente (positivo), pero puede facilitar la diseminación de información falsa o incorrecta (negativo)."
                        }
                    ]
                },
                // ACTIVIDAD 3: Discursos en red, sitios web educativos
                act3: {
                    nombre: "Actividad 3: Discursos en red y sitios educativos",
                    desc: "Tipos de discursos en internet, sitios web educativos (Eduteka, Blogger, Wikispace, Maestroteca, Moodle, Bibliotheka)",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Discurso informativo",
                            q: "¿Qué caracteriza al discurso informativo en internet?",
                            options: [
                                "Solo entretenimiento",
                                "Acceso a información actualizada mundial, usuarios como productores de contenido",
                                "Venta de productos",
                                "Educación formal"
                            ],
                            answerIndex: 1,
                            explain: "En el discurso informativo se accede a información actualizada mundial; los usuarios producen y envían sus propios mensajes."
                        },
                        {
                            topic: "Discurso de entretenimiento",
                            q: "¿Qué surgió en los años 90 en internet?",
                            options: [
                                "Redes sociales",
                                "Juegos gratuitos, en línea, salas de chat, foros de esparcimiento",
                                "Comercio electrónico",
                                "Plataformas educativas"
                            ],
                            answerIndex: 1,
                            explain: "En los años 90 proliferaron los juegos gratuitos, en línea, salas de charla y foros de esparcimiento."
                        },
                        {
                            topic: "Streaming",
                            q: "¿Qué plataformas de streaming se mencionan?",
                            options: [
                                "Facebook, Twitter",
                                "YouTube, Spotify, Netflix",
                                "Google, Bing",
                                "WordPress, Blogger"
                            ],
                            answerIndex: 1,
                            explain: "Plataformas como YouTube, Spotify y Netflix ofrecen contenido de streaming disponible 24/7."
                        },
                        {
                            topic: "Discurso comercial",
                            q: "¿Cómo es la publicidad en internet actualmente?",
                            options: [
                                "Larga y detallada",
                                "Mensajes breves con apoyo visual, insertada en contenidos",
                                "Solo texto",
                                "Sin imágenes"
                            ],
                            answerIndex: 1,
                            explain: "Los comerciales han reducido la duración de sus mensajes, usan mayor apoyo visual y se insertan en contenidos."
                        },
                        {
                            topic: "Eduteka",
                            q: "¿Qué es Eduteka?",
                            options: [
                                "Red social",
                                "Portal educativo gratuito de la universidad ICESI (Colombia)",
                                "Buscador académico",
                                "Plataforma de cursos"
                            ],
                            answerIndex: 1,
                            explain: "Eduteka es un portal educativo gratuito de la universidad ICESI que provee materiales para docentes y formadores."
                        },
                        {
                            topic: "Blogger",
                            q: "¿Qué empresa adquirió Blogger en 2003?",
                            options: [
                                "Microsoft",
                                "Google",
                                "Yahoo",
                                "Amazon"
                            ],
                            answerIndex: 1,
                            explain: "Blogger fue creado por Pyra Labs y adquirido por Google en el año 2003."
                        },
                        {
                            topic: "Wikispace",
                            q: "¿Cuál es la principal utilidad de un wiki?",
                            options: [
                                "Almacenar archivos",
                                "Crear y mejorar páginas de forma instantánea, trabajo colaborativo",
                                "Enviar mensajes",
                                "Diseñar gráficos"
                            ],
                            answerIndex: 1,
                            explain: "La principal utilidad de un wiki es permitir crear y mejorar páginas de forma instantánea, trabajando en equipo."
                        },
                        {
                            topic: "Maestroteca",
                            q: "¿A quién está dirigido principalmente Maestroteca?",
                            options: [
                                "Estudiantes",
                                "Comunidad docente (maestros)",
                                "Empresas",
                                "Investigadores"
                            ],
                            answerIndex: 1,
                            explain: "Maestroteca es un portal educativo dirigido a la comunidad docente, aunque incluye ejercicios para alumnos."
                        },
                        {
                            topic: "Moodle",
                            q: "¿En qué pedagogía se basa Moodle?",
                            options: [
                                "Conductismo",
                                "Constructivismo social",
                                "Cognitivismo",
                                "Humanismo"
                            ],
                            answerIndex: 1,
                            explain: "Moodle tiene más de 10 años de desarrollo guiado por la pedagogía de constructivismo social."
                        },
                        {
                            topic: "Bibliotheka",
                            q: "¿Qué elemento del catálogo indica la ubicación física del documento?",
                            options: [
                                "Asiento bibliográfico",
                                "Signatura topográfica",
                                "Puntos de acceso",
                                "ISBN"
                            ],
                            answerIndex: 1,
                            explain: "La signatura topográfica indica la ubicación física del documento, característica que diferencia al catálogo de otras fuentes."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: DIGITALIZACIÓN Y ANÁLISIS DE DATOS ==========
        modulo3: {
            nombre: "Módulo 3: Digitalización y Análisis de Datos",
            actividades: {
                // ACTIVIDAD 1: Revolución digital, HTML, Excel básico
                act1: {
                    nombre: "Actividad 1: Excel básico",
                    desc: "Revolución digital, HTML, hoja de cálculo, interfaz de Excel, cinta de opciones",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Cultura digital",
                            q: "¿Qué es la cultura digital?",
                            options: [
                                "Uso de computadoras",
                                "Prácticas, valores, normas y conocimientos en contexto de digitalización",
                                "Redes sociales",
                                "Programación"
                            ],
                            answerIndex: 1,
                            explain: "La cultura digital se refiere a las prácticas, valores, normas y conocimientos que emergen en el contexto de la digitalización."
                        },
                        {
                            topic: "HTML",
                            q: "¿Qué significa HTML?",
                            options: [
                                "HyperText Markup Language",
                                "High Tech Multimedia Language",
                                "Hyper Transfer Protocol",
                                "Home Tool Management Language"
                            ],
                            answerIndex: 0,
                            explain: "HTML significa HyperText Markup Language (Lenguaje de Marcas de Hipertexto)."
                        },
                        {
                            topic: "HTML",
                            q: "¿Para qué sirve HTML?",
                            options: [
                                "Diseñar gráficos",
                                "Crear páginas web",
                                "Editar videos",
                                "Programar aplicaciones móviles"
                            ],
                            answerIndex: 1,
                            explain: "HTML es el lenguaje de marcado más utilizado para crear páginas web."
                        },
                        {
                            topic: "Excel",
                            q: "¿Cuándo fue lanzado Excel por primera vez?",
                            options: [
                                "30 de septiembre de 1980",
                                "30 de septiembre de 1985",
                                "30 de septiembre de 1990",
                                "30 de septiembre de 1995"
                            ],
                            answerIndex: 1,
                            explain: "Excel fue lanzado al mercado por primera vez el 30 de septiembre de 1985."
                        },
                        {
                            topic: "Excel",
                            q: "¿Cómo se llama un archivo de Excel con una o varias hojas?",
                            options: [
                                "Hoja de cálculo",
                                "Libro de Excel",
                                "Documento",
                                "Tabla dinámica"
                            ],
                            answerIndex: 1,
                            explain: "Un archivo con una o varias hojas se conoce como Libro de Excel, con extensión .xlsx."
                        },
                        {
                            topic: "Excel",
                            q: "En Excel, ¿cómo se llama cada columna?",
                            options: [
                                "Registro",
                                "Campo",
                                "Celda",
                                "Fila"
                            ],
                            answerIndex: 1,
                            explain: "Cada columna de Excel se conoce como CAMPO."
                        },
                        {
                            topic: "Excel",
                            q: "En Excel, ¿cómo se llama cada fila?",
                            options: [
                                "Campo",
                                "Registro",
                                "Celda",
                                "Dato"
                            ],
                            answerIndex: 1,
                            explain: "Cada fila de Excel se conoce como REGISTRO."
                        },
                        {
                            topic: "Excel",
                            q: "¿Qué pestaña de Excel contiene las opciones de copiar, pegar y formato?",
                            options: [
                                "Archivo",
                                "Inicio",
                                "Insertar",
                                "Datos"
                            ],
                            answerIndex: 1,
                            explain: "La pestaña Inicio permite copiar, pegar y modificar aspectos de formato."
                        },
                        {
                            topic: "Excel",
                            q: "¿Qué pestaña de Excel permite insertar gráficos, tablas e imágenes?",
                            options: [
                                "Inicio",
                                "Insertar",
                                "Diseño de página",
                                "Fórmulas"
                            ],
                            answerIndex: 1,
                            explain: "La pestaña Insertar contiene comandos para insertar gráficos, tablas, texto e imágenes."
                        },
                        {
                            topic: "Excel",
                            q: "¿Qué pestaña de Excel contiene las funciones de filtrar y ordenar?",
                            options: [
                                "Inicio",
                                "Datos",
                                "Revisar",
                                "Vista"
                            ],
                            answerIndex: 1,
                            explain: "La pestaña Datos tiene funcionalidades como Filtrar y Ordenar."
                        }
                    ]
                },
                // ACTIVIDAD 2: Funciones de Excel, filtrar, ordenar, gráficas
                act2: {
                    nombre: "Actividad 2: Funciones de Excel",
                    desc: "Funciones básicas, fórmulas, filtrar, ordenar, gráficas, impresión",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Función SUMA",
                            q: "¿Qué hace la función SUMA en Excel?",
                            options: [
                                "Cuenta celdas",
                                "Suma números de un rango",
                                "Calcula promedio",
                                "Busca el máximo"
                            ],
                            answerIndex: 1,
                            explain: "La función SUMA devuelve como resultado la suma de todos los números contenidos dentro del rango."
                        },
                        {
                            topic: "Función PROMEDIO",
                            q: "¿Qué devuelve la función PROMEDIO?",
                            options: [
                                "El valor más alto",
                                "La media aritmética de los números",
                                "El valor más frecuente",
                                "La mediana"
                            ],
                            answerIndex: 1,
                            explain: "PROMEDIO devuelve la media aritmética de los números contenidos en el rango."
                        },
                        {
                            topic: "Función CONTAR",
                            q: "¿Qué cuenta la función CONTAR?",
                            options: [
                                "Celdas vacías",
                                "Celdas con números",
                                "Celdas con texto",
                                "Todas las celdas"
                            ],
                            answerIndex: 1,
                            explain: "CONTAR devuelve cuántas celdas existen dentro del rango que contengan números."
                        },
                        {
                            topic: "Función SI",
                            q: "¿Qué permite hacer la función SI?",
                            options: [
                                "Sumar valores",
                                "Agregar condiciones (si... entonces)",
                                "Contar celdas",
                                "Ordenar datos"
                            ],
                            answerIndex: 1,
                            explain: "La función SI permite agregar condiciones del tipo 'si'... ejemplo: si A1 es mayor que 5 devuelve un valor, si no, otro."
                        },
                        {
                            topic: "Filtrar datos",
                            q: "¿Qué pestaña contiene el botón de filtrar en Excel?",
                            options: [
                                "Inicio",
                                "Datos",
                                "Insertar",
                                "Revisar"
                            ],
                            answerIndex: 1,
                            explain: "En la pestaña Datos, dentro del grupo Ordenar y Filtrar, se encuentra el botón con forma de embudo para filtrar."
                        },
                        {
                            topic: "Ordenar datos",
                            q: "¿Qué opciones de ordenamiento existen en Excel?",
                            options: [
                                "Solo ascendente",
                                "Ascendente, descendente, por color",
                                "Solo alfabético",
                                "Solo numérico"
                            ],
                            answerIndex: 1,
                            explain: "Se puede ordenar de manera ascendente, descendente, por color, o con múltiples reglas desde el cuadro de diálogo Ordenar."
                        },
                        {
                            topic: "Gráficas en Excel",
                            q: "¿Cuál es el primer paso para insertar un gráfico?",
                            options: [
                                "Ir a Insertar",
                                "Seleccionar la tabla con datos",
                                "Elegir tipo de gráfico",
                                "Dar formato"
                            ],
                            answerIndex: 1,
                            explain: "El primer paso es seleccionar la tabla con datos que se quieren representar en el gráfico."
                        },
                        {
                            topic: "Imprimir en Excel",
                            q: "¿Qué teclas abren la vista previa de impresión?",
                            options: [
                                "Ctrl + G",
                                "Ctrl + P",
                                "Ctrl + I",
                                "Ctrl + V"
                            ],
                            answerIndex: 1,
                            explain: "La ventana de vista previa se puede abrir con las teclas CONTROL + P."
                        },
                        {
                            topic: "Área de impresión",
                            q: "¿Cómo se establece el área de impresión en Excel?",
                            options: [
                                "Archivo → Imprimir",
                                "Seleccionar celdas → Diseño de página → Área de impresión → Establecer área",
                                "Vista → Ver saltos",
                                "Inicio → Formato"
                            ],
                            answerIndex: 1,
                            explain: "Para establecer área de impresión: seleccionar celdas, ir a Diseño de página, clic en Área de impresión y elegir Establecer área."
                        },
                        {
                            topic: "Orientación",
                            q: "¿Qué opciones de orientación de página existen en Excel?",
                            options: [
                                "Solo vertical",
                                "Vertical y horizontal",
                                "Solo horizontal",
                                "Circular"
                            ],
                            answerIndex: 1,
                            explain: "En la configuración de impresión se puede elegir orientación vertical u horizontal."
                        }
                    ]
                },
                // ACTIVIDAD 3: Análisis estadístico, medidas de tendencia central y dispersión
                act3: {
                    nombre: "Actividad 3: Análisis estadístico",
                    desc: "Medidas de tendencia central, medidas de dispersión, datos agrupados y no agrupados",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Análisis estadístico",
                            q: "¿Para qué sirve el análisis estadístico en la cultura digital?",
                            options: [
                                "Solo para matemáticas",
                                "Para comprender datos y tomar decisiones",
                                "Para programar",
                                "Para diseñar páginas web"
                            ],
                            answerIndex: 1,
                            explain: "El análisis estadístico es esencial para comprender datos y tomar decisiones, identificando patrones y tendencias."
                        },
                        {
                            topic: "Media aritmética",
                            q: "¿Cómo se calcula la media aritmética?",
                            options: [
                                "Suma de datos multiplicada por total",
                                "Suma de datos dividida entre total",
                                "Dato central",
                                "Dato más frecuente"
                            ],
                            answerIndex: 1,
                            explain: "La media aritmética es la suma de los datos dividida entre el total de ellos."
                        },
                        {
                            topic: "Mediana",
                            q: "¿Qué es la mediana?",
                            options: [
                                "El valor promedio",
                                "El valor que divide los datos en dos partes iguales",
                                "El valor más frecuente",
                                "La diferencia entre máximo y mínimo"
                            ],
                            answerIndex: 1,
                            explain: "La mediana es el valor que divide una serie de datos en dos partes iguales (50% por debajo, 50% por arriba)."
                        },
                        {
                            topic: "Moda",
                            q: "¿Qué es la moda?",
                            options: [
                                "El valor promedio",
                                "El valor más frecuente",
                                "El valor central",
                                "El valor máximo"
                            ],
                            answerIndex: 1,
                            explain: "La moda es el valor del dato numérico más frecuente en un conjunto de datos."
                        },
                        {
                            topic: "Bimodal",
                            q: "¿Cuándo un conjunto es bimodal?",
                            options: [
                                "Cuando no hay moda",
                                "Cuando existen dos valores con mayor frecuencia",
                                "Cuando hay una moda",
                                "Cuando todos son iguales"
                            ],
                            answerIndex: 1,
                            explain: "Se dice que es bimodal cuando existen dos valores con mayor frecuencia."
                        },
                        {
                            topic: "Rango",
                            q: "¿Qué es el rango en estadística?",
                            options: [
                                "La suma de datos",
                                "La diferencia entre valor máximo y mínimo",
                                "El promedio",
                                "La desviación"
                            ],
                            answerIndex: 1,
                            explain: "El rango es la diferencia entre el valor más grande y el más pequeño del conjunto de datos."
                        },
                        {
                            topic: "Varianza",
                            q: "¿Qué mide la varianza?",
                            options: [
                                "La tendencia central",
                                "La dispersión de valores respecto a la media",
                                "La moda",
                                "El rango"
                            ],
                            answerIndex: 1,
                            explain: "La varianza mide la dispersión de los valores de una variable respecto a la media."
                        },
                        {
                            topic: "Desviación estándar",
                            q: "¿Cómo se obtiene la desviación estándar?",
                            options: [
                                "Sumando desviaciones",
                                "Como raíz cuadrada de la varianza",
                                "Dividiendo varianza entre n",
                                "Multiplicando varianza por 2"
                            ],
                            answerIndex: 1,
                            explain: "La desviación estándar se define como la raíz cuadrada de la varianza."
                        },
                        {
                            topic: "Ejemplo de media",
                            q: "¿Cuál es la media de las notas 3.2,3.1,2.4,4.0,3.5,3.0,3.5,3.8,4.2,4.0?",
                            options: [
                                "3.00",
                                "3.47",
                                "3.50",
                                "4.00"
                            ],
                            answerIndex: 1,
                            explain: "La suma es 34.7, dividida entre 10 da 3.47."
                        },
                        {
                            topic: "Ejemplo de varianza",
                            q: "¿Cuál es la varianza de 9,3,8,8,9,8,9,18?",
                            options: [
                                "9",
                                "15",
                                "18",
                                "20"
                            ],
                            answerIndex: 1,
                            explain: "La media es 9, la suma de cuadrados de desviaciones da 120, dividido entre 8 es 15."
                        }
                    ]
                }
            }
        }
    }
};

export default cultural2;