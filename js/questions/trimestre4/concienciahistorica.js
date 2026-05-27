// ============================================
// CONCIENCIA HISTÓRICA I: PERSPECTIVAS DEL MÉXICO ANTIGUO EN LOS CONTEXTOS GLOBALES
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const concienciaHistorica = {
    id: "concienciaHistorica",
    nombre: "CONCIENCIA HISTÓRICA I: PERSPECTIVAS DEL MÉXICO ANTIGUO EN LOS CONTEXTOS GLOBALES",
    icono: "📜",
    descripcion: "Estudio de la conciencia histórica, periodización de Mesoamérica, civilizaciones antiguas (Mesopotamia, Egipto, Grecia, Roma), Edad Media, Renacimiento, Conquista de México, Época Colonial, sistema de castas, arte novohispano y patrimonio cultural.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: De la Historia Cronológica a la Conciencia Histórica",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Conciencia Histórica y Teorías de la Historia",
                    desc: "Comprensión de la conciencia histórica, diferencia con historia cronológica, categorías históricas y corrientes historiográficas.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Conciencia histórica",
                            q: "Según Santisteban (2017), ¿qué es la conciencia histórica?",
                            options: ["Memorizar fechas y personajes", "Conciencia crítica que implica análisis, reflexión y ayuda en la toma de decisiones", "Relatar acontecimientos del pasado", "Describir monumentos históricos"],
                            answerIndex: 1,
                            explain: "Santisteban señala que la conciencia histórica es conciencia crítica, implica análisis y reflexión, además ayuda en la toma de decisiones, convirtiendo a la historia en un instrumento de liberación e intervención social."
                        },
                        {
                            topic: "Conciencia histórica",
                            q: "¿Quién impulsó y desarrolló el concepto de conciencia histórica?",
                            options: ["Enrique Florescano", "Jörn Rüsen", "Karl Marx", "Leopoldo Van Ranke"],
                            answerIndex: 1,
                            explain: "La idea de conciencia histórica fue impulsada y desarrollada por Jörn Rüsen, permitiendo que la historia sea abordada desde una perspectiva diferente donde la memoria es activa y creadora de significado."
                        },
                        {
                            topic: "Definición de historia",
                            q: "Según Luis Fernando Sánchez Jaramillo, ¿qué es la historia?",
                            options: ["El estudio de los monumentos", "El conocimiento de lo que sucedió en el pasado, buscando en él respuestas e inquietudes presentes", "La memorización de fechas", "La descripción de batallas"],
                            answerIndex: 1,
                            explain: "Sánchez Jaramillo define la historia como 'el conocimiento de lo que sucedió en el pasado, en tanto que el historiador tiene el propósito de buscar en el pasado respuestas e inquietudes presentes'."
                        },
                        {
                            topic: "Enseñanza de la historia",
                            q: "Según Enrique Florescano, ¿para qué es indispensable la enseñanza de la historia?",
                            options: ["Para aprobar exámenes", "Para el conocimiento del ser humano viviendo en sociedad", "Para viajar al extranjero", "Para trabajar en museos"],
                            answerIndex: 1,
                            explain: "Florescano afirma que la enseñanza de la historia es indispensable para el conocimiento del ser humano viviendo en sociedad y para hacer conscientes a las personas de que son parte de la corriente de la historia humana."
                        },
                        {
                            topic: "Historiografía",
                            q: "¿Cómo define Evelia Trejo a la historiografía?",
                            options: ["El estudio de los monumentos", "La producción escrita del conocimiento histórico", "La arqueología mexicana", "La conservación de documentos"],
                            answerIndex: 1,
                            explain: "Evelia Trejo, investigadora del Instituto de Investigaciones Históricas de la UNAM, define a la historiografía como 'la producción escrita del conocimiento histórico'."
                        },
                        {
                            topic: "Espacio histórico",
                            q: "¿Qué es el espacio histórico como categoría de análisis histórico?",
                            options: ["El lugar geográfico donde suceden los acontecimientos", "El tiempo que dura un proceso", "El sujeto que vive la historia", "La periodización de eventos"],
                            answerIndex: 0,
                            explain: "El espacio histórico es el lugar geográfico donde suceden los acontecimientos. Posee una significación dinámica y capacidad de influir en el desarrollo de las actividades humanas."
                        },
                        {
                            topic: "Tiempo histórico",
                            q: "Según Fernand Braudel y su Escuela, ¿cómo es el tiempo histórico?",
                            options: ["Lineal y uniforme", "Múltiple, no regular y construido de manera social", "Circular y repetitivo", "Estático e inmutable"],
                            answerIndex: 1,
                            explain: "Para Braudel y su Escuela, el tiempo no es lineal y uniforme, sino múltiple, no regular y construido de manera social."
                        },
                        {
                            topic: "Positivismo histórico",
                            q: "¿Quién fue el creador del positivismo y cuál era su objetivo para las ciencias sociales?",
                            options: ["Karl Marx; transformar la sociedad", "Augusto Comte; igualar las ciencias sociales a las ciencias naturales", "Leopoldo Van Ranke; describir hechos únicos", "Wilhelm Dilthey; diferenciar naturaleza y sociedad"],
                            answerIndex: 1,
                            explain: "El positivismo fue creado por Augusto Comte. Pretendió que una ciencia social como la sociología estuviera igualada en método y construcción teórica a las ciencias naturales."
                        },
                        {
                            topic: "Positivismo en México",
                            q: "¿Quién fue el principal difusor del positivismo en México durante el Porfiriato?",
                            options: ["Benito Juárez", "Porfirio Díaz", "Gabino Barreda", "Ignacio Manuel Altamirano"],
                            answerIndex: 2,
                            explain: "El principal difusor del positivismo en México fue el maestro Gabino Barreda, discípulo de Augusto Comte."
                        },
                        {
                            topic: "Marxismo",
                            q: "Según Karl Marx, ¿quiénes son los principales motores de la historia?",
                            options: ["Los reyes y gobernantes", "Los intelectuales", "Los obreros y las masas desposeídas", "Los militares"],
                            answerIndex: 2,
                            explain: "Para Marx, los obreros y las masas desposeídas por los propietarios de los medios de producción son los principales motores de la historia."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Prehistoria y Primeras Civilizaciones",
                    desc: "Identificación de etapas de la prehistoria, civilizaciones de Mesopotamia, Egipto, Grecia, Roma y transición a la Edad Media.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Prehistoria",
                            q: "¿Cuál fue el primer homínido reconocido como ancestro del ser humano?",
                            options: ["Homo habilis", "Australopithecus", "Homo sapiens", "Neandertal"],
                            answerIndex: 1,
                            explain: "El Australopithecus (4.000.000 a.C.) marcó el inicio de la evolución y el primer ancestro directo del ser humano."
                        },
                        {
                            topic: "Paleolítico",
                            q: "¿Qué descubrimiento importante ayudó a la supervivencia de los homínidos durante el Paleolítico inferior?",
                            options: ["La rueda", "El fuego", "La agricultura", "La escritura"],
                            answerIndex: 1,
                            explain: "Durante el Paleolítico inferior se descubrió el uso del fuego cerca de los 500.000 años a.C., ayudando a la supervivencia de los homínidos."
                        },
                        {
                            topic: "Neolítico",
                            q: "¿Qué cambios permitieron el sedentarismo y el establecimiento de las primeras civilizaciones durante el Neolítico?",
                            options: ["El uso del fuego", "La domesticación de plantas y animales (agricultura y ganadería)", "La invención de la escritura", "La construcción de pirámides"],
                            answerIndex: 1,
                            explain: "Con la domesticación de plantas y animales se sentaron las bases del sedentarismo y los pilares de las primeras civilizaciones."
                        },
                        {
                            topic: "Mesopotamia",
                            q: "¿Qué significa el nombre 'Mesopotamia' y entre qué ríos se ubicaba?",
                            options: ["Tierra de reyes; Nilo y Jordán", "Tierra entre ríos; Tigris y Éufrates", "Tierra sagrada; Indo y Ganges", "Tierra fértil; Danubio y Rin"],
                            answerIndex: 1,
                            explain: "Mesopotamia deriva del vocablo griego 'mesos' (entre) y 'potamos' (río), significa 'tierra entre ríos', refiriéndose al Tigris y el Éufrates."
                        },
                        {
                            topic: "Código de Hammurabi",
                            q: "¿Quién fue el rey de Babilonia conocido por crear un famoso código de leyes?",
                            options: ["Nabucodonosor", "Hammurabi", "Sargón", "Gilgamesh"],
                            answerIndex: 1,
                            explain: "El rey Hammurabi de Babilonia (1722-1686 a.C.) fue un prominente legislador y creador del Código de Hammurabi."
                        },
                        {
                            topic: "Egipto",
                            q: "¿Cuál era la fuente de vida de la civilización egipcia?",
                            options: ["El Mar Rojo", "El río Nilo", "El Mediterráneo", "El río Jordán"],
                            answerIndex: 1,
                            explain: "La fuente de vida de Egipto era el río Nilo, que permitió que las comunidades cercanas se desarrollaran."
                        },
                        {
                            topic: "Faraón",
                            q: "¿Cómo se llamaba el sistema de gobierno de Egipto y quién ejercía el poder?",
                            options: ["Democracia; el pueblo", "Monarquía; el faraón", "República; el senado", "Teocracia; los sacerdotes"],
                            answerIndex: 1,
                            explain: "Egipto se rigió bajo un sistema monárquico cuyo poder radicaba en la figura del faraón."
                        },
                        {
                            topic: "Grecia",
                            q: "¿Cuáles fueron las dos ciudades-Estado rivales que caracterizaron a la Grecia clásica?",
                            options: ["Corinto y Tebas", "Atenas y Esparta", "Argos y Megara", "Rodas y Mileto"],
                            answerIndex: 1,
                            explain: "Atenas y Esparta fueron dos ciudades-Estado cuya rivalidad caracterizó a la Grecia clásica. Atenas como símbolo del desarrollo intelectual y Esparta como representación del poder militar."
                        },
                        {
                            topic: "Democracia ateniense",
                            q: "Según Alvear, ¿cómo era realmente la democracia en Atenas?",
                            options: ["Popular e igualitaria", "De tipo aristocrático, gobernada por los eupátridas (bien nacidos)", "Directa y participativa", "Monárquica"],
                            answerIndex: 1,
                            explain: "Tras la monarquía apareció un sistema republicano de tipo aristocrático donde los eupátridas (bien nacidos) tomaban la dirección de la cosa pública."
                        },
                        {
                            topic: "Roma",
                            q: "¿Cuáles fueron las tres etapas de la civilización romana?",
                            options: ["Arcaica, Clásica y Decadente", "Monarquía, República e Imperio", "Temprana, Media y Tardía", "Oriental, Occidental y Bizantina"],
                            answerIndex: 1,
                            explain: "La civilización romana transitó por tres importantes etapas: Monarquía (753-509 a.C.), República (509-27 a.C.) e Imperio (27 a.C.-476 d.C.)."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Edad Media, Renacimiento y Siglos XIX-XX",
                    desc: "Análisis de la Edad Media, Renacimiento, Revolución Industrial, guerras mundiales, Revolución Rusa y Guerra Fría.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Edad Media",
                            q: "¿Quién acuñó el término 'Edad Media' y en qué siglos se divide?",
                            options: ["Voltaire; siglos III-X", "Christoh Cellarius; siglos V-XV", "Marx; siglos IV-XIV", "Comte; siglos VI-XVI"],
                            answerIndex: 1,
                            explain: "El término 'Edad Media' fue acuñado por Christoh Cellarius (1638-1707) y se divide en Alta Edad Media (siglos V-X) y Baja Edad Media (siglos XI-XV)."
                        },
                        {
                            topic: "Feudalismo",
                            q: "¿Qué caracterizó al modelo económico-social del feudalismo?",
                            options: ["Relación comercial entre ciudades", "Régimen contractual-laboral entre señores feudales y siervos", "Sistema democrático", "Economía industrial"],
                            answerIndex: 1,
                            explain: "El feudalismo se caracterizó por el régimen contractual-laboral entre los señores feudales (propietarios) y los siervos (trabajadores), donde estos últimos dependían totalmente de ellos."
                        },
                        {
                            topic: "Renacimiento",
                            q: "¿Dónde se originó el Renacimiento y cuál fue su principal característica?",
                            options: ["Roma; el teocentrismo", "Florencia; el humanismo y la libertad del ser humano", "París; la revolución científica", "Londres; el empirismo"],
                            answerIndex: 1,
                            explain: "El Renacimiento se originó en Florencia, Italia, manifestando un renacer en la concepción de libertad del ser humano, retomando el arte griego y romano."
                        },
                        {
                            topic: "Reforma protestante",
                            q: "¿Quién inició la Reforma protestante en 1517 y qué documento escribió?",
                            options: ["Juan Calvino; La institución de la religión cristiana", "Martín Lutero; 95 tesis", "Erasmo de Rotterdam; Elogio de la locura", "Enrique VIII; Acta de Supremacía"],
                            answerIndex: 1,
                            explain: "Martín Lutero inició la Reforma en 1517 al plantear 95 tesis mediante las cuales acusaba la venta de indulgencias por parte de la Iglesia católica."
                        },
                        {
                            topic: "Revolución Industrial",
                            q: "¿En qué país inició la Revolución Industrial y qué consecuencias trajo para la clase obrera?",
                            options: ["Francia; mejoró las condiciones laborales", "Inglaterra; largas jornadas de trabajo a cambio de pagos miserables", "Alemania; creación de sindicatos", "Estados Unidos; reducción de jornada"],
                            answerIndex: 1,
                            explain: "La Revolución Industrial inició en Inglaterra. La numerosa clase obrera resultó afectada por largas jornadas de trabajo a cambio de un pago miserable."
                        },
                        {
                            topic: "Manifiesto Comunista",
                            q: "¿En qué año publicó Karl Marx el Manifiesto Comunista?",
                            options: ["1830", "1848", "1867", "1871"],
                            answerIndex: 1,
                            explain: "En 1848, Karl Marx publicó el Manifiesto Comunista, una convocatoria a la clase obrera para destruir al capitalismo."
                        },
                        {
                            topic: "Primera Guerra Mundial",
                            q: "¿Qué evento detonó el inicio de la Primera Guerra Mundial?",
                            options: ["La invasión de Polonia", "El asesinato del archiduque Francisco Fernando", "El hundimiento del Lusitania", "La crisis de los Balcanes"],
                            answerIndex: 1,
                            explain: "El evento detonante fue el asesinato del archiduque Francisco Fernando y su esposa en junio de 1914, que creó tensiones diplomáticas entre Austria y Serbia."
                        },
                        {
                            topic: "Tratado de Versalles",
                            q: "¿Qué estableció el Tratado de Versalles de 1919?",
                            options: ["La creación de la ONU", "Se culpó a Alemania de la guerra", "La independencia de las colonias", "El fin del imperio británico"],
                            answerIndex: 1,
                            explain: "El Tratado de Versalles estableció que se culpó a Alemania de la guerra, generando distanciamiento entre los firmantes y acentuando el nacionalismo alemán."
                        },
                        {
                            topic: "Revolución Rusa",
                            q: "¿Quién lideró a los bolcheviques en la Revolución Rusa de octubre de 1917?",
                            options: ["Iósif Stalin", "León Trotsky", "Vladímir Ilich Uliánov (Lenin)", "Alexander Kerensky"],
                            answerIndex: 2,
                            explain: "Lenin organizó a los llamados bolcheviques, liderando el ejército rojo y triunfando en la Revolución de octubre de 1917, creando el primer estado socialista del mundo."
                        },
                        {
                            topic: "Crisis de 1929",
                            q: "¿En qué lugar se inició la Gran Depresión de 1929?",
                            options: ["La Bolsa de Valores de Londres", "Wall Street en Nueva York", "La Bolsa de Tokio", "El Banco de Francia"],
                            answerIndex: 1,
                            explain: "La crisis se inició en Wall Street, el corazón financiero de Estados Unidos en Manhattan, Nueva York, el 24 de octubre de 1929."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: De Mesoamérica a la Nueva España. Rasgos y Características",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Superáreas Culturales y Mesoamérica",
                    desc: "Identificación de Aridoamérica, Oasisamérica, Mesoamérica, su periodización y áreas culturales.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Superáreas culturales",
                            q: "¿Quién propuso la división de Norteamérica en áreas culturales y en qué año?",
                            options: ["Alfredo López Austin en 1950", "Paul Kirchhoff en 1943", "Leonardo López Luján en 1960", "Miguel León-Portilla en 1955"],
                            answerIndex: 1,
                            explain: "Paul Kirchhoff propuso la división del territorio norteamericano en áreas culturales publicada por primera vez en 1943."
                        },
                        {
                            topic: "Aridoamérica",
                            q: "¿Por qué se caracterizaban los pueblos de Aridoamérica?",
                            options: ["Por ser sedentarios agricultores", "Por dedicarse a la caza y recolección debido a las condiciones climáticas áridas", "Por construir grandes pirámides", "Por desarrollar la escritura"],
                            answerIndex: 1,
                            explain: "Aridoamérica se caracteriza por su aridez. Los pueblos que la habitaron se dedicaron a la caza y recolección debido a las condiciones climatológicas."
                        },
                        {
                            topic: "Oasisamérica",
                            q: "¿Cuáles fueron las principales culturas de Oasisamérica?",
                            options: ["Olmecas y mayas", "Anasazi, Hohokam y Mogollón", "Aztecas y purépechas", "Zapotecas y mixtecas"],
                            answerIndex: 1,
                            explain: "Las principales culturas de Oasisamérica fueron: Anasazi, Hohokam y Mogollón."
                        },
                        {
                            topic: "Mesoamérica",
                            q: "Según Kirchhoff, ¿por dónde estaba delimitada Mesoamérica?",
                            options: ["Por el río Bravo y el Suchiate", "Por los ríos Pánuco, Lerma, Sinaloa y Motagua", "Por el océano Pacífico y Atlántico", "Por la Sierra Madre Oriental y Occidental"],
                            answerIndex: 1,
                            explain: "Kirchhoff delimitó Mesoamérica al norte por los ríos Pánuco, Lerma y Sinaloa, y al sur por el río Motagua, Golfo de Nicoya y lago de Nicaragua."
                        },
                        {
                            topic: "Periodización de Mesoamérica",
                            q: "Según López Austin y López Luján, ¿cuáles son los grandes periodos de Mesoamérica?",
                            options: ["Antiguo, Medio y Moderno", "Preclásico, Clásico y Posclásico", "Temprano, Tardío y Final", "Formativo, Urbano y Posurbano"],
                            answerIndex: 1,
                            explain: "La periodización propuesta por López Austin y López Luján establece los periodos: Preclásico, Clásico y Posclásico para Mesoamérica."
                        },
                        {
                            topic: "Área del Sureste",
                            q: "¿Qué civilización se desarrolló en el área del Sureste de Mesoamérica?",
                            options: ["Los olmecas", "El pueblo maya", "Los zapotecas", "Los mexicas"],
                            answerIndex: 1,
                            explain: "El área del Sureste, que abarca sur de México, península de Yucatán y parte de Centroamérica, fue el núcleo del desarrollo del pueblo maya."
                        },
                        {
                            topic: "Olmecas",
                            q: "¿Por qué se le conoce a la cultura olmeca como 'cultura madre'?",
                            options: ["Por ser la más antigua del mundo", "Por ser considerada la civilización más antigua y base de Mesoamérica", "Por tener el mayor imperio", "Por su escritura avanzada"],
                            answerIndex: 1,
                            explain: "La cultura olmeca es considerada la 'cultura madre' de Mesoamérica, reconocida a mediados del siglo XX como la civilización más antigua de la región."
                        },
                        {
                            topic: "Teotihuacan",
                            q: "¿Qué pirámides son las más destacadas en la zona arqueológica de Teotihuacan?",
                            options: ["Pirámides de Kukulkán y las Monjas", "Pirámides del Sol y la Luna", "Pirámides de los Nichos y el Tajín", "Pirámides de Tenayuca y Santa Cecilia"],
                            answerIndex: 1,
                            explain: "En Teotihuacan destacan las imponentes pirámides del Sol y de la Luna, construidas en el primer siglo de nuestra era."
                        },
                        {
                            topic: "Mexicas",
                            q: "¿En qué año fue fundada Tenochtitlan según la tradición mexica?",
                            options: ["1200 d.C.", "1325 d.C.", "1428 d.C.", "1502 d.C."],
                            answerIndex: 1,
                            explain: "La tradición mexica señala que Tenochtitlan fue fundada en 1325 tras un mítico peregrinar desde Aztlán al Valle de México."
                        },
                        {
                            topic: "Educación mexica",
                            q: "¿Cómo se llamaban las dos escuelas que tenían los mexicas y para quiénes eran?",
                            options: ["Telpochcalli y Calmecác; uno para nobles y otro para el pueblo", "Calmécac y Tepochcalli; ambos para sacerdotes", "Tlatelolco y Tenochtitlan", "Cuicacalli y Amoxcalli"],
                            answerIndex: 0,
                            explain: "Los mexicas tenían dos tipos de escuela: el Calmécac para preparar a los nobles como sacerdotes o altos funcionarios, y los Telpochcalli para la gente común."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Descubrimiento, Conquista y Resistencia India",
                    desc: "Comprensión del descubrimiento de América, la Conquista de México, personajes clave y la resistencia indígena.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Descubrimiento de América",
                            q: "¿En qué año Cristóbal Colón realizó su primer viaje que lo llevó a América?",
                            options: ["1482", "1492", "1502", "1512"],
                            answerIndex: 1,
                            explain: "Cristóbal Colón realizó su primer viaje en 1492, llegando a las Antillas sin saber que había descubierto un nuevo continente."
                        },
                        {
                            topic: "Cristóbal Colón",
                            q: "¿A quién convenció Colón para financiar su viaje por el oeste hacia las Indias?",
                            options: ["Al rey Fernando de Aragón", "A la reina Isabel de Castilla", "Al rey Juan II de Portugal", "Al papa Alejandro VI"],
                            answerIndex: 1,
                            explain: "Colón convenció en el convento de La Rábida a los Reyes Católicos, particularmente a la reina Isabel de Castilla, de la factibilidad de un viaje por el oeste."
                        },
                        {
                            topic: "Náufragos de la Conquista",
                            q: "¿Quiénes fueron los dos náufragos que llegaron a Yucatán en 1511 y sirvieron como intérpretes?",
                            options: ["Pedro de Alvarado y Pánfilo de Narváez", "Gonzalo Guerrero y Jerónimo de Aguilar", "Juan de Grijalva y Francisco Hernández de Córdoba", "Diego Velázquez y Hernán Cortés"],
                            answerIndex: 1,
                            explain: "Gonzalo Guerrero y Jerónimo de Aguilar fueron los náufragos provenientes del Golfo de Darién que llegaron a Yucatán en 1511."
                        },
                        {
                            topic: "Hernán Cortés",
                            q: "¿Qué pueblo mesoamericano se convirtió en el principal aliado de Hernán Cortés contra los mexicas?",
                            options: ["Los purépechas", "Los tlaxcaltecas", "Los huastecos", "Los zapotecas"],
                            answerIndex: 1,
                            explain: "Los tlaxcaltecas, tras ser derrotados por los españoles, unieron fuerzas con Cortés contra los mexicas, siendo su principal aliado."
                        },
                        {
                            topic: "Malinche",
                            q: "¿Qué papel desempeñó la Malinche (doña Marina) durante la Conquista?",
                            options: ["Fue guerrera", "Fue intérprete (hablaba náhuatl y maya)", "Fue gobernante", "Fue sacerdotisa"],
                            answerIndex: 1,
                            explain: "La Malinche fue una intérprete 'cedida' a Cortés por gente de Tabasco, que hablaba náhuatl y maya, ayudando en la comunicación con los pueblos indígenas."
                        },
                        {
                            topic: "Moctezuma",
                            q: "¿Quién era el emperador mexica cuando llegó Hernán Cortés?",
                            options: ["Cuitláhuac", "Cuauhtémoc", "Moctezuma Xocoyotzin", "Itzcóatl"],
                            answerIndex: 2,
                            explain: "Moctezuma Xocoyotzin era el emperador en turno de los mexicas cuando Cortés llegó al valle de México."
                        },
                        {
                            topic: "Noche Triste",
                            q: "¿Qué evento se conoce como 'La noche triste' durante la Conquista?",
                            options: ["La muerte de Moctezuma", "El ataque de Pedro de Alvarado en Tenochtitlan y la huida de los españoles", "La llegada de Cortés a Veracruz", "La batalla de Otumba"],
                            answerIndex: 1,
                            explain: "La 'noche triste' fue el ataque de Pedro de Alvarado en Tenochtitlan, que provocó la huida de los españoles hacia Tacuba."
                        },
                        {
                            topic: "Caída de Tenochtitlan",
                            q: "¿Quién fue el último emperador mexica que se rindió el 13 de agosto de 1521?",
                            options: ["Moctezuma", "Cuitláhuac", "Cuauhtémoc", "Xocoyotzin"],
                            answerIndex: 2,
                            explain: "Cuauhtémoc fue el sucesor de Cuitláhuac y último emperador azteca, que se rindió en la plaza de Tlatelolco el 13 de agosto de 1521."
                        },
                        {
                            topic: "Día de la Raza",
                            q: "¿Qué presidente mexicano oficializó el festejo del Día de la Raza?",
                            options: ["Lázaro Cárdenas", "Emilio Portes Gil", "Álvaro Obregón", "Plutarco Elías Calles"],
                            answerIndex: 1,
                            explain: "El Día de la Raza, que conmemora el descubrimiento de América, fue oficializado por el expresidente interino Emilio Portes Gil (1928-1930)."
                        },
                        {
                            topic: "Resistencia india",
                            q: "¿Qué se conmemora actualmente el 12 de octubre según la CNDH?",
                            options: ["El Día de la Raza", "La resistencia india: la lucha por la dignidad y diversidad cultural de los pueblos originarios", "El descubrimiento de América", "La llegada de Colón"],
                            answerIndex: 1,
                            explain: "La CNDH señala que el 12 de octubre es reconocer la constancia, la lucha por su dignidad y la diversidad cultural de los pueblos originarios del continente."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Época Colonial y Sistema de Castas",
                    desc: "Análisis de la época colonial, encomiendas, reformas borbónicas y sistema de castas novohispano.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Época colonial",
                            q: "¿Cuánto tiempo duró la Época colonial en México (periodización tradicional)?",
                            options: ["1521-1810", "1521-1821", "1492-1821", "1519-1810"],
                            answerIndex: 1,
                            explain: "A los tres siglos transcurridos desde la caída de Tenochtitlan en 1521 hasta la consumación de la Independencia en 1821, se le conoce como Época colonial."
                        },
                        {
                            topic: "Periodos de la colonia",
                            q: "¿Cómo se dividen las tres grandes etapas del periodo colonial?",
                            options: ["Descubrimiento, Conquista y Colonia", "Periodo fundacional, Periodo de madurez y autonomía, Reformas borbónicas", "Alta colonia, Media colonia, Baja colonia", "Siglo XVI, XVII, XVIII"],
                            answerIndex: 1,
                            explain: "La época colonial se divide en: periodo fundacional (1519-1610), periodo de madurez y autonomía (1610-1760) y las Reformas borbónicas."
                        },
                        {
                            topic: "Encomienda",
                            q: "¿Qué era la encomienda en la Nueva España?",
                            options: ["Un tributo que pagaban los españoles", "La concesión de derechos sobre una población para obtener tributo y mano de obra", "Un sistema de trueque", "Una forma de gobierno indígena"],
                            answerIndex: 1,
                            explain: "Las encomiendas fueron el vehículo utilizado por los españoles para obtener, mediante el pago de tributo, productos en especie y mano de obra especializada."
                        },
                        {
                            topic: "Epidemias en la colonia",
                            q: "¿Qué enfermedades causaron la muerte de millones de indígenas durante el periodo fundacional?",
                            options: ["Malaria y fiebre amarilla", "Viruela y sarampión", "Tifo y cólera", "Gripe y tuberculosis"],
                            answerIndex: 1,
                            explain: "Las epidemias de viruela y sarampión cobraron más vidas que las acciones de guerra. Entre 1521 a 1548 murieron cerca de 20 millones de nativos americanos."
                        },
                        {
                            topic: "Primer virrey",
                            q: "¿Quién fue el primer virrey de la Nueva España?",
                            options: ["Hernán Cortés", "Antonio de Mendoza", "Juan de Palafox", "Luis de Velasco"],
                            answerIndex: 1,
                            explain: "El virreinato se instauró formalmente hacia 1542 bajo la imagen de don Antonio de Mendoza."
                        },
                        {
                            topic: "Reformas borbónicas",
                            q: "¿Qué dinastía llegó al poder español en el siglo XVIII impulsando las Reformas borbónicas?",
                            options: ["Habsburgo", "Borbones", "Trastámara", "Austria"],
                            answerIndex: 1,
                            explain: "Las Reformas borbónicas corresponden a la casa dinástica de los Borbones, quienes arribaron a principios del siglo XVIII."
                        },
                        {
                            topic: "Expulsión de los jesuitas",
                            q: "¿Quién ordenó la expulsión de los jesuitas del territorio novohispano en 1767?",
                            options: ["Carlos II", "Carlos III", "Felipe V", "Fernando VI"],
                            answerIndex: 1,
                            explain: "La expulsión de los jesuitas fue ordenada por el rey Carlos III la madrugada del 2 de abril de 1767."
                        },
                        {
                            topic: "Sistema de castas",
                            q: "¿Quiénes ocupaban la cima del sistema de castas en la Nueva España?",
                            options: ["Los criollos", "Los peninsulares (españoles nacidos en Europa)", "Los mestizos", "Los indígenas"],
                            answerIndex: 1,
                            explain: "En la cima del sistema de castas se encontraban los peninsulares (españoles nacidos en Europa), quienes ocupaban los cargos públicos de primer nivel."
                        },
                        {
                            topic: "Criollos",
                            q: "¿Cuál era la principal ventaja de los criollos en la sociedad novohispana?",
                            options: ["Podían ser virreyes", "Acceso a la educación (formación elemental y superior)", "No pagaban impuestos", "Ser dueños de minas"],
                            answerIndex: 1,
                            explain: "La mayor ventaja de los criollos era el acceso a la educación tanto en la formación elemental como en la superior."
                        },
                        {
                            topic: "Mestizos",
                            q: "¿De la unión de quiénes provienen los mestizos en el sistema de castas?",
                            options: ["Español y española", "Español e india", "Indígena y negra", "Criollo e indígena"],
                            answerIndex: 1,
                            explain: "Los mestizos son producto de la unión de español e india, constituyendo de manera creciente el mayor grupo poblacional de la Nueva España."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Preservación del Patrimonio Histórico",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Papel de la Iglesia en el Mundo Novohispano",
                    desc: "Comprensión del papel de la Iglesia católica en la Nueva España, su influencia social, económica y cultural.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Iglesia novohispana",
                            q: "¿Cuál era una de las funciones de la Iglesia en la Nueva España en el ámbito civil?",
                            options: ["Recaudar impuestos", "Encargarse del registro civil (bautizo, defunciones, bodas)", "Administrar justicia", "Defender el territorio"],
                            answerIndex: 1,
                            explain: "La Iglesia era la encargada del registro civil: bautizo, defunciones, bodas, nombres, etc., además de crear orfanatos, seminarios y universidades."
                        },
                        {
                            topic: "Función económica de la Iglesia",
                            q: "¿Qué rol económico desempeñó la Iglesia en la Nueva España?",
                            options: ["Comerciante", "Institución bancaria que realizaba préstamos para minería, agricultura y ganadería", "Propietaria de minas", "Exportadora de plata"],
                            answerIndex: 1,
                            explain: "La Iglesia fungió como institución bancaria, realizando préstamos para las principales actividades económicas como la minería, agricultura y ganadería, cobrando intereses."
                        },
                        {
                            topic: "Diezmo",
                            q: "¿Qué era el diezmo en la Nueva España?",
                            options: ["Un impuesto a la minería", "Un tributo obligatorio del 10% para la Iglesia", "Una contribución voluntaria", "Un pago por servicios eclesiásticos"],
                            answerIndex: 1,
                            explain: "El diezmo era un pago obligatorio a la Iglesia, además de limosnas, procesiones y aportaciones por servicios eclesiásticos."
                        },
                        {
                            topic: "Patronato Real",
                            q: "¿Qué era el Patronato Real?",
                            options: ["Un impuesto religioso", "Un conjunto de privilegios otorgados por el papado que permitían a los reyes administrar la Iglesia", "Una orden religiosa", "Un tributo indígena"],
                            answerIndex: 1,
                            explain: "El Patronato Real era un conjunto de privilegios y facultades otorgadas por el papado mediante los cuales los reyes podían administrar la Iglesia y elegir a sus dignidades eclesiásticas."
                        },
                        {
                            topic: "Franciscanos",
                            q: "¿Qué orden religiosa llegó a la Nueva España con votos de pobreza tras la expulsión de los jesuitas?",
                            options: ["Dominicos", "Agustinos", "Franciscanos", "Jesuitas"],
                            answerIndex: 2,
                            explain: "Tras la expulsión de los jesuitas, llegaron los franciscanos, una orden de frailes con votos de pobreza, renunciando a la opulencia para vivir en humildad."
                        },
                        {
                            topic: "Legado de la Iglesia",
                            q: "¿Cuál es un ejemplo del legado de la Iglesia en las festividades mexicanas actuales?",
                            options: ["El Grito de Independencia", "El Día de Muertos y Navidad", "El desfile del 20 de noviembre", "El carnaval"],
                            answerIndex: 1,
                            explain: "El Día de Muertos y Navidad son ejemplos de festividades influenciadas y traídas del viejo continente por la Iglesia, dotadas de identidad propia de cada región de México."
                        },
                        {
                            topic: "Conquista espiritual",
                            q: "¿Qué se entiende por 'conquista espiritual' en la Nueva España?",
                            options: ["La derrota militar de los indígenas", "La evangelización de los indígenas por parte de los frailes", "La construcción de iglesias", "La creación de seminarios"],
                            answerIndex: 1,
                            explain: "La conquista espiritual fue la evangelización de los indígenas a cargo de los frailes, quienes mediante la enseñanza de su lengua lograron expandir la colonización en todo el territorio novohispano."
                        },
                        {
                            topic: "Control de haciendas",
                            q: "¿Qué porcentaje de las haciendas llegó a controlar la Iglesia en la Nueva España?",
                            options: ["Un tercio", "La mitad", "Más de la mitad", "Dos tercios"],
                            answerIndex: 2,
                            explain: "La Iglesia llegó a tener el control de más de la mitad de las haciendas en la Nueva España, gracias a donaciones de personas influyentes que buscaban ganarse la salvación."
                        },
                        {
                            topic: "Iglesia y educación",
                            q: "¿Qué instituciones educativas creó la Iglesia en la Nueva España?",
                            options: ["Escuelas públicas", "Orfanatos, seminarios y universidades", "Colegios militares", "Escuelas de comercio"],
                            answerIndex: 1,
                            explain: "La Iglesia creó orfanatos, seminarios y universidades, donde los frailes fueron pieza clave para la evangelización y enseñanza."
                        },
                        {
                            topic: "Pérdida de poder de la Iglesia",
                            q: "¿Cuándo comenzó el clero a perder poder en los ámbitos económico, político y social en la Nueva España?",
                            options: ["Durante la Conquista", "Con las Reformas borbónicas", "Con la Independencia", "Durante el Imperio de Iturbide"],
                            answerIndex: 1,
                            explain: "No fue hasta las Reformas borbónicas que el clero comenzó a perder poder en los ámbitos económico, político y social."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Arte Novohispano y Patrimonio Cultural",
                    desc: "Identificación del arte novohispano, el Barroco, sus exponentes y la clasificación del patrimonio cultural.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Arte novohispano",
                            q: "¿Qué fin tenía el arte novohispano en el siglo XVI?",
                            options: ["La decoración", "La evangelización (conquista espiritual)", "El comercio", "La política"],
                            answerIndex: 1,
                            explain: "El arte tuvo un fin evangelizador. La Iglesia católica era la encargada de evangelizar a los 'naturales' mediante el arte de forma didáctica para contrarrestar la influencia protestante."
                        },
                        {
                            topic: "Barroco novohispano",
                            q: "¿Qué estilo artístico exuberante fue bien adoptado por los artistas novohispanos y adquirió identidad propia?",
                            options: ["Renacimiento", "Barroco", "Neoclásico", "Romanticismo"],
                            answerIndex: 1,
                            explain: "El Barroco fue un estilo exuberante bien adoptado por los artistas novohispanos, adquiriendo su propia identidad y reflejándose no solo en la pintura y escultura, sino también en la literatura."
                        },
                        {
                            topic: "Pintores novohispanos",
                            q: "¿Cuál de los siguientes fue un destacado pintor novohispano?",
                            options: ["Diego Rivera", "Miguel Cabrera", "David Alfaro Siqueiros", "José Clemente Orozco"],
                            answerIndex: 1,
                            explain: "Miguel Cabrera (1695-1768) fue uno de los destacados pintores novohispanos, junto con José Ibarra, Juan Rodríguez Juárez, Cristóbal de Villalpando y Juan Correa."
                        },
                        {
                            topic: "Grana cochinilla",
                            q: "¿Qué recurso natural novohispano utilizaron los artistas para innovar en la pintura?",
                            options: ["El añil", "La grana cochinilla (baba de nopal)", "El oro", "La plata"],
                            answerIndex: 1,
                            explain: "Los artistas novohispanos innovaron en la pintura al hacer uso de la grana cochinilla (muy cotizada) o baba de nopal para sus tintes."
                        },
                        {
                            topic: "Sor Juana Inés de la Cruz",
                            q: "¿Qué representa Sor Juana Inés de la Cruz en la literatura novohispana?",
                            options: ["El primer poeta barroco", "Un ejemplo del enorme potencial de la mujer en un mundo restringido como la Colonia", "La primera novelista", "La historiadora de la Nueva España"],
                            answerIndex: 1,
                            explain: "Sor Juana Inés de la Cruz trascendió como un ejemplo del enorme potencial que tenía la mujer en un mundo restringido como la Colonia."
                        },
                        {
                            topic: "Ciudades barrocas",
                            q: "¿Cuáles fueron las ciudades con mayor auge barroco en la Nueva España?",
                            options: ["Veracruz, Acapulco, Tampico", "Ciudad de México, Puebla, Oaxaca, San Luis Potosí, Zacatecas", "Monterrey, Guadalajara, Mérida", "Querétaro, Morelia, Durango"],
                            answerIndex: 1,
                            explain: "Las ciudades con mayor auge barroco fueron la Ciudad de México, Puebla, Oaxaca, San Luis Potosí, Zacatecas, Saltillo y Chihuahua."
                        },
                        {
                            topic: "Neoclásico",
                            q: "¿Qué estilo artístico sustituyó al Barroco con las Reformas Borbónicas?",
                            options: ["Gótico", "Neoclásico", "Rococó", "Manierismo"],
                            answerIndex: 1,
                            explain: "Con las Reformas Borbónicas, el Barroco pierde fuerza y se introduce un nuevo estilo: el neoclásico."
                        },
                        {
                            topic: "Patrimonio cultural",
                            q: "¿Qué es el patrimonio cultural de la humanidad?",
                            options: ["Solo monumentos históricos", "Las costumbres y bienes que la humanidad transmite de generación en generación reconociendo un valor colectivo", "Únicamente obras de arte", "Sitios turísticos"],
                            answerIndex: 1,
                            explain: "El patrimonio cultural son las costumbres y los bienes que la humanidad transmite de generación en generación, reconociendo en ellos un valor y un sentido colectivo."
                        },
                        {
                            topic: "Niveles de patrimonio",
                            q: "¿Cuáles son los niveles de patrimonio cultural según su importancia?",
                            options: ["Local, estatal y federal", "Regional, nacional y mundial", "Municipal, estatal y nacional", "Comunitario, regional y global"],
                            answerIndex: 1,
                            explain: "Según la importancia histórica y social, el patrimonio se divide en: regional (generado localmente), nacional (pertenece a un país) y mundial (aprobado por la UNESCO)."
                        },
                        {
                            topic: "UNESCO",
                            q: "¿Qué organismo internacional aprueba el tratado para la protección del patrimonio mundial cultural y natural?",
                            options: ["ONU", "UNESCO", "FMI", "OTAN"],
                            answerIndex: 1,
                            explain: "La UNESCO (Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura) aprueba el tratado internacional para la protección del patrimonio mundial cultural y natural."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Patrimonio Histórico y Tradiciones",
                    desc: "Identificación del patrimonio histórico prehispánico y virreinal, tradiciones como 'La Rama' y el Barroco como expresión artística.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Tradición de La Rama",
                            q: "¿En qué región de México se origina la tradición de 'La Rama'?",
                            options: ["En el norte de México", "En el sotavento de Veracruz", "En la península de Yucatán", "En el occidente de México"],
                            answerIndex: 1,
                            explain: "La tradición de 'La Rama' tuvo origen en la época prehispánica, en el sotavento de Veracruz, donde festejaban la renovación de la naturaleza llevando una rama llamada versúchil."
                        },
                        {
                            topic: "Origen prehispánico de La Rama",
                            q: "¿Cómo se llamaba la rama en la época prehispánica en Veracruz?",
                            options: ["Rama navideña", "Versúchil", "Árbol de la vida", "Rama de la fertilidad"],
                            answerIndex: 1,
                            explain: "En la época prehispánica, en el sotavento de Veracruz, festejaban la renovación de la naturaleza llevando una rama a la cual llamaban versúchil."
                        },
                        {
                            topic: "Elementos cristianos en La Rama",
                            q: "¿Qué elementos se agregaron a la tradición de La Rama con la llegada de los españoles?",
                            options: ["Elementos de la Iglesia católica", "Elementos de la monarquía española", "Elementos militares", "Elementos comerciales"],
                            answerIndex: 0,
                            explain: "Con la llegada de los españoles, la tradición de La Rama se fue adaptando y agregando elementos de la Iglesia católica."
                        },
                        {
                            topic: "Fechas de La Rama",
                            q: "¿Entre qué fechas se celebra la tradición de La Rama en Veracruz?",
                            options: ["1 al 6 de enero", "16 al 24 de diciembre", "24 de diciembre al 6 de enero", "2 al 16 de noviembre"],
                            answerIndex: 1,
                            explain: "La tradición de 'La Rama' comienza con las fiestas decembrinas el día 16 y termina el 24 de diciembre."
                        },
                        {
                            topic: "Significado del Barroco",
                            q: "¿Por qué los críticos de arte denominaron 'barroco' a este estilo artístico?",
                            options: ["Por su belleza", "De manera despectiva, por no cumplir las reglas del arte renacentista y clásico", "Por su origen italiano", "Por su influencia religiosa"],
                            answerIndex: 1,
                            explain: "El Barroco fue denominado así por los críticos de arte de esa época de manera despectiva, ya que consideraban que no cumplía con las reglas del arte renacentista y clásico."
                        },
                        {
                            topic: "Pintura barroca en España",
                            q: "¿Qué giro tuvo la pintura barroca en España en comparación con Italia?",
                            options: ["Se volvió abstracta", "Obtuvo un giro religioso, plasmando escenas de la virgen María, Jesús y santos", "Se enfocó en paisajes", "Se orientó al retrato"],
                            answerIndex: 1,
                            explain: "La pintura barroca surgió en Italia, pero fue en España donde obtuvo un giro religioso, plasmando escenas religiosas, principalmente en torno a la virgen María, Jesús y sus santos."
                        },
                        {
                            topic: "UPAV y patrimonio",
                            q: "¿Qué evento organizó la Universidad Popular Autónoma de Veracruz (UPAV) para preservar la tradición de La Rama?",
                            options: ["Concurso de villancicos", "Primer Encuentro de Ramas Navideñas UPAV 2023: Naranjas y Limas", "Festival de la Rama", "Desfile navideño"],
                            answerIndex: 1,
                            explain: "La UPAV organizó el 'Primer Encuentro de Ramas Navideñas UPAV 2023. Naranjas y Limas' para impulsar los valores tradicionales del estado y apreciar expresiones artísticas dotadas de idiosincrasia."
                        },
                        {
                            topic: "Arte como evangelización",
                            q: "¿Cuál era el propósito de plasmar escenas religiosas en la pintura barroca durante el mundo novohispano?",
                            options: ["La decoración de iglesias", "El reforzamiento del cristianismo y la evangelización a través de lo visual", "La venta de obras religiosas", "La educación de los indígenas"],
                            answerIndex: 1,
                            explain: "Plasmar escenas religiosas contribuyó al reforzamiento del cristianismo y la evangelización, a través de lo visual, representando el modelo de vida católico."
                        },
                        {
                            topic: "Patrimonio tangible e intangible",
                            q: "¿Qué tipo de patrimonio representan tradiciones como 'La Rama'?",
                            options: ["Patrimonio tangible", "Patrimonio intangible (inmaterial)", "Patrimonio natural", "Patrimonio arqueológico"],
                            answerIndex: 1,
                            explain: "Tradiciones como 'La Rama' forman parte del patrimonio intangible (inmaterial), junto con expresiones artísticas, festejos y conmemoraciones religiosas."
                        },
                        {
                            topic: "Valor del patrimonio",
                            q: "¿Por qué es importante preservar el patrimonio histórico según el texto?",
                            options: ["Para atraer turismo", "Para crear una ventana que permita conectar el pasado con el presente y comprender ideas, costumbres y tradiciones", "Para obtener recursos económicos", "Para cumplir normas internacionales"],
                            answerIndex: 1,
                            explain: "Las expresiones artísticas del legado patrimonial permiten hacer conciencia sobre la historia, creando una ventana que permite mirar y conectar al pasado con el presente para comprender ideas, costumbres y tradiciones."
                        }
                    ]
                }
            }
        }
    }
};

export default concienciaHistorica;