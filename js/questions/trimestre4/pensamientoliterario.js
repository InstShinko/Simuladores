// ============================================
// PENSAMIENTO LITERARIO: GÉNERO NARRATIVO Y SUBGÉNEROS LITERARIOS
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const pensamientoLiterario = {
    id: "pensamientoLiterario",
    nombre: "PENSAMIENTO LITERARIO: GÉNERO NARRATIVO Y SUBGÉNEROS LITERARIOS",
    icono: "📖",
    descripcion: "Estudio del pensamiento literario, género narrativo, cuento, novela, crónica, fábula, leyenda, mito, epopeya, tipos de narradores, personajes, análisis de textos literarios, cualidades de la redacción y lenguaje literario.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: Introducción al Pensamiento Literario",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Pensamiento Literario y Género Narrativo",
                    desc: "Comprensión del pensamiento literario, género narrativo, cuento y sus características.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Pensamiento literario",
                            q: "Según Valenzuela (2023), ¿cuáles son las características del pensamiento literario?",
                            options: ["La memorización de fechas literarias", "La funcionalidad práctica del lenguaje que edifica normas y leyes, pensamiento y ciencia", "La descripción de paisajes", "La creación de personajes históricos"],
                            answerIndex: 1,
                            explain: "Valenzuela señala que las características del pensamiento literario son la funcionalidad práctica del lenguaje que edifica normas y leyes, pensamiento y ciencia."
                        },
                        {
                            topic: "Poder del pensamiento literario",
                            q: "Según el texto, ¿dónde se localiza el poder de la literatura?",
                            options: ["En la cantidad de páginas", "En la capacidad de influencia a partir de las contradicciones, matices y tensiones", "En la rima de los versos", "En el uso de palabras difíciles"],
                            answerIndex: 1,
                            explain: "El poder de la literatura se localiza en la capacidad de influencia a partir de lo que muestran las contradicciones, los matices y las tensiones de una forma que ninguna otra escritura puede lograr."
                        },
                        {
                            topic: "Género narrativo",
                            q: "Según Jorge Volpi, ¿a qué arte se refiere cuando habla de ayudar a sobrevivir?",
                            options: ["A la poesía", "Al arte de la ficción", "Al teatro", "A la pintura"],
                            answerIndex: 1,
                            explain: "El escritor mexicano Jorge Volpi señala que 'el arte no puede sino perseguir una meta […] ayudarnos a sobrevivir', refiriéndose específicamente al arte de la ficción."
                        },
                        {
                            topic: "Cantares de gesta",
                            q: "¿Cómo se llamaban las historias de héroes caballeros en la Edad Media?",
                            options: ["Epopezas", "Cantares de gesta", "Romances", "Novelas caballerescas"],
                            answerIndex: 1,
                            explain: "Las historias de los héroes caballeros se llamaron cantares de gesta, como el Cantar del Mío Cid o el Cantar de Roldán."
                        },
                        {
                            topic: "Don Quijote",
                            q: "¿En qué año apareció la primera parte de Don Quijote de Miguel de Cervantes Saavedra?",
                            options: ["1492", "1605", "1615", "1700"],
                            answerIndex: 1,
                            explain: "La primera parte de Don Quijote apareció en 1605 y la segunda parte en 1615."
                        },
                        {
                            topic: "Primera novela latinoamericana",
                            q: "¿Cuál fue la primera novela de Latinoamérica y quién la escribió?",
                            options: ["Doña Bárbara de Rómulo Gallegos", "El periquillo sarniento de José Joaquín Fernández de Lizardi", "Cien años de soledad de Gabriel García Márquez", "María de Jorge Isaacs"],
                            answerIndex: 1,
                            explain: "La primera novela de Latinoamérica fue El periquillo sarniento (1816), escrita por José Joaquín Fernández de Lizardi."
                        },
                        {
                            topic: "Cuento vs novela",
                            q: "Según Cortázar, ¿cómo es el combate entre un texto y su lector en el cuento vs la novela?",
                            options: ["El cuento gana por puntos y la novela por knockout", "La novela gana por puntos y el cuento por knockout", "Ambos ganan por puntos", "Ambos ganan por knockout"],
                            answerIndex: 1,
                            explain: "Cortázar afirma que 'la novela gana siempre por puntos, mientras que el cuento debe ganar por knock-out'."
                        },
                        {
                            topic: "Diferencias cuento - novela",
                            q: "¿Cuál es una diferencia básica entre cuento y novela?",
                            options: ["El cuento es más extenso", "El cuento tiene una sola historia con una trama central; la novela puede tener más de una historia", "El cuento tiene muchos personajes", "El cuento se escribe en verso"],
                            answerIndex: 1,
                            explain: "El cuento tiene solo una historia con una trama central y pocos personajes; la novela puede tener más de una historia, más de un conflicto y más personajes."
                        },
                        {
                            topic: "Origen del cuento",
                            q: "¿Dónde ubica Helena Beristáin el origen del cuento?",
                            options: ["En la novela", "En la epopeya", "En el subconsciente y en los mitos", "En el teatro"],
                            answerIndex: 2,
                            explain: "Beristáin afirma que el 'origen del cuento es muy antiguo, responde a la necesidad del hombre de conocerse a sí mismo y tiene su raíz en el subconsciente y en los mitos'."
                        },
                        {
                            topic: "Padre del cuento moderno",
                            q: "¿Quién es reconocido como el padre del cuento moderno?",
                            options: ["Antón Chéjov", "Edgar Allan Poe", "Los hermanos Grimm", "Charles Perrault"],
                            answerIndex: 1,
                            explain: "Se reconoce a Edgar Allan Poe como el autor que encumbra al cuento al estatus de subgénero mayor que ostenta hoy, siendo el padre del cuento moderno."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Novela, Crónica y Fábula",
                    desc: "Identificación de la novela, sus características (dialogismo, polifonía), la crónica y la fábula.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Novela moderna",
                            q: "¿En qué movimiento literario comenzó la novela moderna?",
                            options: ["En el Barroco", "En el Renacimiento con Don Quijote de la Mancha", "En el Romanticismo", "En el Realismo"],
                            answerIndex: 1,
                            explain: "Aunque su auge inicia en el siglo XIX, la novela moderna comenzó en el Renacimiento con Don Quijote de la Mancha."
                        },
                        {
                            topic: "Dialogismo",
                            q: "¿Qué concepto de Mijail Bajtin se refiere a la plurivocidad donde ya no hay sólo un narrador, sino varios?",
                            options: ["Polifonía", "Dialogismo", "Monologismo", "Intertextualidad"],
                            answerIndex: 1,
                            explain: "El dialogismo se refiere a la apertura de la univocidad monológica hacia una impresionante plurivocidad dialógica donde ya no hay sólo un narrador, sino varios."
                        },
                        {
                            topic: "Polifonía",
                            q: "¿Qué es la polifonía en literatura según Mijail Bajtin?",
                            options: ["Un solo narrador", "La convivencia de multiplicidad de voces donde los personajes expresan su forma de concebir la realidad", "La ausencia de diálogos", "El uso exclusivo de monólogos"],
                            answerIndex: 1,
                            explain: "La polifonía es la convivencia (el diálogo) de la multiplicidad de voces que se presenta en la novela."
                        },
                        {
                            topic: "Crónica",
                            q: "¿Cuál es el propósito de la crónica según el texto?",
                            options: ["Convencer al lector", "Conmover con lo que se relata", "Informar objetivamente", "Criticar a la sociedad"],
                            answerIndex: 1,
                            explain: "El propósito de la crónica no es el de convencer, sino el de conmover con lo que se relata."
                        },
                        {
                            topic: "Fábula",
                            q: "¿Qué enseñanza brinda la fábula al final de la historia?",
                            options: ["Un resumen", "Una moraleja", "Una crítica", "Una reflexión"],
                            answerIndex: 1,
                            explain: "La intención de la fábula es brindar una enseñanza, a la que se llama moraleja."
                        },
                        {
                            topic: "Prosopopeya",
                            q: "¿Cómo se llama el efecto literario en el que animales u objetos inanimados se animan en la fábula?",
                            options: ["Metáfora", "Prosopopeya o personificación", "Símil", "Hipérbole"],
                            answerIndex: 1,
                            explain: "La prosopopeya o personificación es un efecto en el que animales u objetos inanimados se animan para actuar como protagonistas en la fábula."
                        },
                        {
                            topic: "Esopo",
                            q: "¿Quién es uno de los mayores representantes de la fábula, que vivió alrededor del siglo VI a.C.?",
                            options: ["Fedro", "Esopo", "Jean de La Fontaine", "Félix María Samaniego"],
                            answerIndex: 1,
                            explain: "Esopo, quien vivió alrededor del siglo VI a.C., es uno de los mayores representantes de la fábula."
                        },
                        {
                            topic: "Función de la novela",
                            q: "Según Bourneuf y Ouellet, ¿qué permite la novela al lector?",
                            options: ["Memorizar información", "Vivir las vidas posibles que le niegan su condición social, su época, sus insuficiencias personales o el azar", "Aprender de memoria", "Desarrollar habilidades técnicas"],
                            answerIndex: 1,
                            explain: "Bourneuf y Ouellet aseguran que la novela permite que 'el lector pueda vivir las vidas posibles que le niegan su condición social, su época, sus insuficiencias personales o el azar'."
                        },
                        {
                            topic: "Características de la fábula",
                            q: "¿Cuál es una característica de la fábula?",
                            options: ["Narración extensa", "Personajes complejos", "Es breve y al final ofrece una moraleja", "Múltiples tramas"],
                            answerIndex: 2,
                            explain: "La fábula es breve, al final de la historia el narrador ofrece una moraleja, su estructura temporal es lineal y los personajes son animales u objetos inanimados que se animan."
                        },
                        {
                            topic: "Volpi sobre la lectura",
                            q: "Según Jorge Volpi, ¿leer ficciones complejas es una de las mejores formas de?",
                            options: ["Aprobar exámenes", "Aprender a ser humano", "Obtener dinero", "Viajar"],
                            answerIndex: 1,
                            explain: "Volpi asegura que 'leer ficciones complejas, habitadas por personajes profundos y contradictorios, se convierte en una de las mejores formas de aprender a ser humano'."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Leyenda, Mito y Epopeya",
                    desc: "Identificación de leyenda, mito, epopeya, sus características y representantes.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Leyenda",
                            q: "¿Cuál es la función principal de la leyenda?",
                            options: ["Enseñar una moraleja", "Cohesionar a un grupo social y establecer una noción de pertenencia", "Explicar el origen del mundo", "Narrar hazañas de héroes"],
                            answerIndex: 1,
                            explain: "La función principal de la leyenda es cohesionar a un grupo social, es decir, ayudar 'a establecer una noción de pertenencia en una comunidad de hablantes o en una sociedad determinada'."
                        },
                        {
                            topic: "Leyenda - característica",
                            q: "¿Qué mezcla la leyenda en su narración?",
                            options: ["Ciencia y ficción", "Hechos reales con fantasía", "Poesía y prosa", "Historia y matemáticas"],
                            answerIndex: 1,
                            explain: "La leyenda 'es una narración que mezcla hechos reales con fantasía'."
                        },
                        {
                            topic: "Mito",
                            q: "¿Qué función tiene el mito para la sociedad que lo crea?",
                            options: ["Entretener", "Cohesionar (presenta un modelo del actuar humano, explica el mundo, los ritos y las costumbres)", "Criticar al gobierno", "Narrar sucesos cotidianos"],
                            answerIndex: 1,
                            explain: "El mito cohesiona en el sentido de que presenta un modelo del actuar humano, explica el mundo, los ritos y las costumbres de la sociedad que lo crean."
                        },
                        {
                            topic: "Diferencia mito-leyenda",
                            q: "¿Cuál es una diferencia fundamental entre mito y leyenda?",
                            options: ["El mito es más largo", "La leyenda nunca tiene un carácter fundacional; el mito sí", "El mito usa personajes humanos; la leyenda dioses", "No hay diferencia"],
                            answerIndex: 1,
                            explain: "Una leyenda nunca tiene un carácter fundacional, un mito sí (narra acontecimientos sagrados ocurridos en el principio de los tiempos)."
                        },
                        {
                            topic: "Epopeya",
                            q: "¿En qué formato fueron construidas originalmente las epopeyas?",
                            options: ["En prosa", "En verso", "En prosa poética", "En diálogo"],
                            answerIndex: 1,
                            explain: "Las epopeyas se difundían de manera recitada o contada, por lo que fueron construidas en verso."
                        },
                        {
                            topic: "Temas de la epopeya",
                            q: "¿Cuál es el tema principal de la epopeya?",
                            options: ["El amor", "El heroísmo: la lucha del héroe para enfrentar múltiples retos y desafíos", "La naturaleza", "La vida cotidiana"],
                            answerIndex: 1,
                            explain: "El tema principal de la epopeya es el heroísmo: la lucha del protagonista para enfrentar múltiples retos y desafíos."
                        },
                        {
                            topic: "Epopeya más antigua",
                            q: "¿Cuál es el relato literario más antiguo hasta ahora encontrado?",
                            options: ["La Ilíada", "La Odisea", "La Epopeya o Épica de Gilgamesh", "Beowulf"],
                            answerIndex: 2,
                            explain: "La Epopeya o Épica de Gilgamesh del pueblo de los sumerios es el relato literario más antiguo hasta ahora encontrado."
                        },
                        {
                            topic: "Características del mito",
                            q: "¿Qué tipo de lenguaje predomina en el mito?",
                            options: ["Lenguaje denotativo", "Lenguaje esencialmente poético", "Lenguaje técnico", "Lenguaje científico"],
                            answerIndex: 1,
                            explain: "El lenguaje usado en el mito es esencialmente poético, siendo la metáfora y la alegoría dos de las figuras retóricas más usadas."
                        },
                        {
                            topic: "Tipo de narrador en mito y leyenda",
                            q: "¿Cómo es generalmente el narrador en la leyenda?",
                            options: ["En primera persona participando activamente", "En tercera persona y no participa directamente en la historia", "En segunda persona", "En primera persona testigo"],
                            answerIndex: 1,
                            explain: "Generalmente el narrador en la leyenda está en tercera persona y no participa directamente en la historia."
                        },
                        {
                            topic: "Beowulf",
                            q: "¿Para qué escritor contemporáneo fue Beowulf la representación máxima de la epopeya?",
                            options: ["Jorge Luis Borges", "Gabriel García Márquez", "J.R.R. Tolkien", "Mario Vargas Llosa"],
                            answerIndex: 2,
                            explain: "Para J.R.R. Tolkien, Beowulf es la representación máxima de la epopeya, referencia para escribir El señor de los anillos."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Pensamiento Literario en Textos",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Tipos de Narradores",
                    desc: "Identificación de los tipos de narradores según su participación y nivel de conocimiento.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Narrador protagonista",
                            q: "¿Cómo es el narrador protagonista?",
                            options: ["Cuenta la historia desde fuera", "Cuenta su propia experiencia en primera persona", "Narra lo que le contaron", "Es omnisciente"],
                            answerIndex: 1,
                            explain: "El narrador protagonista cuenta la historia desde su punto de vista, asumiendo el papel principal, relatando su propia experiencia."
                        },
                        {
                            topic: "Narrador testigo",
                            q: "¿Qué caracteriza al narrador testigo?",
                            options: ["Es el protagonista", "Relata una historia, pero no es la suya; puede estar relacionado indirectamente", "Conoce todos los pensamientos", "Narra en segunda persona"],
                            answerIndex: 1,
                            explain: "El narrador testigo relata una historia que no es la suya; la conoce porque puede estar relacionado de manera indirecta o haber sido testigo."
                        },
                        {
                            topic: "Monólogo interior",
                            q: "¿Qué es el monólogo interior como tipo de narrador?",
                            options: ["Un diálogo entre dos personajes", "El narrador se dirige a sí mismo, reflexiona, recuerda, manifiesta emociones (flujo de conciencia)", "Un discurso formal", "Una carta"],
                            answerIndex: 1,
                            explain: "El monólogo interior es cuando el narrador no cuenta una historia al lector, se dirige a sí mismo, reflexiona, recuerda, manifiesta alguna emoción. Es lo que se conoce como flujo de conciencia."
                        },
                        {
                            topic: "Narrador omnisciente",
                            q: "¿Qué caracteriza al narrador omnisciente?",
                            options: ["Sabe menos que los personajes", "Conoce todos los detalles de la historia, incluso lo que va a pasar y lo que piensa cada personaje", "Solo conoce lo que ve", "Es un personaje secundario"],
                            answerIndex: 1,
                            explain: "El narrador omnisciente conoce todos los detalles de la historia y de cómo transcurre, incluso de lo que va a pasar. Sabe lo que piensa cada uno de los personajes."
                        },
                        {
                            topic: "Narrador equisciente",
                            q: "¿Cuál es la característica del narrador equisciente?",
                            options: ["Conoce todo", "Se centra en un único personaje (el protagonista) pero desconoce los sentimientos del resto", "No conoce nada", "Es el protagonista"],
                            answerIndex: 1,
                            explain: "El narrador equisciente se centra en un único personaje, el protagonista, pero desconoce los sentimientos y pensamientos del resto. Tiene una visión limitada."
                        },
                        {
                            topic: "Intradiegético",
                            q: "¿Qué significa que un narrador sea intradiegético?",
                            options: ["Está fuera de la historia", "Pertenece o participa de la historia que cuenta (es un personaje)", "Es omnisciente", "Narra en segunda persona"],
                            answerIndex: 1,
                            explain: "Un narrador es intradiegético si pertenece o participa de la historia que cuenta; es decir, si es un personaje de la historia."
                        },
                        {
                            topic: "Extradiegético",
                            q: "¿Qué significa que un narrador sea extradiegético?",
                            options: ["Participa de la historia", "Está fuera de la historia; no participa de los sucesos que narra", "Es el protagonista", "Es testigo"],
                            answerIndex: 1,
                            explain: "Un narrador es extradiegético si está fuera de la historia; es decir, no participa de los sucesos que narra."
                        },
                        {
                            topic: "Tercera persona",
                            q: "¿En qué persona gramatical narra generalmente un narrador omnisciente?",
                            options: ["Primera persona", "Segunda persona", "Tercera persona", "Ninguna de las anteriores"],
                            answerIndex: 2,
                            explain: "El narrador omnisciente usa la tercera persona para narrar, ya que está fuera de la historia."
                        },
                        {
                            topic: "Identificación del narrador",
                            q: "¿Cuál es una forma de identificar el tipo de narrador de un texto literario?",
                            options: ["Contar las páginas", "Identificar el pronombre personal que indica su presencia: yo, tú, él, ella, ellos", "Medir la extensión", "Observar el título"],
                            answerIndex: 1,
                            explain: "Una de las formas de definir el tipo de narrador es identificando el pronombre personal que indica su presencia: yo, tú, él, ella, ellos."
                        },
                        {
                            topic: "Narrador en segunda persona",
                            q: "¿Cómo se presenta el narrador en segunda persona?",
                            options: ["El narrador se refiere a sí mismo", "El narrador se dirige a un tú/usted, muchas veces apelando al propio lector", "El narrador está fuera de la historia", "El narrador es omnisciente"],
                            answerIndex: 1,
                            explain: "El narrador en segunda persona se dirige a un 'tú/usted' o 'vosotros/ustedes', muchas veces apelando al propio lector. Es muy poco común."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Personajes y Estructura del Texto Narrativo",
                    desc: "Identificación de tipos de personajes, estructura del texto narrativo e intertextualidad.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Protagonista",
                            q: "¿Quién es el protagonista en una obra literaria?",
                            options: ["El personaje que se opone al héroe", "El personaje principal de la historia", "Un personaje secundario", "El narrador"],
                            answerIndex: 1,
                            explain: "El protagonista es el personaje principal de la historia."
                        },
                        {
                            topic: "Antagonista",
                            q: "Según Vladimir Propp, ¿qué elementos caracterizan al antagonista?",
                            options: ["La ayuda al héroe", "El daño, el combate, la persecución o cualquier otra forma de lucha contra el héroe", "La narración de la historia", "La descripción del espacio"],
                            answerIndex: 1,
                            explain: "Según Propp, los elementos del antagonista son 'el daño, el combate [la persecución] o cualquier otra forma de lucha contra el héroe'."
                        },
                        {
                            topic: "Clasificación de Greimas",
                            q: "¿Cómo clasificaba A.J. Greimas a los personajes del relato?",
                            options: ["Según su psicología", "Según lo que hacen (sus acciones)", "Según su edad", "Según su apariencia física"],
                            answerIndex: 1,
                            explain: "Greimas describió y clasificó a los personajes del relato 'según lo que hacen', no según una esencia psicológica."
                        },
                        {
                            topic: "Estructura del texto narrativo",
                            q: "¿Cuáles son las tres partes de la estructura del texto narrativo?",
                            options: ["Introducción, desarrollo, conclusión", "Inicio, nudo o clímax, desenlace", "Planteamiento, conflicto, solución", "Prólogo, capítulos, epílogo"],
                            answerIndex: 1,
                            explain: "La estructura de un texto narrativo se divide en tres partes: inicio, nudo o clímax, y desenlace."
                        },
                        {
                            topic: "Clímax",
                            q: "¿Qué ocurre en el clímax o nudo de una historia?",
                            options: ["Se presenta la situación inicial", "Se resuelve el conflicto", "Es el punto de mayor tensión donde se presenta el conflicto", "Se presentan los personajes"],
                            answerIndex: 2,
                            explain: "El nudo o clímax es 'el punto más álgido del conflicto narrativo, el momento en el cual se presenta la mayor tensión dentro de la historia'."
                        },
                        {
                            topic: "Intertextualidad",
                            q: "¿Qué es la intertextualidad según el Instituto Cervantes?",
                            options: ["La relación entre autor y lector", "La relación que un texto mantiene con otros textos", "La relación entre personajes", "La relación entre narrador y protagonista"],
                            answerIndex: 1,
                            explain: "La intertextualidad es 'la relación que un texto (oral o escrito) mantiene con otros textos (orales o escritos), ya sea contemporáneo o histórico'."
                        },
                        {
                            topic: "Ejemplo de intertextualidad",
                            q: "¿Qué obra de James Joyce hace referencia a la Odisea de Homero?",
                            options: ["Dublineses", "Retrato del artista adolescente", "Ulises", "Finnegans Wake"],
                            answerIndex: 2,
                            explain: "Ulises de James Joyce hace referencia a la Odisea de Homero, a su tema (el viaje de vuelta a casa) y a su personaje (Ulises)."
                        },
                        {
                            topic: "Personaje secundario",
                            q: "¿Cuál es la función del personaje secundario?",
                            options: ["Ser el protagonista", "Apoyar al protagonista sin ser el personaje principal", "Oponerse al héroe", "Narrar la historia"],
                            answerIndex: 1,
                            explain: "El personaje secundario apoya al protagonista sin ser el personaje principal de la historia."
                        },
                        {
                            topic: "Personaje incidental",
                            q: "¿Qué otro nombre recibe el personaje incidental?",
                            options: ["Protagonista", "Antagonista", "Testigo", "Narrador"],
                            answerIndex: 2,
                            explain: "El personaje incidental también es llamado personaje testigo."
                        },
                        {
                            topic: "Desenlace",
                            q: "¿Qué ocurre en el desenlace de una historia?",
                            options: ["Se presenta el conflicto", "Se resuelve el conflicto", "Se introducen los personajes", "Se describe el espacio"],
                            answerIndex: 1,
                            explain: "El desenlace es el momento de la historia donde se resuelve el conflicto."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Organización de Textos y Cualidades de la Redacción",
                    desc: "Identificación de cualidades de la redacción: claridad, concisión, coherencia, fluidez, sencillez y originalidad.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Claridad",
                            q: "¿En qué consiste la claridad en la redacción?",
                            options: ["Usar palabras difíciles", "Escribir de manera que el lector pueda entender con facilidad sin obligarse a releer", "Escribir con muchas palabras", "Usar tecnicismos"],
                            answerIndex: 1,
                            explain: "La claridad consiste en escribir un texto de manera que el lector pueda entenderlo con facilidad sin que se vea obligado a releer."
                        },
                        {
                            topic: "Concisión",
                            q: "¿Qué busca la concisión en la redacción?",
                            options: ["Usar muchas palabras", "Emplear palabras específicas y precisas para expresar lo que se quiere con el menor número de palabras", "Repetir ideas", "Usar palabras rebuscadas"],
                            answerIndex: 1,
                            explain: "La concisión reside en emplear palabras específicas y precisas para expresar lo que se quiere, formulando los pensamientos con el menor número de palabras."
                        },
                        {
                            topic: "Coherencia",
                            q: "¿Qué permite la coherencia en un texto?",
                            options: ["Usar palabras bonitas", "Identificar el tema que expresa un escrito relacionando las ideas", "Escribir con fluidez", "Ser original"],
                            answerIndex: 1,
                            explain: "La coherencia es la propiedad que permite identificar el tema que expresa un escrito, expresando las ideas siguiendo un orden lógico y relacionándolas entre sí."
                        },
                        {
                            topic: "Fluidez",
                            q: "¿Cuándo se percibe la fluidez en un texto?",
                            options: ["Cuando el texto es muy largo", "Cuando el lector desarrolla con facilidad el mensaje y siente la necesidad de continuar la lectura", "Cuando usa palabras difíciles", "Cuando es muy breve"],
                            answerIndex: 1,
                            explain: "La fluidez de un texto se percibe cuando el lector desarrolla con facilidad el mensaje y siente la necesidad de continuar la lectura, ya que le resulta accesible, fluida y agradable."
                        },
                        {
                            topic: "Sencillez",
                            q: "¿En qué consiste la sencillez en la redacción?",
                            options: ["Usar palabras rebuscadas", "Emplear palabras y frases de fácil comprensión, evitando expresiones artificiosas", "Escribir con tecnicismos", "Usar extranjerismos"],
                            answerIndex: 1,
                            explain: "La sencillez consiste en el empleo de palabras y frases de fácil comprensión, expresándose con naturalidad y evitando lo artificioso y embrollado."
                        },
                        {
                            topic: "Originalidad",
                            q: "¿Cuándo ocurre la originalidad en un texto?",
                            options: ["Cuando se copian ideas", "Cuando el escritor es él mismo, sin emplear frases hechas o expresiones trilladas", "Cuando se usan muchas citas", "Cuando se escribe sobre temas nuevos"],
                            answerIndex: 1,
                            explain: "La originalidad de un texto ocurre cuando el escritor es él mismo, sin emplear frases hechas o expresiones trilladas."
                        },
                        {
                            topic: "Ejemplo de incoherencia",
                            q: "¿Qué problema presenta el siguiente texto: 'Me gusta el rock, mañana tengo examen de Literatura, la ballena es un mamífero'?",
                            options: ["Falta de claridad", "Falta de coherencia (las ideas no se relacionan entre sí)", "Falta de concisión", "Falta de sencillez"],
                            answerIndex: 1,
                            explain: "El texto carece de coherencia ya que cambia de un asunto a otro continuamente sin que los enunciados se relacionen entre sí."
                        },
                        {
                            topic: "Ejemplo de claridad",
                            q: "¿Cuál de las siguientes oraciones es la más clara?",
                            options: ["Comieron en mi casa el señor López y su hija. Ayer estuvo en mi casa su madre.", "Comieron en mi casa el señor López y su hija. Ayer estuvo en mi casa la madre de ella.", "Ambas son iguales", "Ninguna es clara"],
                            answerIndex: 1,
                            explain: "La oración 'Comieron en mi casa el señor López y su hija. Ayer estuvo en mi casa la madre de ella' es más clara porque elimina la ambigüedad sobre a quién se refiere 'su madre'."
                        },
                        {
                            topic: "Ejemplo de concisión",
                            q: "¿Cuál es la versión más concisa de 'En diversas ocasiones hemos revisado su proyecto y hemos quedado muy impresionados por su calidad'?",
                            options: ["Hemos revisado su proyecto muchas veces y nos gusta", "Luego de revisar su proyecto, quedamos impresionados por su calidad", "Su proyecto es bueno", "Nos gusta su proyecto"],
                            answerIndex: 1,
                            explain: "La versión 'Luego de revisar su proyecto, quedamos impresionados por su calidad' es más concisa porque elimina palabras innecesarias manteniendo el significado."
                        },
                        {
                            topic: "Cualidades de la redacción",
                            q: "¿Cuántas cualidades de la redacción se mencionan en el texto?",
                            options: ["3", "4", "5", "6"],
                            answerIndex: 3,
                            explain: "El texto menciona seis cualidades de la redacción: claridad, concisión, coherencia, fluidez, sencillez y originalidad."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Literatura y Poder",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Resumen como Análisis Literario",
                    desc: "Comprensión del resumen como herramienta de análisis de textos literarios.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Resumen literario",
                            q: "Según Upeguy (2009), ¿el resumen de una ponencia, un ensayo, un libro y un resumen de una lectura educativa son exactamente lo mismo?",
                            options: ["Sí, todos son iguales", "No, hay variaciones de léxico, estructura, extensión y finalidad", "Solo cambia la extensión", "Solo cambia el autor"],
                            answerIndex: 1,
                            explain: "Según Upeguy, no son exactamente lo mismo, pues hay variaciones de léxico, de estructura, extensión y finalidad del autor en cada uno de estos textos o subgéneros de resumen."
                        },
                        {
                            topic: "Función del resumen",
                            q: "¿Qué papel juega el resumen en el análisis literario según el texto?",
                            options: ["Reemplazar la lectura completa", "Seleccionar la información necesaria para identificar los elementos literarios", "Criticar la obra", "Añadir información nueva"],
                            answerIndex: 1,
                            explain: "El resumen debe ser producto de una lectura atenta, la cual permitirá seleccionar la información necesaria para la identificación de los elementos literarios."
                        },
                        {
                            topic: "Características del resumen literario",
                            q: "Según Quiche (2018), ¿cuál es una característica del resumen literario?",
                            options: ["Incluir opiniones personales", "Ser extenso y detallado", "Extractar las ideas principales de forma objetiva", "Usar lenguaje poético"],
                            answerIndex: 2,
                            explain: "Entre las características del resumen literario se encuentra extractar las ideas principales de forma objetiva, sin incluir opiniones personales."
                        },
                        {
                            topic: "Lectura atenta",
                            q: "¿Por qué es importante la lectura atenta para elaborar un resumen?",
                            options: ["Para memorizar el texto", "Para seleccionar la información relevante y las ideas principales", "Para copiar el texto", "Para alargar la lectura"],
                            answerIndex: 1,
                            explain: "La lectura atenta es importante porque permite seleccionar la información necesaria y distinguir las ideas principales de las secundarias."
                        },
                        {
                            topic: "Objetividad en el resumen",
                            q: "¿Cómo debe ser un resumen literario respecto a las opiniones?",
                            options: ["Debe incluir muchas opiniones personales", "Debe ser objetivo y no incluir opiniones del lector", "Debe criticar la obra", "Debe alabar al autor"],
                            answerIndex: 1,
                            explain: "El resumen literario debe ser objetivo, extractando las ideas principales sin incluir opiniones personales del lector."
                        },
                        {
                            topic: "Identificación de elementos",
                            q: "¿Qué permite identificar el resumen después de la lectura atenta?",
                            options: ["Los errores del autor", "Los elementos literarios que componen el texto", "La biografía del autor", "El precio del libro"],
                            answerIndex: 1,
                            explain: "Después de la lectura atenta, el resumen permite la identificación de los elementos literarios que componen el texto."
                        },
                        {
                            topic: "Extensión del resumen",
                            q: "¿Cómo es la extensión de un resumen literario en relación con el texto original?",
                            options: ["Más extensa", "Igual", "Más breve, condensando la información principal", "Depende del lector"],
                            answerIndex: 2,
                            explain: "El resumen literario es más breve que el texto original, condensando la información principal de forma concisa."
                        },
                        {
                            topic: "Ideas principales y secundarias",
                            q: "¿Qué distingue el resumen en un texto?",
                            options: ["Las palabras difíciles", "Las ideas principales de las secundarias", "Los errores ortográficos", "La longitud de los párrafos"],
                            answerIndex: 1,
                            explain: "El resumen permite reconocer la información que contiene las ideas principales, así como las secundarias."
                        },
                        {
                            topic: "Lenguaje del resumen",
                            q: "¿Qué tipo de lenguaje debe usar un resumen literario?",
                            options: ["Lenguaje poético", "Lenguaje claro y preciso", "Lenguaje rebuscado", "Lenguaje coloquial"],
                            answerIndex: 1,
                            explain: "El resumen literario debe usar un lenguaje claro y preciso para transmitir fielmente las ideas del texto original."
                        },
                        {
                            topic: "Propósito del resumen",
                            q: "¿Cuál es el propósito principal del resumen literario?",
                            options: ["Reemplazar la obra original", "Presentar de manera condensada y objetiva el contenido esencial del texto", "Criticar al autor", "Añadir interpretaciones nuevas"],
                            answerIndex: 1,
                            explain: "El propósito principal del resumen literario es presentar de manera condensada y objetiva el contenido esencial del texto literario."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Identificación de Elementos Literarios",
                    desc: "Identificación de elementos literarios en el análisis de obras literarias.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Elementos literarios",
                            q: "Según Velázquez (2005), ¿cuáles son algunos elementos literarios que se identifican en un análisis literario?",
                            options: ["El precio del libro", "El tipo de narrador, el género literario, el orden cronológico, el tiempo y espacio", "El número de páginas", "La editorial"],
                            answerIndex: 1,
                            explain: "Los elementos literarios incluyen el tipo de narrador, el género literario, el orden cronológico, el tiempo y espacio."
                        },
                        {
                            topic: "Pasos del análisis literario",
                            q: "Según Quiche (2018), ¿cuál es el primer paso del análisis literario?",
                            options: ["Escribir la conclusión", "Efectuar la lectura comprensiva", "Identificar el género literario", "Analizar los personajes"],
                            answerIndex: 1,
                            explain: "Según la secuencia de análisis literario, el primer paso es efectuar la lectura comprensiva del texto."
                        },
                        {
                            topic: "Comentario crítico",
                            q: "¿Qué aspectos considera el comentario crítico en el análisis literario?",
                            options: ["Solo el argumento", "Aspectos semánticos, lingüísticos y pragmáticos", "Solo los personajes", "Solo el narrador"],
                            answerIndex: 1,
                            explain: "El comentario crítico considera aspectos semánticos, lingüísticos y pragmáticos para la comprensión de la intención comunicativa."
                        },
                        {
                            topic: "Subgénero literario",
                            q: "¿Cuál es uno de los principales aspectos a identificar en un análisis literario?",
                            options: ["El precio de la obra", "El subgénero literario (cuento, novela, fábula, etc.)", "La editorial", "El año de impresión"],
                            answerIndex: 1,
                            explain: "Uno de los principales aspectos al realizar un análisis literario es identificar el subgénero literario al que pertenece el texto."
                        },
                        {
                            topic: "Proceso comunicativo",
                            q: "¿Cómo debe entenderse el texto literario en el análisis?",
                            options: ["Como un objeto aislado", "Como un proceso comunicativo", "Como un documento histórico", "Como un producto comercial"],
                            answerIndex: 1,
                            explain: "El análisis literario debe entender el texto como un proceso comunicativo entre autor, obra y lector."
                        },
                        {
                            topic: "Tipos de narrador",
                            q: "¿Qué aspecto del narrador debe identificarse en un análisis literario?",
                            options: ["Su edad", "Su tipo (protagonista, testigo, omnisciente, etc.)", "Su género", "Su nacionalidad"],
                            answerIndex: 1,
                            explain: "En el análisis literario se debe identificar el tipo de narrador según su participación y nivel de conocimiento."
                        },
                        {
                            topic: "Intención comunicativa",
                            q: "¿Qué debe comprenderse al final del análisis literario?",
                            options: ["El precio del libro", "La intención comunicativa del autor", "La biografía del autor", "La editorial"],
                            answerIndex: 1,
                            explain: "La comprensión de la intención comunicativa es la culminación del análisis literario, expresada en la conclusión."
                        },
                        {
                            topic: "Identificación del género",
                            q: "¿Qué permite reconocer la identificación del género literario?",
                            options: ["El número de capítulos", "La estructura y características de la obra (narrativo, lírico, dramático)", "La extensión", "El número de personajes"],
                            answerIndex: 1,
                            explain: "La identificación del género literario permite reconocer la estructura y características de la obra (narrativo, lírico o dramático)."
                        },
                        {
                            topic: "Tiempo y espacio",
                            q: "¿Por qué es importante identificar el tiempo y espacio en un análisis literario?",
                            options: ["Para medir la extensión", "Para comprender el contexto donde se desarrolla la historia", "Para contar páginas", "Para evaluar al autor"],
                            answerIndex: 1,
                            explain: "Identificar el tiempo y espacio es importante para comprender el contexto donde se desarrolla la historia y cómo afecta a los personajes."
                        },
                        {
                            topic: "Conclusión del análisis",
                            q: "¿Qué debe contener la conclusión del análisis literario?",
                            options: ["Un resumen del texto", "Un comentario crítico que integra aspectos semánticos, lingüísticos y pragmáticos", "Una biografía del autor", "Una lista de personajes"],
                            answerIndex: 1,
                            explain: "La conclusión del análisis literario debe incluir un comentario crítico que considere los aspectos semánticos, lingüísticos y pragmáticos del texto."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Lenguaje Literario",
                    desc: "Identificación del lenguaje literario, función poética, lenguaje connotativo y denotativo.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Lenguaje literario",
                            q: "Según Tzvetan Todorov, ¿cómo se constituye y subsiste la literatura respecto al lenguaje corriente?",
                            options: ["Imitando al lenguaje corriente", "A partir de la diferencia con el lenguaje corriente", "Usando el mismo lenguaje", "Ignorando el lenguaje"],
                            answerIndex: 1,
                            explain: "Todorov asegura que la literatura 'puede constituirse y subsistir solamente a partir de esa diferencia con el lenguaje corriente'."
                        },
                        {
                            topic: "Función poética",
                            q: "¿Cuál es el fin principal de la función poética en la literatura?",
                            options: ["Informar objetivamente", "Crear belleza en y a través del lenguaje", "Convencer al lector", "Dar instrucciones"],
                            answerIndex: 1,
                            explain: "La función poética tiene como fin principal 'crear belleza en y a través del lenguaje'."
                        },
                        {
                            topic: "Lenguaje connotativo",
                            q: "¿Qué caracteriza al lenguaje connotativo?",
                            options: ["Palabras con un solo significado", "Palabras de significados ocultos que pueden entenderse en más de una forma", "Lenguaje científico", "Lenguaje técnico"],
                            answerIndex: 1,
                            explain: "El lenguaje connotativo incluye palabras de significados ocultos; cada palabra o frase puede entenderse en más de una forma."
                        },
                        {
                            topic: "Lenguaje denotativo",
                            q: "¿Para qué se usa preferentemente el lenguaje denotativo?",
                            options: ["En la poesía", "En las ciencias y la técnica (función referencial)", "En la literatura", "En el teatro"],
                            answerIndex: 1,
                            explain: "El lenguaje denotativo está ligado a la función referencial y es el tipo de lenguaje preferido por las ciencias y la técnica."
                        },
                        {
                            topic: "Literariedad",
                            q: "Según Cacho Ortega y Cacho Ortega, ¿qué es la literariedad?",
                            options: ["La extensión de la obra", "El valor literario de un texto escrito usando la lengua con fines estéticos", "El número de personajes", "La editorial"],
                            answerIndex: 1,
                            explain: "La literariedad hace referencia al valor literario de un texto que fue escrito usando la lengua con fines estéticos."
                        },
                        {
                            topic: "Características del lenguaje literario",
                            q: "¿Cuál es una característica del lenguaje literario?",
                            options: ["Lenguaje pobre", "Gran carga expresiva y afectiva que permite crear imágenes", "Falta de recursos literarios", "Lenguaje coloquial"],
                            answerIndex: 1,
                            explain: "El lenguaje literario tiene gran carga expresiva y afectiva que permite crear imágenes, lenguaje culto y riqueza de vocabulario."
                        },
                        {
                            topic: "Longino y lo sublime",
                            q: "¿Qué indicó Longino en el Tratado sobre lo sublime que daba a la literatura su grandeza?",
                            options: ["La extensión de la obra", "La capacidad de vivir grandes pensamientos, inusitadas emociones, figuras del pensamiento, metáforas y un lenguaje elaborado", "La cantidad de personajes", "La rima"],
                            answerIndex: 1,
                            explain: "Longino indicó que la grandeza de la literatura se refiere a la capacidad de vivir grandes pensamientos, inusitadas y fuertes emociones, figuras del pensamiento, metáforas y un lenguaje elaborado."
                        },
                        {
                            topic: "Función poética y belleza",
                            q: "¿Cómo crea belleza el lenguaje literario?",
                            options: ["Describiendo objetos bonitos", "A partir de la contemplación de lo bello y el uso de recursos estéticos", "Usando palabras largas", "Escribiendo mucho"],
                            answerIndex: 1,
                            explain: "El lenguaje literario crea belleza a partir de la contemplación de lo bello y el uso de recursos estéticos como metáforas, imágenes y un lenguaje elaborado."
                        },
                        {
                            topic: "Lenguaje connotativo en literatura",
                            q: "¿Por qué la literatura utiliza predominantemente lenguaje connotativo?",
                            options: ["Porque es más fácil", "Porque busca crear múltiples interpretaciones y no exigir claridad absoluta", "Porque es más corto", "Porque es más moderno"],
                            answerIndex: 1,
                            explain: "La literatura utiliza lenguaje connotativo porque no quiere informar exactamente, sino crear una idea que admita muchas interpretaciones."
                        },
                        {
                            topic: "Lenguaje cotidiano vs literario",
                            q: "Según Fernando Vallejo, ¿cómo es el lenguaje de la vida cotidiana comparado con el literario?",
                            options: ["Más bello", "Caótico en comparación con la intención ordenadora del lenguaje literario", "Más preciso", "Más culto"],
                            answerIndex: 1,
                            explain: "Vallejo señala que el lenguaje cotidiano tiene una intención principalmente comunicativa y 'es caótico en comparación con la intención ordenadora que tiene el lenguaje literario'."
                        }
                    ]
                }
            }
        }
    }
};

export default pensamientoLiterario;