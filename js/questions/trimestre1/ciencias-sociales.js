// ============================================
// CIENCIAS SOCIALES I - TRIMESTRE 1
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const cienciasSociales1 = {
    id: "sociales1",
    nombre: "CIENCIAS SOCIALES I",
    icono: "🌎",
    descripcion: "Bienestar, ciudadanía y procesos de producción",
    modulos: {
        // ========== MÓDULO 1 ==========
        modulo1: {
            nombre: "Módulo 1: Bienestar y la Satisfacción de las Necesidades",
            actividades: {
                // ACTIVIDAD 1: El ser individual y social
                act1: {
                    nombre: "Actividad 1: El ser individual y social",
                    desc: "Individuo, sociedad y clases sociales",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "El ser individual y social",
                            q: "¿Cuál es el origen etimológico de la palabra 'individuo'?",
                            options: [
                                "Del griego 'individuos' que significa 'persona'",
                                "Del latín 'individuus' que significa 'que no se puede dividir'",
                                "Del francés 'individu' que significa 'ser único'",
                                "Del alemán 'individuum' que significa 'ente separado'"
                            ],
                            answerIndex: 1,
                            explain: "Individuo proviene del latín 'individuus', que significa 'que no se puede dividir' o 'unidad independiente'."
                        },
                        {
                            topic: "El ser individual y social",
                            q: "Según Norbert Elías, ¿cómo se describe la relación entre individuo y sociedad?",
                            options: [
                                "Son entes completamente independientes",
                                "Son interdependientes y no opuestos",
                                "La sociedad domina al individuo",
                                "El individuo está aislado de la sociedad"
                            ],
                            answerIndex: 1,
                            explain: "Para Norbert Elías, individuo y sociedad son entes interdependientes y no opuestos."
                        },
                        {
                            topic: "Clase social",
                            q: "Según Pierre Bourdieu, ¿cómo se define la clase social?",
                            options: [
                                "Únicamente por el nivel de ingresos económicos",
                                "Por el capital acumulado: económico, cultural, social y simbólico",
                                "Por el lugar de residencia",
                                "Por el nivel educativo exclusivamente"
                            ],
                            answerIndex: 1,
                            explain: "Bourdieu define la clase social por el capital acumulado en sus diferentes formas."
                        },
                        {
                            topic: "Clase social",
                            q: "Para Karl Marx, ¿qué papel juegan las clases sociales en la historia?",
                            options: [
                                "Son un fenómeno sin importancia histórica",
                                "La lucha entre ellas es el motor de la historia",
                                "Son estáticas y no cambian",
                                "Desaparecen en el capitalismo"
                            ],
                            answerIndex: 1,
                            explain: "Marx consideraba que las clases surgen con la división del trabajo y la lucha entre ellas es 'el motor de la historia'."
                        },
                        {
                            topic: "Grupo social",
                            q: "Según Sheafer, ¿qué es un grupo social?",
                            options: [
                                "Personas que viven en la misma ciudad",
                                "Un conjunto de personas que comparten normas, valores y expectativas",
                                "Individuos con el mismo nivel económico",
                                "Personas que trabajan en el mismo lugar"
                            ],
                            answerIndex: 1,
                            explain: "Sheafer define al grupo social como 'un conjunto de personas que comparten normas, valores y expectativas'."
                        },
                        {
                            topic: "Grupo social",
                            q: "Según Charles Cooley, ¿qué características tienen los grupos primarios?",
                            options: [
                                "Son grandes y las relaciones son temporales",
                                "Son formales e impersonales",
                                "Son pequeños, con interacción regular y lazos estrechos",
                                "Se basan únicamente en relaciones laborales"
                            ],
                            answerIndex: 2,
                            explain: "Los grupos primarios (familia, amigos) son pequeños, con interacción regular, lazos estrechos y son fundamentales en el proceso de socialización."
                        },
                        {
                            topic: "Rol social",
                            q: "Según Parsons, ¿qué es el rol social?",
                            options: [
                                "La posición económica de una persona",
                                "Una expectativa de conducta preescrita socialmente según el estatus",
                                "El trabajo que realiza una persona",
                                "La personalidad de cada individuo"
                            ],
                            answerIndex: 1,
                            explain: "Parsons define el rol como 'una expectativa de conducta que puede predecirse por estar socialmente preescrita'."
                        },
                        {
                            topic: "Instituciones sociales",
                            q: "Según Douglass North, ¿qué son las instituciones?",
                            options: [
                                "Solo edificios gubernamentales",
                                "Las restricciones ideadas por los humanos que estructuran intercambios económicos, sociales y políticos",
                                "Organizaciones religiosas exclusivamente",
                                "Empresas privadas"
                            ],
                            answerIndex: 1,
                            explain: "Para Douglass North, las instituciones son las restricciones ideadas por los humanos que permiten estructurar los intercambios."
                        },
                        {
                            topic: "Familia",
                            q: "¿Cómo define Esteinou a la familia contemporánea?",
                            options: [
                                "Únicamente padres e hijos biológicos",
                                "Una forma de organización para la gestión de la cotidianidad",
                                "Solo personas con parentesco sanguíneo",
                                "Una institución en decadencia"
                            ],
                            answerIndex: 1,
                            explain: "Esteinou define a la familia contemporánea como 'una forma de organización para la gestión de la cotidianidad'."
                        },
                        {
                            topic: "Trabajo e informalidad",
                            q: "Según el texto, ¿qué porcentaje de empleo informal había en México para el segundo semestre de 2019?",
                            options: [
                                "35.2%",
                                "45.8%",
                                "56.3%",
                                "62.1%"
                            ],
                            answerIndex: 2,
                            explain: "Según el INEGI y la ENOE, para el segundo semestre de 2019 el empleo informal en México subió a 56.3%."
                        }
                    ]
                },
                // ACTIVIDAD 2: Necesidades y consumismo
                act2: {
                    nombre: "Actividad 2: Necesidades y consumismo",
                    desc: "Perspectiva humanista, consumismo y desarrollo sostenible",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Perspectiva humanista",
                            q: "¿Quién es el principal exponente de la perspectiva humanista en psicología?",
                            options: [
                                "Sigmund Freud",
                                "Abraham Maslow",
                                "Carl Jung",
                                "B.F. Skinner"
                            ],
                            answerIndex: 1,
                            explain: "Abraham Maslow (1908-1970) fue uno de los fundadores e impulsores de la Psicología Humanista."
                        },
                        {
                            topic: "Perspectiva humanista",
                            q: "¿Qué propone la pirámide de Maslow?",
                            options: [
                                "Los trastornos mentales",
                                "La jerarquía de las necesidades humanas",
                                "Los métodos de investigación",
                                "Las etapas del desarrollo infantil"
                            ],
                            answerIndex: 1,
                            explain: "La pirámide de Maslow jerarquiza las necesidades humanas por su grado de importancia para el bienestar de la persona."
                        },
                        {
                            topic: "Perspectiva humanista",
                            q: "Según Maslow, ¿qué es la autorrealización?",
                            options: [
                                "Tener muchas posesiones materiales",
                                "Desarrollar todo el potencial humano y lograr la satisfacción personal",
                                "Alcanzar el éxito económico",
                                "Ser reconocido socialmente"
                            ],
                            answerIndex: 1,
                            explain: "Maslow expresaba que la autorrealización se da cuando el ser humano desarrolla todo su potencial, logrando así su satisfacción y felicidad."
                        },
                        {
                            topic: "Epicuro",
                            q: "¿Qué filósofo griego propuso que el placer es el principio y fin de una vida feliz?",
                            options: [
                                "Sócrates",
                                "Platón",
                                "Aristóteles",
                                "Epicuro"
                            ],
                            answerIndex: 3,
                            explain: "Epicuro (341 a.c -270 a.c) sostenía que 'el placer es el principio y el fin de una vida feliz'."
                        },
                        {
                            topic: "Epicuro",
                            q: "Según Epicuro, ¿cómo clasificaba los deseos?",
                            options: [
                                "Buenos y malos",
                                "Naturales y necesarios, naturales no necesarios, y no naturales no necesarios",
                                "Físicos y espirituales",
                                "Individuales y colectivos"
                            ],
                            answerIndex: 1,
                            explain: "Epicuro clasificaba los deseos en: naturales y necesarios, naturales y no necesarios, y no necesarios y no naturales."
                        },
                        {
                            topic: "Consumismo",
                            q: "¿Qué es el consumismo?",
                            options: [
                                "La satisfacción de necesidades básicas",
                                "La adquisición de productos alejados de la necesidad real",
                                "El ahorro de recursos",
                                "La producción industrial"
                            ],
                            answerIndex: 1,
                            explain: "El consumismo ocurre cuando el individuo adquiere nuevos productos alejado de la necesidad real, generando un fenómeno social."
                        },
                        {
                            topic: "Consumismo",
                            q: "¿Qué son los bienes compartibles según Fontrodona?",
                            options: [
                                "Los que no se pueden compartir",
                                "Los que crecen cuando se comparten (amor, amistad, solidaridad)",
                                "Los productos industriales",
                                "Los servicios gubernamentales"
                            ],
                            answerIndex: 1,
                            explain: "Los bienes compartibles (amor, amistad, solidaridad) crecen cuando se comparten y escapan de las leyes del consumo."
                        },
                        {
                            topic: "Desarrollo sostenible",
                            q: "¿Qué organización definió el desarrollo sostenible en 1987?",
                            options: [
                                "La ONU",
                                "La Asamblea General de las Naciones Unidas",
                                "La UNESCO",
                                "La OMS"
                            ],
                            answerIndex: 1,
                            explain: "La definición de desarrollo sostenible fue otorgada por la Asamblea General de las Naciones Unidas en 1987."
                        },
                        {
                            topic: "Desarrollo sostenible",
                            q: "¿Qué es el desarrollo sostenible?",
                            options: [
                                "Maximizar la producción industrial",
                                "Satisfacer las necesidades del presente sin comprometer las futuras generaciones",
                                "Aumentar el consumo",
                                "Explotar todos los recursos disponibles"
                            ],
                            answerIndex: 1,
                            explain: "El desarrollo sostenible satisface las necesidades del presente sin comprometer la capacidad de las futuras generaciones."
                        },
                        {
                            topic: "Desarrollo sostenible",
                            q: "Según el principio de prudencia en el desarrollo sostenible, ¿qué se debe evitar?",
                            options: [
                                "La inversión en tecnología",
                                "La aplicación de tecnología sin certeza científica de sus consecuencias",
                                "El desarrollo industrial",
                                "La investigación científica"
                            ],
                            answerIndex: 1,
                            explain: "El principio de prudencia se refiere a evitar la aplicación de tecnología sin poseer certeza científica de las consecuencias."
                        }
                    ]
                },
                // ACTIVIDAD 3: Normas sociales y jurídicas
                act3: {
                    nombre: "Actividad 3: Normas sociales y jurídicas",
                    desc: "Tipos de normas, ciudadanía digital, derechos humanos y relaciones de poder",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Normas",
                            q: "¿Cuál es el origen etimológico de la palabra 'norma'?",
                            options: [
                                "Del griego 'nomos' que significa ley",
                                "Del latín que significa 'escuadra'",
                                "Del francés 'norme' que significa regla",
                                "Del inglés 'norm' que significa estándar"
                            ],
                            answerIndex: 1,
                            explain: "El término norma proviene del latín, cuyo significado es 'escuadra', refiriéndose a ordenamientos que regulan el comportamiento."
                        },
                        {
                            topic: "Normas",
                            q: "¿Qué característica tiene una norma autónoma?",
                            options: [
                                "Es impuesta por un tercero",
                                "El individuo actúa conforme a su libre albedrío",
                                "Tiene castigo obligatorio",
                                "Es dictada por el gobierno"
                            ],
                            answerIndex: 1,
                            explain: "En la norma autónoma, el individuo actúa conforme a su libre albedrío y las decisiones son tomadas por cuenta propia."
                        },
                        {
                            topic: "Normas sociales",
                            q: "¿Qué buscan promover las normas sociales?",
                            options: [
                                "El castigo de los infractores",
                                "Un buen desarrollo social y sana convivencia",
                                "El control gubernamental",
                                "La uniformidad cultural"
                            ],
                            answerIndex: 1,
                            explain: "Las normas sociales buscan promover un buen desarrollo social, así como una sana convivencia en la comunidad."
                        },
                        {
                            topic: "Normas jurídicas",
                            q: "¿Qué caracteriza a las normas jurídicas?",
                            options: [
                                "Son opcionales",
                                "Son de carácter obligatorio y están escritas en leyes",
                                "Varían según la cultura",
                                "No tienen sanción"
                            ],
                            answerIndex: 1,
                            explain: "Las normas jurídicas son de carácter obligatorio, establecidas por instituciones reconocidas por el estado y deben estar escritas."
                        },
                        {
                            topic: "Ciudadanía digital",
                            q: "¿Qué es la ciudadanía digital?",
                            options: [
                                "Votar en línea",
                                "Desarrollar habilidades para coexistir en el mundo virtual con normas y estándares de conducta",
                                "Comprar por internet",
                                "Usar redes sociales"
                            ],
                            answerIndex: 1,
                            explain: "La ciudadanía digital desarrolla habilidades en el individuo para coexistir en un mundo donde lo real y lo virtual tienden a confundirse."
                        },
                        {
                            topic: "Netiqueta",
                            q: "¿Quién redactó las diez normas de conducta en la red (netiqueta) en 1994?",
                            options: [
                                "Bill Gates",
                                "Virginia Shea",
                                "Steve Jobs",
                                "Mark Zuckerberg"
                            ],
                            answerIndex: 1,
                            explain: "Virginia Shea, en 1994, redactó diez normas de conducta en la red conocidas como netiqueta."
                        },
                        {
                            topic: "Derechos Humanos",
                            q: "¿Cuál es uno de los principios de los Derechos Humanos según la CNDH?",
                            options: [
                                "Selectividad",
                                "Universalidad",
                                "Temporalidad",
                                "Regionalidad"
                            ],
                            answerIndex: 1,
                            explain: "La universalidad significa que los Derechos Humanos corresponden a todas las personas por igual."
                        },
                        {
                            topic: "Derechos Humanos",
                            q: "¿En qué año fue adoptada la Declaración Universal de los Derechos Humanos?",
                            options: [
                                "1945",
                                "1948",
                                "1950",
                                "1960"
                            ],
                            answerIndex: 1,
                            explain: "La Declaración Universal de los Derechos Humanos fue adoptada por la Asamblea General de la ONU el 10 de diciembre de 1948."
                        },
                        {
                            topic: "Relaciones de poder",
                            q: "Según Foucault, ¿dónde se pueden observar las relaciones de poder?",
                            options: [
                                "Solo en el gobierno",
                                "En ámbitos como la escuela, la familia o el trabajo",
                                "Únicamente en las relaciones internacionales",
                                "Exclusivamente en el ámbito económico"
                            ],
                            answerIndex: 1,
                            explain: "Foucault señala que las relaciones de poder se observan en ámbitos como la escuela, la familia o el trabajo."
                        },
                        {
                            topic: "Obstáculos de la democracia",
                            q: "¿Cuáles son algunos obstáculos de la democracia mencionados en el texto?",
                            options: [
                                "Prosperidad y abundancia",
                                "Corrupción, impunidad, represión social y abuso de poder",
                                "Participación ciudadana",
                                "Transparencia y rendición de cuentas"
                            ],
                            answerIndex: 1,
                            explain: "Los obstáculos de la democracia incluyen corrupción, impunidad, represión social y abuso de poder."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2 ==========
        modulo2: {
            nombre: "Módulo 2: Ciudadanía: Características, Derechos y Obligaciones",
            actividades: {
                // ACTIVIDAD 1: Modelos económicos y distribución de la riqueza
                act1: {
                    nombre: "Actividad 1: Modelos económicos y distribución de la riqueza",
                    desc: "Capitalismo, socialismo, crecimiento y desarrollo económico",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Distribución de la riqueza",
                            q: "¿Qué caracteriza la distribución de la riqueza en el modelo capitalista?",
                            options: [
                                "Igualdad económica",
                                "Disputa de intereses entre trabajadores y propietarios",
                                "Distribución equitativa",
                                "Ausencia de clases sociales"
                            ],
                            answerIndex: 1,
                            explain: "La distribución de la riqueza en el capitalismo está marcada por la disputa entre la clase trabajadora y los propietarios de los medios de producción."
                        },
                        {
                            topic: "Medios de producción",
                            q: "¿Qué son los medios de producción?",
                            options: [
                                "Los productos terminados",
                                "Materias primas, maquinaria, instalaciones para crear productos",
                                "El dinero en efectivo",
                                "Los impuestos"
                            ],
                            answerIndex: 1,
                            explain: "Los medios de producción son las materias primas, maquinaria e instalaciones destinadas a la creación de productos."
                        },
                        {
                            topic: "Modelos económicos",
                            q: "¿En qué periodo histórico se confrontaron principalmente el capitalismo y el socialismo?",
                            options: [
                                "Primera Guerra Mundial",
                                "Guerra Fría",
                                "Revolución Industrial",
                                "Edad Media"
                            ],
                            answerIndex: 1,
                            explain: "La confrontación entre capitalismo y socialismo se dio principalmente durante la Guerra Fría, después de la Segunda Guerra Mundial."
                        },
                        {
                            topic: "Modelo económico",
                            q: "¿Para qué sirve un modelo económico?",
                            options: [
                                "Para eliminar los impuestos",
                                "Para establecer políticas económicas y comprender las actividades económicas",
                                "Para controlar la población",
                                "Para eliminar el comercio"
                            ],
                            answerIndex: 1,
                            explain: "Los modelos económicos permiten establecer políticas que estructuran, analizan y comprenden las diversas actividades económicas."
                        },
                        {
                            topic: "Capitalismo",
                            q: "¿Cuál es un principio básico del modelo económico capitalista?",
                            options: [
                                "Propiedad estatal",
                                "Propiedad privada",
                                "Planificación central",
                                "Ausencia de competencia"
                            ],
                            answerIndex: 1,
                            explain: "Uno de los principios básicos del capitalismo es la propiedad privada, donde los individuos son libres de poseer bienes."
                        },
                        {
                            topic: "Capitalismo",
                            q: "Según Sabogal Tamayo, ¿qué problema genera el modelo capitalista?",
                            options: [
                                "Igualdad social",
                                "Desigualdad en la distribución de la riqueza",
                                "Eliminación de la pobreza",
                                "Distribución equitativa del ingreso"
                            ],
                            answerIndex: 1,
                            explain: "El capitalismo genera desigualdad en la distribución de la riqueza: un 8% de la población obtiene la mitad del ingreso mundial."
                        },
                        {
                            topic: "Crecimiento económico",
                            q: "Según Silvestre Méndez, ¿qué es el crecimiento económico?",
                            options: [
                                "La mejora en la calidad de vida",
                                "El incremento de las actividades económicas",
                                "La distribución equitativa de la riqueza",
                                "La reducción de impuestos"
                            ],
                            answerIndex: 1,
                            explain: "El crecimiento económico es el incremento de las actividades económicas, un fenómeno objetivo que puede ser observable y medible."
                        },
                        {
                            topic: "Variables económicas",
                            q: "¿Cuál es una variable para medir el crecimiento económico?",
                            options: [
                                "La felicidad de la población",
                                "La producción total del país (PIB)",
                                "El color de los productos",
                                "La temperatura ambiente"
                            ],
                            answerIndex: 1,
                            explain: "El Producto Interno Bruto (PIB) es una variable que mide la producción total del país para calcular el crecimiento económico."
                        },
                        {
                            topic: "Desarrollo económico",
                            q: "¿En qué se diferencia el desarrollo económico del crecimiento económico?",
                            options: [
                                "Son lo mismo",
                                "El desarrollo incluye mejoras cualitativas en calidad de vida",
                                "El desarrollo solo mide el PIB",
                                "El desarrollo no es medible"
                            ],
                            answerIndex: 1,
                            explain: "El desarrollo económico implica cambios cualitativos en la vida de la sociedad: salud, educación, empleo y calidad de vida."
                        },
                        {
                            topic: "Subdesarrollo",
                            q: "¿Qué caracteriza al subdesarrollo económico?",
                            options: [
                                "Alta industrialización",
                                "Dependencia de países desarrollados en tecnología, mercado y financiamiento",
                                "Distribución equitativa de la riqueza",
                                "Bajos niveles de pobreza"
                            ],
                            answerIndex: 1,
                            explain: "Los países con subdesarrollo tienen dependencia de los más desarrollados en tecnología, mercado, financiamiento, cultura y política."
                        }
                    ]
                },
                // ACTIVIDAD 2: Orígenes del Estado, Derechos Humanos y formas de gobierno
                act2: {
                    nombre: "Actividad 2: Orígenes del Estado, Derechos Humanos y formas de gobierno",
                    desc: "Teorías del Estado, evolución de los derechos humanos y organización política",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Orígenes del Estado",
                            q: "Según Thomas Hobbes, ¿cuál es la función del Estado?",
                            options: [
                                "Garantizar la propiedad privada",
                                "Mantener la paz social y establecer el orden",
                                "Promover la desigualdad",
                                "Eliminar las leyes"
                            ],
                            answerIndex: 1,
                            explain: "Para Hobbes, el Estado es el encargado de mantener la paz social y establecer el orden que deben acatar los individuos."
                        },
                        {
                            topic: "Orígenes del Estado",
                            q: "¿Qué propuso John Locke sobre el poder soberano?",
                            options: [
                                "Concentrarlo en una sola persona",
                                "Dividirlo en tres poderes: legislativo, judicial y ejecutivo",
                                "Eliminarlo por completo",
                                "Entregarlo a la iglesia"
                            ],
                            answerIndex: 1,
                            explain: "Locke estableció que el poder soberano debía dividirse en tres poderes: legislativo, judicial y ejecutivo."
                        },
                        {
                            topic: "Orígenes del Estado",
                            q: "Para Rousseau, ¿cómo son los seres humanos por naturaleza?",
                            options: [
                                "Esclavos",
                                "Libres",
                                "Desiguales",
                                "Violentos"
                            ],
                            answerIndex: 1,
                            explain: "Rousseau propuso que los seres humanos son seres libres por naturaleza y que vivir en sociedad crea desigualdad."
                        },
                        {
                            topic: "Derechos Humanos",
                            q: "¿Qué documento es considerado el primer antecedente de los derechos humanos?",
                            options: [
                                "La Constitución de Virginia",
                                "La Carta Magna de 1215",
                                "La Declaración Francesa",
                                "La Declaración Universal"
                            ],
                            answerIndex: 1,
                            explain: "La Carta Magna de 1215, también conocida como 'la Gran Carta', es el primer antecedente para preservar los derechos humanos."
                        },
                        {
                            topic: "Derechos Humanos",
                            q: "¿En qué año se proclamó la Declaración de los Derechos del Hombre y del Ciudadano en Francia?",
                            options: [
                                "1776",
                                "1789",
                                "1810",
                                "1848"
                            ],
                            answerIndex: 1,
                            explain: "La Declaración de los Derechos del Hombre y del Ciudadano fue proclamada el 26 de agosto de 1789 en Francia."
                        },
                        {
                            topic: "Derechos Humanos",
                            q: "¿A qué generación de derechos pertenecen los derechos civiles y políticos?",
                            options: [
                                "Primera generación",
                                "Segunda generación",
                                "Tercera generación",
                                "Cuarta generación"
                            ],
                            answerIndex: 0,
                            explain: "Los derechos civiles y políticos pertenecen a la primera generación, surgidos con la Revolución Francesa."
                        },
                        {
                            topic: "ONG",
                            q: "¿Qué son las Organizaciones No Gubernamentales (ONG)?",
                            options: [
                                "Instituciones gubernamentales",
                                "Instituciones independientes sin ánimo de lucro",
                                "Empresas privadas",
                                "Partidos políticos"
                            ],
                            answerIndex: 1,
                            explain: "Las ONG son instituciones independientes, sin ánimo de lucro, que no dependen del gobierno y ayudan a sectores necesitados."
                        },
                        {
                            topic: "Formas de gobierno",
                            q: "¿Cuál es el origen de la democracia?",
                            options: [
                                "Roma antigua",
                                "Atenas clásica",
                                "Egipto",
                                "Persia"
                            ],
                            answerIndex: 1,
                            explain: "El origen de la democracia se gesta en la Atenas de la época clásica, con los antiguos filósofos como Platón y Aristóteles."
                        },
                        {
                            topic: "Estado",
                            q: "¿Cuáles son los tres elementos que conforman el Estado?",
                            options: [
                                "Ejército, iglesia, moneda",
                                "Población, territorio y gobierno",
                                "Leyes, jueces, policía",
                                "Presidente, congreso, tribunales"
                            ],
                            answerIndex: 1,
                            explain: "Los elementos que conforman el Estado son: población, territorio y gobierno."
                        },
                        {
                            topic: "Ciudadanía",
                            q: "Según el artículo 34 de la Constitución mexicana, ¿qué requisito se necesita para ser ciudadano?",
                            options: [
                                "Tener 16 años",
                                "Haber cumplido 18 años y tener un modo honesto de vivir",
                                "Saber leer y escribir",
                                "Tener propiedades"
                            ],
                            answerIndex: 1,
                            explain: "Son ciudadanos mexicanos los varones y mujeres que hayan cumplido 18 años y tengan un modo honesto de vivir."
                        }
                    ]
                },
                // ACTIVIDAD 3: Tipos de gobierno y democracia
                act3: {
                    nombre: "Actividad 3: Tipos de gobierno y democracia",
                    desc: "Formas de gobierno, valores democráticos y organización territorial",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Tipos de gobierno",
                            q: "¿Qué es una república?",
                            options: [
                                "Gobierno hereditario",
                                "Forma de organización donde el jefe de gobierno se decide por sufragio",
                                "Gobierno de uno solo",
                                "Gobierno religioso"
                            ],
                            answerIndex: 1,
                            explain: "En la república, el jefe de gobierno (presidente) se decide a través del sufragio y se fundamenta en la constitución."
                        },
                        {
                            topic: "Tipos de gobierno",
                            q: "¿Qué caracteriza a una monarquía constitucional o parlamentaria?",
                            options: [
                                "El rey tiene poder absoluto",
                                "Existe un parlamento seleccionado por el pueblo",
                                "No hay leyes",
                                "El gobierno es vitalicio"
                            ],
                            answerIndex: 1,
                            explain: "En la monarquía constitucional, existe un parlamento seleccionado por el pueblo que ejerce el poder legislativo."
                        },
                        {
                            topic: "Tipos de gobierno",
                            q: "¿Qué es una dictadura?",
                            options: [
                                "Gobierno del pueblo",
                                "Régimen donde todos los poderes se concentran en un individuo o grupo",
                                "Gobierno de los mejores",
                                "Sistema parlamentario"
                            ],
                            answerIndex: 1,
                            explain: "La dictadura es un régimen donde todos los poderes del Estado se concentran en un individuo, grupo o partido."
                        },
                        {
                            topic: "Democracia",
                            q: "¿Cuál es el origen etimológico de la palabra 'democracia'?",
                            options: [
                                "Demos: pueblo; kratos: gobierno",
                                "Demus: poder; cracia: pueblo",
                                "Demos: ley; kratos: orden",
                                "Demos: ciudad; kratos: autoridad"
                            ],
                            answerIndex: 0,
                            explain: "Democracia proviene del griego 'demos' (pueblo) y 'kratos' (gobierno): gobierno del pueblo."
                        },
                        {
                            topic: "Valores de la democracia",
                            q: "¿Qué valores son esenciales para todo proceso democrático?",
                            options: [
                                "Obediencia y sumisión",
                                "Libertad, igualdad, respeto, diálogo y tolerancia",
                                "Riqueza y poder",
                                "Fuerza y autoridad"
                            ],
                            answerIndex: 1,
                            explain: "Los valores democráticos incluyen libertad, igualdad, respeto, diálogo y tolerancia para la convivencia social."
                        },
                        {
                            topic: "Territorio",
                            q: "Según la Constitución mexicana, ¿qué comprende el territorio nacional?",
                            options: [
                                "Solo el suelo",
                                "El espacio aéreo, terrestre y marítimo",
                                "Únicamente las ciudades",
                                "Las zonas urbanas"
                            ],
                            answerIndex: 1,
                            explain: "El territorio nacional comprende el espacio aéreo, terrestre y marítimo, incluyendo islas, arrecifes y plataforma continental."
                        },
                        {
                            topic: "Formas de Estado",
                            q: "¿Qué es un Estado federal?",
                            options: [
                                "Un solo centro de poder",
                                "Integrado por entidades federativas que se unen formando una federación",
                                "Estados independientes sin unión",
                                "Gobierno religioso"
                            ],
                            answerIndex: 1,
                            explain: "El Estado federal está integrado por entidades federativas que se unen para formar una nueva persona jurídica: la Federación."
                        },
                        {
                            topic: "Formas de gobierno",
                            q: "¿Qué es la oligarquía?",
                            options: [
                                "Gobierno del pueblo",
                                "Gobierno de un grupo reducido de la misma clase social",
                                "Gobierno de uno solo",
                                "Gobierno religioso"
                            ],
                            answerIndex: 1,
                            explain: "En la oligarquía, el poder lo ejerce un reducido grupo de personas que pertenecen a una misma clase social privilegiada."
                        },
                        {
                            topic: "Teocracia",
                            q: "¿Qué es la teocracia?",
                            options: [
                                "Gobierno del pueblo",
                                "Sociedad donde la autoridad política es ejercida por ministros de Dios",
                                "Gobierno militar",
                                "Sistema parlamentario"
                            ],
                            answerIndex: 1,
                            explain: "En la teocracia, la autoridad política se considera emanada de Dios y la ejercen sus ministros (sacerdotes o príncipes)."
                        },
                        {
                            topic: "Autocracia",
                            q: "¿Qué es la autocracia?",
                            options: [
                                "Gobierno del pueblo",
                                "Sistema donde la voluntad de una sola persona es la ley suprema",
                                "Gobierno de varios",
                                "Sistema sin leyes"
                            ],
                            answerIndex: 1,
                            explain: "En la autocracia, la voluntad de una sola persona es la ley suprema del Estado."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3 ==========
        modulo3: {
            nombre: "Módulo 3: Procesos de producción",
            actividades: {
                // ACTIVIDAD 1: Sectores económicos y proceso de producción
                act1: {
                    nombre: "Actividad 1: Sectores económicos y proceso de producción",
                    desc: "Proceso productivo y sectores de la economía",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Proceso de producción",
                            q: "Según Corvo, ¿qué es el proceso de producción?",
                            options: [
                                "La venta de productos",
                                "Serie de pasos mecánicos o químicos para crear un objeto",
                                "El consumo de bienes",
                                "La distribución de mercancías"
                            ],
                            answerIndex: 1,
                            explain: "El proceso de producción consiste en una serie de pasos mecánicos o químicos utilizados para crear un objeto."
                        },
                        {
                            topic: "Proceso de producción",
                            q: "¿Qué significa 'agregar valor' en un proceso de producción?",
                            options: [
                                "Aumentar el precio sin razón",
                                "Conseguir que un producto sea más deseable para el consumidor",
                                "Reducir la calidad",
                                "Eliminar características"
                            ],
                            answerIndex: 1,
                            explain: "Agregar valor significa conseguir que un producto sea más deseable para que el consumidor pague más por él."
                        },
                        {
                            topic: "Sector agropecuario",
                            q: "¿Qué actividades comprende el sector agropecuario?",
                            options: [
                                "Industria y servicios",
                                "Agricultura, ganadería, silvicultura y pesca",
                                "Banca y comercio",
                                "Tecnología e innovación"
                            ],
                            answerIndex: 1,
                            explain: "El sector agropecuario (primario) comprende agricultura, ganadería, silvicultura y pesca."
                        },
                        {
                            topic: "Sector industrial",
                            q: "¿Qué incluye la industria extractiva?",
                            options: [
                                "Fabricación de muebles",
                                "Extracción del subsuelo de recursos materiales",
                                "Producción de alimentos",
                                "Servicios financieros"
                            ],
                            answerIndex: 1,
                            explain: "La industria extractiva consiste en actividades para extraer del subsuelo recursos materiales."
                        },
                        {
                            topic: "Sector servicios",
                            q: "¿Qué actividades comprende el sector terciario?",
                            options: [
                                "Agricultura y ganadería",
                                "Comercio, restaurantes, transporte, servicios financieros",
                                "Minería y petróleo",
                                "Construcción"
                            ],
                            answerIndex: 1,
                            explain: "El sector servicios (terciario) incluye comercio, restaurantes, transporte, comunicaciones y servicios financieros."
                        },
                        {
                            topic: "Sector cuaternario",
                            q: "¿Qué caracteriza al sector cuaternario de la economía?",
                            options: [
                                "Uso de mano de obra no calificada",
                                "Investigación, desarrollo científico y tecnológico",
                                "Producción agrícola",
                                "Extracción minera"
                            ],
                            answerIndex: 1,
                            explain: "El sector cuaternario está relacionado con la investigación, desarrollo científico y tecnológico, e innovación."
                        },
                        {
                            topic: "Sector cuaternario",
                            q: "¿Qué tipo de mano de obra utiliza el sector cuaternario?",
                            options: [
                                "Mano de obra no calificada",
                                "Mano de obra altamente calificada e intelectual",
                                "Trabajo infantil",
                                "Trabajo temporal"
                            ],
                            answerIndex: 1,
                            explain: "El sector cuaternario utiliza mano de obra altamente calificada y realiza trabajo de carácter intelectual."
                        },
                        {
                            topic: "Factores de producción",
                            q: "¿Cuáles son los factores de producción mencionados en el texto?",
                            options: [
                                "Dinero, poder, influencia",
                                "Tierra, trabajo, capital y organización",
                                "Mercado, oferta, demanda",
                                "Gobierno, leyes, instituciones"
                            ],
                            answerIndex: 1,
                            explain: "Los factores de producción son tierra, trabajo, capital y organización."
                        },
                        {
                            topic: "Economía",
                            q: "¿Qué tres formas de organización económica se mencionan?",
                            options: [
                                "Capitalismo, comunismo, anarquía",
                                "Economía de mercado, economía centralizada, economía mixta",
                                "Feudalismo, esclavismo, socialismo",
                                "Monarquía, república, dictadura"
                            ],
                            answerIndex: 1,
                            explain: "Las tres formas de organización económica son: economía de mercado, economía centralizada y economía mixta."
                        },
                        {
                            topic: "Bienestar",
                            q: "¿Con qué se asocia el bienestar según el texto?",
                            options: [
                                "La riqueza material",
                                "La calidad de vida",
                                "El poder político",
                                "El éxito profesional"
                            ],
                            answerIndex: 1,
                            explain: "El bienestar se asocia con la calidad de vida y permite reducir las desigualdades."
                        }
                    ]
                },
                // ACTIVIDAD 2: Zonas económicas de México
                act2: {
                    nombre: "Actividad 2: Zonas económicas de México",
                    desc: "Regiones económicas y actividades productivas por estado",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Zonas económicas",
                            q: "¿Quién propuso la segmentación de México en regiones geoeconómicas?",
                            options: [
                                "Silvestre Méndez",
                                "Ángel Bassols",
                                "Norbert Elías",
                                "Pierre Bourdieu"
                            ],
                            answerIndex: 1,
                            explain: "Ángel Bassols (2009) propuso la segmentación de México en diferentes regiones geoeconómicas según actividades productivas."
                        },
                        {
                            topic: "Zona Noroeste",
                            q: "¿Qué estados integran la zona Noroeste o Pacífico Norte?",
                            options: [
                                "Chihuahua, Coahuila, Durango",
                                "Baja California, Baja California Sur, Sonora, Sinaloa, Nayarit",
                                "Veracruz, Tabasco",
                                "Guerrero, Oaxaca, Chiapas"
                            ],
                            answerIndex: 1,
                            explain: "La zona Noroeste incluye Baja California, Baja California Sur, Sonora, Sinaloa y Nayarit."
                        },
                        {
                            topic: "Zona Norte",
                            q: "¿Qué actividad económica destaca en la zona Norte?",
                            options: [
                                "Pesca de atún",
                                "Ganado de exportación y minería",
                                "Turismo",
                                "Industria automotriz"
                            ],
                            answerIndex: 1,
                            explain: "En la zona Norte (Chihuahua, Coahuila, Durango) destaca el ganado de exportación y la minería."
                        },
                        {
                            topic: "Zona Noreste",
                            q: "¿Qué estados forman la zona Noreste?",
                            options: [
                                "Jalisco, Guanajuato",
                                "Nuevo León y Tamaulipas",
                                "Veracruz y Tabasco",
                                "Campeche y Quintana Roo"
                            ],
                            answerIndex: 1,
                            explain: "La zona Noreste está integrada por Nuevo León y Tamaulipas."
                        },
                        {
                            topic: "Centro-Occidente",
                            q: "¿Qué actividad económica caracteriza a la región Centro-Occidente?",
                            options: [
                                "Explotación petrolera",
                                "Industria de transformación alimenticia, química y del calzado",
                                "Pesca de altura",
                                "Turismo de playa"
                            ],
                            answerIndex: 1,
                            explain: "En Centro-Occidente destaca la industria de transformación alimenticia, química y del calzado."
                        },
                        {
                            topic: "Centro-Sur",
                            q: "¿Qué estados forman parte de la región Centro-Sur?",
                            options: [
                                "Solo la Ciudad de México",
                                "Querétaro, Hidalgo, Estado de México, Tlaxcala, Morelos, Ciudad de México",
                                "Veracruz, Tabasco",
                                "Guerrero, Oaxaca"
                            ],
                            answerIndex: 1,
                            explain: "La región Centro-Sur incluye Querétaro, Hidalgo, Estado de México, Tlaxcala, Morelos y Ciudad de México."
                        },
                        {
                            topic: "Golfo de México",
                            q: "¿Qué actividad económica es característica del Golfo de México?",
                            options: [
                                "Industria automotriz",
                                "Explotación petrolera",
                                "Tecnología",
                                "Servicios financieros"
                            ],
                            answerIndex: 1,
                            explain: "En la región Golfo de México (Veracruz y Tabasco) destaca la explotación petrolera."
                        },
                        {
                            topic: "Pacífico Sur",
                            q: "¿Qué estados integran la región Pacífico Sur?",
                            options: [
                                "Jalisco, Colima",
                                "Guerrero, Oaxaca, Chiapas",
                                "Nayarit, Sinaloa",
                                "Campeche, Yucatán"
                            ],
                            answerIndex: 1,
                            explain: "La región Pacífico Sur está formada por Guerrero, Oaxaca y Chiapas."
                        },
                        {
                            topic: "Península de Yucatán",
                            q: "¿Qué actividad económica destaca en la Península de Yucatán?",
                            options: [
                                "Minería",
                                "Turismo y explotación petrolera",
                                "Industria automotriz",
                                "Agricultura de temporal"
                            ],
                            answerIndex: 1,
                            explain: "En la Península de Yucatán destacan el turismo, la explotación petrolera y la pesca."
                        },
                        {
                            topic: "Regiones económicas",
                            q: "¿Cuántas regiones económicas conforman México según la clasificación presentada?",
                            options: [
                                "5",
                                "8",
                                "10",
                                "12"
                            ],
                            answerIndex: 1,
                            explain: "México se divide en 8 regiones económicas: Noroeste, Norte, Noreste, Centro-Occidente, Centro-Sur, Golfo de México, Pacífico Sur y Península de Yucatán."
                        }
                    ]
                },
                // ACTIVIDAD 3: Recursos naturales y conservación
                act3: {
                    nombre: "Actividad 3: Recursos naturales y conservación",
                    desc: "Recursos renovables, no renovables y conservación ambiental",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Conservación",
                            q: "¿Cuál es el verdadero objeto de la conservación de recursos naturales?",
                            options: [
                                "No tocar jamás los recursos",
                                "Asegurar un medio ambiente de calidad y garantizar rendimiento continuo",
                                "Extraer todos los recursos rápidamente",
                                "Vender los recursos al extranjero"
                            ],
                            answerIndex: 1,
                            explain: "La conservación busca asegurar un medio ambiente de calidad y garantizar un rendimiento continuo de plantas, animales y materiales."
                        },
                        {
                            topic: "Recursos naturales",
                            q: "¿Cómo se dividen los recursos naturales?",
                            options: [
                                "Buenos y malos",
                                "Renovables y no renovables",
                                "Caros y baratos",
                                "Nacionales e importados"
                            ],
                            answerIndex: 1,
                            explain: "Los recursos naturales se dividen en renovables y no renovables."
                        },
                        {
                            topic: "Recursos renovables",
                            q: "¿Qué son los recursos renovables?",
                            options: [
                                "Recursos que se agotan para siempre",
                                "Recursos que pueden regenerarse (bosques, peces)",
                                "Minerales metálicos",
                                "Combustibles fósiles"
                            ],
                            answerIndex: 1,
                            explain: "Los recursos renovables son aquellos que pueden regenerarse, como bosques, peces y fuentes de energía renovable."
                        },
                        {
                            topic: "Recursos no renovables",
                            q: "¿Qué caracteriza a los recursos no renovables?",
                            options: [
                                "Se regeneran rápidamente",
                                "Se consumen más rápido de lo que se producen",
                                "Son infinitos",
                                "Provienen de seres vivos"
                            ],
                            answerIndex: 1,
                            explain: "Los recursos no renovables se consumen o transforman a una velocidad mayor que la que se producen."
                        },
                        {
                            topic: "Recursos no renovables",
                            q: "¿Cuál es un ejemplo de recurso no renovable?",
                            options: [
                                "Bosques",
                                "Petróleo",
                                "Pesca",
                                "Fauna silvestre"
                            ],
                            answerIndex: 1,
                            explain: "El petróleo es un recurso no renovable, al igual que el carbón mineral, el hierro y el gas natural."
                        },
                        {
                            topic: "Zonas petroleras",
                            q: "¿Dónde se localiza la zona petrolífera más importante de México?",
                            options: [
                                "Pacífico Sur",
                                "Golfo de México (Tamaulipas, Veracruz, Chiapas, Tabasco, Campeche)",
                                "Norte del país",
                                "Península de Yucatán"
                            ],
                            answerIndex: 1,
                            explain: "La zona petrolífera más importante se localiza en costas y plataforma continental del Golfo de México."
                        },
                        {
                            topic: "Recursos forestales",
                            q: "¿Qué incluyen los recursos forestales?",
                            options: [
                                "Peces y mariscos",
                                "Madera, celulosa, protección de suelos, valor estético",
                                "Minerales metálicos",
                                "Petróleo y gas"
                            ],
                            answerIndex: 1,
                            explain: "Los recursos forestales incluyen madera, producción de celulosa, protección de suelos y valor estético."
                        },
                        {
                            topic: "Biodiversidad",
                            q: "¿En qué niveles se divide la biodiversidad?",
                            options: [
                                "Animales, plantas, minerales",
                                "Genes, especies y ecosistemas",
                                "Tierra, agua, aire",
                                "Norte, sur, este, oeste"
                            ],
                            answerIndex: 1,
                            explain: "La biodiversidad suele dividirse en tres niveles: genes, especies y ecosistemas."
                        },
                        {
                            topic: "Reservas petroleras",
                            q: "¿Qué son las reservas de petróleo?",
                            options: [
                                "El petróleo que se está extrayendo",
                                "Recursos descubiertos que no se explotan en la actualidad",
                                "El petróleo importado",
                                "El petróleo refinado"
                            ],
                            answerIndex: 1,
                            explain: "Las reservas son los recursos que una vez descubiertos no se explotan en la actualidad."
                        },
                        {
                            topic: "Ecosistemas",
                            q: "¿Qué no pueden sustituir la ciencia y la tecnología según el texto?",
                            options: [
                                "La producción industrial",
                                "Los servicios provistos por la naturaleza (capa de ozono, ciclo del agua)",
                                "El comercio internacional",
                                "Los medios de comunicación"
                            ],
                            answerIndex: 1,
                            explain: "Los servicios provistos por la naturaleza (capa de ozono, ciclo del agua, asimilación de desperdicios) no pueden ser sustituidos."
                        }
                    ]
                }
            }
        }
    }
};

export default cienciasSociales1;