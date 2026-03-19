// ============================================
// CIENCIAS SOCIALES II - SEGUNDO TRIMESTRE
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const sociales2 = {
    id: "sociales2",
    nombre: "CIENCIAS SOCIALES II",
    icono: "🌍",
    descripcion: "Geografía económica, modelos económicos, neoliberalismo, cultura, indigenismo, democracia",
    modulos: {
        // ========== MÓDULO 1: COMUNIDAD: BIENESTAR Y DESIGUALDADES ==========
        modulo1: {
            nombre: "Módulo 1: Comunidad: bienestar y desigualdades",
            actividades: {
                // ACTIVIDAD 1: Servicios básicos y espacios rurales/urbanos
                act1: {
                    nombre: "Actividad 1: Servicios básicos y espacios geográficos",
                    desc: "Servicios básicos, calidad de vida, espacios rurales y urbanos, planeación territorial",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Servicios básicos",
                            q: "¿Qué son los servicios básicos?",
                            options: [
                                "Productos que se compran en el mercado",
                                "Suministros que facilitan y satisfacen necesidades de los ciudadanos",
                                "Impuestos que paga la población",
                                "Solo servicios médicos"
                            ],
                            answerIndex: 1,
                            explain: "Los servicios básicos son suministros que facilitan y satisfacen las necesidades de los ciudadanos, proporcionados por el gobierno o empresas privadas."
                        },
                        {
                            topic: "Servicios básicos",
                            q: "¿Qué evidencia el acceso a los servicios básicos?",
                            options: [
                                "La riqueza del país",
                                "El grado de bienestar y calidad de vida de las personas",
                                "La cantidad de impuestos",
                                "El nivel educativo"
                            ],
                            answerIndex: 1,
                            explain: "El acceso a los servicios básicos evidencia el grado de bienestar de las personas, el nivel de desarrollo del lugar donde viven y su calidad de vida."
                        },
                        {
                            topic: "Espacio rural",
                            q: "¿Qué caracteriza al espacio rural?",
                            options: [
                                "Alta concentración de población",
                                "Predominio de actividades primarias (agricultura, ganadería, pesca)",
                                "Servicios financieros",
                                "Industria pesada"
                            ],
                            answerIndex: 1,
                            explain: "El espacio rural se caracteriza por el predominio de actividades primarias como agricultura, ganadería, pesca, minería y forestería."
                        },
                        {
                            topic: "Geografía rural",
                            q: "¿Qué estudia la geografía rural?",
                            options: [
                                "Las ciudades",
                                "El paisaje, asentamientos, actividades y estilos de vida del espacio rural",
                                "Los océanos",
                                "El clima"
                            ],
                            answerIndex: 1,
                            explain: "La geografía rural estudia el paisaje, asentamientos, actividades y estilos de vida del espacio rural y forma parte de la geografía humana."
                        },
                        {
                            topic: "Espacio urbano",
                            q: "¿Qué porcentaje de la población mundial vive en paisajes urbanos?",
                            options: [
                                "40%",
                                "50%",
                                "60%",
                                "70%"
                            ],
                            answerIndex: 2,
                            explain: "Actualmente alrededor del 60% de la población mundial vive en paisajes urbanos."
                        },
                        {
                            topic: "Planeación ecológica",
                            q: "¿Qué busca la planeación ecológica con enfoque territorial?",
                            options: [
                                "Aumentar la industrialización",
                                "Entender patrones espaciales para proponer formas de manejo de producción y conservación",
                                "Construir más ciudades",
                                "Eliminar áreas rurales"
                            ],
                            answerIndex: 1,
                            explain: "La planeación ecológica con enfoque territorial busca entender los patrones espaciales para proponer espacios y formas de manejo de producción y conservación."
                        },
                        {
                            topic: "Nueva ruralidad",
                            q: "¿Qué es la nueva ruralidad?",
                            options: [
                                "Un modelo industrial",
                                "Una base conceptual emergente para reconocer cambios en espacios rurales actuales",
                                "Una política de urbanización",
                                "Un tipo de cultivo"
                            ],
                            answerIndex: 1,
                            explain: "La nueva ruralidad es una base conceptual emergente que permite reconocer los cambios de los espacios rurales actuales."
                        },
                        {
                            topic: "Territorialidades urbanas",
                            q: "¿Qué permiten revelar las identidades barriales?",
                            options: [
                                "La historia nacional",
                                "La complejidad de vivir en ciudad y la conflictividad citadina",
                                "La economía global",
                                "Las relaciones internacionales"
                            ],
                            answerIndex: 1,
                            explain: "Revelar las identidades barriales permite entender mejor la complejidad de vivir en ciudad y diagnosticar la conflictividad citadina."
                        },
                        {
                            topic: "Calidad de vida",
                            q: "¿Qué factores influyen en la calidad de vida según el texto?",
                            options: [
                                "Solo el ingreso económico",
                                "El acceso a servicios básicos y su calidad",
                                "Únicamente la educación",
                                "La ubicación geográfica"
                            ],
                            answerIndex: 1,
                            explain: "El acceso a servicios básicos y su calidad influyen directamente en el bienestar y calidad de vida de las personas."
                        },
                        {
                            topic: "Espacios rurales",
                            q: "¿Qué problemas enfrentan los espacios rurales alejados?",
                            options: [
                                "Sobre población",
                                "Descuido por parte de programas que atienden al sector",
                                "Exceso de industrialización",
                                "Alta tecnología"
                            ],
                            answerIndex: 1,
                            explain: "Los espacios rurales más alejados y marginados enfrentan un descuido por parte de los programas que atienden a este sector."
                        }
                    ]
                },
                // ACTIVIDAD 2: Indicadores macroeconómicos y geografía económica
                act2: {
                    nombre: "Actividad 2: Indicadores económicos y geografía económica",
                    desc: "PIB, inflación, tasa de interés, geografía económica, actividades primarias, secundarias, terciarias",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "PIB",
                            q: "¿Qué es el Producto Interno Bruto (PIB)?",
                            options: [
                                "El valor de las importaciones",
                                "El valor de mercado de todos los bienes y servicios finales producidos en un país",
                                "La suma de todos los salarios",
                                "El total de impuestos recaudados"
                            ],
                            answerIndex: 1,
                            explain: "El PIB es el valor de mercado de todos los bienes y servicios finales producidos en un país durante un período determinado."
                        },
                        {
                            topic: "Inflación",
                            q: "¿Qué es la inflación?",
                            options: [
                                "La disminución de precios",
                                "El incremento sostenido y generalizado de los precios de bienes y servicios",
                                "El aumento del PIB",
                                "La devaluación de la moneda"
                            ],
                            answerIndex: 1,
                            explain: "La inflación es el incremento sostenido y generalizado de los precios de los bienes y servicios de una economía."
                        },
                        {
                            topic: "Tasa de interés",
                            q: "¿Cómo se define la tasa de interés?",
                            options: [
                                "El precio del dinero",
                                "El costo de los bienes",
                                "El valor de las exportaciones",
                                "La cantidad de dinero en circulación"
                            ],
                            answerIndex: 0,
                            explain: "La tasa de interés es el 'precio del dinero', indica la rentabilidad de la inversión o el crédito."
                        },
                        {
                            topic: "Tasa de desempleo",
                            q: "¿Qué es la tasa de desempleo?",
                            options: [
                                "La población total",
                                "La proporción de desempleados con respecto a la fuerza laboral total",
                                "El número de empleos formales",
                                "La población económicamente inactiva"
                            ],
                            answerIndex: 1,
                            explain: "La tasa de desempleo es la proporción de desempleados con respecto a la fuerza laboral total."
                        },
                        {
                            topic: "Geografía económica",
                            q: "¿Qué estudia la geografía económica?",
                            options: [
                                "Los accidentes geográficos",
                                "El funcionamiento del sistema económico en el espacio",
                                "El clima",
                                "La población"
                            ],
                            answerIndex: 1,
                            explain: "La geografía económica busca explicar el funcionamiento del sistema económico en el espacio a través de sus rasgos visibles."
                        },
                        {
                            topic: "Actividades primarias",
                            q: "¿Qué actividades comprende el sector primario?",
                            options: [
                                "Industria y construcción",
                                "Agricultura, ganadería, pesca, minería y explotación forestal",
                                "Comercio y servicios",
                                "Banca y finanzas"
                            ],
                            answerIndex: 1,
                            explain: "Las actividades primarias son: agricultura, ganadería, pesca, caza, minería y explotación forestal."
                        },
                        {
                            topic: "Actividades secundarias",
                            q: "¿Qué es la industria ligera?",
                            options: [
                                "La que transforma materias primas para elaborar bienes de consumo",
                                "La que extrae minerales",
                                "La que produce maquinaria pesada",
                                "La construcción"
                            ],
                            answerIndex: 0,
                            explain: "La industria ligera transforma materias primas o productos semielaborados para elaborar bienes de consumo."
                        },
                        {
                            topic: "Actividades secundarias",
                            q: "¿Qué ejemplo de industria pesada se menciona?",
                            options: [
                                "Textiles",
                                "Alimentos procesados",
                                "Siderúrgica y petrolera",
                                "Farmacéutica"
                            ],
                            answerIndex: 2,
                            explain: "La industria pesada incluye siderúrgica, petrolera, petroquímica, cementera, química y grandes mineras."
                        },
                        {
                            topic: "Actividades terciarias",
                            q: "¿Qué conforma el sector terciario?",
                            options: [
                                "Agricultura y ganadería",
                                "Comercio, transporte, comunicaciones y servicios",
                                "Minería",
                                "Industria pesada"
                            ],
                            answerIndex: 1,
                            explain: "El sector terciario está integrado por comercio, transporte, comunicaciones y servicios como educación, salud, turismo y finanzas."
                        },
                        {
                            topic: "IDH",
                            q: "¿Qué mide el Índice de Desarrollo Humano (IDH)?",
                            options: [
                                "Solo el PIB",
                                "Salud, educación e ingreso",
                                "Solo la educación",
                                "La producción industrial"
                            ],
                            answerIndex: 1,
                            explain: "El IDH incorpora indicadores sociales: estado de salud, nivel de educación e ingreso de la población."
                        }
                    ]
                },
                // ACTIVIDAD 3: Trabajo, empleo informal, contratación
                act3: {
                    nombre: "Actividad 3: Trabajo y empleo",
                    desc: "Concepto de trabajo, empleo informal, formas de contratación, trabajo digno, desempleo",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Trabajo",
                            q: "Según Marx, ¿qué es la fuerza de trabajo?",
                            options: [
                                "Un derecho laboral",
                                "El motor de la historia",
                                "Una obligación",
                                "Un castigo"
                            ],
                            answerIndex: 1,
                            explain: "Para Marx, 'la fuerza de trabajo es el motor de la historia'."
                        },
                        {
                            topic: "Trabajo informal",
                            q: "¿Qué es el empleo informal?",
                            options: [
                                "Trabajo con seguridad social",
                                "Formas de producción y empleo excluidas de hogares o empresas institucionalizadas",
                                "Empleo gubernamental",
                                "Trabajo temporal"
                            ],
                            answerIndex: 1,
                            explain: "El trabajo informal engloba formas de producción y empleo excluidas de hogares o empresas institucionalizadas."
                        },
                        {
                            topic: "Empleo informal",
                            q: "¿Qué porcentaje de empleo informal había en México en 2019?",
                            options: [
                                "45.3%",
                                "56.3%",
                                "65.3%",
                                "75.3%"
                            ],
                            answerIndex: 1,
                            explain: "Para el segundo semestre de 2019, el empleo informal en México subió a 56.3%."
                        },
                        {
                            topic: "Causas del empleo informal",
                            q: "¿Qué causa el empleo informal según Cota y Navarro?",
                            options: [
                                "Altos salarios",
                                "Cargas tributarias, falta de empleo estatal, globalización",
                                "Exceso de regulación",
                                "Buenas condiciones laborales"
                            ],
                            answerIndex: 1,
                            explain: "Las causas del empleo informal son: cargas tributarias, falta de generación de empleo por el Estado, y globalización."
                        },
                        {
                            topic: "Contrato de trabajo",
                            q: "¿Qué es un contrato de trabajo?",
                            options: [
                                "Un acuerdo verbal",
                                "Un documento que regula la relación laboral entre patrón y empleado",
                                "Una ley federal",
                                "Un permiso"
                            ],
                            answerIndex: 1,
                            explain: "El contrato de trabajo es un documento en el que se acuerdan tareas y condiciones laborales, regulando la relación laboral."
                        },
                        {
                            topic: "Tipos de contrato",
                            q: "¿Qué tipo de contrato se menciona en el texto?",
                            options: [
                                "Por tiempo determinado",
                                "Por obra determinada",
                                "Por honorarios",
                                "Por comisión"
                            ],
                            answerIndex: 0,
                            explain: "Entre los tipos de contrato se mencionan: por tiempo determinado, por tiempo indeterminado, temporal, para capacitación inicial y de periodo de prueba."
                        },
                        {
                            topic: "Trabajo digno",
                            q: "Según la Ley Federal del Trabajo, ¿qué es el trabajo digno?",
                            options: [
                                "Trabajo bien remunerado",
                                "Trabajo que respeta la dignidad humana, sin discriminación, con seguridad social y salario remunerador",
                                "Trabajo de oficina",
                                "Trabajo temporal"
                            ],
                            answerIndex: 1,
                            explain: "El trabajo digno es aquel en el que se respeta la dignidad humana, no hay discriminación, hay seguridad social y salario remunerador."
                        },
                        {
                            topic: "Desempleo",
                            q: "¿Qué consecuencias del desempleo se mencionan?",
                            options: [
                                "Aumento de la producción",
                                "Depresión, ansiedad, delincuencia, suicidio",
                                "Mayor consumo",
                                "Crecimiento económico"
                            ],
                            answerIndex: 1,
                            explain: "El desempleo puede causar depresión, ansiedad, desgaste social, aumento de la delincuencia y en ocasiones suicidio."
                        },
                        {
                            topic: "Trabajo informal",
                            q: "¿Qué riesgo tiene el trabajo informal?",
                            options: [
                                "Altos impuestos",
                                "Falta de protección o seguridad social",
                                "Exceso de prestaciones",
                                "Jornadas cortas"
                            ],
                            answerIndex: 1,
                            explain: "El trabajo informal es riesgoso porque no cuenta con ningún tipo de protección o seguridad social."
                        },
                        {
                            topic: "Elementos del contrato",
                            q: "¿Qué elemento debe identificarse en un contrato?",
                            options: [
                                "Solo el salario",
                                "Identificación de partes, fecha, duración, puesto, salario, horario, beneficios",
                                "Únicamente la duración",
                                "Solo el nombre de la empresa"
                            ],
                            answerIndex: 1,
                            explain: "Un contrato debe contener: identificación de partes, fecha, duración, domicilio, descripción del puesto, salario, horario y beneficios."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: ESTADO MEXICANO: ACTIVIDADES ECONÓMICAS Y RELACIONES GLOBALES DE PODER ==========
        modulo2: {
            nombre: "Módulo 2: Estado Mexicano: Actividades Económicas y Relaciones Globales de Poder",
            actividades: {
                // ACTIVIDAD 1: Sectores económicos, regulación, capitalismo, ética ambiental
                act1: {
                    nombre: "Actividad 1: Sectores económicos y ética ambiental",
                    desc: "Sectores primario, secundario, terciario, cuaternario, regulación, capitalismo, desarrollo sustentable",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Sector primario",
                            q: "¿Qué actividades incluye el sector agropecuario?",
                            options: [
                                "Industria y construcción",
                                "Agricultura, ganadería, silvicultura y pesca",
                                "Comercio y servicios",
                                "Banca y finanzas"
                            ],
                            answerIndex: 1,
                            explain: "El sector agropecuario incluye agricultura, ganadería, silvicultura y pesca."
                        },
                        {
                            topic: "Sector secundario",
                            q: "¿Qué incluye la industria de la transformación?",
                            options: [
                                "Agricultura",
                                "Ramos automotrices, construcción, alimentarios, petroquímicos",
                                "Servicios financieros",
                                "Pesca"
                            ],
                            answerIndex: 1,
                            explain: "La industria de la transformación incluye ramos automotrices, de construcción, alimentarios, tabacaleros, petroquímicos, mueblera y maderera."
                        },
                        {
                            topic: "Sector cuaternario",
                            q: "¿Qué caracteriza al sector cuaternario?",
                            options: [
                                "Actividades manuales",
                                "Investigación, desarrollo científico y tecnológico, innovación",
                                "Comercio informal",
                                "Agricultura"
                            ],
                            answerIndex: 1,
                            explain: "El sector cuaternario está relacionado con investigación, desarrollo científico y tecnológico, e innovación."
                        },
                        {
                            topic: "Sector cuaternario",
                            q: "¿Qué tipo de mano de obra utiliza el sector cuaternario?",
                            options: [
                                "Mano de obra no calificada",
                                "Mano de obra altamente calificada",
                                "Trabajo infantil",
                                "Trabajo temporal"
                            ],
                            answerIndex: 1,
                            explain: "El sector cuaternario utiliza mano de obra altamente calificada y realiza trabajo de carácter intelectual."
                        },
                        {
                            topic: "Regulación económica",
                            q: "¿Qué institución regula la economía en México?",
                            options: [
                                "SEP",
                                "Secretaría de Economía y COFEMER",
                                "SEDENA",
                                "SEMARNAT"
                            ],
                            answerIndex: 1,
                            explain: "La Secretaría de Economía, a través de COFEMER, establece formas de regulación para mantener los mercados y garantizar derechos."
                        },
                        {
                            topic: "Regulación",
                            q: "¿Cuáles son las tres formas de regulación en México?",
                            options: [
                                "Económica, social y administrativa",
                                "Federal, estatal y municipal",
                                "Laboral, fiscal y penal",
                                "Educativa, sanitaria y ambiental"
                            ],
                            answerIndex: 0,
                            explain: "Las tres formas son: regulación económica (mercado), regulación social (salud y medio ambiente) y regulación administrativa (organización pública)."
                        },
                        {
                            topic: "Capitalismo",
                            q: "¿Cuál es un principio básico del capitalismo?",
                            options: [
                                "Propiedad estatal",
                                "Propiedad privada",
                                "Planificación central",
                                "Intervención total del Estado"
                            ],
                            answerIndex: 1,
                            explain: "El capitalismo se basa en propiedad privada, interés propio, competencia, mecanismo de mercado y libertad de elección."
                        },
                        {
                            topic: "Capitalismo",
                            q: "¿Qué porcentaje de la población concentra la mitad del ingreso mundial según el texto?",
                            options: [
                                "2%",
                                "8%",
                                "15%",
                                "25%"
                            ],
                            answerIndex: 1,
                            explain: "En el mundo, un 8% de la población obtiene la mitad del ingreso mundial, mientras el 92% recibe la otra parte."
                        },
                        {
                            topic: "Desarrollo sustentable",
                            q: "¿Dónde se definió el desarrollo sustentable?",
                            options: [
                                "Conferencia de Río",
                                "Comisión Brundtland (1987)",
                                "Protocolo de Kioto",
                                "Acuerdo de París"
                            ],
                            answerIndex: 1,
                            explain: "El desarrollo sustentable fue definido en la Comisión Brundtland 'Nuestro Futuro Común' (WCED, 1987)."
                        },
                        {
                            topic: "Sustentabilidad",
                            q: "Según Leff, ¿qué implica repensar la sustentabilidad?",
                            options: [
                                "Más crecimiento económico",
                                "Nueva relación entre ser humano y naturaleza desde imaginarios sociales",
                                "Más tecnología",
                                "Mayor industrialización"
                            ],
                            answerIndex: 1,
                            explain: "Leff propone repensar la sustentabilidad desde los imaginarios sociales, para una nueva relación entre ser humano y naturaleza."
                        }
                    ]
                },
                // ACTIVIDAD 2: Sistema financiero, modelos económicos en México
                act2: {
                    nombre: "Actividad 2: Modelos económicos en México",
                    desc: "Sistema financiero, Estado benefactor, Cárdenas, sustitución de importaciones, desarrollo estabilizador",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Sistema financiero",
                            q: "¿Qué instituciones conducen el flujo del dinero en México?",
                            options: [
                                "SEP y CONACYT",
                                "SHCP y Banco de México",
                                "SEDENA y SEMAR",
                                "IMSS e ISSSTE"
                            ],
                            answerIndex: 1,
                            explain: "La Secretaría de Hacienda y Crédito Público junto con el Banco de México conducen el flujo del dinero y crédito."
                        },
                        {
                            topic: "Sistema financiero",
                            q: "¿A través de qué vías los grupos financieros fomentan las fuerzas productivas?",
                            options: [
                                "Ahorro, créditos y administración del flujo de recursos",
                                "Impuestos y multas",
                                "Gasto público",
                                "Deuda externa"
                            ],
                            answerIndex: 0,
                            explain: "Los grupos financieros fomentan las fuerzas productivas a través del ahorro, créditos y administración del flujo de recursos."
                        },
                        {
                            topic: "Lázaro Cárdenas",
                            q: "¿Qué nacionalización realizó Lázaro Cárdenas en 1938?",
                            options: [
                                "Nacionalización de la banca",
                                "Expropiación petrolera",
                                "Nacionalización de ferrocarriles",
                                "Nacionalización de la electricidad"
                            ],
                            answerIndex: 1,
                            explain: "El 18 de marzo de 1938, Cárdenas realizó la expropiación petrolera, dando origen a PEMEX."
                        },
                        {
                            topic: "Cárdenas",
                            q: "¿Qué instituciones se crearon durante el gobierno de Cárdenas?",
                            options: [
                                "IMSS e ISSSTE",
                                "NAFIN, PEMEX, CFE, IPN, INAH",
                                "INFONAVIT y CONACYT",
                                "SEP y UNAM"
                            ],
                            answerIndex: 1,
                            explain: "Se crearon NAFIN, PEMEX, CFE, IPN e INAH durante el gobierno de Lázaro Cárdenas."
                        },
                        {
                            topic: "Sustitución de importaciones",
                            q: "¿Qué presidente implementó el modelo de Sustitución de Importaciones?",
                            options: [
                                "Lázaro Cárdenas",
                                "Manuel Ávila Camacho",
                                "Miguel Alemán",
                                "Adolfo Ruiz Cortines"
                            ],
                            answerIndex: 1,
                            explain: "Manuel Ávila Camacho implementó el modelo de Sustitución de Importaciones (1940-1946)."
                        },
                        {
                            topic: "Sustitución de importaciones",
                            q: "¿Cuál era el lema de la Sustitución de Importaciones?",
                            options: [
                                "Comprar más importaciones",
                                "Produzca lo que el país consume y consuma lo que el país produce",
                                "Exportar todo",
                                "Abrir fronteras"
                            ],
                            answerIndex: 1,
                            explain: "El lema era: 'Produzca lo que el país consume y consuma lo que el país produce'."
                        },
                        {
                            topic: "Milagro mexicano",
                            q: "¿Qué periodos presidenciales abarcó el Milagro Mexicano?",
                            options: [
                                "Cárdenas, Ávila Camacho, Alemán",
                                "Ávila Camacho, Alemán, Ruiz Cortines",
                                "Ruiz Cortines, López Mateos, Díaz Ordaz",
                                "Echeverría, López Portillo, De la Madrid"
                            ],
                            answerIndex: 1,
                            explain: "El Milagro Mexicano abarcó los gobiernos de Ávila Camacho (1940-1946), Alemán (1946-1952) y parte de Ruiz Cortines (1952-1958)."
                        },
                        {
                            topic: "Desarrollo estabilizador",
                            q: "¿Qué presidente creó el ISSSTE?",
                            options: [
                                "Adolfo Ruiz Cortines",
                                "Adolfo López Mateos",
                                "Gustavo Díaz Ordaz",
                                "Luis Echeverría"
                            ],
                            answerIndex: 1,
                            explain: "Adolfo López Mateos creó el ISSSTE durante su gobierno (1958-1964)."
                        },
                        {
                            topic: "Desarrollo estabilizador",
                            q: "¿En qué año se otorgó el voto a la mujer en México?",
                            options: [
                                "1946",
                                "1953",
                                "1958",
                                "1964"
                            ],
                            answerIndex: 1,
                            explain: "En 1953 se reformó el artículo 34 constitucional para otorgar el voto a las mujeres en el ámbito federal."
                        },
                        {
                            topic: "Represión",
                            q: "¿Qué movimiento fue reprimido el 2 de octubre de 1968?",
                            options: [
                                "Movimiento ferrocarrilero",
                                "Movimiento estudiantil en Tlatelolco",
                                "Movimiento magisterial",
                                "Movimiento campesino"
                            ],
                            answerIndex: 1,
                            explain: "El 2 de octubre de 1968, el gobierno reprimió violentamente al movimiento estudiantil en la Plaza de las Tres Culturas, Tlatelolco."
                        }
                    ]
                },
                // ACTIVIDAD 3: Neoliberalismo, Consenso de Washington, G7, Foro de Davos
                act3: {
                    nombre: "Actividad 3: Neoliberalismo y relaciones globales",
                    desc: "Modelo neoliberal, Consenso de Washington, reformas estructurales, G7, Foro de Davos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Neoliberalismo",
                            q: "¿Quién es considerado el principal teórico del neoliberalismo?",
                            options: [
                                "John Maynard Keynes",
                                "Milton Friedman",
                                "Karl Marx",
                                "Adam Smith"
                            ],
                            answerIndex: 1,
                            explain: "Milton Friedman (Escuela de Chicago) es considerado el principal teórico del neoliberalismo."
                        },
                        {
                            topic: "Neoliberalismo",
                            q: "¿Qué países impulsaron el neoliberalismo en los 80?",
                            options: [
                                "México, Brasil, Argentina",
                                "Chile (Pinochet), Reino Unido (Thatcher), EE.UU. (Reagan)",
                                "Francia, Alemania, Italia",
                                "Japón, Corea, China"
                            ],
                            answerIndex: 1,
                            explain: "El neoliberalismo fue impulsado por Pinochet en Chile, Thatcher en Reino Unido y Reagan en Estados Unidos."
                        },
                        {
                            topic: "Consenso de Washington",
                            q: "¿Quién acuñó el término 'Consenso de Washington'?",
                            options: [
                                "Milton Friedman",
                                "John Williamson",
                                "Ronald Reagan",
                                "Margaret Thatcher"
                            ],
                            answerIndex: 1,
                            explain: "John Williamson acuñó el término 'Consenso de Washington' para describir las políticas económicas acordadas por organismos internacionales."
                        },
                        {
                            topic: "Consenso de Washington",
                            q: "¿Cuántos puntos conforman el Consenso de Washington?",
                            options: [
                                "5",
                                "8",
                                "10",
                                "12"
                            ],
                            answerIndex: 2,
                            explain: "El Consenso de Washington consta de 10 puntos que incluyen disciplina fiscal, apertura comercial, privatización, etc."
                        },
                        {
                            topic: "Neoliberalismo en México",
                            q: "¿Qué presidente inició el neoliberalismo en México?",
                            options: [
                                "José López Portillo",
                                "Miguel de la Madrid",
                                "Carlos Salinas de Gortari",
                                "Luis Echeverría"
                            ],
                            answerIndex: 1,
                            explain: "Miguel de la Madrid (1982-1988) inició la aplicación del neoliberalismo en México."
                        },
                        {
                            topic: "Reformas estructurales",
                            q: "¿Qué empresa paraestatal fue privatizada en 1990?",
                            options: [
                                "PEMEX",
                                "CFE",
                                "Telmex",
                                "NAFIN"
                            ],
                            answerIndex: 2,
                            explain: "En 1990 se privatizó Teléfonos de México (Telmex) durante el gobierno de Carlos Salinas."
                        },
                        {
                            topic: "G-7",
                            q: "¿En qué año se fundó el G-7?",
                            options: [
                                "1945",
                                "1975",
                                "1985",
                                "1995"
                            ],
                            answerIndex: 1,
                            explain: "El G-7 se fundó en 1975 tras la cumbre de Rambouillet, Francia, para discutir la crisis del petróleo."
                        },
                        {
                            topic: "G-7",
                            q: "¿Qué países conforman el G-7?",
                            options: [
                                "Alemania, Canadá, EE.UU., Francia, Italia, Japón, Reino Unido",
                                "Rusia, China, India, Brasil, México, Sudáfrica",
                                "España, Portugal, Grecia, Turquía",
                                "Argentina, Chile, Colombia, Perú"
                            ],
                            answerIndex: 0,
                            explain: "El G-7 está conformado por Alemania, Canadá, Estados Unidos, Francia, Italia, Japón y Reino Unido."
                        },
                        {
                            topic: "Foro de Davos",
                            q: "¿Dónde se celebra anualmente el Foro Económico Mundial?",
                            options: [
                                "Londres",
                                "Davos (Suiza)",
                                "Nueva York",
                                "París"
                            ],
                            answerIndex: 1,
                            explain: "El Foro Económico Mundial, conocido como Foro de Davos, se celebra anualmente en Davos, Suiza."
                        },
                        {
                            topic: "Foro de Davos",
                            q: "¿Quiénes participan en el Foro de Davos?",
                            options: [
                                "Solo empresarios",
                                "Líderes empresariales, jefes de Estado, intelectuales, ONGs",
                                "Solo políticos",
                                "Solo académicos"
                            ],
                            answerIndex: 1,
                            explain: "En el Foro de Davos participan líderes empresariales, jefes de Estado, intelectuales y representantes de la sociedad civil."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: LA COMPLEJIDAD CULTURAL, POLÍTICA Y SOCIAL DE MÉXICO ==========
        modulo3: {
            nombre: "Módulo 3: La Complejidad Cultural, Política y Social de México",
            actividades: {
                // ACTIVIDAD 1: Movimientos sociales y gobiernos en México
                act1: {
                    nombre: "Actividad 1: Movimientos sociales y gobiernos",
                    desc: "Movimientos de 1968, gobiernos de Ávila Camacho a Díaz Ordaz, desarrollo estabilizador",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Movimientos 1968",
                            q: "¿Qué acontecimiento internacional marcó 1968 en Francia?",
                            options: [
                                "La guerra de Vietnam",
                                "Mayo de 1968 (estudiantes y obreros contra De Gaulle)",
                                "La Primavera de Praga",
                                "La Revolución Cubana"
                            ],
                            answerIndex: 1,
                            explain: "En mayo de 1968, estudiantes y obreros se manifestaron en Francia contra el gobierno de Charles de Gaulle."
                        },
                        {
                            topic: "Movimientos 1968",
                            q: "¿Qué fue la Primavera de Praga?",
                            options: [
                                "Un movimiento artístico",
                                "Un intento de reforma en Checoslovaquia (1968)",
                                "Una guerra",
                                "Un tratado comercial"
                            ],
                            answerIndex: 1,
                            explain: "La Primavera de Praga fue un intento de reforma socialista en Checoslovaquia liderado por Alexander Dubček en 1968."
                        },
                        {
                            topic: "Manuel Ávila Camacho",
                            q: "¿Qué institución creó Manuel Ávila Camacho en 1943?",
                            options: [
                                "ISSSTE",
                                "IMSS",
                                "INFONAVIT",
                                "CONASUPO"
                            ],
                            answerIndex: 1,
                            explain: "Manuel Ávila Camacho creó el Instituto Mexicano del Seguro Social (IMSS) en 1943."
                        },
                        {
                            topic: "Miguel Alemán Valdés",
                            q: "¿Qué caracterizó a Miguel Alemán Valdés como presidente?",
                            options: [
                                "Fue el último presidente militar",
                                "Fue el primer presidente civil del México contemporáneo",
                                "Fue el primer presidente indígena",
                                "Fue el presidente más joven"
                            ],
                            answerIndex: 1,
                            explain: "Miguel Alemán Valdés (1946-1952) fue el primer presidente civil del México contemporáneo."
                        },
                        {
                            topic: "Adolfo Ruiz Cortines",
                            q: "¿Qué derecho se otorgó durante el gobierno de Ruiz Cortines?",
                            options: [
                                "Voto a los jóvenes",
                                "Voto a la mujer",
                                "Voto a los analfabetas",
                                "Voto a los extranjeros"
                            ],
                            answerIndex: 1,
                            explain: "Adolfo Ruiz Cortines reformó el artículo 34 constitucional para otorgar el voto a la mujer en 1953."
                        },
                        {
                            topic: "Adolfo López Mateos",
                            q: "¿Qué institución creó Adolfo López Mateos?",
                            options: [
                                "IMSS",
                                "ISSSTE",
                                "SEP",
                                "UNAM"
                            ],
                            answerIndex: 1,
                            explain: "Adolfo López Mateos creó el ISSSTE (Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado)."
                        },
                        {
                            topic: "Luis Echeverría",
                            q: "¿Qué evento de represión ocurrió en 1971?",
                            options: [
                                "Tlatelolco",
                                "Halconazo",
                                "Guerra sucia",
                                "Masacre de Acteal"
                            ],
                            answerIndex: 1,
                            explain: "El Halconazo (masacre de Corpus Cristi) ocurrió en 1971 durante el gobierno de Luis Echeverría."
                        },
                        {
                            topic: "José López Portillo",
                            q: "¿Qué yacimiento petrolero se descubrió en 1979?",
                            options: [
                                "Poza Rica",
                                "Cantarell",
                                "Tampico",
                                "Reynosa"
                            ],
                            answerIndex: 1,
                            explain: "El yacimiento Cantarell fue descubierto en 1979 en la Sonda de Campeche."
                        },
                        {
                            topic: "Desarrollo estabilizador",
                            q: "¿Qué porcentaje de crecimiento anual tuvo la economía con Díaz Ordaz?",
                            options: [
                                "4.5%",
                                "5.8%",
                                "6.8%",
                                "7.8%"
                            ],
                            answerIndex: 2,
                            explain: "Durante el gobierno de Gustavo Díaz Ordaz, la economía creció a un 6.8% anual."
                        },
                        {
                            topic: "Desarrollo estabilizador",
                            q: "¿Qué línea de transporte se inauguró en 1969?",
                            options: [
                                "Tren Ligero",
                                "Metro de la Ciudad de México",
                                "Tren Suburbano",
                                "Tren Maya"
                            ],
                            answerIndex: 1,
                            explain: "En 1969 se inauguró el Sistema de Transporte Colectivo Metro en la Ciudad de México."
                        }
                    ]
                },
                // ACTIVIDAD 2: Identidades culturales, Antropología, indigenismo
                act2: {
                    nombre: "Actividad 2: Cultura e indigenismo",
                    desc: "Tribus urbanas, concepto de cultura, otredad, alteridad, indigenismo, misiones culturales",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Tribus urbanas",
                            q: "¿Qué caracterizó a los hippies en los años 60?",
                            options: [
                                "Música heavy metal",
                                "Vida comunitaria, amor y paz, rock & roll",
                                "Reguetón",
                                "Estilo gótico"
                            ],
                            answerIndex: 1,
                            explain: "Los hippies adoptaron un modo de vida comunitario, libre, activista, con el lema 'amor y paz'."
                        },
                        {
                            topic: "Tribus urbanas",
                            q: "¿Dónde se originó el movimiento heavy metal?",
                            options: [
                                "Estados Unidos",
                                "Inglaterra",
                                "Caribe",
                                "México"
                            ],
                            answerIndex: 1,
                            explain: "Los heavies o metaleros se originaron a principios de los años 70 en Inglaterra."
                        },
                        {
                            topic: "Cultura",
                            q: "Según Edward B. Tylor, ¿qué comprende la cultura?",
                            options: [
                                "Solo el arte",
                                "Conocimientos, creencias, arte, moral, derecho, costumbres",
                                "Únicamente la religión",
                                "Solo la lengua"
                            ],
                            answerIndex: 1,
                            explain: "Tylor definió la cultura como un todo complejo que comprende conocimientos, creencias, arte, moral, derecho y costumbres."
                        },
                        {
                            topic: "Relativismo cultural",
                            q: "¿Quién propuso el relativismo cultural?",
                            options: [
                                "Edward Tylor",
                                "Franz Boas",
                                "Clifford Geertz",
                                "Gonzalo Aguirre Beltrán"
                            ],
                            answerIndex: 1,
                            explain: "Franz Boas propuso el relativismo cultural para entender que cada cultura evoluciona de manera particular."
                        },
                        {
                            topic: "Otredad",
                            q: "¿Qué permitió el concepto de otredad en Antropología?",
                            options: [
                                "Entender la superioridad europea",
                                "Señalar la existencia de sociedades con organización diferente",
                                "Justificar la colonización",
                                "Promover el racismo"
                            ],
                            answerIndex: 1,
                            explain: "El concepto de otredad permitió señalar la existencia de sociedades que pensaban y se organizaban de manera diferente."
                        },
                        {
                            topic: "Alteridad",
                            q: "¿Qué caracteriza al concepto de alteridad?",
                            options: [
                                "Subordinación del otro",
                                "Postura de igualdad, el otro contribuye a entender la cultura propia",
                                "Superioridad cultural",
                                "Dominación"
                            ],
                            answerIndex: 1,
                            explain: "La alteridad señala lo extraño desde una postura de igualdad, donde el otro contribuye a entender la cultura propia."
                        },
                        {
                            topic: "Indigenismo",
                            q: "¿Qué etapas del indigenismo distingue Aguirre Beltrán?",
                            options: [
                                "Conquista, colonia, independencia",
                                "Segregación, incorporación, integración",
                                "Revolución, posrevolución, modernidad",
                                "Prehispánico, colonial, independiente"
                            ],
                            answerIndex: 1,
                            explain: "Aguirre Beltrán distingue tres etapas: segregación (colonial), incorporación (independiente) e integración (posrevolucionaria)."
                        },
                        {
                            topic: "Misiones culturales",
                            q: "¿Cuándo se crearon las misiones culturales?",
                            options: [
                                "1910",
                                "1923",
                                "1940",
                                "1948"
                            ],
                            answerIndex: 1,
                            explain: "Las misiones culturales se crearon el 17 de octubre de 1923 con aprobación de José Vasconcelos."
                        },
                        {
                            topic: "INI",
                            q: "¿En qué año se creó el Instituto Nacional Indigenista?",
                            options: [
                                "1923",
                                "1940",
                                "1948",
                                "1978"
                            ],
                            answerIndex: 2,
                            explain: "El INI fue creado en 1948 para dar solución a problemáticas relacionadas con culturas indígenas."
                        },
                        {
                            topic: "Educación intercultural",
                            q: "¿Qué propuso la AMPIBAC en 1976?",
                            options: [
                                "Educación en español",
                                "Educación bilingüe y bicultural",
                                "Educación religiosa",
                                "Educación militar"
                            ],
                            answerIndex: 1,
                            explain: "La AMPIBAC propuso una educación bilingüe y bicultural para la liberación de los pueblos indígenas."
                        }
                    ]
                },
                // ACTIVIDAD 3: Cultura, democracia, pueblos originarios, participación ciudadana
                act3: {
                    nombre: "Actividad 3: Democracia y participación ciudadana",
                    desc: "Cultura material e inmaterial, etnocentrismo, relativismo cultural, democracia, autoritarismo, pueblos indígenas, afromexicanos, participación ciudadana",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Cultura material",
                            q: "¿Qué comprende la cultura material según Ogburn?",
                            options: [
                                "Costumbres e ideologías",
                                "Objetos físicos, materiales y tecnológicos",
                                "Valores y normas",
                                "Lenguaje"
                            ],
                            answerIndex: 1,
                            explain: "La cultura material comprende objetos físicos, materiales y tecnológicos de la vida cotidiana."
                        },
                        {
                            topic: "Cultura no material",
                            q: "¿Qué es la cultura no material?",
                            options: [
                                "Objetos físicos",
                                "Costumbres, ideologías, filosofía y comunicación",
                                "Edificios",
                                "Herramientas"
                            ],
                            answerIndex: 1,
                            explain: "La cultura no material tiene que ver con costumbres, ideologías, filosofía y comunicación."
                        },
                        {
                            topic: "Etnocentrismo",
                            q: "¿Quién acuñó el término etnocentrismo?",
                            options: [
                                "Franz Boas",
                                "William Graham Summer",
                                "Clifford Geertz",
                                "Edward Tylor"
                            ],
                            answerIndex: 1,
                            explain: "William Graham Summer acuñó el término etnocentrismo en 1906."
                        },
                        {
                            topic: "Etnocentrismo",
                            q: "¿Qué es el etnocentrismo?",
                            options: [
                                "Respeto por otras culturas",
                                "Creer que la propia cultura es superior a las demás",
                                "Estudio de culturas",
                                "Mezcla cultural"
                            ],
                            answerIndex: 1,
                            explain: "El etnocentrismo es la tendencia a creer que nuestra cultura y forma de vida son superiores a las demás."
                        },
                        {
                            topic: "Democracia",
                            q: "¿Qué es la democracia directa?",
                            options: [
                                "Elección de representantes",
                                "Ejercicio de elección realizado directamente por el pueblo",
                                "Participación mediante plebiscitos",
                                "Gobierno de expertos"
                            ],
                            answerIndex: 1,
                            explain: "La democracia directa es la elección de representantes realizada directamente por los ciudadanos."
                        },
                        {
                            topic: "Democracia participativa",
                            q: "¿Qué mecanismos caracterizan la democracia participativa?",
                            options: [
                                "Elecciones cada 6 años",
                                "Plebiscitos y referéndums",
                                "Designación directa",
                                "Voto obligatorio"
                            ],
                            answerIndex: 1,
                            explain: "La democracia participativa permite influir mediante plebiscitos (consultas a iniciativas) y referéndums."
                        },
                        {
                            topic: "Autoritarismo",
                            q: "¿Cuándo surge el concepto de autoritarismo?",
                            options: [
                                "En la Edad Media",
                                "En el siglo XX, después de la Primera Guerra Mundial",
                                "En el Renacimiento",
                                "En la Antigüedad"
                            ],
                            answerIndex: 1,
                            explain: "El autoritarismo surge en el siglo XX como explicación a regímenes posteriores a la Primera Guerra Mundial."
                        },
                        {
                            topic: "Pueblos indígenas",
                            q: "¿Qué porcentaje de población indígena hay en Veracruz según el censo 2020?",
                            options: [
                                "5.6%",
                                "8.2%",
                                "12.6%",
                                "15.3%"
                            ],
                            answerIndex: 2,
                            explain: "Según el censo 2020, Veracruz tiene 12.6% de población indígena (1,019,017 personas)."
                        },
                        {
                            topic: "Participación ciudadana",
                            q: "¿Qué es el presupuesto participativo?",
                            options: [
                                "Impuestos pagados por ciudadanos",
                                "Proceso donde ciudadanos deciden asignación de recursos públicos",
                                "Gasto gubernamental",
                                "Deuda pública"
                            ],
                            answerIndex: 1,
                            explain: "El presupuesto participativo permite a los ciudadanos opinar sobre cómo se gasta el dinero de los contribuyentes."
                        },
                        {
                            topic: "Cultura de paz",
                            q: "¿Qué promueve la cultura de paz?",
                            options: [
                                "Conflicto armado",
                                "Convivencia basada en democracia, derechos y resolución pacífica de conflictos",
                                "Autoritarismo",
                                "Violencia"
                            ],
                            answerIndex: 1,
                            explain: "La cultura de paz promueve la convivencia a partir de la democracia y los derechos, resolviendo conflictos pacíficamente."
                        }
                    ]
                }
            }
        }
    }
};

export default sociales2;