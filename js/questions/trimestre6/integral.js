// 3 ACTIVIDADES · 30 PREGUNTAS ORIGINALES

export default {
    "id": "integral",
    "nombre": "CÁLCULO INTEGRAL",
    "icono": "∫",
    "descripcion": "Antiderivadas, técnicas de integración e interpretación de integrales definidas.",
    "modulos": {
        "modulo1": {
            "nombre": "Módulo 1: Antiderivadas y reglas básicas",
            "actividades": {
                "act1": {
                    "nombre": "Actividad 1: Antiderivadas y reglas básicas",
                    "desc": "Antiderivadas y reglas básicas",
                    "preguntas": 10,
                    "banco": [
                        {
                            "topic": "Antiderivadas y reglas básicas",
                            "q": "¿Qué condición cumple una antiderivada F de f en un intervalo?",
                            "options": [
                                "F′(x) = f(x)",
                                "F(x) = f′(x)",
                                "F(x) = 0 siempre",
                                "F′(x) = x siempre"
                            ],
                            "answerIndex": 0,
                            "explain": "Integrar indefinidamente busca funciones cuya derivada sea el integrando."
                        },
                        {
                            "topic": "Antiderivadas y reglas básicas",
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
                            "topic": "Antiderivadas y reglas básicas",
                            "q": "¿Cuál es ∫ x² dx?",
                            "options": [
                                "2x + C",
                                "x³ + C",
                                "x³/3 + C",
                                "x²/2 + C"
                            ],
                            "answerIndex": 2,
                            "explain": "La regla de potencias aumenta el exponente en uno y divide entre el nuevo exponente."
                        },
                        {
                            "topic": "Antiderivadas y reglas básicas",
                            "q": "¿Cuál es ∫ 4 dx?",
                            "options": [
                                "4 + C",
                                "x⁴ + C",
                                "0 + C",
                                "4x + C"
                            ],
                            "answerIndex": 3,
                            "explain": "La derivada de 4x es 4."
                        },
                        {
                            "topic": "Antiderivadas y reglas básicas",
                            "q": "¿Cuál es ∫ 3x² dx?",
                            "options": [
                                "x³ + C",
                                "6x + C",
                                "3x³ + C",
                                "x² + C"
                            ],
                            "answerIndex": 0,
                            "explain": "Al integrar x² se obtiene x³/3; el factor 3 cancela el denominador."
                        },
                        {
                            "topic": "Antiderivadas y reglas básicas",
                            "q": "Para x > 0, ¿cuál es ∫ 1/x dx?",
                            "options": [
                                "x²/2 + C",
                                "ln(x) + C",
                                "−1/x² + C",
                                "eˣ + C"
                            ],
                            "answerIndex": 1,
                            "explain": "La derivada del logaritmo natural es 1/x; para x distinto de cero se usa ln de valor absoluto."
                        },
                        {
                            "topic": "Antiderivadas y reglas básicas",
                            "q": "¿Cuál es ∫ eˣ dx?",
                            "options": [
                                "xeˣ + C",
                                "ln(x) + C",
                                "eˣ + C",
                                "eˣ/x + C"
                            ],
                            "answerIndex": 2,
                            "explain": "La función exponencial natural coincide con su derivada."
                        },
                        {
                            "topic": "Antiderivadas y reglas básicas",
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
                            "topic": "Antiderivadas y reglas básicas",
                            "q": "¿Cuál es ∫ sin(x) dx?",
                            "options": [
                                "−cos(x) + C",
                                "cos(x) + C",
                                "tan(x) + C",
                                "sin(x) + C"
                            ],
                            "answerIndex": 0,
                            "explain": "La derivada de −cos(x) es sin(x)."
                        },
                        {
                            "topic": "Antiderivadas y reglas básicas",
                            "q": "¿Cuál es ∫ (2x + 3) dx?",
                            "options": [
                                "2x² + 3 + C",
                                "x² + 3x + C",
                                "x² + C",
                                "2 + C"
                            ],
                            "answerIndex": 1,
                            "explain": "La integración es lineal: se integra cada término por separado."
                        }
                    ]
                }
            }
        },
        "modulo2": {
            "nombre": "Módulo 2: Técnicas y condiciones iniciales",
            "actividades": {
                "act2": {
                    "nombre": "Actividad 2: Técnicas y condiciones iniciales",
                    "desc": "Técnicas y condiciones iniciales",
                    "preguntas": 10,
                    "banco": [
                        {
                            "topic": "Técnicas y condiciones iniciales",
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
                            "topic": "Técnicas y condiciones iniciales",
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
                            "topic": "Técnicas y condiciones iniciales",
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
                            "topic": "Técnicas y condiciones iniciales",
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
                            "topic": "Técnicas y condiciones iniciales",
                            "q": "¿Cuál es ∫ xeˣ dx?",
                            "options": [
                                "x²eˣ + C",
                                "eˣ + C",
                                "(x − 1)eˣ + C",
                                "(x + 1)eˣ + C"
                            ],
                            "answerIndex": 2,
                            "explain": "Por partes, u = x y dv = eˣ dx; resulta xeˣ − eˣ."
                        },
                        {
                            "topic": "Técnicas y condiciones iniciales",
                            "q": "Para x > 0, ¿cuál es ∫ ln(x) dx?",
                            "options": [
                                "1/x + C",
                                "ln(x)/x + C",
                                "x ln(x) + x + C",
                                "x ln(x) − x + C"
                            ],
                            "answerIndex": 3,
                            "explain": "Por partes, u = ln(x) y dv = dx, por lo que se resta ∫ 1 dx."
                        },
                        {
                            "topic": "Técnicas y condiciones iniciales",
                            "q": "Si F′(x) = 2x y F(0) = 3, ¿cuál es F(x)?",
                            "options": [
                                "x² + 3",
                                "2x + 3",
                                "x²",
                                "x² − 3"
                            ],
                            "answerIndex": 0,
                            "explain": "La familia x² + C cumple la derivada; la condición inicial fija C = 3."
                        },
                        {
                            "topic": "Técnicas y condiciones iniciales",
                            "q": "¿Cuál es ∫ (x + 1)² dx?",
                            "options": [
                                "2(x + 1) + C",
                                "(x + 1)³/3 + C",
                                "(x + 1)³ + C",
                                "x³/3 + C"
                            ],
                            "answerIndex": 1,
                            "explain": "Con u = x + 1 y du = dx se aplica directamente la regla de potencias."
                        },
                        {
                            "topic": "Técnicas y condiciones iniciales",
                            "q": "¿Cuál es ∫ 1/(3x + 1) dx en un intervalo donde 3x + 1 > 0?",
                            "options": [
                                "3ln(3x + 1) + C",
                                "ln(3x + 1) + C",
                                "(1/3)ln(3x + 1) + C",
                                "1/(3x + 1)² + C"
                            ],
                            "answerIndex": 2,
                            "explain": "El factor 1/3 compensa la derivada 3 de la expresión interior."
                        },
                        {
                            "topic": "Técnicas y condiciones iniciales",
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
                }
            }
        },
        "modulo3": {
            "nombre": "Módulo 3: Integral definida y aplicaciones",
            "actividades": {
                "act3": {
                    "nombre": "Actividad 3: Integral definida y aplicaciones",
                    "desc": "Integral definida y aplicaciones",
                    "preguntas": 10,
                    "banco": [
                        {
                            "topic": "Integral definida y aplicaciones",
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
                            "topic": "Integral definida y aplicaciones",
                            "q": "¿Cuánto vale ∫ de 0 a 2 x dx?",
                            "options": [
                                "4",
                                "2",
                                "1",
                                "0"
                            ],
                            "answerIndex": 1,
                            "explain": "Usando x²/2 se obtiene 2²/2 − 0 = 2."
                        },
                        {
                            "topic": "Integral definida y aplicaciones",
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
                            "topic": "Integral definida y aplicaciones",
                            "q": "¿Cuánto vale ∫ de a a a f(x) dx para f continua?",
                            "options": [
                                "1",
                                "f(a)",
                                "a",
                                "0"
                            ],
                            "answerIndex": 3,
                            "explain": "Un intervalo de longitud cero produce acumulación nula."
                        },
                        {
                            "topic": "Integral definida y aplicaciones",
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
                            "topic": "Integral definida y aplicaciones",
                            "q": "¿Cuánto vale ∫ de −1 a 1 x dx?",
                            "options": [
                                "1",
                                "0",
                                "2",
                                "−2"
                            ],
                            "answerIndex": 1,
                            "explain": "Las contribuciones de esta función impar se cancelan en un intervalo simétrico."
                        },
                        {
                            "topic": "Integral definida y aplicaciones",
                            "q": "Si f(x) < 0 en todo [a,b] y a < b, ¿qué representa su integral?",
                            "options": [
                                "Área geométrica positiva obligatoriamente",
                                "Longitud de la curva",
                                "Área con signo negativa",
                                "Volumen de una esfera"
                            ],
                            "answerIndex": 2,
                            "explain": "La integral acumula valores con signo; el área geométrica requiere valor absoluto."
                        },
                        {
                            "topic": "Integral definida y aplicaciones",
                            "q": "¿Cuál es el área entre y = x y y = x² en [0,1]?",
                            "options": [
                                "1/2",
                                "1/3",
                                "1",
                                "1/6"
                            ],
                            "answerIndex": 3,
                            "explain": "Se integra x − x²: 1/2 − 1/3 = 1/6 unidades cuadradas."
                        },
                        {
                            "topic": "Integral definida y aplicaciones",
                            "q": "Si v(t) = 3 m/s en [0,4] s, ¿cuál es el desplazamiento?",
                            "options": [
                                "12 m",
                                "7 m",
                                "3/4 m",
                                "1 m"
                            ],
                            "answerIndex": 0,
                            "explain": "La integral de velocidad es desplazamiento: 3 × 4 = 12 m."
                        },
                        {
                            "topic": "Integral definida y aplicaciones",
                            "q": "¿Cuál es el valor promedio de f(x) = x² en [0,3]?",
                            "options": [
                                "9",
                                "3",
                                "9/2",
                                "1"
                            ],
                            "answerIndex": 1,
                            "explain": "El promedio es (1/3)∫ de 0 a 3 x² dx = (1/3)(9) = 3."
                        }
                    ]
                }
            }
        }
    }
};
