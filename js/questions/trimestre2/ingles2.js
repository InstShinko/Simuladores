// ============================================
// INGLÉS II - SEGUNDO TRIMESTRE
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const ingles2 = {
    id: "ingles2",
    nombre: "INGLÉS II",
    icono: "🇬🇧",
    descripcion: "Presente continuo, pasado simple, comparativos, superlativos, futuro",
    modulos: {
        // ========== MÓDULO 1: IT'S RAINING ==========
        modulo1: {
            nombre: "Módulo 1: It's raining",
            actividades: {
                // ACTIVIDAD 1: Present Continuous (afirmativo, reglas)
                act1: {
                    nombre: "Actividad 1: Present Continuous - Affirmative",
                    desc: "Presente continuo en afirmativo, reglas ortográficas, vocabulario del clima",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Present Continuous",
                            q: "¿Para qué se usa el presente continuo (present continuous)?",
                            options: [
                                "Para hablar de rutinas diarias",
                                "Para acciones que están ocurriendo en el momento",
                                "Para hechos pasados",
                                "Para planes futuros"
                            ],
                            answerIndex: 1,
                            explain: "El presente continuo se usa para hablar de acciones o situaciones que están ocurriendo en el momento actual."
                        },
                        {
                            topic: "Formación",
                            q: "¿Cómo se forma el presente continuo?",
                            options: [
                                "Sujeto + will + verbo",
                                "Sujeto + verbo to be + verbo con -ing",
                                "Sujeto + verbo en pasado",
                                "Sujeto + have + verbo"
                            ],
                            answerIndex: 1,
                            explain: "El presente continuo se forma con el verbo to be como auxiliar y el verbo principal terminado en -ing."
                        },
                        {
                            topic: "Reglas -ing",
                            q: "¿Qué regla se aplica al verbo 'put' para formar el presente continuo?",
                            options: [
                                "Se añade -ing sin cambios",
                                "Se cambia la 'u' por 'i'",
                                "Se dobla la última consonante (putting)",
                                "Se elimina la 't'"
                            ],
                            answerIndex: 2,
                            explain: "Los verbos terminados en consonante + vocal acentuada + consonante doblan la última consonante: put → putting."
                        },
                        {
                            topic: "Reglas -ing",
                            q: "¿Cómo se forma el presente continuo del verbo 'lie'?",
                            options: [
                                "lieing",
                                "lying",
                                "lieing",
                                "lyeing"
                            ],
                            answerIndex: 1,
                            explain: "Los verbos terminados en 'ie' cambian a 'y' antes de añadir -ing: lie → lying."
                        },
                        {
                            topic: "Reglas -ing",
                            q: "¿Cómo se forma el presente continuo del verbo 'have'?",
                            options: [
                                "haveing",
                                "haveing",
                                "having",
                                "hieving"
                            ],
                            answerIndex: 2,
                            explain: "Los verbos terminados en vocal + consonante + e omiten la 'e' y añaden -ing: have → having."
                        },
                        {
                            topic: "Afirmativo",
                            q: "¿Cuál es la forma correcta de 'He (write) a letter' en presente continuo?",
                            options: [
                                "He writeing a letter",
                                "He is writing a letter",
                                "He are writing a letter",
                                "He be writing a letter"
                            ],
                            answerIndex: 1,
                            explain: "Para 'he' se usa 'is' + verbo+ing: He is writing a letter."
                        },
                        {
                            topic: "Afirmativo",
                            q: "¿Cuál es la forma correcta de 'They (play) football' en presente continuo?",
                            options: [
                                "They is playing football",
                                "They are playing football",
                                "They am playing football",
                                "They be playing football"
                            ],
                            answerIndex: 1,
                            explain: "Para 'they' se usa 'are' + verbo+ing: They are playing football."
                        },
                        {
                            topic: "Vocabulario",
                            q: "¿Cómo se dice 'soleado' en inglés?",
                            options: [
                                "Rainy",
                                "Cloudy",
                                "Sunny",
                                "Windy"
                            ],
                            answerIndex: 2,
                            explain: "Sunny significa soleado."
                        },
                        {
                            topic: "Vocabulario",
                            q: "¿Cómo se dice 'nevado' o 'con nieve' en inglés?",
                            options: [
                                "Rainy",
                                "Snowy",
                                "Foggy",
                                "Stormy"
                            ],
                            answerIndex: 1,
                            explain: "Snowy significa nevado o con nieve."
                        },
                        {
                            topic: "Vocabulario",
                            q: "¿Cómo se dice 'tormentoso' en inglés?",
                            options: [
                                "Sunny",
                                "Windy",
                                "Stormy",
                                "Cloudy"
                            ],
                            answerIndex: 2,
                            explain: "Stormy significa tormentoso."
                        }
                    ]
                },
                // ACTIVIDAD 2: Present Continuous (negativo)
                act2: {
                    nombre: "Actividad 2: Present Continuous - Negative",
                    desc: "Forma negativa del presente continuo, contracciones",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Negativo",
                            q: "¿Cuál es la forma negativa de 'I am speaking'?",
                            options: [
                                "I am not speaking",
                                "I not am speaking",
                                "I amn't speaking",
                                "I don't speaking"
                            ],
                            answerIndex: 0,
                            explain: "La forma negativa es 'I am not speaking'. Con 'I' no se usa contracción negativa."
                        },
                        {
                            topic: "Negativo",
                            q: "¿Cuál es la contracción de 'you are not' en presente continuo?",
                            options: [
                                "you're not",
                                "you aren't",
                                "you amn't",
                                "you isn't"
                            ],
                            answerIndex: 1,
                            explain: "La contracción de 'are not' es 'aren't'. You aren't + verbo+ing."
                        },
                        {
                            topic: "Negativo",
                            q: "¿Cuál es la forma correcta de 'She (not/work) today' en presente continuo?",
                            options: [
                                "She not working today",
                                "She isn't working today",
                                "She don't working today",
                                "She doesn't working"
                            ],
                            answerIndex: 1,
                            explain: "La forma negativa es She isn't working today (is not = isn't)."
                        },
                        {
                            topic: "Negativo",
                            q: "¿Cuál es la contracción de 'we are not' en presente continuo?",
                            options: [
                                "we're not",
                                "we aren't",
                                "we amn't",
                                "we isn't"
                            ],
                            answerIndex: 1,
                            explain: "La contracción de 'are not' es 'aren't'. We aren't + verbo+ing."
                        },
                        {
                            topic: "Negativo",
                            q: "¿Cuál es la forma correcta de 'It (not/rain) now'?",
                            options: [
                                "It not raining now",
                                "It isn't raining now",
                                "It don't raining now",
                                "It doesn't raining"
                            ],
                            answerIndex: 1,
                            explain: "La forma negativa es It isn't raining now (is not = isn't)."
                        },
                        {
                            topic: "Negativo",
                            q: "¿Cuál es la forma correcta de 'They (not/play) football'?",
                            options: [
                                "They not playing football",
                                "They aren't playing football",
                                "They don't playing football",
                                "They doesn't playing"
                            ],
                            answerIndex: 1,
                            explain: "La forma negativa es They aren't playing football (are not = aren't)."
                        },
                        {
                            topic: "Contracciones",
                            q: "¿Qué pronombre no tiene contracción negativa con el verbo to be?",
                            options: [
                                "You",
                                "He",
                                "I",
                                "We"
                            ],
                            answerIndex: 2,
                            explain: "Con 'I' no se usa contracción negativa; siempre se dice 'I am not'."
                        },
                        {
                            topic: "Negativo",
                            q: "¿Cuál es la forma extendida de 'He isn't sleeping'?",
                            options: [
                                "He is not sleeping",
                                "He are not sleeping",
                                "He am not sleeping",
                                "He not is sleeping"
                            ],
                            answerIndex: 0,
                            explain: "La forma extendida es 'He is not sleeping'."
                        },
                        {
                            topic: "Negativo",
                            q: "¿Cuál es la contracción de 'is not'?",
                            options: [
                                "isn't",
                                "aren't",
                                "amn't",
                                "not's"
                            ],
                            answerIndex: 0,
                            explain: "La contracción de 'is not' es 'isn't'."
                        },
                        {
                            topic: "Negativo",
                            q: "¿Cuál es la contracción de 'are not'?",
                            options: [
                                "isn't",
                                "aren't",
                                "amn't",
                                "not're"
                            ],
                            answerIndex: 1,
                            explain: "La contracción de 'are not' es 'aren't'."
                        }
                    ]
                },
                // ACTIVIDAD 3: Present Continuous (interrogativo)
                act3: {
                    nombre: "Actividad 3: Present Continuous - Interrogative",
                    desc: "Forma interrogativa del presente continuo",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Interrogativo",
                            q: "¿Cómo se forma la pregunta en presente continuo?",
                            options: [
                                "Verbo to be al final",
                                "Verbo to be al inicio + sujeto + verbo+ing",
                                "Sujeto + verbo to be al inicio",
                                "Do/Does + sujeto + verbo"
                            ],
                            answerIndex: 1,
                            explain: "La interrogativa se forma con el verbo to be al inicio: Is/Are/Am + sujeto + verbo+ing?"
                        },
                        {
                            topic: "Interrogativo",
                            q: "¿Cuál es la pregunta correcta para 'he / study' en presente continuo?",
                            options: [
                                "He is studying?",
                                "Is he studying?",
                                "Are he studying?",
                                "Do he studying?"
                            ],
                            answerIndex: 1,
                            explain: "La forma interrogativa es 'Is he studying?'"
                        },
                        {
                            topic: "Interrogativo",
                            q: "¿Cuál es la pregunta correcta para 'you / play' en presente continuo?",
                            options: [
                                "You are playing?",
                                "Are you playing?",
                                "Is you playing?",
                                "Do you playing?"
                            ],
                            answerIndex: 1,
                            explain: "Con 'you' se usa 'Are': Are you playing?"
                        },
                        {
                            topic: "Interrogativo",
                            q: "¿Cuál es la pregunta correcta para 'they / run' en presente continuo?",
                            options: [
                                "Are they running?",
                                "Is they running?",
                                "They are running?",
                                "Do they running?"
                            ],
                            answerIndex: 0,
                            explain: "Con 'they' se usa 'Are': Are they running?"
                        },
                        {
                            topic: "Interrogativo",
                            q: "¿Cuál es la pregunta correcta para 'I / go' en presente continuo?",
                            options: [
                                "Am I going?",
                                "Is I going?",
                                "Are I going?",
                                "I am going?"
                            ],
                            answerIndex: 0,
                            explain: "Con 'I' se usa 'Am': Am I going?"
                        },
                        {
                            topic: "Interrogativo",
                            q: "¿Cuál es la pregunta correcta para 'she / read' en presente continuo?",
                            options: [
                                "She is reading?",
                                "Is she reading?",
                                "Are she reading?",
                                "Do she reading?"
                            ],
                            answerIndex: 1,
                            explain: "La forma interrogativa es 'Is she reading?'"
                        },
                        {
                            topic: "Interrogativo",
                            q: "¿Qué verbo auxiliar se usa con 'we' en preguntas de presente continuo?",
                            options: [
                                "Is",
                                "Am",
                                "Are",
                                "Do"
                            ],
                            answerIndex: 2,
                            explain: "Con 'we' se usa 'Are': Are we...?"
                        },
                        {
                            topic: "Interrogativo",
                            q: "¿Qué verbo auxiliar se usa con 'it' en preguntas de presente continuo?",
                            options: [
                                "Is",
                                "Am",
                                "Are",
                                "Do"
                            ],
                            answerIndex: 0,
                            explain: "Con 'it' se usa 'Is': Is it...?"
                        },
                        {
                            topic: "Interrogativo",
                            q: "¿Cómo se responde afirmativamente a 'Is he working?'",
                            options: [
                                "Yes, he is",
                                "Yes, he's",
                                "Yes, he does",
                                "Yes, he working"
                            ],
                            answerIndex: 0,
                            explain: "La respuesta corta afirmativa es 'Yes, he is'."
                        },
                        {
                            topic: "Interrogativo",
                            q: "¿Cómo se responde negativamente a 'Are they playing?'",
                            options: [
                                "No, they are not / they aren't",
                                "No, they don't",
                                "No, they not playing",
                                "No, they isn't"
                            ],
                            answerIndex: 0,
                            explain: "La respuesta corta negativa es 'No, they are not' o 'No, they aren't'."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: LIFE FROM THE PAST ==========
        modulo2: {
            nombre: "Módulo 2: Life from the past",
            actividades: {
                // ACTIVIDAD 1: Verb to be in past, there was/were
                act1: {
                    nombre: "Actividad 1: Past of be and there was/were",
                    desc: "Pasado del verbo to be (was/were), there was/there were",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Past of be",
                            q: "¿Cuáles son las formas del verbo to be en pasado?",
                            options: [
                                "am/is/are",
                                "was/were",
                                "been",
                                "be"
                            ],
                            answerIndex: 1,
                            explain: "El verbo to be en pasado tiene dos formas: was (para I, he, she, it) y were (para you, we, they)."
                        },
                        {
                            topic: "Past of be",
                            q: "¿Qué forma del pasado se usa con 'I'?",
                            options: [
                                "was",
                                "were",
                                "am",
                                "is"
                            ],
                            answerIndex: 0,
                            explain: "Con 'I' se usa 'was': I was happy."
                        },
                        {
                            topic: "Past of be",
                            q: "¿Qué forma del pasado se usa con 'they'?",
                            options: [
                                "was",
                                "were",
                                "am",
                                "is"
                            ],
                            answerIndex: 1,
                            explain: "Con 'they' se usa 'were': They were at home."
                        },
                        {
                            topic: "There was/were",
                            q: "¿Qué significa 'there was'?",
                            options: [
                                "Hay (presente)",
                                "Había (singular)",
                                "Había (plural)",
                                "Hubo"
                            ],
                            answerIndex: 1,
                            explain: "'There was' se usa para expresar existencia en pasado en singular: había (una cosa)."
                        },
                        {
                            topic: "There was/were",
                            q: "¿Qué significa 'there were'?",
                            options: [
                                "Hay (presente)",
                                "Había (singular)",
                                "Había (plural)",
                                "Hubo"
                            ],
                            answerIndex: 2,
                            explain: "'There were' se usa para expresar existencia en pasado en plural: había (varias cosas)."
                        },
                        {
                            topic: "There was/were",
                            q: "¿Cuál es la forma negativa de 'there was'?",
                            options: [
                                "there was not / there wasn't",
                                "there were not",
                                "there is not",
                                "there are not"
                            ],
                            answerIndex: 0,
                            explain: "La forma negativa es 'there was not' o 'there wasn't'."
                        },
                        {
                            topic: "There was/were",
                            q: "¿Cuál es la forma interrogativa de 'there were'?",
                            options: [
                                "Was there?",
                                "Were there?",
                                "Is there?",
                                "Are there?"
                            ],
                            answerIndex: 1,
                            explain: "La forma interrogativa de 'there were' es 'Were there...?'"
                        },
                        {
                            topic: "There was/were",
                            q: "¿Cómo se responde afirmativamente a 'Was there a car?'",
                            options: [
                                "Yes, there was",
                                "Yes, there were",
                                "Yes, there is",
                                "Yes, there are"
                            ],
                            answerIndex: 0,
                            explain: "La respuesta corta afirmativa para singular es 'Yes, there was'."
                        },
                        {
                            topic: "There was/were",
                            q: "¿Cómo se responde negativamente a 'Were there people?'",
                            options: [
                                "No, there was not",
                                "No, there were not / weren't",
                                "No, there is not",
                                "No, there are not"
                            ],
                            answerIndex: 1,
                            explain: "La respuesta corta negativa para plural es 'No, there were not' o 'No, there weren't'."
                        },
                        {
                            topic: "Past of be",
                            q: "¿Cuál es la forma correcta de 'You (be) at the party' en pasado?",
                            options: [
                                "You was at the party",
                                "You were at the party",
                                "You are at the party",
                                "You be at the party"
                            ],
                            answerIndex: 1,
                            explain: "Con 'you' se usa 'were': You were at the party."
                        }
                    ]
                },
                // ACTIVIDAD 2: Regular and irregular verbs
                act2: {
                    nombre: "Actividad 2: Regular and irregular verbs",
                    desc: "Verbos regulares e irregulares en pasado, reglas ortográficas, lista de verbos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Regular verbs",
                            q: "¿Cómo forman los verbos regulares su pasado?",
                            options: [
                                "Cambiando la vocal",
                                "Añadiendo -ed",
                                "Usando did",
                                "Añadiendo -ing"
                            ],
                            answerIndex: 1,
                            explain: "Los verbos regulares forman su pasado añadiendo -ed al infinitivo."
                        },
                        {
                            topic: "Regular verbs",
                            q: "¿Cómo se forma el pasado del verbo 'love'?",
                            options: [
                                "loveed",
                                "loved",
                                "loved",
                                "looved"
                            ],
                            answerIndex: 2,
                            explain: "Los verbos terminados en 'e' solo añaden -d: love → loved."
                        },
                        {
                            topic: "Regular verbs",
                            q: "¿Cómo se forma el pasado del verbo 'cry'?",
                            options: [
                                "cryed",
                                "cried",
                                "cryed",
                                "crid"
                            ],
                            answerIndex: 1,
                            explain: "Los verbos terminados en consonante + y cambian la 'y' por 'i' y añaden -ed: cry → cried."
                        },
                        {
                            topic: "Irregular verbs",
                            q: "¿Qué tipo de verbo irregular es 'put'?",
                            options: [
                                "Las tres formas son iguales",
                                "Dos formas son iguales",
                                "Las tres formas son diferentes",
                                "Solo una forma"
                            ],
                            answerIndex: 0,
                            explain: "'Put' es un verbo irregular donde las tres formas (presente, pasado, participio) son iguales: put - put - put."
                        },
                        {
                            topic: "Irregular verbs",
                            q: "¿Qué tipo de verbo irregular es 'sit'?",
                            options: [
                                "Las tres formas son iguales",
                                "Dos formas son iguales",
                                "Las tres formas son diferentes",
                                "Solo una forma"
                            ],
                            answerIndex: 1,
                            explain: "'Sit' es un verbo irregular donde dos formas son iguales: sit - sat - sat."
                        },
                        {
                            topic: "Irregular verbs",
                            q: "¿Qué tipo de verbo irregular es 'drink'?",
                            options: [
                                "Las tres formas son iguales",
                                "Dos formas son iguales",
                                "Las tres formas son diferentes",
                                "Solo una forma"
                            ],
                            answerIndex: 2,
                            explain: "'Drink' es un verbo irregular donde las tres formas son diferentes: drink - drank - drunk."
                        },
                        {
                            topic: "Irregular verbs",
                            q: "¿Cuál es el pasado del verbo 'go'?",
                            options: [
                                "goed",
                                "went",
                                "gone",
                                "go"
                            ],
                            answerIndex: 1,
                            explain: "El pasado de 'go' es 'went' (verbo irregular)."
                        },
                        {
                            topic: "Irregular verbs",
                            q: "¿Cuál es el pasado del verbo 'eat'?",
                            options: [
                                "eated",
                                "ate",
                                "eaten",
                                "eat"
                            ],
                            answerIndex: 1,
                            explain: "El pasado de 'eat' es 'ate' (verbo irregular)."
                        },
                        {
                            topic: "Irregular verbs",
                            q: "¿Cuál es el pasado del verbo 'see'?",
                            options: [
                                "seed",
                                "saw",
                                "seen",
                                "see"
                            ],
                            answerIndex: 1,
                            explain: "El pasado de 'see' es 'saw' (verbo irregular)."
                        },
                        {
                            topic: "Irregular verbs",
                            q: "¿Cuál es el pasado del verbo 'buy'?",
                            options: [
                                "buyed",
                                "bought",
                                "buyed",
                                "boughted"
                            ],
                            answerIndex: 1,
                            explain: "El pasado de 'buy' es 'bought' (verbo irregular)."
                        }
                    ]
                },
                // ACTIVIDAD 3: Simple past (did, wh-words, time expressions)
                act3: {
                    nombre: "Actividad 3: Simple past",
                    desc: "Pasado simple con did, wh-words, expresiones de tiempo, reading",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Simple past",
                            q: "¿Qué auxiliar se usa para formar negaciones en pasado simple?",
                            options: [
                                "do",
                                "does",
                                "did",
                                "was"
                            ],
                            answerIndex: 2,
                            explain: "El auxiliar 'did' se usa para formar negaciones en pasado simple: I did not (didn't) play."
                        },
                        {
                            topic: "Simple past",
                            q: "¿Cuál es la contracción de 'did not'?",
                            options: [
                                "diddn't",
                                "didnt",
                                "didn't",
                                "dident"
                            ],
                            answerIndex: 2,
                            explain: "La contracción de 'did not' es 'didn't'."
                        },
                        {
                            topic: "Simple past",
                            q: "¿Cómo se forma la pregunta en pasado simple?",
                            options: [
                                "Did + sujeto + verbo en pasado",
                                "Did + sujeto + verbo en infinitivo",
                                "Was/Were + sujeto + verbo",
                                "Do + sujeto + verbo"
                            ],
                            answerIndex: 1,
                            explain: "La interrogativa se forma con Did + sujeto + verbo en infinitivo: Did you play?"
                        },
                        {
                            topic: "Wh- words",
                            q: "¿Cómo se forma una pregunta con wh-word en pasado simple?",
                            options: [
                                "Wh-word + did + sujeto + verbo",
                                "Wh-word + sujeto + did + verbo",
                                "Wh-word + verbo + did + sujeto",
                                "Wh-word + did + verbo + sujeto"
                            ],
                            answerIndex: 0,
                            explain: "La estructura es: Wh-word + did + sujeto + verbo infinitivo?"
                        },
                        {
                            topic: "Wh- words",
                            q: "¿Cómo se forma una pregunta con wh-word y el verbo to be en pasado?",
                            options: [
                                "Wh-word + did + sujeto + be",
                                "Wh-word + was/were + sujeto",
                                "Wh-word + sujeto + was/were",
                                "Wh-word + be + sujeto"
                            ],
                            answerIndex: 1,
                            explain: "Con el verbo to be, la estructura es: Wh-word + was/were + sujeto?"
                        },
                        {
                            topic: "Time expressions",
                            q: "¿Cuál es una expresión de tiempo pasado?",
                            options: [
                                "tomorrow",
                                "yesterday",
                                "today",
                                "now"
                            ],
                            answerIndex: 1,
                            explain: "'Yesterday' (ayer) es una expresión de tiempo pasado."
                        },
                        {
                            topic: "Time expressions",
                            q: "¿Qué significa 'last week'?",
                            options: [
                                "esta semana",
                                "la semana pasada",
                                "próxima semana",
                                "semana"
                            ],
                            answerIndex: 1,
                            explain: "'Last week' significa 'la semana pasada'."
                        },
                        {
                            topic: "Reading",
                            q: "En el texto 'Charly's weekend', ¿qué hizo Charly el viernes por la tarde?",
                            options: [
                                "Fue al supermercado",
                                "Terminó el trabajo a las 6pm",
                                "Visitó a sus padres",
                                "Comió pizza"
                            ],
                            answerIndex: 1,
                            explain: "El texto dice: 'On Friday afternoon, I finished work at 6pm'."
                        },
                        {
                            topic: "Reading",
                            q: "¿Qué regalo recibió Charly el domingo?",
                            options: [
                                "Un perro (puppy)",
                                "Un gato",
                                "Un pastel",
                                "Un libro"
                            ],
                            answerIndex: 0,
                            explain: "Su madre le regaló un perro (puppy) por su cumpleaños."
                        },
                        {
                            topic: "Reading",
                            q: "¿Cómo se llamaba el perro que tuvo Charly hace tres años?",
                            options: [
                                "Roy",
                                "Max",
                                "Charlie",
                                "Rocky"
                            ],
                            answerIndex: 0,
                            explain: "El texto menciona: 'I had got a dog three years ago. Its name was Roy'."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: CHANGES ==========
        modulo3: {
            nombre: "Módulo 3: Changes",
            actividades: {
                // ACTIVIDAD 1: Should and as...as
                act1: {
                    nombre: "Actividad 1: Should and comparisons of equality",
                    desc: "Modal verb should, comparaciones de igualdad con as...as",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Should",
                            q: "¿Para qué se usa el verbo modal 'should'?",
                            options: [
                                "Para hablar del futuro",
                                "Para dar consejos, recomendaciones y opiniones",
                                "Para describir acciones en progreso",
                                "Para hablar del pasado"
                            ],
                            answerIndex: 1,
                            explain: "'Should' se usa para dar consejos, opiniones, sugerencias y recomendaciones."
                        },
                        {
                            topic: "Should",
                            q: "¿Cuál es la estructura de 'should' en afirmativo?",
                            options: [
                                "Sujeto + should + verbo con to",
                                "Sujeto + should + verbo infinitivo sin to",
                                "Sujeto + to + should + verbo",
                                "Should + sujeto + verbo"
                            ],
                            answerIndex: 1,
                            explain: "La estructura es: Sujeto + should + verbo en infinitivo sin 'to'."
                        },
                        {
                            topic: "Should",
                            q: "¿Cuál es la contracción negativa de 'should'?",
                            options: [
                                "shouldn't",
                                "shouldnot",
                                "should'nt",
                                "shouldnt"
                            ],
                            answerIndex: 0,
                            explain: "La contracción de 'should not' es 'shouldn't'."
                        },
                        {
                            topic: "Should",
                            q: "¿Cómo se forma la pregunta con 'should'?",
                            options: [
                                "Should + sujeto + verbo?",
                                "Sujeto + should + verbo?",
                                "Do + sujeto + should?",
                                "Should + verbo + sujeto?"
                            ],
                            answerIndex: 0,
                            explain: "La interrogativa se forma con 'Should' al inicio: Should + sujeto + verbo?"
                        },
                        {
                            topic: "Should",
                            q: "¿Cómo se responde afirmativamente a 'Should I go?'",
                            options: [
                                "Yes, I should",
                                "Yes, I do",
                                "Yes, I am",
                                "Yes, I should go"
                            ],
                            answerIndex: 0,
                            explain: "La respuesta corta afirmativa es 'Yes, I should'."
                        },
                        {
                            topic: "As...as",
                            q: "¿Para qué se usa la estructura 'as...as'?",
                            options: [
                                "Para comparaciones de superioridad",
                                "Para comparaciones de igualdad",
                                "Para superlativos",
                                "Para el futuro"
                            ],
                            answerIndex: 1,
                            explain: "'As...as' se usa para hacer comparaciones de igualdad: as + adjetivo + as."
                        },
                        {
                            topic: "As...as",
                            q: "¿Cuál es la estructura afirmativa de 'as...as'?",
                            options: [
                                "Noun + verb + as + adjective + as",
                                "Noun + as + adjective + verb + as",
                                "As + noun + adjective + as",
                                "Noun + adjective + as + as"
                            ],
                            answerIndex: 0,
                            explain: "La estructura es: Noun + verb + as + adjective + as + noun."
                        },
                        {
                            topic: "As...as",
                            q: "¿Cómo se dice 'tan cómodo como' en inglés?",
                            options: [
                                "so comfortable as",
                                "as comfortable as",
                                "more comfortable than",
                                "the most comfortable"
                            ],
                            answerIndex: 1,
                            explain: "'Tan cómodo como' se dice 'as comfortable as'."
                        },
                        {
                            topic: "As...as",
                            q: "¿Qué ejemplo de 'as...as' se da en el texto?",
                            options: [
                                "The brown shoes are as comfortable as the yellow shoes",
                                "He is as taller as me",
                                "She runs as faster as him",
                                "It is as more expensive as"
                            ],
                            answerIndex: 0,
                            explain: "El ejemplo es: 'The brown shoes are as comfortable as the yellow shoes'."
                        },
                        {
                            topic: "Should",
                            q: "Según el texto de COVID-19, ¿qué deberías hacer si alguien está enfermo?",
                            options: [
                                "Acercarte",
                                "Mantener distancia y lavar manos",
                                "Ignorarlo",
                                "Toser cerca"
                            ],
                            answerIndex: 1,
                            explain: "El texto recomienda: stay away, no stand too close, wash hands."
                        }
                    ]
                },
                // ACTIVIDAD 2: Comparatives and superlatives
                act2: {
                    nombre: "Actividad 2: Comparatives and superlatives",
                    desc: "Adjetivos comparativos (er/more) y superlativos (est/most)",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Comparatives",
                            q: "¿Cómo se forma el comparativo de adjetivos cortos (1 sílaba)?",
                            options: [
                                "more + adjetivo",
                                "adjetivo + er",
                                "adjetivo + est",
                                "as + adjetivo"
                            ],
                            answerIndex: 1,
                            explain: "Los adjetivos cortos forman el comparativo añadiendo -er: old → older."
                        },
                        {
                            topic: "Comparatives",
                            q: "¿Cómo se forma el comparativo de adjetivos largos (2+ sílabas)?",
                            options: [
                                "adjetivo + er",
                                "more + adjetivo",
                                "adjetivo + est",
                                "as + adjetivo"
                            ],
                            answerIndex: 1,
                            explain: "Los adjetivos largos forman el comparativo con 'more' + adjetivo: expensive → more expensive."
                        },
                        {
                            topic: "Comparatives",
                            q: "¿Cuál es el comparativo de 'happy'?",
                            options: [
                                "happyer",
                                "happier",
                                "more happy",
                                "happiest"
                            ],
                            answerIndex: 1,
                            explain: "Los adjetivos terminados en 'y' cambian la 'y' por 'ier': happy → happier."
                        },
                        {
                            topic: "Comparatives",
                            q: "¿Cuál es el comparativo de 'hot'?",
                            options: [
                                "hoter",
                                "hotter",
                                "more hot",
                                "hottest"
                            ],
                            answerIndex: 1,
                            explain: "Los adjetivos cortos C+V+C doblan la última consonante: hot → hotter."
                        },
                        {
                            topic: "Comparatives",
                            q: "¿Cuál es el comparativo irregular de 'good'?",
                            options: [
                                "gooder",
                                "better",
                                "best",
                                "more good"
                            ],
                            answerIndex: 1,
                            explain: "El comparativo irregular de 'good' es 'better'."
                        },
                        {
                            topic: "Superlatives",
                            q: "¿Cómo se forma el superlativo de adjetivos cortos?",
                            options: [
                                "the + adjetivo + er",
                                "the + adjetivo + est",
                                "the most + adjetivo",
                                "adjetivo + the"
                            ],
                            answerIndex: 1,
                            explain: "Los adjetivos cortos forman el superlativo con 'the' + adjetivo + -est: old → the oldest."
                        },
                        {
                            topic: "Superlatives",
                            q: "¿Cómo se forma el superlativo de adjetivos largos?",
                            options: [
                                "the + adjetivo + est",
                                "the most + adjetivo",
                                "adjetivo + the most",
                                "most + adjetivo"
                            ],
                            answerIndex: 1,
                            explain: "Los adjetivos largos forman el superlativo con 'the most' + adjetivo: expensive → the most expensive."
                        },
                        {
                            topic: "Superlatives",
                            q: "¿Cuál es el superlativo de 'good'?",
                            options: [
                                "goodest",
                                "best",
                                "better",
                                "the best"
                            ],
                            answerIndex: 3,
                            explain: "El superlativo de 'good' es 'the best' (irregular)."
                        },
                        {
                            topic: "Superlatives",
                            q: "¿Cuál es el superlativo de 'bad'?",
                            options: [
                                "baddest",
                                "worst",
                                "worse",
                                "the worst"
                            ],
                            answerIndex: 3,
                            explain: "El superlativo de 'bad' es 'the worst' (irregular)."
                        },
                        {
                            topic: "Superlatives",
                            q: "¿Qué ejemplo de superlativo se da en el texto?",
                            options: [
                                "Mount Everest is the highest mountain",
                                "She is more taller",
                                "He is as tall as",
                                "They are good"
                            ],
                            answerIndex: 0,
                            explain: "El ejemplo es: 'Mount Everest is the highest mountain'."
                        }
                    ]
                },
                // ACTIVIDAD 3: Future (be going to and will)
                act3: {
                    nombre: "Actividad 3: Future tenses",
                    desc: "Be going to (planes) y will (predicciones, decisiones espontáneas)",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Be going to",
                            q: "¿Para qué se usa 'be going to'?",
                            options: [
                                "Predicciones sin evidencia",
                                "Planes e intenciones (decisiones tomadas antes de hablar)",
                                "Decisiones en el momento",
                                "Acciones en progreso"
                            ],
                            answerIndex: 1,
                            explain: "'Be going to' se usa para planes e intenciones, donde la decisión ya ha sido tomada antes de hablar."
                        },
                        {
                            topic: "Be going to",
                            q: "¿Cómo se forma 'be going to' en afirmativo?",
                            options: [
                                "Sujeto + will + going to + verbo",
                                "Sujeto + be + going to + verbo infinitivo",
                                "Sujeto + going to + be + verbo",
                                "Sujeto + be + to + going"
                            ],
                            answerIndex: 1,
                            explain: "La estructura es: Sujeto + verbo to be + going to + verbo infinitivo."
                        },
                        {
                            topic: "Be going to",
                            q: "¿Cuál es la forma negativa de 'I am going to study'?",
                            options: [
                                "I am not going to study",
                                "I don't going to study",
                                "I won't going to study",
                                "I not going to study"
                            ],
                            answerIndex: 0,
                            explain: "La negativa es 'I am not going to study' (se añade 'not' después del verbo to be)."
                        },
                        {
                            topic: "Be going to",
                            q: "¿Cómo se forma la pregunta con 'be going to'?",
                            options: [
                                "Be + sujeto + going to + verbo?",
                                "Do + sujeto + going to + verbo?",
                                "Will + sujeto + going to?",
                                "Sujeto + be + going to?"
                            ],
                            answerIndex: 0,
                            explain: "La interrogativa se forma con el verbo to be al inicio: Be + sujeto + going to + verbo?"
                        },
                        {
                            topic: "Will",
                            q: "¿Para qué se usa 'will' en futuro?",
                            options: [
                                "Planes fijos",
                                "Predicciones, decisiones espontáneas, ofertas, promesas",
                                "Acciones en progreso",
                                "Rutinas"
                            ],
                            answerIndex: 1,
                            explain: "'Will' se usa para predicciones, decisiones rápidas, acciones voluntarias, ofertas y promesas."
                        },
                        {
                            topic: "Will",
                            q: "¿Cuál es la contracción de 'will' en afirmativo?",
                            options: [
                                "will",
                                "'ll",
                                "wl",
                                "w'll"
                            ],
                            answerIndex: 1,
                            explain: "La contracción de 'will' es 'll: I will = I'll."
                        },
                        {
                            topic: "Will",
                            q: "¿Cuál es la contracción negativa de 'will'?",
                            options: [
                                "willn't",
                                "won't",
                                "wolln't",
                                "will not"
                            ],
                            answerIndex: 1,
                            explain: "La contracción de 'will not' es 'won't'."
                        },
                        {
                            topic: "Will",
                            q: "¿Cómo se forma la pregunta con 'will'?",
                            options: [
                                "Will + sujeto + verbo?",
                                "Do + sujeto + will?",
                                "Sujeto + will + verbo?",
                                "Will + verbo + sujeto?"
                            ],
                            answerIndex: 0,
                            explain: "La interrogativa se forma con 'Will' al inicio: Will + sujeto + verbo?"
                        },
                        {
                            topic: "Be going to vs Will",
                            q: "Si ves nubes oscuras, ¿qué expresión usarías para predecir lluvia?",
                            options: [
                                "It will rain",
                                "It is going to rain",
                                "It rains",
                                "It raining"
                            ],
                            answerIndex: 1,
                            explain: "Con evidencia visible (nubes oscuras) se usa 'be going to': It's going to rain."
                        },
                        {
                            topic: "Be going to vs Will",
                            q: "Si decides algo en el momento de hablar, ¿qué estructura usas?",
                            options: [
                                "be going to",
                                "will",
                                "present continuous",
                                "past simple"
                            ],
                            answerIndex: 1,
                            explain: "Para decisiones espontáneas en el momento de hablar se usa 'will'."
                        }
                    ]
                }
            }
        }
    }
};

export default ingles2;