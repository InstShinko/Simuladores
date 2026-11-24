// 3 MÓDULOS · 9 ACTIVIDADES

export default {
    "id": "integral",
    "nombre": "CÁLCULO INTEGRAL",
    "icono": "∫",
    "descripcion": "Identidades y fórmulas, métodos combinados de integración, sucesiones, series y aplicaciones físicas de la integral.",
    "modulos": {
        "modulo1": {
            "nombre": "Módulo 1: Geometría y Álgebra: Identidades y Fórmulas",
            "actividades": {
                "act1": {
                    "nombre": "Actividad 1: Identidades pitagóricas y suma de ángulos",
                    "desc": "Identidades pitagóricas y suma de ángulos",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Identidades pitagóricas y suma de ángulos",
                            "q": "¿A qué equivale 1 − sen² x?",
                            "options": [
                                "cos² x",
                                "cos x",
                                "tan² x",
                                "sec² x"
                            ],
                            "answerIndex": 0,
                            "explain": "Se despeja cos² x de sen² x + cos² x = 1.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Identidades pitagóricas y suma de ángulos",
                            "q": "Si cos x ≠ 0, ¿qué se obtiene al dividir sen² x + cos² x = 1 entre cos² x?",
                            "options": [
                                "tan x + 1 = sec x",
                                "tan² x + 1 = sec² x",
                                "cot² x + 1 = sec² x",
                                "tan² x − 1 = sec² x"
                            ],
                            "answerIndex": 1,
                            "explain": "Los cocientes son tan² x, 1 y sec² x, respectivamente."
                        },
                        {
                            "topic": "Identidades pitagóricas y suma de ángulos",
                            "q": "¿Cuánto vale sen(45° + 30°)?",
                            "options": [
                                "(√6 − √2)/4",
                                "√3/2",
                                "(√6 + √2)/4",
                                "√2/2"
                            ],
                            "answerIndex": 2,
                            "explain": "La suma sen 45° cos 30° + cos 45° sen 30° da (√6 + √2)/4.",
                            "variantGroup": "pregunta-3"
                        },
                        {
                            "topic": "Identidades pitagóricas y suma de ángulos",
                            "q": "¿A qué equivale 1 − cos² x?",
                            "options": [
                                "sen x",
                                "sec² x",
                                "sen² x",
                                "tan² x"
                            ],
                            "answerIndex": 2,
                            "explain": "Se despeja sen² x de la identidad pitagórica.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Identidades pitagóricas y suma de ángulos",
                            "q": "¿Cuánto vale cos(60° − 30°)?",
                            "options": [
                                "1/2",
                                "√3/2",
                                "0",
                                "√2/2"
                            ],
                            "answerIndex": 1,
                            "explain": "La diferencia es 30° y cos 30° = √3/2.",
                            "variantGroup": "pregunta-3"
                        }
                    ]
                },
                "act2": {
                    "nombre": "Actividad 2: Fórmulas de ángulo doble",
                    "desc": "Fórmulas de ángulo doble",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Fórmulas de ángulo doble",
                            "q": "¿Qué expresión equivale a 2 sen x cos x?",
                            "options": [
                                "cos(2x)",
                                "sen(2x)",
                                "2 sen² x",
                                "2 cos² x"
                            ],
                            "answerIndex": 1,
                            "explain": "Es la fórmula de ángulo doble para el seno."
                        },
                        {
                            "topic": "Fórmulas de ángulo doble",
                            "q": "¿Cómo se expresa sen² x usando cos(2x)?",
                            "options": [
                                "(1 + cos(2x))/2",
                                "1 − cos(2x)",
                                "(1 − cos(2x))/2",
                                "cos(2x)/2"
                            ],
                            "answerIndex": 2,
                            "explain": "Se despeja sen² x de cos(2x) = 1 − 2 sen² x.",
                            "variantGroup": "pregunta-2"
                        },
                        {
                            "topic": "Fórmulas de ángulo doble",
                            "q": "¿A qué equivale 4 sen x cos x cos(2x)?",
                            "options": [
                                "cos(4x)",
                                "2 sen(4x)",
                                "sen²(2x)",
                                "sen(4x)"
                            ],
                            "answerIndex": 3,
                            "explain": "Se aplica dos veces la identidad del seno del ángulo doble.",
                            "variantGroup": "pregunta-3"
                        },
                        {
                            "topic": "Fórmulas de ángulo doble",
                            "q": "¿Cómo se expresa cos² x usando cos(2x)?",
                            "options": [
                                "(1 − cos(2x))/2",
                                "1 + cos(2x)",
                                "cos(2x)/2",
                                "(1 + cos(2x))/2"
                            ],
                            "answerIndex": 3,
                            "explain": "Se despeja cos² x de cos(2x) = 2 cos² x − 1.",
                            "variantGroup": "pregunta-2"
                        },
                        {
                            "topic": "Fórmulas de ángulo doble",
                            "q": "¿Qué expresión equivale a 2 sen(3x) cos(3x)?",
                            "options": [
                                "sen(3x)",
                                "sen(6x)",
                                "cos(6x)",
                                "2 sen²(3x)"
                            ],
                            "answerIndex": 1,
                            "explain": "El argumento del seno se duplica de 3x a 6x.",
                            "variantGroup": "pregunta-3"
                        }
                    ]
                },
                "act3": {
                    "nombre": "Actividad 3: Exponentes y función exponencial",
                    "desc": "Exponentes y función exponencial",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Exponentes y función exponencial",
                            "q": "¿Cómo se simplifica (3e^(2x))²?",
                            "options": [
                                "6e^(4x)",
                                "9e^(2x)",
                                "9e^(4x)",
                                "3e^(4x)"
                            ],
                            "answerIndex": 2,
                            "explain": "Se elevan al cuadrado el coeficiente y la potencia de e.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Exponentes y función exponencial",
                            "q": "¿Cuál es la solución de e^(x + 3) = e^7?",
                            "options": [
                                "x = 10",
                                "x = 3",
                                "x = 7/3",
                                "x = 4"
                            ],
                            "answerIndex": 3,
                            "explain": "La exponencial es inyectiva, por lo que x + 3 = 7.",
                            "variantGroup": "pregunta-2"
                        },
                        {
                            "topic": "Exponentes y función exponencial",
                            "q": "¿Cuánto vale ln(e^(−2x)) para x real?",
                            "options": [
                                "−2x",
                                "2x",
                                "e^(−2x)",
                                "ln(−2x)"
                            ],
                            "answerIndex": 0,
                            "explain": "El logaritmo natural y la exponencial de base e son funciones inversas."
                        },
                        {
                            "topic": "Exponentes y función exponencial",
                            "q": "¿Cómo se simplifica (2e^(3x))³?",
                            "options": [
                                "6e^(9x)",
                                "8e^(6x)",
                                "8e^(9x)",
                                "2e^(9x)"
                            ],
                            "answerIndex": 2,
                            "explain": "Se eleva 2 al cubo y se multiplica el exponente 3x por 3.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Exponentes y función exponencial",
                            "q": "¿Qué valor de x satisface e^(2x − 1) = e^5?",
                            "options": [
                                "3",
                                "2",
                                "4",
                                "6"
                            ],
                            "answerIndex": 0,
                            "explain": "Se igualan los exponentes y se resuelve 2x − 1 = 5.",
                            "variantGroup": "pregunta-2"
                        }
                    ]
                }
            }
        },
        "modulo2": {
            "nombre": "Módulo 2: Desafiando la Integración: Métodos Integrados",
            "actividades": {
                "act1": {
                    "nombre": "Actividad 1: Integración con identidades de ángulo doble",
                    "desc": "Integración con identidades de ángulo doble",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Integración con identidades de ángulo doble",
                            "q": "¿Cuál es una antiderivada de 4 sen x cos x cos(2x)?",
                            "options": [
                                "cos(4x)/4 + C",
                                "−4 cos(4x) + C",
                                "sen(4x)/4 + C",
                                "−cos(4x)/4 + C"
                            ],
                            "answerIndex": 3,
                            "explain": "El integrando se reduce a sen(4x) y la cadena aporta el factor 1/4 al integrar."
                        },
                        {
                            "topic": "Integración con identidades de ángulo doble",
                            "q": "¿Cuál es una antiderivada de sen(3x)?",
                            "options": [
                                "−cos(3x)/3 + C",
                                "cos(3x)/3 + C",
                                "−3 cos(3x) + C",
                                "sen(3x)/3 + C"
                            ],
                            "answerIndex": 0,
                            "explain": "Al derivar −cos(3x)/3 se recupera sen(3x)."
                        },
                        {
                            "topic": "Integración con identidades de ángulo doble",
                            "q": "¿Qué sustitución permite integrar cos(4x) directamente?",
                            "options": [
                                "u = 4x, dx = 4 du",
                                "u = 4x, dx = du/4",
                                "u = cos x, dx = du",
                                "u = x², dx = 2x du"
                            ],
                            "answerIndex": 1,
                            "explain": "Al cambiar a u = 4x, la integral se convierte en un cuarto de la integral de cos u."
                        },
                        {
                            "topic": "Integración con identidades de ángulo doble",
                            "q": "¿Cuál es ∫ cos(x) dx?",
                            "options": [
                                "−sin(x) + C",
                                "cos(x) + C",
                                "−cos(x) + C",
                                "sin(x) + C"
                            ],
                            "answerIndex": 3,
                            "explain": "La derivada de sin(x) es cos(x), con ángulos en radianes."
                        },
                        {
                            "topic": "Integración con identidades de ángulo doble",
                            "q": "¿Cuál es ∫ sin(x) dx?",
                            "options": [
                                "−cos(x) + C",
                                "cos(x) + C",
                                "tan(x) + C",
                                "sin(x) + C"
                            ],
                            "answerIndex": 0,
                            "explain": "La derivada de −cos(x) es sin(x)."
                        }
                    ]
                },
                "act2": {
                    "nombre": "Actividad 2: Reducción de potencias en integrales",
                    "desc": "Reducción de potencias en integrales",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Reducción de potencias en integrales",
                            "q": "¿A qué equivale 2 sen²(x/2)?",
                            "options": [
                                "1 − cos x",
                                "1 + cos x",
                                "2 − cos x",
                                "sen x"
                            ],
                            "answerIndex": 0,
                            "explain": "Se aplica cos(2u) = 1 − 2 sen² u con u = x/2."
                        },
                        {
                            "topic": "Reducción de potencias en integrales",
                            "q": "¿Cuál es una antiderivada de 2 sen²(x/2) + cos x?",
                            "options": [
                                "2x + C",
                                "x + C",
                                "sen x + C",
                                "x + sen x + C"
                            ],
                            "answerIndex": 1,
                            "explain": "La identidad reduce todo el integrando a 1."
                        },
                        {
                            "topic": "Reducción de potencias en integrales",
                            "q": "¿Cuál es una antiderivada de cos² x?",
                            "options": [
                                "x/2 − sen(2x)/4 + C",
                                "x + sen(2x)/2 + C",
                                "x/2 + sen(2x)/4 + C",
                                "sen² x/2 + C"
                            ],
                            "answerIndex": 2,
                            "explain": "Se integra (1 + cos(2x))/2 término a término."
                        },
                        {
                            "topic": "Reducción de potencias en integrales",
                            "q": "¿Por qué se agrega C en una integral indefinida?",
                            "options": [
                                "C representa siempre cero",
                                "Las funciones que difieren en una constante tienen la misma derivada",
                                "Toda integral debe ser positiva",
                                "C sustituye a la variable"
                            ],
                            "answerIndex": 1,
                            "explain": "La derivada de una constante es cero; por ello existe una familia de antiderivadas."
                        },
                        {
                            "topic": "Reducción de potencias en integrales",
                            "q": "¿Cómo se comprueba una integral indefinida propuesta?",
                            "options": [
                                "Sustituyendo siempre x = 0 únicamente",
                                "Eliminando la constante y sumando uno",
                                "Comparando solo el grado mayor",
                                "Derivando el resultado"
                            ],
                            "answerIndex": 3,
                            "explain": "La derivada de la antiderivada debe coincidir con el integrando en el dominio considerado."
                        }
                    ]
                },
                "act3": {
                    "nombre": "Actividad 3: Combinación de métodos de integración",
                    "desc": "Combinación de métodos de integración",
                    "preguntas": 8,
                    "banco": [
                        {
                            "topic": "Combinación de métodos de integración",
                            "q": "¿A qué se reduce eˣ(sen² x + cos² x) ln(eˣ)?",
                            "options": [
                                "eˣ",
                                "xeˣ",
                                "x",
                                "xe^(2x)"
                            ],
                            "answerIndex": 1,
                            "explain": "La suma de cuadrados vale 1 y ln(eˣ) vale x."
                        },
                        {
                            "topic": "Combinación de métodos de integración",
                            "q": "¿Cuál es una antiderivada de xeˣ?",
                            "options": [
                                "eˣ(x + 1) + C",
                                "xeˣ + C",
                                "eˣ(x − 1) + C",
                                "x²eˣ/2 + C"
                            ],
                            "answerIndex": 2,
                            "explain": "Por partes, se resta la integral de eˣ al producto xeˣ."
                        },
                        {
                            "topic": "Combinación de métodos de integración",
                            "q": "¿Cuál es una antiderivada de (3x² − 3)⁴(6x)?",
                            "options": [
                                "(3x² − 3)⁵ + C",
                                "6x(3x² − 3)⁵/5 + C",
                                "(3x² − 3)³/3 + C",
                                "(3x² − 3)⁵/5 + C"
                            ],
                            "answerIndex": 3,
                            "explain": "Con u = 3x² − 3 se tiene du = 6x dx y se integra u⁴."
                        },
                        {
                            "topic": "Combinación de métodos de integración",
                            "q": "¿Qué sustitución simplifica ∫ 2x cos(x²) dx?",
                            "options": [
                                "u = cos(x)",
                                "u = 2",
                                "u = x²",
                                "u = x + 2"
                            ],
                            "answerIndex": 2,
                            "explain": "Con u = x², du = 2x dx y la integral se convierte en ∫ cos(u) du."
                        },
                        {
                            "topic": "Combinación de métodos de integración",
                            "q": "¿Cuál es ∫ 2x cos(x²) dx?",
                            "options": [
                                "cos(x²) + C",
                                "2sin(x) + C",
                                "x²sin(x²) + C",
                                "sin(x²) + C"
                            ],
                            "answerIndex": 3,
                            "explain": "La regla de la cadena verifica que la derivada de sin(x²) es 2x cos(x²)."
                        },
                        {
                            "topic": "Combinación de métodos de integración",
                            "q": "¿Cuál es ∫ 2x/(x² + 1) dx?",
                            "options": [
                                "ln(x² + 1) + C",
                                "1/(x² + 1) + C",
                                "2ln(x) + C",
                                "x²/(x² + 1) + C"
                            ],
                            "answerIndex": 0,
                            "explain": "Con u = x² + 1, el numerador es du y se integra 1/u."
                        },
                        {
                            "topic": "Combinación de métodos de integración",
                            "q": "¿Cuál es la fórmula de integración por partes?",
                            "options": [
                                "∫ u dv = u + v",
                                "∫ u dv = uv − ∫ v du",
                                "∫ u dv = uv + ∫ v du",
                                "∫ u dv = du/dv"
                            ],
                            "answerIndex": 1,
                            "explain": "La fórmula proviene de integrar la regla de la derivada de un producto."
                        },
                        {
                            "topic": "Combinación de métodos de integración",
                            "q": "Para x > 0, ¿cuál es ∫ ln(x) dx?",
                            "options": [
                                "1/x + C",
                                "ln(x)/x + C",
                                "x ln(x) + x + C",
                                "x ln(x) − x + C"
                            ],
                            "answerIndex": 3,
                            "explain": "Por partes, u = ln(x) y dv = dx, por lo que se resta ∫ 1 dx."
                        }
                    ]
                }
            }
        },
        "modulo3": {
            "nombre": "Módulo 3: Sumando, Avanzando y Aplicaciones Integradas",
            "actividades": {
                "act1": {
                    "nombre": "Actividad 1: Sucesiones",
                    "desc": "Sucesiones",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Sucesiones",
                            "q": "¿Cuáles son los tres primeros términos de aₙ = n/(n + 1), desde n = 1?",
                            "options": [
                                "0, 1/2, 2/3",
                                "1, 1/2, 1/3",
                                "1/2, 2/3, 3/4",
                                "2, 3/2, 4/3"
                            ],
                            "answerIndex": 2,
                            "explain": "Se sustituye n por 1, 2 y 3.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Sucesiones",
                            "q": "Si aₙ = 2n − 1, ¿cuál es a₆?",
                            "options": [
                                "12",
                                "13",
                                "9",
                                "11"
                            ],
                            "answerIndex": 3,
                            "explain": "Se calcula 2 · 6 − 1 = 11."
                        },
                        {
                            "topic": "Sucesiones",
                            "q": "¿Cuál es el límite de n/(n + 1) cuando n crece sin cota?",
                            "options": [
                                "1",
                                "0",
                                "1/2",
                                "No existe"
                            ],
                            "answerIndex": 0,
                            "explain": "Al dividir numerador y denominador por n queda 1/(1 + 1/n).",
                            "variantGroup": "pregunta-3"
                        },
                        {
                            "topic": "Sucesiones",
                            "q": "¿Cuáles son los tres primeros términos de aₙ = 1/(n + 2), desde n = 1?",
                            "options": [
                                "1/3, 1/4, 1/5",
                                "1/2, 1/3, 1/4",
                                "1/3, 2/4, 3/5",
                                "1, 1/2, 1/3"
                            ],
                            "answerIndex": 0,
                            "explain": "Se sustituyen los índices 1, 2 y 3.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Sucesiones",
                            "q": "¿Cuál es el límite de 2n/(n + 3) cuando n tiende a infinito?",
                            "options": [
                                "0",
                                "1",
                                "3",
                                "2"
                            ],
                            "answerIndex": 3,
                            "explain": "Al dividir entre n queda 2/(1 + 3/n), que tiende a 2.",
                            "variantGroup": "pregunta-3"
                        }
                    ]
                },
                "act2": {
                    "nombre": "Actividad 2: Series y sumas parciales",
                    "desc": "Series y sumas parciales",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Series y sumas parciales",
                            "q": "¿Cuál es la tercera suma parcial de 1 + 1/2 + 1/4 + ⋯?",
                            "options": [
                                "3/2",
                                "1/4",
                                "15/8",
                                "7/4"
                            ],
                            "answerIndex": 3,
                            "explain": "Se suman los tres primeros términos.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Series y sumas parciales",
                            "q": "Si sₙ representa una suma parcial, ¿qué expresa s₄ − s₃?",
                            "options": [
                                "El cuarto término",
                                "El tercer término",
                                "La suma de los cuatro términos",
                                "La razón de la serie"
                            ],
                            "answerIndex": 0,
                            "explain": "Al restar ambas sumas se cancelan los primeros tres términos."
                        },
                        {
                            "topic": "Series y sumas parciales",
                            "q": "¿Cuál es la suma de 1 + 1/2 + 1/4 + ⋯?",
                            "options": [
                                "1",
                                "2",
                                "3/2",
                                "La serie diverge"
                            ],
                            "answerIndex": 1,
                            "explain": "La serie geométrica tiene primer término 1 y razón 1/2, así que suma 1/(1 − 1/2).",
                            "variantGroup": "pregunta-3"
                        },
                        {
                            "topic": "Series y sumas parciales",
                            "q": "¿Cuál es la segunda suma parcial de 3 + 1 + 1/3 + ⋯?",
                            "options": [
                                "4",
                                "3",
                                "13/3",
                                "1"
                            ],
                            "answerIndex": 0,
                            "explain": "La segunda suma parcial incluye solo los dos primeros términos.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Series y sumas parciales",
                            "q": "¿Cuál es la suma de 2 + 1 + 1/2 + ⋯?",
                            "options": [
                                "3",
                                "2",
                                "La serie diverge",
                                "4"
                            ],
                            "answerIndex": 3,
                            "explain": "Con primer término 2 y razón 1/2, la suma es 2/(1 − 1/2).",
                            "variantGroup": "pregunta-3"
                        }
                    ]
                },
                "act3": {
                    "nombre": "Actividad 3: Aplicaciones físicas de la integral",
                    "desc": "Aplicaciones físicas de la integral",
                    "preguntas": 7,
                    "banco": [
                        {
                            "topic": "Aplicaciones físicas de la integral",
                            "q": "¿Qué se integra para obtener la masa de una barra de densidad lineal variable?",
                            "options": [
                                "La densidad lineal a lo largo de la barra",
                                "La densidad al cuadrado",
                                "El inverso de la densidad",
                                "La derivada de la masa total respecto del tiempo"
                            ],
                            "answerIndex": 0,
                            "explain": "Cada tramo aporta aproximadamente densidad lineal por longitud."
                        },
                        {
                            "topic": "Aplicaciones físicas de la integral",
                            "q": "Si F(x) = 2x N actúa en la dirección del movimiento entre x = 0 y x = 3 m, ¿qué trabajo realiza?",
                            "options": [
                                "6 J",
                                "9 J",
                                "18 J",
                                "3 J"
                            ],
                            "answerIndex": 1,
                            "explain": "Se integra 2x sobre [0, 3] y se evalúa x² en los extremos."
                        },
                        {
                            "topic": "Aplicaciones físicas de la integral",
                            "q": "¿Qué se multiplica por el área de una franja sumergida para aproximar la fuerza sobre ella?",
                            "options": [
                                "La masa total del recipiente",
                                "El volumen del líquido completo",
                                "La presión a la profundidad de la franja",
                                "La longitud total del recipiente"
                            ],
                            "answerIndex": 2,
                            "explain": "La fuerza sobre una franja pequeña se aproxima como presión local por área."
                        },
                        {
                            "topic": "Aplicaciones físicas de la integral",
                            "q": "Si f es continua y F′ = f, ¿cuánto vale ∫ de a a b f(x) dx?",
                            "options": [
                                "F(b) − F(a)",
                                "F(a) − F(b)",
                                "F(a) + F(b)",
                                "f(b) − f(a)"
                            ],
                            "answerIndex": 0,
                            "explain": "El teorema fundamental del cálculo permite evaluar una integral mediante una antiderivada."
                        },
                        {
                            "topic": "Aplicaciones físicas de la integral",
                            "q": "¿Cuánto vale ∫ de 1 a 3 2 dx?",
                            "options": [
                                "6",
                                "2",
                                "4",
                                "8"
                            ],
                            "answerIndex": 2,
                            "explain": "El área del rectángulo tiene base 2 y altura 2."
                        },
                        {
                            "topic": "Aplicaciones físicas de la integral",
                            "q": "¿Qué ocurre al invertir los límites de una integral definida?",
                            "options": [
                                "Cambia de signo",
                                "Se duplica",
                                "Se vuelve siempre cero",
                                "No cambia nunca"
                            ],
                            "answerIndex": 0,
                            "explain": "Por definición, ∫ de b a a f = −∫ de a a b f."
                        },
                        {
                            "topic": "Aplicaciones físicas de la integral",
                            "q": "Si v(t) = 3 m/s en [0,4] s, ¿cuál es el desplazamiento?",
                            "options": [
                                "12 m",
                                "7 m",
                                "3/4 m",
                                "1 m"
                            ],
                            "answerIndex": 0,
                            "explain": "La integral de velocidad es desplazamiento: 3 × 4 = 12 m."
                        }
                    ]
                }
            }
        }
    }
};
