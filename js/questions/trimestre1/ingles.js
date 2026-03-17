// ============================================
// INGLÉS I - TRIMESTRE 1
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const ingles1 = {
    id: "ingles1",
    nombre: "INGLÉS I",
    icono: "🇬🇧",
    descripcion: "Gramática básica: verb to be, have got, can, presente simple, vocabulario",
    modulos: {
        // ========== MÓDULO 1: NICE TO MEET YOU ==========
        modulo1: {
            nombre: "Módulo 1: Nice to meet you",
            actividades: {
                // ACTIVIDAD 1: Greetings, subject pronouns, verb to be, numbers
                act1: {
                    nombre: "Actividad 1: Greetings, verb to be and numbers",
                    desc: "Saludos, pronombres personales, verbo ser/estar, números cardinales y ordinales",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Greetings",
                            q: "¿Cómo se dice 'Buenos días' en inglés?",
                            options: [
                                "Good evening",
                                "Good morning",
                                "Good afternoon",
                                "Good night"
                            ],
                            answerIndex: 1,
                            explain: "'Good morning' se usa para saludar por la mañana (hasta antes del mediodía)."
                        },
                        {
                            topic: "Greetings",
                            q: "¿Cuál es la respuesta correcta a 'How are you?' cuando te sientes bien?",
                            options: [
                                "I'm sick",
                                "I'm fine, thank you",
                                "Goodbye",
                                "Not so good"
                            ],
                            answerIndex: 1,
                            explain: "'I'm fine, thank you' es una respuesta común y educada para decir que te sientes bien."
                        },
                        {
                            topic: "Subject Pronouns",
                            q: "¿Qué pronombre personal sustituye a 'Marcela' en la frase 'Marcela is pretty'?",
                            options: [
                                "He",
                                "It",
                                "She",
                                "They"
                            ],
                            answerIndex: 2,
                            explain: "'She' se usa para sustituir nombres femeninos singulares como Marcela."
                        },
                        {
                            topic: "Subject Pronouns",
                            q: "¿Qué pronombre personal se usa para referirse a un objeto (por ejemplo, 'the book')?",
                            options: [
                                "He",
                                "She",
                                "It",
                                "They"
                            ],
                            answerIndex: 2,
                            explain: "'It' se usa para objetos, animales o cosas cuando no se especifica el género."
                        },
                        {
                            topic: "Verb to be",
                            q: "¿Cuál es la forma correcta del verbo to be para 'I' en afirmativo?",
                            options: [
                                "I is",
                                "I are",
                                "I am",
                                "I be"
                            ],
                            answerIndex: 2,
                            explain: "El verbo to be para 'I' es 'am': I am (yo soy/estoy)."
                        },
                        {
                            topic: "Verb to be",
                            q: "¿Cómo se dice 'Ella no es maestra' en inglés?",
                            options: [
                                "She is not teacher",
                                "She not is teacher",
                                "She aren't teacher",
                                "She isn't a teacher"
                            ],
                            answerIndex: 3,
                            explain: "La forma negativa correcta es 'She isn't a teacher' o 'She is not a teacher'."
                        },
                        {
                            topic: "Verb to be",
                            q: "¿Cuál es la pregunta correcta para 'Are you a student?' en forma interrogativa?",
                            options: [
                                "You are a student?",
                                "Is you a student?",
                                "Are you a student?",
                                "Am you a student?"
                            ],
                            answerIndex: 2,
                            explain: "La forma interrogativa correcta con 'you' es 'Are you...?'"
                        },
                        {
                            topic: "Cardinal numbers",
                            q: "¿Cómo se escribe el número 15 en inglés?",
                            options: [
                                "Fifty",
                                "Fifteen",
                                "Five",
                                "Fiveteen"
                            ],
                            answerIndex: 1,
                            explain: "15 se escribe 'fifteen' (no 'fiveteen')."
                        },
                        {
                            topic: "Cardinal numbers",
                            q: "¿Cómo se escribe 100 en inglés?",
                            options: [
                                "One hundred",
                                "One thousand",
                                "One million",
                                "Ten hundred"
                            ],
                            answerIndex: 0,
                            explain: "100 es 'one hundred'."
                        },
                        {
                            topic: "Ordinal numbers",
                            q: "¿Cómo se escribe '1st' en letras?",
                            options: [
                                "One",
                                "First",
                                "Firth",
                                "Oneth"
                            ],
                            answerIndex: 1,
                            explain: "1st se escribe 'first'."
                        }
                    ]
                },
                // ACTIVIDAD 2: Countries, nationalities, imperative, a/an, have got
                act2: {
                    nombre: "Actividad 2: Countries, imperative, a/an and have got",
                    desc: "Países y nacionalidades, modo imperativo, artículos indefinidos, verbo have got",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Imperative",
                            q: "¿Cómo se dice 'Siéntate' en inglés usando el imperativo?",
                            options: [
                                "Stand up",
                                "Sit down",
                                "Come here",
                                "Stop talking"
                            ],
                            answerIndex: 1,
                            explain: "'Sit down' es la forma imperativa para decir 'siéntate'."
                        },
                        {
                            topic: "Imperative",
                            q: "¿Cómo se forma el imperativo negativo en inglés?",
                            options: [
                                "Not + verb",
                                "Don't + verb",
                                "No + verb",
                                "Verb + not"
                            ],
                            answerIndex: 1,
                            explain: "El imperativo negativo se forma con 'don't' + verbo: Don't touch me."
                        },
                        {
                            topic: "Indefinite article",
                            q: "¿Cuál es el artículo indefinido correcto para 'elephant'?",
                            options: [
                                "A elephant",
                                "An elephant",
                                "The elephant",
                                "Some elephant"
                            ],
                            answerIndex: 1,
                            explain: "Se usa 'an' antes de palabras que comienzan con sonido vocálico: an elephant."
                        },
                        {
                            topic: "Indefinite article",
                            q: "¿Cuál es el artículo correcto para 'university'?",
                            options: [
                                "A university",
                                "An university",
                                "The university",
                                "Some university"
                            ],
                            answerIndex: 0,
                            explain: "Aunque 'university' empieza con vocal, tiene sonido consonántico /ju:/, por eso se usa 'a'."
                        },
                        {
                            topic: "Have got",
                            q: "¿Cómo se dice 'Yo tengo un perro' en inglés?",
                            options: [
                                "I has a dog",
                                "I have got a dog",
                                "I got have a dog",
                                "I having a dog"
                            ],
                            answerIndex: 1,
                            explain: "La forma correcta para expresar posesión con 'I' es 'I have got a dog'."
                        },
                        {
                            topic: "Have got",
                            q: "¿Cuál es la forma correcta de 'have got' para 'He'?",
                            options: [
                                "He have got",
                                "He has got",
                                "He haves got",
                                "He having got"
                            ],
                            answerIndex: 1,
                            explain: "Para tercera persona singular (he, she, it) se usa 'has got'."
                        },
                        {
                            topic: "Countries",
                            q: "¿Cuál es la nacionalidad de alguien que nació en Mexico?",
                            options: [
                                "Mexican",
                                "Spain",
                                "Mexic",
                                "Mexicoan"
                            ],
                            answerIndex: 0,
                            explain: "La nacionalidad de México es 'Mexican'."
                        },
                        {
                            topic: "Countries",
                            q: "¿Cómo se llama la nacionalidad de alguien de Japan?",
                            options: [
                                "Japanish",
                                "Japanese",
                                "Japonese",
                                "Japonic"
                            ],
                            answerIndex: 1,
                            explain: "La nacionalidad de Japón es 'Japanese'."
                        },
                        {
                            topic: "Imperative",
                            q: "¿Cuál de las siguientes es una instrucción en imperativo?",
                            options: [
                                "You open the book",
                                "Opening the book",
                                "Open your book",
                                "Opens your book"
                            ],
                            answerIndex: 2,
                            explain: "'Open your book' es un imperativo porque da una instrucción directa sin sujeto."
                        },
                        {
                            topic: "Indefinite article",
                            q: "¿Qué artículo se usa con 'hour'?",
                            options: [
                                "A hour",
                                "An hour",
                                "The hour",
                                "Some hour"
                            ],
                            answerIndex: 1,
                            explain: "Aunque 'hour' empieza con consonante, la h no se pronuncia, por eso se usa 'an'."
                        }
                    ]
                },
                // ACTIVIDAD 3: Colours, demonstratives, prepositions, there is/are, possessive adjectives, possessive case
                act3: {
                    nombre: "Actividad 3: Demonstratives, there is/are and possessives",
                    desc: "Colores, adjetivos demostrativos, preposiciones de lugar, there is/are, adjetivos posesivos, caso posesivo",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Demonstratives",
                            q: "¿Qué demostrativo se usa para un objeto singular que está cerca?",
                            options: [
                                "That",
                                "These",
                                "This",
                                "Those"
                            ],
                            answerIndex: 2,
                            explain: "'This' se usa para objetos singulares que están cerca del hablante."
                        },
                        {
                            topic: "Demonstratives",
                            q: "¿Qué demostrativo se usa para objetos plurales que están lejos?",
                            options: [
                                "This",
                                "That",
                                "These",
                                "Those"
                            ],
                            answerIndex: 3,
                            explain: "'Those' se usa para objetos plurales que están lejos."
                        },
                        {
                            topic: "Prepositions",
                            q: "¿Qué preposición indica que algo está sobre una superficie?",
                            options: [
                                "In",
                                "On",
                                "At",
                                "Under"
                            ],
                            answerIndex: 1,
                            explain: "'On' se usa para indicar que algo está sobre una superficie: The book is on the table."
                        },
                        {
                            topic: "There is/are",
                            q: "¿Cómo se dice 'Hay un libro en la mesa' en inglés?",
                            options: [
                                "Is a book on the table",
                                "There is a book on the table",
                                "There are a book on the table",
                                "Have a book on the table"
                            ],
                            answerIndex: 1,
                            explain: "Para singular se usa 'There is a...'"
                        },
                        {
                            topic: "There is/are",
                            q: "¿Cuál es la forma negativa de 'There are three chairs'?",
                            options: [
                                "There not are three chairs",
                                "There aren't three chairs",
                                "There isn't three chairs",
                                "There no are three chairs"
                            ],
                            answerIndex: 1,
                            explain: "La negación de 'there are' es 'there aren't'."
                        },
                        {
                            topic: "Possessive adjectives",
                            q: "¿Qué adjetivo posesivo corresponde a 'I'?",
                            options: [
                                "Mine",
                                "My",
                                "Me",
                                "I's"
                            ],
                            answerIndex: 1,
                            explain: "El adjetivo posesivo para 'I' es 'my': This is my book."
                        },
                        {
                            topic: "Possessive adjectives",
                            q: "¿Cómo se dice 'su libro' (de ella) en inglés?",
                            options: [
                                "His book",
                                "Her book",
                                "Its book",
                                "Your book"
                            ],
                            answerIndex: 1,
                            explain: "'Her book' significa 'el libro de ella'."
                        },
                        {
                            topic: "Possessive case",
                            q: "¿Cómo se forma el posesivo para 'Jim' en 'el padre de Jim'?",
                            options: [
                                "Jims father",
                                "Jim's father",
                                "Father of Jim",
                                "Jim father"
                            ],
                            answerIndex: 1,
                            explain: "Se agrega 's al nombre: Jim's father."
                        },
                        {
                            topic: "Possessive case",
                            q: "¿Cómo se forma el posesivo para un sustantivo plural como 'parents'?",
                            options: [
                                "Parent's",
                                "Parents'",
                                "Parents's",
                                "Parents of"
                            ],
                            answerIndex: 1,
                            explain: "Para plurales que terminan en s, solo se agrega apóstrofe: parents'."
                        },
                        {
                            topic: "Family members",
                            q: "¿Cómo se dice 'hermano' en inglés?",
                            options: [
                                "Sister",
                                "Brother",
                                "Cousin",
                                "Nephew"
                            ],
                            answerIndex: 1,
                            explain: "'Brother' significa hermano."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: MY DAILY ROUTINES ==========
        modulo2: {
            nombre: "Módulo 2: My daily routines",
            actividades: {
                // ACTIVIDAD 1: Wh-questions, simple present, auxiliary do/does
                act1: {
                    nombre: "Actividad 1: Wh-questions and simple present",
                    desc: "Palabras Wh-, presente simple, verbo auxiliar do/does, vocabulario de deportes",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Wh-questions",
                            q: "¿Qué palabra Wh- se usa para preguntar por personas?",
                            options: [
                                "What",
                                "Where",
                                "Who",
                                "When"
                            ],
                            answerIndex: 2,
                            explain: "'Who' se usa para preguntar por personas: Who is that?"
                        },
                        {
                            topic: "Wh-questions",
                            q: "¿Cómo se pregunta por la razón de algo?",
                            options: [
                                "What",
                                "Where",
                                "Why",
                                "How"
                            ],
                            answerIndex: 2,
                            explain: "'Why' se usa para preguntar por razones: Why are you here?"
                        },
                        {
                            topic: "Simple present",
                            q: "¿Cuál es la forma correcta para 'He' en presente simple?",
                            options: [
                                "He play",
                                "He plays",
                                "He playing",
                                "He does play"
                            ],
                            answerIndex: 1,
                            explain: "En tercera persona singular se agrega -s al verbo: He plays."
                        },
                        {
                            topic: "Simple present",
                            q: "¿Qué verbo auxiliar se usa para formar negaciones en presente simple?",
                            options: [
                                "To be",
                                "To have",
                                "To do",
                                "To can"
                            ],
                            answerIndex: 2,
                            explain: "El auxiliar 'do/does' se usa para formar negaciones en presente simple."
                        },
                        {
                            topic: "Simple present",
                            q: "¿Cómo se dice 'Ella no estudia' en inglés?",
                            options: [
                                "She not study",
                                "She don't study",
                                "She doesn't study",
                                "She no study"
                            ],
                            answerIndex: 2,
                            explain: "Con 'she' se usa 'doesn't' + verbo en infinitivo: She doesn't study."
                        },
                        {
                            topic: "Simple present",
                            q: "¿Cuál es la pregunta correcta para 'Do you like ice cream?'",
                            options: [
                                "You like ice cream?",
                                "Like you ice cream?",
                                "Do you like ice cream?",
                                "Does you like ice cream?"
                            ],
                            answerIndex: 2,
                            explain: "La forma interrogativa correcta con 'you' es 'Do you like...?'"
                        },
                        {
                            topic: "Simple present",
                            q: "¿Qué verbo termina en -ies en tercera persona?",
                            options: [
                                "Play",
                                "Go",
                                "Study",
                                "Eat"
                            ],
                            answerIndex: 2,
                            explain: "Los verbos terminados en consonante + y cambian la y por ies: study → studies."
                        },
                        {
                            topic: "Simple present",
                            q: "¿Cuál es la respuesta corta afirmativa a 'Does he play football?'",
                            options: [
                                "Yes, he do",
                                "Yes, he does",
                                "Yes, he is",
                                "Yes, he plays"
                            ],
                            answerIndex: 1,
                            explain: "La respuesta corta afirmativa es 'Yes, he does'."
                        },
                        {
                            topic: "Vocabulary",
                            q: "¿Cómo se dice 'ciclismo' en inglés?",
                            options: [
                                "Running",
                                "Cycling",
                                "Swimming",
                                "Skiing"
                            ],
                            answerIndex: 1,
                            explain: "'Cycling' significa ciclismo."
                        },
                        {
                            topic: "Vocabulary",
                            q: "¿Qué actividad significa 'blogging'?",
                            options: [
                                "Leer blogs",
                                "Escribir un blog",
                                "Ver blogs",
                                "Comentar blogs"
                            ],
                            answerIndex: 1,
                            explain: "'Blogging' se refiere a la actividad de escribir o mantener un blog."
                        }
                    ]
                },
                // ACTIVIDAD 2: Adverbs of frequency, daily routines
                act2: {
                    nombre: "Actividad 2: Adverbs of frequency and daily routines",
                    desc: "Adverbios de frecuencia, rutinas diarias, posición de los adverbios",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Adverbs of frequency",
                            q: "¿Qué adverbio de frecuencia significa 'siempre'?",
                            options: [
                                "Usually",
                                "Sometimes",
                                "Always",
                                "Never"
                            ],
                            answerIndex: 2,
                            explain: "'Always' significa siempre (100% de las veces)."
                        },
                        {
                            topic: "Adverbs of frequency",
                            q: "¿Qué adverbio significa 'nunca'?",
                            options: [
                                "Always",
                                "Usually",
                                "Sometimes",
                                "Never"
                            ],
                            answerIndex: 3,
                            explain: "'Never' significa nunca (0% de las veces)."
                        },
                        {
                            topic: "Adverbs of frequency",
                            q: "¿Dónde se colocan los adverbios de frecuencia normalmente?",
                            options: [
                                "Al final de la oración",
                                "Después del verbo principal",
                                "Antes del verbo principal",
                                "Al principio de la oración"
                            ],
                            answerIndex: 2,
                            explain: "Los adverbios de frecuencia suelen ir antes del verbo principal: She often studies."
                        },
                        {
                            topic: "Adverbs of frequency",
                            q: "¿Dónde va el adverbio cuando el verbo es 'to be'?",
                            options: [
                                "Antes del verbo",
                                "Después del verbo",
                                "Al inicio",
                                "Al final"
                            ],
                            answerIndex: 1,
                            explain: "Con el verbo 'to be', el adverbio va después: He is always happy."
                        },
                        {
                            topic: "Adverbs of frequency",
                            q: "¿Cómo se pregunta por la frecuencia de una acción?",
                            options: [
                                "What often?",
                                "How often?",
                                "When often?",
                                "Where often?"
                            ],
                            answerIndex: 1,
                            explain: "Se usa 'How often' para preguntar por la frecuencia: How often do you play?"
                        },
                        {
                            topic: "Daily routines",
                            q: "¿Cómo se dice 'levantarse' en inglés?",
                            options: [
                                "Go to bed",
                                "Get up",
                                "Wake up",
                                "Stand up"
                            ],
                            answerIndex: 1,
                            explain: "'Get up' significa levantarse de la cama."
                        },
                        {
                            topic: "Daily routines",
                            q: "¿Cómo se dice 'desayunar' en inglés?",
                            options: [
                                "Have lunch",
                                "Have dinner",
                                "Have breakfast",
                                "Eat morning"
                            ],
                            answerIndex: 2,
                            explain: "'Have breakfast' es desayunar."
                        },
                        {
                            topic: "Adverbs of frequency",
                            q: "¿Qué significa 'sometimes'?",
                            options: [
                                "Siempre",
                                "Nunca",
                                "A veces",
                                "Usualmente"
                            ],
                            answerIndex: 2,
                            explain: "'Sometimes' significa 'a veces'."
                        },
                        {
                            topic: "Adverbs of frequency",
                            q: "¿Cuál es la forma correcta de 'I don't always finish my homework'?",
                            options: [
                                "I always don't finish",
                                "I don't finish always",
                                "I don't always finish",
                                "Always I don't finish"
                            ],
                            answerIndex: 2,
                            explain: "En negaciones, el adverbio va después del auxiliar: I don't always finish."
                        },
                        {
                            topic: "Daily routines",
                            q: "¿Qué actividad significa 'spend time with family'?",
                            options: [
                                "Ir de compras",
                                "Pasar tiempo con la familia",
                                "Hacer ejercicio",
                                "Ver televisión"
                            ],
                            answerIndex: 1,
                            explain: "'Spend time with family' significa pasar tiempo con la familia."
                        }
                    ]
                },
                // ACTIVIDAD 3: Prepositions of time and place, vocabulary
                act3: {
                    nombre: "Actividad 3: Prepositions of time and place",
                    desc: "Preposiciones at, in, on (tiempo y lugar), medios de transporte, lugares públicos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Prepositions of time",
                            q: "¿Qué preposición se usa para horas específicas?",
                            options: [
                                "In",
                                "On",
                                "At",
                                "By"
                            ],
                            answerIndex: 2,
                            explain: "Se usa 'at' para horas específicas: at 5 o'clock."
                        },
                        {
                            topic: "Prepositions of time",
                            q: "¿Qué preposición se usa para meses y años?",
                            options: [
                                "At",
                                "On",
                                "In",
                                "By"
                            ],
                            answerIndex: 2,
                            explain: "Se usa 'in' para meses, años y siglos: in September, in 2019."
                        },
                        {
                            topic: "Prepositions of time",
                            q: "¿Qué preposición se usa para días de la semana?",
                            options: [
                                "In Monday",
                                "At Monday",
                                "On Monday",
                                "By Monday"
                            ],
                            answerIndex: 2,
                            explain: "Se usa 'on' para días: on Monday."
                        },
                        {
                            topic: "Prepositions of place",
                            q: "¿Qué preposición se usa para lugares cerrados o regiones geográficas?",
                            options: [
                                "At",
                                "On",
                                "In",
                                "To"
                            ],
                            answerIndex: 2,
                            explain: "Se usa 'in' para lugares cerrados o regiones: in Mexico, in the garden."
                        },
                        {
                            topic: "Prepositions of place",
                            q: "¿Qué preposición se usa para puntos específicos como 'the bus stop'?",
                            options: [
                                "In",
                                "On",
                                "At",
                                "To"
                            ],
                            answerIndex: 2,
                            explain: "Se usa 'at' para puntos específicos: at the bus stop."
                        },
                        {
                            topic: "Prepositions of place",
                            q: "¿Qué preposición se usa para superficies?",
                            options: [
                                "In",
                                "On",
                                "At",
                                "Over"
                            ],
                            answerIndex: 1,
                            explain: "Se usa 'on' para superficies: on the wall, on the floor."
                        },
                        {
                            topic: "Transportation",
                            q: "¿Cómo se dice 'en coche' en inglés?",
                            options: [
                                "On car",
                                "At car",
                                "In car",
                                "By car"
                            ],
                            answerIndex: 3,
                            explain: "Para medios de transporte se usa 'by': by car, by bus."
                        },
                        {
                            topic: "Places",
                            q: "¿Qué lugar es 'hospital' en español?",
                            options: [
                                "Escuela",
                                "Hospital",
                                "Biblioteca",
                                "Museo"
                            ],
                            answerIndex: 1,
                            explain: "'Hospital' significa hospital."
                        },
                        {
                            topic: "Prepositions",
                            q: "¿Cómo se dice 'en la noche' (en general)?",
                            options: [
                                "In the night",
                                "On the night",
                                "At night",
                                "By night"
                            ],
                            answerIndex: 2,
                            explain: "Se usa 'at night' para referirse a la noche en general."
                        },
                        {
                            topic: "Places",
                            q: "¿Qué significa 'supermarket'?",
                            options: [
                                "Mercado",
                                "Supermercado",
                                "Tienda",
                                "Almacén"
                            ],
                            answerIndex: 1,
                            explain: "'Supermarket' significa supermercado."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: YOU CAN DO IT! ==========
        modulo3: {
            nombre: "Módulo 3: You can do it!",
            actividades: {
                // ACTIVIDAD 1: Modal verb can (ability, permission, possibility)
                act1: {
                    nombre: "Actividad 1: Modal verb can",
                    desc: "Verbo modal can: habilidad, permiso, posibilidad (afirmativo, negativo, interrogativo)",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Can - ability",
                            q: "¿Cómo se dice 'Yo puedo hablar inglés' en inglés?",
                            options: [
                                "I can speak English",
                                "I can to speak English",
                                "I can speaking English",
                                "I cans speak English"
                            ],
                            answerIndex: 0,
                            explain: "Can va seguido de verbo en infinitivo sin 'to': I can speak English."
                        },
                        {
                            topic: "Can - ability",
                            q: "¿Cuál es la forma correcta de 'He can swim' en negativo?",
                            options: [
                                "He don't can swim",
                                "He can not swim",
                                "He cannot swim",
                                "He no can swim"
                            ],
                            answerIndex: 2,
                            explain: "La negación de can es 'cannot' (una palabra) o la contracción 'can't'."
                        },
                        {
                            topic: "Can",
                            q: "¿Cuál es la contracción de 'cannot'?",
                            options: [
                                "Can't",
                                "Cannot",
                                "Cant",
                                "Ca'nt"
                            ],
                            answerIndex: 0,
                            explain: "La contracción de 'cannot' es 'can't'."
                        },
                        {
                            topic: "Can - interrogative",
                            q: "¿Cómo se forma la pregunta '¿Puedo sentarme aquí?'?",
                            options: [
                                "Can I sit here?",
                                "I can sit here?",
                                "Do I can sit here?",
                                "Can to sit here?"
                            ],
                            answerIndex: 0,
                            explain: "En interrogativo, 'can' va antes del sujeto: Can I sit here?"
                        },
                        {
                            topic: "Can - permission",
                            q: "¿Cómo se pide permiso para usar algo?",
                            options: [
                                "Can I use your pen?",
                                "I can use your pen?",
                                "Use I your pen?",
                                "Can use your pen?"
                            ],
                            answerIndex: 0,
                            explain: "Para pedir permiso se usa 'Can I...?'"
                        },
                        {
                            topic: "Can - ability",
                            q: "¿Cuál es la respuesta corta afirmativa a 'Can you swim?'",
                            options: [
                                "Yes, I can",
                                "Yes, I can swim",
                                "Yes, I do",
                                "Yes, I am"
                            ],
                            answerIndex: 0,
                            explain: "La respuesta corta afirmativa es 'Yes, I can'."
                        },
                        {
                            topic: "Can - negative",
                            q: "¿Cómo se dice 'Él no puede venir mañana'?",
                            options: [
                                "He can not come tomorrow",
                                "He cannot come tomorrow",
                                "He doesn't can come",
                                "He no can come"
                            ],
                            answerIndex: 1,
                            explain: "La forma correcta es 'He cannot come tomorrow' o 'He can't come tomorrow'."
                        },
                        {
                            topic: "Can - possibility",
                            q: "¿Cuál de estas oraciones expresa posibilidad?",
                            options: [
                                "I can swim",
                                "Can I go?",
                                "Speaking in public can be fearful",
                                "You can't smoke here"
                            ],
                            answerIndex: 2,
                            explain: "'Speaking in public can be fearful' expresa una posibilidad general."
                        },
                        {
                            topic: "Wh-words with can",
                            q: "¿Cómo se pregunta '¿Qué deportes puedes jugar?'?",
                            options: [
                                "What sports you can play?",
                                "What sports can you play?",
                                "Can you play what sports?",
                                "What can you play sports?"
                            ],
                            answerIndex: 1,
                            explain: "Con wh-words, la estructura es: Wh-word + can + subject + verb?"
                        },
                        {
                            topic: "Can",
                            q: "¿Cuál es la forma afirmativa de 'can' para todas las personas?",
                            options: [
                                "I can, you can, he can, she can, it can, we can, they can",
                                "I can, you can, he cans, she cans, we can, they can",
                                "I can, you can, he can, she cans, it cans, we can",
                                "I cans, you cans, he cans, we cans, they cans"
                            ],
                            answerIndex: 0,
                            explain: "Can no cambia para ninguna persona: siempre es 'can'."
                        }
                    ]
                },
                // ACTIVIDAD 2: Countable and uncountable nouns
                act2: {
                    nombre: "Actividad 2: Countable and uncountable nouns",
                    desc: "Sustantivos contables e incontables, reglas, vocabulario de animales, frutas, verduras",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Countable nouns",
                            q: "¿Cuál de los siguientes es un sustantivo contable?",
                            options: [
                                "Water",
                                "Rice",
                                "Apple",
                                "Sugar"
                            ],
                            answerIndex: 2,
                            explain: "'Apple' es contable porque se puede contar: one apple, two apples."
                        },
                        {
                            topic: "Uncountable nouns",
                            q: "¿Cuál de los siguientes es un sustantivo incontable?",
                            options: [
                                "Cat",
                                "Bottle",
                                "Chair",
                                "Water"
                            ],
                            answerIndex: 3,
                            explain: "'Water' es incontable porque no se puede contar como unidades separadas."
                        },
                        {
                            topic: "Countable nouns",
                            q: "¿Cómo se forma el plural de 'cat'?",
                            options: [
                                "Cats",
                                "Cates",
                                "Cat's",
                                "Catties"
                            ],
                            answerIndex: 0,
                            explain: "La mayoría de los sustantivos forman el plural agregando -s: cats."
                        },
                        {
                            topic: "Uncountable nouns",
                            q: "¿Qué artículo NO se usa con sustantivos incontables?",
                            options: [
                                "The",
                                "Some",
                                "A/an",
                                "Much"
                            ],
                            answerIndex: 2,
                            explain: "No se usa 'a/an' con incontables. Se dice 'water', no 'a water'."
                        },
                        {
                            topic: "Countable nouns",
                            q: "¿Cómo se dice 'una manzana' en inglés?",
                            options: [
                                "Apple",
                                "A apple",
                                "An apple",
                                "One apple"
                            ],
                            answerIndex: 2,
                            explain: "'Apple' empieza con vocal, por eso se usa 'an': an apple."
                        },
                        {
                            topic: "Uncountable nouns",
                            q: "¿Cómo se puede cuantificar 'water'?",
                            options: [
                                "A water",
                                "Two waters",
                                "A bottle of water",
                                "Waters"
                            ],
                            answerIndex: 2,
                            explain: "Para cuantificar incontables se usa 'a bottle of', 'a glass of', etc."
                        },
                        {
                            topic: "Vocabulary",
                            q: "¿Cómo se dice 'pollo' (el animal) en inglés?",
                            options: [
                                "Chicken",
                                "Hen",
                                "Chick",
                                "Rooster"
                            ],
                            answerIndex: 0,
                            explain: "'Chicken' puede referirse al animal o a la carne de pollo."
                        },
                        {
                            topic: "Vocabulary",
                            q: "¿Qué fruta es 'strawberry'?",
                            options: [
                                "Manzana",
                                "Fresa",
                                "Uva",
                                "Naranja"
                            ],
                            answerIndex: 1,
                            explain: "'Strawberry' significa fresa."
                        },
                        {
                            topic: "Vocabulary",
                            q: "¿Qué verdura es 'carrot'?",
                            options: [
                                "Lechuga",
                                "Tomate",
                                "Zanahoria",
                                "Papa"
                            ],
                            answerIndex: 2,
                            explain: "'Carrot' significa zanahoria."
                        },
                        {
                            topic: "Uncountable nouns",
                            q: "¿Qué verbo se usa con sustantivos incontables?",
                            options: [
                                "Verbo en plural",
                                "Verbo en singular",
                                "Verbo en infinitivo",
                                "Cualquier verbo"
                            ],
                            answerIndex: 1,
                            explain: "Los incontables se tratan como singular y llevan verbo en singular: Water is important."
                        }
                    ]
                },
                // ACTIVIDAD 3: Quantifiers (some, any, a lot of, a few, a little, many, much)
                act3: {
                    nombre: "Actividad 3: Quantifiers",
                    desc: "Cuantificadores: some, any, a lot of, a few, a little, many, much",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Some",
                            q: "¿Con qué tipo de oraciones se usa 'some'?",
                            options: [
                                "Negativas",
                                "Interrogativas",
                                "Afirmativas",
                                "Exclamativas"
                            ],
                            answerIndex: 2,
                            explain: "'Some' se usa en oraciones afirmativas: There are some apples."
                        },
                        {
                            topic: "Any",
                            q: "¿Con qué tipo de oraciones se usa 'any'?",
                            options: [
                                "Afirmativas",
                                "Negativas e interrogativas",
                                "Solo afirmativas",
                                "Solo exclamativas"
                            ],
                            answerIndex: 1,
                            explain: "'Any' se usa en negativas e interrogativas: There aren't any apples."
                        },
                        {
                            topic: "Some/Any",
                            q: "¿Cuál es la forma correcta: 'There are ___ apples'? (afirmativo)",
                            options: [
                                "Any",
                                "Some",
                                "Much",
                                "Little"
                            ],
                            answerIndex: 1,
                            explain: "En afirmativo se usa 'some': There are some apples."
                        },
                        {
                            topic: "A lot of",
                            q: "¿Qué significa 'a lot of'?",
                            options: [
                                "Poco",
                                "Mucho",
                                "Algunos",
                                "Ninguno"
                            ],
                            answerIndex: 1,
                            explain: "'A lot of' significa 'mucho' o 'una gran cantidad'."
                        },
                        {
                            topic: "A few",
                            q: "¿Con qué tipo de sustantivos se usa 'a few'?",
                            options: [
                                "Incontables",
                                "Contables en plural",
                                "Contables en singular",
                                "Cualquier sustantivo"
                            ],
                            answerIndex: 1,
                            explain: "'A few' se usa con sustantivos contables en plural: a few apples."
                        },
                        {
                            topic: "A little",
                            q: "¿Con qué tipo de sustantivos se usa 'a little'?",
                            options: [
                                "Contables",
                                "Incontables",
                                "Singulares",
                                "Plurales"
                            ],
                            answerIndex: 1,
                            explain: "'A little' se usa con sustantivos incontables: a little water."
                        },
                        {
                            topic: "Many",
                            q: "¿Con qué tipo de sustantivos se usa 'many'?",
                            options: [
                                "Incontables",
                                "Contables en plural",
                                "Contables en singular",
                                "Todos"
                            ],
                            answerIndex: 1,
                            explain: "'Many' se usa con contables en plural: many books."
                        },
                        {
                            topic: "Much",
                            q: "¿Con qué tipo de sustantivos se usa 'much'?",
                            options: [
                                "Contables",
                                "Incontables",
                                "Plurales",
                                "Singulares contables"
                            ],
                            answerIndex: 1,
                            explain: "'Much' se usa con incontables: much water."
                        },
                        {
                            topic: "Quantifiers",
                            q: "¿Cómo se dice 'No hay ningún problema' en inglés?",
                            options: [
                                "There is some problem",
                                "There isn't any problem",
                                "There are any problems",
                                "There is a lot of problem"
                            ],
                            answerIndex: 1,
                            explain: "En negativo se usa 'any': There isn't any problem."
                        },
                        {
                            topic: "Quantifiers",
                            q: "¿Cuál es la forma correcta: 'She has got ___ books' (muchos)?",
                            options: [
                                "A little",
                                "A few",
                                "Much",
                                "A lot of"
                            ],
                            answerIndex: 3,
                            explain: "'A lot of' se puede usar con contables e incontables: a lot of books."
                        }
                    ]
                }
            }
        }
    }
};

export default ingles1;