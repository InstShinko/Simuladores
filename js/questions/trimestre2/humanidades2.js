// ============================================
// HUMANIDADES II - SEGUNDO TRIMESTRE
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const humanidades2 = {
    id: "humanidades2",
    nombre: "HUMANIDADES II",
    icono: "📚",
    descripcion: "Filosofía política, derecho, instituciones, movimientos sociales, ética ambiental",
    modulos: {
        // ========== MÓDULO 1: RECONOCIENDO LA EXPERIENCIA COLECTIVA ==========
        modulo1: {
            nombre: "Módulo 1: Reconociendo la experiencia colectiva",
            actividades: {
                // ACTIVIDAD 1: Iusnaturalismo y construcción social de la realidad
                act1: {
                    nombre: "Actividad 1: Iusnaturalismo y construcción social",
                    desc: "Iusnaturalismo, tipos, construcción social de la realidad, Berger y Luckmann",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Iusnaturalismo",
                            q: "¿Qué es el iusnaturalismo?",
                            options: [
                                "Una corriente que sostiene que los derechos son creados por el Estado",
                                "Una corriente que sostiene que los derechos son parte natural de las personas, anteriores al ordenamiento jurídico",
                                "Una teoría sobre el origen divino del derecho",
                                "Un sistema legal positivo"
                            ],
                            answerIndex: 1,
                            explain: "El iusnaturalismo sostiene que los derechos de las personas, reconocidos por el Estado o no, son una parte natural de las personas, anteriores a cualquier ordenamiento creado por el hombre."
                        },
                        {
                            topic: "Origen teológico",
                            q: "¿Quién planteó el iusnaturalismo como una racionalidad moral basada en lo divino?",
                            options: [
                                "Aristóteles",
                                "Tomás de Aquino",
                                "Cicerón",
                                "Marx"
                            ],
                            answerIndex: 1,
                            explain: "Tomás de Aquino planteaba el iusnaturalismo como una racionalidad moral basada en lo divino, atendiendo a una ley natural."
                        },
                        {
                            topic: "Cicerón",
                            q: "¿Qué sostenía Cicerón sobre el derecho natural?",
                            options: [
                                "Que era variable según la cultura",
                                "Que era la razón correcta, universal, inmutable y eterna",
                                "Que dependía del Estado",
                                "Que era una construcción social"
                            ],
                            answerIndex: 1,
                            explain: "Cicerón expuso que el derecho natural era la razón correcta porque respondía a una aplicación universal, inmutable y eterna, ya que Dios era el único legislador."
                        },
                        {
                            topic: "Tipos de iusnaturalismo",
                            q: "¿Cuáles son los dos tipos de iusnaturalismo?",
                            options: [
                                "Naturalista y positivista",
                                "Racionalista o ilustrado y teológico",
                                "Clásico y moderno",
                                "Objetivo y subjetivo"
                            ],
                            answerIndex: 1,
                            explain: "Se distinguen dos tipos: el iusnaturalismo racionalista o ilustrado (laico, basado en lógica y razón) y el teológico (basado en principios religiosos)."
                        },
                        {
                            topic: "Construcción social",
                            q: "¿Qué plantea la construcción social de la realidad?",
                            options: [
                                "Que los fenómenos sociales son creados por las sociedades, no por un orden natural",
                                "Que todo está predeterminado por la naturaleza",
                                "Que la realidad es divina",
                                "Que no existe la realidad social"
                            ],
                            answerIndex: 0,
                            explain: "La construcción social de la realidad plantea que los fenómenos sociales son creados por las sociedades en su contexto, no por un orden natural o divino."
                        },
                        {
                            topic: "Berger y Luckmann",
                            q: "Según Berger y Luckmann, ¿cuáles son los tres momentos de la relación individuo-sociedad?",
                            options: [
                                "Tesis, antítesis y síntesis",
                                "Externalización, objetivación e internalización",
                                "Producción, distribución y consumo",
                                "Identidad, rol y estatus"
                            ],
                            answerIndex: 1,
                            explain: "Berger y Luckmann plantean tres momentos: externalización (la sociedad es producto humano), objetivación (la sociedad es realidad objetiva) e internalización (el hombre es producto social)."
                        },
                        {
                            topic: "Externalización",
                            q: "¿Qué significa externalización en la teoría de Berger y Luckmann?",
                            options: [
                                "Que el hombre es producto de la sociedad",
                                "Que la sociedad es un producto de los hombres",
                                "Que la sociedad es independiente de la conciencia",
                                "Que el individuo se adapta a las normas"
                            ],
                            answerIndex: 1,
                            explain: "Externalización significa que la sociedad es un producto de los hombres, es creada por ellos."
                        },
                        {
                            topic: "Objetivación",
                            q: "¿Qué significa objetivación en la teoría de Berger y Luckmann?",
                            options: [
                                "Que el hombre crea la sociedad",
                                "Que la sociedad es una realidad objetiva independiente de la conciencia individual",
                                "Que el individuo internaliza normas",
                                "Que la sociedad cambia constantemente"
                            ],
                            answerIndex: 1,
                            explain: "Objetivación significa que la sociedad se convierte en una realidad objetiva que existe independientemente de la conciencia de los individuos."
                        },
                        {
                            topic: "Internalización",
                            q: "¿Qué significa internalización en la teoría de Berger y Luckmann?",
                            options: [
                                "Que la sociedad es producto humano",
                                "Que la sociedad es objetiva",
                                "Que el hombre es un producto de la sociedad",
                                "Que el individuo crea instituciones"
                            ],
                            answerIndex: 2,
                            explain: "Internalización significa que el hombre es un producto de la sociedad, incorpora las normas y valores sociales."
                        },
                        {
                            topic: "Ejemplo construcción social",
                            q: "¿Qué ejemplo de construcción social se menciona en el texto?",
                            options: [
                                "Las leyes físicas",
                                "Los roles de género y prácticas como 'gender reveal'",
                                "La gravedad",
                                "Las estaciones del año"
                            ],
                            answerIndex: 1,
                            explain: "Los roles de género son patrones rígidos de comportamiento construidos socialmente, con fundamentos biologicistas que derivan en estereotipos."
                        }
                    ]
                },
                // ACTIVIDAD 2: Formas de gobierno y democracia
                act2: {
                    nombre: "Actividad 2: Formas de gobierno",
                    desc: "Gobierno, Estado, tipos de gobierno, democracia, autoritarismo",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Gobierno",
                            q: "¿Qué es el gobierno?",
                            options: [
                                "La organización de la nación",
                                "El organismo que asume la responsabilidad de mandato a través de poderes",
                                "El territorio y la población",
                                "El conjunto de leyes"
                            ],
                            answerIndex: 1,
                            explain: "El gobierno es el organismo que asume la responsabilidad de mandato a través de los poderes ejecutivo, legislativo y judicial."
                        },
                        {
                            topic: "Estado",
                            q: "¿Cuáles son las tres características necesarias para la existencia del Estado?",
                            options: [
                                "Gobierno, leyes y constitución",
                                "Soberanía, territorio y población",
                                "Poder ejecutivo, legislativo y judicial",
                                "Nación, cultura e historia"
                            ],
                            answerIndex: 1,
                            explain: "El Estado requiere tres características: soberanía, territorio para ejercerla y población."
                        },
                        {
                            topic: "División de poderes",
                            q: "¿Quién propuso la división del poder del Estado en legislativo, ejecutivo y judicial?",
                            options: [
                                "Aristóteles",
                                "Montesquieu",
                                "Rousseau",
                                "Locke"
                            ],
                            answerIndex: 1,
                            explain: "Montesquieu propuso dividir el poder del Estado en legislativo, ejecutivo y judicial para evitar la concentración del poder."
                        },
                        {
                            topic: "Democracia",
                            q: "¿Dónde se gestó el origen de la democracia?",
                            options: [
                                "En Roma",
                                "En la Atenas de la época clásica",
                                "En Egipto",
                                "En Mesopotamia"
                            ],
                            answerIndex: 1,
                            explain: "El origen de la democracia se gesta en la Atenas de la época clásica, con filósofos como Platón y Aristóteles."
                        },
                        {
                            topic: "Democracia directa",
                            q: "¿Qué es la democracia directa?",
                            options: [
                                "Elección de representantes",
                                "Ejercicio de elección realizado directamente por el pueblo",
                                "Participación mediante plebiscitos",
                                "Gobierno de uno solo"
                            ],
                            answerIndex: 1,
                            explain: "La democracia directa es el ejercicio de elección de un representante popular realizado directamente por los integrantes de la población."
                        },
                        {
                            topic: "Democracia representativa",
                            q: "Según Bobbio, ¿por qué nació la democracia representativa?",
                            options: [
                                "Porque el pueblo no quiere votar",
                                "Porque los representantes elegidos pueden juzgar mejor los intereses generales",
                                "Porque es más barata",
                                "Porque evita conflictos"
                            ],
                            answerIndex: 1,
                            explain: "Bobbio señala que la democracia representativa nació de la convicción de que los representantes elegidos pueden juzgar mejor los intereses generales que los ciudadanos."
                        },
                        {
                            topic: "Autoritarismo",
                            q: "¿Cuándo surge el concepto de autoritarismo según Tatis?",
                            options: [
                                "En la Edad Media",
                                "En el siglo XX, después de la Primera Guerra Mundial",
                                "En la Antigüedad",
                                "En el Renacimiento"
                            ],
                            answerIndex: 1,
                            explain: "La categoría autoritarismo surge en el siglo XX como explicación a ciertos regímenes posteriores a la Primera Guerra Mundial."
                        },
                        {
                            topic: "Autoritarismo",
                            q: "¿Qué caracteriza al autoritarismo?",
                            options: [
                                "Participación ciudadana",
                                "Ejercicio vertical de autoridad sin consenso, con violencia y represión",
                                "División de poderes",
                                "Elecciones libres"
                            ],
                            answerIndex: 1,
                            explain: "El autoritarismo consiste en el ejercicio de la autoridad de manera vertical, jerárquica, sin consenso, usando violencia y represión."
                        },
                        {
                            topic: "Ejemplos autoritarismo",
                            q: "¿Qué ejemplo de autoritarismo se menciona en el texto?",
                            options: [
                                "La democracia ateniense",
                                "El Porfiriato en México",
                                "La Revolución Francesa",
                                "El Imperio Romano"
                            ],
                            answerIndex: 1,
                            explain: "El Porfiriato en México es un ejemplo de régimen autoritario mencionado en el texto."
                        },
                        {
                            topic: "Tipos de gobierno",
                            q: "¿Qué tipo de gobierno es una monarquía constitucional o parlamentaria?",
                            options: [
                                "Donde el monarca tiene poder absoluto",
                                "Donde existe un parlamento elegido por el pueblo que ejerce el poder legislativo",
                                "Donde el gobierno es de los mejores",
                                "Donde hay dictadura"
                            ],
                            answerIndex: 1,
                            explain: "En la monarquía constitucional o parlamentaria, existe un parlamento seleccionado por el pueblo que ejerce el poder legislativo y controla al monarca."
                        }
                    ]
                },
                // ACTIVIDAD 3: Obstáculos de la democracia, violencia de género, cambio social
                act3: {
                    nombre: "Actividad 3: Obstáculos y cambio social",
                    desc: "Corrupción, impunidad, represión, violencia de género, feminicidio, teorías del cambio social",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Corrupción",
                            q: "¿Qué es la corrupción?",
                            options: [
                                "El castigo de delitos",
                                "El soborno o daño al sistema, relacionado con abuso de poder",
                                "La participación ciudadana",
                                "La transparencia gubernamental"
                            ],
                            answerIndex: 1,
                            explain: "La corrupción representa el soborno o daño al sistema, relacionada con el abuso de poder para beneficio propio."
                        },
                        {
                            topic: "Impunidad",
                            q: "¿Qué es la impunidad?",
                            options: [
                                "El castigo ejemplar",
                                "Las malas acciones que no se castigan",
                                "La aplicación de la ley",
                                "La justicia social"
                            ],
                            answerIndex: 1,
                            explain: "La impunidad se refiere a las malas acciones que no se castigan; los delitos quedan sin sanción."
                        },
                        {
                            topic: "Represión social",
                            q: "¿Qué ejemplo de represión social se menciona?",
                            options: [
                                "La Revolución Francesa",
                                "Tlatelolco 1968",
                                "La Independencia de México",
                                "La Reforma"
                            ],
                            answerIndex: 1,
                            explain: "La represión social ilegal se ejemplifica con lo sucedido con los estudiantes de Tlatelolco en 1968."
                        },
                        {
                            topic: "Feminicidio",
                            q: "¿En qué año se reconoció el feminicidio en el marco legal mexicano?",
                            options: [
                                "1990",
                                "2000",
                                "2007",
                                "2010"
                            ],
                            answerIndex: 2,
                            explain: "Fue hasta 2007 que en México se reconoció al feminicidio dentro del marco legal."
                        },
                        {
                            topic: "Violencia de género",
                            q: "¿Cuántas mexicanas han sido violentadas al menos una vez según INEGI?",
                            options: [
                                "10.7 millones",
                                "20.7 millones",
                                "30.7 millones",
                                "40.7 millones"
                            ],
                            answerIndex: 2,
                            explain: "Alrededor de 30.7 millones de mexicanas han sido violentadas por el sexo masculino al menos una vez en su vida."
                        },
                        {
                            topic: "Cambio social",
                            q: "Según el texto, ¿cómo define el positivismo de Comte el cambio social?",
                            options: [
                                "Como lucha de clases",
                                "Como búsqueda de leyes para orden y progreso",
                                "Como evolución social",
                                "Como acción social interpretable"
                            ],
                            answerIndex: 1,
                            explain: "Para Comte, el cambio social implica la búsqueda de leyes que explican la transformación social a partir de dinámica y estática, buscando orden y progreso."
                        },
                        {
                            topic: "Evolucionismo social",
                            q: "¿Qué autor propuso el evolucionismo social?",
                            options: [
                                "Marx",
                                "Durkheim",
                                "Spencer",
                                "Weber"
                            ],
                            answerIndex: 2,
                            explain: "Herbert Spencer propuso el evolucionismo social, donde las sociedades transitan por evolución, involución y disolución."
                        },
                        {
                            topic: "Materialismo histórico",
                            q: "¿Qué es el motor histórico del cambio social según Marx?",
                            options: [
                                "La religión",
                                "La lucha de clases",
                                "La tecnología",
                                "La democracia"
                            ],
                            answerIndex: 1,
                            explain: "Para Marx, el motor histórico del cambio social está determinado por la lucha de clases entre burguesía y proletariado."
                        },
                        {
                            topic: "Funcionalismo",
                            q: "¿Qué ejemplo de cambio social analiza Durkheim desde el funcionalismo?",
                            options: [
                                "La Revolución Industrial",
                                "El modelo educativo durante el Porfiriato",
                                "La Comuna de París",
                                "La Primavera de Praga"
                            ],
                            answerIndex: 1,
                            explain: "Durkheim analiza el modelo educativo durante el Porfiriato como hecho social, donde la escuela cumplía funciones de modernización."
                        },
                        {
                            topic: "Teoría crítica",
                            q: "¿Qué autor de la Teoría Crítica se relaciona con el movimiento estudiantil de 1968?",
                            options: [
                                "Adorno",
                                "Horkheimer",
                                "Marcuse",
                                "Fromm"
                            ],
                            answerIndex: 2,
                            explain: "Herbert Marcuse se convirtió en ideólogo del mayo de 1968 en Francia y símbolo para la juventud de los años 60."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: LAS POTENCIAS COLECTIVAS Y LA CONSTRUCCIÓN SOCIAL ==========
        modulo2: {
            nombre: "Módulo 2: Las potencias colectivas y la construcción social",
            actividades: {
                // ACTIVIDAD 1: Sociedad, individuo, instituciones
                act1: {
                    nombre: "Actividad 1: Sociedad e instituciones",
                    desc: "Teorías sociológicas, individuo, rol social, familia, instituciones políticas, económicas, educativas",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Sociedad",
                            q: "Según Giddens, ¿qué es la sociedad?",
                            options: [
                                "Un conjunto de individuos aislados",
                                "Un sistema de interrelaciones que vincula a los individuos",
                                "Una estructura económica",
                                "Un territorio con fronteras"
                            ],
                            answerIndex: 1,
                            explain: "Para Antony Giddens, una sociedad se define como un sistema de interrelaciones que vincula a los individuos."
                        },
                        {
                            topic: "Perspectivas sociológicas",
                            q: "¿Qué nivel de análisis tiene la perspectiva funcionalista?",
                            options: [
                                "Micro",
                                "Macro",
                                "Meso",
                                "Individual"
                            ],
                            answerIndex: 1,
                            explain: "La perspectiva funcionalista tiene un nivel de análisis macro, observando a la sociedad como estructura que busca estabilidad."
                        },
                        {
                            topic: "Individuo",
                            q: "¿Qué significa etimológicamente 'individuo'?",
                            options: [
                                "Que se puede dividir",
                                "Que no se puede dividir o unidad independiente",
                                "Que pertenece a un grupo",
                                "Que está aislado"
                            ],
                            answerIndex: 1,
                            explain: "Individuo proviene del latín 'individuus' que significa que no se puede dividir o unidad independiente."
                        },
                        {
                            topic: "Rol social",
                            q: "Según Parsons, ¿qué es el rol social?",
                            options: [
                                "La posición social",
                                "Una expectativa de conducta preescrita según el estatus",
                                "Un grupo social",
                                "Una institución"
                            ],
                            answerIndex: 1,
                            explain: "El rol es una expectativa de conducta que puede predecirse por estar socialmente preescrita y corresponde a cada estatus."
                        },
                        {
                            topic: "Familia",
                            q: "¿Qué tipos de familia reconoce la CNDH?",
                            options: [
                                "Solo nuclear biparental",
                                "Nuclear, ampliada, compuesta, ensamblada, homoparental, etc.",
                                "Solo tradicional",
                                "Monoparental únicamente"
                            ],
                            answerIndex: 1,
                            explain: "La CNDH reconoce múltiples tipos: nuclear, ampliada, compuesta, ensamblada, homoparental, heteroparental, de acogida, etc."
                        },
                        {
                            topic: "Instituciones",
                            q: "Según Douglas North, ¿qué son las instituciones?",
                            options: [
                                "Edificios gubernamentales",
                                "Restricciones humanas para estructurar intercambios",
                                "Grupos sociales",
                                "Organizaciones privadas"
                            ],
                            answerIndex: 1,
                            explain: "Las instituciones son las restricciones ideadas por los humanos que permiten estructurar los intercambios económicos, sociales y políticos."
                        },
                        {
                            topic: "Instituciones políticas",
                            q: "¿Cuáles son los tres poderes del Estado en México?",
                            options: [
                                "Federal, estatal y municipal",
                                "Ejecutivo, legislativo y judicial",
                                "Público, privado y social",
                                "Central, regional y local"
                            ],
                            answerIndex: 1,
                            explain: "En México, el sistema gubernamental está dividido en tres poderes: Ejecutivo, Legislativo y Judicial."
                        },
                        {
                            topic: "INE",
                            q: "¿Qué función tiene el Instituto Nacional Electoral (INE)?",
                            options: [
                                "Recabar información estadística",
                                "Emitir credenciales para votar y organizar elecciones",
                                "Administrar impuestos",
                                "Regular la economía"
                            ],
                            answerIndex: 1,
                            explain: "El INE se encarga de la emisión de credenciales para votar y de las elecciones federales y estatales."
                        },
                        {
                            topic: "Instituciones educativas",
                            q: "¿Cuándo obtuvo su autonomía la UNAM?",
                            options: [
                                "1551",
                                "1910",
                                "1929",
                                "1945"
                            ],
                            answerIndex: 2,
                            explain: "La UNAM fue creada en 1551, pero fue hasta 1929 cuando decretó su autonomía y obtuvo su nombre actual."
                        },
                        {
                            topic: "INAH",
                            q: "¿Cuál es la función del INAH?",
                            options: [
                                "Difundir las artes",
                                "Preservar e investigar el patrimonio histórico y arqueológico",
                                "Editar libros",
                                "Regular la educación"
                            ],
                            answerIndex: 1,
                            explain: "El INAH es el instituto encargado de preservar e investigar la herencia y propiedad histórica y arqueológica de México."
                        }
                    ]
                },
                // ACTIVIDAD 2: Democracia, autoritarismo, enajenación, religión, Lutero
                act2: {
                    nombre: "Actividad 2: Democracia, enajenación y religión",
                    desc: "Tipos de democracia, autoritarismo, enajenación, religión, Martín Lutero",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Democracia",
                            q: "Según la RAE, ¿qué es la democracia?",
                            options: [
                                "Gobierno de uno solo",
                                "Forma de gobierno donde el poder político es ejercido por los ciudadanos",
                                "Régimen autoritario",
                                "Sistema teocrático"
                            ],
                            answerIndex: 1,
                            explain: "La democracia es una forma de gobierno en la que el poder político es ejercido por los ciudadanos."
                        },
                        {
                            topic: "Democracia participativa",
                            q: "¿Qué mecanismos caracterizan a la democracia participativa?",
                            options: [
                                "Elecciones cada 6 años",
                                "Plebiscitos y referéndums",
                                "Designación directa",
                                "Monarquía constitucional"
                            ],
                            answerIndex: 1,
                            explain: "La democracia participativa permite a la ciudadanía influir mediante plebiscitos (consultas a iniciativas) y referéndums (consulta legislativa)."
                        },
                        {
                            topic: "Enajenación",
                            q: "¿Qué es la enajenación según Marx?",
                            options: [
                                "La felicidad del trabajador",
                                "La desvinculación del trabajador respecto a su producto en el capitalismo",
                                "La conciencia de clase",
                                "La plusvalía"
                            ],
                            answerIndex: 1,
                            explain: "La enajenación es la desvinculación del trabajador respecto a su producto; el valor añadido pasa al capitalista, no retorna al trabajador."
                        },
                        {
                            topic: "Enajenación",
                            q: "¿Qué ejemplo de enajenación se menciona en el texto?",
                            options: [
                                "Obreros industriales",
                                "Campesinos mexicanos (precariedad, explotación, despojo)",
                                "Empleados de oficina",
                                "Comerciantes"
                            ],
                            answerIndex: 1,
                            explain: "Los trabajadores del campo mexicano trabajan en situaciones precarias, expuestos a violencia, explotación y despojo, rompiendo su relación con la tierra."
                        },
                        {
                            topic: "Religión",
                            q: "Para Durkheim, ¿qué función cumple la religión?",
                            options: [
                                "Control social",
                                "Integración y cohesión social",
                                "Opio del pueblo",
                                "Ética protestante"
                            ],
                            answerIndex: 1,
                            explain: "Durkheim enfoca la religión como mecanismo de integración y cohesión social, y la define como sistema unificado de creencias sobre cosas sagradas."
                        },
                        {
                            topic: "Religión",
                            q: "¿Qué significa que para Marx la religión sea 'el opio del pueblo'?",
                            options: [
                                "Que cura enfermedades",
                                "Que mantiene alienado y dominado al pueblo, mecanismo de control social",
                                "Que es una droga",
                                "Que da felicidad"
                            ],
                            answerIndex: 1,
                            explain: "Para Marx, la religión es el opio del pueblo porque lo mantiene alienado y dominado, siendo un mecanismo de control social."
                        },
                        {
                            topic: "Religión",
                            q: "¿Qué relación encontró Weber entre religión y economía?",
                            options: [
                                "La religión no influye en la economía",
                                "La ética protestante y el capitalismo",
                                "El catolicismo y el feudalismo",
                                "El islam y el comercio"
                            ],
                            answerIndex: 1,
                            explain: "Weber vio la conexión entre la fe religiosa y el comportamiento económico capitalista, denominándola ética protestante."
                        },
                        {
                            topic: "Martín Lutero",
                            q: "¿Qué criticaba Martín Lutero de la Iglesia católica?",
                            options: [
                                "La pobreza",
                                "Las indulgencias (pago por perdón)",
                                "La misa",
                                "Los sacerdotes"
                            ],
                            answerIndex: 1,
                            explain: "Lutero se oponía a las indulgencias, que eran otorgadas por la iglesia a cambio de oro o plata para perdonar pecados."
                        },
                        {
                            topic: "Reforma protestante",
                            q: "¿Qué negaba Lutero en la Reforma protestante?",
                            options: [
                                "La existencia de Dios",
                                "Que la Iglesia y el clero sirvieran de mediadores entre el hombre y Dios",
                                "La Biblia",
                                "La fe"
                            ],
                            answerIndex: 1,
                            explain: "Lutero negaba que la Iglesia y el clero sirvieran de mediadores entre el hombre y Dios; la salvación depende de la sinceridad de la fe."
                        },
                        {
                            topic: "Valores de la democracia",
                            q: "¿Qué valores promueve la democracia según la ONU?",
                            options: [
                                "Autoridad y obediencia",
                                "Libertad, igualdad, respeto, diálogo y tolerancia",
                                "Riqueza y poder",
                                "Tradición y costumbre"
                            ],
                            answerIndex: 1,
                            explain: "La democracia se basa en valores como libertad, igualdad, respeto, diálogo y tolerancia, promoviendo la convivencia social."
                        }
                    ]
                },
                // ACTIVIDAD 3: Discriminación, derechos humanos, movimientos sociales
                act3: {
                    nombre: "Actividad 3: Discriminación y movimientos sociales",
                    desc: "Discriminación, anomia, derechos humanos, movimientos sociales del siglo XX y XXI",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Discriminación",
                            q: "¿Qué significa etimológicamente 'discriminación'?",
                            options: [
                                "Unión",
                                "Separación o distinción",
                                "Igualdad",
                                "Integración"
                            ],
                            answerIndex: 1,
                            explain: "Discriminación proviene del latín 'discriminatio', que equivale a separación o distinción, luego incorporó el significado de exclusión."
                        },
                        {
                            topic: "Anomia",
                            q: "Según Durkheim, ¿qué es la anomia?",
                            options: [
                                "La integración social",
                                "El debilitamiento de la moral común",
                                "La solidaridad orgánica",
                                "La división del trabajo"
                            ],
                            answerIndex: 1,
                            explain: "La anomia es el debilitamiento de un tipo de moral común, cuando la moral no constriñe lo suficiente al individuo."
                        },
                        {
                            topic: "Ejemplos de anomia",
                            q: "¿Qué caso se menciona como ejemplo de anomia?",
                            options: [
                                "La Revolución Mexicana",
                                "Los feminicidios en Ciudad Juárez",
                                "La Independencia",
                                "El Porfiriato"
                            ],
                            answerIndex: 1,
                            explain: "Los feminicidios en Ciudad Juárez (Las muertas de Juárez) son un ejemplo de anomia y violencia motivada por sexismo."
                        },
                        {
                            topic: "Derechos Humanos",
                            q: "¿Cuándo se adoptó la Declaración Universal de los Derechos Humanos?",
                            options: [
                                "10 de diciembre de 1945",
                                "10 de diciembre de 1948",
                                "10 de diciembre de 1950",
                                "10 de diciembre de 1960"
                            ],
                            answerIndex: 1,
                            explain: "La Declaración Universal de los Derechos Humanos fue adoptada por la Tercera Asamblea General de la ONU el 10 de diciembre de 1948 en París."
                        },
                        {
                            topic: "Violencia infantil",
                            q: "Según UNICEF, ¿qué porcentaje de niños en México ha sufrido algún tipo de violencia?",
                            options: [
                                "43%",
                                "53%",
                                "63%",
                                "73%"
                            ],
                            answerIndex: 2,
                            explain: "La Encuesta Nacional de Niños, Niñas y Mujeres (ENIM) arrojó que un 63% de niños entre 1 y 14 años ha sufrido algún tipo de violencia."
                        },
                        {
                            topic: "Movimientos sociales",
                            q: "¿Qué acontecimiento de 1968 en Francia se menciona?",
                            options: [
                                "La Primavera de Praga",
                                "Mayo de 1968 (Sartré, estudiantes y obreros)",
                                "La guerra de Vietnam",
                                "La matanza de Tlatelolco"
                            ],
                            answerIndex: 1,
                            explain: "En mayo de 1968 en Francia, estudiantes y obreros se manifestaron contra el gobierno conservador de Charles de Gaulle."
                        },
                        {
                            topic: "Tlatelolco",
                            q: "¿Qué ocurrió el 2 de octubre de 1968 en México?",
                            options: [
                                "La inauguración de los Juegos Olímpicos",
                                "La matanza de estudiantes en Tlatelolco",
                                "La Revolución Mexicana",
                                "El movimiento zapatista"
                            ],
                            answerIndex: 1,
                            explain: "El 2 de octubre de 1968, la represión gubernamental contra estudiantes culminó en la matanza de Tlatelolco."
                        },
                        {
                            topic: "Movimientos feministas",
                            q: "¿Qué movimiento feminista de 2019 se menciona?",
                            options: [
                                "Ni una menos",
                                "Manifestaciones de agosto 2019 en CDMX, con glitter rosa y pintas en el Ángel",
                                "Me Too",
                                "Marea Verde"
                            ],
                            answerIndex: 1,
                            explain: "Las manifestaciones feministas de agosto 2019 incluyeron glitter rosa a Jesús Orta, pintas en el Ángel de la Independencia y el movimiento #MeToo."
                        },
                        {
                            topic: "Las Rastreadoras",
                            q: "¿Quién fundó Las Rastreadoras del Fuerte?",
                            options: [
                                "Homero Gómez",
                                "Mirna Nereyda Medina Quiñonez",
                                "Jesús Orta",
                                "Alexander Dubček"
                            ],
                            answerIndex: 1,
                            explain: "Las Rastreadoras del Fuerte fueron fundadas en Sinaloa en 2015 por Mirna Nereyda Medina Quiñonez, madre buscadora."
                        },
                        {
                            topic: "Homero Gómez",
                            q: "¿Por qué fue asesinado Homero Gómez?",
                            options: [
                                "Por problemas personales",
                                "Por su defensa del santuario de la mariposa monarca, afectando intereses de taladores ilegales",
                                "Por su actividad política",
                                "Por robo"
                            ],
                            answerIndex: 1,
                            explain: "Homero Gómez, defensor del santuario de la mariposa monarca, fue asesinado en 2020, presuntamente por afectar intereses de taladores ilegales."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: INCIDIR EN LA EXPERIENCIA DE LA COLECTIVIDAD ==========
        modulo3: {
            nombre: "Módulo 3: Incidir en la experiencia de la colectividad",
            actividades: {
                // ACTIVIDAD 1: Reproducción social e imaginario social
                act1: {
                    nombre: "Actividad 1: Reproducción social e imaginario",
                    desc: "Reproducción social, imaginario social, Castoriadis",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Reproducción social",
                            q: "¿Qué es la reproducción social?",
                            options: [
                                "La creación de nuevas instituciones",
                                "La continuidad de ideologías, estructuras y clases sociales",
                                "El cambio social radical",
                                "La revolución"
                            ],
                            answerIndex: 1,
                            explain: "La reproducción social explora la continuidad de ideologías, estructuras y clases sociales, es decir, del orden establecido."
                        },
                        {
                            topic: "Reproducción social",
                            q: "¿Qué ejemplo de reproducción social se menciona?",
                            options: [
                                "La Revolución Industrial",
                                "La educación: clases altas acceden a mejor educación, perpetuando desigualdades",
                                "La democracia",
                                "Los movimientos sociales"
                            ],
                            answerIndex: 1,
                            explain: "La educación favorece la reproducción cultural y social: clases altas tienen acceso a mejor educación, perpetuando ventajas."
                        },
                        {
                            topic: "Imaginario social",
                            q: "¿Quién es el principal teórico del imaginario social?",
                            options: [
                                "Berger",
                                "Luckmann",
                                "Castoriadis",
                                "Durkheim"
                            ],
                            answerIndex: 2,
                            explain: "Cornelius Castoriadis es uno de los principales teóricos del concepto de imaginario social."
                        },
                        {
                            topic: "Imaginario social",
                            q: "¿Qué son los imaginarios sociales según Castoriadis?",
                            options: [
                                "Fantasías individuales",
                                "Esquemas, marcos, matrices de sentido que permiten crear y resignificar conocimiento",
                                "Ideas sin importancia",
                                "Estructuras económicas"
                            ],
                            answerIndex: 1,
                            explain: "Los imaginarios sociales son esquemas, marcos, matrices de sentido que permiten a los sujetos crear, construir/deconstruir y resignificar conocimiento."
                        },
                        {
                            topic: "Imaginario social",
                            q: "¿Qué ejemplo de imaginario dominante se menciona?",
                            options: [
                                "La democracia",
                                "La felicidad a través del dinero",
                                "La libertad",
                                "La igualdad"
                            ],
                            answerIndex: 1,
                            explain: "Un imaginario dominante actual es la consecución de la felicidad a través del dinero, potenciado por medios y publicidad."
                        },
                        {
                            topic: "Reproducción social",
                            q: "¿Qué aspecto de la sociedad busca perpetuarse según la reproducción social?",
                            options: [
                                "El cambio",
                                "Las instituciones, valores, tradiciones, normas y estructuras",
                                "La innovación",
                                "La revolución"
                            ],
                            answerIndex: 1,
                            explain: "La reproducción social estudia cómo las instituciones, valores, tradiciones, normas y estructuras logran mantenerse y perdurar."
                        },
                        {
                            topic: "Imaginario social",
                            q: "¿Qué requieren los imaginarios sociales según el texto?",
                            options: [
                                "Ser individuales",
                                "Reconocimiento colectivo",
                                "Ser económicos",
                                "Ser políticos"
                            ],
                            answerIndex: 1,
                            explain: "Los imaginarios sociales necesitan reconocimiento colectivo, no son la sumatoria de imaginarios individuales."
                        },
                        {
                            topic: "Reproducción social",
                            q: "¿Qué autores se relacionan con la construcción social de la realidad?",
                            options: [
                                "Marx y Engels",
                                "Berger y Luckmann",
                                "Adorno y Horkheimer",
                                "Spencer y Comte"
                            ],
                            answerIndex: 1,
                            explain: "Berger y Luckmann son los autores de 'La construcción social de la realidad', obra clave sobre este concepto."
                        },
                        {
                            topic: "Imaginario social",
                            q: "¿Qué papel tienen los medios en el imaginario de la felicidad por dinero?",
                            options: [
                                "Lo combaten",
                                "Lo potencian",
                                "Lo ignoran",
                                "Lo regulan"
                            ],
                            answerIndex: 1,
                            explain: "Los medios de comunicación, la publicidad y las redes sociales potencian el imaginario de la felicidad a través del dinero."
                        },
                        {
                            topic: "Reproducción social",
                            q: "¿Qué tipo de desigualdad se perpetúa mediante la educación?",
                            options: [
                                "Desigualdad económica",
                                "Desigualdad cultural y social",
                                "Desigualdad política",
                                "Desigualdad regional"
                            ],
                            answerIndex: 1,
                            explain: "La educación favorece la reproducción cultural y social, perpetuando desigualdades entre clases sociales."
                        }
                    ]
                },
                // ACTIVIDAD 2: Antropocentrismo, biocentrismo, ecología de medios, ética ambiental
                act2: {
                    nombre: "Actividad 2: Ética ambiental",
                    desc: "Antropocentrismo, biocentrismo, ecocentrismo, ecología de medios, ética ambiental, desarrollo sustentable",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Antropocentrismo",
                            q: "¿Qué sostiene el antropocentrismo?",
                            options: [
                                "Que los animales tienen derechos",
                                "Que solo los intereses humanos merecen atención moral",
                                "Que la naturaleza es sagrada",
                                "Que todos los seres tienen igual valor"
                            ],
                            answerIndex: 1,
                            explain: "El antropocentrismo sostiene que solo los intereses humanos merecen atención moral y están por encima de cualquier otra cosa."
                        },
                        {
                            topic: "Descartes",
                            q: "¿Cómo veía Descartes a los animales?",
                            options: [
                                "Como seres con alma",
                                "Como autómatas, sin razón",
                                "Como iguales al hombre",
                                "Como divinos"
                            ],
                            answerIndex: 1,
                            explain: "Para Descartes, los animales se asemejan a autómatas que no actúan por ingenio, sino que la naturaleza obra en ellos."
                        },
                        {
                            topic: "Biocentrismo absoluto",
                            q: "¿Qué defiende el biocentrismo absoluto?",
                            options: [
                                "Que solo los humanos tienen valor",
                                "Que la vida de todo ser posee el mismo valor",
                                "Que las plantas no tienen valor",
                                "Que los animales valen más que las plantas"
                            ],
                            answerIndex: 1,
                            explain: "El biocentrismo absoluto defiende que la vida de todo ser posee el mismo valor, sin importar racionalidad o capacidad de sentir."
                        },
                        {
                            topic: "Ecocentrismo",
                            q: "¿Qué defiende el ecocentrismo?",
                            options: [
                                "Solo los animales",
                                "El conjunto del planeta, animales y ecosistema",
                                "Solo las plantas",
                                "Solo los humanos"
                            ],
                            answerIndex: 1,
                            explain: "El ecocentrismo es una perspectiva global que defiende el conjunto del planeta, incluyendo animales y su ecosistema."
                        },
                        {
                            topic: "Ecología de medios",
                            q: "¿Quiénes desarrollaron la ecología de medios?",
                            options: [
                                "Marx y Engels",
                                "McLuhan y Postman",
                                "Durkheim y Weber",
                                "Berger y Luckmann"
                            ],
                            answerIndex: 1,
                            explain: "La ecología de medios fue planteada por Marshall McLuhan y desarrollada por Neil Postman."
                        },
                        {
                            topic: "Ecología de medios",
                            q: "¿Qué estudia la ecología de medios?",
                            options: [
                                "El impacto ambiental de los medios",
                                "Cómo los medios afectan percepción, sentimientos y valores humanos",
                                "La contaminación electrónica",
                                "El reciclaje de dispositivos"
                            ],
                            answerIndex: 1,
                            explain: "Estudia cómo los medios de comunicación afectan la percepción humana, la comprensión, los sentimientos y valores."
                        },
                        {
                            topic: "Ética ambiental",
                            q: "¿Qué problemas aborda la ética ambiental?",
                            options: [
                                "Solo la contaminación",
                                "Contaminación, pérdida de biodiversidad, cambio climático, etc.",
                                "Solo el cambio climático",
                                "Solo la deforestación"
                            ],
                            answerIndex: 1,
                            explain: "La ética ambiental se preocupa por problemas como contaminación, pérdida de biodiversidad, cambio climático, entre otros."
                        },
                        {
                            topic: "Desarrollo sustentable",
                            q: "¿Dónde se definió el desarrollo sustentable?",
                            options: [
                                "En la Conferencia de Río",
                                "En la Comisión Brundtland (Nuestro Futuro Común, 1987)",
                                "En el Protocolo de Kioto",
                                "En el Acuerdo de París"
                            ],
                            answerIndex: 1,
                            explain: "El desarrollo sustentable fue definido en la Comisión Brundtland 'Nuestro Futuro Común' (WCED, 1987)."
                        },
                        {
                            topic: "Críticas al desarrollo sustentable",
                            q: "Según Leff, ¿qué crítica merece el desarrollo sustentable?",
                            options: [
                                "Es demasiado radical",
                                "Es un concepto ambiguo, usado como eslogan, no resuelve crisis civilizatoria",
                                "Es perfecto",
                                "Es anticapitalista"
                            ],
                            answerIndex: 1,
                            explain: "Leff critica que el desarrollo sustentable es un concepto polisémico y ambiguo, usado como eslogan político y corporativo."
                        },
                        {
                            topic: "Sustentabilidad",
                            q: "¿Qué propone Leff para la sustentabilidad?",
                            options: [
                                "Más desarrollo económico",
                                "Repensar relación ser humano-naturaleza desde imaginarios sociales",
                                "Más tecnología",
                                "Crecimiento poblacional"
                            ],
                            answerIndex: 1,
                            explain: "Leff propone repensar la sustentabilidad desde los imaginarios sociales, para una nueva relación entre ser humano y naturaleza."
                        }
                    ]
                },
                // ACTIVIDAD 3: Cambio social, revolución, reforma, utopía, argumentos y falacias
                act3: {
                    nombre: "Actividad 3: Cambio social, utopía y argumentación",
                    desc: "Tipos de cambio social, revolución vs reforma, utopía, argumentos, silogismos, falacias",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Cambio social",
                            q: "¿Qué es el cambio social?",
                            options: [
                                "Un proceso estático",
                                "Un proceso de constante transformación en todas las sociedades",
                                "Solo las revoluciones",
                                "Los cambios económicos"
                            ],
                            answerIndex: 1,
                            explain: "El cambio social es un proceso de constante transformación que ocurre en todas las sociedades."
                        },
                        {
                            topic: "Cambio estructural",
                            q: "¿Qué tipo de cambio social es una modificación brusca y profunda del sistema?",
                            options: [
                                "Coyuntural",
                                "Estructural",
                                "Funcional",
                                "No funcional"
                            ],
                            answerIndex: 1,
                            explain: "El cambio estructural es una modificación brusca y profunda al interior del sistema o las estructuras, como un cambio de régimen."
                        },
                        {
                            topic: "Revolución",
                            q: "¿Qué caracteriza a una revolución según Arendt?",
                            options: [
                                "Cambios paulatinos",
                                "Transformación radical, uso de violencia, derrocamiento del poder",
                                "Negociación política",
                                "Reformas institucionales"
                            ],
                            answerIndex: 1,
                            explain: "La revolución implica transformación radical del orden social, uso de violencia y derrocamiento del poder oficial del Estado."
                        },
                        {
                            topic: "Reforma",
                            q: "¿Qué es una reforma?",
                            options: [
                                "Un cambio violento",
                                "Un proceso de cambios paulatinos y moderados",
                                "Una revolución",
                                "Una dictadura"
                            ],
                            answerIndex: 1,
                            explain: "La reforma es un proceso de cambios sociales, políticos y económicos de forma paulatina o progresiva."
                        },
                        {
                            topic: "Utopía",
                            q: "¿Qué es una utopía?",
                            options: [
                                "Una sociedad perfecta y real",
                                "La representación de una sociedad ideal y sin fallos",
                                "Un gobierno autoritario",
                                "Una revolución"
                            ],
                            answerIndex: 1,
                            explain: "La utopía es la representación de una idea o sociedad en su forma perfecta, ideal y sin fallos."
                        },
                        {
                            topic: "Utopía",
                            q: "¿Qué dijo Fernando Birri sobre la utopía?",
                            options: [
                                "Que es inútil",
                                "Que sirve para caminar, está en el horizonte",
                                "Que es alcanzable",
                                "Que es peligrosa"
                            ],
                            answerIndex: 1,
                            explain: "Birri dijo: la utopía está en el horizonte, nunca la voy a alcanzar, pero sirve para caminar."
                        },
                        {
                            topic: "Argumento",
                            q: "¿Cuáles son las partes de un argumento?",
                            options: [
                                "Sujeto y predicado",
                                "Premisas y conclusión",
                                "Tesis y antítesis",
                                "Introducción y desarrollo"
                            ],
                            answerIndex: 1,
                            explain: "Un argumento es una estructura conformada por premisas (apoyo) y conclusión (proposición sustentada)."
                        },
                        {
                            topic: "Silogismo",
                            q: "¿Qué es un silogismo?",
                            options: [
                                "Una falacia",
                                "Una forma de razonamiento deductivo",
                                "Un tipo de premisa",
                                "Una conclusión"
                            ],
                            answerIndex: 1,
                            explain: "El silogismo es una forma de razonamiento deductivo en el cual, a partir de premisas generales, se llega a una conclusión particular."
                        },
                        {
                            topic: "Falacia",
                            q: "¿Qué es una falacia?",
                            options: [
                                "Un argumento válido",
                                "Un razonamiento no válido que parece correcto",
                                "Una premisa verdadera",
                                "Una conclusión falsa"
                            ],
                            answerIndex: 1,
                            explain: "Una falacia es un razonamiento no válido o incorrecto que da apariencia de ser correcto sin serlo."
                        },
                        {
                            topic: "Ad Hominem",
                            q: "¿Qué tipo de falacia ataca a la persona que argumenta?",
                            options: [
                                "Ad Baculum",
                                "Ad Hominem",
                                "Ad Verecundiam",
                                "Ad Populum"
                            ],
                            answerIndex: 1,
                            explain: "La falacia Ad Hominem consiste en atacar, descalificar o desacreditar al individuo que defiende una posición."
                        }
                    ]
                }
            }
        }
    }
};

export default humanidades2;