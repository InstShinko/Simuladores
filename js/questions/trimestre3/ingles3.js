// ============================================
// INGLÉS III - TERCER TRIMESTRE
// 8 ACTIVIDADES - 80 PREGUNTAS
// ============================================

const ingles3 = {
    id: "ingles3",
    nombre: "INGLÉS III",
    icono: "🇬🇧",
    descripcion: "Would, presente continuo para futuro, presente perfecto, pasado continuo, contrastes, gustos y preferencias",
    modulos: {
        // ========== MÓDULO 1: INGLÉS III (Unidad 1) ==========
        modulo1: {
            nombre: "Módulo 1: Inglés III",
            actividades: {
                // ACTIVIDAD 1: Modal verb Would
                act1: {
                    nombre: "Actividad 1: Modal verb Would",
                    desc: "Usos de would (deseos, peticiones formales, situaciones hipotéticas), formas afirmativa, negativa, interrogativa, wh-words",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Would - Uses",
                            q: "¿Para qué se usa el verbo modal 'would' en situaciones hipotéticas?",
                            options: [
                                "Para hacer preguntas en pasado",
                                "Para expresar situaciones imaginarias o condicionales",
                                "Para hablar del futuro seguro",
                                "Para dar órdenes"
                            ],
                            answerIndex: 1,
                            explain: "Would se usa para situaciones hipotéticas, por ejemplo: 'I would choose that jacket if I were you'."
                        },
                        {
                            topic: "Would - Polite requests",
                            q: "¿Cuál es una forma más educada de pedir que abran la puerta?",
                            options: [
                                "Open the door, please",
                                "Would you open the door, please?",
                                "You open the door",
                                "Open the door now"
                            ],
                            answerIndex: 1,
                            explain: "'Would you open the door, please?' es más educado que 'Open the door, please'."
                        },
                        {
                            topic: "Would - Affirmative",
                            q: "¿Cuál es la contracción de 'would' en afirmativo?",
                            options: [
                                "'ll",
                                "'d",
                                "'s",
                                "'ve"
                            ],
                            answerIndex: 1,
                            explain: "La contracción de 'would' es 'd: I would → I'd."
                        },
                        {
                            topic: "Would - Negative",
                            q: "¿Cuál es la forma correcta de 'I would not eat it' con contracción?",
                            options: [
                                "I would not eat it",
                                "I wouldn't eat it",
                                "I'd not eat it",
                                "I would'n eat it"
                            ],
                            answerIndex: 1,
                            explain: "La contracción de 'would not' es 'wouldn't': I wouldn't eat it."
                        },
                        {
                            topic: "Would - Interrogative",
                            q: "¿Cuál es la forma interrogativa correcta de 'would'?",
                            options: [
                                "Would you like some coffee?",
                                "You would like some coffee?",
                                "Do you would like some coffee?",
                                "Like you would some coffee?"
                            ],
                            answerIndex: 0,
                            explain: "La forma interrogativa es 'Would + sujeto + verbo?': Would you like some coffee?"
                        },
                        {
                            topic: "Would - Short answers",
                            q: "¿Cuál es la respuesta corta negativa a 'Would you like to come?'?",
                            options: [
                                "No, I wouldn't",
                                "No, I would not",
                                "No, I don't",
                                "No, I can't"
                            ],
                            answerIndex: 0,
                            explain: "La respuesta corta negativa es 'No, I wouldn't'."
                        },
                        {
                            topic: "Would - Wh-words",
                            q: "¿Cuál es la estructura correcta con wh-words y would?",
                            options: [
                                "Wh-word + sujeto + would + verbo?",
                                "Wh-word + would + sujeto + verbo?",
                                "Would + wh-word + sujeto + verbo?",
                                "Sujeto + wh-word + would + verbo?"
                            ],
                            answerIndex: 1,
                            explain: "La estructura es: Wh-word + would + sujeto + verbo? Ejemplo: What would you like to do today?"
                        },
                        {
                            topic: "Would - Wishes",
                            q: "¿Qué expresa la oración 'I would love to live here'?",
                            options: [
                                "Una orden",
                                "Un deseo o anhelo",
                                "Una pregunta",
                                "Una negación"
                            ],
                            answerIndex: 1,
                            explain: "'Would love' expresa un deseo o anhelo: Me encantaría vivir aquí."
                        },
                        {
                            topic: "Would - Contraction",
                            q: "¿Cuál es la forma contraída de 'She would like some coffee'?",
                            options: [
                                "She'd like some coffee",
                                "She will like some coffee",
                                "She is like some coffee",
                                "She has like some coffee"
                            ],
                            answerIndex: 0,
                            explain: "La contracción de 'She would' es 'She'd': She'd like some coffee."
                        },
                        {
                            topic: "Would - Hypothetical",
                            q: "¿Cuál es un ejemplo de situación hipotética con would?",
                            options: [
                                "I would like a coffee",
                                "Would you open the door?",
                                "I would apply for that job if I were you",
                                "I would go to the store"
                            ],
                            answerIndex: 2,
                            explain: "'I would apply for that job if I were you' es una situación hipotética porque expresa una acción condicional."
                        }
                    ]
                },
                // ACTIVIDAD 2: Present Continuous for future arrangements
                act2: {
                    nombre: "Actividad 2: Present Continuous for future",
                    desc: "Presente continuo para arreglos futuros, diferencia con be going to, time expressions",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Future arrangements",
                            q: "¿Qué es un 'arrangement' en inglés?",
                            options: [
                                "Una decisión espontánea",
                                "Un plan decidido y organizado con otra persona",
                                "Una predicción",
                                "Una rutina diaria"
                            ],
                            answerIndex: 1,
                            explain: "Un 'arrangement' es un plan decidido y organizado con otra persona que seguramente se llevará a cabo en el futuro."
                        },
                        {
                            topic: "Present Continuous for future",
                            q: "¿Qué tiempo verbal se usa para hablar de arreglos futuros?",
                            options: [
                                "Simple Future (will)",
                                "Present Continuous",
                                "Simple Present",
                                "Past Continuous"
                            ],
                            answerIndex: 1,
                            explain: "El Presente Continuo se usa para hablar de planes y arreglos futuros."
                        },
                        {
                            topic: "Present Continuous vs Be going to",
                            q: "¿Qué diferencia hay entre 'I'm meeting Josh after school' y 'I'm going to meet Josh after school'?",
                            options: [
                                "No hay diferencia",
                                "La primera indica que ya hay un arreglo; la segunda solo una decisión",
                                "La primera es incorrecta",
                                "La segunda es más formal"
                            ],
                            answerIndex: 1,
                            explain: "'I'm meeting Josh' indica que ya hay un arreglo (más cierto). 'I'm going to meet' indica solo una decisión (no organizado)."
                        },
                        {
                            topic: "Time expressions",
                            q: "¿Cuál es una expresión de tiempo para arreglos futuros?",
                            options: [
                                "yesterday",
                                "last week",
                                "tomorrow",
                                "an hour ago"
                            ],
                            answerIndex: 2,
                            explain: "'Tomorrow' (mañana) es una expresión de tiempo para el futuro."
                        },
                        {
                            topic: "Present Continuous form",
                            q: "¿Cuál es la forma correcta de 'I (take) the train to London tomorrow'?",
                            options: [
                                "I take the train",
                                "I am taking the train",
                                "I will take the train",
                                "I going to take the train"
                            ],
                            answerIndex: 1,
                            explain: "Para arreglos futuros se usa presente continuo: I am taking the train tomorrow."
                        },
                        {
                            topic: "Present Continuous negative",
                            q: "¿Cuál es la forma negativa de 'They're working tomorrow'?",
                            options: [
                                "They not working tomorrow",
                                "They aren't working tomorrow",
                                "They don't work tomorrow",
                                "They won't working tomorrow"
                            ],
                            answerIndex: 1,
                            explain: "La forma negativa es 'They aren't working tomorrow' o 'They're not working tomorrow'."
                        },
                        {
                            topic: "Present Continuous interrogative",
                            q: "¿Cuál es la pregunta correcta para 'you / do / tomorrow'?",
                            options: [
                                "Are you doing tomorrow?",
                                "Do you doing tomorrow?",
                                "What are you doing tomorrow?",
                                "What do you do tomorrow?"
                            ],
                            answerIndex: 2,
                            explain: "Para preguntar por planes futuros: 'What are you doing tomorrow?'"
                        },
                        {
                            topic: "Contractions",
                            q: "¿Cuál es la contracción de 'She is having dinner'?",
                            options: [
                                "She's having dinner",
                                "She has dinner",
                                "She having dinner",
                                "She be having dinner"
                            ],
                            answerIndex: 0,
                            explain: "La contracción de 'She is' es 'She's': She's having dinner."
                        },
                        {
                            topic: "Time expressions",
                            q: "¿Qué expresión de tiempo NO se usa para el futuro?",
                            options: [
                                "tonight",
                                "this weekend",
                                "next week",
                                "last night"
                            ],
                            answerIndex: 3,
                            explain: "'Last night' es una expresión de tiempo pasado, no de futuro."
                        },
                        {
                            topic: "Dialogue example",
                            q: "En el diálogo, ¿qué va a hacer Louis a las cinco de la tarde?",
                            options: [
                                "Jugar ajedrez",
                                "Ver a su dentista",
                                "Ir a Europa",
                                "Estudiar"
                            ],
                            answerIndex: 1,
                            explain: "Louis dice: 'I'm seeing my dentist at five o'clock in the afternoon.'"
                        }
                    ]
                },
                // ACTIVIDAD 3: Present Perfect Tense
                act3: {
                    nombre: "Actividad 3: Present Perfect Tense",
                    desc: "Presente perfecto: formas afirmativa, negativa, interrogativa, wh-words, since y for",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Present Perfect - Use",
                            q: "¿Para qué se usa el Present Perfect Tense?",
                            options: [
                                "Para acciones que ocurrieron y terminaron en un tiempo específico",
                                "Para conectar una acción terminada con el presente",
                                "Para acciones futuras",
                                "Para rutinas diarias"
                            ],
                            answerIndex: 1,
                            explain: "El Presente Perfecto conecta una acción terminada con el presente. Ejemplo: 'I have broken my leg' (y no puedo ir a la fiesta)."
                        },
                        {
                            topic: "Present Perfect - Form",
                            q: "¿Cómo se forma el Present Perfect en afirmativo?",
                            options: [
                                "Sujeto + verbo en pasado",
                                "Sujeto + have/has + past participle",
                                "Sujeto + will + verbo",
                                "Sujeto + am/is/are + verbo+ing"
                            ],
                            answerIndex: 1,
                            explain: "El Presente Perfecto se forma con have/has + past participle del verbo."
                        },
                        {
                            topic: "Past Participle",
                            q: "¿Cuál es el past participle del verbo 'write'?",
                            options: [
                                "wrote",
                                "written",
                                "writed",
                                "write"
                            ],
                            answerIndex: 1,
                            explain: "El past participle de 'write' es 'written' (verbo irregular, tercera columna)."
                        },
                        {
                            topic: "Present Perfect - Negative",
                            q: "¿Cuál es la forma negativa de 'She has lost her purse'?",
                            options: [
                                "She has not lost her purse",
                                "She not has lost her purse",
                                "She doesn't have lost her purse",
                                "She hasn't lose her purse"
                            ],
                            answerIndex: 0,
                            explain: "La forma negativa es 'She has not lost her purse' o 'She hasn't lost her purse'."
                        },
                        {
                            topic: "Present Perfect - Contractions",
                            q: "¿Cuál es la contracción de 'They have played chess'?",
                            options: [
                                "They've played chess",
                                "They has played chess",
                                "They're played chess",
                                "They'll played chess"
                            ],
                            answerIndex: 0,
                            explain: "La contracción de 'They have' es 'They've': They've played chess."
                        },
                        {
                            topic: "Present Perfect - Interrogative",
                            q: "¿Cuál es la pregunta correcta con Present Perfect?",
                            options: [
                                "Did she go to England?",
                                "Has she gone to England?",
                                "Is she gone to England?",
                                "Does she gone to England?"
                            ],
                            answerIndex: 1,
                            explain: "La interrogativa se forma con 'Has' + sujeto + past participle: Has she gone to England?"
                        },
                        {
                            topic: "Present Perfect - Short answers",
                            q: "¿Cuál es la respuesta corta afirmativa a 'Have you seen the movie?'",
                            options: [
                                "Yes, I have",
                                "Yes, I did",
                                "Yes, I saw",
                                "Yes, I see"
                            ],
                            answerIndex: 0,
                            explain: "La respuesta corta afirmativa es 'Yes, I have'."
                        },
                        {
                            topic: "Wh-words with Present Perfect",
                            q: "¿Cuál es la estructura para preguntas con wh-words en Present Perfect?",
                            options: [
                                "Wh-word + sujeto + have/has + past participle?",
                                "Wh-word + have/has + sujeto + past participle?",
                                "Have/Has + wh-word + sujeto + past participle?",
                                "Wh-word + did + sujeto + verbo?"
                            ],
                            answerIndex: 1,
                            explain: "La estructura es: Wh-word + have/has + sujeto + past participle? Ejemplo: What have you done?"
                        },
                        {
                            topic: "Past Participle",
                            q: "¿Cuál es el past participle del verbo regular 'play'?",
                            options: [
                                "play",
                                "played",
                                "playing",
                                "plays"
                            ],
                            answerIndex: 1,
                            explain: "Los verbos regulares forman el past participle añadiendo -ed: play → played."
                        },
                        {
                            topic: "Present Perfect - Example",
                            q: "¿Qué expresa la oración 'I have broken my leg'?",
                            options: [
                                "Una acción futura",
                                "Una acción que ocurrió y tiene relevancia en el presente",
                                "Una rutina",
                                "Una acción en progreso"
                            ],
                            answerIndex: 1,
                            explain: "La oración expresa que la acción (romperse la pierna) ocurrió y afecta el presente (no puede ir a la fiesta)."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: ONCE UPON A TIME... ==========
        modulo2: {
            nombre: "Módulo 2: Once upon a time...",
            actividades: {
                // ACTIVIDAD 1: Past Continuous Tense
                act1: {
                    nombre: "Actividad 1: Past Continuous Tense",
                    desc: "Pasado continuo: formas afirmativa, negativa, interrogativa, wh-words, reglas ortográficas de gerundios",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Past Continuous - Use",
                            q: "¿Para qué se usa el Past Continuous Tense?",
                            options: [
                                "Para acciones completadas en el pasado",
                                "Para mostrar que una acción pasada estaba sucediendo en un momento específico",
                                "Para acciones futuras",
                                "Para rutinas diarias"
                            ],
                            answerIndex: 1,
                            explain: "El pasado continuo muestra que una acción pasada estaba sucediendo en un momento específico o que dos acciones sucedían al mismo tiempo."
                        },
                        {
                            topic: "Past Continuous - Form",
                            q: "¿Cómo se forma el Past Continuous en afirmativo?",
                            options: [
                                "Sujeto + verbo en pasado",
                                "Sujeto + was/were + verbo+ing",
                                "Sujeto + have/has + past participle",
                                "Sujeto + will + verbo"
                            ],
                            answerIndex: 1,
                            explain: "El pasado continuo se forma con was/were + verbo terminado en -ing."
                        },
                        {
                            topic: "Past Continuous - Affirmative",
                            q: "¿Cuál es la forma correcta de 'I (run) yesterday at 5pm'?",
                            options: [
                                "I was running yesterday at 5pm",
                                "I were running yesterday at 5pm",
                                "I am running yesterday at 5pm",
                                "I ran yesterday at 5pm"
                            ],
                            answerIndex: 0,
                            explain: "Con 'I' se usa 'was' + verbo+ing: I was running."
                        },
                        {
                            topic: "Past Continuous - Negative",
                            q: "¿Cuál es la forma negativa de 'They were playing'?",
                            options: [
                                "They were not playing",
                                "They was not playing",
                                "They didn't playing",
                                "They not were playing"
                            ],
                            answerIndex: 0,
                            explain: "La forma negativa es 'They were not playing' o 'They weren't playing'."
                        },
                        {
                            topic: "Past Continuous - Contractions",
                            q: "¿Cuál es la contracción de 'She was not writing'?",
                            options: [
                                "She wasn't writing",
                                "She weren't writing",
                                "She's not writing",
                                "She didn't writing"
                            ],
                            answerIndex: 0,
                            explain: "La contracción de 'was not' es 'wasn't': She wasn't writing."
                        },
                        {
                            topic: "Past Continuous - Interrogative",
                            q: "¿Cuál es la pregunta correcta en pasado continuo?",
                            options: [
                                "You were studying?",
                                "Were you studying?",
                                "Did you studying?",
                                "Was you studying?"
                            ],
                            answerIndex: 1,
                            explain: "La interrogativa se forma con 'Was/Were' al inicio: Were you studying?"
                        },
                        {
                            topic: "Past Continuous - Short answers",
                            q: "¿Cuál es la respuesta corta afirmativa a 'Was she sleeping?'",
                            options: [
                                "Yes, she was",
                                "Yes, she were",
                                "Yes, she did",
                                "Yes, she is"
                            ],
                            answerIndex: 0,
                            explain: "La respuesta corta afirmativa es 'Yes, she was'."
                        },
                        {
                            topic: "Wh-words with Past Continuous",
                            q: "¿Cuál es la estructura para preguntas con wh-words en pasado continuo?",
                            options: [
                                "Wh-word + was/were + sujeto + verbo+ing?",
                                "Wh-word + sujeto + was/were + verbo+ing?",
                                "Was/Were + wh-word + sujeto + verbo+ing?",
                                "Wh-word + did + sujeto + verbo?"
                            ],
                            answerIndex: 0,
                            explain: "La estructura es: Wh-word + was/were + sujeto + verbo+ing? Ejemplo: What were you doing?"
                        },
                        {
                            topic: "Reading",
                            q: "En la lectura 'A strange adventure!', ¿qué llevaban puesto las personas extrañas?",
                            options: [
                                "Ropa normal",
                                "Ropa de otra época (old hats, jackets, dresses)",
                                "Uniformes",
                                "Trajes de baño"
                            ],
                            answerIndex: 1,
                            explain: "El texto dice: 'They were wearing old hats, jackets and dresses from another century.'"
                        },
                        {
                            topic: "Past Continuous",
                            q: "¿Cuál es la forma correcta de 'He (drive) when the accident happened'?",
                            options: [
                                "He was driving when the accident happened",
                                "He drove when the accident happened",
                                "He is driving when the accident happened",
                                "He were driving when the accident happened"
                            ],
                            answerIndex: 0,
                            explain: "Se usa pasado continuo para la acción larga (driving) interrumpida por una acción corta (accident happened)."
                        }
                    ]
                },
                // ACTIVIDAD 2: Simple Past (repaso) y Past Time Expressions
                act2: {
                    nombre: "Actividad 2: Simple Past",
                    desc: "Pasado simple (repaso), verbos regulares e irregulares, auxiliar did, wh-words, past time expressions",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Simple Past - Regular verbs",
                            q: "¿Cómo se forma el pasado de verbos regulares terminados en 'e'?",
                            options: [
                                "Añadiendo -ed",
                                "Añadiendo solo -d",
                                "Doblando la consonante",
                                "Cambiando la y por i"
                            ],
                            answerIndex: 1,
                            explain: "Los verbos terminados en 'e' solo añaden -d: love → loved."
                        },
                        {
                            topic: "Simple Past - Irregular verbs",
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
                            topic: "Auxiliary did",
                            q: "¿Cómo se forma la negación en pasado simple?",
                            options: [
                                "Sujeto + did + not + verbo en pasado",
                                "Sujeto + did + not + verbo en infinitivo",
                                "Sujeto + not + verbo en pasado",
                                "Sujeto + didn't + verbo en pasado"
                            ],
                            answerIndex: 1,
                            explain: "La negación se forma con 'did not' (didn't) + verbo en infinitivo."
                        },
                        {
                            topic: "Auxiliary did",
                            q: "¿Cuál es la contracción de 'did not'?",
                            options: [
                                "didn't",
                                "didnt",
                                "dident",
                                "diddn't"
                            ],
                            answerIndex: 0,
                            explain: "La contracción de 'did not' es 'didn't'."
                        },
                        {
                            topic: "Simple Past - Interrogative",
                            q: "¿Cuál es la forma interrogativa correcta en pasado simple?",
                            options: [
                                "Did you went?",
                                "Did you go?",
                                "You did go?",
                                "Went you?"
                            ],
                            answerIndex: 1,
                            explain: "La interrogativa se forma con 'Did' + sujeto + verbo en infinitivo: Did you go?"
                        },
                        {
                            topic: "Simple Past - Short answers",
                            q: "¿Cuál es la respuesta corta negativa a 'Did you play?'",
                            options: [
                                "No, I didn't",
                                "No, I don't",
                                "No, I wasn't",
                                "No, I haven't"
                            ],
                            answerIndex: 0,
                            explain: "La respuesta corta negativa es 'No, I didn't'."
                        },
                        {
                            topic: "Wh-words in Simple Past",
                            q: "¿Cuál es la estructura para preguntas con wh-words en pasado simple?",
                            options: [
                                "Wh-word + did + sujeto + verbo en infinitivo?",
                                "Wh-word + sujeto + did + verbo?",
                                "Wh-word + verbo en pasado + sujeto?",
                                "Did + wh-word + sujeto + verbo?"
                            ],
                            answerIndex: 0,
                            explain: "La estructura es: Wh-word + did + sujeto + verbo en infinitivo? Ejemplo: What did you do?"
                        },
                        {
                            topic: "Past time expressions",
                            q: "¿Cuál es una expresión de tiempo pasado?",
                            options: [
                                "tomorrow",
                                "next week",
                                "last year",
                                "today"
                            ],
                            answerIndex: 2,
                            explain: "'Last year' (el año pasado) es una expresión de tiempo pasado."
                        },
                        {
                            topic: "Reading - Charly's weekend",
                            q: "En el texto 'Charly's weekend', ¿qué regalo recibió Charly el domingo?",
                            options: [
                                "Un libro",
                                "Un perro (puppy)",
                                "Un pastel",
                                "Un coche"
                            ],
                            answerIndex: 1,
                            explain: "Su madre le regaló un perro: 'she gave me a puppy'."
                        },
                        {
                            topic: "Dialogue 4",
                            q: "En el diálogo, ¿qué hizo Helen después del partido de voleibol?",
                            options: [
                                "Fue al supermercado",
                                "Fue a casa y comió pizza",
                                "Estudió para un examen",
                                "Fue al cine"
                            ],
                            answerIndex: 1,
                            explain: "Helen dice: 'We went home and ate pizza'."
                        }
                    ]
                },
                // ACTIVIDAD 3: Past Continuous with when and while
                act3: {
                    nombre: "Actividad 3: Past Continuous with when and while",
                    desc: "Contraste entre pasado simple y pasado continuo, uso de when y while, conectores de secuencia",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "When vs While",
                            q: "¿Cuál es la diferencia principal entre 'when' y 'while'?",
                            options: [
                                "When es para acciones cortas, while para acciones largas",
                                "When es para el futuro, while para el pasado",
                                "When es para preguntas, while para afirmaciones",
                                "No hay diferencia"
                            ],
                            answerIndex: 0,
                            explain: "'When' se usa cuando una acción es corta (pasado simple) y otra larga (pasado continuo). 'While' se usa cuando ambas acciones son largas (pasado continuo)."
                        },
                        {
                            topic: "When",
                            q: "¿Qué tiempo verbal se usa con 'when' para la acción corta?",
                            options: [
                                "Past Continuous",
                                "Simple Past",
                                "Present Perfect",
                                "Future"
                            ],
                            answerIndex: 1,
                            explain: "La acción corta que interrumpe se expresa en Simple Past."
                        },
                        {
                            topic: "While",
                            q: "¿Qué tiempo verbal se usa con 'while' para ambas acciones?",
                            options: [
                                "Simple Past",
                                "Past Continuous",
                                "Present Perfect",
                                "Future"
                            ],
                            answerIndex: 1,
                            explain: "Con 'while', ambas acciones se expresan en Past Continuous porque son largas y simultáneas."
                        },
                        {
                            topic: "Example with when",
                            q: "En la oración 'When Sam knocked the door, my sister was watching TV', ¿qué acción es larga?",
                            options: [
                                "Sam knocked the door",
                                "My sister was watching TV",
                                "Ambas",
                                "Ninguna"
                            ],
                            answerIndex: 1,
                            explain: "La acción larga es 'my sister was watching TV' (pasado continuo)."
                        },
                        {
                            topic: "Example with while",
                            q: "¿Cuál es un ejemplo correcto con 'while'?",
                            options: [
                                "While I was studying, my brother called me",
                                "While I studied, my brother called me",
                                "I studied while my brother was calling me",
                                "While I was studying, my brother was calling me"
                            ],
                            answerIndex: 3,
                            explain: "Con 'while', ambas acciones deben estar en pasado continuo: 'While I was studying, my brother was calling me'."
                        },
                        {
                            topic: "Sentence completion",
                            q: "Completa: 'I was sleeping ___ the phone rang'.",
                            options: [
                                "while",
                                "when",
                                "during",
                                "as"
                            ],
                            answerIndex: 1,
                            explain: "Se usa 'when' porque la acción 'the phone rang' es corta y 'I was sleeping' es larga."
                        },
                        {
                            topic: "Sentence completion",
                            q: "Completa: 'He was cooking dinner ___ I was setting the table'.",
                            options: [
                                "when",
                                "while",
                                "after",
                                "before"
                            ],
                            answerIndex: 1,
                            explain: "Se usa 'while' porque ambas acciones son largas y simultáneas."
                        },
                        {
                            topic: "Contrast",
                            q: "¿Qué expresa el contraste entre pasado simple y pasado continuo?",
                            options: [
                                "Acciones futuras",
                                "Una acción larga interrumpida por otra acción corta",
                                "Dos acciones cortas",
                                "Acciones habituales"
                            ],
                            answerIndex: 1,
                            explain: "El contraste entre pasado simple y continuo muestra una acción larga (en progreso) interrumpida por una acción corta."
                        },
                        {
                            topic: "Correct sentence",
                            q: "¿Cuál es la forma correcta de 'Mientras caminaba, vi a mi amigo'?",
                            options: [
                                "While I was walking, I saw my friend",
                                "When I was walking, I saw my friend",
                                "While I walked, I was seeing my friend",
                                "When I walked, I was seeing my friend"
                            ],
                            answerIndex: 0,
                            explain: "La forma correcta es 'While I was walking, I saw my friend' (acción larga en continuo, acción corta en simple)."
                        },
                        {
                            topic: "Focus rule",
                            q: "¿Cuándo se usa 'when' en contraste de tiempos?",
                            options: [
                                "Cuando ambas acciones son largas",
                                "Cuando una acción es larga y otra es corta",
                                "Cuando ambas acciones son cortas",
                                "Solo para preguntas"
                            ],
                            answerIndex: 1,
                            explain: "Se usa 'when' cuando una acción es larga (pasado continuo) y la otra es corta (pasado simple)."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: I LIKE IT! ==========
        modulo3: {
            nombre: "Módulo 3: I like it!",
            actividades: {
                // ACTIVIDAD 1: Likes and Dislikes
                act1: {
                    nombre: "Actividad 1: Likes and Dislikes",
                    desc: "Verbos de gusto (like, enjoy, love, hate, dislike), gerundios, vocabulario de deportes y transporte",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Likes",
                            q: "¿Qué forma verbal sigue a 'like' cuando se habla de actividades?",
                            options: [
                                "Infinitivo con to",
                                "Gerundio (-ing)",
                                "Infinitivo sin to",
                                "Past participle"
                            ],
                            answerIndex: 1,
                            explain: "El verbo 'like' cuando expresa gusto por una actividad requiere el verbo en gerundio (-ing)."
                        },
                        {
                            topic: "Verb to enjoy",
                            q: "¿Qué significa el verbo 'to enjoy'?",
                            options: [
                                "Odiar",
                                "Disfrutar",
                                "Preferir",
                                "Necesitar"
                            ],
                            answerIndex: 1,
                            explain: "'To enjoy' significa disfrutar. Ejemplo: She enjoys running."
                        },
                        {
                            topic: "Verb to hate",
                            q: "¿Qué expresa el verbo 'to hate'?",
                            options: [
                                "Gusto moderado",
                                "Odiar (fuerte disgusto)",
                                "Preferencia",
                                "Necesidad"
                            ],
                            answerIndex: 1,
                            explain: "'To hate' significa odiar, expresa un disgusto fuerte."
                        },
                        {
                            topic: "Negative form",
                            q: "¿Cómo se expresa 'no me gusta' sin usar 'dislike'?",
                            options: [
                                "I don't like",
                                "I hate",
                                "I enjoy not",
                                "I love not"
                            ],
                            answerIndex: 0,
                            explain: "Se puede usar la forma negativa 'don't like' en lugar de 'dislike'."
                        },
                        {
                            topic: "Verb to prefer",
                            q: "¿Qué significa 'to prefer'?",
                            options: [
                                "Odiar",
                                "Disfrutar",
                                "Preferir",
                                "Necesitar"
                            ],
                            answerIndex: 2,
                            explain: "'To prefer' significa preferir. Ejemplo: I prefer running."
                        },
                        {
                            topic: "Gerund form",
                            q: "¿Cuál es la forma correcta de 'He likes (swim)'?",
                            options: [
                                "He likes swim",
                                "He likes to swim",
                                "He likes swimming",
                                "He like swimming"
                            ],
                            answerIndex: 2,
                            explain: "Después de 'like' se usa el gerundio: He likes swimming."
                        },
                        {
                            topic: "Vocabulary - Sports",
                            q: "¿Cómo se dice 'fútbol' en inglés?",
                            options: [
                                "Football",
                                "Soccer",
                                "Both are correct",
                                "Footbal"
                            ],
                            answerIndex: 2,
                            explain: "Tanto 'football' como 'soccer' son correctos para referirse al fútbol."
                        },
                        {
                            topic: "Vocabulary - Transportation",
                            q: "¿Cómo se dice 'camión' en inglés?",
                            options: [
                                "Car",
                                "Bus",
                                "Truck",
                                "Lorry"
                            ],
                            answerIndex: 1,
                            explain: "'Bus' significa camión de pasajeros o autobús."
                        },
                        {
                            topic: "Vocabulary - Jobs",
                            q: "¿Qué profesión es 'veterinarian'?",
                            options: [
                                "Doctor",
                                "Veterinario",
                                "Enfermero",
                                "Científico"
                            ],
                            answerIndex: 1,
                            explain: "'Veterinarian' significa veterinario."
                        },
                        {
                            topic: "Likes and Dislikes",
                            q: "¿Cuál de los siguientes verbos expresa el gusto más fuerte?",
                            options: [
                                "Like",
                                "Enjoy",
                                "Love",
                                "Prefer"
                            ],
                            answerIndex: 2,
                            explain: "'Love' expresa el gusto más fuerte (amar, encantar)."
                        }
                    ]
                },
                // ACTIVIDAD 2: Opinions (need, want, think, know, believe)
                act2: {
                    nombre: "Actividad 2: Opinions",
                    desc: "Verbos de opinión y deseo (need, want, think, know, believe), infinitivos, uso de that",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Opinion verbs",
                            q: "¿Qué forma verbal sigue a 'need' y 'want'?",
                            options: [
                                "Gerundio (-ing)",
                                "Infinitivo con to",
                                "Past participle",
                                "Base form sin to"
                            ],
                            answerIndex: 1,
                            explain: "Los verbos 'need' y 'want' requieren el infinitivo con 'to'."
                        },
                        {
                            topic: "Verb to think",
                            q: "¿Qué significa 'to think'?",
                            options: [
                                "Creer",
                                "Pensar",
                                "Saber",
                                "Necesitar"
                            ],
                            answerIndex: 1,
                            explain: "'To think' significa pensar o tener una idea/opinión sobre algo."
                        },
                        {
                            topic: "Verb to believe",
                            q: "¿Qué significa 'to believe'?",
                            options: [
                                "Creer",
                                "Pensar",
                                "Saber",
                                "Necesitar"
                            ],
                            answerIndex: 0,
                            explain: "'To believe' significa creer que algo es verdadero."
                        },
                        {
                            topic: "Using that",
                            q: "¿Con qué verbos se puede usar 'that' para dar opiniones?",
                            options: [
                                "Need y want",
                                "Think y believe",
                                "Like y enjoy",
                                "Love y hate"
                            ],
                            answerIndex: 1,
                            explain: "Los verbos 'think' y 'believe' pueden usar 'that' cuando se dan opiniones."
                        },
                        {
                            topic: "Verb to need",
                            q: "¿Cuál es un ejemplo correcto con 'need'?",
                            options: [
                                "I need go to the hospital",
                                "I need to go to the hospital",
                                "I need going to the hospital",
                                "I need went to the hospital"
                            ],
                            answerIndex: 1,
                            explain: "'Need' se usa con infinitivo: I need to go to the hospital."
                        },
                        {
                            topic: "Verb to want",
                            q: "¿Cuál es un ejemplo correcto con 'want'?",
                            options: [
                                "We want to travel abroad",
                                "We want travel abroad",
                                "We want traveling abroad",
                                "We want travelled abroad"
                            ],
                            answerIndex: 0,
                            explain: "'Want' se usa con infinitivo: We want to travel abroad."
                        },
                        {
                            topic: "Difference",
                            q: "¿Cuál es la diferencia entre verbos como 'like' y verbos como 'need'?",
                            options: [
                                "Like usa infinitivo, need usa gerundio",
                                "Like usa gerundio, need usa infinitivo",
                                "Ambos usan gerundio",
                                "Ambos usan infinitivo"
                            ],
                            answerIndex: 1,
                            explain: "Verbos de gusto (like, enjoy, love, hate) usan gerundio; verbos de deseo/necesidad (need, want) usan infinitivo."
                        },
                        {
                            topic: "Example with think",
                            q: "¿Cuál es la forma correcta de 'I think (that) I have met you before'?",
                            options: [
                                "I think that I have met you before",
                                "I think I have meet you before",
                                "I think to meet you before",
                                "I think meeting you before"
                            ],
                            answerIndex: 0,
                            explain: "'Think' puede usar 'that' y va seguido de una cláusula completa."
                        },
                        {
                            topic: "Verb to know",
                            q: "¿Qué significa 'to know'?",
                            options: [
                                "Creer",
                                "Saber/conocer",
                                "Pensar",
                                "Necesitar"
                            ],
                            answerIndex: 1,
                            explain: "'To know' significa saber o conocer."
                        },
                        {
                            topic: "Infinitive after verbs",
                            q: "¿Cuál de estos verbos NO requiere infinitivo?",
                            options: [
                                "Need",
                                "Want",
                                "Like",
                                "Think"
                            ],
                            answerIndex: 2,
                            explain: "'Like' requiere gerundio (-ing), no infinitivo."
                        }
                    ]
                }
            }
        }
    }
};

export default ingles3;