// ============================================
// TALLER DE CULTURA DIGITAL: CREACIÓN Y DIFUSIÓN DE CONTENIDO DIGITAL
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const tallerCulturaDigital = {
    id: "tallerCulturaDigital",
    nombre: "TALLER DE CULTURA DIGITAL: CREACIÓN Y DIFUSIÓN DE CONTENIDO DIGITAL",
    icono: "💻",
    descripcion: "Estudio de creación y difusión de contenido digital en redes sociales, tipos de contenido digital, tendencias actuales, herramientas de comunicación digital, gestión de redes sociales, tecnologías emergentes (IA, IoT, industria 4.0, ciberseguridad, ciencia de datos, robótica), realidad aumentada y realidad virtual.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: Creación y Difusión de Contenido Digital en Redes",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Creación y Difusión de Contenido Digital",
                    desc: "Comprensión de la creación y difusión de contenido digital en redes sociales, comunidades virtuales e identidades digitales.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Transformación digital",
                            q: "¿Qué caracteriza a la comunicación en la era digital?",
                            options: ["La lentitud y la limitación geográfica", "La instantaneidad y la globalidad", "La exclusividad y el costo elevado", "La comunicación unidireccional"],
                            answerIndex: 1,
                            explain: "En la era digital, la comunicación se caracteriza por la instantaneidad y la globalidad, transformando la forma en que interactuamos y construimos narrativas colectivas."
                        },
                        {
                            topic: "Contenido digital",
                            q: "¿Qué tipos de contenido digital se mencionan como herramientas para expresar ideas?",
                            options: ["Solo texto", "Imágenes y videos únicamente", "Textos concisos, imágenes, videos, podcasts y blogs", "Solo podcasts"],
                            answerIndex: 2,
                            explain: "El contenido digital incluye textos concisos y llamativos, imágenes, videos, podcasts y blogs, que amplían las posibilidades creativas."
                        },
                        {
                            topic: "Proceso de producción digital",
                            q: "¿Qué implica la producción de contenido digital más allá de la simple creación?",
                            options: ["Solo publicar en una red social", "Un proceso estratégico que involucra selección de plataformas, definición de público objetivo, elección de lenguaje visual y promoción", "Únicamente editar videos", "Solo escribir textos"],
                            answerIndex: 1,
                            explain: "La producción de contenido digital implica un proceso estratégico que incluye selección de plataformas adecuadas, definición de público objetivo, elección de lenguaje visual coherente y promoción del contenido."
                        },
                        {
                            topic: "Comunidades virtuales",
                            q: "¿Qué han permitido las redes sociales en torno a intereses comunes?",
                            options: ["El aislamiento de los usuarios", "La formación de comunidades virtuales", "La eliminación de la interacción social", "La comunicación unidireccional"],
                            answerIndex: 1,
                            explain: "La difusión de contenido en redes sociales ha dado lugar a la formación de comunidades virtuales en torno a intereses comunes, donde los usuarios interactúan a través de comentarios, me gusta y compartidos."
                        },
                        {
                            topic: "Identidad digital",
                            q: "¿Cómo influyen las redes sociales en la construcción de identidades digitales?",
                            options: ["No tienen influencia", "Los usuarios crean y proyectan una imagen de sí mismos a través del contenido que comparten", "Solo afecta a las empresas", "Es irrelevante para los usuarios"],
                            answerIndex: 1,
                            explain: "Los usuarios crean y proyectan una imagen de sí mismos a través del contenido que comparten, seleccionando cuidadosamente lo que quieren mostrar al mundo."
                        },
                        {
                            topic: "Interacción en redes",
                            q: "¿Cómo interactúan los usuarios con el contenido en redes sociales?",
                            options: ["Solo leyendo pasivamente", "A través de comentarios, me gusta y compartidos", "Únicamente compartiendo", "Solo dando me gusta"],
                            answerIndex: 1,
                            explain: "Los usuarios interactúan a través de comentarios, me gusta y compartidos, generando conversaciones y debates que enriquecen el contenido original."
                        },
                        {
                            topic: "Personalización de contenido",
                            q: "¿Qué permiten las redes sociales en cuanto a la experiencia del usuario?",
                            options: ["Contenido igual para todos", "La personalización de la experiencia del usuario, adaptando contenidos a sus intereses y preferencias", "Contenido limitado", "Solo contenido patrocinado"],
                            answerIndex: 1,
                            explain: "Las redes sociales permiten la personalización de la experiencia del usuario, adaptando los contenidos a sus intereses y preferencias."
                        },
                        {
                            topic: "Impacto de la identidad digital",
                            q: "¿En qué ámbitos puede tener impacto la construcción de identidad en línea?",
                            options: ["Solo en lo personal", "En las relaciones sociales, profesionales y personales", "Únicamente en lo profesional", "Solo en lo académico"],
                            answerIndex: 1,
                            explain: "La construcción de identidad en línea puede tener un impacto significativo en las relaciones sociales, profesionales y personales."
                        },
                        {
                            topic: "Revolución digital",
                            q: "¿Qué han revolucionado las redes sociales en la comunicación contemporánea?",
                            options: ["Solo la forma de enviar mensajes", "La forma en que nos comunicamos, conectamos y construimos conocimiento", "Únicamente la publicidad", "Solo el entretenimiento"],
                            answerIndex: 1,
                            explain: "La creación y difusión de contenido digital en redes sociales ha revolucionado la forma en que nos comunicamos, conectamos y construimos conocimiento."
                        },
                        {
                            topic: "Implicaciones éticas",
                            q: "¿Qué aspectos se deben discutir sobre la producción y consumo de contenido en línea?",
                            options: ["Solo aspectos técnicos", "Las implicaciones éticas y sociales, así como las oportunidades y desafíos", "Únicamente los costos", "Solo la popularidad"],
                            answerIndex: 1,
                            explain: "Es importante discutir las implicaciones éticas y sociales de la producción y consumo de contenido en línea, así como las oportunidades y desafíos que plantea."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Tipos de Contenido Digital",
                    desc: "Identificación de tipos de contenido digital: texto, imagen, audio, video, infografías, presentaciones, realidad virtual/aumentada y animaciones.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Contenido de texto",
                            q: "¿Cuál es una característica del contenido de texto digital?",
                            options: ["Requiere mucho tiempo de carga", "Es versátil y se adapta a diferentes formatos como blogs, artículos y redes sociales", "No es personalizable", "No es compatible con SEO"],
                            answerIndex: 1,
                            explain: "El contenido de texto es versátil, se adapta a diferentes formatos, es directo, puede ser optimizado para motores de búsqueda (SEO friendly) y personalizable."
                        },
                        {
                            topic: "Contenido de imagen",
                            q: "¿Qué característica principal tienen las imágenes en el contenido digital?",
                            options: ["Son difíciles de crear", "Captan la atención del usuario rápidamente y transmiten sensaciones y emociones", "No son informativas", "Son poco atractivas"],
                            answerIndex: 1,
                            explain: "Las imágenes son atractivas, captan la atención rápidamente, transmiten emociones, complementan el texto y son versátiles."
                        },
                        {
                            topic: "Contenido de audio",
                            q: "¿Qué característica hace especial al contenido de audio digital?",
                            options: ["Requiere atención visual exclusiva", "Crea una conexión más personal con la audiencia y se puede consumir en cualquier momento y lugar", "No permite multitarea", "Es poco accesible"],
                            answerIndex: 1,
                            explain: "El contenido de audio es intimista, crea una conexión personal con la audiencia, es accesible, permite multitarea y es versátil (podcasts, audiolibros, música)."
                        },
                        {
                            topic: "Contenido de video",
                            q: "¿Por qué el video es un formato de contenido impactante?",
                            options: ["Por su larga duración", "Porque combina imagen y sonido para crear una experiencia inmersiva", "Porque no requiere edición", "Porque es económico"],
                            answerIndex: 1,
                            explain: "El video es impactante porque combina imagen y sonido para crear una experiencia inmersiva, genera conexiones emocionales profundas, permite explicar conceptos complejos de forma visual y es versátil."
                        },
                        {
                            topic: "Infografías",
                            q: "¿Qué son las infografías digitales?",
                            options: ["Videos largos", "Combinación de elementos visuales y textuales para representar datos de forma clara y atractiva", "Solo texto", "Solo imágenes"],
                            answerIndex: 1,
                            explain: "Las infografías combinan elementos visuales y textuales para representar datos de forma clara y atractiva."
                        },
                        {
                            topic: "Realidad virtual y aumentada",
                            q: "¿Qué tipo de experiencia ofrecen la realidad virtual (VR) y la realidad aumentada (AR)?",
                            options: ["Experiencias de solo lectura", "Experiencias inmersivas que permiten interactuar con el contenido de forma más realista", "Experiencias de solo audio", "Experiencias de solo texto"],
                            answerIndex: 1,
                            explain: "La realidad virtual y aumentada ofrecen experiencias inmersivas que permiten interactuar con el contenido de forma más realista."
                        },
                        {
                            topic: "Animaciones",
                            q: "¿Para qué pueden ser utilizadas las animaciones digitales?",
                            options: ["Solo para entretenimiento", "Para explicar conceptos complejos o crear experiencias interactivas", "Solo para publicidad", "Solo para educación"],
                            answerIndex: 1,
                            explain: "Las animaciones son creaciones visuales en movimiento que pueden ser utilizadas para explicar conceptos complejos o crear experiencias interactivas."
                        },
                        {
                            topic: "Factores para elegir formato",
                            q: "¿De qué depende la elección del formato de contenido?",
                            options: ["Solo del presupuesto", "Del objetivo, público objetivo, plataforma y recursos disponibles", "Solo de la plataforma", "Solo del gusto personal"],
                            answerIndex: 1,
                            explain: "La elección del formato de contenido depende del objetivo, el público objetivo, la plataforma y los recursos disponibles."
                        },
                        {
                            topic: "Presentaciones digitales",
                            q: "¿Qué son las presentaciones como formato de contenido digital?",
                            options: ["Videos sin edición", "Formatos digitales para comunicar ideas de forma estructurada (slides, videos explicativos)", "Solo documentos escritos", "Solo imágenes"],
                            answerIndex: 1,
                            explain: "Las presentaciones son formatos digitales para comunicar ideas de forma estructurada, como slides o videos explicativos."
                        },
                        {
                            topic: "Estrategia de comunicación digital",
                            q: "¿Qué permite la combinación efectiva de diferentes tipos de contenido?",
                            options: ["Confundir a la audiencia", "Crear una estrategia de comunicación digital sólida y eficaz", "Aumentar costos innecesariamente", "Reducir el alcance"],
                            answerIndex: 1,
                            explain: "Al combinar de manera efectiva diferentes tipos de contenido, se puede crear una estrategia de comunicación digital sólida y eficaz para alcanzar objetivos."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Tendencias en Creación de Contenido",
                    desc: "Identificación de tendencias actuales en creación de contenido para redes sociales y estrategias de engagement.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Contenido breve",
                            q: "¿Qué tipo de contenido predomina actualmente en redes sociales como Reels y TikTok?",
                            options: ["Contenido extenso", "Contenido breve y con música y efectos", "Contenido solo de texto", "Contenido exclusivamente educativo"],
                            answerIndex: 1,
                            explain: "Actualmente predomina el contenido breve como Reels y TikTok, donde la clave es comunicar ideas de forma rápida e impactante con música y efectos."
                        },
                        {
                            topic: "Interacción en tiempo real",
                            q: "¿Qué permiten las transmisiones en vivo ('lives') en redes sociales?",
                            options: ["Contenido pregrabado", "Conectar con la audiencia de manera instantánea, generando mayor engagement", "Solo transmisiones de audio", "Contenido exclusivo para empresas"],
                            answerIndex: 1,
                            explain: "Las transmisiones en vivo ('lives') permiten conectar con la audiencia de manera instantánea, generando mayor engagement."
                        },
                        {
                            topic: "Formatos verticales",
                            q: "¿Por qué son importantes los formatos verticales en la creación de contenido actual?",
                            options: ["Porque son más baratos", "Porque están optimizados para smartphones y permiten una experiencia de usuario fluida", "Porque son tradicionales", "Porque requieren menos edición"],
                            answerIndex: 1,
                            explain: "Los formatos verticales son esenciales porque están optimizados para smartphones, permitiendo una experiencia de usuario fluida."
                        },
                        {
                            topic: "Edutainment",
                            q: "¿Qué es el 'edutainment' en la creación de contenido digital?",
                            options: ["Solo entretenimiento", "Videos cortos educativos que combinan aprendizaje y diversión", "Solo educación formal", "Contenido exclusivo para niños"],
                            answerIndex: 1,
                            explain: "El 'edutainment' se refiere a videos cortos educativos o de 'entretenimiento educativo' que combinan aprendizaje y diversión, captando la atención de forma natural."
                        },
                        {
                            topic: "Estrategias de engagement",
                            q: "¿Qué elementos ayudan a ampliar el alcance del contenido en redes sociales?",
                            options: ["Solo publicar contenido", "Hashtags, menciones y participación en tendencias virales", "Solo imágenes", "Solo videos"],
                            answerIndex: 1,
                            explain: "El uso estratégico de hashtags relevantes, menciones a otras cuentas y la participación en trends virales ayudan a ampliar el alcance del contenido."
                        },
                        {
                            topic: "Colaboración con influencers",
                            q: "¿Qué beneficio aporta colaborar con influencers?",
                            options: ["Aumentar costos", "Aumentar la visibilidad y conectar con una audiencia específica", "Reducir el alcance", "Limitar la creatividad"],
                            answerIndex: 1,
                            explain: "Asociarse con influencers relevantes en el nicho de la marca o contenido puede aumentar la visibilidad y conectar con una audiencia específica."
                        },
                        {
                            topic: "Objetivos del contenido",
                            q: "¿Qué debe buscar el contenido para generar valor y fomentar la interacción?",
                            options: ["Solo vender", "Inspirar, entretener o educar al público objetivo", "Solo informar", "Solo entretener"],
                            answerIndex: 1,
                            explain: "El contenido debe buscar inspirar, entretener o educar al público objetivo, generando valor y fomentando la interacción."
                        },
                        {
                            topic: "Claves para construir relaciones",
                            q: "¿Qué cualidades son clave para construir relaciones sólidas con la audiencia?",
                            options: ["Perfección y formalidad", "Autenticidad y transparencia", "Distancia y formalidad", "Exclusividad y secreto"],
                            answerIndex: 1,
                            explain: "La autenticidad y la transparencia son claves para construir relaciones sólidas con la audiencia."
                        },
                        {
                            topic: "Elementos esenciales para presencia en redes",
                            q: "¿Qué aspectos son esenciales para mantener una presencia atractiva en redes sociales?",
                            options: ["Publicaciones esporádicas", "Calidad del contenido y consistencia en las publicaciones", "Solo cantidad de publicaciones", "Solo diseño"],
                            answerIndex: 1,
                            explain: "La calidad del contenido y la consistencia en las publicaciones son esenciales para mantener una presencia atractiva en las redes sociales."
                        },
                        {
                            topic: "Conocimiento de la audiencia",
                            q: "¿Por qué es fundamental conocer a la audiencia?",
                            options: ["Para ignorar sus necesidades", "Para crear contenido que resuene con sus intereses, necesidades y hábitos", "Para imponer contenido", "Para reducir esfuerzos"],
                            answerIndex: 1,
                            explain: "Es fundamental comprender los intereses, necesidades y hábitos de la audiencia para crear contenido que resuene con ellos."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Herramientas de Comunicación Digital para la Difusión de Información",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Herramientas de Comunicación Digital",
                    desc: "Identificación de tipos y características de herramientas de comunicación digital para difusión de información.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Herramientas de comunicación digital",
                            q: "¿Qué han permitido las herramientas de comunicación digital?",
                            options: ["Limitar la información", "Revolucionar la forma en que compartimos conocimientos, experiencias y opiniones", "Reducir la colaboración", "Aislar a los usuarios"],
                            answerIndex: 1,
                            explain: "Las herramientas de comunicación digital han revolucionado la manera en que compartimos conocimientos, experiencias y opiniones, transformando la forma en que nos conectamos y colaboramos."
                        },
                        {
                            topic: "Redes sociales",
                            q: "¿Qué permiten las plataformas como Facebook, Twitter, Instagram y LinkedIn?",
                            options: ["Solo mensajería privada", "Compartir contenido, interactuar con otros usuarios y construir comunidades en línea", "Solo videollamadas", "Solo correos electrónicos"],
                            answerIndex: 1,
                            explain: "Las redes sociales permiten compartir contenido, interactuar con otros usuarios y construir comunidades en línea."
                        },
                        {
                            topic: "Servicios de mensajería instantánea",
                            q: "¿Qué facilitan aplicaciones como WhatsApp, Telegram y Messenger?",
                            options: ["Solo llamadas telefónicas", "La comunicación en tiempo real a través de mensajes de texto, imágenes y videos", "Solo correos electrónicos", "Solo videoconferencias"],
                            answerIndex: 1,
                            explain: "Los servicios de mensajería instantánea facilitan la comunicación en tiempo real a través de mensajes de texto, imágenes y videos."
                        },
                        {
                            topic: "Alcance de herramientas digitales",
                            q: "¿Qué característica de las herramientas de comunicación digital se refiere al número de personas a las que se puede llegar?",
                            options: ["Interactividad", "Alcance", "Personalización", "Funcionalidades"],
                            answerIndex: 1,
                            explain: "El alcance se refiere al número de personas a las que se puede llegar con una determinada herramienta de comunicación digital."
                        },
                        {
                            topic: "Interactividad digital",
                            q: "¿Qué significa la interactividad en herramientas de comunicación digital?",
                            options: ["La imposibilidad de responder", "La posibilidad de establecer comunicación bidireccional con la audiencia", "La comunicación unidireccional", "La falta de respuesta"],
                            answerIndex: 1,
                            explain: "La interactividad es la posibilidad de establecer comunicación bidireccional con la audiencia."
                        },
                        {
                            topic: "Personalización digital",
                            q: "¿Qué opciones brinda la personalización en herramientas digitales?",
                            options: ["Contenido único para todos", "Opciones para adaptar la comunicación a las necesidades y preferencias del usuario", "Sin opciones de ajuste", "Contenido fijo"],
                            answerIndex: 1,
                            explain: "La personalización ofrece opciones para adaptar la comunicación a las necesidades y preferencias del usuario."
                        },
                        {
                            topic: "Foros y comunidades en línea",
                            q: "¿Qué son los foros y comunidades en línea?",
                            options: ["Plataformas de mensajería", "Espacios de discusión donde los usuarios pueden intercambiar ideas y conocimientos sobre temas específicos", "Redes sociales generales", "Plataformas de video"],
                            answerIndex: 1,
                            explain: "Los foros y comunidades en línea son espacios de discusión donde los usuarios pueden intercambiar ideas y conocimientos sobre temas específicos."
                        },
                        {
                            topic: "Herramientas de colaboración en tiempo real",
                            q: "¿Qué permiten plataformas como Google Drive, Microsoft Teams y Trello?",
                            options: ["Comunicación asíncrona", "Trabajar en equipo de forma eficiente en tiempo real", "Solo almacenamiento de archivos", "Solo videoconferencias"],
                            answerIndex: 1,
                            explain: "Las herramientas de colaboración en tiempo real como Google Drive, Microsoft Teams y Trello permiten trabajar en equipo de forma eficiente."
                        },
                        {
                            topic: "Estrategias de difusión",
                            q: "¿Cuál es un paso importante en las estrategias de difusión de información?",
                            options: ["Ignorar al público objetivo", "Definición del público objetivo y selección de herramientas adecuadas", "Publicar sin planificación", "No medir resultados"],
                            answerIndex: 1,
                            explain: "Es importante definir el público objetivo y seleccionar las herramientas que mejor se adapten a él y al mensaje a transmitir."
                        },
                        {
                            topic: "Medición de resultados",
                            q: "¿Qué permite evaluar el impacto de la difusión del contenido?",
                            options: ["Solo el número de publicaciones", "La medición de resultados para realizar ajustes si es necesario", "Solo los comentarios", "Solo los me gusta"],
                            answerIndex: 1,
                            explain: "La medición de resultados permite evaluar el impacto de la difusión del contenido y realizar ajustes si es necesario."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Gestión de Cuentas en Redes Sociales",
                    desc: "Identificación de herramientas para gestionar cuentas en redes sociales: Hootsuite, Buffer, Sprout Social, plataformas analíticas y monitoreo.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Programas de programación de contenido",
                            q: "¿Qué permiten herramientas como Hootsuite, Buffer y Sprout Social?",
                            options: ["Solo publicar manualmente", "Planificar y programar publicaciones en múltiples redes sociales con anticipación", "Solo analizar datos", "Solo enviar mensajes"],
                            answerIndex: 1,
                            explain: "Estas herramientas permiten planificar y programar publicaciones en múltiples redes sociales con anticipación, facilitando la gestión del tiempo y garantizando una presencia consistente."
                        },
                        {
                            topic: "Plataformas analíticas",
                            q: "¿Qué información brindan plataformas como Google Analytics, Facebook Insights e Instagram Insights?",
                            options: ["Solo el número de seguidores", "Métricas detalladas sobre alcance, impresiones, clics y otros indicadores clave", "Solo los comentarios", "Solo las publicaciones programadas"],
                            answerIndex: 1,
                            explain: "Estas plataformas ofrecen métricas detalladas sobre alcance, impresiones, clics y otros indicadores clave del rendimiento de las publicaciones."
                        },
                        {
                            topic: "Monitoreo de menciones",
                            q: "¿Para qué sirven las herramientas de monitoreo de menciones?",
                            options: ["Para ignorar la audiencia", "Para realizar seguimiento de menciones de la marca o palabras clave relevantes", "Solo para publicar contenido", "Solo para enviar mensajes"],
                            answerIndex: 1,
                            explain: "Estas herramientas permiten realizar un seguimiento de las menciones de nuestra marca o de palabras clave relevantes en las redes sociales."
                        },
                        {
                            topic: "Interfaz intuitiva",
                            q: "¿Por qué es importante una interfaz intuitiva en herramientas de gestión de redes sociales?",
                            options: ["Para complicar el uso", "Para que cualquier usuario pueda aprovechar al máximo las herramientas", "Para limitar funciones", "Para aumentar costos"],
                            answerIndex: 1,
                            explain: "Una interfaz sencilla y fácil de usar es fundamental para que cualquier usuario pueda aprovechar al máximo las herramientas de gestión de redes sociales."
                        },
                        {
                            topic: "Funcionalidades de análisis",
                            q: "¿Qué ofrecen las mejores herramientas de gestión de redes sociales?",
                            options: ["Solo programación", "Una amplia gama de métricas y reportes para evaluar el rendimiento", "Solo monitoreo", "Solo publicación"],
                            answerIndex: 1,
                            explain: "Las mejores herramientas ofrecen una amplia gama de métricas y reportes que permiten evaluar el rendimiento de las estrategias y tomar decisiones basadas en datos."
                        },
                        {
                            topic: "Capacidad de colaboración",
                            q: "¿Para qué es esencial la capacidad de colaboración en herramientas de gestión?",
                            options: ["Para usuarios individuales", "Para equipos grandes o agencias que gestionan múltiples cuentas", "Solo para empresas pequeñas", "No es importante"],
                            answerIndex: 1,
                            explain: "Para equipos grandes o agencias, la capacidad de colaborar en la gestión de múltiples cuentas es esencial."
                        },
                        {
                            topic: "Respuesta activa",
                            q: "¿Qué implica la respuesta activa en la gestión de redes sociales?",
                            options: ["Ignorar comentarios", "Responder de manera oportuna y personalizada a los comentarios y mensajes", "Responder automáticamente", "No responder nunca"],
                            answerIndex: 1,
                            explain: "Responder de manera oportuna y personalizada a los comentarios y mensajes de los usuarios es clave para construir relaciones sólidas con nuestra audiencia."
                        },
                        {
                            topic: "Consistencia en publicación",
                            q: "¿Qué ayuda a mantener un calendario editorial constante?",
                            options: ["Publicar sin planificación", "Aumentar el engagement y la visibilidad de la marca", "Reducir el alcance", "Disminuir la interacción"],
                            answerIndex: 1,
                            explain: "Mantener un calendario editorial constante y publicar contenido de calidad de forma regular ayuda a aumentar el engagement y la visibilidad de nuestra marca."
                        },
                        {
                            topic: "Diversificación de contenido",
                            q: "¿Por qué es importante diversificar el contenido?",
                            options: ["Para aburrir a la audiencia", "Para mantener a la audiencia interesada ofreciendo variedad de contenidos", "Para reducir el trabajo", "Para enfocarse en un solo formato"],
                            answerIndex: 1,
                            explain: "Para mantener a la audiencia interesada, es importante ofrecer una variedad de contenidos, como imágenes, videos, infografías y artículos de blog."
                        },
                        {
                            topic: "Análisis continuo",
                            q: "¿Qué permite el análisis continuo de datos en redes sociales?",
                            options: ["Ignorar resultados", "Identificar qué funciona y qué no, y ajustar estrategias", "Mantener estrategias sin cambios", "Reducir la efectividad"],
                            answerIndex: 1,
                            explain: "El análisis continuo de datos permite identificar qué funciona y qué no, y ajustar las estrategias en consecuencia."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Programación y Monitoreo de Publicaciones",
                    desc: "Identificación de herramientas para programar y monitorear publicaciones, y estrategias de difusión.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Comunicación directa",
                            q: "¿Qué son las herramientas de comunicación directa?",
                            options: ["Permiten compartir información masiva", "Permiten a las personas comunicarse entre sí en tiempo real", "Solo para redes sociales", "Solo para blogs"],
                            answerIndex: 1,
                            explain: "Las herramientas de comunicación directa permiten a las personas comunicarse entre sí en tiempo real, como el correo electrónico, mensajería instantánea, videoconferencias y redes sociales."
                        },
                        {
                            topic: "Comunicación continua",
                            q: "¿Qué permiten las herramientas de comunicación continua?",
                            options: ["Comunicación privada", "Compartir información de forma masiva y global", "Solo mensajes de texto", "Solo llamadas"],
                            answerIndex: 1,
                            explain: "Las herramientas de comunicación continua permiten compartir información de forma masiva y global, como plataformas de streaming, blogs, podcasts y redes sociales."
                        },
                        {
                            topic: "Accesibilidad digital",
                            q: "¿Qué característica de las herramientas digitales permite acceder desde cualquier lugar con Internet?",
                            options: ["Inmediatez", "Accesibilidad", "Coste", "Complejidad"],
                            answerIndex: 1,
                            explain: "La accesibilidad permite que las herramientas de comunicación digital sean accesibles desde cualquier lugar con una conexión a Internet."
                        },
                        {
                            topic: "Inmediatez digital",
                            q: "¿Qué permite la inmediatez en las herramientas digitales?",
                            options: ["Compartir información con retraso", "Compartir información de forma inmediata", "Comunicación asíncrona", "Respuestas tardías"],
                            answerIndex: 1,
                            explain: "La inmediatez permite compartir información de forma inmediata a través de las herramientas de comunicación digital."
                        },
                        {
                            topic: "Herramientas de programación",
                            q: "¿Para qué sirven herramientas como Hootsuite, Buffer, Later, Sendible y Sprout Social?",
                            options: ["Solo para crear contenido", "Para programar y monitorear publicaciones en herramientas de comunicación digital", "Solo para analizar datos", "Solo para enviar mensajes"],
                            answerIndex: 1,
                            explain: "Estas herramientas permiten programar y monitorear publicaciones en herramientas de comunicación digital, ahorrando tiempo y esfuerzo."
                        },
                        {
                            topic: "Programación de publicaciones",
                            q: "¿Qué ventaja tiene programar publicaciones?",
                            options: ["Publicar al azar", "Garantizar que las publicaciones se hagan en el momento óptimo", "Publicar sin planificación", "Reducir la calidad"],
                            answerIndex: 1,
                            explain: "Programar publicaciones permite garantizar que las publicaciones se hagan en el momento óptimo para alcanzar a la audiencia."
                        },
                        {
                            topic: "Monitoreo de publicaciones",
                            q: "¿Por qué es importante monitorear las publicaciones?",
                            options: ["Para ignorar resultados", "Para conocer su alcance y repercusión", "Para reducir esfuerzos", "Para evitar comentarios"],
                            answerIndex: 1,
                            explain: "Monitorear las publicaciones es importante para conocer su alcance y repercusión en la audiencia."
                        },
                        {
                            topic: "Definición de objetivos",
                            q: "¿Qué se debe definir antes de comenzar a difundir información?",
                            options: ["Solo el presupuesto", "Los objetivos que se persiguen (informar, educar, entretener, vender, etc.)", "Solo la plataforma", "Solo el diseño"],
                            answerIndex: 1,
                            explain: "Antes de comenzar a difundir información, es importante definir los objetivos que se persiguen: informar, educar, entretener, vender, etc."
                        },
                        {
                            topic: "Contenido de calidad",
                            q: "¿Cómo debe ser el contenido para una difusión efectiva?",
                            options: ["Largo y complejo", "Relevante, interesante y atractivo para el público objetivo", "Aburrido y genérico", "Solo textual"],
                            answerIndex: 1,
                            explain: "El contenido debe ser relevante, interesante y atractivo para el público objetivo, para lograr una difusión efectiva."
                        },
                        {
                            topic: "Identificación del público",
                            q: "¿Qué aspecto es clave para dirigir la información adecuadamente?",
                            options: ["Ignorar sus características", "Identificar a las personas a las que se quiere dirigir la información (edad, intereses, hábitos)", "Dirigir a todos por igual", "No segmentar"],
                            answerIndex: 1,
                            explain: "Es importante identificar a las personas a las que se quiere dirigir la información, considerando su edad, intereses, hábitos de consumo, etc."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Tecnologías Emergentes y sus Aplicaciones",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Tecnologías Emergentes y Realidad Aumentada/Virtual",
                    desc: "Comprensión de TIC, tecnologías emergentes (IA, IoT, industria 4.0, ciberseguridad, ciencia de datos, robótica), realidad aumentada y realidad virtual.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "TIC",
                            q: "¿Qué son las Tecnologías de la Información y la Comunicación (TIC)?",
                            options: ["Solo computadoras", "Un conjunto de herramientas que permiten la creación, almacenamiento, intercambio y acceso a la información a través de medios electrónicos", "Solo internet", "Solo teléfonos móviles"],
                            answerIndex: 1,
                            explain: "Las TIC son un conjunto de herramientas que permiten la creación, almacenamiento, intercambio y acceso a la información a través de medios electrónicos."
                        },
                        {
                            topic: "Aplicaciones de TIC en educación",
                            q: "¿Cómo pueden utilizarse las TIC en el ámbito educativo?",
                            options: ["Solo para evaluar", "Para apoyar el aprendizaje, crear contenidos educativos personalizados, facilitar colaboración y proporcionar acceso a recursos en línea", "Solo para administración", "Solo para comunicación"],
                            answerIndex: 1,
                            explain: "Las TIC pueden utilizarse para apoyar el aprendizaje, crear contenidos educativos personalizados, facilitar la colaboración y proporcionar acceso a recursos educativos en línea."
                        },
                        {
                            topic: "Realidad aumentada (RA)",
                            q: "¿Qué es la realidad aumentada (RA)?",
                            options: ["Tecnología que reemplaza la realidad por un entorno digital", "Tecnología que superpone información digital (texto, imagen, video, audio) a la realidad", "Solo para videojuegos", "Solo para educación"],
                            answerIndex: 1,
                            explain: "La realidad aumentada es una tecnología que superpone información digital (texto, imagen, video o audio) a la realidad, creando experiencias más inmersivas."
                        },
                        {
                            topic: "Realidad virtual (RV)",
                            q: "¿Qué crea la realidad virtual (RV)?",
                            options: ["Contenido impreso", "Un entorno digital en el que el usuario se siente inmerso", "Solo imágenes estáticas", "Solo sonido envolvente"],
                            answerIndex: 1,
                            explain: "La realidad virtual crea un entorno digital en el que el usuario se siente inmerso, ya sea una simulación de un lugar real o un lugar completamente imaginario."
                        },
                        {
                            topic: "Diferencia RA vs RV",
                            q: "¿Cuál es la principal diferencia entre realidad aumentada y realidad virtual?",
                            options: ["No hay diferencia", "La RA complementa la realidad; la RV reemplaza la realidad por un entorno digital", "La RV complementa; la RA reemplaza", "Ambas reemplazan la realidad"],
                            answerIndex: 1,
                            explain: "La principal diferencia es que la realidad aumentada no reemplaza la realidad, sino que la complementa, mientras que la realidad virtual reemplaza la realidad por un entorno digital."
                        },
                        {
                            topic: "Dispositivos de RA",
                            q: "¿Con qué dispositivos se suele utilizar la realidad aumentada?",
                            options: ["Cascos de realidad virtual", "Dispositivos portátiles como teléfonos inteligentes o tabletas", "Computadoras de escritorio", "Consolas de videojuegos"],
                            answerIndex: 1,
                            explain: "La realidad aumentada se suele utilizar con dispositivos portátiles, como teléfonos inteligentes o tabletas."
                        },
                        {
                            topic: "Dispositivos de RV",
                            q: "¿Con qué dispositivos se suele utilizar la realidad virtual?",
                            options: ["Teléfonos inteligentes", "Dispositivos de realidad virtual como cascos o gafas", "Tabletas", "Computadoras portátiles"],
                            answerIndex: 1,
                            explain: "La realidad virtual se suele utilizar con dispositivos de realidad virtual, como cascos o gafas."
                        },
                        {
                            topic: "Aplicaciones de RA y RV en educación",
                            q: "¿Cómo pueden utilizarse RA y RV en educación?",
                            options: ["Solo para entretenimiento", "Para mejorar el aprendizaje a través de gamificación, experiencias inmersivas y exploración virtual de lugares", "Solo para evaluación", "Solo para administración"],
                            answerIndex: 1,
                            explain: "En educación, RA y RV se utilizan para mejorar el aprendizaje a través de la gamificación, experiencias inmersivas y ofrecer experiencias que no serían posibles en el mundo real."
                        },
                        {
                            topic: "Ciberseguridad",
                            q: "¿Qué es la ciberseguridad?",
                            options: ["La creación de virus", "La protección de sistemas informáticos y redes contra ataques cibernéticos", "El desarrollo de software", "La administración de redes"],
                            answerIndex: 1,
                            explain: "La ciberseguridad es la protección de sistemas informáticos y redes contra ataques cibernéticos, un área de creciente importancia."
                        },
                        {
                            topic: "Ciencia de datos",
                            q: "¿Qué estudia la ciencia de datos?",
                            options: ["Solo programación", "El estudio de los datos para extraer conocimiento", "Solo estadística", "Solo inteligencia artificial"],
                            answerIndex: 1,
                            explain: "La ciencia de datos es el estudio de los datos para extraer conocimiento, con aplicaciones en análisis, IA, ciberseguridad, medicina y finanzas."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Inteligencia Artificial",
                    desc: "Comprensión de inteligencia artificial, sus ramas (débil y fuerte), aplicaciones y ejemplos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Inteligencia Artificial (IA)",
                            q: "¿Qué es la Inteligencia Artificial (IA)?",
                            options: ["La capacidad de una máquina para almacenar datos", "La capacidad de una máquina para realizar tareas que normalmente se consideran propias de los seres humanos", "Solo robots", "Solo software"],
                            answerIndex: 1,
                            explain: "La IA es la capacidad de una máquina para realizar tareas que normalmente se consideran propias de los seres humanos, como el aprendizaje, la resolución de problemas y la toma de decisiones."
                        },
                        {
                            topic: "IA débil",
                            q: "¿Qué es la inteligencia artificial débil?",
                            options: ["IA que no funciona", "Capacidad de una máquina para realizar tareas específicas, como jugar al ajedrez o traducir idiomas", "IA con conciencia", "IA superior a la humana"],
                            answerIndex: 1,
                            explain: "La IA débil es la capacidad de una máquina para realizar tareas específicas, como jugar al ajedrez o traducir idiomas."
                        },
                        {
                            topic: "IA fuerte",
                            q: "¿Qué busca lograr la inteligencia artificial fuerte?",
                            options: ["Realizar tareas simples", "Tener una inteligencia similar a la humana: aprender, razonar y tomar decisiones de forma autónoma", "Solo almacenar datos", "Solo procesar información"],
                            answerIndex: 1,
                            explain: "La IA fuerte busca lograr una inteligencia similar a la humana, es decir, la capacidad de aprender, razonar y tomar decisiones de forma autónoma."
                        },
                        {
                            topic: "Aplicaciones de IA en medicina",
                            q: "¿Cómo se utiliza la IA en la medicina?",
                            options: ["Solo para administración", "Para desarrollar nuevos tratamientos médicos, diagnosticar enfermedades y personalizar el tratamiento de pacientes", "Solo para facturación", "Solo para citas"],
                            answerIndex: 1,
                            explain: "En medicina, la IA se utiliza para desarrollar nuevos tratamientos médicos, diagnosticar enfermedades y personalizar el tratamiento de los pacientes."
                        },
                        {
                            topic: "Aplicaciones de IA en industria",
                            q: "¿Para qué se utiliza la IA en la industria?",
                            options: ["Solo para marketing", "Para automatizar tareas, mejorar la eficiencia y optimizar los procesos", "Solo para recursos humanos", "Solo para ventas"],
                            answerIndex: 1,
                            explain: "En la industria, la IA se utiliza para automatizar tareas, mejorar la eficiencia y optimizar los procesos."
                        },
                        {
                            topic: "Asistentes virtuales",
                            q: "¿Qué son Siri y Alexa como ejemplos de IA?",
                            options: ["Videojuegos", "Asistentes virtuales que pueden responder a preguntas y realizar tareas a petición del usuario", "Sistemas operativos", "Aplicaciones de edición"],
                            answerIndex: 1,
                            explain: "Siri y Alexa son ejemplos de asistentes virtuales, sistemas de IA que pueden responder a preguntas y realizar tareas a petición del usuario."
                        },
                        {
                            topic: "Reconocimiento facial",
                            q: "¿Qué utilizan los sistemas de reconocimiento facial?",
                            options: ["Huellas dactilares", "IA para identificar a personas en función de sus características faciales", "Códigos de barras", "Contraseñas"],
                            answerIndex: 1,
                            explain: "Los sistemas de reconocimiento facial utilizan IA para identificar a personas en función de sus características faciales."
                        },
                        {
                            topic: "Aplicaciones de IA en educación",
                            q: "¿Cómo ayuda la IA en la educación?",
                            options: ["Reemplazando a los maestros", "Personalizando el aprendizaje, haciéndolo más atractivo y ayudando a estudiantes con dificultades", "Solo para calificar", "Solo para tomar asistencia"],
                            answerIndex: 1,
                            explain: "En educación, la IA se utiliza para personalizar el aprendizaje, hacerlo más atractivo y ayudar a las y los aprendientes con dificultades de aprendizaje."
                        },
                        {
                            topic: "Aplicaciones de IA en entretenimiento",
                            q: "¿Para qué se utiliza la IA en el entretenimiento?",
                            options: ["Solo para publicidad", "Para crear juegos más realistas, personalizar la experiencia del usuario y generar contenido creativo", "Solo para efectos especiales", "Solo para sonido"],
                            answerIndex: 1,
                            explain: "En el entretenimiento, la IA se utiliza para crear juegos más realistas, personalizar la experiencia del usuario y generar contenido creativo."
                        },
                        {
                            topic: "Robots con IA",
                            q: "¿Qué pueden hacer los robots con IA?",
                            options: ["Solo tareas repetitivas", "Realizar tareas de forma autónoma en aplicaciones como industria, medicina y educación", "Solo moverse", "Solo hablar"],
                            answerIndex: 1,
                            explain: "Los robots con IA son máquinas que pueden realizar tareas de forma autónoma y se utilizan en una variedad de aplicaciones como la industria, la medicina y la educación."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Internet de las Cosas (IoT)",
                    desc: "Comprensión del concepto de Internet de las Cosas (IoT), dispositivos finales, nodos de red y aplicaciones.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "IoT concepto",
                            q: "¿Qué es el Internet de las Cosas (IoT)?",
                            options: ["Solo redes sociales", "Una red de dispositivos físicos conectados a Internet que pueden recopilar y compartir datos", "Solo computadoras", "Solo teléfonos móviles"],
                            answerIndex: 1,
                            explain: "El IoT es una red de dispositivos físicos conectados a Internet que pueden recopilar y compartir datos, desde un sensor pequeño hasta un vehículo."
                        },
                        {
                            topic: "Dispositivos finales IoT",
                            q: "¿Qué son los dispositivos finales en IoT?",
                            options: ["Los que conectan a Internet", "Los que recopilan y comparten datos (sensores, actuadores, dispositivos de consumo o industriales)", "Los routers", "Los servidores"],
                            answerIndex: 1,
                            explain: "Los dispositivos finales son los que recopilan y comparten datos. Pueden ser sensores, actuadores, dispositivos de consumo o industriales."
                        },
                        {
                            topic: "Nodos de red IoT",
                            q: "¿Qué función tienen los nodos de red en IoT?",
                            options: ["Recopilar datos", "Conectar los dispositivos finales a Internet (routers, conmutadores, gateways)", "Almacenar datos", "Procesar datos"],
                            answerIndex: 1,
                            explain: "Los nodos de red son los que conectan los dispositivos finales a Internet. Pueden ser routers, conmutadores o gateways."
                        },
                        {
                            topic: "Aplicaciones de IoT en industria",
                            q: "¿Cómo se utiliza el IoT en la industria?",
                            options: ["Solo para monitoreo", "Para automatizar procesos, mejorar la eficiencia y optimizar la producción", "Solo para control de calidad", "Solo para inventario"],
                            answerIndex: 1,
                            explain: "En la industria, el IoT se utiliza para automatizar procesos, mejorar la eficiencia y optimizar la producción."
                        },
                        {
                            topic: "IoT en salud",
                            q: "¿Qué aplicaciones tiene el IoT en el sector salud?",
                            options: ["Solo para citas médicas", "Para seguimiento de pacientes, tratamiento y prevención de enfermedades", "Solo para facturación", "Solo para historiales"],
                            answerIndex: 1,
                            explain: "En salud, el IoT se utiliza para el seguimiento de pacientes, tratamiento y prevención de enfermedades."
                        },
                        {
                            topic: "IoT en transporte",
                            q: "¿Cómo se aplica el IoT en el transporte?",
                            options: ["Solo en vehículos particulares", "Para gestión del tráfico, seguridad vial y eficiencia del transporte", "Solo en transporte público", "Solo en logística"],
                            answerIndex: 1,
                            explain: "En el transporte, el IoT se utiliza para gestión del tráfico, seguridad vial y eficiencia del transporte."
                        },
                        {
                            topic: "IoT en hogar",
                            q: "¿Qué áreas del hogar abarca el IoT?",
                            options: ["Solo entretenimiento", "Domótica, seguridad y confort", "Solo electrodomésticos", "Solo iluminación"],
                            answerIndex: 1,
                            explain: "En el hogar, el IoT se utiliza para domótica (automatización del hogar), seguridad y confort."
                        },
                        {
                            topic: "Basado en IoT",
                            q: "¿En qué principio se basa el IoT?",
                            options: ["En la desconexión", "En que los dispositivos físicos pueden conectarse a Internet y compartir datos", "En la centralización", "En la exclusividad"],
                            answerIndex: 1,
                            explain: "El IoT se basa en el principio de que los dispositivos físicos pueden conectarse a Internet y compartir datos para diversos propósitos."
                        },
                        {
                            topic: "Propósito de datos IoT",
                            q: "¿Para qué pueden utilizarse los datos recopilados por dispositivos IoT?",
                            options: ["Solo para almacenamiento", "Para seguimiento de actividad, control de procesos o toma de decisiones", "Solo para ventas", "Solo para investigación"],
                            answerIndex: 1,
                            explain: "Los datos recopilados por dispositivos IoT pueden utilizarse para seguimiento de actividad, control de procesos o toma de decisiones."
                        },
                        {
                            topic: "Impacto del IoT",
                            q: "¿Qué potencial tiene el IoT según el texto?",
                            options: ["Impacto limitado", "Un gran potencial de impacto en la sociedad, mejorando la eficiencia industrial y la atención médica personalizada", "Solo en industria", "Solo en hogares"],
                            answerIndex: 1,
                            explain: "El IoT es una tecnología emergente con un gran potencial de impacto en la sociedad, con capacidad de mejorar nuestra vida en diversas formas, desde la eficiencia industrial hasta la atención médica personalizada."
                        }
                    ]
                }
            }
        }
    }
};

export default tallerCulturaDigital;