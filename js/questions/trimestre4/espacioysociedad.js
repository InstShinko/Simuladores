// ============================================
// ESPACIO Y SOCIEDAD: TERRITORIO, CULTURA Y PROBLEMÁTICAS SOCIALES
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const espacioSociedad = {
    id: "espacioSociedad",
    nombre: "ESPACIO Y SOCIEDAD: TERRITORIO, CULTURA Y PROBLEMÁTICAS SOCIALES",
    icono: "🏙️",
    descripcion: "Estudio de la población, sectores económicos, ecosistemas de México, Áreas Naturales Protegidas, Estado y sus elementos, paisajes rurales y urbanos, instituciones sociales, geografía, multiculturalidad, vivienda, problemáticas urbanas y ambientales, gentrificación y acción colectiva.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: Bases para la Comprensión Social del Espacio",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Población, Sectores Económicos y Ecosistemas de México",
                    desc: "Comprensión de la clasificación de la población, sectores económicos, ecosistemas de México y Áreas Naturales Protegidas.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Población",
                            q: "Según Tamayo y Tamayo, ¿cómo se define la población?",
                            options: ["El número de habitantes de un país", "La totalidad del fenómeno a estudiar donde las unidades poseen una característica común", "El conjunto de edificios de una ciudad", "La cantidad de recursos naturales"],
                            answerIndex: 1,
                            explain: "Tamayo y Tamayo definen la población como 'la totalidad del fenómeno a estudiar donde las unidades de población poseen una característica común la cual se estudia y da origen a los datos de la investigación'."
                        },
                        {
                            topic: "INEGI",
                            q: "¿Qué institución en México se encarga de recopilar información estadística y geográfica?",
                            options: ["CONAPO", "INEGI", "SEMARNAT", "SEP"],
                            answerIndex: 1,
                            explain: "El Instituto Nacional de Estadística y Geografía (INEGI) es el organismo encargado de recopilar y sistematizar información demográfica y socioeconómica en México."
                        },
                        {
                            topic: "Sector agropecuario",
                            q: "¿Qué actividades comprende el sector agropecuario o primario?",
                            options: ["Industria y construcción", "Agricultura, ganadería, silvicultura y pesca", "Comercio y servicios", "Tecnología e innovación"],
                            answerIndex: 1,
                            explain: "El sector primario o agropecuario comprende agricultura, ganadería, silvicultura (explotación de bosques) y pesca."
                        },
                        {
                            topic: "Sector cuaternario",
                            q: "¿Qué caracteriza al sector cuaternario de la economía?",
                            options: ["Actividades agrícolas", "Actividades relacionadas con la investigación y desarrollo científico-tecnológico", "Actividades industriales", "Actividades comerciales"],
                            answerIndex: 1,
                            explain: "El sector cuaternario es de reciente creación y está relacionado con la investigación y el desarrollo científico y tecnológico, ligado a la innovación."
                        },
                        {
                            topic: "Bosque mesófilo de montaña",
                            q: "¿Por qué se le llama 'bosque de niebla' al bosque mesófilo de montaña?",
                            options: ["Porque siempre nieva", "Por las lluvias con frecuentes nubosidad, neblina y humedad atmosférica alta", "Por su altura", "Por su ubicación cerca del mar"],
                            answerIndex: 1,
                            explain: "Presenta lluvias con frecuentes nubosidad, neblina y humedad atmosférica alta la mayor parte de las estaciones, de ahí el nombre de bosque de niebla."
                        },
                        {
                            topic: "Bosques templados en México",
                            q: "¿Qué porcentaje del territorio mexicano ocupan los bosques templados?",
                            options: ["5%", "10%", "16%", "25%"],
                            answerIndex: 2,
                            explain: "Los bosques templados ocupan aproximadamente el 16% del territorio mexicano (323,300 km²)."
                        },
                        {
                            topic: "Matorrales",
                            q: "¿Qué porcentaje del territorio mexicano ocupan los matorrales?",
                            options: ["15%", "30%", "45%", "10%"],
                            answerIndex: 1,
                            explain: "Los matorrales ocupan aproximadamente el 30% del territorio mexicano."
                        },
                        {
                            topic: "Selvas húmedas",
                            q: "¿Cuál es la vegetación más exuberante de México?",
                            options: ["Los pastizales", "Los matorrales", "Las selvas húmedas", "Los bosques templados"],
                            answerIndex: 2,
                            explain: "Las selvas húmedas se consideran la vegetación más exuberante del país, con abundantes lianas, epífitas y palmas."
                        },
                        {
                            topic: "Arrecife Mesoamericano",
                            q: "¿Qué parte del Arrecife Mesoamericano se encuentra en México?",
                            options: ["Toda", "Una parte en la costa oriental de la Península de Yucatán", "Solo en Veracruz", "En el Pacífico"],
                            answerIndex: 1,
                            explain: "En la costa oriental de la Península de Yucatán se encuentra una parte de la segunda barrera arrecifal más grande del mundo, el 'Arrecife Mesoamericano'."
                        },
                        {
                            topic: "CONANP",
                            q: "¿Qué institución es responsable del manejo de las Áreas Naturales Protegidas (ANPs) en México?",
                            options: ["SEMARNAT", "CONANP", "PROFEPA", "INECC"],
                            answerIndex: 1,
                            explain: "Por decreto presidencial en el año 2000 se creó la Comisión Nacional de Áreas Naturales Protegidas (CONANP), responsable del manejo de las ANPs."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Estado, Paisajes e Instituciones Sociales",
                    desc: "Identificación de los elementos del Estado, formas de gobierno, paisajes rurales y urbanos, e instituciones sociales.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Estado",
                            q: "Según Purón, ¿cómo se define el Estado?",
                            options: ["Una organización económica", "Una sociedad política organizada que ocupa un territorio determinado, tiene un sistema jurídico y un gobierno organizado", "Un conjunto de leyes", "Una religión institucionalizada"],
                            answerIndex: 1,
                            explain: "Purón define el Estado como 'una sociedad política organizada que ocupa un territorio determinado, tiene un sistema jurídico y un gobierno organizado'."
                        },
                        {
                            topic: "Elementos del Estado",
                            q: "¿Cuáles son los tres elementos esenciales que conforman el Estado?",
                            options: ["Presidente, Congreso y Suprema Corte", "Territorio, población y gobierno", "Leyes, normas y constitución", "Ejército, policía y tribunales"],
                            answerIndex: 1,
                            explain: "El Estado está constituido por tres elementos esenciales: territorio, población y gobierno."
                        },
                        {
                            topic: "Nacionalidad mexicana",
                            q: "Según el artículo 30 de la Constitución, ¿quiénes son mexicanos por nacimiento?",
                            options: ["Solo los hijos de padres mexicanos", "Los que nazcan en territorio nacional, sea cual fuere la nacionalidad de sus padres", "Solo los nacidos en el extranjero", "Los que obtengan carta de naturalización"],
                            answerIndex: 1,
                            explain: "El artículo 30 establece que son mexicanos por nacimiento los que nazcan en territorio de la República, sea cual fuere la nacionalidad de sus padres."
                        },
                        {
                            topic: "Formas de Estado",
                            q: "¿Qué caracteriza a un Estado federal?",
                            options: ["Un solo centro de poder", "Integrado por entidades federativas (estados) que se unen para formar una federación", "Reunión de Estados que conservan su soberanía", "Gobierno centralizado"],
                            answerIndex: 1,
                            explain: "El Estado federal está integrado por entidades federativas (estados) que se unen entre sí para formar una nueva persona jurídica: la Federación."
                        },
                        {
                            topic: "Espacio rural",
                            q: "¿Qué caracteriza al espacio rural?",
                            options: ["Predominio de actividades industriales", "Predominio de actividades primarias (agricultura, ganadería, minería)", "Alta densidad poblacional", "Ausencia de actividades económicas"],
                            answerIndex: 1,
                            explain: "El espacio rural se caracteriza por el predominio de las actividades primarias como agricultura, ganadería, pesca, minería y explotación forestal."
                        },
                        {
                            topic: "Geografía urbana",
                            q: "¿Qué estudia la geografía urbana?",
                            options: ["Los fenómenos naturales", "La estructura y funciones de las ciudades como expresión del paisaje urbano", "La historia de los países", "La economía global"],
                            answerIndex: 1,
                            explain: "La geografía urbana estudia desde un punto de vista espacial la estructura y funciones de las ciudades, entendidas como una expresión del paisaje urbano."
                        },
                        {
                            topic: "Familia como institución",
                            q: "¿Por qué la familia es considerada la principal institución social?",
                            options: ["Porque genera riqueza", "Porque es el primer agente en el proceso de socialización y grupo primario", "Porque produce alimentos", "Porque administra justicia"],
                            answerIndex: 1,
                            explain: "La familia es el primer agente en el proceso de socialización y es considerado el grupo primario según la clasificación de Cooley."
                        },
                        {
                            topic: "Poderes de la Unión",
                            q: "¿Cómo se dividen los tres poderes en México según la Constitución?",
                            options: ["Federal, Estatal y Municipal", "Ejecutivo, Legislativo y Judicial", "Público, Privado y Social", "Nacional, Estatal y Local"],
                            answerIndex: 1,
                            explain: "El sistema gubernamental mexicano está dividido en tres poderes: Ejecutivo (Presidente), Legislativo (Cámara de Diputados y Senadores) y Judicial (Suprema Corte de Justicia)."
                        },
                        {
                            topic: "INE",
                            q: "¿Cuál es la función del Instituto Nacional Electoral (INE)?",
                            options: ["Recaudar impuestos", "Ser la máxima autoridad en asuntos electorales, emitir credenciales para votar y organizar elecciones", "Administrar la economía", "Regular la educación"],
                            answerIndex: 1,
                            explain: "El INE es la institución que goza de mayor autoridad en asuntos electorales en México, encargada de la emisión de credenciales para votar y de las elecciones federales y estatales."
                        },
                        {
                            topic: "UNAM",
                            q: "¿En qué año la Universidad Nacional Autónoma de México (UNAM) decretó su autonomía?",
                            options: ["1551", "1910", "1929", "1945"],
                            answerIndex: 2,
                            explain: "La UNAM tiene sus orígenes en 1551 como Real y Pontificia Universidad de México, pero fue hasta 1929 cuando decretó su autonomía y obtuvo su nombre actual."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Geografía, Demografía y Corrientes Teóricas",
                    desc: "Comprensión de la geografía como ciencia, principios metodológicos, geografía de la población, geografía económica, política, Antropología urbana y geografía crítica.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Geografía",
                            q: "¿Qué estudia la geografía según Herrero y Hiernaux?",
                            options: ["Solo los mapas", "Cómo las sociedades se relacionan con el espacio", "Solo el clima", "Solo los ríos y montañas"],
                            answerIndex: 1,
                            explain: "La geografía puede ser definida como la ciencia que analiza cómo las sociedades se relacionan con el espacio."
                        },
                        {
                            topic: "Alexander von Humboldt",
                            q: "¿A qué principio geográfico se asocia Alexander von Humboldt?",
                            options: ["Localización", "Causalidad", "Extensión", "Temporalidad"],
                            answerIndex: 1,
                            explain: "El principio de causalidad es atribuido a Alexander von Humboldt y se basa en el reconocimiento de las partes del sistema estudiado, estableciendo causas y consecuencias."
                        },
                        {
                            topic: "Principio de localización",
                            q: "¿Quién otorgó relevancia al principio de localización en geografía?",
                            options: ["Alexander von Humboldt", "Friedrich Ratzel", "Paul Vidal de la Blache", "Emmanuel De Martonne"],
                            answerIndex: 1,
                            explain: "Molina plantea que fue Ratzel quien le otorgó una importancia relevante al principio de localización desde 1881."
                        },
                        {
                            topic: "Tasa de natalidad",
                            q: "¿Qué mide la tasa de natalidad?",
                            options: ["El número de defunciones", "El número de nacimientos que se registran en un año por cada mil habitantes", "El desplazamiento de población", "La densidad de población"],
                            answerIndex: 1,
                            explain: "La tasa de natalidad es el número de nacimientos que se registran en un año por cada mil habitantes."
                        },
                        {
                            topic: "Migración",
                            q: "¿Cuál es la diferencia entre emigración e inmigración?",
                            options: ["No hay diferencia", "Emigración es salida de población de un lugar; inmigración es llegada de población a un lugar", "Emigración es llegada; inmigración es salida", "Ambas son lo mismo"],
                            answerIndex: 1,
                            explain: "Emigración es la salida de población de un lugar o país, mientras que inmigración es la llegada de población a un lugar."
                        },
                        {
                            topic: "Densidad de población",
                            q: "¿Qué es la población relativa o densidad de población?",
                            options: ["El número total de habitantes", "El número de habitantes por kilómetro cuadrado", "La tasa de crecimiento", "El número de nacimientos"],
                            answerIndex: 1,
                            explain: "La población relativa o densidad de población es un índice que mide el número de habitantes con respecto a una unidad de superficie (hab/km²)."
                        },
                        {
                            topic: "Geografía económica",
                            q: "¿Qué estudia la geografía económica según Lloyd y Dicken?",
                            options: ["Solo los recursos naturales", "El funcionamiento del sistema económico en el espacio a través de sus rasgos visibles", "Solo la población", "La historia de los países"],
                            answerIndex: 1,
                            explain: "La geografía económica busca crear métodos y teorías que permitan explicar el funcionamiento del sistema económico en el espacio a través de sus rasgos visibles."
                        },
                        {
                            topic: "Geografía política",
                            q: "¿Qué estudia la geografía política?",
                            options: ["La economía de los países", "El espacio geográfico de los estados y sus relaciones internacionales", "La población mundial", "El clima"],
                            answerIndex: 1,
                            explain: "La geografía política estudia 'el espacio geográfico de los estados y sus relaciones internacionales, cambiantes por ser el producto de los procesos históricos'."
                        },
                        {
                            topic: "Antropología urbana",
                            q: "¿Cuál es el objeto de estudio de la Antropología urbana?",
                            options: ["Las culturas prehispánicas", "Los actores y comunidades que componen la ciudad", "La arqueología", "La lingüística indígena"],
                            answerIndex: 1,
                            explain: "La Antropología urbana se dedica al estudio y análisis de los actores y comunidades que componen la ciudad, enmarcados dentro de un ámbito cultural, social y económico."
                        },
                        {
                            topic: "Geografía crítica",
                            q: "¿Quién es uno de los principales exponentes de la geografía crítica?",
                            options: ["Alexander von Humboldt", "David Harvey", "Paul Vidal de la Blache", "Milton Santos"],
                            answerIndex: 1,
                            explain: "David Harvey es uno de los principales exponentes de la geografía crítica, desarrollando el materialismo histórico-geográfico."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Estructuras Normativas y Significados Culturales del Espacio",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Marcos Normativos y Legislación del Espacio",
                    desc: "Análisis de leyes y derechos sobre vivienda en México, garantía de propiedad, legislación ambiental y derecho a la vivienda según ONU.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Derecho a la vivienda",
                            q: "¿En qué año fue reformado el artículo 4° constitucional para consagrar el derecho a la vivienda?",
                            options: ["1917", "1975", "1983", "2000"],
                            answerIndex: 2,
                            explain: "El derecho a la vivienda como garantía individual de segunda generación fue consagrado en el artículo 4° constitucional mediante reforma publicada el 7 de febrero de 1983."
                        },
                        {
                            topic: "Ley de Vivienda",
                            q: "¿En qué año fue publicada la Ley de Vivienda en México?",
                            options: ["1983", "2000", "2006", "2012"],
                            answerIndex: 2,
                            explain: "La Ley de Vivienda fue publicada en el Diario Oficial de la Federación el 27 de junio de 2006."
                        },
                        {
                            topic: "Garantía de propiedad",
                            q: "¿Qué artículo constitucional reconoce la propiedad de tierras y aguas en México?",
                            options: ["Artículo 14", "Artículo 27", "Artículo 3°", "Artículo 123"],
                            answerIndex: 1,
                            explain: "El artículo 27 reconoce que la propiedad de las tierras y aguas dentro del territorio nacional corresponde a la nación, la cual tiene el derecho de transmitir la propiedad a particulares."
                        },
                        {
                            topic: "LGEEPA",
                            q: "¿En qué año fue publicada la Ley General de Equilibrio Ecológico y Protección al Ambiente (LGEEPA)?",
                            options: ["1975", "1988", "1994", "2000"],
                            answerIndex: 1,
                            explain: "La LGEEPA fue publicada en el Diario Oficial de la Federación el 28 de enero de 1988 por el presidente Miguel de la Madrid."
                        },
                        {
                            topic: "Ley General de Desarrollo Forestal Sustentable",
                            q: "¿Qué ley es reglamentaria del artículo 27 constitucional en materia forestal?",
                            options: ["LGEEPA", "Ley General de Desarrollo Forestal Sustentable", "Ley de Vivienda", "Ley de Aguas Nacionales"],
                            answerIndex: 1,
                            explain: "La Ley General de Desarrollo Forestal Sustentable es reglamentaria del artículo 27 constitucional y regula el manejo integral y sustentable de los territorios forestales."
                        },
                        {
                            topic: "ONU-Habitat",
                            q: "¿Qué organismo de la ONU busca que las ciudades sean inclusivas e igualitarias?",
                            options: ["UNESCO", "ONU-Habitat", "UNICEF", "PNUD"],
                            answerIndex: 1,
                            explain: "ONU-Habitat es el proyecto de la ONU que busca que las ciudades sean inclusivas e igualitarias, libres de discriminación y con participación ciudadana."
                        },
                        {
                            topic: "Acceso universal a vivienda",
                            q: "Según ONU-Habitat, ¿qué punto clave garantiza el acceso equitativo a la vivienda?",
                            options: ["No discriminación", "Igualdad de género", "Acceso universal a la vivienda", "Economía digna"],
                            answerIndex: 2,
                            explain: "El 'acceso universal a la vivienda' garantiza el acceso equitativo y asequible de todos a la vivienda, bienes, servicios y oportunidades urbanas."
                        },
                        {
                            topic: "Carta Mundial por el Derecho a la Ciudad",
                            q: "Según la Carta Mundial por el Derecho a la Ciudad, ¿qué generan los modelos de desarrollo en países empobrecidos?",
                            options: ["Bienestar general", "Niveles de concentración de renta y poder que generan pobreza y exclusión", "Equidad social", "Desarrollo sustentable"],
                            answerIndex: 1,
                            explain: "Los modelos de desarrollo implementados establecen niveles de concentración de renta y poder que generan pobreza, exclusión, depredación ambiental y segregación social."
                        },
                        {
                            topic: "Sostenibilidad y soberanía",
                            q: "¿En qué punto del proyecto ONU-Habitat se basan los vínculos urbano-rurales inclusivos?",
                            options: ["No discriminación", "Inclusión", "Mayor participación", "Sostenibilidad y soberanía"],
                            answerIndex: 3,
                            explain: "El punto 'Sostenibilidad y soberanía' establece que la ciudad se basa en la sostenibilidad y en los vínculos urbano-rurales inclusivos que beneficien a las personas."
                        },
                        {
                            topic: "Ciudad sostenible",
                            q: "¿Qué caracteriza a una ciudad según el punto de 'Sostenibilidad y soberanía' de ONU-Habitat?",
                            options: ["Alta industrialización", "Basarse en la sostenibilidad y vínculos urbano-rurales inclusivos", "Gran cantidad de habitantes", "Modernidad tecnológica"],
                            answerIndex: 1,
                            explain: "La ciudad sostenible se basa en la sostenibilidad y en los vínculos urbano-rurales inclusivos que beneficien a las personas."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Pautas Culturales del Espacio",
                    desc: "Identificación de espacio-identidad, prácticas sociales, lengua, religión, cultura, multiculturalidad e interculturalidad.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Identidad híbrida",
                            q: "¿Quién desarrolló el concepto de 'identidades híbridas'?",
                            options: ["Néstor García Canclini", "Pierre Bourdieu", "Milton Santos", "David Harvey"],
                            answerIndex: 0,
                            explain: "Néstor García Canclini desarrolló el concepto de 'identidades híbridas', que se generan en zonas de alta circulación y mezcla de población de orígenes diversos."
                        },
                        {
                            topic: "Prácticas sociales",
                            q: "¿Qué son las prácticas sociales?",
                            options: ["Solo actividades económicas", "Las acciones y estructuras sociales producidas y reproducidas por los actores sociales", "Solo rituales religiosos", "Las leyes del Estado"],
                            answerIndex: 1,
                            explain: "Las prácticas sociales son las acciones y estructuras sociales producidas y reproducidas por los actores sociales, bajo sus propias normas y valores."
                        },
                        {
                            topic: "Lengua",
                            q: "Según Berger y Luckmann, ¿qué función cumple el lenguaje en la vida cotidiana?",
                            options: ["Solo comunicar", "Permitir que los miembros de una comunidad usen los mismos términos para referirse a los mismos objetos", "Crear arte", "Desarrollar tecnología"],
                            answerIndex: 1,
                            explain: "Berger y Luckmann concluyen que el lenguaje permite que todos los miembros de una comunidad hagan uso de los mismos términos para referirse a los mismos objetos."
                        },
                        {
                            topic: "Religión según Durkheim",
                            q: "Según Émile Durkheim, ¿cómo observa la religión?",
                            options: ["Como opio del pueblo", "En el contexto social, como mecanismo de integración y cohesión social", "Como relación con el capitalismo", "Como expresión individual"],
                            answerIndex: 1,
                            explain: "Durkheim enfoca el comportamiento religioso en el contexto social, observándolo como un mecanismo de integración y cohesión social."
                        },
                        {
                            topic: "Religión según Marx",
                            q: "¿Cómo definió Karl Marx a la religión?",
                            options: ["Como integración social", "Como el opio del pueblo", "Como ética protestante", "Como sistema de creencias"],
                            answerIndex: 1,
                            explain: "Para Marx la religión es el opio del pueblo, ya que lo tiene alienado y dominado, siendo un mecanismo de control social."
                        },
                        {
                            topic: "Cultura",
                            q: "Según Schaefer, ¿qué es la cultura?",
                            options: ["Solo las tradiciones", "La totalidad de costumbres, conocimientos, objetos materiales y comportamientos sociales transmitidos de generación en generación", "Solo el arte", "La religión"],
                            answerIndex: 1,
                            explain: "La cultura es la totalidad de costumbres, conocimientos, objetos materiales y comportamientos sociales transmitidos y aprendidos de generación en generación."
                        },
                        {
                            topic: "Etnocentrismo",
                            q: "¿Qué es el etnocentrismo según William Graham Summer?",
                            options: ["Respeto por otras culturas", "La tendencia a creer que nuestra cultura y forma de vida es superior a las demás", "La mezcla de culturas", "El estudio de las culturas"],
                            answerIndex: 1,
                            explain: "Summer acuñó el término etnocentrismo para referirse a la tendencia de creer que nuestra cultura y forma de vida propia es superior a las demás."
                        },
                        {
                            topic: "Relativismo cultural",
                            q: "¿En qué consiste el relativismo cultural?",
                            options: ["Creer que nuestra cultura es superior", "Ver el comportamiento de otras personas desde la perspectiva de su propia cultura", "Rechazar otras culturas", "Impulsar una sola cultura"],
                            answerIndex: 1,
                            explain: "El relativismo cultural es la práctica de ver el comportamiento de otras personas desde la perspectiva de su cultura, empleando neutralidad valorativa."
                        },
                        {
                            topic: "Subcultura",
                            q: "¿Qué es una subcultura?",
                            options: ["Una cultura superior", "Una pequeña cultura que existe dentro de una cultura dominante más grande", "Una cultura extranjera", "Una religión"],
                            answerIndex: 1,
                            explain: "Una subcultura es una pequeña cultura que existe dentro de una cultura dominante más grande, compartiendo ideas, costumbres y valores diferentes."
                        },
                        {
                            topic: "Contracultura",
                            q: "¿Qué movimiento se identifica como contracultura desde los años sesenta?",
                            options: ["Los rockeros", "Los jóvenes en contra de la guerra de Vietnam y la vida consumista", "Los empresarios", "Los políticos"],
                            answerIndex: 1,
                            explain: "Desde los años sesenta, los jóvenes que estaban en contra de la guerra de Vietnam, de la vida materialista y consumista, se identifican como contracultura."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Significados Alrededor de la Vivienda",
                    desc: "Análisis de multiculturalidad, interculturalidad, aculturación, transculturación, vivienda tradicional y vernácula.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Multiculturalidad",
                            q: "¿En qué se basa la multiculturalidad?",
                            options: ["En la fusión de culturas", "En el reconocimiento de la coexistencia de diversas culturas que comparten el espacio social", "En la superioridad de una cultura", "En la eliminación de culturas"],
                            answerIndex: 1,
                            explain: "La multiculturalidad se basa en el reconocimiento de la coexistencia de diversas culturas que comparten el espacio social."
                        },
                        {
                            topic: "Interculturalidad",
                            q: "¿Qué busca la interculturalidad?",
                            options: ["La separación de culturas", "Reconocer la convivencia de personas de distintas culturas que viven en el mismo espacio y resolver problemas de convivencia", "La imposición cultural", "El aislamiento cultural"],
                            answerIndex: 1,
                            explain: "La interculturalidad reconoce la convivencia de personas de distintas culturas en un mismo espacio geográfico y busca resolver los problemas que surjan de las distintas maneras de ver el mundo."
                        },
                        {
                            topic: "Aculturación",
                            q: "¿Qué es la aculturación según la antropología?",
                            options: ["El rechazo de otra cultura", "La transmisión de cultura en marcha, que implica la transferencia de elementos de una cultura a otra", "La creación de nueva cultura", "El aislamiento cultural"],
                            answerIndex: 1,
                            explain: "La aculturación es la transmisión de cultura en marcha que permite la transferencia de elementos o rasgos de una cultura a otra."
                        },
                        {
                            topic: "Transculturación",
                            q: "¿En qué se diferencia la transculturación de la aculturación?",
                            options: ["No hay diferencia", "La transculturación es el trasfondo latente y reprimido de la historia y la cultura", "La transculturación es más antigua", "La transculturación es impuesta"],
                            answerIndex: 1,
                            explain: "La transculturación es el trasfondo latente, reprimido, de la misma historia y cultura, aquello que se ha vivido pero no se ha dado a conocer como la aculturación."
                        },
                        {
                            topic: "Vivienda tradicional",
                            q: "¿Qué es la vivienda tradicional?",
                            options: ["Vivienda moderna", "Una respuesta a las necesidades de habitabilidad de los pueblos con adecuación continua a su medio ambiente", "Vivienda de lujo", "Vivienda industrializada"],
                            answerIndex: 1,
                            explain: "La vivienda tradicional es 'una respuesta a las necesidades de habitabilidad de los pueblos con una adecuación continua a su medio ambiente'."
                        },
                        {
                            topic: "Arquitectura tradicional",
                            q: "¿Qué caracteriza a la arquitectura tradicional?",
                            options: ["Uso de materiales industrializados", "Utiliza materiales disponibles en el medio natural, interviene trabajo colectivo y respeta el contexto cultural", "Construcción con especialistas", "Diseños internacionales"],
                            answerIndex: 1,
                            explain: "La arquitectura tradicional utiliza materiales disponibles en el medio natural, interviene el trabajo colectivo, respeta el contexto cultural y el medio ambiente."
                        },
                        {
                            topic: "Vivienda vernácula",
                            q: "¿Qué es la vivienda vernácula?",
                            options: ["Vivienda de lujo", "Construcción tradicional desarrollada de manera autóctona con materiales de la zona", "Vivienda industrializada", "Vivienda prefabricada"],
                            answerIndex: 1,
                            explain: "La vivienda vernácula es un tipo de construcción tradicional desarrollada de manera autóctona con materiales de la zona y formas de construcción acordes a la región geográfica."
                        },
                        {
                            topic: "Pensamiento sistémico en arquitectura vernácula",
                            q: "¿Qué aporte de la arquitectura vernácula se refiere a comprender el sistema en que se inserta la vivienda?",
                            options: ["Territorialidad", "Sentido comunitario", "Pensamiento sistémico", "Apropiado y apropiable"],
                            answerIndex: 2,
                            explain: "El pensamiento sistémico en la arquitectura vernácula implica comprender el sistema en que se inserta la vivienda (capas geológicas, meteorológicas, sociales, económicas, culturales)."
                        },
                        {
                            topic: "Sentido comunitario",
                            q: "¿Qué prácticas comunitarias acompañan la construcción de vivienda vernácula?",
                            options: ["Contratación de empresas", "Tequio, faena, mano vuelta", "Compra de materiales industrializados", "Préstamos bancarios"],
                            answerIndex: 1,
                            explain: "La construcción de vivienda vernácula conlleva procesos de cooperación comunitaria como tequio, faena y mano vuelta."
                        },
                        {
                            topic: "Solar",
                            q: "¿Qué es el 'solar' en la arquitectura vernácula?",
                            options: ["Un panel de energía", "La unidad territorial básica donde se inserta la vivienda, producción de alimentos, crianza de animales y convivencia", "Una herramienta de construcción", "Un tipo de techo"],
                            answerIndex: 1,
                            explain: "El solar es el espacio definido en el que se inserta la vivienda, la producción y almacenaje de alimentos, la crianza de animales, la confección de vestimenta y la convivencia familiar."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Espacios en Disputa: Entornos, Problemáticas y Acción Colectiva",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Problemáticas del Espacio Urbano y Ambiental",
                    desc: "Análisis de crisis de vivienda, gentrificación, especulación inmobiliaria, contaminación, deforestación, desertificación, escasez de agua y migración.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Gentrificación",
                            q: "¿Qué es la gentrificación?",
                            options: ["Construcción de viviendas nuevas", "Proceso de transformación urbanística de una zona deprimida que provoca desplazamiento de vecinos empobrecidos por otros de mayor nivel social", "Demolición de edificios", "Creación de parques públicos"],
                            answerIndex: 1,
                            explain: "La gentrificación es el proceso de transformación o rehabilitación urbanística de una zona deprimida que provoca el desplazamiento de los vecinos empobrecidos por otros de nivel social y económico más alto."
                        },
                        {
                            topic: "Especulación inmobiliaria",
                            q: "¿En qué consiste la especulación inmobiliaria?",
                            options: ["Construir viviendas para habitar", "Comprar vivienda no para habitarla sino para venderla por encima del valor real esperando que aumente", "Rentar viviendas", "Demoler viviendas antiguas"],
                            answerIndex: 1,
                            explain: "La especulación inmobiliaria consiste en la compra de vivienda no para ser habitada a corto plazo, sino para ser vendida por encima del valor real, esperando su aumento futuro."
                        },
                        {
                            topic: "Discriminación en vivienda",
                            q: "Según CONAPRED, ¿cuál fue el motivo de discriminación más frecuente en el acceso a la vivienda entre 2015 y 2022?",
                            options: ["Orientación sexual", "Condición económica", "Discapacidad", "Nacionalidad"],
                            answerIndex: 2,
                            explain: "El CONAPRED registró 27 casos de discriminación en acceso a vivienda, siendo el motivo más frecuente la discapacidad, seguido de condición económica y orientación sexual."
                        },
                        {
                            topic: "Población LGBTIQ+ y vivienda",
                            q: "¿Qué porcentaje de personas en situación de calle pertenecen a la comunidad LGBTIQ+ según estudios?",
                            options: ["5-10%", "10-15%", "20-40%", "50-60%"],
                            answerIndex: 2,
                            explain: "Estudios señalan que entre 20 y 40 por ciento de personas en situación de calle pertenecen a la comunidad LGBTIQ+, y más del 80% fueron expulsados de sus hogares."
                        },
                        {
                            topic: "Contaminación antropogénica",
                            q: "¿Qué es la contaminación antropogénica?",
                            options: ["La causada por erupciones volcánicas", "La producida por el hombre", "La natural de los ecosistemas", "La de los océanos"],
                            answerIndex: 1,
                            explain: "La contaminación antropogénica es la producida por el hombre, que ha alcanzado niveles alarmantes de afectación a los recursos naturales."
                        },
                        {
                            topic: "DDT",
                            q: "¿Para qué fue utilizado inicialmente el DDT?",
                            options: ["Como fertilizante", "Como insecticida para exterminar plagas y erradicar enfermedades", "Como combustible", "Como conservador de alimentos"],
                            answerIndex: 1,
                            explain: "El DDT se usó como insecticida para exterminar plagas, aumentar la producción de cosechas y erradicar enfermedades, siendo considerado una 'maravilla de la humanidad'."
                        },
                        {
                            topic: "Contaminación por vehículos",
                            q: "¿Qué porcentaje de la contaminación atmosférica del Valle de México procede de vehículos automotores?",
                            options: ["50%", "70%", "80%", "90%"],
                            answerIndex: 1,
                            explain: "Se calcula que 70% de la contaminación atmosférica de la zona metropolitana del Valle de México procede de los vehículos automotores."
                        },
                        {
                            topic: "Deforestación",
                            q: "¿Qué porcentaje de animales y plantas del planeta se encuentran en los bosques?",
                            options: ["50%", "60%", "70%", "80%"],
                            answerIndex: 2,
                            explain: "El 70% de los animales y plantas del planeta se encuentran en los bosques, y muchos no soportan la deforestación y se extinguen."
                        },
                        {
                            topic: "Desertificación",
                            q: "¿Qué factores provocan principalmente la desertificación?",
                            options: ["Solo factores climáticos", "Interacción de actividades humanas y variaciones climáticas", "Solo actividades industriales", "Erupciones volcánicas"],
                            answerIndex: 1,
                            explain: "La desertificación es provocada por la interacción de diferentes factores derivados de las actividades humanas y las variaciones climáticas."
                        },
                        {
                            topic: "Migración según INEGI",
                            q: "¿Cómo define el INEGI la migración?",
                            options: ["Solo movimiento internacional", "El cambio de residencia temporal o definitiva para mejorar situación económica, desarrollo personal y familiar", "Solo migración campo-ciudad", "Desplazamiento forzado"],
                            answerIndex: 1,
                            explain: "El INEGI define la migración como 'el cambio de residencia de una o varias personas de manera temporal o definitiva, generalmente con la intención de mejorar su situación económica y desarrollo personal y familiar'."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Territorio y Autonomía de Pueblos Indígenas",
                    desc: "Comprensión del territorio autónomo, procesos autonómicos de pueblos indígenas en México.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Territorio y autonomía indígena",
                            q: "¿Qué derecho fundamental ejercen los pueblos indígenas a través de su relación con el espacio que habitan?",
                            options: ["Derecho a la propiedad privada", "Derecho a la libre determinación", "Derecho al voto", "Derecho a la educación"],
                            answerIndex: 1,
                            explain: "La relación de los pueblos indígenas con el espacio les permite ejercer un derecho fundamental: el derecho a la libre determinación."
                        },
                        {
                            topic: "Reforma constitucional indígena",
                            q: "¿En qué año se realizó la reforma constitucional en materia de derechos y cultura indígena en México?",
                            options: ["1992", "2001", "2006", "2010"],
                            answerIndex: 1,
                            explain: "En 2001 se realizó la reforma constitucional en materia de derechos y cultura indígena, concediendo a los pueblos originarios aspirar a ejercer su derecho a la autonomía."
                        },
                        {
                            topic: "EZLN",
                            q: "¿Qué movimiento indígena en Chiapas ha formado los Caracoles y las Juntas de Buen Gobierno?",
                            options: ["CRAC", "EZLN (Ejército Zapatista de Liberación Nacional)", "Policía Comunitaria", "Municipio de Cherán"],
                            answerIndex: 1,
                            explain: "El EZLN ha formado los Caracoles y las Juntas de Buen Gobierno en los Altos y las Cañadas de Chiapas como parte de su proyecto político."
                        },
                        {
                            topic: "CRAC",
                            q: "¿Qué proceso autonómico se desarrolla en la región Costa y Montaña de Guerrero?",
                            options: ["Caracoles y Juntas de Buen Gobierno", "Policía Comunitaria y Consejo Regional de Autoridades Comunitarias (CRAC)", "Municipio de Cherán", "Gobierno de Xochimilco"],
                            answerIndex: 1,
                            explain: "En la región Costa y Montaña de Guerrero se desarrolla el proceso de la policía comunitaria y el Consejo Regional de Autoridades Comunitarias (CRAC)."
                        },
                        {
                            topic: "Cherán",
                            q: "¿Qué municipio de Michoacán es ejemplo de proceso autonómico indígena?",
                            options: ["Morelia", "Pátzcuaro", "Cherán", "Zamora"],
                            answerIndex: 2,
                            explain: "El municipio autónomo de Cherán, en Michoacán, es un ejemplo de proceso autonómico indígena en México."
                        },
                        {
                            topic: "Autonomía indígena",
                            q: "¿Cuál es una de las directrices de los procesos autonómicos indígenas?",
                            options: ["Depender del gobierno federal", "Fortalecer sus propios gobiernos e instituciones según sus tradiciones", "Eliminar sus costumbres", "Migrar a las ciudades"],
                            answerIndex: 1,
                            explain: "Los procesos autonómicos buscan fortalecer sus propios gobiernos e instituciones, según las tradiciones de cada comunidad, y defender sus territorios."
                        },
                        {
                            topic: "Xochimilco",
                            q: "¿Qué alcaldía de la Ciudad de México participa en procesos autonómicos?",
                            options: ["Cuauhtémoc", "Iztapalapa", "Xochimilco", "Miguel Hidalgo"],
                            answerIndex: 2,
                            explain: "Los pueblos de la alcaldía de Xochimilco participan en procesos autonómicos junto con otras comunidades."
                        },
                        {
                            topic: "Defensa del territorio indígena",
                            q: "¿Qué incluye la defensa del territorio para los pueblos indígenas?",
                            options: ["Solo lugares sagrados", "Solo recursos naturales", "Lugares sagrados y recursos naturales", "Solo fronteras"],
                            answerIndex: 2,
                            explain: "La defensa del territorio indígena incluye no sólo los lugares sagrados sino también los recursos naturales."
                        },
                        {
                            topic: "Multiculturalidad en Constitución",
                            q: "¿En qué artículo constitucional se reconoce a los pueblos indígenas como parte sustantiva de la multiculturalidad de la nación?",
                            options: ["Artículo 1°", "Artículo 2°", "Artículo 4°", "Artículo 27"],
                            answerIndex: 2,
                            explain: "Las peticiones indígenas fueron incluidas en el artículo 4° de la Constitución como 'parte sustantiva de la multiculturalidad de la nación'."
                        },
                        {
                            topic: "Movimientos indígenas",
                            q: "¿Qué dos direcciones siguen los movimientos indígenas según López (2019)?",
                            options: ["Resistencia y sumisión", "Resistencia para no dejar de ser pueblos y emancipación para no seguir siendo colonias", "Aislamiento y rechazo", "Integración y olvido"],
                            answerIndex: 1,
                            explain: "Los movimientos indígenas siguen una doble dirección: 'de resistencia para no dejar de ser pueblos, [y de] emancipación para no seguir siendo colonias'."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Soluciones Ambientales y Educación Ambiental",
                    desc: "Identificación de soluciones ambientales, protocolos internacionales y educación ambiental en México.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Soluciones ambientales",
                            q: "Según Amestoy (2013), ¿qué se recomienda para atenuar el cambio climático en el rubro de agricultura?",
                            options: ["Aumentar fertilizantes", "Reajustar las fechas de plantación y cultivar distintos productos", "Reducir áreas de cultivo", "Importar alimentos"],
                            answerIndex: 1,
                            explain: "Debido a cambios de temperatura y patrones de lluvias, es necesario reajustar las fechas de plantación y cultivar distintos productos para incrementar la productividad."
                        },
                        {
                            topic: "Cumbre de Río de Janeiro 1992",
                            q: "¿Qué documentos fueron adoptados en la Cumbre de Río de Janeiro de 1992?",
                            options: ["Protocolo de Kioto", "Agenda 21, Declaración sobre Medio Ambiente y Desarrollo, y Declaración de Principios del Bosque", "Tratado de París", "Carta de la Tierra"],
                            answerIndex: 1,
                            explain: "En la Cumbre de Río se adoptaron la Agenda 21, la Declaración sobre Medio Ambiente y Desarrollo, y la Declaración de Principios del Bosque."
                        },
                        {
                            topic: "Protocolo de Kioto",
                            q: "¿Qué estableció el Protocolo de Kioto de 1997?",
                            options: ["La creación de la ONU", "Un protocolo legalmente vinculante que puso límites a las emisiones de gases de efecto invernadero", "La erradicación de la pobreza", "La protección de los océanos"],
                            answerIndex: 1,
                            explain: "El Protocolo de Kioto adoptó un protocolo legalmente vinculante que puso límites a las emisiones de los principales gases que provocan el efecto invernadero a nivel mundial."
                        },
                        {
                            topic: "Cumbre de Barcelona 2009",
                            q: "¿Qué compromisos adquirió la Unión Europea en la Cumbre de Barcelona 2009?",
                            options: ["Reducir 50% de emisiones", "Reducir 20% de emisiones de CO2, lograr 20% de energías limpias y ahorrar 20% de consumo energético para 2020", "Eliminar combustibles fósiles", "Reforestar el 30% del territorio"],
                            answerIndex: 1,
                            explain: "La UE se comprometió a reducir en un 20% las emisiones de CO2 para 2020, lograr que las energías limpias sean el 20% y ahorrar un 20% el consumo energético."
                        },
                        {
                            topic: "Países megadiversos",
                            q: "¿Cuántos países integran el selecto grupo de naciones megadiversas?",
                            options: ["8", "10", "12", "15"],
                            answerIndex: 2,
                            explain: "México forma parte del selecto grupo de 12 naciones poseedoras del mayor número de especies, concentrando casi el 10% de la diversidad mundial."
                        },
                        {
                            topic: "México megadiverso",
                            q: "¿Qué porcentaje de la diversidad mundial de especies posee México aproximadamente?",
                            options: ["5%", "10%", "15%", "20%"],
                            answerIndex: 1,
                            explain: "México concentra aproximadamente el 10% de la diversidad mundial de especies, lo que lo coloca como país megadiverso."
                        },
                        {
                            topic: "Regiones biogeográficas de México",
                            q: "¿Qué dos zonas biogeográficas confluyen en el territorio mexicano?",
                            options: ["Neártica y Neotropical", "Paleártica y Oriental", "Australiana y Antártica", "Etiópica y Neártica"],
                            answerIndex: 0,
                            explain: "En México confluyen dos zonas biogeográficas importantes: la Neártica (zona templada) y la Neotropical (zona tropical)."
                        },
                        {
                            topic: "Diversidad de reptiles en México",
                            q: "¿En qué lugar mundial se encuentra México en diversidad de reptiles?",
                            options: ["Primer lugar", "Segundo lugar", "Tercer lugar", "Quinto lugar"],
                            answerIndex: 0,
                            explain: "México ocupa los primeros lugares mundiales en diversidad de reptiles y aves."
                        },
                        {
                            topic: "Educación ambiental",
                            q: "Según la Conabio, ¿qué institución confirma que México es un país megadiverso?",
                            options: ["SEMARNAT", "CONANP", "CONABIO (Comisión Nacional para el Conocimiento y Uso de la Biodiversidad)", "INEGI"],
                            answerIndex: 2,
                            explain: "La CONABIO ha realizado investigaciones que confirman que México es un país megadiverso por su alta concentración de especies."
                        },
                        {
                            topic: "Energías limpias",
                            q: "¿Qué solución energética se propone para disminuir la dependencia de combustibles fósiles?",
                            options: ["Usar más petróleo", "Promover cableado bajo tierra, mayor uso de fuentes renovables y energías limpias", "Aumentar plantas nucleares", "Importar energía"],
                            answerIndex: 1,
                            explain: "Entre las soluciones energéticas se encuentran promover el cableado bajo tierra, mayor uso de fuentes renovables y energías limpias, disminuyendo la dependencia de combustibles fósiles."
                        }
                    ]
                }
            }
        }
    }
};

export default espacioSociedad;