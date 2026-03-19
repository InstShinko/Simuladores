// ============================================
// PENSAMIENTO MATEMÁTICO II - SEGUNDO TRIMESTRE
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const matematicas2 = {
    id: "matematicas2",
    nombre: "PENSAMIENTO MATEMÁTICO II",
    icono: "📐",
    descripcion: "Aritmética, álgebra, geometría, funciones y optimización",
    modulos: {
        // ========== MÓDULO 1: DE NÚMEROS A FÓRMULAS: ARITMÉTICA Y ÁLGEBRA ==========
        modulo1: {
            nombre: "Módulo 1: De Números a Fórmulas: Aritmética y Álgebra",
            actividades: {
                // ACTIVIDAD 1: Lenguaje algebraico, números reales, MCM, MCD
                act1: {
                    nombre: "Actividad 1: Lenguaje algebraico y números reales",
                    desc: "Lenguaje natural vs matemático, números reales, naturales, enteros, primos, compuestos, MCM, MCD",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Lenguaje algebraico",
                            q: "¿Qué ejemplo de transliteración de lenguaje natural a algebraico se menciona?",
                            options: [
                                "La edad del aprendiente es x, el tutor tiene el doble, suma 54 → x + 2x = 54",
                                "x + y = 10",
                                "2x + 3 = 15",
                                "x² + 5x + 6 = 0"
                            ],
                            answerIndex: 0,
                            explain: "El ejemplo es: edad del aprendiente = x, tutor = 2x, suma = 54, ecuación: x + 2x = 54."
                        },
                        {
                            topic: "Números reales",
                            q: "¿Cómo se clasifican los números reales?",
                            options: [
                                "Enteros y decimales",
                                "Racionales e irracionales",
                                "Positivos y negativos",
                                "Naturales y fraccionarios"
                            ],
                            answerIndex: 1,
                            explain: "Los números reales se clasifican en racionales e irracionales."
                        },
                        {
                            topic: "Números naturales",
                            q: "¿Para qué se utilizan los números naturales?",
                            options: [
                                "Para medir temperaturas",
                                "Para contar",
                                "Para expresar deudas",
                                "Para fracciones"
                            ],
                            answerIndex: 1,
                            explain: "Los números naturales son aquellos que se utilizan para contar objetos."
                        },
                        {
                            topic: "Números negativos",
                            q: "¿En qué situaciones se usan los números negativos?",
                            options: [
                                "Para contar objetos",
                                "Para expresar pérdidas o disminución de magnitudes",
                                "Para medir longitudes",
                                "Para sumar"
                            ],
                            answerIndex: 1,
                            explain: "Los números negativos se usan para expresar pérdidas o disminución de alguna magnitud variable."
                        },
                        {
                            topic: "Números primos",
                            q: "¿Qué es un número primo?",
                            options: [
                                "Un número que solo es divisible entre sí mismo",
                                "Un número que solo es divisible entre 1 y sí mismo",
                                "Un número que tiene más de dos divisores",
                                "Un número par"
                            ],
                            answerIndex: 1,
                            explain: "Un número primo es aquel que solo se puede dividir entre dos factores: él mismo y la unidad."
                        },
                        {
                            topic: "Números compuestos",
                            q: "¿Qué es un número compuesto?",
                            options: [
                                "Un número primo",
                                "El producto de la multiplicación de dos o más números primos",
                                "Un número impar",
                                "Un número decimal"
                            ],
                            answerIndex: 1,
                            explain: "Un número compuesto es el producto de la multiplicación de dos o más números primos."
                        },
                        {
                            topic: "Descomposición prima",
                            q: "¿Cuál es la descomposición prima de 24?",
                            options: [
                                "2 × 2 × 2 × 3",
                                "2 × 2 × 3 × 3",
                                "2 × 3 × 4",
                                "3 × 8"
                            ],
                            answerIndex: 0,
                            explain: "24 = 2 × 2 × 2 × 3 (2³ × 3)."
                        },
                        {
                            topic: "MCM y MCD",
                            q: "¿Cuál es el MCM de 30 y 45?",
                            options: [
                                "15",
                                "30",
                                "45",
                                "90"
                            ],
                            answerIndex: 3,
                            explain: "El MCM de 30 y 45 es 90 (2 × 3 × 3 × 5 = 90)."
                        },
                        {
                            topic: "MCM y MCD",
                            q: "¿Cuál es el MCD de 30 y 45?",
                            options: [
                                "15",
                                "30",
                                "45",
                                "90"
                            ],
                            answerIndex: 0,
                            explain: "El MCD de 30 y 45 es 15 (3 × 5 = 15)."
                        },
                        {
                            topic: "Fracciones",
                            q: "¿Qué caracteriza a una fracción propia?",
                            options: [
                                "Numerador mayor que denominador",
                                "Numerador menor que denominador",
                                "Numerador igual a denominador",
                                "Es mayor que 1"
                            ],
                            answerIndex: 1,
                            explain: "Las fracciones propias tienen numerador menor que denominador, representan valores entre 0 y 1."
                        }
                    ]
                },
                // ACTIVIDAD 2: Operaciones con polinomios y productos notables
                act2: {
                    nombre: "Actividad 2: Operaciones con polinomios",
                    desc: "Suma, resta, multiplicación de polinomios, leyes de exponentes, productos notables",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Suma de binomios",
                            q: "¿Cuál es el resultado de (x+4)+(x-1)?",
                            options: [
                                "2x + 3",
                                "2x + 5",
                                "x + 3",
                                "2x - 3"
                            ],
                            answerIndex: 0,
                            explain: "(x+4)+(x-1) = x+4+x-1 = 2x+3."
                        },
                        {
                            topic: "Resta de binomios",
                            q: "¿Cuál es el resultado de (3x-8)-(7x-11)?",
                            options: [
                                "-4x + 3",
                                "-4x - 3",
                                "4x + 3",
                                "-4x - 19"
                            ],
                            answerIndex: 0,
                            explain: "(3x-8)-(7x-11) = 3x-8-7x+11 = -4x+3."
                        },
                        {
                            topic: "Leyes de exponentes",
                            q: "¿Cuánto es x⁰?",
                            options: [
                                "0",
                                "1",
                                "x",
                                "No está definido"
                            ],
                            answerIndex: 1,
                            explain: "Cualquier número elevado a la potencia 0 es igual a 1 (x⁰ = 1)."
                        },
                        {
                            topic: "Leyes de exponentes",
                            q: "¿Cuánto es x⁻ⁿ?",
                            options: [
                                "xⁿ",
                                "1/xⁿ",
                                "xⁿ⁻¹",
                                "-xⁿ"
                            ],
                            answerIndex: 1,
                            explain: "x⁻ⁿ = 1/xⁿ (exponente negativo indica recíproco)."
                        },
                        {
                            topic: "Multiplicación de binomios",
                            q: "¿Cuál es el resultado de (a+3)(2a+5)?",
                            options: [
                                "2a² + 11a + 15",
                                "2a² + 8a + 15",
                                "2a² + 11a + 8",
                                "2a² + 13a + 15"
                            ],
                            answerIndex: 0,
                            explain: "(a+3)(2a+5) = 2a² + 5a + 6a + 15 = 2a² + 11a + 15."
                        },
                        {
                            topic: "Binomio al cuadrado",
                            q: "¿Cuál es el resultado de (x+3)²?",
                            options: [
                                "x² + 9",
                                "x² + 6x + 9",
                                "x² + 3x + 9",
                                "x² + 6x + 6"
                            ],
                            answerIndex: 1,
                            explain: "(x+3)² = x² + 2·x·3 + 3² = x² + 6x + 9."
                        },
                        {
                            topic: "Binomio al cubo",
                            q: "¿Cuál es el resultado de (x+3)³?",
                            options: [
                                "x³ + 9x² + 27x + 27",
                                "x³ + 9x² + 9x + 27",
                                "x³ + 27",
                                "x³ + 3x² + 9x + 27"
                            ],
                            answerIndex: 0,
                            explain: "(x+3)³ = x³ + 3·x²·3 + 3·x·3² + 3³ = x³ + 9x² + 27x + 27."
                        },
                        {
                            topic: "Binomio conjugado",
                            q: "¿Cuál es el resultado de (x-5)(x+5)?",
                            options: [
                                "x² - 25",
                                "x² + 25",
                                "x² - 10x + 25",
                                "x² - 10x - 25"
                            ],
                            answerIndex: 0,
                            explain: "(x-5)(x+5) = x² - 5² = x² - 25 (diferencia de cuadrados)."
                        },
                        {
                            topic: "Binomios con término común",
                            q: "¿Cuál es el resultado de (x+2)(x+3)?",
                            options: [
                                "x² + 5x + 6",
                                "x² + 6x + 6",
                                "x² + 5x + 5",
                                "x² + 6x + 5"
                            ],
                            answerIndex: 0,
                            explain: "(x+2)(x+3) = x² + (2+3)x + (2·3) = x² + 5x + 6."
                        },
                        {
                            topic: "Multiplicación de polinomios",
                            q: "En la multiplicación (2x+3y-4z)(7x-10y+5z), ¿qué término se obtiene para xy?",
                            options: [
                                "xy",
                                "-xy",
                                "2xy",
                                "-2xy"
                            ],
                            answerIndex: 0,
                            explain: "Los términos xy son: 2x·(-10y) = -20xy, 3y·7x = 21xy, total = xy."
                        }
                    ]
                },
                // ACTIVIDAD 3: Factorización, división algebraica, matemáticas financieras
                act3: {
                    nombre: "Actividad 3: Factorización y matemáticas financieras",
                    desc: "Factor común, diferencia de cuadrados, trinomios, suma/diferencia de cubos, división, interés",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Factor común",
                            q: "¿Cuál es la factorización de x² + 3x?",
                            options: [
                                "x(x + 3)",
                                "x(x + 3x)",
                                "x²(1 + 3)",
                                "3x(x + 1)"
                            ],
                            answerIndex: 0,
                            explain: "x² + 3x = x(x + 3) factor común x."
                        },
                        {
                            topic: "Diferencia de cuadrados",
                            q: "¿Cuál es la factorización de x² - 9?",
                            options: [
                                "(x - 3)(x - 3)",
                                "(x + 3)(x + 3)",
                                "(x - 3)(x + 3)",
                                "(x - 9)(x + 9)"
                            ],
                            answerIndex: 2,
                            explain: "x² - 9 = (x - 3)(x + 3) (diferencia de cuadrados)."
                        },
                        {
                            topic: "Trinomio cuadrado perfecto",
                            q: "¿Cuál es la factorización de x² + 5x + 6?",
                            options: [
                                "(x + 2)(x + 3)",
                                "(x - 2)(x - 3)",
                                "(x + 1)(x + 6)",
                                "(x + 2)(x + 4)"
                            ],
                            answerIndex: 0,
                            explain: "x² + 5x + 6 = (x + 2)(x + 3) porque 2+3=5 y 2·3=6."
                        },
                        {
                            topic: "Suma de cubos",
                            q: "¿Cuál es la factorización de 8a³ + 27?",
                            options: [
                                "(2a + 3)(4a² - 6a + 9)",
                                "(2a + 3)(4a² + 6a + 9)",
                                "(2a - 3)(4a² + 6a + 9)",
                                "(2a + 3)(2a² - 6a + 9)"
                            ],
                            answerIndex: 0,
                            explain: "8a³ + 27 = (2a)³ + 3³ = (2a + 3)(4a² - 6a + 9)."
                        },
                        {
                            topic: "Diferencia de cubos",
                            q: "¿Cuál es la factorización de 64m³ - n⁶?",
                            options: [
                                "(4m - n²)(16m² + 4mn² + n⁴)",
                                "(4m + n²)(16m² - 4mn² + n⁴)",
                                "(4m - n²)(16m² - 4mn² + n⁴)",
                                "(4m - n²)(4m² + 4mn² + n⁴)"
                            ],
                            answerIndex: 0,
                            explain: "64m³ - n⁶ = (4m)³ - (n²)³ = (4m - n²)(16m² + 4mn² + n⁴)."
                        },
                        {
                            topic: "División de polinomios",
                            q: "¿Cuál es el resultado de (2x³ - 8x² - 12x) / (2x)?",
                            options: [
                                "x² - 4x - 6",
                                "x² - 4x + 6",
                                "x² - 8x - 12",
                                "2x² - 8x - 12"
                            ],
                            answerIndex: 0,
                            explain: "Dividiendo cada término: 2x³/2x = x², -8x²/2x = -4x, -12x/2x = -6."
                        },
                        {
                            topic: "Interés",
                            q: "¿Cómo se calcula el interés simple?",
                            options: [
                                "I = M - C",
                                "I = C × r × t",
                                "I = M × r × t",
                                "I = C + M"
                            ],
                            answerIndex: 0,
                            explain: "El interés es I = M - C, donde M es el monto y C el capital."
                        },
                        {
                            topic: "Interés compuesto",
                            q: "¿Qué caracteriza al interés compuesto?",
                            options: [
                                "Solo el capital gana intereses",
                                "Los intereses se agregan al capital en intervalos de tiempo",
                                "La tasa es fija",
                                "No hay intereses"
                            ],
                            answerIndex: 1,
                            explain: "En el interés compuesto, los intereses se agregan al capital en intervalos preestablecidos."
                        },
                        {
                            topic: "Ahorro y deudas",
                            q: "¿Qué ventaja tiene pagar una deuda rápidamente?",
                            options: [
                                "Los intereses pagados serán menores",
                                "Se pierde dinero",
                                "La deuda aumenta",
                                "No hay ventaja"
                            ],
                            answerIndex: 0,
                            explain: "Pagar una deuda rápido reduce los intereses independientemente del tipo de interés."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: EXPLORANDO LAS DIMENSIONES ==========
        modulo2: {
            nombre: "Módulo 2: Explorando las Dimensiones",
            actividades: {
                // ACTIVIDAD 1: Triángulos, propiedades, puntos notables
                act1: {
                    nombre: "Actividad 1: Triángulos",
                    desc: "Clasificación, propiedades, rectas notables, área, congruencia, semejanza",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Triángulos",
                            q: "¿Cuánto suman los ángulos interiores de un triángulo?",
                            options: [
                                "90°",
                                "180°",
                                "270°",
                                "360°"
                            ],
                            answerIndex: 1,
                            explain: "La suma de los ángulos interiores de cualquier triángulo es 180°."
                        },
                        {
                            topic: "Triángulos",
                            q: "¿Cuánto suman los ángulos exteriores de un triángulo?",
                            options: [
                                "180°",
                                "270°",
                                "360°",
                                "540°"
                            ],
                            answerIndex: 2,
                            explain: "La suma de los ángulos exteriores de cualquier triángulo es 360°."
                        },
                        {
                            topic: "Clasificación por lados",
                            q: "¿Cómo se clasifica un triángulo con todos sus lados iguales?",
                            options: [
                                "Isósceles",
                                "Equilátero",
                                "Escaleno",
                                "Rectángulo"
                            ],
                            answerIndex: 1,
                            explain: "El triángulo equilátero tiene sus tres lados iguales."
                        },
                        {
                            topic: "Clasificación por ángulos",
                            q: "¿Cómo se llama el triángulo que tiene un ángulo recto?",
                            options: [
                                "Acutángulo",
                                "Rectángulo",
                                "Obtusángulo",
                                "Equilátero"
                            ],
                            answerIndex: 1,
                            explain: "El triángulo rectángulo tiene un ángulo de 90°."
                        },
                        {
                            topic: "Rectas notables",
                            q: "¿Qué punto notable es la intersección de las alturas de un triángulo?",
                            options: [
                                "Ortocentro",
                                "Circuncentro",
                                "Incentro",
                                "Baricentro"
                            ],
                            answerIndex: 0,
                            explain: "El ortocentro es el punto de intersección de las tres alturas."
                        },
                        {
                            topic: "Rectas notables",
                            q: "¿Qué punto notable es la intersección de las medianas?",
                            options: [
                                "Ortocentro",
                                "Circuncentro",
                                "Incentro",
                                "Baricentro"
                            ],
                            answerIndex: 3,
                            explain: "El baricentro es el punto de intersección de las tres medianas."
                        },
                        {
                            topic: "Fórmula de Herón",
                            q: "¿Cuál es el área de un triángulo equilátero de lado 1?",
                            options: [
                                "√3/2",
                                "√3/4",
                                "1/2",
                                "√3"
                            ],
                            answerIndex: 1,
                            explain: "Por Herón, s = 3/2, área = √[s(s-1)(s-1)(s-1)] = √[(3/2)(1/2)(1/2)(1/2)] = √(3/16) = √3/4."
                        },
                        {
                            topic: "Congruencia",
                            q: "¿Qué criterio de congruencia utiliza dos lados y el ángulo comprendido?",
                            options: [
                                "LAL",
                                "ALA",
                                "LLL",
                                "AA"
                            ],
                            answerIndex: 0,
                            explain: "El criterio LAL (lado-ángulo-lado) establece congruencia si dos lados y el ángulo entre ellos son iguales."
                        },
                        {
                            topic: "Semejanza",
                            q: "¿Qué criterio de semejanza utiliza solo ángulos?",
                            options: [
                                "LAL",
                                "ALA",
                                "LLL",
                                "AA"
                            ],
                            answerIndex: 3,
                            explain: "El criterio AA (ángulo-ángulo) establece semejanza si dos ángulos son iguales."
                        },
                        {
                            topic: "Triángulos",
                            q: "En un triángulo rectángulo, los ángulos agudos son:",
                            options: [
                                "Iguales",
                                "Complementarios",
                                "Suplementarios",
                                "Obtusos"
                            ],
                            answerIndex: 1,
                            explain: "Los ángulos agudos de un triángulo rectángulo suman 90°, son complementarios."
                        }
                    ]
                },
                // ACTIVIDAD 2: Teorema de Pitágoras, teorema de Napoleón, cuadriláteros cíclicos
                act2: {
                    nombre: "Actividad 2: Teoremas geométricos",
                    desc: "Teorema de Pitágoras, teorema del triángulo de Napoleón, cuadriláteros concíclicos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Teorema de Pitágoras",
                            q: "¿Qué establece el teorema de Pitágoras?",
                            options: [
                                "La suma de los ángulos es 180°",
                                "El cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos",
                                "El área es base por altura",
                                "Los lados son proporcionales"
                            ],
                            answerIndex: 1,
                            explain: "En un triángulo rectángulo, c² = a² + b², donde c es la hipotenusa."
                        },
                        {
                            topic: "Teorema de Pitágoras",
                            q: "Un faro de 13m de altura emite luz a 84m horizontalmente. ¿Qué longitud tienen los rayos?",
                            options: [
                                "85 m",
                                "97 m",
                                "71 m",
                                "100 m"
                            ],
                            answerIndex: 0,
                            explain: "c = √(13² + 84²) = √(169 + 7056) = √7225 = 85 m."
                        },
                        {
                            topic: "Teorema de Pitágoras",
                            q: "Una escalera de 15m está a 6m de la pared. ¿A qué altura llega?",
                            options: [
                                "13.74 m",
                                "12.5 m",
                                "14.2 m",
                                "16.5 m"
                            ],
                            answerIndex: 0,
                            explain: "b = √(15² - 6²) = √(225 - 36) = √189 ≈ 13.74 m."
                        },
                        {
                            topic: "Teorema de Napoleón",
                            q: "¿Qué afirma el teorema del triángulo de Napoleón?",
                            options: [
                                "Los centros de triángulos equiláteros sobre los lados forman un triángulo equilátero",
                                "Todo triángulo es equilátero",
                                "La suma de los ángulos es 180°",
                                "Las medianas se cortan en el baricentro"
                            ],
                            answerIndex: 0,
                            explain: "Dado un triángulo cualquiera, los centros de los triángulos equiláteros construidos sobre sus lados forman un triángulo equilátero."
                        },
                        {
                            topic: "Cuadriláteros cíclicos",
                            q: "¿Qué es un cuadrilátero cíclico?",
                            options: [
                                "Un cuadrilátero con lados iguales",
                                "Un cuadrilátero cuyos vértices están en una misma circunferencia",
                                "Un cuadrilátero con ángulos rectos",
                                "Un cuadrilátero inscrito en un triángulo"
                            ],
                            answerIndex: 1,
                            explain: "Un cuadrilátero es cíclico si sus cuatro vértices están sobre una misma circunferencia."
                        },
                        {
                            topic: "Cuadriláteros cíclicos",
                            q: "¿Cómo se llaman los puntos que están en la misma circunferencia?",
                            options: [
                                "Colineales",
                                "Concíclicos",
                                "Equidistantes",
                                "Coplanares"
                            ],
                            answerIndex: 1,
                            explain: "Se dice que los puntos son concíclicos si están todos en la misma circunferencia."
                        },
                        {
                            topic: "Teorema de Pitágoras",
                            q: "Si los catetos de un triángulo rectángulo miden 3 y 4, ¿cuánto mide la hipotenusa?",
                            options: [
                                "5",
                                "6",
                                "7",
                                "8"
                            ],
                            answerIndex: 0,
                            explain: "c = √(3² + 4²) = √(9 + 16) = √25 = 5."
                        },
                        {
                            topic: "Teorema de Pitágoras",
                            q: "Si la hipotenusa mide 10 y un cateto 6, ¿cuánto mide el otro cateto?",
                            options: [
                                "8",
                                "7",
                                "9",
                                "12"
                            ],
                            answerIndex: 0,
                            explain: "b = √(10² - 6²) = √(100 - 36) = √64 = 8."
                        },
                        {
                            topic: "Teorema de Napoleón",
                            q: "¿Qué tipo de triángulos se construyen sobre los lados en el teorema de Napoleón?",
                            options: [
                                "Triángulos rectángulos",
                                "Triángulos equiláteros",
                                "Triángulos isósceles",
                                "Triángulos escalenos"
                            ],
                            answerIndex: 1,
                            explain: "Se construyen triángulos equiláteros sobre cada lado del triángulo original."
                        },
                        {
                            topic: "Cuadriláteros cíclicos",
                            q: "¿Qué propiedad cumplen los ángulos opuestos de un cuadrilátero cíclico?",
                            options: [
                                "Son iguales",
                                "Suma 180°",
                                "Son rectos",
                                "Suma 90°"
                            ],
                            answerIndex: 1,
                            explain: "En un cuadrilátero cíclico, los ángulos opuestos suman 180°."
                        }
                    ]
                },
                // ACTIVIDAD 3: Geometría analítica, recta, pendiente, distancias
                act3: {
                    nombre: "Actividad 3: Geometría analítica",
                    desc: "Sistemas de coordenadas, distancia, pendiente, ecuaciones de la recta, paralelismo, perpendicularidad",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Segmentos dirigidos",
                            q: "¿Qué diferencia hay entre un segmento dirigido y uno no dirigido?",
                            options: [
                                "El dirigido tiene dirección (AB ≠ BA), el no dirigido no (AB = BA)",
                                "El dirigido es más largo",
                                "El no dirigido siempre es negativo",
                                "No hay diferencia"
                            ],
                            answerIndex: 0,
                            explain: "Un segmento dirigido considera dirección (AB = -BA), mientras que uno no dirigido no (AB = BA)."
                        },
                        {
                            topic: "Distancia entre dos puntos",
                            q: "¿Cuál es la fórmula de distancia entre dos puntos (x₁,y₁) y (x₂,y₂)?",
                            options: [
                                "d = |x₂ - x₁| + |y₂ - y₁|",
                                "d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
                                "d = (x₂ - x₁)² + (y₂ - y₁)²",
                                "d = √[(x₂ - x₁) + (y₂ - y₁)]"
                            ],
                            answerIndex: 1,
                            explain: "La distancia euclidiana es d = √[(x₂ - x₁)² + (y₂ - y₁)²]."
                        },
                        {
                            topic: "Pendiente",
                            q: "¿Cómo se calcula la pendiente de una recta que pasa por (x₁,y₁) y (x₂,y₂)?",
                            options: [
                                "m = (x₂ - x₁)/(y₂ - y₁)",
                                "m = (y₂ - y₁)/(x₂ - x₁)",
                                "m = x₂/x₁ + y₂/y₁",
                                "m = (y₂ + y₁)/(x₂ + x₁)"
                            ],
                            answerIndex: 1,
                            explain: "La pendiente es m = (y₂ - y₁)/(x₂ - x₁), para x₂ ≠ x₁."
                        },
                        {
                            topic: "Paralelismo",
                            q: "¿Cuándo dos rectas son paralelas?",
                            options: [
                                "Cuando m₁ = m₂",
                                "Cuando m₁·m₂ = -1",
                                "Cuando m₁ ≠ m₂",
                                "Cuando m₁ + m₂ = 0"
                            ],
                            answerIndex: 0,
                            explain: "Dos rectas son paralelas si sus pendientes son iguales: m₁ = m₂."
                        },
                        {
                            topic: "Perpendicularidad",
                            q: "¿Cuándo dos rectas son perpendiculares?",
                            options: [
                                "Cuando m₁ = m₂",
                                "Cuando m₁·m₂ = -1",
                                "Cuando m₁ ≠ m₂",
                                "Cuando m₁ + m₂ = 0"
                            ],
                            answerIndex: 1,
                            explain: "Dos rectas son perpendiculares si el producto de sus pendientes es -1: m₁·m₂ = -1."
                        },
                        {
                            topic: "Ecuación punto-pendiente",
                            q: "¿Cuál es la ecuación de la recta con pendiente m que pasa por (x₁,y₁)?",
                            options: [
                                "y = mx + b",
                                "y - y₁ = m(x - x₁)",
                                "y = m(x - x₁) + y₁",
                                "x - x₁ = m(y - y₁)"
                            ],
                            answerIndex: 1,
                            explain: "La forma punto-pendiente es: y - y₁ = m(x - x₁)."
                        },
                        {
                            topic: "Ecuación general",
                            q: "¿Cuál es la forma general de la ecuación de una recta?",
                            options: [
                                "y = mx + b",
                                "Ax + By + C = 0",
                                "x/a + y/b = 1",
                                "y - y₁ = m(x - x₁)"
                            ],
                            answerIndex: 1,
                            explain: "La forma general es Ax + By + C = 0."
                        },
                        {
                            topic: "Distancia punto-recta",
                            q: "¿Cuál es la distancia del punto (1,-1) a la recta x - y + 1 = 0?",
                            options: [
                                "3/√2",
                                "√2",
                                "3",
                                "1"
                            ],
                            answerIndex: 0,
                            explain: "d = |1(1) + (-1)(-1) + 1| / √(1²+(-1)²) = |1+1+1|/√2 = 3/√2."
                        },
                        {
                            topic: "Distancia entre rectas paralelas",
                            q: "¿Cuál es la distancia entre 3x - 4y + 4 = 0 y 9x - 12y - 4 = 0?",
                            options: [
                                "16/15",
                                "4/5",
                                "8/5",
                                "2"
                            ],
                            answerIndex: 0,
                            explain: "La distancia es |C₁ - C₂| / √(A²+B²) con A,B iguales: |4 - (-4)|/√(9+16) = 8/5? Revisar: 9x-12y-4 = 0 dividiendo entre 3: 3x-4y-4/3=0, C₁=4, C₂=-4/3, |4+4/3|/5 = (16/3)/5 = 16/15."
                        },
                        {
                            topic: "Área por coordenadas",
                            q: "Con los puntos A(0,1), B(-4,-2), C(4,-2), ¿cuál es el perímetro?",
                            options: [
                                "18",
                                "16",
                                "20",
                                "22"
                            ],
                            answerIndex: 0,
                            explain: "AB = √(16+9)=5, BC = √(64+0)=8, CA = √(16+9)=5, perímetro = 5+8+5 = 18."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: OPTIMIZACIÓN BÁSICA ==========
        modulo3: {
            nombre: "Módulo 3: Optimización Básica",
            actividades: {
                // ACTIVIDAD 1: Funciones, tipos, operaciones
                act1: {
                    nombre: "Actividad 1: Funciones",
                    desc: "Relación vs función, intervalos, dominio, rango, tipos de funciones, operaciones",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Función vs Relación",
                            q: "¿Qué diferencia hay entre una relación y una función?",
                            options: [
                                "En una función a cada elemento le corresponde uno o más elementos",
                                "En una función a cada elemento le corresponde un único elemento",
                                "No hay diferencia",
                                "La relación es siempre lineal"
                            ],
                            answerIndex: 1,
                            explain: "Una función asigna a cada elemento del dominio un único elemento del rango."
                        },
                        {
                            topic: "Intervalos",
                            q: "¿Cómo se representa el intervalo abierto entre a y b?",
                            options: [
                                "[a,b]",
                                "(a,b)",
                                "[a,b)",
                                "(a,b]"
                            ],
                            answerIndex: 1,
                            explain: "El intervalo abierto se representa con paréntesis: (a,b) = {x | a < x < b}."
                        },
                        {
                            topic: "Dominio y rango",
                            q: "¿Cuál es el rango de f(x) = x² - 2x - 3?",
                            options: [
                                "(-∞,∞)",
                                "[-4,∞)",
                                "(-∞,-4]",
                                "[0,∞)"
                            ],
                            answerIndex: 1,
                            explain: "La parábola tiene vértice en x=1, f(1)= -4, abre hacia arriba, rango [-4,∞)."
                        },
                        {
                            topic: "Función creciente",
                            q: "¿Cuándo una función es creciente?",
                            options: [
                                "Si f(a) < f(b) siempre que a < b",
                                "Si f(a) > f(b) siempre que a < b",
                                "Si f(a) = f(b)",
                                "Si su gráfica es horizontal"
                            ],
                            answerIndex: 0,
                            explain: "Una función es creciente si f(a) < f(b) para a < b."
                        },
                        {
                            topic: "Función inyectiva",
                            q: "¿Qué prueba gráfica determina si una función es inyectiva?",
                            options: [
                                "Prueba de la recta vertical",
                                "Prueba de la recta horizontal",
                                "Prueba de la pendiente",
                                "Prueba del vértice"
                            ],
                            answerIndex: 1,
                            explain: "Una función es inyectiva si ninguna recta horizontal corta su gráfica más de una vez."
                        },
                        {
                            topic: "Función biyectiva",
                            q: "¿Qué condiciones debe cumplir una función para ser biyectiva?",
                            options: [
                                "Ser continua",
                                "Ser inyectiva y sobreyectiva",
                                "Ser creciente",
                                "Ser lineal"
                            ],
                            answerIndex: 1,
                            explain: "Una función biyectiva debe ser inyectiva (uno-uno) y sobreyectiva."
                        },
                        {
                            topic: "Operaciones con funciones",
                            q: "Si f(x)=2x²-5 y g(x)=3x+4, ¿cuánto es (f+g)(x)?",
                            options: [
                                "2x² + 3x - 1",
                                "2x² + 3x + 1",
                                "2x² + 3x - 9",
                                "6x² + 8x² - 15x - 20"
                            ],
                            answerIndex: 0,
                            explain: "(f+g)(x) = (2x²-5) + (3x+4) = 2x² + 3x -1."
                        },
                        {
                            topic: "Composición de funciones",
                            q: "Si f(x)=√x y g(x)=2x-3, ¿cuál es el dominio de f∘g?",
                            options: [
                                "(-∞,∞)",
                                "[3/2,∞)",
                                "(3/2,∞)",
                                "[0,∞)"
                            ],
                            answerIndex: 1,
                            explain: "f(g(x)) = √(2x-3), requiere 2x-3 ≥ 0 → x ≥ 3/2, dominio [3/2,∞)."
                        },
                        {
                            topic: "Función valor absoluto",
                            q: "¿Cómo se define f(x)=|x|?",
                            options: [
                                "f(x) = x para todo x",
                                "f(x) = x si x≥0, f(x) = -x si x<0",
                                "f(x) = x²",
                                "f(x) = -x para todo x"
                            ],
                            answerIndex: 1,
                            explain: "La función valor absoluto es f(x)=x para x≥0 y f(x)=-x para x<0."
                        },
                        {
                            topic: "Traslación de funciones",
                            q: "¿Cómo se desplaza verticalmente una función f(x) hacia arriba?",
                            options: [
                                "f(x - c)",
                                "f(x + c)",
                                "f(x) + c",
                                "f(x) - c"
                            ],
                            answerIndex: 2,
                            explain: "Para desplazar hacia arriba se suma una constante positiva: f(x) + c."
                        }
                    ]
                },
                // ACTIVIDAD 2: Funciones polinomiales, lineales, cuadráticas
                act2: {
                    nombre: "Actividad 2: Funciones polinomiales",
                    desc: "Funciones de grado cero, uno, dos, polinomios, rango",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Función lineal",
                            q: "¿Cuál es la forma general de una función lineal?",
                            options: [
                                "f(x) = ax² + bx + c",
                                "f(x) = ax + b",
                                "f(x) = c",
                                "f(x) = aⁿxⁿ"
                            ],
                            answerIndex: 1,
                            explain: "La función lineal tiene la forma f(x) = ax + b, con a ≠ 0."
                        },
                        {
                            topic: "Función cuadrática",
                            q: "¿Cuál es la forma general de una función cuadrática?",
                            options: [
                                "f(x) = ax + b",
                                "f(x) = ax² + bx + c",
                                "f(x) = aⁿxⁿ",
                                "f(x) = c"
                            ],
                            answerIndex: 1,
                            explain: "La función cuadrática tiene la forma f(x) = ax² + bx + c, con a ≠ 0."
                        },
                        {
                            topic: "Función constante",
                            q: "¿De qué grado es una función constante f(x) = c?",
                            options: [
                                "Grado 0",
                                "Grado 1",
                                "Grado 2",
                                "Grado 3"
                            ],
                            answerIndex: 0,
                            explain: "Una función constante tiene grado 0, pues es un polinomio de la forma c·x⁰."
                        },
                        {
                            topic: "Función polinomial",
                            q: "¿Qué grado tiene f(x) = 5x⁶ + 137x² - π?",
                            options: [
                                "Grado 2",
                                "Grado 5",
                                "Grado 6",
                                "Grado 7"
                            ],
                            answerIndex: 2,
                            explain: "El grado es la potencia más alta, en este caso 6."
                        },
                        {
                            topic: "Rango de función polinomial",
                            q: "¿Cuál es el rango de f(x) = x³ - 6x² + 8x?",
                            options: [
                                "[-4,∞)",
                                "(-∞,∞)",
                                "[0,∞)",
                                "[-8,∞)"
                            ],
                            answerIndex: 1,
                            explain: "Una función cúbica tiene rango todos los reales: (-∞,∞)."
                        },
                        {
                            topic: "Función cuadrática",
                            q: "¿Qué forma tiene la gráfica de una función cuadrática?",
                            options: [
                                "Línea recta",
                                "Parábola",
                                "Hipérbola",
                                "Círculo"
                            ],
                            answerIndex: 1,
                            explain: "La gráfica de una función cuadrática es una parábola."
                        },
                        {
                            topic: "Pendiente",
                            q: "¿Qué representa la pendiente en una función lineal?",
                            options: [
                                "El punto de corte con y",
                                "La razón de cambio de y por unidad de x",
                                "El vértice",
                                "El rango"
                            ],
                            answerIndex: 1,
                            explain: "La pendiente es la razón de cambio: cuánto cambia y por unidad de cambio en x."
                        },
                        {
                            topic: "Función polinomial",
                            q: "¿Cuál es el dominio de cualquier función polinomial?",
                            options: [
                                "Depende del grado",
                                "Todos los reales",
                                "Solo positivos",
                                "Solo enteros"
                            ],
                            answerIndex: 1,
                            explain: "El dominio de cualquier función polinomial son todos los números reales."
                        },
                        {
                            topic: "Forma estándar cuadrática",
                            q: "¿Cuál es la forma estándar de una función cuadrática?",
                            options: [
                                "y = a(x - h)² + k",
                                "y = ax² + bx + c",
                                "y = mx + b",
                                "y = c"
                            ],
                            answerIndex: 1,
                            explain: "La forma estándar (general) es y = ax² + bx + c."
                        },
                        {
                            topic: "Función lineal",
                            q: "¿Cuál es un ejemplo de función lineal?",
                            options: [
                                "f(x) = x²",
                                "f(x) = 3x + 2",
                                "f(x) = 5",
                                "f(x) = |x|"
                            ],
                            answerIndex: 1,
                            explain: "f(x) = 3x + 2 es una función lineal (grado 1)."
                        }
                    ]
                },
                // ACTIVIDAD 3: Sistemas de ecuaciones, programación lineal, optimización
                act3: {
                    nombre: "Actividad 3: Programación lineal",
                    desc: "Interpretación geométrica de sistemas, programación lineal, método gráfico, optimización",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Sistemas de ecuaciones",
                            q: "¿Cómo se clasifica un sistema de ecuaciones con solución única?",
                            options: [
                                "Incompatible",
                                "Compatible determinada",
                                "Compatible indeterminada",
                                "No tiene solución"
                            ],
                            answerIndex: 1,
                            explain: "Un sistema compatible determinada tiene una solución única (rectas que se cortan)."
                        },
                        {
                            topic: "Sistemas de ecuaciones",
                            q: "¿Cómo se clasifica un sistema sin solución?",
                            options: [
                                "Incompatible",
                                "Compatible determinada",
                                "Compatible indeterminada",
                                "Consistente"
                            ],
                            answerIndex: 0,
                            explain: "Un sistema incompatible no tiene solución (rectas paralelas)."
                        },
                        {
                            topic: "Programación lineal",
                            q: "¿Qué establece el teorema fundamental de la programación lineal?",
                            options: [
                                "La solución óptima está en un vértice de la región factible",
                                "La solución óptima está en el centro",
                                "No existe solución óptima",
                                "La función objetivo es siempre lineal"
                            ],
                            answerIndex: 0,
                            explain: "El teorema garantiza que si existe una solución óptima, se encuentra en un vértice de la región factible."
                        },
                        {
                            topic: "Optimización",
                            q: "¿Qué es la función objetivo en un problema de optimización?",
                            options: [
                                "Las variables a optimizar",
                                "La medida cuantitativa a maximizar o minimizar",
                                "Las restricciones",
                                "El conjunto de soluciones"
                            ],
                            answerIndex: 1,
                            explain: "La función objetivo es la medida cuantitativa del sistema que se desea optimizar."
                        },
                        {
                            topic: "Variables de decisión",
                            q: "¿Qué son las variables de decisión?",
                            options: [
                                "Las restricciones del problema",
                                "Las decisiones que afectan la función objetivo",
                                "Los coeficientes",
                                "Las constantes"
                            ],
                            answerIndex: 1,
                            explain: "Las variables de decisión son las decisiones que afectan directamente el valor de la función objetivo."
                        },
                        {
                            topic: "Restricciones",
                            q: "¿Qué son las restricciones en programación lineal?",
                            options: [
                                "La función a optimizar",
                                "Relaciones que las variables deben satisfacer",
                                "Los valores óptimos",
                                "Las variables"
                            ],
                            answerIndex: 1,
                            explain: "Las restricciones son el conjunto de relaciones que las variables deben cumplir."
                        },
                        {
                            topic: "Ejemplo de optimización",
                            q: "En el ejemplo de reparto de volantes, ¿cuál es la función objetivo?",
                            options: [
                                "Z = 6x + 8y",
                                "Z = x + y",
                                "Z = 130x + 90y",
                                "Z = 160x + 160y"
                            ],
                            answerIndex: 0,
                            explain: "La función objetivo a maximizar es Z = 6x + 8y, donde x son volantes A y y volantes B."
                        },
                        {
                            topic: "Ejemplo de optimización",
                            q: "¿Cuál es la solución óptima en el problema de reparto de volantes?",
                            options: [
                                "x=70, y=90",
                                "x=130, y=30",
                                "x=0, y=90",
                                "x=130, y=0"
                            ],
                            answerIndex: 0,
                            explain: "Evaluando vértices, el máximo Z=1140 se obtiene en (70,90)."
                        },
                        {
                            topic: "Ejemplo de optimización",
                            q: "¿Cuál es la ganancia máxima en el problema de volantes?",
                            options: [
                                "$1020",
                                "$1140",
                                "$720",
                                "$780"
                            ],
                            answerIndex: 1,
                            explain: "La ganancia máxima es Z = 6·70 + 8·90 = 420 + 720 = 1140."
                        },
                        {
                            topic: "Método gráfico",
                            q: "¿Qué se evalúa en los vértices de la región factible?",
                            options: [
                                "Las restricciones",
                                "La función objetivo",
                                "Las variables",
                                "Los coeficientes"
                            ],
                            answerIndex: 1,
                            explain: "En el método gráfico, se evalúa la función objetivo en los vértices para encontrar el óptimo."
                        }
                    ]
                }
            }
        }
    }
};

export default matematicas2;