// 3 MÓDULOS · 9 ACTIVIDADES

export default {
    "id": "temasselectosmatematicos2",
    "nombre": "TEMAS SELECTOS DE MATEMÁTICAS II",
    "icono": "📐",
    "descripcion": "Ecuaciones diferenciales ordinarias, métodos de solución, transformada de Laplace y problemas de valor inicial.",
    "modulos": {
        "modulo1": {
            "nombre": "Módulo 1: Ecuaciones diferenciales ordinarias",
            "actividades": {
                "act1": {
                    "nombre": "Actividad 1: Definición, orden y soluciones",
                    "desc": "Definición, orden y soluciones",
                    "preguntas": 4,
                    "banco": [
                        {
                            "topic": "Definición, orden y soluciones",
                            "q": "¿Cuál es el orden de y''' + (y')² = 0?",
                            "options": [
                                "Tercero",
                                "Segundo",
                                "Primero",
                                "Quinto"
                            ],
                            "answerIndex": 0,
                            "explain": "El orden lo determina la derivada de mayor orden, y'''."
                        },
                        {
                            "topic": "Definición, orden y soluciones",
                            "q": "¿Qué distingue una ecuación diferencial ordinaria?",
                            "options": [
                                "La ecuación carece de derivadas",
                                "La función incógnita depende de una sola variable independiente",
                                "Todas las derivadas son parciales",
                                "La incógnita es un número fijo"
                            ],
                            "answerIndex": 1,
                            "explain": "Las derivadas de una función de una variable son ordinarias."
                        },
                        {
                            "topic": "Definición, orden y soluciones",
                            "q": "¿Cuál función satisface y' = 2x?",
                            "options": [
                                "y = 2x + 3",
                                "y = x³ + 3",
                                "y = x² + 3",
                                "y = 3x²"
                            ],
                            "answerIndex": 2,
                            "explain": "Al derivar x² + 3 se obtiene 2x."
                        },
                        {
                            "topic": "Definición, orden y soluciones",
                            "q": "¿Qué es una ecuación diferencial?",
                            "options": [
                                "Una ecuación que solo contiene enteros",
                                "Una relación que incluye una función desconocida y alguna de sus derivadas",
                                "Una igualdad sin variables",
                                "Una lista finita de puntos"
                            ],
                            "answerIndex": 1,
                            "explain": "Estas ecuaciones modelan relaciones entre una magnitud y sus tasas de cambio."
                        }
                    ]
                },
                "act2": {
                    "nombre": "Actividad 2: Ecuaciones homogéneas",
                    "desc": "Ecuaciones homogéneas",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Ecuaciones homogéneas",
                            "q": "¿Qué grado de homogeneidad tiene f(x, y) = x² + xy?",
                            "options": [
                                "1",
                                "2",
                                "0",
                                "3"
                            ],
                            "answerIndex": 1,
                            "explain": "Al sustituir x e y por tx y ty, ambas contribuciones adquieren el factor t².",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Ecuaciones homogéneas",
                            "q": "¿Cuándo es homogénea M dx + N dy = 0 en el sentido de este método?",
                            "options": [
                                "Cuando solo M es homogénea",
                                "Cuando las derivadas parciales de M y N valen cero",
                                "Cuando M y N son homogéneas del mismo grado",
                                "Cuando el grado de M supera al de N"
                            ],
                            "answerIndex": 2,
                            "explain": "El mismo grado permite usar el cociente entre y y x para reducir la ecuación."
                        },
                        {
                            "topic": "Ecuaciones homogéneas",
                            "q": "Si y = ux, ¿cuánto vale dy/dx?",
                            "options": [
                                "x du/dx",
                                "u du/dx",
                                "u + x",
                                "u + x du/dx"
                            ],
                            "answerIndex": 3,
                            "explain": "Se usa la regla del producto porque u depende de x.",
                            "variantGroup": "pregunta-3"
                        },
                        {
                            "topic": "Ecuaciones homogéneas",
                            "q": "¿Qué grado de homogeneidad tiene f(x, y) = x³ + xy²?",
                            "options": [
                                "2",
                                "1",
                                "3",
                                "0"
                            ],
                            "answerIndex": 2,
                            "explain": "Al escalar ambas variables aparece el factor t³.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Ecuaciones homogéneas",
                            "q": "Si x = vy y v depende de y, ¿cuánto vale dx/dy?",
                            "options": [
                                "v",
                                "v + y dv/dy",
                                "y dv/dy",
                                "v + y"
                            ],
                            "answerIndex": 1,
                            "explain": "Se deriva el producto vy.",
                            "variantGroup": "pregunta-3"
                        }
                    ]
                },
                "act3": {
                    "nombre": "Actividad 3: Ecuaciones exactas",
                    "desc": "Ecuaciones exactas",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Ecuaciones exactas",
                            "q": "¿Qué igualdad comprueba la exactitud en una región rectangular con derivadas parciales continuas?",
                            "options": [
                                "∂M/∂x = ∂N/∂y",
                                "M = N",
                                "∂M/∂y = ∂N/∂x",
                                "∂M/∂y = −∂N/∂x"
                            ],
                            "answerIndex": 2,
                            "explain": "Las derivadas cruzadas del potencial deben coincidir.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Ecuaciones exactas",
                            "q": "¿Qué potencial corresponde a 2x dx + 2y dy?",
                            "options": [
                                "2x + 2y",
                                "2xy",
                                "x² − y²",
                                "x² + y²"
                            ],
                            "answerIndex": 3,
                            "explain": "Las derivadas parciales de x² + y² son 2x y 2y.",
                            "variantGroup": "pregunta-2"
                        },
                        {
                            "topic": "Ecuaciones exactas",
                            "q": "Si una ecuación exacta se escribe como df = 0, ¿cómo se expresa su solución implícita?",
                            "options": [
                                "f(x, y) = C",
                                "f(x, y) = x + C",
                                "f(x, y) = y",
                                "f(x, y) = xy"
                            ],
                            "answerIndex": 0,
                            "explain": "Sobre una curva solución el potencial se mantiene constante."
                        },
                        {
                            "topic": "Ecuaciones exactas",
                            "q": "Si M = 2xy y N = x², ¿qué derivadas cruzadas prueban la exactitud?",
                            "options": [
                                "∂M/∂y = ∂N/∂x = 2y",
                                "∂M/∂x = ∂N/∂y = 2x",
                                "∂M/∂y = ∂N/∂x = 2x",
                                "∂M/∂y = ∂N/∂x = 0"
                            ],
                            "answerIndex": 2,
                            "explain": "Derivar M respecto a y y N respecto a x da 2x en ambos casos.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Ecuaciones exactas",
                            "q": "¿Qué potencial corresponde a 3x² dx + 4y dy?",
                            "options": [
                                "x³ + 2y²",
                                "3x³ + 4y²",
                                "x³ + 4y²",
                                "3x² + 4y"
                            ],
                            "answerIndex": 0,
                            "explain": "Las derivadas parciales del potencial son 3x² y 4y.",
                            "variantGroup": "pregunta-2"
                        }
                    ]
                }
            }
        },
        "modulo2": {
            "nombre": "Módulo 2: Transformada de Laplace",
            "actividades": {
                "act1": {
                    "nombre": "Actividad 1: Transformada de Laplace e inversa",
                    "desc": "Transformada de Laplace e inversa",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Transformada de Laplace e inversa",
                            "q": "¿Cuál es ℒ{t²}?",
                            "options": [
                                "1/s²",
                                "2/s²",
                                "1/s³",
                                "2/s³"
                            ],
                            "answerIndex": 3,
                            "explain": "Se usa ℒ{tⁿ} = n!/s^(n + 1).",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Transformada de Laplace e inversa",
                            "q": "¿Qué función tiene transformada 1/(s − 4)?",
                            "options": [
                                "e^(4t)",
                                "e^(−4t)",
                                "cos(4t)",
                                "4t"
                            ],
                            "answerIndex": 0,
                            "explain": "La transformada de e^(at) es 1/(s − a) para s > a."
                        },
                        {
                            "topic": "Transformada de Laplace e inversa",
                            "q": "¿Cuál es ℒ{cos(3t)}?",
                            "options": [
                                "3/(s² + 9)",
                                "s/(s² + 9)",
                                "s/(s² − 9)",
                                "1/(s − 3)"
                            ],
                            "answerIndex": 1,
                            "explain": "Para el coseno, el numerador es s y el denominador es s² + 3².",
                            "variantGroup": "pregunta-3"
                        },
                        {
                            "topic": "Transformada de Laplace e inversa",
                            "q": "¿Cuál es ℒ{t³}?",
                            "options": [
                                "3/s⁴",
                                "6/s³",
                                "1/s³",
                                "6/s⁴"
                            ],
                            "answerIndex": 3,
                            "explain": "Se aplica 3!/s⁴.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Transformada de Laplace e inversa",
                            "q": "¿Cuál es ℒ{sen(5t)}?",
                            "options": [
                                "s/(s² + 25)",
                                "5/(s² − 25)",
                                "5/(s² + 25)",
                                "1/(s − 5)"
                            ],
                            "answerIndex": 2,
                            "explain": "La transformada de sen(kt) tiene numerador k y denominador s² + k².",
                            "variantGroup": "pregunta-3"
                        }
                    ]
                },
                "act2": {
                    "nombre": "Actividad 2: Teoremas de traslación",
                    "desc": "Teoremas de traslación",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Teoremas de traslación",
                            "q": "Si ℒ{f(t)} = F(s), ¿cuánto vale ℒ{e^(3t)f(t)}?",
                            "options": [
                                "F(s − 3)",
                                "F(s + 3)",
                                "3F(s)",
                                "e^(−3s)F(s)"
                            ],
                            "answerIndex": 0,
                            "explain": "El primer teorema sustituye s por s − 3.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Teoremas de traslación",
                            "q": "¿Qué factor multiplica a F(s) al retrasar f(t) dos unidades y hacerla cero antes del retraso?",
                            "options": [
                                "e^(2s)",
                                "e^(−2s)",
                                "s − 2",
                                "1/(s + 2)"
                            ],
                            "answerIndex": 1,
                            "explain": "El segundo teorema de traslación produce el factor e^(−as) para el retraso a.",
                            "variantGroup": "pregunta-2"
                        },
                        {
                            "topic": "Teoremas de traslación",
                            "q": "¿Cuál es ℒ{e^(−2t) cos(4t)}?",
                            "options": [
                                "(s − 2)/((s − 2)² + 16)",
                                "4/((s + 2)² + 16)",
                                "(s + 2)/((s + 2)² + 16)",
                                "s/(s² + 4)"
                            ],
                            "answerIndex": 2,
                            "explain": "Se sustituye s por s + 2 en la transformada del coseno."
                        },
                        {
                            "topic": "Teoremas de traslación",
                            "q": "Si ℒ{g(t)} = G(s), ¿cuál es ℒ{e^(−4t)g(t)}?",
                            "options": [
                                "G(s − 4)",
                                "4G(s)",
                                "e^(−4s)G(s)",
                                "G(s + 4)"
                            ],
                            "answerIndex": 3,
                            "explain": "Con a = −4, la sustitución s − a da s + 4.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Teoremas de traslación",
                            "q": "¿Qué factor aparece al retrasar una función causal cinco unidades?",
                            "options": [
                                "e^(5s)",
                                "e^(−5s)",
                                "s + 5",
                                "s − 5"
                            ],
                            "answerIndex": 1,
                            "explain": "El segundo teorema de traslación introduce e^(−as) con a = 5.",
                            "variantGroup": "pregunta-2"
                        }
                    ]
                },
                "act3": {
                    "nombre": "Actividad 3: Derivadas de transformadas",
                    "desc": "Derivadas de transformadas",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Derivadas de transformadas",
                            "q": "Si ℒ{f(t)} = F(s), ¿cuánto vale ℒ{tf(t)}?",
                            "options": [
                                "F'(s)",
                                "−F'(s)",
                                "sF(s)",
                                "F(s)/s"
                            ],
                            "answerIndex": 1,
                            "explain": "Multiplicar por t corresponde a tomar la primera derivada con signo negativo respecto a s.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Derivadas de transformadas",
                            "q": "¿Qué signo acompaña a F''(s) en la transformada de t²f(t)?",
                            "options": [
                                "Negativo",
                                "Depende de F(0)",
                                "Positivo",
                                "Depende del signo de s"
                            ],
                            "answerIndex": 2,
                            "explain": "El factor correspondiente a n = 2 es (−1)² = 1."
                        },
                        {
                            "topic": "Derivadas de transformadas",
                            "q": "¿Cuál es ℒ{t e^(3t)}?",
                            "options": [
                                "−1/(s − 3)²",
                                "1/(s + 3)²",
                                "s/(s − 3)²",
                                "1/(s − 3)²"
                            ],
                            "answerIndex": 3,
                            "explain": "Se toma la derivada de 1/(s − 3) y se invierte su signo.",
                            "variantGroup": "pregunta-3"
                        },
                        {
                            "topic": "Derivadas de transformadas",
                            "q": "Si ℒ{g(t)} = G(s), ¿cuánto vale ℒ{t³g(t)}?",
                            "options": [
                                "G'''(s)",
                                "s³G(s)",
                                "−G'(s)",
                                "−G'''(s)"
                            ],
                            "answerIndex": 3,
                            "explain": "El factor de la tercera derivada es (−1)³.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Derivadas de transformadas",
                            "q": "¿Cuál es ℒ{t e^(−2t)}?",
                            "options": [
                                "−1/(s + 2)²",
                                "1/(s − 2)²",
                                "1/(s + 2)²",
                                "1/(s + 2)"
                            ],
                            "answerIndex": 2,
                            "explain": "La derivada de 1/(s + 2) es −1/(s + 2)² y la regla cambia el signo.",
                            "variantGroup": "pregunta-3"
                        }
                    ]
                }
            }
        },
        "modulo3": {
            "nombre": "Módulo 3: Aplicaciones y solución de ecuaciones diferenciales",
            "actividades": {
                "act1": {
                    "nombre": "Actividad 1: Aplicaciones de las ecuaciones diferenciales",
                    "desc": "Aplicaciones de las ecuaciones diferenciales",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Aplicaciones de las ecuaciones diferenciales",
                            "q": "Si una cantidad Q disminuye a una tasa proporcional a su valor, ¿qué modelo expresa esa relación con k > 0?",
                            "options": [
                                "Q' = kQ",
                                "Q' = −k",
                                "Q' = −kQ",
                                "Q' = k/Q"
                            ],
                            "answerIndex": 2,
                            "explain": "La proporcionalidad introduce el factor Q y el decrecimiento aporta el signo negativo.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Aplicaciones de las ecuaciones diferenciales",
                            "q": "Si x(t) es la posición, ¿qué término representa la aceleración?",
                            "options": [
                                "x'(t)",
                                "x(t)",
                                "x(t)²",
                                "x''(t)"
                            ],
                            "answerIndex": 3,
                            "explain": "La aceleración es la derivada temporal de la velocidad.",
                            "variantGroup": "pregunta-2"
                        },
                        {
                            "topic": "Aplicaciones de las ecuaciones diferenciales",
                            "q": "¿Qué representa y(0) = 5 en un modelo temporal?",
                            "options": [
                                "El valor de la variable dependiente al inicio",
                                "La tasa instantánea en cualquier momento",
                                "El valor de la derivada al inicio",
                                "El orden de la ecuación"
                            ],
                            "answerIndex": 0,
                            "explain": "La condición indica el valor de y cuando t = 0."
                        },
                        {
                            "topic": "Aplicaciones de las ecuaciones diferenciales",
                            "q": "Si Q crece a una tasa proporcional a su valor con k > 0, ¿qué ecuación lo modela?",
                            "options": [
                                "Q' = kQ",
                                "Q' = −kQ",
                                "Q' = k",
                                "Q' = k/Q"
                            ],
                            "answerIndex": 0,
                            "explain": "La tasa es el producto de Q y una constante positiva.",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Aplicaciones de las ecuaciones diferenciales",
                            "q": "Si v(t) es la velocidad, ¿qué término representa la aceleración?",
                            "options": [
                                "v(t)",
                                "v''(t)",
                                "v'(t)",
                                "v(t)²"
                            ],
                            "answerIndex": 2,
                            "explain": "La aceleración mide el cambio instantáneo de la velocidad.",
                            "variantGroup": "pregunta-2"
                        }
                    ]
                },
                "act2": {
                    "nombre": "Actividad 2: Problemas de valor inicial con Laplace",
                    "desc": "Problemas de valor inicial con Laplace",
                    "preguntas": 4,
                    "banco": [
                        {
                            "topic": "Problemas de valor inicial con Laplace",
                            "q": "¿Cuál es ℒ{y'} si Y(s) = ℒ{y} y y(0) = 1?",
                            "options": [
                                "sY(s) + 1",
                                "Y(s)/s − 1",
                                "s²Y(s) − 1",
                                "sY(s) − 1"
                            ],
                            "answerIndex": 3,
                            "explain": "La transformada de la primera derivada incorpora el término −y(0)."
                        },
                        {
                            "topic": "Problemas de valor inicial con Laplace",
                            "q": "Para y' − 3y = e^(2t), y(0) = 1, ¿qué igualdad resulta al transformar ambos lados?",
                            "options": [
                                "(s − 3)Y(s) − 1 = 1/(s − 2)",
                                "(s + 3)Y(s) − 1 = 1/(s − 2)",
                                "(s − 3)Y(s) + 1 = 1/(s − 2)",
                                "(s − 3)Y(s) − 1 = 1/(s + 2)"
                            ],
                            "answerIndex": 0,
                            "explain": "Se combinan la transformada de y', el término −3Y(s) y la transformada de e^(2t)."
                        },
                        {
                            "topic": "Problemas de valor inicial con Laplace",
                            "q": "¿Cuál satisface y' − 3y = e^(2t) y y(0) = 1?",
                            "options": [
                                "e^(3t) + e^(2t)",
                                "2e^(3t) − e^(2t)",
                                "2e^(2t) − e^(3t)",
                                "e^(3t)"
                            ],
                            "answerIndex": 1,
                            "explain": "Su valor inicial es 2 − 1 y al calcular y' − 3y queda e^(2t)."
                        },
                        {
                            "topic": "Problemas de valor inicial con Laplace",
                            "q": "¿Qué función satisface y′ = y y y(0) = 1?",
                            "options": [
                                "y = x",
                                "y = x²",
                                "y = eˣ",
                                "y = 1"
                            ],
                            "answerIndex": 2,
                            "explain": "La derivada de eˣ es eˣ y su valor inicial es 1."
                        }
                    ]
                },
                "act3": {
                    "nombre": "Actividad 3: Ecuaciones de segundo orden con Laplace",
                    "desc": "Ecuaciones de segundo orden con Laplace",
                    "preguntas": 5,
                    "banco": [
                        {
                            "topic": "Ecuaciones de segundo orden con Laplace",
                            "q": "¿Cuál es ℒ{y''} si y(0) = 2 y y'(0) = 3?",
                            "options": [
                                "s²Y(s) − 2s − 3",
                                "s²Y(s) − 3s − 2",
                                "s²Y(s) + 2s + 3",
                                "sY(s) − 2s − 3"
                            ],
                            "answerIndex": 0,
                            "explain": "Se aplica s²Y(s) − sy(0) − y'(0).",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Ecuaciones de segundo orden con Laplace",
                            "q": "Si y(0) = y'(0) = 0, ¿qué factor multiplica a Y(s) al transformar y'' + 4y' + 6y?",
                            "options": [
                                "s² − 4s + 6",
                                "s² + 4s + 6",
                                "s² + 4 + 6s",
                                "s + 4s² + 6"
                            ],
                            "answerIndex": 1,
                            "explain": "Las transformadas de y'', y' e y aportan, respectivamente, s²Y(s), sY(s) e Y(s)."
                        },
                        {
                            "topic": "Ecuaciones de segundo orden con Laplace",
                            "q": "¿Cómo se completa el cuadrado en s² + 4s + 6?",
                            "options": [
                                "(s − 2)² + 2",
                                "(s + 4)² − 10",
                                "(s + 2)² + 2",
                                "(s + 2)² − 2"
                            ],
                            "answerIndex": 2,
                            "explain": "El cuadrado (s + 2)² aporta s² + 4s + 4, así que faltan dos unidades.",
                            "variantGroup": "pregunta-3"
                        },
                        {
                            "topic": "Ecuaciones de segundo orden con Laplace",
                            "q": "Si y(0) = 1 y y'(0) = −2, ¿cuál es ℒ{y''}?",
                            "options": [
                                "s²Y(s) − s + 2",
                                "s²Y(s) − s − 2",
                                "s²Y(s) + s + 2",
                                "sY(s) − 1"
                            ],
                            "answerIndex": 0,
                            "explain": "Se sustituyen las condiciones en s²Y(s) − sy(0) − y'(0).",
                            "variantGroup": "pregunta-1"
                        },
                        {
                            "topic": "Ecuaciones de segundo orden con Laplace",
                            "q": "¿Cómo se completa el cuadrado en s² + 6s + 13?",
                            "options": [
                                "(s + 3)² + 13",
                                "(s − 3)² + 4",
                                "(s + 6)² − 23",
                                "(s + 3)² + 4"
                            ],
                            "answerIndex": 3,
                            "explain": "Al expandir (s + 3)² se obtiene s² + 6s + 9, al que se suman 4.",
                            "variantGroup": "pregunta-3"
                        }
                    ]
                }
            }
        }
    }
};
