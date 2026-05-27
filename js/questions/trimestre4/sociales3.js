// ============================================
// CIENCIAS SOCIALES III: ESTADO, CRISIS Y MOVIMIENTOS SOCIALES - TERCER TRIMESTRE
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const cienciasSociales = {
    id: "cienciasSociales",
    nombre: "CIENCIAS SOCIALES III: ESTADO, CRISIS Y MOVIMIENTOS SOCIALES",
    icono: "🏛️",
    descripcion: "Estudio del Estado mexicano, el Estado benefactor y neoliberal, derechos humanos, movimientos antisistema, geografía económica y política, poderes fácticos, medios de comunicación, impacto ambiental y globalización.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: El Estado Mexicano y el Estado Benefactor: Características y Diferencias",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Estado Benefactor y Reconstrucción Nacional",
                    desc: "Comprensión del Estado benefactor, sus antecedentes, la Reconstrucción Nacional, el cardenismo y los modelos económicos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Estado Benefactor",
                            q: "¿En qué periodo histórico comenzó a adoptarse el Estado Benefactor en México?",
                            options: ["Durante el Porfiriato", "En el periodo de entreguerras con gobiernos posrevolucionarios", "Durante la Independencia", "En el gobierno de Vicente Fox"],
                            answerIndex: 1,
                            explain: "El Estado Benefactor comenzó a adoptarse en México con los gobiernos posrevolucionarios en un periodo de entreguerras (Primera y Segunda Guerra Mundial), con base en la Constitución de 1917."
                        },
                        {
                            topic: "Milagro mexicano",
                            q: "¿Qué presidentes mexicanos estuvieron asociados con el periodo conocido como 'milagro mexicano'?",
                            options: ["Lázaro Cárdenas y Andrés Manuel López Obrador", "Manuel Ávila Camacho y Miguel Alemán Valdés", "Porfirio Díaz y Benito Juárez", "Felipe Calderón y Enrique Peña Nieto"],
                            answerIndex: 1,
                            explain: "El 'milagro mexicano' ocurrió durante los sexenios de Manuel Ávila Camacho y Miguel Alemán Valdés, con crecimiento exponencial por sustitución de importaciones."
                        },
                        {
                            topic: "Nacionalización petrolera",
                            q: "¿Quién fue el presidente mexicano que decretó la nacionalización de la industria petrolera en marzo de 1938?",
                            options: ["Manuel Ávila Camacho", "Miguel Alemán Valdés", "Lázaro Cárdenas del Río", "Plutarco Elías Calles"],
                            answerIndex: 2,
                            explain: "Lázaro Cárdenas del Río decretó la nacionalización petrolera el 18 de marzo de 1938, creando PEMEX."
                        },
                        {
                            topic: "Tratados de Bucareli",
                            q: "¿Qué establecieron los Tratados de Bucareli firmados por el gobierno de Álvaro Obregón?",
                            options: ["La independencia de México", "La reparación de daños a propiedades de ciudadanos estadounidenses", "El fin de la guerra cristera", "La creación del PNR"],
                            answerIndex: 1,
                            explain: "Los Tratados de Bucareli establecieron la reparación de daños a propiedades de ciudadanos estadounidenses durante el proceso armado y la indemnización por expropiación de tierras."
                        },
                        {
                            topic: "Guerra Cristera",
                            q: "¿Qué ley desencadenó el conflicto religioso conocido como Guerra Cristera (1926-1929)?",
                            options: ["Ley de Educación Socialista", "Ley Calles que restringía el culto católico", "Ley de Nacionalización Petrolera", "Ley de Reforma Agraria"],
                            answerIndex: 1,
                            explain: "La Guerra Cristera estalló con la expedición de la Ley Calles, que restringía el culto católico y el número de sacerdotes, afectando a la región centro-occidente."
                        },
                        {
                            topic: "Maximato",
                            q: "¿Quién fue conocido como el 'Jefe Máximo de la Revolución' durante el periodo de 1929 a 1934?",
                            options: ["Lázaro Cárdenas", "Álvaro Obregón", "Plutarco Elías Calles", "Emilio Portes Gil"],
                            answerIndex: 2,
                            explain: "Plutarco Elías Calles se autonombró Jefe Máximo de la Revolución durante el periodo conocido como Maximato, ejerciendo influencia sobre tres presidentes."
                        },
                        {
                            topic: "IMSS",
                            q: "¿En qué año fue creado el Instituto Mexicano del Seguro Social (IMSS) y quién fue el presidente?",
                            options: ["1938 con Lázaro Cárdenas", "1943 con Manuel Ávila Camacho", "1946 con Miguel Alemán", "1958 con Adolfo López Mateos"],
                            answerIndex: 1,
                            explain: "El IMSS fue creado en 1943 durante el gobierno de Manuel Ávila Camacho como parte del fortalecimiento del apoyo al sector obrero."
                        },
                        {
                            topic: "Plan Sexenal",
                            q: "¿Qué presidente mexicano implementó el Plan Sexenal como programa de gobierno?",
                            options: ["Plutarco Elías Calles", "Manuel Ávila Camacho", "Lázaro Cárdenas", "Álvaro Obregón"],
                            answerIndex: 2,
                            explain: "Lázaro Cárdenas implementó el Plan Sexenal, un programa que enfatizaba el papel del Estado como protector de la sociedad y garante de mejores condiciones de vida."
                        },
                        {
                            topic: "Educación socialista",
                            q: "¿Qué presidente mexicano impulsó la educación socialista mediante la modificación del Artículo 3º Constitucional?",
                            options: ["Plutarco Elías Calles", "Manuel Ávila Camacho", "Lázaro Cárdenas", "Miguel Alemán Valdés"],
                            answerIndex: 2,
                            explain: "Lázaro Cárdenas impulsó la educación socialista, promoviendo una conciencia crítica, reflexiva y nacionalista para alejar a la juventud del fanatismo religioso."
                        },
                        {
                            topic: "Sustitución de importaciones",
                            q: "¿En qué consiste el Modelo de Sustitución de Importaciones (ISI)?",
                            options: ["Aumentar las importaciones de bienes extranjeros", "Sustituir bienes importados por los producidos nacionalmente", "Privatizar todas las empresas estatales", "Eliminar los impuestos a la importación"],
                            answerIndex: 1,
                            explain: "El Modelo de Sustitución de Importaciones busca sustituir los bienes importados por los producidos nacionalmente para lograr independencia de potencias económicas."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Libre Comercio, Desigualdad y Ética Ambiental",
                    desc: "Análisis del libre comercio, la desigualdad global, migración, problemas éticos ambientales y desarrollo sustentable.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Desigualdad global",
                            q: "Según el texto, ¿qué dos tendencias conforman la desigualdad global?",
                            options: ["Dentro de los países y entre los países", "Económica y política", "Social y cultural", "Urbana y rural"],
                            answerIndex: 0,
                            explain: "La desigualdad global es la unión de dos tendencias: la primera dentro de los países y la segunda entre los países, provocando disparidades en la distribución de beneficios."
                        },
                        {
                            topic: "Consumismo",
                            q: "¿Qué es una 'sociedad de consumo' según el texto?",
                            options: ["Cuando la demanda ciudadana dirige la producción", "Cuando la demanda se dirige en función de las exigencias de la industria", "Cuando no existe producción industrial", "Cuando solo se consumen bienes básicos"],
                            answerIndex: 1,
                            explain: "Una sociedad de consumo ocurre cuando la demanda de los ciudadanos se dirige en función de las exigencias de la industria, dominando los valores de la moda y los medios."
                        },
                        {
                            topic: "Bienes compartibles",
                            q: "¿Cuáles son ejemplos de 'bienes compartibles' según Fontrodona?",
                            options: ["Oficinas y beneficios laborales", "El amor, la amistad y la solidaridad", "Automóviles y casas", "Tecnología y electrodomésticos"],
                            answerIndex: 1,
                            explain: "Los bienes compartibles como el amor, la amistad y la solidaridad crecen cuando se comparten y escapan de las leyes del consumo."
                        },
                        {
                            topic: "Migración",
                            q: "Según el texto, ¿cuál debería ser la prioridad de los Estados respecto a la migración?",
                            options: ["Solo regular la legalidad", "Enfocarse en seguridad ciudadana", "Atender las causas de la migración", "Construir muros fronterizos"],
                            answerIndex: 2,
                            explain: "Las causas de la migración deben ser prioridad de los Estados, ya que si solo se enfocan en regulación o seguridad, el fenómeno social permanecerá sin resolverse."
                        },
                        {
                            topic: "Ética Ambiental",
                            q: "¿Cómo se denomina la ética especial que se centra en la argumentación moral sobre nuestras relaciones con el entorno natural?",
                            options: ["Bioética", "Ecoética o Ética Ambiental", "Ética Médica", "Ética Profesional"],
                            answerIndex: 1,
                            explain: "La ética especial centrada en la argumentación moral sobre nuestras relaciones con el entorno natural se llama Ecoética, Ética Ecológica o Ética Ambiental."
                        },
                        {
                            topic: "Desarrollo sustentable",
                            q: "¿En qué documento fue definido por primera vez el concepto de 'desarrollo sustentable'?",
                            options: ["Declaración Universal de los DDHH", "Informe Brundtland 'Nuestro Futuro Común' (1987)", "Protocolo de Kioto", "Agenda 21"],
                            answerIndex: 1,
                            explain: "El desarrollo sustentable fue definido en la Comisión Mundial para el Ambiente y Desarrollo, conocida como Comisión Brundtland 'Nuestro Futuro Común' en 1987."
                        },
                        {
                            topic: "Deforestación",
                            q: "Según el texto, ¿qué porcentaje de animales y plantas del planeta se encuentran en los bosques?",
                            options: ["50%", "60%", "70%", "80%"],
                            answerIndex: 2,
                            explain: "El 70% de los animales y plantas del planeta se encuentran en los bosques, y muchos no soportan la deforestación y se extinguen."
                        },
                        {
                            topic: "Desertificación",
                            q: "¿Qué factores provocan principalmente la desertificación según el texto?",
                            options: ["Solo factores climáticos", "Interacción de actividades humanas y variaciones climáticas", "Solo actividades industriales", "Erupciones volcánicas"],
                            answerIndex: 1,
                            explain: "La desertificación es provocada por la interacción de diferentes factores derivados de las actividades humanas y las variaciones climáticas."
                        },
                        {
                            topic: "Escasez de agua",
                            q: "Según la CONAGUA e IPCC, ¿qué se prevé durante el siglo XXI en regiones subtropicales secas?",
                            options: ["Aumento del agua renovable", "Reducción del agua renovable superficial y subterránea", "No habrá cambios", "Aumento de glaciares"],
                            answerIndex: 1,
                            explain: "Se prevé que durante el siglo XXI se reduzca el agua renovable superficial y subterránea en la mayoría de las regiones subtropicales secas."
                        },
                        {
                            topic: "Crisis ambiental",
                            q: "Según Enrique Leff, ¿cómo se puede comprender la crisis ambiental global?",
                            options: ["Como un fenómeno natural", "Como una crisis civilizatoria derivada de formas de apropiación humana de recursos naturales", "Como un problema económico menor", "Como un ciclo natural del planeta"],
                            answerIndex: 1,
                            explain: "Leff comenta que la crisis ambiental se puede comprender como una crisis civilizatoria derivada de las formas de apropiación que el ser humano ha realizado sobre los recursos naturales."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Discriminación, Geografía y Espacios Sociales",
                    desc: "Identificación de tipos de discriminación, nacionalismo, geografía económica, política, espacios rurales y urbanos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Discriminación",
                            q: "¿Cuál es el origen etimológico de la palabra 'discriminación'?",
                            options: ["Del griego 'diskrimen'", "Del latín 'discriminatio' que equivale a separación o distinción", "Del inglés 'discrimination'", "Del francés 'discriminer'"],
                            answerIndex: 1,
                            explain: "Discriminación proviene del latín 'discriminatio', que equivale a separación o distinción, asociado a 'crimen' para referirse a exclusión por razones religiosas, sociales, étnicas o económicas."
                        },
                        {
                            topic: "Anomia",
                            q: "Según Émile Durkheim, ¿qué es la 'anomia'?",
                            options: ["La falta de leyes", "El debilitamiento de la moral común que no constriñe al individuo", "La discriminación económica", "La desigualdad social"],
                            answerIndex: 1,
                            explain: "Durkheim entendió por anomia el debilitamiento de un tipo de moral común, cuando la moral no constriñe lo suficiente al individuo y no distingue entre lo adecuado e inadecuado."
                        },
                        {
                            topic: "Nacionalismo",
                            q: "¿Qué bula papal reconoció oficialmente la capacidad racional de los indígenas americanos en 1537?",
                            options: ["Bula de Oro", "Sublimis Deus", "Inter Caetera", "Romanus Pontifex"],
                            answerIndex: 1,
                            explain: "El papa Pablo III dictó la bula 'Sublimis Deus' en 1537 para reconocer oficialmente la capacidad racional de los indios."
                        },
                        {
                            topic: "Geografía económica",
                            q: "¿Qué estudia la geografía económica según Lloyd y Dicken?",
                            options: ["Solo los recursos naturales", "El funcionamiento del sistema económico en el espacio a través de sus rasgos visibles", "Solo la población", "La historia de los países"],
                            answerIndex: 1,
                            explain: "La geografía económica busca crear métodos y teorías que permitan explicar el funcionamiento del sistema económico en el espacio a través de sus rasgos visibles como minas, industrias, comercios, etc."
                        },
                        {
                            topic: "Actividades económicas",
                            q: "¿Cómo se clasifican las actividades económicas que modifican el espacio?",
                            options: ["Públicas y privadas", "Primarias, secundarias y terciarias", "Nacionales e internacionales", "Formales e informales"],
                            answerIndex: 1,
                            explain: "Las actividades económicas que modifican el espacio se clasifican en primarias (relación directa con la base natural), secundarias (transformación) y terciarias (servicios)."
                        },
                        {
                            topic: "Geografía política",
                            q: "¿Cuáles son los tres elementos esenciales del Estado?",
                            options: ["Presidente, Congreso y Suprema Corte", "Territorio, población y gobierno", "Leyes, normas y constitución", "Ejército, policía y tribunales"],
                            answerIndex: 1,
                            explain: "El Estado está constituido por tres elementos esenciales: territorio, población y gobierno."
                        },
                        {
                            topic: "Tipos de Estado",
                            q: "¿Qué diferencia a un Estado federal de uno central?",
                            options: ["El federal tiene mayor poder económico", "El federal implica alianza entre pueblos con cierta autonomía", "El central tiene más población", "El central es más democrático"],
                            answerIndex: 1,
                            explain: "Un Estado federal implica un nivel de alianza establecida entre diferentes pueblos, cada uno con cierta autonomía para gobernarse, como en México con 32 Estados."
                        },
                        {
                            topic: "Fronteras naturales",
                            q: "¿Cuál es un ejemplo de frontera natural mencionado en el texto?",
                            options: ["El Muro de Berlín", "El Río Bravo entre México y Estados Unidos", "La Línea Maginot", "La Cortina de Hierro"],
                            answerIndex: 1,
                            explain: "Un ejemplo de frontera natural es el Río Bravo entre México y Estados Unidos, así como los montes Urales en Europa."
                        },
                        {
                            topic: "Espacio rural",
                            q: "¿Qué caracteriza al espacio rural según el texto?",
                            options: ["Predominio de actividades industriales", "Predominio de actividades primarias (agricultura, ganadería, minería)", "Alta densidad poblacional", "Ausencia de actividades económicas"],
                            answerIndex: 1,
                            explain: "El espacio rural se caracteriza por el predominio de las actividades primarias como agricultura, ganadería, pesca, minería y explotación forestal."
                        },
                        {
                            topic: "Geografía de la población",
                            q: "¿Qué ciencia auxilia a la geografía de la población en sus estudios cuantitativos?",
                            options: ["La historia", "La demografía y la estadística", "La filosofía", "La literatura"],
                            answerIndex: 1,
                            explain: "La geografía de la población se apoya en ciencias como la demografía, la estadística y la cartografía para realizar estudios cualitativos y cuantitativos."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Juventudes, Crisis y Relaciones de Poder en los Siglos XX y XXI",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Orden Económico Internacional y Guerra Fría",
                    desc: "Comprensión del orden económico internacional, la Guerra Fría, Bretton Woods y el Nuevo Orden Económico Internacional.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Guerra Fría",
                            q: "¿Entre qué años se desarrolló el periodo conocido como Guerra Fría?",
                            options: ["1914-1918", "1939-1945", "1947-1991", "1950-1953"],
                            answerIndex: 2,
                            explain: "La Guerra Fría inició en 1947 y duró hasta 1991 (año de la desintegración de la URSS)."
                        },
                        {
                            topic: "Guerra Fría",
                            q: "¿Por qué se le llama 'Guerra Fría' al conflicto entre Estados Unidos y la URSS?",
                            options: ["Porque ocurrió en Siberia", "Porque nunca se enfrentaron directamente militarmente a pesar de las tensiones", "Porque solo fue una guerra económica", "Porque duró muy poco tiempo"],
                            answerIndex: 1,
                            explain: "Se llama Guerra Fría porque ambas potencias nunca se enfrentaron directamente desde el punto de vista militar, a pesar de ser las únicas superpotencias con capacidades nucleares."
                        },
                        {
                            topic: "Bretton Woods",
                            q: "¿Qué decisión tomó el presidente Richard Nixon en agosto de 1971 respecto al dólar?",
                            options: ["Vinculó el dólar al euro", "Declaró la inconvertibilidad del dólar en oro", "Duplicó el valor del dólar", "Creó el euro"],
                            answerIndex: 1,
                            explain: "Nixon declaró la inconvertibilidad del dólar en oro, terminando de manera unilateral con el acuerdo de Bretton Woods."
                        },
                        {
                            topic: "Crisis petrolera de 1973",
                            q: "¿Qué organización impuso un embargo petrolero a las naciones desarrolladas en 1973?",
                            options: ["ONU", "FMI", "OPEP", "OTAN"],
                            answerIndex: 2,
                            explain: "La Organización de Países Exportadores de Petróleo (OPEP) impuso un embargo petrolero a las naciones desarrolladas por apoyar a Israel en la Guerra de Yom Kippur."
                        },
                        {
                            topic: "Nuevo Orden Económico Internacional",
                            q: "¿En qué año la ONU planteó el establecimiento de un Nuevo Orden Económico Internacional?",
                            options: ["1945", "1968", "1974", "1982"],
                            answerIndex: 2,
                            explain: "En 1974, debido a la crisis, la ONU planteó el establecimiento de un Nuevo Orden Económico Internacional basado en equidad, igualdad soberana, interdependencia e interés común."
                        },
                        {
                            topic: "Soberanía sobre recursos",
                            q: "¿Qué principio fundamental del Nuevo Orden Económico Internacional se refiere al control de inversión extranjera?",
                            options: ["Libre comercio", "Plena y permanente soberanía de todos los Estados sobre sus recursos naturales", "Privatización", "Desregulación"],
                            answerIndex: 1,
                            explain: "El Nuevo Orden Económico Internacional establece la plena y permanente soberanía de todos los Estados sobre sus recursos naturales, incluyendo el control de inversión extranjera."
                        },
                        {
                            topic: "Colapso de la URSS",
                            q: "¿En qué año se desintegró la Unión Soviética (URSS)?",
                            options: ["1985", "1989", "1991", "1995"],
                            answerIndex: 2,
                            explain: "La URSS se desintegró en 1991, quedando vía libre para que el capitalismo y el neoliberalismo se impusieran en el mundo."
                        },
                        {
                            topic: "Etapas del orden económico",
                            q: "¿Qué caracterizó la tercera etapa del orden económico internacional (post-Segunda Guerra Mundial)?",
                            options: ["Proteccionismo económico", "Bases para el orden neoliberal, libre comercio y cooperación multilateral", "Revolución Industrial", "Crisis del dólar"],
                            answerIndex: 1,
                            explain: "La tercera etapa, al terminar la Segunda Guerra Mundial, dio las bases para el orden neoliberal, surgiendo una filosofía de mercado, libre comercio y cooperación multilateral."
                        },
                        {
                            topic: "ONU",
                            q: "¿En qué año fue creada la Organización de las Naciones Unidas (ONU)?",
                            options: ["1918", "1945", "1950", "1968"],
                            answerIndex: 1,
                            explain: "La ONU fue creada en 1945 al término de la Segunda Guerra Mundial."
                        },
                        {
                            topic: "Expansión del comercio mundial",
                            q: "¿Qué buscaban las resoluciones del Nuevo Orden Económico respecto al comercio mundial?",
                            options: ["Aumentar aranceles", "Asegurar mayor participación en el mercado mundial para países en desarrollo", "Eliminar el comercio internacional", "Proteger solo a países desarrollados"],
                            answerIndex: 1,
                            explain: "Las resoluciones buscaban asegurar una mayor participación en el mercado mundial para los países en desarrollo sin discriminaciones por diferencias de sistemas políticos, económicos o sociales."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Poderes Fácticos y Medios de Comunicación",
                    desc: "Identificación de poderes fácticos, grupos empresariales, historia de la prensa, radio, televisión y cine en México.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Poderes fácticos",
                            q: "Según Jacqueline Peschard, ¿cómo define los 'poderes fácticos'?",
                            options: ["Como parte del gobierno", "Como actores que sin ser parte del cuadro institucionalizado tienen fuerza para condicionar la acción del Estado", "Como organismos internacionales", "Como partidos políticos"],
                            answerIndex: 1,
                            explain: "Peschard define los poderes fácticos como aquellos que sin ser parte del cuadro institucionalizado del poder tienen la fuerza para condicionar el ejercicio de la acción del Estado mexicano."
                        },
                        {
                            topic: "Poderes fácticos en México",
                            q: "Según el texto, ¿cuáles son dos poderes fácticos estrechamente relacionados en México?",
                            options: ["El ejército y la iglesia", "Los medios de comunicación y los grupos empresariales", "Los sindicatos y las ONG", "El narcotráfico y la iglesia"],
                            answerIndex: 1,
                            explain: "En México, los medios de comunicación (Televisa y TV Azteca) y los grupos empresariales son dos poderes fácticos que constantemente influyen o cuestionan al Estado mexicano."
                        },
                        {
                            topic: "Primer periódico en México",
                            q: "¿Cómo se llamó el primer periódico fundado en México en 1772?",
                            options: ["El Despertador Americano", "La Gaceta de México y Noticias de la Nueva España", "El Águila Mexicana", "El Imparcial"],
                            answerIndex: 1,
                            explain: "La Gaceta de México y Noticias de la Nueva España fue fundada en 1772 por el doctor Juan Ignacio Castorena, considerado el primer periodista de Hispanoamérica."
                        },
                        {
                            topic: "Despertador Americano",
                            q: "¿Quién ordenó la publicación y distribución del periódico 'Despertador Americano' en 1810?",
                            options: ["José María Morelos", "Miguel Hidalgo y Costilla", "Vicente Guerrero", "Ignacio Allende"],
                            answerIndex: 1,
                            explain: "Miguel Hidalgo y Costilla ordenó la publicación y distribución del Despertador Americano para difundir las ideas y objetivos del movimiento independentista."
                        },
                        {
                            topic: "Inicio de la radio en México",
                            q: "¿En qué año se realizó la primera transmisión radial en México durante el centenario de la Independencia?",
                            options: ["1910", "1917", "1921", "1930"],
                            answerIndex: 2,
                            explain: "La primera transmisión radial en México tuvo lugar en 1921 durante el centenario de la Independencia, con la dirección de Agustín Flores."
                        },
                        {
                            topic: "XEW",
                            q: "¿Cuándo surgió la radiodifusora XEW 'La voz de la América Latina desde México'?",
                            options: ["1923", "1930", "1940", "1950"],
                            answerIndex: 1,
                            explain: "La XEW surgió el 18 de septiembre de 1930 con el slogan 'XEW: la voz de la América Latina desde México'."
                        },
                        {
                            topic: "Guillermo González Camarena",
                            q: "¿Por qué se le conoce como el 'Padre de la televisión mexicana' a Guillermo González Camarena?",
                            options: ["Por ser el primer locutor de TV", "Por desarrollar el Sistema Tricromático Secuencial de Campos y la primera transmisión en México", "Por fundar Televisa", "Por ser el primer productor de telenovelas"],
                            answerIndex: 1,
                            explain: "González Camarena desarrolló su propio Sistema Tricromático Secuencial de Campos para dar color a la TV y realizó la primera transmisión en blanco y negro en 1946."
                        },
                        {
                            topic: "Televisa",
                            q: "¿En qué año se fundó Televisa (Televisión Vía Satélite)?",
                            options: ["1955", "1968", "1973", "1985"],
                            answerIndex: 2,
                            explain: "Televisa se fundó en 1973 tras la fusión entre Televisión Independiente de México (TIM) y Telesistema Mexicano."
                        },
                        {
                            topic: "Primera película de ficción mexicana",
                            q: "¿Cuál fue la primera cinta de ficción filmada en México en 1907?",
                            options: ["Santa", "El automóvil gris", "El grito de Dolores o La independencia de México", "Allá en el Rancho Grande"],
                            answerIndex: 2,
                            explain: "El grito de Dolores o La independencia de México (1907) fue la primera cinta de ficción filmada en México, interpretada por Felipe de Jesús Haro como Miguel Hidalgo."
                        },
                        {
                            topic: "Época de Oro del Cine Mexicano",
                            q: "¿Qué película marcó el inicio de la Época de Oro del Cine Mexicano?",
                            options: ["Santa", "Allá en el Rancho Grande", "¡Ay Jalisco, no te rajes!", "El automóvil gris"],
                            answerIndex: 1,
                            explain: "El estreno de 'Allá en el Rancho Grande' marcó el inicio de la Época de Oro del Cine Mexicano, inaugurando la comedia ranchera como primer subgénero nacional."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Movimientos Antisistema y Sociales",
                    desc: "Comprensión de movimientos antisistema, movimientos sociales de 1968, Mayo francés, Primavera de Praga y Tlatelolco.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Movimientos antisistema",
                            q: "¿Quién acuñó el vocablo 'antisistema' para nombrar grupos que luchan contra poderes políticos y económicos?",
                            options: ["Karl Marx", "Immanuel Wallerstein", "Max Weber", "Émile Durkheim"],
                            answerIndex: 1,
                            explain: "El sociólogo estadounidense Immanuel Wallerstein utilizó el vocablo 'antisistema' para nombrar a grupos que luchan en contra de los poderes político y económico."
                        },
                        {
                            topic: "Características antisistema",
                            q: "¿Cuál es una característica de los movimientos antisistema según el texto?",
                            options: ["Apoyan el neoliberalismo", "Cuestionan el poder político y económico actual", "Defienden el statu quo", "Promueven el autoritarismo"],
                            answerIndex: 1,
                            explain: "Los movimientos antisistema cuestionan el poder político y económico actual, buscan un mundo más democrático e igualitario y plantean un orden social alternativo."
                        },
                        {
                            topic: "Mayo francés 1968",
                            q: "¿Qué filósofo francés apoyó el movimiento estudiantil de mayo de 1968 en Francia?",
                            options: ["Albert Camus", "Jean-Paul Sartré", "Michel Foucault", "Jacques Derrida"],
                            answerIndex: 1,
                            explain: "Jean-Paul Sartré, junto con otros intelectuales, apoyó al movimiento estudiantil francés al que luego se unieron los obreros, manifestándose contra el gobierno de Charles de Gaulle."
                        },
                        {
                            topic: "Primavera de Praga",
                            q: "¿Qué país invadió militarmente Checoslovaquia en 1968 para reprimir la 'Primavera de Praga'?",
                            options: ["Estados Unidos", "Alemania", "URSS (Unión Soviética)", "Francia"],
                            answerIndex: 2,
                            explain: "La élite de Moscú consideró peligroso el gobierno reformista de Dubček y determinó utilizar la intervención militar para reprimir la Primavera de Praga."
                        },
                        {
                            topic: "Movimiento estudiantil de 1968 en México",
                            q: "¿En qué fecha ocurrió la matanza de estudiantes en la Plaza de las Tres Culturas en Tlatelolco?",
                            options: ["26 de julio de 1968", "2 de octubre de 1968", "20 de noviembre de 1968", "1 de diciembre de 1968"],
                            answerIndex: 1,
                            explain: "El 2 de octubre de 1968, el presidente Gustavo Díaz Ordaz y su secretario de Gobernación Luis Echeverría mandaron reprimir violentamente a estudiantes en la Plaza de las Tres Culturas en Tlatelolco."
                        },
                        {
                            topic: "Guerra de Vietnam",
                            q: "¿En qué año los marines estadounidenses invadieron Vietnam, intensificando la guerra?",
                            options: ["1960", "1963", "1965", "1968"],
                            answerIndex: 2,
                            explain: "En 1965, marines estadounidenses invadieron Vietnam e iniciaron una batalla sangrienta contra la guerrilla del norte conocida como vietcong."
                        },
                        {
                            topic: "Dictadura perfecta",
                            q: "¿Qué escritor describió al régimen político mexicano como 'la dictadura perfecta'?",
                            options: ["Gabriel García Márquez", "Octavio Paz", "Mario Vargas Llosa", "Carlos Fuentes"],
                            answerIndex: 2,
                            explain: "El escritor peruano Mario Vargas Llosa describió al régimen político mexicano como 'la dictadura perfecta' por su democracia simulada bajo el partido hegemónico."
                        },
                        {
                            topic: "Nuevos actores antisistema",
                            q: "¿Qué nuevas preocupaciones incorporaron los movimientos antisistema según Wallerstein?",
                            options: ["Solo problemas económicos", "Lucha contra el racismo, igualdad de género, cuidado de la ecología", "Solo problemas políticos", "Solo problemas militares"],
                            answerIndex: 1,
                            explain: "Nuevos actores incorporaron preocupaciones como la lucha contra el racismo, la igualdad de género, el cuidado de la ecología, la globalización y el calentamiento global."
                        },
                        {
                            topic: "Surgimiento de movimientos antisistema",
                            q: "¿A qué responden directamente los movimientos antisistema según Springer?",
                            options: ["A la Revolución Industrial", "Al neoliberalismo y la amenaza que supone para el bienestar colectivo", "A la caída del muro de Berlín", "A la Primera Guerra Mundial"],
                            answerIndex: 1,
                            explain: "Los movimientos antisistema surgen como respuesta directa al neoliberalismo y a la amenaza que supone para nuestro bienestar colectivo."
                        },
                        {
                            topic: "Movilizaciones sociales",
                            q: "¿Qué motivó principalmente a los jóvenes a manifestarse durante la Guerra Fría?",
                            options: ["Problemas económicos", "Reacción ante ideas socialistas y existencialistas contestatarias", "Problemas ambientales", "Conflictos religiosos"],
                            answerIndex: 1,
                            explain: "Los movimientos estudiantiles fueron motivados por la reacción de la juventud ante las ideas socialistas y existencialistas que eran contestatarias a toda estructura autoritaria de poder."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Derechos Humanos, Sustentabilidad y Neoliberalismo",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Derechos Humanos y su Evolución",
                    desc: "Comprensión de los derechos humanos, sus antecedentes históricos, generaciones y protección en México.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Derechos Humanos",
                            q: "¿Cuál es el principio de los derechos humanos que establece que corresponden a todas las personas por igual?",
                            options: ["Interdependencia", "Indivisibilidad", "Universalidad", "Progresividad"],
                            answerIndex: 2,
                            explain: "La Universalidad establece que los Derechos Humanos corresponden a todas las personas sin discriminación alguna."
                        },
                        {
                            topic: "Carta Magna de 1215",
                            q: "¿Qué documento es considerado el primer antecedente para preservar los derechos humanos?",
                            options: ["Constitución de Virginia", "Declaración de los Derechos del Hombre", "Carta Magna de 1215", "Declaración Universal de la ONU"],
                            answerIndex: 2,
                            explain: "La Carta Magna de 1215, firmada en Inglaterra, es considerada el primer antecedente para preservar los derechos humanos."
                        },
                        {
                            topic: "Constitución de Virginia",
                            q: "¿En qué año fue promulgada la Constitución de Virginia, considerada la primera declaración moderna de derechos humanos?",
                            options: ["1776", "1789", "1791", "1689"],
                            answerIndex: 0,
                            explain: "La Constitución de Virginia de 1776 es reconocida como la primera declaración moderna de derechos humanos."
                        },
                        {
                            topic: "Declaración Francesa de 1789",
                            q: "¿Qué documento proclamó la Asamblea Nacional Constituyente de Francia el 26 de agosto de 1789?",
                            options: ["La Carta Magna", "La Constitución de Virginia", "La Declaración de los Derechos del Hombre y del Ciudadano", "El Pacto Internacional de Derechos Civiles"],
                            answerIndex: 2,
                            explain: "El 26 de agosto de 1789, la Asamblea Nacional Constituyente proclamó la Declaración de los Derechos del Hombre y del Ciudadano."
                        },
                        {
                            topic: "Declaración Universal de la ONU",
                            q: "¿En qué fecha fue adoptada la Declaración Universal de los Derechos Humanos por la Asamblea General de la ONU?",
                            options: ["24 de octubre de 1945", "10 de diciembre de 1948", "1 de enero de 1950", "12 de octubre de 1945"],
                            answerIndex: 1,
                            explain: "La Declaración Universal de los Derechos Humanos fue adoptada el 10 de diciembre de 1948 en París."
                        },
                        {
                            topic: "Primera generación de DDHH",
                            q: "¿Qué derechos comprende la primera generación de derechos humanos?",
                            options: ["Sociales, económicos y culturales", "Civiles y políticos", "De los pueblos o de solidaridad", "Derecho a la información"],
                            answerIndex: 1,
                            explain: "La primera generación comprende los derechos civiles y políticos, surgidos con la Revolución Francesa, como la libertad y la vida."
                        },
                        {
                            topic: "Segunda generación de DDHH",
                            q: "¿Qué derechos comprende la segunda generación de derechos humanos?",
                            options: ["Civiles y políticos", "Sociales, económicos y culturales", "De los pueblos o de solidaridad", "Derecho a la información"],
                            answerIndex: 1,
                            explain: "La segunda generación comprende los derechos sociales, económicos y culturales, surgidos como resultado de la Revolución Industrial."
                        },
                        {
                            topic: "CNDH",
                            q: "¿En qué año fue creada la Comisión Nacional de los Derechos Humanos (CNDH) en México?",
                            options: ["1985", "1990", "1994", "2000"],
                            answerIndex: 1,
                            explain: "En 1990 fue creada la Comisión Nacional de los Derechos Humanos, un organismo constitucional autónomo responsable de promover y proteger a todos los mexicanos."
                        },
                        {
                            topic: "Corte Interamericana de DDHH",
                            q: "¿En qué año se creó la Corte Interamericana de los Derechos Humanos y dónde tiene su sede?",
                            options: ["1969 en Washington", "1979 en San José, Costa Rica", "1985 en Santiago de Chile", "1990 en Ciudad de México"],
                            answerIndex: 1,
                            explain: "En 1979 se creó la Corte Interamericana de los Derechos Humanos, con sede en San José, Costa Rica."
                        },
                        {
                            topic: "Principio de progresividad",
                            q: "¿En qué consiste el principio de progresividad de los derechos humanos?",
                            options: ["Los derechos pueden eliminarse", "El Estado debe asegurar el progreso en el desarrollo de los derechos sin retroceso", "Solo aplica a algunos derechos", "Los derechos no cambian nunca"],
                            answerIndex: 1,
                            explain: "La progresividad establece que el Estado debe asegurar el progreso en el desarrollo de los derechos humanos, prohibiendo cualquier retroceso en ellos."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Ética Ambiental y Desarrollo Sustentable",
                    desc: "Análisis de problemas éticos ambientales, desarrollo sustentable, energías limpias y protocolos ambientales.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Ética Ambiental",
                            q: "Según Capo (2016), ¿cuál es una de las preocupaciones de la Ética Ambiental?",
                            options: ["El crecimiento económico", "El cambio climático", "La deuda externa", "La reforma educativa"],
                            answerIndex: 1,
                            explain: "La Ética Ambiental se preocupa por problemas como el cambio climático, la deforestación, la contaminación y otros dilemas socioambientales."
                        },
                        {
                            topic: "Posiciones ecoéticas",
                            q: "¿Cuál de las siguientes es una posición ética respecto a la Ecoética según Salazar y Mendoza?",
                            options: ["Antropocentrismo radical", "Biocentrismo (considera valor moral a todos los seres vivos)", "Tecnocentrismo", "Egocentrismo"],
                            answerIndex: 1,
                            explain: "Entre las posiciones éticas respecto a la Ecoética destacan el Biocentrismo (considera valor moral a todos los seres vivos), Ecocentrismo y Antropocentrismo moderado."
                        },
                        {
                            topic: "Desarrollo sustentable",
                            q: "¿Qué crítica hace Enrique Leff al concepto de desarrollo sustentable?",
                            options: ["Es perfecto y no tiene fallas", "Revitaliza el viejo mito desarrollista promoviendo un crecimiento económico sostenible sobre naturaleza limitada", "Es muy antiguo", "Solo aplica a países desarrollados"],
                            answerIndex: 1,
                            explain: "Leff señala que el desarrollo sustentable revitaliza el viejo mito desarrollista promoviendo la falacia de un crecimiento económico sostenible sobre la naturaleza limitada del planeta."
                        },
                        {
                            topic: "Energías renovables",
                            q: "Según la Secretaría de Medio Ambiente y Recursos Naturales, ¿qué son las energías renovables?",
                            options: ["Las que se agotan rápidamente", "Aquellas que se regeneran y son tan abundantes que perdurarán cientos o miles de años", "Las que contaminan mucho", "Las que provienen solo del petróleo"],
                            answerIndex: 1,
                            explain: "Las energías renovables son aquellas que se regeneran y son tan abundantes que perdurarán cientos o miles de años."
                        },
                        {
                            topic: "Energía solar",
                            q: "¿Cómo convierten energía los sistemas fotovoltaicos?",
                            options: ["Convierten calor en electricidad", "Convierten partículas con energía lumínica (fotón) en energía electromotriz (voltaica)", "Convierten viento en electricidad", "Convierten agua en electricidad"],
                            answerIndex: 1,
                            explain: "Los sistemas fotovoltaicos convierten las partículas con energía lumínica (fotón) en energía electromotriz (voltaica)."
                        },
                        {
                            topic: "Protocolo de Kioto",
                            q: "¿Qué estableció el Protocolo de Kioto en 1997?",
                            options: ["La creación de la ONU", "Un protocolo legalmente vinculante que puso límites a las emisiones de gases de efecto invernadero", "La erradicación de la pobreza", "La protección de los océanos"],
                            answerIndex: 1,
                            explain: "El Protocolo de Kioto adoptó un protocolo legalmente vinculante que puso límites a las emisiones de los principales gases que provocan el efecto invernadero a nivel mundial."
                        },
                        {
                            topic: "Agenda 21",
                            q: "¿Qué documento fue adoptado en la Cumbre de Río de Janeiro de 1992?",
                            options: ["Protocolo de Kioto", "Agenda 21, un programa global de restauración del medio ambiente", "Declaración Universal", "Tratado de Libre Comercio"],
                            answerIndex: 1,
                            explain: "En la Cumbre de Río de 1992 se adoptó la Agenda 21, un programa global de restauración del medio ambiente, la Declaración sobre Medio Ambiente y Desarrollo, y la Declaración de Principios del Bosque."
                        },
                        {
                            topic: "Economía verde",
                            q: "¿Cuáles son las tres dimensiones fundamentales de la economía verde según Abramovay?",
                            options: ["Crecimiento, desigualdad y pobreza", "Social, económica y ambiental", "Baja en carbono, eficiente en recursos e inclusiva socialmente", "Nacional, internacional y global"],
                            answerIndex: 2,
                            explain: "Según Abramovay, la economía verde tiene tres dimensiones: baja en carbono, eficiente en recursos e inclusiva socialmente."
                        },
                        {
                            topic: "Actividades primarias",
                            q: "¿Qué actividades comprende el sector primario?",
                            options: ["Industria y construcción", "Agricultura, ganadería, pesca, caza, minería y explotación forestal", "Comercio y servicios", "Tecnología y comunicaciones"],
                            answerIndex: 1,
                            explain: "Las actividades primarias comprenden agricultura, ganadería, pesca, caza, minería y explotación forestal, desarrolladas en relación directa con la base natural."
                        },
                        {
                            topic: "IDH",
                            q: "¿Qué indicador incorpora aspectos sociales como salud y nivel de educación además de lo económico?",
                            options: ["PIB", "PEA", "Índice de Desarrollo Humano (IDH)", "Tasa de inflación"],
                            answerIndex: 2,
                            explain: "El Índice de Desarrollo Humano (IDH) incorpora indicadores sociales, particularmente relativos al estado de salud y nivel de educación de la población."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Neoliberalismo en México e Impacto Ambiental",
                    desc: "Análisis del modelo neoliberal en México, reformas estructurales, impacto ambiental y contaminación.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Neoliberalismo",
                            q: "¿Quién fue uno de los principales teóricos del neoliberalismo cuyas ideas fueron base de políticas en los 80?",
                            options: ["John Maynard Keynes", "Milton Friedman", "Karl Marx", "Adam Smith"],
                            answerIndex: 1,
                            explain: "Los postulados del economista estadounidense Milton Friedman fueron la base de las políticas neoliberales en países como Chile, Reino Unido y Estados Unidos."
                        },
                        {
                            topic: "Consenso de Washington",
                            q: "¿Cuántos puntos planteó John Williamson para caracterizar el Consenso de Washington?",
                            options: ["5", "8", "10", "12"],
                            answerIndex: 2,
                            explain: "John Williamson planteó diez puntos que caracterizaban la implementación de las medidas involucradas en el Consenso de Washington."
                        },
                        {
                            topic: "Privatización en México",
                            q: "¿Cuántas empresas paraestatales tenía el Estado mexicano en 1982 y cuántas quedaban en 1988?",
                            options: ["2000 a 500", "1555 a 412", "1000 a 200", "3000 a 800"],
                            answerIndex: 1,
                            explain: "De las 1555 empresas paraestatales que tenía el Estado en 1982, sólo quedaban 412 para 1988 como resultado de las reformas neoliberales."
                        },
                        {
                            topic: "GATT",
                            q: "¿En qué año México aceptó los términos del Acuerdo General sobre Aranceles de Aduanas y Comercio (GATT)?",
                            options: ["1982", "1985", "1988", "1990"],
                            answerIndex: 1,
                            explain: "En 1985, México se abrió al mercado internacional y aceptó los términos del Acuerdo General sobre Aranceles de Aduanas y Comercio (GATT)."
                        },
                        {
                            topic: "Elecciones de 1988",
                            q: "¿Qué candidato fue declarado ganador de las elecciones presidenciales de 1988 en México?",
                            options: ["Cuauhtémoc Cárdenas", "Manuel J. Clouthier", "Carlos Salinas de Gortari", "Rosario Ibarra"],
                            answerIndex: 2,
                            explain: "Carlos Salinas de Gortari fue declarado ganador con el 50.36% de los votos, en elecciones marcadas por denuncias de fraude electoral."
                        },
                        {
                            topic: "TLCAN",
                            q: "¿Qué tratado comercial firmó el presidente Carlos Salinas de Gortari?",
                            options: ["GATT", "Tratado de Libre Comercio de América del Norte (TLCAN)", "Acuerdo de París", "Tratado de Maastricht"],
                            answerIndex: 1,
                            explain: "Carlos Salinas de Gortari firmó el Tratado de Libre Comercio de América del Norte (TLCAN) con Estados Unidos y Canadá."
                        },
                        {
                            topic: "Reformas estructurales",
                            q: "¿Qué objetivo tienen las reformas de primera generación en el neoliberalismo mexicano?",
                            options: ["Social", "Generar estabilidad macroeconómica", "Productivo a largo plazo", "Educativo"],
                            answerIndex: 1,
                            explain: "Las reformas de primera generación, como las financieras o tributarias, tenían el objetivo de generar estabilidad macroeconómica para garantizar el crecimiento económico."
                        },
                        {
                            topic: "MIA (Manifestación de Impacto Ambiental)",
                            q: "¿Qué es la Manifestación de Impacto Ambiental (MIA) según la LGEEPA?",
                            options: ["Un impuesto ambiental", "Un estudio técnico-científico que mide efectos positivos y negativos de una obra en el ambiente", "Una licencia de construcción", "Un permiso de pesca"],
                            answerIndex: 1,
                            explain: "La MIA es un estudio técnico-científico que mide los efectos positivos y negativos que puede ocasionar alguna obra o actividad en el medio ambiente."
                        },
                        {
                            topic: "Contaminación antropogénica",
                            q: "¿Qué es la contaminación antropogénica o antrópica?",
                            options: ["La causada por erupciones volcánicas", "La producida por el hombre", "La natural de los ecosistemas", "La de los océanos"],
                            answerIndex: 1,
                            explain: "La contaminación antropogénica es la producida por el hombre, que ha alcanzado niveles alarmantes de afectación a los recursos naturales."
                        },
                        {
                            topic: "DDT",
                            q: "¿Para qué fue utilizado inicialmente el DDT?",
                            options: ["Como fertilizante", "Como insecticida para exterminar plagas y erradicar enfermedades", "Como combustible", "Como conservador de alimentos"],
                            answerIndex: 1,
                            explain: "El DDT se usó como insecticida para exterminar plagas, aumentar la producción de cosechas y erradicar enfermedades al extinguir sus vectores, siendo considerado una 'maravilla de la humanidad'."
                        }
                    ]
                }
            }
        }
    }
};

export default cienciasSociales;