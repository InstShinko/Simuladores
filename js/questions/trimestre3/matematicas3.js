// ============================================
// PENSAMIENTO MATEMÁTICO III - TERCER TRIMESTRE
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const matematicas3 = {
    id: "matematicas3",
    nombre: "PENSAMIENTO MATEMÁTICO III",
    icono: "📈",
    descripcion: "Límites, derivadas, optimización, cálculo integral, ecuaciones diferenciales",
    modulos: {
        // ========== MÓDULO 1: EXPLORANDO LOS HORIZONTES MATEMÁTICOS: UN VIAJE A TRAVÉS DE LOS LÍMITES ==========
        modulo1: {
            nombre: "Módulo 1: Explorando los Horizontes Matemáticos",
            actividades: {
                // ACTIVIDAD 1: Concepto de límite, propiedades, paradojas de Zenón
                act1: {
                    nombre: "Actividad 1: Concepto de límite",
                    desc: "Definición intuitiva y formal de límite, límites unilaterales, propiedades, paradojas de Zenón",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Definición de límite",
                            q: "Según la definición intuitiva, ¿qué significa que el límite de f(x) cuando x tiende a a es L?",
                            options: [
                                "f(a) = L",
                                "f(x) se aproxima arbitrariamente a L cuando x se acerca a a (x ≠ a)",
                                "f(x) es continua en a",
                                "f(x) está definida en a"
                            ],
                            answerIndex: 1,
                            explain: "La definición intuitiva establece que f(x) se puede aproximar arbitrariamente a L tomando x suficientemente cerca de a, pero distinto de a."
                        },
                        {
                            topic: "Límites unilaterales",
                            q: "¿Qué significa la notación x → a⁻?",
                            options: [
                                "x tiende a a por la derecha",
                                "x tiende a a por la izquierda",
                                "x es igual a a",
                                "x tiende a infinito"
                            ],
                            answerIndex: 1,
                            explain: "x → a⁻ denota que x tiende a a por la izquierda (valores menores que a)."
                        },
                        {
                            topic: "Existencia del límite",
                            q: "¿Cuándo existe el límite de una función en un punto?",
                            options: [
                                "Cuando f(a) está definida",
                                "Cuando los límites laterales son iguales",
                                "Cuando la función es continua",
                                "Cuando el límite es infinito"
                            ],
                            answerIndex: 1,
                            explain: "El límite existe si lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = L."
                        },
                        {
                            topic: "Definición formal (ε-δ)",
                            q: "En la definición formal de límite, ¿qué significa ε?",
                            options: [
                                "Un número positivo que representa qué tan cerca debe estar x de a",
                                "Un número positivo que representa qué tan cerca debe estar f(x) de L",
                                "El valor del límite",
                                "La pendiente de la recta"
                            ],
                            answerIndex: 1,
                            explain: "ε (épsilon) es un número positivo que representa la tolerancia para que |f(x) - L| < ε."
                        },
                        {
                            topic: "Propiedades de límites",
                            q: "¿Cuál es el valor de lim_{x→c} b (constante)?",
                            options: [
                                "0",
                                "b",
                                "c",
                                "No existe"
                            ],
                            answerIndex: 1,
                            explain: "Por la propiedad 1: lim_{x→c} b = b (el límite de una constante es la constante)."
                        },
                        {
                            topic: "Límite de una función lineal",
                            q: "¿Cuánto es lim_{x→4} (2x + 1)?",
                            options: [
                                "8",
                                "9",
                                "10",
                                "11"
                            ],
                            answerIndex: 1,
                            explain: "Sustituyendo x=4: 2(4) + 1 = 8 + 1 = 9."
                        },
                        {
                            topic: "Límite racional con factorización",
                            q: "¿Cuánto es lim_{x→2} (x² + 5x - 14)/(x - 2)?",
                            options: [
                                "7",
                                "8",
                                "9",
                                "10"
                            ],
                            answerIndex: 2,
                            explain: "Factorizando: (x-2)(x+7)/(x-2) = x+7, límite = 2+7 = 9."
                        },
                        {
                            topic: "Límite en el infinito",
                            q: "¿Cuánto es lim_{x→∞} 1/x?",
                            options: [
                                "0",
                                "1",
                                "∞",
                                "No existe"
                            ],
                            answerIndex: 0,
                            explain: "Cuando x → ∞, 1/x se aproxima a 0."
                        },
                        {
                            topic: "Asíntotas verticales",
                            q: "¿Qué significa lim_{x→3⁺} 4/(x-3) = ∞?",
                            options: [
                                "La función tiene una asíntota horizontal en y=3",
                                "La función tiene una asíntota vertical en x=3",
                                "El límite no existe",
                                "La función es continua en x=3"
                            ],
                            answerIndex: 1,
                            explain: "Cuando el límite es infinito al acercarse a un punto, la recta x=c es una asíntota vertical."
                        },
                        {
                            topic: "Paradojas de Zenón",
                            q: "¿Qué plantea la paradoja de Aquiles y la tortuga?",
                            options: [
                                "Aquiles siempre alcanza a la tortuga",
                                "Aquiles nunca alcanza a la tortuga porque debe recorrer infinitos puntos",
                                "La tortuga es más rápida que Aquiles",
                                "El movimiento no existe"
                            ],
                            answerIndex: 1,
                            explain: "La paradoja plantea que Aquiles debe primero llegar a donde estaba la tortuga, pero para entonces la tortuga ya avanzó, y así infinitamente."
                        }
                    ]
                },
                // ACTIVIDAD 2: Límites de funciones algebraicas y teorema del valor intermedio
                act2: {
                    nombre: "Actividad 2: Límites de funciones algebraicas",
                    desc: "Límites de funciones polinomiales, racionales e irracionales, teorema del valor intermedio",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Límite de función polinomial",
                            q: "Si f es un polinomio, ¿cuánto es lim_{x→a} f(x)?",
                            options: [
                                "No existe",
                                "f(a)",
                                "0",
                                "∞"
                            ],
                            answerIndex: 1,
                            explain: "Para una función polinomial, lim_{x→a} f(x) = f(a)."
                        },
                        {
                            topic: "Límite de polinomio",
                            q: "¿Cuánto es lim_{x→3} (x² + x + 3)?",
                            options: [
                                "12",
                                "13",
                                "14",
                                "15"
                            ],
                            answerIndex: 3,
                            explain: "Sustituyendo x=3: 9 + 3 + 3 = 15."
                        },
                        {
                            topic: "Límite de función racional",
                            q: "Para una función racional, si a está en el dominio, ¿cuánto es lim_{x→a} q(x)?",
                            options: [
                                "q(a)",
                                "0",
                                "∞",
                                "No existe"
                            ],
                            answerIndex: 0,
                            explain: "Si a está en el dominio de la función racional, entonces lim_{x→a} q(x) = q(a)."
                        },
                        {
                            topic: "Límite en infinito (racional)",
                            q: "¿Cuánto es lim_{x→±∞} (10x - 4)/(x² + 1)?",
                            options: [
                                "0",
                                "10",
                                "∞",
                                "1"
                            ],
                            answerIndex: 0,
                            explain: "El grado del numerador (1) es menor que el del denominador (2), por lo tanto el límite es 0."
                        },
                        {
                            topic: "Límites en infinito (regla grados)",
                            q: "Si grado(numerador) = grado(denominador) en una función racional, ¿cuánto es lim_{x→±∞}?",
                            options: [
                                "0",
                                "aₙ/bₘ (coeficientes principales)",
                                "∞",
                                "No existe"
                            ],
                            answerIndex: 1,
                            explain: "Cuando los grados son iguales, el límite es la razón de los coeficientes principales."
                        },
                        {
                            topic: "Límite de función irracional",
                            q: "¿Cuánto es lim_{x→2} √(10x² - 3x + 2)?",
                            options: [
                                "4",
                                "5",
                                "6",
                                "7"
                            ],
                            answerIndex: 2,
                            explain: "Sustituyendo x=2 dentro del radical: 10(4) - 6 + 2 = 40 - 6 + 2 = 36, √36 = 6."
                        },
                        {
                            topic: "Propiedad de límites con radicales",
                            q: "¿Qué condición se necesita para que lim_{x→a} ⁿ√f(x) = ⁿ√[lim f(x)]?",
                            options: [
                                "Que f sea continua",
                                "Que n sea impar o lim f(x) > 0",
                                "Que n sea par",
                                "Que f sea polinomial"
                            ],
                            answerIndex: 1,
                            explain: "Se requiere que n sea impar, o que n sea par y lim f(x) > 0."
                        },
                        {
                            topic: "Teorema del valor intermedio",
                            q: "¿Qué establece el teorema fundamental del valor intermedio?",
                            options: [
                                "Si f es continua en [a,b] y η está entre f(a) y f(b), existe c en [a,b] tal que f(c)=η",
                                "Si f es derivable, entonces es continua",
                                "El límite de una suma es la suma de los límites",
                                "La derivada de una constante es cero"
                            ],
                            answerIndex: 0,
                            explain: "El teorema del valor intermedio garantiza que una función continua toma todos los valores entre f(a) y f(b)."
                        },
                        {
                            topic: "Límite de función racional",
                            q: "¿Cuánto es lim_{x→2} (x² - 4)/(x - 2)?",
                            options: [
                                "2",
                                "3",
                                "4",
                                "5"
                            ],
                            answerIndex: 2,
                            explain: "Factorizando: (x-2)(x+2)/(x-2) = x+2, límite = 2+2 = 4."
                        },
                        {
                            topic: "Límite de función polinomial",
                            q: "¿Cuánto es lim_{x→-2} (5x² - x + 2)?",
                            options: [
                                "20",
                                "22",
                                "24",
                                "26"
                            ],
                            answerIndex: 2,
                            explain: "Sustituyendo x=-2: 5(4) - (-2) + 2 = 20 + 2 + 2 = 24."
                        }
                    ]
                },
                // ACTIVIDAD 3: Límites de funciones trascendentes
                act3: {
                    nombre: "Actividad 3: Límites de funciones trascendentes",
                    desc: "Límites de funciones exponenciales, logarítmicas y trigonométricas, límites especiales",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Límite de función exponencial",
                            q: "¿Cuánto es lim_{x→∞} 2ˣ?",
                            options: [
                                "0",
                                "1",
                                "∞",
                                "No existe"
                            ],
                            answerIndex: 2,
                            explain: "Cuando a > 1, lim_{x→∞} aˣ = ∞."
                        },
                        {
                            topic: "Número e como límite",
                            q: "¿Cuál es la expresión del número e como límite?",
                            options: [
                                "lim_{n→∞} (1 + 1/n)ⁿ",
                                "lim_{n→∞} (1 + n)¹/ⁿ",
                                "lim_{n→0} (1 + n)ⁿ",
                                "lim_{n→∞} n¹/ⁿ"
                            ],
                            answerIndex: 0,
                            explain: "El número e se define como lim_{n→∞} (1 + 1/n)ⁿ."
                        },
                        {
                            topic: "Límite de función exponencial",
                            q: "¿Cuánto es lim_{x→0} 5⁻ˣ⁺⁴?",
                            options: [
                                "5",
                                "0",
                                "∞",
                                "625"
                            ],
                            answerIndex: 1,
                            explain: "lim_{x→0} 5⁻ˣ⁺⁴ = 5⁴·lim_{x→0} 5⁻ˣ = 625·0 = 0."
                        },
                        {
                            topic: "Límite de función logarítmica",
                            q: "¿Cuánto es lim_{x→0⁺} ln x (con a>1)?",
                            options: [
                                "0",
                                "1",
                                "-∞",
                                "∞"
                            ],
                            answerIndex: 2,
                            explain: "Para a>1, lim_{x→0⁺} log_a x = -∞."
                        },
                        {
                            topic: "Límite trigonométrico especial",
                            q: "¿Cuánto es lim_{t→0} sen t / t?",
                            options: [
                                "0",
                                "1",
                                "∞",
                                "No existe"
                            ],
                            answerIndex: 1,
                            explain: "lim_{t→0} sen t / t = 1 (límite trigonométrico fundamental)."
                        },
                        {
                            topic: "Límite trigonométrico especial",
                            q: "¿Cuánto es lim_{t→0} (1 - cos t)/t?",
                            options: [
                                "0",
                                "1",
                                "∞",
                                "No existe"
                            ],
                            answerIndex: 0,
                            explain: "lim_{t→0} (1 - cos t)/t = 0."
                        },
                        {
                            topic: "Límite trigonométrico",
                            q: "¿Cuánto es lim_{x→0} sen(2x)/x?",
                            options: [
                                "1",
                                "2",
                                "3",
                                "4"
                            ],
                            answerIndex: 1,
                            explain: "sen(2x)/x = 2·sen(2x)/(2x) → 2·1 = 2."
                        },
                        {
                            topic: "Límite de seno y coseno",
                            q: "¿Cuánto es lim_{x→0} (4 sen x + 5 cos x)?",
                            options: [
                                "4",
                                "5",
                                "9",
                                "0"
                            ],
                            answerIndex: 1,
                            explain: "sen 0 = 0, cos 0 = 1, entonces 4(0) + 5(1) = 5."
                        },
                        {
                            topic: "Límite de función exponencial",
                            q: "¿Cuánto es lim_{x→∞} 2ˣ⁺⁵?",
                            options: [
                                "0",
                                "32",
                                "∞",
                                "No existe"
                            ],
                            answerIndex: 2,
                            explain: "2ˣ⁺⁵ = 2⁵·2ˣ = 32·2ˣ, y 2ˣ → ∞ cuando x→∞."
                        },
                        {
                            topic: "Límite de logaritmo natural",
                            q: "¿Cuánto es lim_{x→∞} x[ln(x+1) - ln x]?",
                            options: [
                                "0",
                                "1",
                                "e",
                                "∞"
                            ],
                            answerIndex: 1,
                            explain: "Reescribiendo como ln[(1+1/x)ˣ] → ln e = 1."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: EL ARTE DE MEDIR EL CAMBIO: PROFUNDIZANDO EN EL MUNDO DE LAS DERIVADAS ==========
        modulo2: {
            nombre: "Módulo 2: El Arte de Medir el Cambio: Profundizando en el Mundo de las Derivadas",
            actividades: {
                // ACTIVIDAD 1: Derivada por definición y reglas básicas
                act1: {
                    nombre: "Actividad 1: Derivada por definición",
                    desc: "Regla de los 4 pasos, definición de derivada, notaciones, reglas de derivación",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Derivada por definición",
                            q: "¿Cuál es la definición de derivada?",
                            options: [
                                "f'(x) = lim_{Δx→0} [f(x+Δx) - f(x)]/Δx",
                                "f'(x) = lim_{x→a} [f(x) - f(a)]/(x-a)",
                                "f'(x) = dy/dx",
                                "Todas las anteriores"
                            ],
                            answerIndex: 3,
                            explain: "Todas son formas equivalentes de definir la derivada."
                        },
                        {
                            topic: "Regla de los 4 pasos",
                            q: "¿Cuál es el primer paso de la regla de los 4 pasos para derivar?",
                            options: [
                                "Calcular f(x+Δx) - f(x)",
                                "Dividir por Δx",
                                "Hallar f(x+Δx)",
                                "Hacer Δx → 0"
                            ],
                            answerIndex: 2,
                            explain: "El primer paso es hallar f(x+Δx)."
                        },
                        {
                            topic: "Notaciones de derivada",
                            q: "¿Cuál es una notación correcta para la derivada?",
                            options: [
                                "f'(x)",
                                "dy/dx",
                                "y'",
                                "Todas las anteriores"
                            ],
                            answerIndex: 3,
                            explain: "Todas son notaciones comunes para la derivada: f'(x), dy/dx, y', Dₓ(y)."
                        },
                        {
                            topic: "Derivada de función lineal",
                            q: "¿Cuál es la derivada de f(x) = 4x - 1?",
                            options: [
                                "0",
                                "4",
                                "4x",
                                "4x - 1"
                            ],
                            answerIndex: 1,
                            explain: "La derivada de una función lineal es la pendiente, que es 4."
                        },
                        {
                            topic: "Derivada de función cuadrática",
                            q: "¿Cuál es la derivada de f(x) = x²?",
                            options: [
                                "x",
                                "2x",
                                "2",
                                "x²"
                            ],
                            answerIndex: 1,
                            explain: "Aplicando la regla de potencias: d/dx (x²) = 2x."
                        },
                        {
                            topic: "Regla de la potencia",
                            q: "¿Cuál es la derivada de f(x) = xⁿ?",
                            options: [
                                "n·xⁿ⁻¹",
                                "n·xⁿ⁺¹",
                                "xⁿ⁻¹",
                                "(n-1)·xⁿ"
                            ],
                            answerIndex: 0,
                            explain: "La regla de la potencia: d/dx (xⁿ) = n·xⁿ⁻¹."
                        },
                        {
                            topic: "Derivada de una constante",
                            q: "¿Cuál es la derivada de f(x) = 7?",
                            options: [
                                "7",
                                "0",
                                "1",
                                "No existe"
                            ],
                            answerIndex: 1,
                            explain: "La derivada de una función constante es 0."
                        },
                        {
                            topic: "Regla de la suma",
                            q: "¿Cuál es la derivada de f(x) = 3x² + 2x?",
                            options: [
                                "6x + 2",
                                "3x + 2",
                                "6x",
                                "6x² + 2"
                            ],
                            answerIndex: 0,
                            explain: "Aplicando reglas: d/dx(3x²)=6x, d/dx(2x)=2, suma = 6x+2."
                        },
                        {
                            topic: "Regla del cociente",
                            q: "¿Cuál es la fórmula de la regla del cociente?",
                            options: [
                                "(u'v - uv')/v²",
                                "(u'v + uv')/v²",
                                "(u'v - uv')/v",
                                "(u'v + uv')/v"
                            ],
                            answerIndex: 0,
                            explain: "La regla del cociente es d/dx(u/v) = (u'v - uv')/v²."
                        },
                        {
                            topic: "Pendiente de la recta tangente",
                            q: "¿Qué representa la derivada de una función en un punto?",
                            options: [
                                "La pendiente de la recta tangente",
                                "El área bajo la curva",
                                "El valor de la función",
                                "La concavidad"
                            ],
                            answerIndex: 0,
                            explain: "La derivada en un punto es la pendiente de la recta tangente a la gráfica en ese punto."
                        }
                    ]
                },
                // ACTIVIDAD 2: Derivadas de orden superior, máximos, mínimos, concavidad
                act2: {
                    nombre: "Actividad 2: Derivadas de orden superior",
                    desc: "Segunda derivada, derivadas de orden superior, criterio de la segunda derivada, puntos de inflexión",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Segunda derivada",
                            q: "¿Qué representa f''(x)?",
                            options: [
                                "La primera derivada",
                                "La derivada de la derivada",
                                "La integral",
                                "El límite"
                            ],
                            answerIndex: 1,
                            explain: "La segunda derivada es la derivada de la primera derivada."
                        },
                        {
                            topic: "Derivada de orden superior",
                            q: "Si f(x) = x⁵ - 4x³ + 2, ¿cuál es f''(x)?",
                            options: [
                                "20x³ - 24x",
                                "5x⁴ - 12x²",
                                "60x² - 24",
                                "120x"
                            ],
                            answerIndex: 0,
                            explain: "Primera derivada: f'(x)=5x⁴-12x². Segunda derivada: f''(x)=20x³-24x."
                        },
                        {
                            topic: "Criterio de la segunda derivada",
                            q: "Si f'(c)=0 y f''(c) > 0, ¿qué tipo de punto es c?",
                            options: [
                                "Máximo",
                                "Mínimo",
                                "Punto de inflexión",
                                "No se puede determinar"
                            ],
                            answerIndex: 1,
                            explain: "Si f'(c)=0 y f''(c) > 0, entonces c es un mínimo."
                        },
                        {
                            topic: "Criterio de la segunda derivada",
                            q: "Si f'(c)=0 y f''(c) < 0, ¿qué tipo de punto es c?",
                            options: [
                                "Máximo",
                                "Mínimo",
                                "Punto de inflexión",
                                "No se puede determinar"
                            ],
                            answerIndex: 0,
                            explain: "Si f'(c)=0 y f''(c) < 0, entonces c es un máximo."
                        },
                        {
                            topic: "Punto de inflexión",
                            q: "¿Qué es un punto de inflexión?",
                            options: [
                                "Donde la derivada es cero",
                                "Donde cambia la concavidad",
                                "Donde la función tiene un máximo",
                                "Donde la función no es continua"
                            ],
                            answerIndex: 1,
                            explain: "Un punto de inflexión es donde la gráfica cambia de concavidad."
                        },
                        {
                            topic: "Concavidad",
                            q: "Si f''(x) > 0 en un intervalo, ¿la función es cóncava hacia...?",
                            options: [
                                "Arriba",
                                "Abajo",
                                "No se puede determinar",
                                "Lineal"
                            ],
                            answerIndex: 0,
                            explain: "Si f''(x) > 0, la función es cóncava hacia arriba."
                        },
                        {
                            topic: "Ejemplo de máximos y mínimos",
                            q: "Para f(x) = x³/3 + x²/2 - 2x, ¿en qué valor hay un máximo?",
                            options: [
                                "x = -2",
                                "x = 1",
                                "x = 0",
                                "x = 2"
                            ],
                            answerIndex: 0,
                            explain: "f'(x)=x²+x-2, raíces x=-2 y x=1. f''(x)=2x+1. f''(-2)=-3<0 → máximo en x=-2."
                        },
                        {
                            topic: "Derivada de eˣ",
                            q: "¿Cuál es la derivada de f(x) = eˣ?",
                            options: [
                                "eˣ",
                                "x·eˣ",
                                "eˣ⁺¹",
                                "1/eˣ"
                            ],
                            answerIndex: 0,
                            explain: "La derivada de eˣ es eˣ (es su propia derivada)."
                        },
                        {
                            topic: "Derivadas de orden superior",
                            q: "Si f(x) = eˣ + 2x³, ¿cuál es f⁽⁴⁾(x)?",
                            options: [
                                "eˣ + 12x",
                                "eˣ",
                                "eˣ + 24",
                                "eˣ + 12"
                            ],
                            answerIndex: 1,
                            explain: "f'(x)=eˣ+6x², f''(x)=eˣ+12x, f'''(x)=eˣ+12, f⁽⁴⁾(x)=eˣ."
                        },
                        {
                            topic: "Derivada de xⁿ",
                            q: "¿Cuál es la derivada de f(x) = 3x²?",
                            options: [
                                "3x",
                                "6x",
                                "3x²",
                                "6x²"
                            ],
                            answerIndex: 1,
                            explain: "Aplicando regla de potencia: d/dx(3x²) = 3·2x = 6x."
                        }
                    ]
                },
                // ACTIVIDAD 3: Velocidad, aceleración, optimización, ecuaciones diferenciales
                act3: {
                    nombre: "Actividad 3: Aplicaciones de la derivada",
                    desc: "Velocidad y aceleración, ley de enfriamiento de Newton, optimización",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Velocidad",
                            q: "Si s(t) es la función de posición, ¿cómo se calcula la velocidad?",
                            options: [
                                "v(t) = ∫ s(t) dt",
                                "v(t) = ds/dt",
                                "v(t) = d²s/dt²",
                                "v(t) = |ds/dt|"
                            ],
                            answerIndex: 1,
                            explain: "La velocidad es la derivada de la posición: v(t) = ds/dt."
                        },
                        {
                            topic: "Aceleración",
                            q: "Si v(t) es la función de velocidad, ¿cómo se calcula la aceleración?",
                            options: [
                                "a(t) = ∫ v(t) dt",
                                "a(t) = dv/dt = d²s/dt²",
                                "a(t) = |v(t)|",
                                "a(t) = s(t)·v(t)"
                            ],
                            answerIndex: 1,
                            explain: "La aceleración es la derivada de la velocidad: a(t) = dv/dt = d²s/dt²."
                        },
                        {
                            topic: "Rapidez",
                            q: "¿Qué es la rapidez?",
                            options: [
                                "La derivada de la posición",
                                "El valor absoluto de la velocidad",
                                "La segunda derivada de la posición",
                                "La integral de la velocidad"
                            ],
                            answerIndex: 1,
                            explain: "La rapidez es |v(t)|, el valor absoluto de la velocidad."
                        },
                        {
                            topic: "Ejemplo de velocidad",
                            q: "Si s(t) = 2t² - 16t, ¿en qué momento la velocidad es cero?",
                            options: [
                                "t = 2 seg",
                                "t = 4 seg",
                                "t = 6 seg",
                                "t = 8 seg"
                            ],
                            answerIndex: 1,
                            explain: "v(t)=4t-16, igualando a cero: 4t-16=0 → t=4 seg."
                        },
                        {
                            topic: "Ley de enfriamiento de Newton",
                            q: "¿Qué establece la ley de enfriamiento de Newton?",
                            options: [
                                "La rapidez de enfriamiento es constante",
                                "La rapidez de enfriamiento es proporcional a la diferencia de temperaturas",
                                "El cuerpo se enfría más rápido al principio",
                                "La temperatura disminuye linealmente"
                            ],
                            answerIndex: 1,
                            explain: "La ley establece que dT/dt = k(T - Tm), proporcional a la diferencia con el medio."
                        },
                        {
                            topic: "Optimización",
                            q: "¿Qué busca la optimización?",
                            options: [
                                "Calcular derivadas",
                                "Encontrar máximos y mínimos en problemas de aplicación",
                                "Resolver integrales",
                                "Graficar funciones"
                            ],
                            answerIndex: 1,
                            explain: "La optimización busca encontrar los valores máximos o mínimos de una función en problemas aplicados."
                        },
                        {
                            topic: "Ejemplo de optimización",
                            q: "Con 12m de barra de hierro para una portería, ¿cuál es el área máxima?",
                            options: [
                                "12 m²",
                                "16 m²",
                                "18 m²",
                                "20 m²"
                            ],
                            answerIndex: 2,
                            explain: "s(x)=12x-2x², vértice en x=3, área=12·3-2·9=36-18=18 m²."
                        },
                        {
                            topic: "Ejemplo de optimización",
                            q: "Para descomponer 15 en dos sumandos, ¿qué producto maximiza el primero por el cuadrado del segundo?",
                            options: [
                                "5 y 10",
                                "6 y 9",
                                "7 y 8",
                                "4 y 11"
                            ],
                            answerIndex: 0,
                            explain: "x=15-y, s(y)=15y²-y³, derivando: 30y-3y²=0 → y=10, x=5."
                        },
                        {
                            topic: "Ejemplo de optimización",
                            q: "En el problema de velocidad en carretera, ¿a qué hora hay mayor velocidad?",
                            options: [
                                "2 pm",
                                "3 pm",
                                "5 pm",
                                "8 pm"
                            ],
                            answerIndex: 1,
                            explain: "v(t)=t²-8t+15, raíces t=3 y t=5, máximo en t=3 (3 pm)."
                        },
                        {
                            topic: "Problemas de optimización",
                            q: "¿Qué herramientas se usan para resolver problemas de optimización?",
                            options: [
                                "Primera y segunda derivada",
                                "Límites",
                                "Integrales",
                                "Ecuaciones diferenciales"
                            ],
                            answerIndex: 0,
                            explain: "Se usan la primera derivada (puntos críticos) y la segunda derivada (clasificación)."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: OPTIMIZACIÓN Y MODELACIÓN MATEMÁTICA: DISEÑANDO SOLUCIONES EFICIENTES ==========
        modulo3: {
            nombre: "Módulo 3: Optimización y Modelación Matemática",
            actividades: {
                // ACTIVIDAD 1: Derivadas de funciones trascendentes y optimización
                act1: {
                    nombre: "Actividad 1: Derivadas de funciones trascendentes",
                    desc: "Derivadas de exponenciales, logaritmos y trigonométricas, problemas de optimización",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Derivada de eˣ",
                            q: "¿Cuál es la derivada de f(x) = eˣ?",
                            options: [
                                "eˣ",
                                "x·eˣ",
                                "eˣ⁺¹",
                                "1"
                            ],
                            answerIndex: 0,
                            explain: "d/dx(eˣ) = eˣ."
                        },
                        {
                            topic: "Derivada de aˣ",
                            q: "¿Cuál es la derivada de f(x) = aˣ?",
                            options: [
                                "aˣ",
                                "aˣ·ln a",
                                "x·aˣ⁻¹",
                                "ln a"
                            ],
                            answerIndex: 1,
                            explain: "d/dx(aˣ) = aˣ·ln a."
                        },
                        {
                            topic: "Derivada de logaritmo",
                            q: "¿Cuál es la derivada de f(x) = log_a x?",
                            options: [
                                "1/x",
                                "1/(x ln a)",
                                "ln a/x",
                                "x·ln a"
                            ],
                            answerIndex: 1,
                            explain: "d/dx(log_a x) = 1/(x ln a)."
                        },
                        {
                            topic: "Derivada de seno",
                            q: "¿Cuál es la derivada de f(x) = sen x?",
                            options: [
                                "cos x",
                                "-sen x",
                                "sec² x",
                                "-csc x·cot x"
                            ],
                            answerIndex: 0,
                            explain: "d/dx(sen x) = cos x."
                        },
                        {
                            topic: "Derivada de coseno",
                            q: "¿Cuál es la derivada de f(x) = cos x?",
                            options: [
                                "sen x",
                                "-sen x",
                                "cos x",
                                "-cos x"
                            ],
                            answerIndex: 1,
                            explain: "d/dx(cos x) = -sen x."
                        },
                        {
                            topic: "Derivada de tangente",
                            q: "¿Cuál es la derivada de f(x) = tan x?",
                            options: [
                                "sen x",
                                "cos x",
                                "sec² x",
                                "csc² x"
                            ],
                            answerIndex: 2,
                            explain: "d/dx(tan x) = sec² x."
                        },
                        {
                            topic: "Derivada de secante",
                            q: "¿Cuál es la derivada de f(x) = sec x?",
                            options: [
                                "sec x·tan x",
                                "csc x·cot x",
                                "-sec x·tan x",
                                "-csc x·cot x"
                            ],
                            answerIndex: 0,
                            explain: "d/dx(sec x) = sec x·tan x."
                        },
                        {
                            topic: "Derivada de cotangente",
                            q: "¿Cuál es la derivada de f(x) = cot x?",
                            options: [
                                "sec² x",
                                "-sec² x",
                                "csc² x",
                                "-csc² x"
                            ],
                            answerIndex: 3,
                            explain: "d/dx(cot x) = -csc² x."
                        },
                        {
                            topic: "Derivada de cosecante",
                            q: "¿Cuál es la derivada de f(x) = csc x?",
                            options: [
                                "sec x·tan x",
                                "-csc x·cot x",
                                "csc x·cot x",
                                "-sec x·tan x"
                            ],
                            answerIndex: 1,
                            explain: "d/dx(csc x) = -csc x·cot x."
                        },
                        {
                            topic: "Derivada de función exponencial",
                            q: "¿Cuál es la derivada de f(x) = 4 sen x?",
                            options: [
                                "4 sen x",
                                "4 cos x",
                                "-4 cos x",
                                "cos x"
                            ],
                            answerIndex: 1,
                            explain: "d/dx(4 sen x) = 4 cos x."
                        }
                    ]
                },
                // ACTIVIDAD 2: Conceptos de área e integral definida
                act2: {
                    nombre: "Actividad 2: Concepto de integral definida",
                    desc: "Método de agotamiento, definición de integral definida, notación, aproximación de áreas",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Unidad de área",
                            q: "¿Qué figura geométrica se usa comúnmente como unidad de área?",
                            options: [
                                "Triángulo",
                                "Círculo",
                                "Cuadrado",
                                "Rectángulo"
                            ],
                            answerIndex: 2,
                            explain: "Se usa comúnmente un cuadrado como unidad de área."
                        },
                        {
                            topic: "Área de rectángulo",
                            q: "Si un rectángulo tiene lados de longitud a y b, ¿cuál es su área?",
                            options: [
                                "a + b",
                                "2(a + b)",
                                "a·b",
                                "a² + b²"
                            ],
                            answerIndex: 2,
                            explain: "El área de un rectángulo es el producto de sus lados: a·b."
                        },
                        {
                            topic: "Área de triángulo rectángulo",
                            q: "¿Cómo se calcula el área de un triángulo rectángulo?",
                            options: [
                                "(base × altura)/2",
                                "base × altura",
                                "(base + altura)/2",
                                "base² + altura²"
                            ],
                            answerIndex: 0,
                            explain: "El área de un triángulo es (base × altura)/2."
                        },
                        {
                            topic: "Método de agotamiento",
                            q: "¿En qué consiste el método de agotamiento de los griegos?",
                            options: [
                                "Dividir en rectángulos",
                                "Insertar triángulos cada vez más pequeños en una figura",
                                "Usar coordenadas",
                                "Aplicar derivadas"
                            ],
                            answerIndex: 1,
                            explain: "El método consistía en insertar triángulos cada vez más pequeños para aproximar el área de un círculo."
                        },
                        {
                            topic: "Integral definida",
                            q: "¿Qué representa la integral definida ∫ₐᵇ f(x) dx?",
                            options: [
                                "La derivada de f en [a,b]",
                                "El área bajo la curva de f de a a b",
                                "El valor promedio de f",
                                "La pendiente de la recta secante"
                            ],
                            answerIndex: 1,
                            explain: "La integral definida representa el área bajo la curva de f(x) desde a hasta b."
                        },
                        {
                            topic: "Símbolo de integral",
                            q: "¿De dónde proviene el símbolo ∫?",
                            options: [
                                "De la letra 'I'",
                                "De la letra 'S' (summa)",
                                "Del griego 'integral'",
                                "De la palabra 'área'"
                            ],
                            answerIndex: 1,
                            explain: "El símbolo ∫ proviene de la letra 'S' de la palabra latina 'summa' (suma)."
                        },
                        {
                            topic: "Constante de integración",
                            q: "¿Por qué se añade +C al integrar?",
                            options: [
                                "Porque la derivada de una constante es cero",
                                "Porque siempre hay un error",
                                "Por convención",
                                "Porque la integral es aproximada"
                            ],
                            answerIndex: 0,
                            explain: "Se añade +C porque la derivada de cualquier constante es cero, por lo que hay infinitas primitivas."
                        },
                        {
                            topic: "Integral indefinida",
                            q: "¿Cuál es ∫ 4x dx?",
                            options: [
                                "2x² + C",
                                "4x² + C",
                                "x² + C",
                                "8x² + C"
                            ],
                            answerIndex: 0,
                            explain: "∫ 4x dx = 2x² + C, porque d/dx(2x²) = 4x."
                        },
                        {
                            topic: "Aproximación del área",
                            q: "En la aproximación del área bajo y=x² de 0 a 1 con 4 rectángulos, ¿qué se obtiene?",
                            options: [
                                "Una aproximación exacta",
                                "Una cota superior e inferior",
                                "El valor exacto",
                                "La derivada"
                            ],
                            answerIndex: 1,
                            explain: "El método produce una cota superior (0.46875) y una cota inferior (0.21875)."
                        },
                        {
                            topic: "Integral como límite",
                            q: "¿Quién llamó 'integral' al límite de las sumas de rectángulos?",
                            options: [
                                "Newton",
                                "Leibniz",
                                "Johann Bernoulli",
                                "Euler"
                            ],
                            answerIndex: 2,
                            explain: "Johann Bernoulli llamó 'integral' al límite de las sumas de rectángulos."
                        }
                    ]
                },
                // ACTIVIDAD 3: Método de Lagrange, ecuaciones diferenciales, modelos
                act3: {
                    nombre: "Actividad 3: Método de Lagrange y ecuaciones diferenciales",
                    desc: "Multiplicadores de Lagrange, ecuaciones diferenciales ordinarias y parciales, decaimiento radiactivo, modelo presa-depredador, crecimiento bacteriano",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Método de Lagrange",
                            q: "¿Para qué se usan los multiplicadores de Lagrange?",
                            options: [
                                "Para derivar funciones",
                                "Para optimizar funciones con restricciones de igualdad",
                                "Para integrar funciones",
                                "Para resolver límites"
                            ],
                            answerIndex: 1,
                            explain: "El método de multiplicadores de Lagrange se usa para encontrar máximos y mínimos de funciones sujetas a restricciones."
                        },
                        {
                            topic: "Ecuación diferencial",
                            q: "¿Qué es una ecuación diferencial?",
                            options: [
                                "Una ecuación que involucra derivadas",
                                "Una ecuación algebraica",
                                "Una ecuación lineal",
                                "Una ecuación trigonométrica"
                            ],
                            answerIndex: 0,
                            explain: "Una ecuación diferencial es una ecuación que involucra derivadas de una función desconocida."
                        },
                        {
                            topic: "Ecuación diferencial ordinaria",
                            q: "¿Qué caracteriza a una ecuación diferencial ordinaria (EDO)?",
                            options: [
                                "La función depende de una sola variable",
                                "La función depende de varias variables",
                                "Tiene derivadas parciales",
                                "Es de segundo orden"
                            ],
                            answerIndex: 0,
                            explain: "Una EDO es aquella donde la función desconocida depende de una sola variable."
                        },
                        {
                            topic: "Orden de una EDO",
                            q: "¿Qué determina el orden de una ecuación diferencial?",
                            options: [
                                "El número de variables",
                                "El orden de la derivada más alta",
                                "El grado de la ecuación",
                                "La linealidad"
                            ],
                            answerIndex: 1,
                            explain: "El orden es el orden de la derivada más alta que aparece en la ecuación."
                        },
                        {
                            topic: "Decaimiento radiactivo",
                            q: "¿Cuál es la ecuación diferencial del decaimiento radiactivo?",
                            options: [
                                "dN/dt = kN",
                                "dN/dt = -kN",
                                "dN/dt = k/N",
                                "dN/dt = -k/N"
                            ],
                            answerIndex: 1,
                            explain: "La ecuación es dN/dt = -kN, donde k>0 es la constante de decaimiento."
                        },
                        {
                            topic: "Vida media",
                            q: "¿Qué es la vida media de un isótopo radiactivo?",
                            options: [
                                "El tiempo para que decaiga todo el material",
                                "El tiempo para que decaiga la mitad de la masa",
                                "El tiempo promedio de vida del isótopo",
                                "El tiempo de duplicación"
                            ],
                            answerIndex: 1,
                            explain: "La vida media τ es el tiempo requerido para que decaiga la mitad de la masa."
                        },
                        {
                            topic: "Modelo Lotka-Volterra",
                            q: "¿Qué describe el modelo Lotka-Volterra?",
                            options: [
                                "El crecimiento de bacterias",
                                "La interacción entre presas y depredadores",
                                "El decaimiento radiactivo",
                                "El enfriamiento de cuerpos"
                            ],
                            answerIndex: 1,
                            explain: "El modelo Lotka-Volterra describe la dinámica de presas y depredadores."
                        },
                        {
                            topic: "Crecimiento bacteriano",
                            q: "¿En qué fase del crecimiento bacteriano la población se duplica con cada período?",
                            options: [
                                "Fase de adaptación",
                                "Fase exponencial",
                                "Fase estacionaria",
                                "Fase de muerte"
                            ],
                            answerIndex: 1,
                            explain: "En la fase exponencial, la población se duplica con cada período de tiempo."
                        },
                        {
                            topic: "Solución de EDO",
                            q: "¿Qué es una solución de una ecuación diferencial?",
                            options: [
                                "Un número",
                                "Una función que satisface la ecuación",
                                "Una derivada",
                                "Una integral"
                            ],
                            answerIndex: 1,
                            explain: "Una solución es cualquier función que satisface la ecuación diferencial, reduciéndola a una identidad."
                        },
                        {
                            topic: "Ecuación diferencial parcial",
                            q: "¿Qué caracteriza a una ecuación diferencial parcial (EDP)?",
                            options: [
                                "Tiene derivadas ordinarias",
                                "La función depende de más de una variable",
                                "Es de primer orden",
                                "Es lineal"
                            ],
                            answerIndex: 1,
                            explain: "Una EDP es aquella donde la función desconocida depende de más de una variable y aparecen derivadas parciales."
                        }
                    ]
                }
            }
        }
    }
};

export default matematicas3;