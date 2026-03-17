// ============================================
// PENSAMIENTO MATEMÁTICO I - TRIMESTRE 1
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const pensamientoMatematico1 = {
    id: "matematicas1",
    nombre: "PENSAMIENTO MATEMÁTICO I",
    icono: "📊",
    descripcion: "Estadística, probabilidad, lógica, funciones y medidas",
    modulos: {
        // ========== MÓDULO 1: FENÓMENOS MATEMÁTICOS DE SU ENTORNO ==========
        modulo1: {
            nombre: "Módulo 1: Fenómenos Matemáticos de su Entorno",
            actividades: {
                // ACTIVIDAD 1: Conceptos básicos de estadística, variables, gráficas
                act1: {
                    nombre: "Actividad 1: Estadística básica",
                    desc: "Población, muestra, variables, datos, representaciones gráficas",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Población",
                            q: "¿Qué es la población en estadística?",
                            options: [
                                "Un subconjunto de datos",
                                "El conjunto sobre el que estamos interesados en obtener conclusiones",
                                "Un valor particular de la variable",
                                "Una característica observable"
                            ],
                            answerIndex: 1,
                            explain: "La población es el conjunto sobre el que estamos interesados en obtener conclusiones."
                        },
                        {
                            topic: "Muestra",
                            q: "¿Qué es una muestra?",
                            options: [
                                "El conjunto total de la población",
                                "Un subconjunto de la población al que tenemos acceso",
                                "Una característica observable",
                                "Un valor particular de la variable"
                            ],
                            answerIndex: 1,
                            explain: "La muestra es un subconjunto de la población al que tenemos acceso y sobre el que realmente hacemos las observaciones."
                        },
                        {
                            topic: "Variable",
                            q: "¿Qué es una variable en estadística?",
                            options: [
                                "Un valor numérico fijo",
                                "Una característica observable que varía entre individuos",
                                "El conjunto total de datos",
                                "Una representación gráfica"
                            ],
                            answerIndex: 1,
                            explain: "Una variable es una característica observable que varía entre los diferentes individuos de una población."
                        },
                        {
                            topic: "Datos",
                            q: "¿Qué son los datos bivariados?",
                            options: [
                                "Cuando se mide una sola variable",
                                "Cuando se miden dos variables en una sola unidad experimental",
                                "Cuando se miden más de dos variables",
                                "Cuando no se miden variables"
                            ],
                            answerIndex: 1,
                            explain: "Los datos bivariados resultan cuando se miden dos variables en una sola unidad experimental."
                        },
                        {
                            topic: "Gráficas",
                            q: "¿Qué tipo de gráfica es la representación más simple para datos cuantitativos pequeños?",
                            options: [
                                "Histograma",
                                "Gráfica de barras",
                                "Gráfica de puntos",
                                "Gráfica circular"
                            ],
                            answerIndex: 2,
                            explain: "La gráfica de puntos es la representación más simple para datos cuantitativos y se usa en conjuntos pequeños."
                        },
                        {
                            topic: "Gráficas",
                            q: "¿Para qué tipo de variables es especialmente útil la gráfica de barras?",
                            options: [
                                "Variables continuas",
                                "Variables discretas",
                                "Variables categóricas o discretas",
                                "Variables infinitas"
                            ],
                            answerIndex: 2,
                            explain: "La gráfica de barras es especialmente útil para representar datos categóricos o discretos."
                        },
                        {
                            topic: "Variables",
                            q: "¿Qué tipo de variable puede tomar un número finito o contable de valores?",
                            options: [
                                "Variable continua",
                                "Variable discreta",
                                "Variable cualitativa",
                                "Variable dependiente"
                            ],
                            answerIndex: 1,
                            explain: "Una variable discreta puede tomar un número finito o contable de valores."
                        },
                        {
                            topic: "Estadística",
                            q: "¿Qué es la estadística?",
                            options: [
                                "Una rama de la física",
                                "Una ciencia que recolecta, analiza, describe y estudia datos",
                                "El estudio de los números",
                                "La probabilidad de eventos"
                            ],
                            answerIndex: 1,
                            explain: "La estadística es una ciencia que recolecta, analiza, describe y estudia una serie de datos para comprender fenómenos."
                        },
                        {
                            topic: "Probabilidad",
                            q: "¿Qué estudia la probabilidad?",
                            options: [
                                "Números exactos",
                                "El azar y la incertidumbre",
                                "Solo eventos seguros",
                                "Gráficas estadísticas"
                            ],
                            answerIndex: 1,
                            explain: "La probabilidad estudia el azar y la incertidumbre en situaciones donde varios posibles sucesos pueden ocurrir."
                        },
                        {
                            topic: "Muestra aleatoria",
                            q: "¿Qué es una muestra aleatoria?",
                            options: [
                                "Cualquier subconjunto de la población",
                                "Una muestra bien representativa de la población",
                                "Una muestra sin orden",
                                "El conjunto total de datos"
                            ],
                            answerIndex: 1,
                            explain: "Una muestra aleatoria es una muestra bien representativa de la población."
                        }
                    ]
                },
                // ACTIVIDAD 2: Experimentos aleatorios, espacio muestral, eventos
                act2: {
                    nombre: "Actividad 2: Experimentos aleatorios y eventos",
                    desc: "Experimentos aleatorios, espacio muestral, tipos de eventos, operaciones con eventos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Experimento aleatorio",
                            q: "¿Qué es un experimento aleatorio?",
                            options: [
                                "Un experimento con resultados predecibles",
                                "Un experimento cuyos resultados varían aunque las condiciones sean iguales",
                                "Un experimento sin variables",
                                "Un experimento controlado"
                            ],
                            answerIndex: 1,
                            explain: "En experimentos aleatorios no es posible controlar todas las variables, por lo que los resultados varían aunque las condiciones sean similares."
                        },
                        {
                            topic: "Espacio muestral",
                            q: "¿Qué es el espacio muestral?",
                            options: [
                                "El resultado de un experimento",
                                "El conjunto de todos los resultados posibles de un experimento aleatorio",
                                "Una muestra de la población",
                                "Un tipo de evento"
                            ],
                            answerIndex: 1,
                            explain: "El espacio muestral (S) es el conjunto de todos los resultados posibles de un experimento aleatorio."
                        },
                        {
                            topic: "Evento",
                            q: "¿Qué es un evento en probabilidad?",
                            options: [
                                "El espacio muestral completo",
                                "Cualquier recopilación (subconjunto) de resultados contenidos en el espacio muestral",
                                "Un experimento aleatorio",
                                "Una variable estadística"
                            ],
                            answerIndex: 1,
                            explain: "Un evento es cualquier recopilación (subconjunto) de resultados contenidos en el espacio muestral."
                        },
                        {
                            topic: "Evento simple",
                            q: "¿Qué es un evento simple?",
                            options: [
                                "Un evento con varios resultados",
                                "Un evento que consiste en exactamente un resultado",
                                "Un evento imposible",
                                "El espacio muestral completo"
                            ],
                            answerIndex: 1,
                            explain: "Un evento simple consiste en exactamente un resultado del espacio muestral."
                        },
                        {
                            topic: "Evento compuesto",
                            q: "¿Qué es un evento compuesto?",
                            options: [
                                "Un evento con un solo resultado",
                                "Un evento que consiste en más de un resultado",
                                "El espacio muestral",
                                "Un evento vacío"
                            ],
                            answerIndex: 1,
                            explain: "Un evento compuesto consiste en más de un resultado del espacio muestral."
                        },
                        {
                            topic: "Eventos mutuamente excluyentes",
                            q: "¿Qué son los eventos mutuamente excluyentes?",
                            options: [
                                "Eventos que pueden ocurrir simultáneamente",
                                "Eventos donde la ocurrencia de uno prohíbe la ocurrencia del otro",
                                "Eventos independientes",
                                "Eventos complementarios"
                            ],
                            answerIndex: 1,
                            explain: "Eventos mutuamente excluyentes: la ocurrencia de uno prohíbe la ocurrencia del otro. Ejemplo: cara o sello."
                        },
                        {
                            topic: "Eventos colectivamente exhaustivos",
                            q: "¿Qué son los eventos colectivamente exhaustivos?",
                            options: [
                                "Los que no cubren todo el espacio muestral",
                                "Todos los posibles resultados de un experimento que constituyen su espacio muestral",
                                "Eventos que no pueden ocurrir",
                                "Eventos simples"
                            ],
                            answerIndex: 1,
                            explain: "Los eventos colectivamente exhaustivos son todos los posibles resultados de un experimento y constituyen su espacio muestral."
                        },
                        {
                            topic: "Eventos independientes",
                            q: "¿Qué son los eventos independientes?",
                            options: [
                                "Eventos que siempre ocurren juntos",
                                "Eventos donde la ocurrencia de uno no afecta la ocurrencia del otro",
                                "Eventos mutuamente excluyentes",
                                "Eventos complementarios"
                            ],
                            answerIndex: 1,
                            explain: "Eventos independientes: la ocurrencia de uno no tiene nada que ver con la ocurrencia del otro. Ejemplo: lanzar moneda y dado."
                        },
                        {
                            topic: "Evento seguro",
                            q: "¿Qué es el evento seguro?",
                            options: [
                                "El conjunto vacío",
                                "El espacio muestral completo",
                                "Un evento simple",
                                "Un evento imposible"
                            ],
                            answerIndex: 1,
                            explain: "El evento seguro es el espacio muestral completo, contiene todos los resultados posibles."
                        },
                        {
                            topic: "Operaciones con eventos",
                            q: "¿Qué representa la unión de dos eventos A ∪ B?",
                            options: [
                                "Los puntos comunes a A y B",
                                "Todos los puntos muestrales de los eventos A y B",
                                "Los puntos de A que no están en B",
                                "Los puntos que no están en A"
                            ],
                            answerIndex: 1,
                            explain: "La unión A ∪ B contiene todos los puntos muestrales de los eventos A y B."
                        }
                    ]
                },
                // ACTIVIDAD 3: Lógica, proposiciones, silogismos
                act3: {
                    nombre: "Actividad 3: Lógica y silogismos",
                    desc: "Lógica, pensamiento lógico, proposiciones, argumentos, silogismos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Lógica",
                            q: "¿De qué palabra griega proviene el término 'lógica'?",
                            options: [
                                "Pathos",
                                "Ethos",
                                "Logos",
                                "Mythos"
                            ],
                            answerIndex: 2,
                            explain: "La palabra lógica viene del griego antiguo 'logos' que significa palabra, pensamiento, argumento, principio o razón."
                        },
                        {
                            topic: "Lógica",
                            q: "¿Quién formuló los principios de la lógica?",
                            options: [
                                "Platón",
                                "Sócrates",
                                "Aristóteles",
                                "Pitágoras"
                            ],
                            answerIndex: 2,
                            explain: "El gran filósofo griego Aristóteles formuló los principios de la lógica."
                        },
                        {
                            topic: "Sistema lógico",
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
                            topic: "Proposición",
                            q: "¿Qué es una proposición en lógica?",
                            options: [
                                "Una pregunta",
                                "Una frase u oración que puede ser verdadera o falsa",
                                "Una exclamación",
                                "Un mandato"
                            ],
                            answerIndex: 1,
                            explain: "Una proposición es aquella frase u oración que puede asignársele un valor, ya sea Verdadero o Falso."
                        },
                        {
                            topic: "Argumento",
                            q: "¿Cuáles son las partes esenciales de un argumento?",
                            options: [
                                "Sujeto y predicado",
                                "Premisas y conclusión",
                                "Hipótesis y tesis",
                                "Introducción y desarrollo"
                            ],
                            answerIndex: 1,
                            explain: "Un argumento es una estructura conformada por premisas (proposiciones que se afirman como apoyo) y conclusión (proposición sustentada)."
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
                            topic: "Silogismo típico",
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
                            topic: "Silogismo disyuntivo",
                            q: "¿Qué conectivo lógico caracteriza al silogismo disyuntivo?",
                            options: [
                                "Si... entonces",
                                "O",
                                "Y",
                                "No"
                            ],
                            answerIndex: 1,
                            explain: "El silogismo disyuntivo se caracteriza por el uso del conectivo lógico 'o' (disyunción)."
                        },
                        {
                            topic: "Entimema",
                            q: "¿Qué es un entimema?",
                            options: [
                                "Un silogismo con premisa compuesta",
                                "Un silogismo al que se le suprime una premisa por considerarla obvia",
                                "Un silogismo con tres premisas",
                                "Un silogismo circular"
                            ],
                            answerIndex: 1,
                            explain: "El entimema es un silogismo típico al cual se le suprime una de las dos premisas por considerarla obvia."
                        },
                        {
                            topic: "Silogismo sorites",
                            q: "¿Qué caracteriza al silogismo sorites?",
                            options: [
                                "Tiene premisas circulares",
                                "Encadena una serie de premisas donde el predicado de una pasa a ser sujeto de la siguiente",
                                "Solo tiene dos premisas",
                                "No tiene conclusión"
                            ],
                            answerIndex: 1,
                            explain: "El silogismo sorites encadena una serie de premisas, donde el predicado de la primera pasa a ser sujeto de la segunda, y así sucesivamente."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: VARIACIONES DE PROCEDIMIENTOS ALGORÍTMICOS ==========
        modulo2: {
            nombre: "Módulo 2: Variaciones de Procedimientos Algorítmicos",
            actividades: {
                // ACTIVIDAD 1: Técnicas de conteo, definiciones de probabilidad
                act1: {
                    nombre: "Actividad 1: Técnicas de conteo y probabilidad",
                    desc: "Principio de multiplicación, factorial, permutaciones, definiciones de probabilidad",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Principio de multiplicación",
                            q: "¿Qué establece el principio de multiplicación?",
                            options: [
                                "Que el número total de resultados es la suma de las formas",
                                "Que el número total de resultados es el producto de las formas de cada etapa",
                                "Que solo hay una forma de realizar un experimento",
                                "Que las etapas dependen entre sí"
                            ],
                            answerIndex: 1,
                            explain: "El principio de multiplicación establece que si hay n₁ formas para la primera etapa, n₂ para la segunda, etc., el total es (n₁)(n₂)...(nᵣ)."
                        },
                        {
                            topic: "Factorial",
                            q: "¿Cuánto es 5! (5 factorial)?",
                            options: [
                                "25",
                                "120",
                                "60",
                                "100"
                            ],
                            answerIndex: 1,
                            explain: "5! = 5 × 4 × 3 × 2 × 1 = 120."
                        },
                        {
                            topic: "Permutaciones",
                            q: "¿Qué representan las permutaciones?",
                            options: [
                                "Selecciones sin orden",
                                "Arreglos ordenados de elementos tomados de un conjunto",
                                "Combinaciones de elementos",
                                "Repeticiones de elementos"
                            ],
                            answerIndex: 1,
                            explain: "Las permutaciones representan los arreglos ordenados de elementos tomados de un conjunto."
                        },
                        {
                            topic: "Permutación circular",
                            q: "¿Cuál es la fórmula para permutaciones circulares?",
                            options: [
                                "n!",
                                "(n-1)!",
                                "n!/(n-r)!",
                                "n!/r!"
                            ],
                            answerIndex: 1,
                            explain: "La fórmula para permutaciones circulares es (n-1)!, donde se considera que el último elemento se conecta con el primero."
                        },
                        {
                            topic: "Definición clásica",
                            q: "¿A quién se atribuye la definición clásica de probabilidad?",
                            options: [
                                "Kolmogorov",
                                "Laplace",
                                "Bayes",
                                "Gauss"
                            ],
                            answerIndex: 1,
                            explain: "La definición clásica de probabilidad se atribuye a Laplace (1900) y se conoce como probabilidad a priori."
                        },
                        {
                            topic: "Definición clásica",
                            q: "¿Qué limitación tiene la definición clásica de probabilidad?",
                            options: [
                                "Solo sirve para eventos dependientes",
                                "Dificultad cuando el espacio muestral es infinito o los resultados no son equiprobables",
                                "Es muy compleja",
                                "No usa axiomas"
                            ],
                            answerIndex: 1,
                            explain: "La definición clásica presenta dificultades cuando el espacio muestral es infinito o los resultados no son equiprobables."
                        },
                        {
                            topic: "Definición axiomática",
                            q: "¿Quién introdujo la definición axiomática de probabilidad?",
                            options: [
                                "Laplace",
                                "Kolmogorov",
                                "Bayes",
                                "Fisher"
                            ],
                            answerIndex: 1,
                            explain: "La definición axiomática de probabilidad fue introducida por A. N. Kolmogorov."
                        },
                        {
                            topic: "Axiomas",
                            q: "¿Cuál es un axioma de probabilidad?",
                            options: [
                                "P(S) = 0",
                                "0 ≤ P(E) ≤ 1",
                                "P(E) puede ser mayor a 1",
                                "P(E) es siempre 0.5"
                            ],
                            answerIndex: 1,
                            explain: "Un axioma de probabilidad establece que 0 ≤ P(E) ≤ 1 para cualquier evento E."
                        },
                        {
                            topic: "Probabilidad",
                            q: "Según Devore, ¿qué es la probabilidad?",
                            options: [
                                "El estudio de números exactos",
                                "El estudio al azar y la incertidumbre",
                                "La ciencia de los datos",
                                "La medición de eventos seguros"
                            ],
                            answerIndex: 1,
                            explain: "La probabilidad es el estudio al azar y la incertidumbre en situaciones donde varios posibles sucesos pueden ocurrir."
                        },
                        {
                            topic: "Eventos compuestos",
                            q: "En el ejemplo de periódicos, ¿cuál es la probabilidad de suscribirse a por lo menos uno?",
                            options: [
                                "0.6",
                                "0.8",
                                "0.9",
                                "0.5"
                            ],
                            answerIndex: 2,
                            explain: "P(A∪B) = P(A) + P(B) - P(A∩B) = 0.6 + 0.8 - 0.5 = 0.9"
                        }
                    ]
                },
                // ACTIVIDAD 2: Teorema de Bayes, espacio muestral, correlación
                act2: {
                    nombre: "Actividad 2: Probabilidad condicional y correlación",
                    desc: "Teorema de Bayes, experimentos aleatorios, relación entre variables, correlación",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Teorema de Bayes",
                            q: "¿Qué utiliza el Teorema de Bayes?",
                            options: [
                                "Probabilidad fija",
                                "Probabilidad revisada con base en información adicional",
                                "Solo eventos independientes",
                                "Datos sin procesar"
                            ],
                            answerIndex: 1,
                            explain: "El Teorema de Bayes es un método que utiliza la probabilidad revisada con base en información adicional."
                        },
                        {
                            topic: "Espacio muestral",
                            q: "En el ejemplo del dado, ¿qué espacios muestrales son posibles?",
                            options: [
                                "Solo {1,2,3,4,5,6}",
                                "Solo {par, impar}",
                                "Ambos {1,2,3,4,5,6} y {par, impar}",
                                "Ninguno"
                            ],
                            answerIndex: 2,
                            explain: "Para un dado, un espacio muestral puede ser {1,2,3,4,5,6} y otro puede ser {par, impar}."
                        },
                        {
                            topic: "Relación entre variables",
                            q: "¿Qué implica una relación lineal entre variables?",
                            options: [
                                "Cambios complejos no proporcionales",
                                "Cambios directa y proporcionalmente relacionados (línea recta)",
                                "No hay relación",
                                "Relación inversa"
                            ],
                            answerIndex: 1,
                            explain: "Una relación lineal implica que los cambios en una variable están directa y proporcionalmente relacionados con los cambios en la otra, reflejándose en línea recta."
                        },
                        {
                            topic: "Correlación",
                            q: "¿Entre qué valores se encuentra el coeficiente de correlación r?",
                            options: [
                                "0 y 1",
                                "-1 y 1",
                                "-∞ y ∞",
                                "0 y 100"
                            ],
                            answerIndex: 1,
                            explain: "El coeficiente de correlación lineal r está comprendido entre -1 y +1."
                        },
                        {
                            topic: "Correlación positiva",
                            q: "¿Qué indica un valor de r cercano a +1?",
                            options: [
                                "Correlación negativa fuerte",
                                "Correlación positiva fuerte",
                                "No hay correlación",
                                "Correlación débil"
                            ],
                            answerIndex: 1,
                            explain: "Un valor de r cercano a +1 indica una correlación positiva fuerte: a medida que una variable aumenta, la otra también tiende a aumentar."
                        },
                        {
                            topic: "Correlación negativa",
                            q: "¿Qué indica un valor de r cercano a -1?",
                            options: [
                                "Correlación positiva fuerte",
                                "Correlación negativa fuerte",
                                "No hay correlación",
                                "Correlación débil"
                            ],
                            answerIndex: 1,
                            explain: "Un valor de r cercano a -1 indica una correlación negativa fuerte: a medida que una variable aumenta, la otra tiende a disminuir."
                        },
                        {
                            topic: "Relación no lineal",
                            q: "¿Cómo se manifiesta una relación no lineal en un gráfico?",
                            options: [
                                "Línea recta",
                                "Patrones más complejos",
                                "Puntos dispersos sin patrón",
                                "Línea horizontal"
                            ],
                            answerIndex: 1,
                            explain: "En relaciones no lineales, los cambios en una variable pueden estar relacionados de manera más compleja, manifestándose en patrones gráficos más complejos."
                        },
                        {
                            topic: "Teorema de Bayes",
                            q: "¿Qué tipo de probabilidad actualiza el Teorema de Bayes?",
                            options: [
                                "Probabilidad a priori",
                                "Probabilidad condicional",
                                "Probabilidad marginal",
                                "Probabilidad conjunta"
                            ],
                            answerIndex: 1,
                            explain: "El Teorema de Bayes actualiza la probabilidad de un evento cuando se obtiene más información al respecto."
                        },
                        {
                            topic: "Espacio muestral",
                            q: "¿Cómo se denota el espacio muestral?",
                            options: [
                                "M",
                                "E",
                                "S",
                                "P"
                            ],
                            answerIndex: 2,
                            explain: "El espacio muestral se denota por S."
                        },
                        {
                            topic: "Experimento aleatorio",
                            q: "¿Qué ejemplo de experimento aleatorio se menciona?",
                            options: [
                                "Lanzar un dado",
                                "Sumar dos números",
                                "Medir una longitud fija",
                                "Contar objetos"
                            ],
                            answerIndex: 0,
                            explain: "El lanzamiento de un dado es un ejemplo clásico de experimento aleatorio."
                        }
                    ]
                },
                // ACTIVIDAD 3: Sistemas de coordenadas, funciones, gráficas
                act3: {
                    nombre: "Actividad 3: Funciones y coordenadas",
                    desc: "Sistemas de coordenadas, recta real, plano cartesiano, funciones, gráficas",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Recta numérica",
                            q: "¿Cómo se llaman los números a la derecha del origen en la recta numérica?",
                            options: [
                                "Negativos",
                                "Positivos",
                                "Cero",
                                "Nulos"
                            ],
                            answerIndex: 1,
                            explain: "Los números positivos se sitúan a la derecha del origen y los números negativos a la izquierda."
                        },
                        {
                            topic: "Coordenadas",
                            q: "¿Qué es la abscisa de un punto?",
                            options: [
                                "La distancia al eje x",
                                "La distancia al eje y",
                                "El origen",
                                "La ordenada"
                            ],
                            answerIndex: 1,
                            explain: "La abscisa es la distancia de un punto al eje y (coordenada x)."
                        },
                        {
                            topic: "Coordenadas",
                            q: "¿Qué son las coordenadas del origen?",
                            options: [
                                "(1,1)",
                                "(0,0)",
                                "(-1,-1)",
                                "(0,1)"
                            ],
                            answerIndex: 1,
                            explain: "Las coordenadas del origen son (0,0)."
                        },
                        {
                            topic: "Función",
                            q: "¿Qué es una función según Swokowski?",
                            options: [
                                "Una correspondencia que asigna a cada elemento x de D uno o más elementos de E",
                                "Una correspondencia que asigna a cada elemento x de D un elemento único y de E",
                                "Cualquier conjunto de pares ordenados",
                                "Una ecuación sin solución"
                            ],
                            answerIndex: 1,
                            explain: "Una función f de un conjunto D a un conjunto E es una correspondencia que asigna a cada elemento x de D un elemento único y de E."
                        },
                        {
                            topic: "Relación",
                            q: "¿Qué es una relación?",
                            options: [
                                "Una función siempre",
                                "La correspondencia donde a cada elemento le corresponde uno o más elementos",
                                "Un conjunto vacío",
                                "Solo pares ordenados iguales"
                            ],
                            answerIndex: 1,
                            explain: "Una relación es la correspondencia donde a cada elemento del primer conjunto le corresponde uno o más elementos del segundo."
                        },
                        {
                            topic: "Prueba de la recta vertical",
                            q: "¿Qué indica la prueba de la recta vertical?",
                            options: [
                                "Si intersecta en dos puntos, es función",
                                "Si intersecta en más de un punto, no es función",
                                "Siempre indica que es función",
                                "No sirve para nada"
                            ],
                            answerIndex: 1,
                            explain: "La prueba de la recta vertical indica que si una recta vertical intersecta la gráfica en más de un punto, entonces no es una función."
                        },
                        {
                            topic: "Gráfica de una ecuación",
                            q: "¿Qué es la gráfica de una ecuación?",
                            options: [
                                "El conjunto de puntos que no son solución",
                                "El conjunto de puntos (x,y) que son soluciones de la ecuación",
                                "Solo los puntos positivos",
                                "Una línea recta siempre"
                            ],
                            answerIndex: 1,
                            explain: "La gráfica de una ecuación es el conjunto de puntos (x,y) en el plano cartesiano que son soluciones de la ecuación."
                        },
                        {
                            topic: "Ejemplo de función",
                            q: "En el ejemplo de personas con nombre y edad, ¿por qué es una función?",
                            options: [
                                "Porque hay una edad asociada a cada nombre",
                                "Porque hay varias edades por nombre",
                                "Porque no hay relación",
                                "Porque los nombres se repiten"
                            ],
                            answerIndex: 0,
                            explain: "La correspondencia nombre-edad es una función porque hay una edad única asociada a cada nombre."
                        },
                        {
                            topic: "Ejemplo de relación",
                            q: "En el ejemplo de personas con nombre y autos, ¿por qué NO es una función?",
                            options: [
                                "Porque cada persona tiene un auto",
                                "Porque Juan y Jorge se asocian a más de una marca de auto",
                                "Porque no hay autos",
                                "Porque los nombres son iguales"
                            ],
                            answerIndex: 1,
                            explain: "No es función porque Juan y Jorge se asocian a más de una marca de automóvil (no hay unicidad)."
                        },
                        {
                            topic: "Tabla de valores",
                            q: "¿Para qué sirve una tabla de valores?",
                            options: [
                                "Para confundir",
                                "Para mostrar algunos valores de x y sus correspondientes y",
                                "Para reemplazar la gráfica",
                                "Para calcular probabilidades"
                            ],
                            answerIndex: 1,
                            explain: "Una tabla de valores muestra algunos valores de la variable independiente x y sus correspondientes valores de la variable dependiente y."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: SOLUCIÓN DE PROBLEMAS ==========
        modulo3: {
            nombre: "Módulo 3: Solución de Problemas",
            actividades: {
                // ACTIVIDAD 1: Medidas de tendencia central
                act1: {
                    nombre: "Actividad 1: Medidas de tendencia central",
                    desc: "Media, mediana, moda para datos agrupados y no agrupados",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Medidas de tendencia central",
                            q: "¿Qué son las medidas de tendencia central?",
                            options: [
                                "Medidas que muestran la dispersión",
                                "Medidas que resumen en un solo valor a un conjunto de valores",
                                "Medidas de probabilidad",
                                "Gráficas estadísticas"
                            ],
                            answerIndex: 1,
                            explain: "Las medidas de tendencia central pretenden resumir en un solo valor a un conjunto de valores, representando un centro."
                        },
                        {
                            topic: "Media aritmética",
                            q: "¿Cómo se calcula la media aritmética?",
                            options: [
                                "Suma de datos multiplicada por el total",
                                "Suma de datos dividida entre el total de ellos",
                                "El dato que más se repite",
                                "El dato central"
                            ],
                            answerIndex: 1,
                            explain: "La media aritmética es la suma de los datos dividida entre el total de ellos."
                        },
                        {
                            topic: "Mediana",
                            q: "¿Qué es la mediana?",
                            options: [
                                "El valor más frecuente",
                                "El valor que divide una serie de datos en dos partes iguales",
                                "La suma de datos dividida entre el total",
                                "El valor máximo"
                            ],
                            answerIndex: 1,
                            explain: "La mediana es el valor que divide una serie de datos en dos partes iguales (50% de datos por debajo y 50% por arriba)."
                        },
                        {
                            topic: "Moda",
                            q: "¿Qué es la moda?",
                            options: [
                                "El valor promedio",
                                "El valor del dato numérico más frecuente",
                                "El valor central",
                                "El valor mínimo"
                            ],
                            answerIndex: 1,
                            explain: "La moda es el valor del dato numérico más frecuente en un conjunto de datos."
                        },
                        {
                            topic: "Bimodal",
                            q: "¿Cuándo un conjunto de datos es bimodal?",
                            options: [
                                "Cuando no hay moda",
                                "Cuando existen dos valores con mayor frecuencia",
                                "Cuando hay una sola moda",
                                "Cuando todos los valores son iguales"
                            ],
                            answerIndex: 1,
                            explain: "Se dice que es bimodal cuando existen dos valores con mayor frecuencia."
                        },
                        {
                            topic: "Media para datos no agrupados",
                            q: "En el ejemplo de notas de alumnos, ¿cuál fue el promedio?",
                            options: [
                                "3.00",
                                "3.47",
                                "4.00",
                                "3.50"
                            ],
                            answerIndex: 1,
                            explain: "El promedio fue 34.7/10 = 3.47"
                        },
                        {
                            topic: "Mediana (ejemplo par)",
                            q: "Para los datos 1,1,2,2,2,3,4,4,5,5, ¿cuál es la mediana?",
                            options: [
                                "2",
                                "2.5",
                                "3",
                                "4"
                            ],
                            answerIndex: 1,
                            explain: "Con 10 datos (par), la mediana es el promedio de los dos valores centrales (2 y 3) = 2.5"
                        },
                        {
                            topic: "Media para datos agrupados",
                            q: "En el ejemplo de preguntas buenas, ¿cuál fue la media aproximada?",
                            options: [
                                "2.41",
                                "3.41",
                                "4.41",
                                "5.41"
                            ],
                            answerIndex: 1,
                            explain: "La media fue 276/81 = 3.41 preguntas buenas en promedio."
                        },
                        {
                            topic: "Mediana para datos agrupados",
                            q: "En el ejemplo de mediana para datos agrupados, ¿qué valor se obtuvo?",
                            options: [
                                "30.00",
                                "31.55",
                                "32.50",
                                "35.00"
                            ],
                            answerIndex: 1,
                            explain: "La mediana calculada fue Me = 31.55 mediante interpolación."
                        },
                        {
                            topic: "Moda para datos agrupados",
                            q: "En el ejemplo de moda con tabla de frecuencias, ¿qué tipo de moda se encontró?",
                            options: [
                                "Unimodal",
                                "Bimodal",
                                "Trimodal",
                                "Sin moda"
                            ],
                            answerIndex: 1,
                            explain: "Se encontró un caso bimodal con Mo₁ = 11 y Mo₂ = 13."
                        }
                    ]
                },
                // ACTIVIDAD 2: Medidas de dispersión
                act2: {
                    nombre: "Actividad 2: Medidas de dispersión",
                    desc: "Rango, desviación media, varianza, desviación estándar para datos agrupados y no agrupados",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Rango",
                            q: "¿Qué es el rango en estadística?",
                            options: [
                                "La suma de todos los datos",
                                "La diferencia entre el valor más grande y el más pequeño",
                                "El valor promedio",
                                "El dato más frecuente"
                            ],
                            answerIndex: 1,
                            explain: "El rango es la diferencia entre el valor más grande y el más pequeño del conjunto de datos."
                        },
                        {
                            topic: "Varianza",
                            q: "¿Qué mide la varianza?",
                            options: [
                                "La tendencia central",
                                "La dispersión de los valores respecto a la media",
                                "La probabilidad de un evento",
                                "La moda"
                            ],
                            answerIndex: 1,
                            explain: "La varianza mide la dispersión de los valores de una variable respecto a la media."
                        },
                        {
                            topic: "Desviación estándar",
                            q: "¿Cómo se obtiene la desviación estándar?",
                            options: [
                                "Sumando las desviaciones",
                                "Como la raíz cuadrada de la varianza",
                                "Dividiendo la varianza entre n",
                                "Multiplicando la varianza por 2"
                            ],
                            answerIndex: 1,
                            explain: "La desviación estándar se define como la raíz cuadrada de la varianza."
                        },
                        {
                            topic: "Desviación media",
                            q: "¿Qué característica tiene la desviación media?",
                            options: [
                                "Considera el signo de la desviación",
                                "No toma en cuenta el signo de la desviación",
                                "Solo usa valores positivos",
                                "Es igual a la varianza"
                            ],
                            answerIndex: 1,
                            explain: "La desviación media mide la desviación promedio sin tomar en cuenta el signo de la desviación."
                        },
                        {
                            topic: "Varianza (ejemplo)",
                            q: "En el ejemplo con datos 9,3,8,8,9,8,9,18, ¿cuál fue la varianza?",
                            options: [
                                "9",
                                "15",
                                "18",
                                "20"
                            ],
                            answerIndex: 1,
                            explain: "La varianza calculada fue s² = 15."
                        },
                        {
                            topic: "Rango para datos agrupados",
                            q: "¿Cuáles son las dos formas de calcular el rango para datos agrupados?",
                            options: [
                                "Suma y resta de frecuencias",
                                "Punto medio de clase más alta menos punto medio más baja, o límite superior menos límite inferior",
                                "Media más desviación",
                                "Moda más mediana"
                            ],
                            answerIndex: 1,
                            explain: "Se puede calcular como: rango = punto medio clase alta - punto medio clase baja, o límite superior clase alta - límite inferior clase baja."
                        },
                        {
                            topic: "Desviación estándar (ejemplo)",
                            q: "En el ejemplo de datos agrupados, ¿qué desviación estándar se obtuvo?",
                            options: [
                                "12.34",
                                "14.797",
                                "15.678",
                                "16.543"
                            ],
                            answerIndex: 1,
                            explain: "La desviación estándar calculada fue S = 14.797."
                        },
                        {
                            topic: "Varianza (ejemplo agrupado)",
                            q: "En el mismo ejemplo, ¿cuál fue la varianza?",
                            options: [
                                "200.50",
                                "218.95",
                                "225.30",
                                "230.15"
                            ],
                            answerIndex: 1,
                            explain: "La varianza fue S² = (14.797)² = 218.95."
                        },
                        {
                            topic: "Media (ejemplo agrupado)",
                            q: "En el ejemplo de datos agrupados, ¿cuál fue la media?",
                            options: [
                                "42.33",
                                "43.33",
                                "44.33",
                                "45.33"
                            ],
                            answerIndex: 1,
                            explain: "La media calculada fue x̄ = 1820/42 = 43.33."
                        },
                        {
                            topic: "Desviación estándar",
                            q: "¿Para qué tipo de variables se usa la desviación estándar?",
                            options: [
                                "Solo nominales",
                                "Variables de razón y de intervalo",
                                "Solo ordinales",
                                "Variables cualitativas"
                            ],
                            answerIndex: 1,
                            explain: "La desviación estándar es una medida de dispersión para variables de razón y de intervalo."
                        }
                    ]
                },
                // ACTIVIDAD 3: Población, muestreo, distribuciones
                act3: {
                    nombre: "Actividad 3: Muestreo y distribuciones",
                    desc: "Población, técnicas de muestreo, distribución normal",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Población",
                            q: "¿Qué es la población en estadística?",
                            options: [
                                "Solo personas",
                                "Todo conjunto de personas, cosas u objetos con características comunes",
                                "Un subconjunto de datos",
                                "Una muestra representativa"
                            ],
                            answerIndex: 1,
                            explain: "La población es todo conjunto de personas, cosas, objetos, etc., con ciertas características comunes que puede ser finita o infinita."
                        },
                        {
                            topic: "Muestra",
                            q: "¿Qué es una muestra?",
                            options: [
                                "La población completa",
                                "Un subconjunto representativo de la población",
                                "Todos los elementos de estudio",
                                "Una variable estadística"
                            ],
                            answerIndex: 1,
                            explain: "La muestra es un subconjunto representativo de la población, seleccionado para estudiar sus características de manera eficiente."
                        },
                        {
                            topic: "Muestreo aleatorio simple",
                            q: "¿Qué caracteriza al muestreo aleatorio simple?",
                            options: [
                                "Se divide en estratos",
                                "Cada elemento tiene la misma probabilidad de ser seleccionado",
                                "Se selecciona cada k-ésimo elemento",
                                "Solo se usa en poblaciones pequeñas"
                            ],
                            answerIndex: 1,
                            explain: "En el muestreo aleatorio simple, cada elemento tiene la misma probabilidad de ser seleccionado."
                        },
                        {
                            topic: "Muestreo estratificado",
                            q: "¿En qué consiste el muestreo estratificado?",
                            options: [
                                "Seleccionar elementos al azar sin orden",
                                "Dividir la población en estratos y seleccionar muestra de cada uno",
                                "Tomar cada k-ésimo elemento",
                                "Elegir solo voluntarios"
                            ],
                            answerIndex: 1,
                            explain: "El muestreo estratificado divide la población en subgrupos o estratos y luego selecciona una muestra aleatoria de cada estrato."
                        },
                        {
                            topic: "Muestreo sistemático",
                            q: "¿Cómo funciona el muestreo sistemático?",
                            options: [
                                "Selección completamente al azar",
                                "Selección de un punto de partida aleatorio y luego cada k-ésimo elemento",
                                "División en grupos homogéneos",
                                "Selección por conveniencia"
                            ],
                            answerIndex: 1,
                            explain: "En el muestreo sistemático se selecciona un elemento al azar como punto de partida y luego se elige sistemáticamente cada k-ésimo elemento."
                        },
                        {
                            topic: "Distribución normal",
                            q: "¿Qué forma tiene aproximadamente la distribución normal?",
                            options: [
                                "Forma de línea recta",
                                "Forma de montículo",
                                "Forma de escalera",
                                "Forma de U"
                            ],
                            answerIndex: 1,
                            explain: "La distribución normal tiene forma de montículo (campana) y es simétrica alrededor de la media."
                        },
                        {
                            topic: "Distribución normal",
                            q: "¿Qué parámetro localiza el centro de la distribución normal?",
                            options: [
                                "La desviación estándar σ",
                                "La media µ",
                                "La moda",
                                "La varianza"
                            ],
                            answerIndex: 1,
                            explain: "La media µ localiza el centro de la distribución normal."
                        },
                        {
                            topic: "Distribución normal",
                            q: "¿Qué parámetro determina la forma de la distribución normal?",
                            options: [
                                "La media µ",
                                "La desviación estándar σ",
                                "El rango",
                                "La moda"
                            ],
                            answerIndex: 1,
                            explain: "La forma de la distribución está determinada por la desviación estándar σ."
                        },
                        {
                            topic: "Simetría normal",
                            q: "¿Cuál es el área a la derecha de la media en una distribución normal?",
                            options: [
                                "0.25",
                                "0.5",
                                "0.75",
                                "1"
                            ],
                            answerIndex: 1,
                            explain: "Por simetría, el área a la derecha de µ es 0.5 y el área a la izquierda también es 0.5."
                        },
                        {
                            topic: "Desviación estándar",
                            q: "¿Qué efecto tienen valores grandes de σ en la curva normal?",
                            options: [
                                "Aumentan la altura y reducen la dispersión",
                                "Reducen la altura y aumentan la dispersión",
                                "No afectan la forma",
                                "Desplazan la curva"
                            ],
                            answerIndex: 1,
                            explain: "Valores grandes de σ reducen la altura de la curva y aumentan la dispersión."
                        }
                    ]
                }
            }
        }
    }
};

export default pensamientoMatematico1;