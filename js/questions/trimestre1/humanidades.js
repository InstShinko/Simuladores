// ============================================
// HUMANIDADES I - TRIMESTRE 1
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const humanidades1 = {
    id: "humanidades1",
    nombre: "HUMANIDADES I",
    icono: "📚",
    descripcion: "Filosofía, ética, identidad, sociedad y desarrollo humano",
    modulos: {
        // ========== MÓDULO 1: PERCEPCIÓN DE UNO MISMO ==========
        modulo1: {
            nombre: "Módulo 1: Percepción de uno mismo",
            actividades: {
                // ACTIVIDAD 1: Filosofía, Sócrates, pasión, identidad y sociedad
                act1: {
                    nombre: "Actividad 1: Filosofía, identidad y sociedad",
                    desc: "Filosofía vs ciencia vs religión, Sócrates, pasión y vicio, construcción del yo, identidad y teorías sociales",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Saberes",
                            q: "¿Cómo se denomina el saber obtenido por prejuicios y certezas adquiridas mediante la cotidianidad?",
                            options: [
                                "Saber científico",
                                "Saber filosófico",
                                "Saber vulgar o sentido común",
                                "Saber teológico"
                            ],
                            answerIndex: 2,
                            explain: "El saber vulgar o sentido común se obtiene por prejuicios y certezas adquiridas mediante las experiencias de la vida cotidiana. Es conformista, acrítico y no reflexivo."
                        },
                        {
                            topic: "Saberes",
                            q: "¿Qué tipo de conocimiento indaga y busca sustentar mediante la observación y experimentación?",
                            options: [
                                "Saber vulgar",
                                "Saber científico",
                                "Saber filosófico",
                                "Saber mítico"
                            ],
                            answerIndex: 1,
                            explain: "El saber científico indaga y busca sustentar el conocimiento mediante la observación y experimentación. Es un conocimiento más profundo, basado en la ciencia."
                        },
                        {
                            topic: "Filosofía",
                            q: "¿Cuál es una característica del saber filosófico?",
                            options: [
                                "Es conformista y acrítico",
                                "Se basa en la experimentación",
                                "Posee una visión integradora de la realidad",
                                "Depende de prejuicios"
                            ],
                            answerIndex: 2,
                            explain: "El saber filosófico posee una visión integradora de la realidad por completo, busca la raíz de la realidad desde todos los sentidos."
                        },
                        {
                            topic: "Sócrates",
                            q: "¿Qué método filosófico desarrolló Sócrates inspirado en el oficio de su madre?",
                            options: [
                                "La dialéctica",
                                "La mayéutica",
                                "El empirismo",
                                "El racionalismo"
                            ],
                            answerIndex: 1,
                            explain: "Sócrates aprendió de su madre, que era comadrona, el 'arte de la comadrona', ahora conocido como mayéutica, que consiste en hacer preguntas para llegar al conocimiento."
                        },
                        {
                            topic: "Sócrates",
                            q: "¿Qué frase célebre resume la ironía socrática?",
                            options: [
                                "Pienso, luego existo",
                                "Sólo sé que no sé nada",
                                "Conócete a ti mismo",
                                "La virtud es conocimiento"
                            ],
                            answerIndex: 1,
                            explain: "Sócrates afirmaba 'sólo sé que no sé nada', mostrando la ironía que utilizaba como instrumento educativo."
                        },
                        {
                            topic: "Virtud",
                            q: "¿Cuál de las siguientes NO es una proposición de la moral socrática?",
                            options: [
                                "La virtud es lo mismo que el conocimiento",
                                "El vicio es ignorancia",
                                "Nadie hace el mal voluntariamente",
                                "El placer es el bien supremo"
                            ],
                            answerIndex: 3,
                            explain: "La moral socrática sostiene: la virtud es conocimiento, el vicio es ignorancia y nadie hace el mal voluntariamente. El placer como bien supremo es una idea del hedonismo."
                        },
                        {
                            topic: "Pasión",
                            q: "Según Aristóteles, ¿qué componentes tienen las emociones?",
                            options: [
                                "Biológico y psicológico",
                                "Cognitivo y social",
                                "Racional e irracional",
                                "Individual y colectivo"
                            ],
                            answerIndex: 1,
                            explain: "Aristóteles señala que las emociones tienen un componente cognitivo (relación con un argumento razonado) y un componente social (relación interpersonal entre seres humanos)."
                        },
                        {
                            topic: "Individuo",
                            q: "¿Qué significa etimológicamente la palabra 'individuo'?",
                            options: [
                                "Que se puede dividir",
                                "Que no se puede dividir",
                                "Que está aislado",
                                "Que pertenece a un grupo"
                            ],
                            answerIndex: 1,
                            explain: "Individuo proviene del latín 'individuus' que significa 'que no se puede dividir' o 'unidad independiente'."
                        },
                        {
                            topic: "Yo social",
                            q: "¿Quién desarrolló la teoría del 'yo espejo'?",
                            options: [
                                "George Mead",
                                "Sigmund Freud",
                                "Charles Cooley",
                                "Jean Piaget"
                            ],
                            answerIndex: 2,
                            explain: "Charles Cooley desarrolló la teoría del 'yo espejo', que sostiene que los individuos aprendemos quiénes somos a partir de la interacción con otros."
                        },
                        {
                            topic: "Identidad",
                            q: "¿Qué es la identidad según el texto?",
                            options: [
                                "El nombre de una persona",
                                "Rasgos que diferencian a un individuo de otros",
                                "La nacionalidad de una persona",
                                "El lugar donde se nace"
                            ],
                            answerIndex: 1,
                            explain: "Identidad proviene del latín 'identitas' y se refiere a los rasgos o características que diferencian a un individuo o grupos de individuos del resto."
                        }
                    ]
                },
                // ACTIVIDAD 2: Juicios valorativos, funciones del lenguaje, doxa y episteme
                act2: {
                    nombre: "Actividad 2: Juicios valorativos y lenguaje",
                    desc: "Juicios de hecho vs juicios de valor, estereotipos, funciones del lenguaje, doxa y episteme",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Juicios",
                            q: "¿Qué es un juicio valorativo?",
                            options: [
                                "Una afirmación comprobable científicamente",
                                "La acción que realiza una persona acerca de algo o alguien basada en sus ideas y valores",
                                "Una hipótesis científica",
                                "Un hecho objetivo"
                            ],
                            answerIndex: 1,
                            explain: "Un juicio valorativo es la acción que realiza una persona acerca de algo o alguien, como resultado de sus ideas, valores personales, creencias, experiencias y entornos."
                        },
                        {
                            topic: "Juicios",
                            q: "¿Qué son los estereotipos?",
                            options: [
                                "Hechos comprobables",
                                "Imágenes o ideas asociadas a un grupo social",
                                "Teorías científicas",
                                "Funciones del lenguaje"
                            ],
                            answerIndex: 1,
                            explain: "Los estereotipos son la imagen, idea o modelo, generalmente asociado a un grupo social, atribuido a sus conductas, cualidades y habilidades."
                        },
                        {
                            topic: "Juicios",
                            q: "¿Cuál es un ejemplo de juicio de hecho?",
                            options: [
                                "Los fumadores son adictos",
                                "Fumar daña la salud",
                                "Persona vaga por fumar",
                                "El cigarro es malo"
                            ],
                            answerIndex: 1,
                            explain: "'Fumar daña la salud' es un juicio de hecho, cuya veracidad se puede comprobar experimentalmente y tiene validez universal."
                        },
                        {
                            topic: "Funciones del lenguaje",
                            q: "¿Qué función del lenguaje utiliza el emisor para hablar de sí mismo y dar a conocer sus ideas?",
                            options: [
                                "Función referencial",
                                "Función poética",
                                "Función emotiva o expresiva",
                                "Función metalingüística"
                            ],
                            answerIndex: 2,
                            explain: "La función emotiva, expresiva o sintomática se da cuando el emisor habla de sí mismo, de su sentir personal, da a conocer sus ideas y utiliza la primera persona."
                        },
                        {
                            topic: "Funciones del lenguaje",
                            q: "¿Qué función del lenguaje busca influir en el comportamiento del receptor?",
                            options: [
                                "Función instrumental",
                                "Función reflexiva",
                                "Función poética",
                                "Función referencial"
                            ],
                            answerIndex: 0,
                            explain: "La función instrumental intenta influir en el estado de ánimo, actuar y comportamiento del receptor, con el fin de lograr un objetivo particular."
                        },
                        {
                            topic: "Funciones del lenguaje",
                            q: "¿Qué función del lenguaje invita a la autorreflexión y autocrítica?",
                            options: [
                                "Función metalingüística",
                                "Función reflexiva",
                                "Función poética",
                                "Función referencial"
                            ],
                            answerIndex: 1,
                            explain: "La función reflexiva invita a la autorreflexión y autocrítica, al cuestionamiento personal de la manera de expresión y relación con las demás personas."
                        },
                        {
                            topic: "Funciones del lenguaje",
                            q: "¿Qué función del lenguaje se utiliza cuando se habla del idioma mismo?",
                            options: [
                                "Función poética",
                                "Función emotiva",
                                "Función metalingüística",
                                "Función instrumental"
                            ],
                            answerIndex: 2,
                            explain: "La función metalingüística se utiliza cuando se emplea la lengua para hablar de ella misma, con el fin de aclarar ciertos aspectos del código empleado."
                        },
                        {
                            topic: "Epistemología",
                            q: "¿Qué es la doxa?",
                            options: [
                                "Conocimiento científico",
                                "Creencia u opinión no comprobada",
                                "Saber técnico",
                                "Verdad absoluta"
                            ],
                            answerIndex: 1,
                            explain: "La doxa se refiere a los saberes que se presentan como juicios subjetivos que pueden ser creencias, opiniones, algo que no está comprobado, también llamado conocimiento vulgar."
                        },
                        {
                            topic: "Epistemología",
                            q: "¿Qué es la episteme?",
                            options: [
                                "Conocimiento vulgar",
                                "Creencia religiosa",
                                "Conocimiento científico",
                                "Opinión personal"
                            ],
                            answerIndex: 2,
                            explain: "La episteme se refiere al auténtico conocimiento científico, también concebido como techne o habilidad para hacer algo."
                        },
                        {
                            topic: "Funciones del lenguaje",
                            q: "¿Qué función del lenguaje expresa la realidad del entorno y es característica de textos científicos?",
                            options: [
                                "Función emotiva",
                                "Función poética",
                                "Función referencial o informativa",
                                "Función instrumental"
                            ],
                            answerIndex: 2,
                            explain: "La función referencial, representativa o informativa expresa la realidad que vive en su entorno. Es característica en los textos científicos cuyo objetivo es transmitir conocimiento."
                        }
                    ]
                },
                // ACTIVIDAD 3: Ética familiar, contexto social, tipos de conocimiento
                act3: {
                    nombre: "Actividad 3: Ética, conocimiento y sociedad",
                    desc: "Violencia familiar, tribus urbanas, igualdad y equidad, tipos de conocimiento, epistemología",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Violencia familiar",
                            q: "Según la CNDH, ¿cómo se define la violencia familiar?",
                            options: [
                                "Discusiones entre familiares",
                                "Acto de poder u omisión para dominar o agredir a un integrante de la familia",
                                "Falta de comunicación en el hogar",
                                "Diferencias de opinión"
                            ],
                            answerIndex: 1,
                            explain: "La CNDH define la violencia familiar como el acto de poder u omisión intencional, dirigido a dominar, someter, controlar o agredir física, verbal, psicoemocional o sexualmente a cualquier integrante de la familia."
                        },
                        {
                            topic: "Tribus urbanas",
                            q: "¿Qué tribu urbana surgió en los años 60 con el lema 'amor y paz'?",
                            options: [
                                "Heavies",
                                "Punks",
                                "Hippies",
                                "Reguetoneros"
                            ],
                            answerIndex: 2,
                            explain: "Los hippies, pertenecientes a los años 60, adoptaron un modo de vida comunitario, libre, activista, con el lema 'amor y paz'."
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
                            topic: "Igualdad y equidad",
                            q: "¿Cuál es la diferencia entre igualdad y equidad?",
                            options: [
                                "Son sinónimos",
                                "La igualdad reconoce el mismo trato; la equidad busca igualdad de oportunidades individuales",
                                "La igualdad es para minorías; la equidad es para todos",
                                "No hay diferencia"
                            ],
                            answerIndex: 1,
                            explain: "La igualdad reconoce que todos somos dignos de recibir el mismo trato; la equidad apunta a la igualdad de oportunidades individuales, considerando las diferencias."
                        },
                        {
                            topic: "Identidad de género",
                            q: "¿Cómo define la ONU la identidad de género?",
                            options: [
                                "El sexo biológico de nacimiento",
                                "La vivencia interna e individual del género",
                                "La orientación sexual",
                                "La expresión externa mediante vestimenta"
                            ],
                            answerIndex: 1,
                            explain: "La ONU define la identidad de género como la vivencia interna e individual tal como cada persona la experimenta, que podría corresponder o no con el sexo asignado al nacer."
                        },
                        {
                            topic: "Conocimiento",
                            q: "¿Qué tipo de conocimiento se basa en la fe y certeza de un ser supremo?",
                            options: [
                                "Conocimiento científico",
                                "Conocimiento empírico",
                                "Conocimiento religioso",
                                "Conocimiento intuitivo"
                            ],
                            answerIndex: 2,
                            explain: "El conocimiento religioso se basa en la fe y certeza de que el mundo fue creado por un ser supremo, con un sistema de creencias incuestionables."
                        },
                        {
                            topic: "Conocimiento",
                            q: "¿Qué tipo de conocimiento es producto de la relación de los sentidos y las emociones con el mundo?",
                            options: [
                                "Conocimiento científico",
                                "Conocimiento intuitivo",
                                "Conocimiento filosófico",
                                "Conocimiento empírico"
                            ],
                            answerIndex: 1,
                            explain: "El conocimiento intuitivo es producto de la relación de los sentidos y las emociones con el mundo, es no sistematizado, no científico y no comprobable."
                        },
                        {
                            topic: "Epistemología",
                            q: "¿Qué estudia la epistemología?",
                            options: [
                                "Los valores morales",
                                "La producción y validación del conocimiento científico",
                                "El ser en general",
                                "La belleza y el arte"
                            ],
                            answerIndex: 1,
                            explain: "La epistemología es una disciplina filosófica que estudia las causas, fundamentos y métodos por los cuales se genera el conocimiento, en particular el científico."
                        },
                        {
                            topic: "Método científico",
                            q: "¿Cuál es una característica del método científico?",
                            options: [
                                "Es subjetivo",
                                "No puede verificarse",
                                "Es fáctico, parte de hechos reales",
                                "Se basa en dogmas"
                            ],
                            answerIndex: 2,
                            explain: "El método científico es fáctico, es decir, parte de hechos reales y tiene una referencia empírica."
                        },
                        {
                            topic: "Desigualdad social",
                            q: "¿Qué es la desigualdad social?",
                            options: [
                                "Igualdad de oportunidades",
                                "Situación de disparidad o desventaja de una porción de la ciudadanía",
                                "Distribución equitativa de recursos",
                                "Reconocimiento de derechos"
                            ],
                            answerIndex: 1,
                            explain: "La desigualdad social es la situación de disparidad o desventaja de alguna porción de la ciudadanía respecto a otras que se ven favorecidas injustamente."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: IDENTIFICARSE A SÍ MISMO CON SU ENTORNO ==========
        modulo2: {
            nombre: "Módulo 2: Identificarse a sí mismo con su entorno",
            actividades: {
                // ACTIVIDAD 1: Individuo, argumentos, silogismos, falacias
                act1: {
                    nombre: "Actividad 1: Individuo, argumentos y falacias",
                    desc: "El ser individual, argumento, premisa, conclusión, silogismos, verdad y validez, falacias",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Individuo",
                            q: "Según Norbert Elías, ¿cómo vive el ser individual?",
                            options: [
                                "Aislado de la sociedad",
                                "En una red de interdependencia que no puede romper",
                                "Sin influencia social",
                                "Independiente totalmente"
                            ],
                            answerIndex: 1,
                            explain: "El ser individual vive en una red de interdependencia que él no puede romper ni modificar, dentro de un tejido de relaciones que dan forma a su carácter personal."
                        },
                        {
                            topic: "Argumento",
                            q: "¿Cuáles son las partes esenciales de un argumento?",
                            options: [
                                "Sujeto y predicado",
                                "Premisas y conclusión",
                                "Tesis y antítesis",
                                "Introducción y desarrollo"
                            ],
                            answerIndex: 1,
                            explain: "Un argumento es una estructura conformada por premisas (proposiciones que se afirman como apoyo) y conclusión (proposición que se sustenta con base en las premisas)."
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
                            topic: "Silogismo",
                            q: "¿Cuántos términos tiene un silogismo típico o categórico?",
                            options: [
                                "Dos términos",
                                "Tres términos",
                                "Cuatro términos",
                                "Cinco términos"
                            ],
                            answerIndex: 1,
                            explain: "El silogismo típico o categórico consta de tres términos: mayor, menor y medio."
                        },
                        {
                            topic: "Silogismo",
                            q: "¿Qué tipo de silogismo plantea una elección entre dos alternativas usando el conectivo 'o'?",
                            options: [
                                "Silogismo condicional",
                                "Silogismo disyuntivo",
                                "Dilema",
                                "Entimema"
                            ],
                            answerIndex: 1,
                            explain: "El silogismo disyuntivo tiene una premisa que es una disyunción, plantea una elección entre dos alternativas y se caracteriza por el uso del conectivo lógico 'o'."
                        },
                        {
                            topic: "Silogismo",
                            q: "¿Qué es un entimema?",
                            options: [
                                "Un silogismo con premisa compuesta",
                                "Un silogismo al que se le suprime una premisa por obvia",
                                "Un silogismo con tres premisas",
                                "Un silogismo con conclusión disyuntiva"
                            ],
                            answerIndex: 1,
                            explain: "El entimema es un silogismo típico al cual se le suprime una de las dos premisas por considerarla obvia y se llega directamente a la conclusión."
                        },
                        {
                            topic: "Verdad y validez",
                            q: "¿Qué propiedad tienen los argumentos cuando las premisas implican la conclusión?",
                            options: [
                                "Verdad",
                                "Validez",
                                "Solidez",
                                "Certera"
                            ],
                            answerIndex: 1,
                            explain: "La validez es una propiedad que tienen los argumentos cuando las premisas implican una conclusión. No tiene que ver con que el argumento sea cierto o no."
                        },
                        {
                            topic: "Falacias",
                            q: "¿Qué son las falacias?",
                            options: [
                                "Argumentos válidos",
                                "Razonamientos no válidos que parecen correctos",
                                "Premisas verdaderas",
                                "Conclusiones falsas"
                            ],
                            answerIndex: 1,
                            explain: "Las falacias son razonamientos no válidos o incorrectos, que dan apariencia de ser correctos sin serlo. Se utilizan para distinguir los razonamientos engañosos."
                        },
                        {
                            topic: "Falacias",
                            q: "¿Qué tipo de falacia ataca a la persona que argumenta en lugar del argumento?",
                            options: [
                                "Ad Baculum",
                                "Ad Hominem",
                                "Ad Verecundiam",
                                "Ad Populum"
                            ],
                            answerIndex: 1,
                            explain: "La falacia Ad Hominem consiste en no presentar razones adecuadas para debatir una posición, sino atacar, descalificar o desacreditar al individuo que la defiende."
                        },
                        {
                            topic: "Falacias",
                            q: "¿Qué falacia apela a la amenaza o la fuerza?",
                            options: [
                                "Ad Hominem",
                                "Ad Baculum",
                                "Ad Ignorantiam",
                                "Post Hoc"
                            ],
                            answerIndex: 1,
                            explain: "La falacia Ad Baculum (apelación al garrote) recurre a la amenaza, la fuerza o el miedo para establecer una conclusión, sin aportar razones válidas."
                        }
                    ]
                },
                // ACTIVIDAD 2: Alteridad, grupos sociales, funcionalismo, magia, religión, filosofía medieval
                act2: {
                    nombre: "Actividad 2: Alteridad, grupos sociales y pensamiento mágico-religioso",
                    desc: "Alteridad, grupos sociales, estructural funcionalismo, magia, religión, filosofía medieval y Sócrates",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Alteridad",
                            q: "¿Qué concepto antropológico se refiere al otro o lo extraño desde una postura de igualdad?",
                            options: [
                                "Otredad",
                                "Alteridad",
                                "Diversidad",
                                "Etnocentrismo"
                            ],
                            answerIndex: 1,
                            explain: "La alteridad señala aquello que es extraño y ajeno, pero desde una postura de igualdad, donde el otro contribuye al mejor entendimiento del ser humano."
                        },
                        {
                            topic: "Grupos sociales",
                            q: "¿Qué autor desarrolló la teoría del Estructural Funcionalismo?",
                            options: [
                                "Karl Marx",
                                "Max Weber",
                                "Talcott Parsons",
                                "Emile Durkheim"
                            ],
                            answerIndex: 2,
                            explain: "Talcott Parsons desarrolló el Estructural Funcionalismo, que sostiene que las sociedades son un sistema integrado de estructuras y funciones sociales."
                        },
                        {
                            topic: "Grupos sociales",
                            q: "Según Parsons, ¿cuáles son las cuatro funciones necesarias para que todo sistema se preserve?",
                            options: [
                                "Producción, distribución, consumo, inversión",
                                "Adaptación, alcanzar metas, integración, latencia",
                                "Educación, salud, vivienda, trabajo",
                                "Familia, escuela, estado, iglesia"
                            ],
                            answerIndex: 1,
                            explain: "Parsons definió cuatro funciones necesarias: adaptación, alcanzar metas, integración y latencia (motivación de los individuos)."
                        },
                        {
                            topic: "Rol y estatus",
                            q: "¿Qué es el rol en un grupo social?",
                            options: [
                                "La posición que ocupa un individuo",
                                "Las actividades que realiza un individuo según su función",
                                "El conjunto de normas del grupo",
                                "La identidad del grupo"
                            ],
                            answerIndex: 1,
                            explain: "El rol es la serie de actividades que realizan los individuos de acuerdo a su función dentro del sistema y su posición al interior de los grupos sociales."
                        },
                        {
                            topic: "Magia",
                            q: "¿Cuál es una característica del pensamiento mágico?",
                            options: [
                                "Es científico y comprobable",
                                "Es dogmático y requiere rituales",
                                "Es democrático y abierto",
                                "Es individual y privado"
                            ],
                            answerIndex: 1,
                            explain: "El pensamiento mágico es dogmático (creencias indiscutibles), requiere rituales (reglas establecidas), es privado y de dominio (ejerce poder sobre otros)."
                        },
                        {
                            topic: "Religión",
                            q: "¿Qué caracteriza al pensamiento religioso?",
                            options: [
                                "Se basa en la experimentación",
                                "Está ligado a la creencia en una divinidad",
                                "Es demostrable científicamente",
                                "Cambia constantemente"
                            ],
                            answerIndex: 1,
                            explain: "El pensamiento religioso está ligado a la creencia inmanente de una relación entre el hombre y Dios, con carácter dogmático y basado en la fe."
                        },
                        {
                            topic: "Filosofía medieval",
                            q: "¿En qué dos periodos se divide la filosofía medieval?",
                            options: [
                                "Antigua y moderna",
                                "Patrística y escolástica",
                                "Griega y romana",
                                "Racionalista y empirista"
                            ],
                            answerIndex: 1,
                            explain: "La filosofía medieval se divide en patrística (escritos de pastores y teólogos) y escolástica (profundización en la fe religiosa)."
                        },
                        {
                            topic: "Sócrates",
                            q: "¿A través de quiénes conocemos el pensamiento de Sócrates?",
                            options: [
                                "Sus propios escritos",
                                "Jenofonte y Platón",
                                "Aristóteles",
                                "Los sofistas"
                            ],
                            answerIndex: 1,
                            explain: "Sócrates no escribió nada, conocemos su pensamiento a través de sus discípulos: Jenofonte en 'Recuerdos de Sócrates' y Platón en sus 'Diálogos'."
                        },
                        {
                            topic: "Virtud socrática",
                            q: "¿Qué tipo de ciencia busca Sócrates?",
                            options: [
                                "Ciencia natural",
                                "Ciencia moral",
                                "Ciencia exacta",
                                "Ciencia experimental"
                            ],
                            answerIndex: 1,
                            explain: "La ciencia que busca Sócrates tiene importancia en la conducta de la vida tanto individual como social, es decir, una ciencia moral."
                        },
                        {
                            topic: "Grupos sociales",
                            q: "¿Qué es el estatus en un grupo social?",
                            options: [
                                "Las funciones del grupo",
                                "Las posiciones que ocupan los actores sociales",
                                "Las normas del grupo",
                                "Los valores compartidos"
                            ],
                            answerIndex: 1,
                            explain: "El estatus se refiere a las posiciones, es decir, los lugares que los actores sociales desempeñan en las estructuras que forman parte del sistema social."
                        }
                    ]
                },
                // ACTIVIDAD 3: Sociología, discriminación, normas de conducta
                act3: {
                    nombre: "Actividad 3: Sociología, discriminación y normas",
                    desc: "Aportes de la sociología, discriminación, derecho, normas de conducta (jurídicas, morales, sociales, religiosas)",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Sociología",
                            q: "¿Qué autor afirmó que 'la sociología es una ciencia que incomoda'?",
                            options: [
                                "Emile Durkheim",
                                "Max Weber",
                                "Pierre Bourdieu",
                                "Auguste Comte"
                            ],
                            answerIndex: 2,
                            explain: "Pierre Bourdieu consideraba la sociología como una ciencia que incomoda y un deporte de combate, porque devela cómo se estructuran las relaciones sociales."
                        },
                        {
                            topic: "Sociología",
                            q: "¿Qué concepto de Durkheim se refiere al debilitamiento de la moral común?",
                            options: [
                                "Solidaridad mecánica",
                                "Anomia",
                                "Hecho social",
                                "Conciencia colectiva"
                            ],
                            answerIndex: 1,
                            explain: "La anomia es el debilitamiento de un tipo de moral común, cuando la moral no constriñe lo suficiente al individuo y no distingue entre lo adecuado y lo inadecuado."
                        },
                        {
                            topic: "Discriminación",
                            q: "¿Qué significa etimológicamente 'discriminación'?",
                            options: [
                                "Igualdad",
                                "Separación o distinción",
                                "Unión",
                                "Integración"
                            ],
                            answerIndex: 1,
                            explain: "Discriminación proviene del latín 'discriminatio' que equivale a separación o distinción, y con el tiempo incorporó el significado de exclusión."
                        },
                        {
                            topic: "Discriminación",
                            q: "¿Qué autor analizó los modos de producción para comprender la discriminación económica?",
                            options: [
                                "Emile Durkheim",
                                "Max Weber",
                                "Karl Marx",
                                "Talcott Parsons"
                            ],
                            answerIndex: 2,
                            explain: "Karl Marx analizó los modos de producción (comunismo primitivo, esclavista, feudalista, capitalista) para comprender las relaciones sociales de producción y la lucha de clases."
                        },
                        {
                            topic: "Normas",
                            q: "¿Qué son las normas de conducta?",
                            options: [
                                "Leyes impuestas por el estado",
                                "Reglas establecidas para regular el comportamiento social",
                                "Mandamientos religiosos",
                                "Costumbres personales"
                            ],
                            answerIndex: 1,
                            explain: "Las normas son reglas establecidas por la sociedad para regular el comportamiento de sus integrantes al interactuar en el desarrollo de la vida comunitaria."
                        },
                        {
                            topic: "Normas",
                            q: "¿Qué característica tiene una norma autónoma?",
                            options: [
                                "Es impuesta por una institución",
                                "La persona la realiza por convicción personal",
                                "Tiene sanción estatal",
                                "Es bilateral"
                            ],
                            answerIndex: 1,
                            explain: "Una norma es autónoma cuando la persona que la realiza lo hace por convicción, es decir, establece sus propias pautas de conducta."
                        },
                        {
                            topic: "Normas jurídicas",
                            q: "¿Qué tipo de normas están expresadas en las leyes y son coercibles?",
                            options: [
                                "Normas morales",
                                "Normas sociales",
                                "Normas jurídicas",
                                "Normas religiosas"
                            ],
                            answerIndex: 2,
                            explain: "Las normas jurídicas se encuentran expresadas en las leyes, obligan a la comunidad a su cumplimiento y son coercibles (tienen sanción)."
                        },
                        {
                            topic: "Normas morales",
                            q: "¿Cuál es un ejemplo de norma moral?",
                            options: [
                                "No robar (ley)",
                                "Ser honesto",
                                "Ceder el asiento",
                                "Bautizarse"
                            ],
                            answerIndex: 1,
                            explain: "Ser honesto es una norma moral, ya que concierne al fuero interno y a la bondad o malicia de las acciones, sin implicar una sanción legal."
                        },
                        {
                            topic: "Normas sociales",
                            q: "¿Qué consecuencia tiene incumplir una norma social?",
                            options: [
                                "Sanción legal",
                                "Excomunión",
                                "Desaprobación social",
                                "Multa"
                            ],
                            answerIndex: 2,
                            explain: "Las normas sociales no tienen sanción legal ni religiosa; la persona que las incumple solo recibe la desaprobación de la sociedad."
                        },
                        {
                            topic: "Normas religiosas",
                            q: "¿A quiénes se aplican las normas religiosas?",
                            options: [
                                "A todos los ciudadanos",
                                "Solo a los seguidores de esa religión",
                                "A los funcionarios públicos",
                                "A los estudiantes"
                            ],
                            answerIndex: 1,
                            explain: "Las normas religiosas son establecidas por instituciones eclesiásticas y solo se aplican a los seguidores de esas religiones, no son obligatorias legalmente."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: CONSTRUCCIÓN DE LA COLECTIVIDAD ==========
        modulo3: {
            nombre: "Módulo 3: Construcción de la colectividad",
            actividades: {
                // ACTIVIDAD 1: Alienación, alteridad, funcionalismo, ética vs moral
                act1: {
                    nombre: "Actividad 1: Alienación, alteridad y ética",
                    desc: "Alienación, contexto social, alteridad, funcionalismo, diferencia entre ética y moral, normas de conducta",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Alienación",
                            q: "¿Qué filósofo trató la alienación como 'caída' (verfallen) en Ser y tiempo?",
                            options: [
                                "Karl Marx",
                                "Martin Heidegger",
                                "Jean-Paul Sartre",
                                "Friedrich Nietzsche"
                            ],
                            answerIndex: 1,
                            explain: "En Ser y tiempo (1927), Martin Heidegger trató la alienación acuñando la categoría 'caída' para referirse a la tendencia de la existencia humana a perderse en la inautenticidad."
                        },
                        {
                            topic: "Alteridad",
                            q: "¿Qué autor definió la alteridad como 'la categoría central de una pregunta antropológica específica'?",
                            options: [
                                "Malinowski",
                                "Krotz",
                                "Radcliffe-Brown",
                                "Durkheim"
                            ],
                            answerIndex: 1,
                            explain: "Krotz (1994) definió la alteridad como la categoría central de una pregunta antropológica específica, captando el fenómeno de lo humano de un modo especial."
                        },
                        {
                            topic: "Funcionalismo",
                            q: "¿Qué autor comparó la sociedad con un organismo vivo donde cada institución cumple una función?",
                            options: [
                                "Max Weber",
                                "Karl Marx",
                                "Emile Durkheim",
                                "Talcott Parsons"
                            ],
                            answerIndex: 2,
                            explain: "Durkheim, inspirado por Spencer, comparó la sociedad con un organismo complejo donde las instituciones cumplen funciones para la supervivencia del sistema."
                        },
                        {
                            topic: "Funcionalismo",
                            q: "¿Qué antropólogo desarrolló el concepto de 'necesidad' en el funcionalismo?",
                            options: [
                                "Radcliffe-Brown",
                                "Malinowski",
                                "Lévi-Strauss",
                                "Boas"
                            ],
                            answerIndex: 1,
                            explain: "Malinowski desarrolló el concepto de necesidad, distinguiendo entre necesidades básicas (metabolismo, reproducción) y derivadas (culturales)."
                        },
                        {
                            topic: "Ética y moral",
                            q: "¿Cuál es la diferencia entre ética y moral?",
                            options: [
                                "Son sinónimos",
                                "La moral estudia las normas; la ética cuestiona el porqué de esas normas",
                                "La ética es individual; la moral es social",
                                "No hay diferencia"
                            ],
                            answerIndex: 1,
                            explain: "La moral trabaja con las normas que dirigen la conducta en una sociedad; la ética cuestiona el porqué de esas normas en las diversas moralidades."
                        },
                        {
                            topic: "Ética",
                            q: "¿De qué palabra griega proviene 'ética'?",
                            options: [
                                "Mores",
                                "Ethos",
                                "Logos",
                                "Pathos"
                            ],
                            answerIndex: 1,
                            explain: "Ética viene de 'ethos', palabra griega que significa hábito y se asocia con nuestras prácticas como integrantes de determinada comunidad."
                        },
                        {
                            topic: "Moral",
                            q: "¿De qué palabra latina proviene 'moral'?",
                            options: [
                                "Ethos",
                                "Mores",
                                "Moralis",
                                "Mos"
                            ],
                            answerIndex: 1,
                            explain: "Moral viene de 'mores', palabra latina que significa costumbre."
                        },
                        {
                            topic: "Normas",
                            q: "¿Qué característica tienen las normas heterónomas?",
                            options: [
                                "Nacen de la convicción personal",
                                "Son impuestas por una institución o persona ajena",
                                "Solo aplican al interior del individuo",
                                "Son voluntarias"
                            ],
                            answerIndex: 1,
                            explain: "Las normas heterónomas son impuestas por algo ajeno al sujeto, es decir, creadas por una institución o persona y luego impuestas a la sociedad."
                        },
                        {
                            topic: "Normas",
                            q: "¿Qué tipo de normas son bilaterales?",
                            options: [
                                "Normas morales",
                                "Normas religiosas",
                                "Normas jurídicas",
                                "Normas sociales"
                            ],
                            answerIndex: 2,
                            explain: "Las normas jurídicas son bilaterales porque imponen derechos y obligaciones a un mismo sujeto."
                        },
                        {
                            topic: "Normas",
                            q: "¿Qué significa que una norma sea coercible?",
                            options: [
                                "Que se basa en la voluntad",
                                "Que tiene sanción impuesta por el Estado",
                                "Que es espontánea",
                                "Que es interior"
                            ],
                            answerIndex: 1,
                            explain: "Una norma es coercible cuando si el hombre no cumple, tendrá una sanción impuesta por el Estado aún en contra de su voluntad."
                        }
                    ]
                },
                // ACTIVIDAD 2: Idealismo alemán, lógica, argumentos, silogismos
                act2: {
                    nombre: "Actividad 2: Idealismo alemán y lógica",
                    desc: "Kant y el idealismo alemán, tipos de juicios, lógica, argumentos, silogismos, verdad y validez",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Kant",
                            q: "¿Cuál es una de las obras más representativas de Immanuel Kant?",
                            options: [
                                "El ser y la nada",
                                "Crítica de la razón pura",
                                "Así habló Zaratustra",
                                "El contrato social"
                            ],
                            answerIndex: 1,
                            explain: "Las obras más representativas de Kant son: Crítica de la razón pura, Crítica de la razón práctica y Crítica del juicio."
                        },
                        {
                            topic: "Juicios",
                            q: "¿Qué tipo de juicio kantiano se basa en el ejercicio de la razón pura y no depende de la experiencia?",
                            options: [
                                "Juicio a posteriori",
                                "Juicio a priori",
                                "Juicio sintético",
                                "Juicio analítico"
                            ],
                            answerIndex: 1,
                            explain: "El juicio a priori precede de la experiencia, no depende de ella, se basa en el ejercicio de la razón pura y es universal y necesario."
                        },
                        {
                            topic: "Juicios",
                            q: "¿Qué tipo de juicio es '3+4=7' según la clasificación kantiana?",
                            options: [
                                "Analítico a priori",
                                "Sintético a priori",
                                "Analítico a posteriori",
                                "Sintético a posteriori"
                            ],
                            answerIndex: 1,
                            explain: "3+4=7 es un juicio sintético a priori: da información nueva (sintético) y es universal y necesario sin depender de la experiencia (a priori)."
                        },
                        {
                            topic: "Lógica",
                            q: "¿Qué significa etimológicamente la palabra 'lógica'?",
                            options: [
                                "Ciencia",
                                "Palabra o pensamiento (logos)",
                                "Razón",
                                "Conocimiento"
                            ],
                            answerIndex: 1,
                            explain: "La palabra lógica viene del griego antiguo 'logos' que significa palabra, pensamiento, argumento, principio o razón."
                        },
                        {
                            topic: "Lógica",
                            q: "¿Qué autor definió la lógica como la clasificación de argumentos para separar los buenos de los malos?",
                            options: [
                                "Aristóteles",
                                "Charles Peirce",
                                "Bertrand Russell",
                                "Gödel"
                            ],
                            answerIndex: 1,
                            explain: "Charles Peirce consideraba que la lógica consiste en una clasificación de los argumentos donde aquellos que se consideren malos sean separados de aquellos que se consideren buenos."
                        },
                        {
                            topic: "Sistemas lógicos",
                            q: "¿Qué propiedad de un sistema lógico se refiere a la ausencia de contradicción?",
                            options: [
                                "Solidez",
                                "Completitud",
                                "Consistencia",
                                "Validez"
                            ],
                            answerIndex: 2,
                            explain: "La consistencia es la propiedad del sistema abstracto utilizado para deducir teoremas sin contradicción."
                        },
                        {
                            topic: "Argumento",
                            q: "¿Qué es el razonamiento según el texto?",
                            options: [
                                "La expresión escrita del argumento",
                                "Los procesos mentales para obtener un pensamiento",
                                "La conclusión del silogismo",
                                "Las premisas"
                            ],
                            answerIndex: 1,
                            explain: "El término razonamiento se utiliza para definir los procesos mentales utilizados para dar como resultado el pensamiento."
                        },
                        {
                            topic: "Silogismo",
                            q: "¿Qué tipo de silogismo encadena una serie de premisas donde el predicado de una pasa a ser sujeto de la siguiente?",
                            options: [
                                "Polisilogismo",
                                "Sorites",
                                "Epiquerema",
                                "Entimema"
                            ],
                            answerIndex: 1,
                            explain: "El silogismo sorites encadena una serie de premisas, donde el predicado de la primera premisa pasa a ser sujeto de la segunda y así sucesivamente."
                        },
                        {
                            topic: "Verdad y validez",
                            q: "¿Un argumento puede tener premisas verdaderas y conclusión verdadera pero ser inválido?",
                            options: [
                                "No, si las premisas son verdaderas el argumento es válido",
                                "Sí, como en el ejemplo de los planetas",
                                "Solo si la conclusión es falsa",
                                "Nunca"
                            ],
                            answerIndex: 1,
                            explain: "Un argumento puede tener premisas verdaderas y conclusión verdadera y aun así ser inválido, como en el ejemplo: 'Mercurio es planeta, Marte es planeta, por lo tanto Júpiter es planeta'."
                        },
                        {
                            topic: "Falacias",
                            q: "¿Qué falacia comete quien dice 'Nadie puede probar que no existen los extraterrestres; por lo tanto, existen'?",
                            options: [
                                "Ad Hominem",
                                "Ad Ignorantiam",
                                "Ad Populum",
                                "Post Hoc"
                            ],
                            answerIndex: 1,
                            explain: "La falacia Ad Ignorantiam apela a la ignorancia, defendiendo la verdad de una afirmación porque no se puede demostrar lo contrario."
                        }
                    ]
                },
                // ACTIVIDAD 3: Humanismo, inteligencias múltiples, proyecto de vida
                act3: {
                    nombre: "Actividad 3: Humanismo, inteligencias y proyecto de vida",
                    desc: "Abraham Maslow, pirámide de necesidades, autorrealización, inteligencias múltiples, intereses vocacionales, proyecto de vida",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Humanismo",
                            q: "¿Quién es el principal exponente de la perspectiva humanista?",
                            options: [
                                "Sigmund Freud",
                                "Abraham Maslow",
                                "Carl Rogers",
                                "Howard Gardner"
                            ],
                            answerIndex: 1,
                            explain: "Abraham Maslow es uno de los fundadores e impulsores de la Psicología Humanista."
                        },
                        {
                            topic: "Maslow",
                            q: "¿Qué propone la Pirámide de Maslow?",
                            options: [
                                "Los tipos de inteligencia",
                                "La jerarquía de las necesidades humanas",
                                "Las etapas del desarrollo cognitivo",
                                "Los estados de la conciencia"
                            ],
                            answerIndex: 1,
                            explain: "La Pirámide de Maslow o Jerarquía de las necesidades humanas expone las motivaciones que tiene el ser humano para actuar, ordenadas por su grado de importancia."
                        },
                        {
                            topic: "Autorrealización",
                            q: "¿Qué es la autorrealización según Maslow?",
                            options: [
                                "Cubrir necesidades básicas",
                                "Desarrollar todo el potencial humano",
                                "Tener experiencias cumbre",
                                "Alcanzar la felicidad momentánea"
                            ],
                            answerIndex: 1,
                            explain: "La autorrealización se da cuando el ser humano desarrolla todo su potencial, logrando ser lo que desea y alcanzando su satisfacción y felicidad."
                        },
                        {
                            topic: "Inteligencias múltiples",
                            q: "¿Quién desarrolló la teoría de las inteligencias múltiples?",
                            options: [
                                "Abraham Maslow",
                                "Howard Gardner",
                                "Jean Piaget",
                                "Lev Vygotsky"
                            ],
                            answerIndex: 1,
                            explain: "Howard Gardner, psicólogo de la Universidad de Harvard, desarrolló la teoría de las inteligencias múltiples en su obra 'Estructuras de la mente'."
                        },
                        {
                            topic: "Inteligencias múltiples",
                            q: "¿Qué inteligencia implica la capacidad de usar números y razonar adecuadamente?",
                            options: [
                                "Inteligencia lingüística",
                                "Inteligencia lógico-matemática",
                                "Inteligencia espacial",
                                "Inteligencia musical"
                            ],
                            answerIndex: 1,
                            explain: "La inteligencia lógico-matemática es la capacidad para usar los números de manera efectiva y razonar adecuadamente, incluyendo sensibilidad a esquemas y relaciones lógicas."
                        },
                        {
                            topic: "Inteligencias múltiples",
                            q: "¿Qué inteligencia se relaciona con la capacidad de entender a los demás?",
                            options: [
                                "Intrapersonal",
                                "Interpersonal",
                                "Corporal-kinestésica",
                                "Naturista"
                            ],
                            answerIndex: 1,
                            explain: "La inteligencia interpersonal es la capacidad de entender a los demás e interactuar eficazmente con ellos, incluyendo sensibilidad a expresiones faciales, voz y gestos."
                        },
                        {
                            topic: "Vocación",
                            q: "¿Qué significa etimológicamente 'vocación'?",
                            options: [
                                "Llamado",
                                "Habilidad",
                                "Interés",
                                "Destino"
                            ],
                            answerIndex: 0,
                            explain: "Vocación proviene etimológicamente de 'vox' y significa acción y efecto de vocare o llamar."
                        },
                        {
                            topic: "Madurez vocacional",
                            q: "¿Cuál es la situación óptima en la madurez vocacional?",
                            options: [
                                "Tener aptitudes sin interés",
                                "Tener interés sin aptitudes",
                                "Tener los mismos intereses y aptitudes",
                                "No tener ni interés ni aptitud"
                            ],
                            answerIndex: 2,
                            explain: "La situación más óptima es cuando el individuo tiene los mismos intereses y aptitudes, lo que permite una elección asertiva de la profesión."
                        },
                        {
                            topic: "Proyecto de vida",
                            q: "¿Qué es un proyecto de vida?",
                            options: [
                                "Un currículum vitae",
                                "Un escrito donde se plasman aspiraciones y metas",
                                "Un test de inteligencia",
                                "Una biografía"
                            ],
                            answerIndex: 1,
                            explain: "Un proyecto de vida es un escrito donde se plasman las aspiraciones y sueños, lo deseado a lograr, cómo se va a conseguir y qué se necesita para hacerlo."
                        },
                        {
                            topic: "Metas",
                            q: "¿Qué característica debe tener una meta según el acrónimo META?",
                            options: [
                                "Medible, Específica, Tiempo oportuno, Alcanzable",
                                "Mínima, Estricta, Técnica, Amplia",
                                "Moderada, Exacta, Total, Apropiada",
                                "Motivadora, Estructural, Temporal, Afectiva"
                            ],
                            answerIndex: 0,
                            explain: "Una meta debe ser Medible (establecer forma y grado), Específica (clara y precisa), con Tiempo oportuno (fecha de inicio y fin) y Alcanzable (factible y realista)."
                        }
                    ]
                }
            }
        }
    }
};

export default humanidades1;