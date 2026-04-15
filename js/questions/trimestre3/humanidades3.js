// ============================================
// HUMANIDADES III - TERCER TRIMESTRE
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const humanidadesIII = {
    id: "humanidadesIII",
    nombre: "HUMANIDADES III",
    icono: "📚",
    descripcion: "Exploración de la experiencia humana, su historicidad, performatividad, aspectos negativos, relación con otros seres y búsqueda de una vida más justa y digna.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: La experiencia humana: principios, conceptos e historicidad de la existencia",
            actividades: {
                act1: {
                    nombre: "Actividad 1: El asombro de existir aquí y ahora",
                    desc: "Reconocimiento de la experiencia humana a través de discursos clásicos y contemporáneos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Experiencia humana",
                            q: "¿Cuál de las siguientes NO es una característica de la experiencia humana según el contenido?",
                            options: ["Diversa", "Eterna", "Cambiante", "Finita"],
                            answerIndex: 1,
                            explain: "La experiencia humana es finita (tiene un fin), diversa, cambiante, incomprensible, inabarcable y relativa, pero no es eterna."
                        },
                        {
                            topic: "Experiencia humana",
                            q: "Según Núñez et al. (2020), ¿cómo se construye la realidad en que vivimos?",
                            options: ["A partir de hechos objetivos", "A partir de representaciones simbólicas de lo real", "Únicamente a través de la experiencia corporal", "Mediante la observación científica"],
                            answerIndex: 1,
                            explain: "La realidad se construye a partir de las representaciones simbólicas de lo real, que se comparten con otros en la vida cotidiana."
                        },
                        {
                            topic: "Epicuro",
                            q: "Según Epicuro en su 'Carta a Menecceo', ¿cuál es el fin supremo de la existencia?",
                            options: ["La riqueza", "El poder", "El placer como calma y ausencia de dolor", "La fama"],
                            answerIndex: 2,
                            explain: "Epicuro considera el placer como máximo fin de la existencia, entendido como calma y ausencia de dolor, no como placeres disolutos."
                        },
                        {
                            topic: "Epicuro",
                            q: "Para Epicuro, ¿cómo debe considerarse el futuro?",
                            options: ["Con total certeza", "Con desesperación", "Ni como completamente nuestro ni completamente no nuestro", "Ignorándolo completamente"],
                            answerIndex: 2,
                            explain: "Epicuro advertía que el futuro 'ni es completamente nuestro ni completamente no nuestro', para no esperarlo con certeza ni desesperar de él."
                        },
                        {
                            topic: "Albert Camus",
                            q: "Según Albert Camus en 'El Mito de Sísifo', ¿cuál es el verdadero problema filosófico?",
                            options: ["La existencia de Dios", "El sentido del amor", "El suicidio", "La naturaleza del conocimiento"],
                            answerIndex: 2,
                            explain: "Camus afirma: 'No hay más que un problema filosófico verdaderamente serio: el suicidio. Juzgar si la vida vale o no la pena de vivirla es responder a la pregunta fundamental de la filosofía'."
                        },
                        {
                            topic: "Albert Camus",
                            q: "¿Qué representa la figura de Sísifo para Albert Camus?",
                            options: ["La esperanza", "La redención", "El absurdo de la vida moderna", "La sabiduría"],
                            answerIndex: 2,
                            explain: "Camus usa el mito de Sísifo para representar el carácter absurdo, repetitivo y espiritualmente desgastante de la vida moderna, especialmente el trabajo."
                        },
                        {
                            topic: "Friedrich Nietzsche",
                            q: "Según Nietzsche en 'Sobre verdad y mentira en sentido extramoral', ¿qué lugar ocupa el intelecto humano en el universo?",
                            options: ["El centro del universo", "Un invento relevante solo para los humanos y efímero", "El fin último de la creación", "Una manifestación divina"],
                            answerIndex: 1,
                            explain: "Nietzsche señala que el intelecto humano es una invención fugaz y superficial en un apartado rincón del universo, irrelevante para la vastedad cósmica."
                        },
                        {
                            topic: "Friedrich Nietzsche",
                            q: "Para Nietzsche, la verdad es:",
                            options: ["Una realidad objetiva", "Una revelación divina", "Una mentira colectiva sostenida socialmente", "Un hecho científico comprobable"],
                            answerIndex: 2,
                            explain: "Nietzsche sostiene que la verdad es una invención social, una mentira colectiva basada en metáforas y designaciones uniformes obligatorias."
                        },
                        {
                            topic: "Existencialismo",
                            q: "¿Cuál es el punto de partida de los filósofos existencialistas?",
                            options: ["La razón", "Dios", "La existencia humana", "La naturaleza"],
                            answerIndex: 2,
                            explain: "El punto de partida del existencialismo es la existencia humana, considerada como el dato fundamental, cambiante y dinámico."
                        },
                        {
                            topic: "Albert Camus",
                            q: "¿Por qué Albert Camus no se consideraba a sí mismo existencialista?",
                            options: ["Porque prefería el estoicismo", "Porque consideraba el existencialismo como un escape y una evasión", "Porque era ateo", "Porque no creía en la libertad"],
                            answerIndex: 1,
                            explain: "Camus no se asumía existencialista porque consideraba que el existencialismo era un punto de fuga, 'un escape, un querer renunciar a ser hombre para dar nacimiento a Dios'."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Vida examinada",
                    desc: "Examen de discursos clásicos y contemporáneos sobre la vida examinada.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Sócrates",
                            q: "Según Sócrates en la 'Apología de Sócrates' de Platón, ¿cuál es el mayor de los bienes?",
                            options: ["Las riquezas", "Los honores", "Examinar la vida propia", "El poder político"],
                            answerIndex: 2,
                            explain: "Sócrates sostiene que examinar la vida es el mayor de los bienes, persuadiendo a no atender las cosas externas antes que el cuidado de uno mismo."
                        },
                        {
                            topic: "Sócrates",
                            q: "¿Cuál fue la principal acusación contra Sócrates que llevó a su juicio?",
                            options: ["Robo", "Traición a Atenas", "Corromper a los jóvenes al incitarlos a examinar su vida", "Asesinato"],
                            answerIndex: 2,
                            explain: "Sócrates fue acusado de 'corromper' a los jóvenes al incitarlos a examinar su vida, cuestionando las creencias establecidas."
                        },
                        {
                            topic: "Hadot",
                            q: "Según Hadot (2009), el esfuerzo hacia la sabiduría es:",
                            options: ["Un proceso rápido", "Algo que se alcanza de forma definitiva", "Un combate perpetuo e inacabado", "Innecesario para la vida filosófica"],
                            answerIndex: 2,
                            explain: "Hadot señala que el esfuerzo hacia la sabiduría está siempre inacabado y requiere un combate perpetuo contra el discurso interior caótico y disperso."
                        },
                        {
                            topic: "Sócrates",
                            q: "¿Qué relación establece Sócrates entre la virtud y el conocimiento?",
                            options: ["Son independientes", "La virtud es innata sin necesidad de conocimiento", "La sabiduría lleva al bien y la ignorancia al mal", "El conocimiento corrompe la virtud"],
                            answerIndex: 2,
                            explain: "Para Sócrates, la sabiduría lleva al bien, mientras que el mal es producto de la ignorancia, estableciendo una relación directa entre conocimiento y virtud."
                        },
                        {
                            topic: "Apología de Sócrates",
                            q: "¿Qué frase célebre resume la actitud socrática frente a su propia ignorancia?",
                            options: ["Pienso, luego existo", "Solo sé que no sé nada", "El hombre es la medida de todas las cosas", "Conócete a ti mismo"],
                            answerIndex: 1,
                            explain: "La famosa frase 'Solo sé que no sé nada' refleja el reconocimiento socrático de la finitud del conocimiento humano."
                        },
                        {
                            topic: "Platón",
                            q: "¿Cómo se llama el método socrático que significa 'el arte de dar a luz ideas'?",
                            options: ["Dialéctica", "Mayéutica", "Ironía", "Aletheia"],
                            answerIndex: 1,
                            explain: "La mayéutica, que significa 'el arte de parir hijos', fue reorientada por Sócrates como 'el arte de dar a luz ideas' mediante preguntas que llevaban al interlocutor a descubrir la verdad."
                        },
                        {
                            topic: "Cuidado de sí",
                            q: "Según Sócrates, ¿a qué debemos atender antes que a las cosas que nos pertenecen?",
                            options: ["A la riqueza", "Al cuidado de nosotros mismos", "A la fama", "Al poder político"],
                            answerIndex: 1,
                            explain: "Sócrates enfatiza que debemos atender al cuidado de nosotros mismos para hacernos más sabios y perfectos, antes que a las posesiones externas."
                        },
                        {
                            topic: "Vida examinada",
                            q: "¿Qué cuestionamiento fundamental estructura el examen de la vida según los discursos socráticos?",
                            options: ["¿Cómo ganar más dinero?", "¿Qué significa ser humano, estar vivo o morir?", "¿Cómo alcanzar el poder?", "¿Cuál es la mejor religión?"],
                            answerIndex: 1,
                            explain: "El examen de la vida se estructura alrededor de cuestionamientos sobre lo que significa ser humano, estar vivo o morir."
                        },
                        {
                            topic: "Aletheia",
                            q: "¿Qué significa la palabra griega 'Aletheia' utilizada por Sócrates para referirse a la verdad?",
                            options: ["La razón", "La opinión", "Quitar el velo", "La duda"],
                            answerIndex: 2,
                            explain: "'Aletheia' se traduce como 'quitar el velo', refiriéndose al descubrimiento de lo que estaba guardado dentro de uno mismo."
                        },
                        {
                            topic: "Hadot",
                            q: "Según Hadot, ¿qué caracteriza al discurso interior de la mayoría de las personas?",
                            options: ["Es siempre ordenado", "Es interrumpido, caótico y disperso", "Es perfectamente lógico", "Es inexistente"],
                            answerIndex: 1,
                            explain: "Hadot señala que nuestro discurso interior es siempre interrumpido, caótico y disperso, requiriendo un gran esfuerzo para poner orden en los pensamientos."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: La performatividad y el cambio en la experiencia humana",
                    desc: "Comprensión del carácter performativo y cambiante de la experiencia humana.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Performatividad",
                            q: "Según Judith Butler, la performatividad se basa en dos actos del habla señalados por John Austin. ¿Cuáles son?",
                            options: ["Ilocucionarios y perlocucionarios", "Directivos y expresivos", "Declarativos y comisivos", "Afirmativos y negativos"],
                            answerIndex: 0,
                            explain: "Los actos ilocucionarios implican un accionar o compromiso, mientras que los perlocucionarios buscan modificar el comportamiento del oyente."
                        },
                        {
                            topic: "Lenguaje",
                            q: "Según Julien Offray de La Mettrie, ¿qué permite al humano diferenciarse de otras especies?",
                            options: ["La razón", "La moral", "El lenguaje", "La tecnología"],
                            answerIndex: 2,
                            explain: "La Mettrie plantea que es precisamente el lenguaje lo que permite al humano diferenciarse de otras especies."
                        },
                        {
                            topic: "Nagarjuna",
                            q: "¿Cómo define el filósofo y monje budista Nagarjuna al ser humano?",
                            options: ["Como un alma inmortal", "Como una colección de realidades elementales que constituyen su seudoidentidad", "Como un ser puramente espiritual", "Como una criatura divina"],
                            answerIndex: 1,
                            explain: "Nagarjuna señala que 'el ser humano, como el resto de las cosas, no es sino una colección de realidades elementales, materiales y espirituales que constituyen su seudoidentidad'."
                        },
                        {
                            topic: "Performatividad",
                            q: "¿Qué es la performatividad según el contenido?",
                            options: ["Un proceso en el que expresiones se convierten en acciones y transforman la realidad", "Una forma de arte teatral", "Un método científico", "Una corriente religiosa"],
                            answerIndex: 0,
                            explain: "La performatividad consiste en un proceso en el que ciertas expresiones, con el tiempo, se convierten en acciones y transforman la realidad."
                        },
                        {
                            topic: "Actos ilocucionarios",
                            q: "¿Qué tipo de acto del habla implica una promesa o una orden?",
                            options: ["Perlocucionario", "Ilocucionario", "Declarativo", "Expresivo"],
                            answerIndex: 1,
                            explain: "Los actos ilocucionarios implican un accionar o compromiso por parte del emisor o receptor, como una promesa o una orden."
                        },
                        {
                            topic: "Actos perlocucionarios",
                            q: "¿Qué buscan generar los actos perlocucionarios?",
                            options: ["Una promesa", "Una orden", "Una modificación en el comportamiento o actitudes del oyente", "Una declaración de hechos"],
                            answerIndex: 2,
                            explain: "Los actos perlocucionarios buscan generar una modificación en el comportamiento o actitudes del oyente, como en una argumentación o debate."
                        },
                        {
                            topic: "La Mettrie",
                            q: "Según La Mettrie, ¿cómo era el hombre antes de la invención de las palabras?",
                            options: ["Un ser divino", "Un animal de su especie que no se distinguía del mono sino por mayor discernimiento", "Un ser puramente racional", "Un ángel caído"],
                            answerIndex: 1,
                            explain: "La Mettrie afirma que el hombre era 'un animal de su especie que no se distinguía del mono y de los demás animales sino como se distingue el mismo mono, por una fisonomía que anunciaba un mayor discernimiento'."
                        },
                        {
                            topic: "Experiencia humana",
                            q: "¿Qué permite el lenguaje en la experiencia humana?",
                            options: ["Solo comunicar información", "Materializar percepciones y significados en símbolos para mantener, modificar o reconstruir la realidad", "Crear arte", "Registrar historia"],
                            answerIndex: 1,
                            explain: "El lenguaje permite materializar percepciones y significados en forma de símbolos que intercambiamos para mantener, modificar o reconstruir nuestra realidad."
                        },
                        {
                            topic: "Performatividad",
                            q: "¿Qué permite la performatividad en relación con la experiencia humana?",
                            options: ["Mantenerla estática", "Recrear permanentemente la experiencia humana, nombrar nuevos sucesos y dar nuevos nombres", "Eliminar la diversidad", "Imponer una sola forma de ser humano"],
                            answerIndex: 1,
                            explain: "La performatividad permite la recreación permanente de la experiencia humana, posibilitando nombrar nuevos sucesos y darles nombres acordes al tiempo que vivimos."
                        },
                        {
                            topic: "Concepciones del ser humano",
                            q: "¿Cuáles son algunas de las concepciones del ser humano que han surgido a lo largo del tiempo?",
                            options: ["Ángel, demonio, héroe", "Animal, ser con razón, ser con espíritu, productor de cultura o proyecto hacia lo mejor", "Rey, súbdito, esclavo", "Cazador, recolector, agricultor"],
                            answerIndex: 1,
                            explain: "Han surgido distintas concepciones como animal, ser con razón, ser con espíritu, productor de cultura o un proyecto hacia lo mejor."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Comprender, cuestionar y valorar: análisis a profundidad de la experiencia humana",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Aspectos negativos de la experiencia humana",
                    desc: "Problematización de la experiencia humana desde discursos sobre maldad, violencia y corrupción.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Maldad",
                            q: "Según Zimbardo (2008), ¿en qué consiste la maldad?",
                            options: ["Solo en actos violentos", "En obrar deliberadamente dañando, maltratando o deshumanizando a inocentes, o usar autoridad para permitir que otros lo hagan", "En pensamientos negativos", "En la ausencia de bondad"],
                            answerIndex: 1,
                            explain: "Zimbardo define la maldad como obrar deliberadamente dañando a inocentes o usando la autoridad para permitir que otros actúen así en nuestro nombre."
                        },
                        {
                            topic: "Ciencia y tecnología",
                            q: "¿Cuál fue la primera ciudad en sufrir un bombardeo atómico en la historia?",
                            options: ["Tokio", "Nagasaki", "Hiroshima", "Osaka"],
                            answerIndex: 2,
                            explain: "Hiroshima sufrió el primer bombardeo atómico de la historia el 6 de agosto de 1945 por parte de Estados Unidos."
                        },
                        {
                            topic: "Chernobyl",
                            q: "¿En qué año ocurrió el accidente nuclear de Chernobyl?",
                            options: ["1986", "1979", "1991", "2001"],
                            answerIndex: 0,
                            explain: "El accidente de Chernobyl ocurrió el 26 de abril de 1986 en Ucrania."
                        },
                        {
                            topic: "Armas químicas",
                            q: "¿Qué gas utilizaron los alemanes en la Primera Guerra Mundial contra el ejército francés?",
                            options: ["Gas mostaza", "Fosgeno", "Cloro", "Ácido cianhídrico"],
                            answerIndex: 2,
                            explain: "En 1915, los alemanes esparcieron una nube de cloro altamente mortal sobre sus enemigos franceses."
                        },
                        {
                            topic: "Armas",
                            q: "¿Cuántas personas mueren aproximadamente al año por el uso indiscriminado de armas convencionales?",
                            options: ["100,000", "Medio millón", "Un millón", "50,000"],
                            answerIndex: 1,
                            explain: "Se calcula que medio millón de personas en todo el mundo muere por el uso indiscriminado de armas convencionales."
                        },
                        {
                            topic: "Ciberdelincuencia",
                            q: "¿Cuáles son dos factores que complican la lucha contra la ciberdelincuencia?",
                            options: ["La falta de leyes y la lentitud de internet", "El anonimato potencial del autor y los delitos ejecutados a distancia", "La falta de pruebas y la corrupción policial", "El alto costo y la falta de personal"],
                            answerIndex: 1,
                            explain: "El anonimato potencial del autor y los delitos ejecutados a distancia son dos factores que complican la lucha contra la ciberdelincuencia."
                        },
                        {
                            topic: "Violencia de género",
                            q: "¿En qué año se reconoció el feminicidio dentro del marco legal en México?",
                            options: ["2000", "2005", "2007", "2010"],
                            answerIndex: 2,
                            explain: "Fue hasta 2007 que en México se reconoció al feminicidio dentro del marco legal."
                        },
                        {
                            topic: "Corrupción",
                            q: "Según el Fondo Monetario Internacional (FMI), ¿qué porcentaje de inversión pierde una nación que no es transparente en sus procesos económicos y políticos?",
                            options: ["2%", "3%", "5%", "10%"],
                            answerIndex: 2,
                            explain: "El FMI señala que toda nación que no sea transparente en sus procesos económicos y políticos pierde un 5% en su nivel de inversión."
                        },
                        {
                            topic: "Delincuencia",
                            q: "Según el Índice de Datos de Impunidad en México (IGI-MEX) hasta 2018, ¿qué lugar ocupa México en América Latina en cuanto a impunidad?",
                            options: ["Segundo", "Tercero", "Quinto", "Primero"],
                            answerIndex: 3,
                            explain: "Hasta 2018, México está en el primer lugar de los países de América Latina en cuanto a impunidad."
                        },
                        {
                            topic: "Byung-Chul Han",
                            q: "¿Cómo describe Byung-Chul Han al hombre moderno en 'La Sociedad del Cansancio'?",
                            options: ["Como un héroe invencible", "Como un moderno Prometeo Cansado", "Como un sabio en equilibrio", "Como un ser plenamente realizado"],
                            answerIndex: 1,
                            explain: "Byung-Chul Han describe al hombre moderno como un 'moderno Prometeo Cansado' cuya existencia está saturada de fuerzas externas que lo rebasan y lo mantienen exhausto."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: La relación de la experiencia humana con otros seres",
                    desc: "Comprensión de fábulas, mitos, leyendas y la relación con seres no humanos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Fábula",
                            q: "¿Cuál es la intención principal de la fábula?",
                            options: ["Entretener", "Brindar una enseñanza (moraleja)", "Narrar hechos históricos", "Describir paisajes"],
                            answerIndex: 1,
                            explain: "La intención de la fábula es brindar una enseñanza, a la que se llama moraleja."
                        },
                        {
                            topic: "Prosopopeya",
                            q: "¿Qué es la prosopopeya?",
                            options: ["Una figura retórica que humaniza lo no humano o anima lo inanimado", "Un tipo de poema", "Una forma de narrar mitos", "Un estilo arquitectónico"],
                            answerIndex: 0,
                            explain: "La prosopopeya es una metáfora sensibilizadora 'en virtud de que lo no humano se humaniza, lo inanimado se anima'."
                        },
                        {
                            topic: "Esopo",
                            q: "¿Quién es uno de los mayores representantes de la fábula en la antigüedad?",
                            options: ["Homero", "Esopo", "Sófocles", "Aristófanes"],
                            answerIndex: 1,
                            explain: "Esopo, quien vivió alrededor del siglo VI a.C., es uno de los mayores representantes del género de la fábula."
                        },
                        {
                            topic: "Leyenda",
                            q: "¿Cuál es la función principal de la leyenda?",
                            options: ["Enseñar una moraleja", "Cohesionar a un grupo social estableciendo pertenencia", "Explicar el origen del universo", "Criticar al gobierno"],
                            answerIndex: 1,
                            explain: "La función principal de la leyenda es cohesionar a un grupo social, ayudando a establecer una noción de pertenencia en una comunidad."
                        },
                        {
                            topic: "Mito",
                            q: "Según Helena Beristáin, ¿qué tipo de acontecimientos narra el mito?",
                            options: ["Acontecimientos cotidianos", "Acontecimientos sagrados y primordiales ocurridos en el principio de los tiempos", "Sucesos históricos recientes", "Historias de ficción sin propósito"],
                            answerIndex: 1,
                            explain: "El mito narra 'acontecimientos sagrados y primordiales ocurridos en el principio de los tiempos entre seres de calidad superior: dioses y héroes arquetípicos'."
                        },
                        {
                            topic: "Mito",
                            q: "¿Para la sociedad que lo crea, el mito es considerado ficción?",
                            options: ["Sí, siempre es ficción", "No, porque ubica una realidad pasada y lo percibe como modelo para la actividad humana", "Depende del mito", "Solo cuando habla de dioses"],
                            answerIndex: 1,
                            explain: "El mito no es ficción para la sociedad que lo crea porque ubica una realidad pasada y lo percibe como un modelo para la actividad humana."
                        },
                        {
                            topic: "Derechos de los animales",
                            q: "¿Qué declaró la Declaración de Cambridge en 2012?",
                            options: ["Que los animales no sienten dolor", "Que no solo los humanos son capaces de sentir sufrimiento, sino también muchos animales", "Que los animales no tienen derechos", "Que la experimentación animal es ética"],
                            answerIndex: 1,
                            explain: "La Declaración de Cambridge estableció que no solo los seres humanos son capaces de sentir sufrimiento, sino también una cantidad importante de animales."
                        },
                        {
                            topic: "Derechos de los animales",
                            q: "¿En qué año fue proclamada la Declaración Universal de los Derechos del Animal?",
                            options: ["1948", "1968", "1978", "1988"],
                            answerIndex: 2,
                            explain: "La Declaración Universal de los Derechos del Animal fue proclamada en 1978."
                        },
                        {
                            topic: "Naturaleza",
                            q: "Según Marx, ¿qué relación tiene el ser humano con la naturaleza?",
                            options: ["Es independiente de ella", "Es parte de la naturaleza aunque tiene capacidad de regularla, generarla, alterarla y destruirla", "Es superior y dueño absoluto", "Es víctima indefensa"],
                            answerIndex: 1,
                            explain: "Para Marx, el ser humano es parte de la naturaleza aunque tiene la capacidad de regularla, generarla, alterarla y destruirla."
                        },
                        {
                            topic: "Subgéneros líricos",
                            q: "¿Cuál de los siguientes es un poema lírico menor?",
                            options: ["Oda", "Elegía", "Soneto", "Himno"],
                            answerIndex: 2,
                            explain: "El soneto es un poema lírico menor, junto con el madrigal, la redondilla, el romance, la copla y el epigrama."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: La experiencia humana actual",
                    desc: "Valoración de las relaciones que sostienen la experiencia humana actual.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Eurocentrismo",
                            q: "¿Qué es el eurocentrismo?",
                            options: ["Una corriente artística europea", "Una tendencia a considerar los valores y tradiciones europeas como universales y superiores", "Un movimiento político europeo", "Una religión europea"],
                            answerIndex: 1,
                            explain: "El eurocentrismo es una tendencia social a considerar los valores y tradiciones europeas como universales y, en muchos sentidos, superiores a los de otros pueblos y culturas."
                        },
                        {
                            topic: "Machismo",
                            q: "¿En qué consiste el machismo?",
                            options: ["En promover la igualdad de género", "En promover y reproducir conductas y creencias discriminatorias contra la mujer", "En una forma de arte", "En un sistema político"],
                            answerIndex: 1,
                            explain: "El machismo consiste en promover y reproducir conductas y creencias discriminatorias contra la mujer."
                        },
                        {
                            topic: "Patriarcado",
                            q: "¿Qué promueve el patriarcado?",
                            options: ["La igualdad entre hombres y mujeres", "Poner al hombre por encima de la mujer promoviendo la desigualdad estructural", "El matriarcado", "La democracia"],
                            answerIndex: 1,
                            explain: "El patriarcado pone muy por encima al hombre de la mujer, promoviendo la desigualdad estructural."
                        },
                        {
                            topic: "Byung-Chul Han",
                            q: "Según Byung-Chul Han, ¿qué caracteriza a la sociedad moderna?",
                            options: ["Exceso de negatividad", "Exceso de positividad, consumo y cultura del rendimiento", "Exceso de espiritualidad", "Exceso de comunidad"],
                            answerIndex: 1,
                            explain: "Han critica a la sociedad moderna por someter a los individuos a un bombardeo constante de exceso de positividad, consumo, vida pornográfica y cultura del rendimiento."
                        },
                        {
                            topic: "Autoexplotación",
                            q: "Para Byung-Chul Han, el individuo moderno es un sujeto de:",
                            options: ["Libertad plena", "Autoexplotación", "Realización total", "Descanso perpetuo"],
                            answerIndex: 1,
                            explain: "Han describe al 'Prometeo moderno' como un sujeto de autoexplotación, encerrado en la idea de una aparente libertad individual."
                        },
                        {
                            topic: "La Sociedad del Cansancio",
                            q: "¿Qué ha dejado como resultado la sociedad del cansancio según Han?",
                            options: ["Individuos felices y realizados", "Una sociedad de individuos exhaustos atrapados en la ilusión de libertad y éxito", "Una sociedad igualitaria", "Una sociedad sin tecnología"],
                            answerIndex: 1,
                            explain: "La sociedad del cansancio ha dejado individuos exhaustos, atrapados en la ilusión de libertad y éxito pero sin tiempo ni energía para disfrutarlo."
                        },
                        {
                            topic: "Positividad",
                            q: "¿Qué tipo de exceso critica Byung-Chul Han en la sociedad contemporánea?",
                            options: ["Exceso de negatividad", "Exceso de positividad", "Exceso de neutralidad", "Exceso de crítica"],
                            answerIndex: 1,
                            explain: "Han critica el exceso de positividad, que somete a los individuos a un bombardeo constante de estímulos y exigencias."
                        },
                        {
                            topic: "Prometeo cansado",
                            q: "¿A qué figura mitológica compara Byung-Chul Han con el hombre moderno?",
                            options: ["Sísifo", "Prometeo", "Edipo", "Aquiles"],
                            answerIndex: 1,
                            explain: "Han compara al hombre moderno con un 'moderno Prometeo Cansado', exhausto por las fuerzas externas y la autoexplotación."
                        },
                        {
                            topic: "Cultura del rendimiento",
                            q: "¿Qué imperativos mantienen al individuo moderno en autoexplotación?",
                            options: ["Imperativos religiosos", "Imperativos de autorrealización, sobreproducción y cultura del rendimiento", "Imperativos militares", "Imperativos familiares"],
                            answerIndex: 1,
                            explain: "Los imperativos de autorrealización, sobreproducción y cultura del rendimiento mantienen al individuo en un estado de autoexplotación."
                        },
                        {
                            topic: "Crítica social",
                            q: "¿Cuál es la postura de Byung-Chul Han frente a la tecnología y redes sociales?",
                            options: ["Las celebra sin reservas", "Las ignora", "Critica la sobreexposición a la tecnología, las redes sociales y las imágenes", "Propone eliminarlas completamente"],
                            answerIndex: 2,
                            explain: "Han critica la sobreexposición a la tecnología, las redes sociales y las imágenes como parte del bombardeo constante que satura la existencia moderna."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Hacia una experiencia humana más justa y digna",
            actividades: {
                act1: {
                    nombre: "Actividad 1: La experiencia individual frente a la experiencia colectiva",
                    desc: "Enunciación de la propia concepción en relación con la experiencia humana local.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Sócrates",
                            q: "¿Cómo se llama el método socrático que consiste en hacer preguntas para llegar a la verdad?",
                            options: ["Dialéctica", "Mayéutica", "Eristica", "Aletheia"],
                            answerIndex: 1,
                            explain: "La mayéutica es el método socrático que significa 'el arte de dar a luz ideas', mediante preguntas que llevan al interlocutor a descubrir la verdad."
                        },
                        {
                            topic: "Aristóteles",
                            q: "¿Qué es la eudaimonía para Aristóteles?",
                            options: ["La riqueza", "La felicidad como bien que buscan los seres humanos por naturaleza", "El poder", "El placer inmediato"],
                            answerIndex: 1,
                            explain: "La eudaimonía es la noción griega de felicidad como el bien que buscan por naturaleza los seres humanos, centrada en el buen vivir."
                        },
                        {
                            topic: "Aristóteles",
                            q: "Según Aristóteles, ¿dónde reside el verdadero placer para el ser humano?",
                            options: ["En los placeres corporales", "En la riqueza", "En el ejercicio de la razón", "En la fama"],
                            answerIndex: 2,
                            explain: "Aristóteles afirma que el placer verdadero reside en la realización de la esencia propia, en el perfecto funcionamiento de aquello que nos distingue: la razón."
                        },
                        {
                            topic: "Juicio valorativo",
                            q: "¿Qué es un juicio valorativo?",
                            options: ["Una afirmación objetiva y comprobable", "La acción de juzgar basada en ideas, valores personales, creencias y experiencias", "Una hipótesis científica", "Un hecho matemático"],
                            answerIndex: 1,
                            explain: "Un juicio valorativo es la acción que realiza una persona acerca de algo o alguien como resultado de sus ideas, valores, creencias y experiencias."
                        },
                        {
                            topic: "Estereotipo",
                            q: "¿Qué significa etimológicamente la palabra 'estereotipo'?",
                            options: ["Imagen cambiante", "Sólido + impresión o molde", "Idea nueva", "Pensamiento libre"],
                            answerIndex: 1,
                            explain: "Estereotipo proviene del griego 'stereós' (sólido) y 'týpos' (impresión o molde), refiriéndose a imágenes o modelos inmutables atribuidos a grupos sociales."
                        },
                        {
                            topic: "Juicio de hecho",
                            q: "¿Cuál es un ejemplo de juicio de hecho?",
                            options: ["Los fumadores son adictos", "Fumar daña la salud", "Fumar es un vicio", "Los fumadores son vagos"],
                            answerIndex: 1,
                            explain: "'Fumar daña la salud' es un juicio de hecho porque su veracidad se puede comprobar experimentalmente, a diferencia de los juicios valorativos."
                        },
                        {
                            topic: "Sócrates",
                            q: "¿Qué relación establece Sócrates entre el mal y la ignorancia?",
                            options: ["Son independientes", "El mal es la ignorancia", "La ignorancia es un bien", "No existe relación"],
                            answerIndex: 1,
                            explain: "Para Sócrates, la sabiduría lleva al bien, mientras que el mal es producto de la ignorancia."
                        },
                        {
                            topic: "Aristóteles",
                            q: "¿Cómo se llamaban los alumnos de Aristóteles en el Liceo?",
                            options: ["Estoicos", "Epicúreos", "Peripatéticos", "Cínicos"],
                            answerIndex: 2,
                            explain: "Los alumnos de Aristóteles eran llamados peripatéticos o paseantes, porque enseñaba recorriendo los jardines del Liceo."
                        },
                        {
                            topic: "Finitud del conocimiento",
                            q: "¿Qué frase de Sócrates expresa la finitud del conocimiento humano?",
                            options: ["El hombre es la medida de todas las cosas", "Solo sé que no sé nada", "Conócete a ti mismo", "La virtud es conocimiento"],
                            answerIndex: 1,
                            explain: "La frase 'Solo sé que no sé nada' expresa el reconocimiento socrático de que no podemos saberlo todo."
                        },
                        {
                            topic: "Virtud",
                            q: "Para Aristóteles, la virtud es algo que podemos:",
                            options: ["Comprar", "Aprender y desarrollar mediante la actividad racional", "Heredar", "Ignorar sin consecuencias"],
                            answerIndex: 1,
                            explain: "Aristóteles concibe la virtud como algo que podemos aprender y desarrollar mediante nuestra actividad racional."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Coexistencia en la diversidad",
                    desc: "Argumentación sobre la inclusión de seres no humanos, muertos y cosas en la experiencia humana.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Cultura",
                            q: "Según el sociólogo William Graham Summer, ¿qué es el etnocentrismo?",
                            options: ["Apreciar todas las culturas por igual", "La tendencia a creer que nuestra propia cultura es superior a las demás", "El estudio de las culturas", "La mezcla de culturas"],
                            answerIndex: 1,
                            explain: "Summer acuñó el término etnocentrismo para referirse a la tendencia de creer que nuestra cultura y forma de vida propia es superior a las demás."
                        },
                        {
                            topic: "Relativismo cultural",
                            q: "¿Qué propone el relativismo cultural para comprender otras culturas?",
                            options: ["Juzgar desde nuestra propia cultura", "Observar el comportamiento desde la perspectiva de su propia cultura con neutralidad valorativa", "Imponer nuestra cultura", "Ignorar las diferencias"],
                            answerIndex: 1,
                            explain: "El relativismo cultural propone observar el comportamiento de las personas a partir de su propia cultura empleando una neutralidad valorativa."
                        },
                        {
                            topic: "Cultura material",
                            q: "¿Qué comprende la cultura material según William Ogburn?",
                            options: ["Costumbres e ideologías", "Objetos físicos, materiales y tecnológicos de la vida cotidiana", "Solo el arte", "Las creencias religiosas"],
                            answerIndex: 1,
                            explain: "La cultura material comprende objetos físicos, materiales y tecnológicos de nuestra vida cotidiana."
                        },
                        {
                            topic: "Retraso cultural",
                            q: "¿Qué es el retraso cultural según Ogburn?",
                            options: ["El avance de la tecnología", "El desajuste para adaptar la cultura no material a los cambios en la cultura material", "La pérdida de tradiciones", "El fin de la cultura"],
                            answerIndex: 1,
                            explain: "Ogburn emplea el término retraso cultural para aludir al desajuste para adaptar la cultura no material (intangible) a las nuevas situaciones materiales."
                        },
                        {
                            topic: "Subcultura",
                            q: "¿Qué es una subcultura?",
                            options: ["La cultura dominante", "Un grupo social que comparte ideas, costumbres y valores diferentes al resto de la sociedad", "Una religión", "Un partido político"],
                            answerIndex: 1,
                            explain: "Una subcultura es un grupo o segmento social que comparte ideas, costumbres, lenguaje, valores y comportamientos diferentes al resto de la sociedad."
                        },
                        {
                            topic: "Contracultura",
                            q: "¿Qué caracteriza a la contracultura?",
                            options: ["Apoyar la cultura dominante", "Oponerse a ciertos aspectos de la cultura dominante", "Ser indiferente a la cultura", "Promover el consumismo"],
                            answerIndex: 1,
                            explain: "La contracultura se refiere a subculturas que se oponen a ciertos aspectos de la cultura dominante."
                        },
                        {
                            topic: "San Agustín",
                            q: "Según San Agustín, ¿qué relación existe entre la duda y la existencia?",
                            options: ["La duda anula la existencia", "El que duda, vive", "La duda es irrelevante", "Dudar es pecado"],
                            answerIndex: 1,
                            explain: "San Agustín afirmaba que 'el que duda, vive', revelando la existencia a través de la duda."
                        },
                        {
                            topic: "Santo Tomás de Aquino",
                            q: "¿Qué postura tiene Santo Tomás de Aquino sobre la relación entre fe y razón?",
                            options: ["Son incompatibles", "No existe separación, son compatibles", "La razón es superior a la fe", "La fe es superior a la razón"],
                            answerIndex: 1,
                            explain: "Para Santo Tomás, no existe separación entre fe y razón; hay diferencia pero son compatibles."
                        },
                        {
                            topic: "Santo Tomás de Aquino",
                            q: "Según Santo Tomás, ¿cómo fue creado el mundo?",
                            options: ["Por evolución", "De la nada por Dios", "Siempre existió", "Por casualidad"],
                            answerIndex: 1,
                            explain: "Santo Tomás sostiene que el mundo se creó de la nada y Dios es el causante (creación de la nada)."
                        },
                        {
                            topic: "Filosofía medieval",
                            q: "¿En qué dos periodos se divide la filosofía medieval?",
                            options: ["Antigua y moderna", "Patrística y escolástica", "Griega y romana", "Renacentista e ilustrada"],
                            answerIndex: 1,
                            explain: "La filosofía medieval se divide en dos periodos: la patrística (padres de la iglesia) y la escolástica (filosofía de las escuelas)."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Concebir, expresar y evaluar una experiencia humana más allá de la conocida",
                    desc: "Hipótesis sobre una mejor experiencia humana.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Antigüedad",
                            q: "¿Qué acontecimiento marca el inicio del período de la Antigüedad?",
                            options: ["La caída de Roma", "El nacimiento de Cristo", "La aparición de la escritura", "La invención de la rueda"],
                            answerIndex: 2,
                            explain: "El acontecimiento que marca el inicio del período de la Antigüedad es la aparición de la escritura."
                        },
                        {
                            topic: "Épica de Gilgamesh",
                            q: "¿Cuál es considerado el texto literario más antiguo de la Antigüedad?",
                            options: ["La Ilíada", "La Odisea", "La Épica de Gilgamesh", "El Poema de la Creación"],
                            answerIndex: 2,
                            explain: "La Épica de Gilgamesh, de la civilización mesopotámica, es considerado el texto literario más antiguo."
                        },
                        {
                            topic: "Homero",
                            q: "¿Cuáles son las dos grandes obras épicas atribuidas a Homero?",
                            options: ["Teogonía y Trabajos y días", "Ilíada y Odisea", "Eneida y Metamorfosis", "Edipo Rey y Antígona"],
                            answerIndex: 1,
                            explain: "Homero es el autor de las dos grandes obras épicas de la literatura griega: la Ilíada y la Odisea."
                        },
                        {
                            topic: "Democracia directa",
                            q: "¿En qué consiste la democracia directa?",
                            options: ["En elegir representantes", "En que los ciudadanos participan de manera soberana directamente en las decisiones", "En un gobierno militar", "En una dictadura"],
                            answerIndex: 1,
                            explain: "La democracia directa es el ejercicio de elección realizado directamente por los ciudadanos, también conocida como democracia pura."
                        },
                        {
                            topic: "Discriminación",
                            q: "¿Cuál es el origen etimológico de la palabra 'discriminación'?",
                            options: ["Del griego 'demos'", "Del latín 'discriminatio' que significa separación o distinción", "Del francés 'discrimer'", "Del inglés 'discrimination'"],
                            answerIndex: 1,
                            explain: "Discriminación proviene del latín 'discriminatio', que equivale a separación o distinción."
                        },
                        {
                            topic: "Anomia",
                            q: "Según Émile Durkheim, ¿qué es la anomia?",
                            options: ["La falta de leyes", "El debilitamiento de la moral común cuando no constriñe al individuo", "La felicidad social", "La solidaridad mecánica"],
                            answerIndex: 1,
                            explain: "Durkheim entendía por anomia el debilitamiento de la moral común, cuando esta no constriñe lo suficiente al individuo."
                        },
                        {
                            topic: "Nietzsche",
                            q: "Según Nietzsche, ¿qué representa la figura del león en el nihilismo?",
                            options: ["La aceptación resignada", "El nihilismo activo, la capacidad destructiva para transmutar valores", "El nihilismo pasivo", "La muerte de Dios"],
                            answerIndex: 1,
                            explain: "El león representa el nihilismo activo por su agresividad y capacidad destructiva, necesaria para la transmutación de valores."
                        },
                        {
                            topic: "Nihilismo",
                            q: "¿Qué significa 'nihilismo' etimológicamente?",
                            options: ["Creer en todo", "Nada (nihil) - asociado a quien no cree en nada", "Todo es posible", "La nada divina"],
                            answerIndex: 1,
                            explain: "Nihilismo proviene del latín 'nihil' que significa 'nada', asociado a alguien que no cree en nada desde un plano filosófico."
                        },
                        {
                            topic: "Superhombre",
                            q: "¿Qué propone Nietzsche como resultado de la transmutación de valores?",
                            options: ["El ángel", "El superhombre", "El santo", "El sabio"],
                            answerIndex: 1,
                            explain: "Nietzsche propone que del nihilismo activo surge el superhombre, un hombre diferente con una nueva moral y el 'sentido de la tierra'."
                        },
                        {
                            topic: "Cambio social",
                            q: "Para Karl Marx, ¿cuál es el motor histórico del cambio social?",
                            options: ["La religión", "La lucha de clases", "La tecnología", "La educación"],
                            answerIndex: 1,
                            explain: "Marx establece que el motor histórico del cambio social está determinado por la lucha de clases, especialmente entre burguesía y proletariado."
                        }
                    ]
                }
            }
        }
    }
};

export default humanidadesIII;