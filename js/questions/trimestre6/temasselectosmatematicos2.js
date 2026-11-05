// 3 ACTIVIDADES · 30 PREGUNTAS ORIGINALES

export default {
    "id": "temasselectosmatematicos2",
    "nombre": "TEMAS SELECTOS DE MATEMÁTICAS II",
    "icono": "📐",
    "descripcion": "Sistemas dinámicos discretos, caos, fractales, acumulación y aproximación numérica.",
    "modulos": {
        "modulo1": {
            "nombre": "Módulo 1: Sistemas dinámicos discretos",
            "actividades": {
                "act1": {
                    "nombre": "Actividad 1: Sistemas dinámicos discretos",
                    "desc": "Sistemas dinámicos discretos",
                    "preguntas": 10,
                    "banco": [
                        {
                            "topic": "Sistemas dinámicos discretos",
                            "q": "¿Qué define a un sistema dinámico discreto?",
                            "options": [
                                "Una regla que actualiza un estado en pasos separados",
                                "Una figura sin ninguna variable",
                                "Una medición sin orden temporal",
                                "Una función que solo admite una evaluación"
                            ],
                            "answerIndex": 0,
                            "explain": "Una recurrencia calcula estados sucesivos a partir de un estado inicial."
                        },
                        {
                            "topic": "Sistemas dinámicos discretos",
                            "q": "Si xₙ₊₁ = 2xₙ y x₀ = 3, ¿cuánto vale x₂?",
                            "options": [
                                "6",
                                "12",
                                "9",
                                "15"
                            ],
                            "answerIndex": 1,
                            "explain": "Primero x₁ = 6 y después x₂ = 12."
                        },
                        {
                            "topic": "Sistemas dinámicos discretos",
                            "q": "Si xₙ₊₁ = xₙ + 5 y x₀ = 2, ¿cuánto vale x₃?",
                            "options": [
                                "12",
                                "15",
                                "17",
                                "22"
                            ],
                            "answerIndex": 2,
                            "explain": "La sucesión es 2, 7, 12, 17 al aplicar tres veces la regla."
                        },
                        {
                            "topic": "Sistemas dinámicos discretos",
                            "q": "¿Qué ecuación cumple un punto fijo x* de xₙ₊₁ = f(xₙ)?",
                            "options": [
                                "f(x*) = 0 siempre",
                                "x* = 1 siempre",
                                "f(x*) = −x* necesariamente",
                                "f(x*) = x*"
                            ],
                            "answerIndex": 3,
                            "explain": "El punto fijo permanece igual tras aplicar la actualización."
                        },
                        {
                            "topic": "Sistemas dinámicos discretos",
                            "q": "¿Cuál es el punto fijo de f(x) = x/2?",
                            "options": [
                                "0",
                                "1",
                                "2",
                                "−1"
                            ],
                            "answerIndex": 0,
                            "explain": "Resolver x/2 = x conduce a x = 0."
                        },
                        {
                            "topic": "Sistemas dinámicos discretos",
                            "q": "Para xₙ₊₁ = xₙ/2, ¿qué ocurre con x₀ = 8?",
                            "options": [
                                "La sucesión crece sin límite",
                                "La sucesión tiende a 0",
                                "La sucesión alterna entre 8 y −8",
                                "La sucesión permanece en 8"
                            ],
                            "answerIndex": 1,
                            "explain": "Los términos 8, 4, 2, 1 y siguientes se aproximan a cero."
                        },
                        {
                            "topic": "Sistemas dinámicos discretos",
                            "q": "Si f(x) = x + 1 y g(x) = 2x, ¿cuánto vale f(g(3))?",
                            "options": [
                                "8",
                                "6",
                                "7",
                                "5"
                            ],
                            "answerIndex": 2,
                            "explain": "Primero g(3) = 6 y luego f(6) = 7."
                        },
                        {
                            "topic": "Sistemas dinámicos discretos",
                            "q": "¿Qué significa iterar una función?",
                            "options": [
                                "Derivarla siempre una sola vez",
                                "Sumar sus coeficientes",
                                "Evaluarla sin usar el resultado previo",
                                "Aplicarla repetidamente al resultado anterior"
                            ],
                            "answerIndex": 3,
                            "explain": "La iteración genera una órbita a partir de la condición inicial."
                        },
                        {
                            "topic": "Sistemas dinámicos discretos",
                            "q": "En xₙ₊₁ = −xₙ con x₀ = 2, ¿qué comportamiento aparece?",
                            "options": [
                                "Ciclo de periodo 2",
                                "Convergencia a 0",
                                "Crecimiento positivo ilimitado",
                                "Punto fijo en 2"
                            ],
                            "answerIndex": 0,
                            "explain": "La órbita alterna 2, −2, 2, −2; se repite cada dos pasos."
                        },
                        {
                            "topic": "Sistemas dinámicos discretos",
                            "q": "¿Cuál expresión representa el mapa logístico discreto?",
                            "options": [
                                "xₙ₊₁ = r + xₙ² siempre",
                                "xₙ₊₁ = r xₙ(1 − xₙ)",
                                "xₙ₊₁ = sin(r) exclusivamente",
                                "xₙ₊₁ = 1/xₙ sin parámetro"
                            ],
                            "answerIndex": 1,
                            "explain": "El parámetro r regula la dinámica del modelo logístico normalizado."
                        }
                    ]
                }
            }
        },
        "modulo2": {
            "nombre": "Módulo 2: Caos y fractales",
            "actividades": {
                "act2": {
                    "nombre": "Actividad 2: Caos y fractales",
                    "desc": "Caos y fractales",
                    "preguntas": 10,
                    "banco": [
                        {
                            "topic": "Caos y fractales",
                            "q": "¿Qué caracteriza la sensibilidad a condiciones iniciales?",
                            "options": [
                                "Todos los estados iniciales producen lo mismo",
                                "Las reglas cambian al azar en cada paso necesariamente",
                                "Diferencias iniciales pequeñas pueden crecer mucho con las iteraciones",
                                "No existen condiciones iniciales"
                            ],
                            "answerIndex": 2,
                            "explain": "En ciertos sistemas, estados inicialmente cercanos terminan con trayectorias muy diferentes."
                        },
                        {
                            "topic": "Caos y fractales",
                            "q": "¿Puede un sistema determinista presentar comportamiento caótico?",
                            "options": [
                                "No, todo determinismo implica periodicidad",
                                "Solo si no tiene variables",
                                "Solo si se desconoce su fórmula",
                                "Sí, aunque su regla de evolución esté definida"
                            ],
                            "answerIndex": 3,
                            "explain": "Una regla exacta no garantiza predicciones fiables a largo plazo con datos de precisión limitada."
                        },
                        {
                            "topic": "Caos y fractales",
                            "q": "¿Qué muestra un diagrama de bifurcación?",
                            "options": [
                                "Cambios de comportamiento al variar un parámetro",
                                "Únicamente la derivada en un punto",
                                "Solo el área de un triángulo",
                                "Una clasificación de números primos"
                            ],
                            "answerIndex": 0,
                            "explain": "El diagrama registra estados de largo plazo para diferentes valores del parámetro."
                        },
                        {
                            "topic": "Caos y fractales",
                            "q": "¿Qué significa que una órbita tenga periodo 3?",
                            "options": [
                                "Siempre aumenta tres unidades",
                                "Repite su secuencia cada tres iteraciones",
                                "Tiene exactamente tres variables",
                                "Se vuelve cero en el tercer paso"
                            ],
                            "answerIndex": 1,
                            "explain": "El periodo indica cuántos pasos necesita una órbita para repetirse."
                        },
                        {
                            "topic": "Caos y fractales",
                            "q": "¿Qué idea se relaciona con la autosimilitud fractal?",
                            "options": [
                                "Figuras obligatoriamente circulares",
                                "Ausencia de estructura en toda escala",
                                "Partes que reproducen patrones del conjunto a distintas escalas",
                                "Una sola longitud fija sin subdivisiones"
                            ],
                            "answerIndex": 2,
                            "explain": "La autosimilitud puede ser exacta en construcciones matemáticas o aproximada en la naturaleza."
                        },
                        {
                            "topic": "Caos y fractales",
                            "q": "En el conjunto de Cantor clásico, ¿qué se retira en cada paso?",
                            "options": [
                                "Los extremos completos de todos los segmentos",
                                "La mitad superior de un círculo",
                                "Un segmento elegido sin regla",
                                "El tercio central de cada segmento restante"
                            ],
                            "answerIndex": 3,
                            "explain": "La construcción repite la eliminación del tercio medio en cada intervalo conservado."
                        },
                        {
                            "topic": "Caos y fractales",
                            "q": "¿Cuántos segmentos quedan después de dos pasos del conjunto de Cantor clásico?",
                            "options": [
                                "4",
                                "2",
                                "3",
                                "9"
                            ],
                            "answerIndex": 0,
                            "explain": "Cada paso duplica el número de segmentos restantes: 1, 2, 4."
                        },
                        {
                            "topic": "Caos y fractales",
                            "q": "Si cada segmento de Koch se sustituye por cuatro de longitud 1/3 de la anterior, ¿cómo cambia el perímetro?",
                            "options": [
                                "Se divide entre 4",
                                "Se multiplica por 4/3",
                                "Se mantiene igual",
                                "Se multiplica por 1/3"
                            ],
                            "answerIndex": 1,
                            "explain": "Cuatro segmentos de un tercio suman cuatro tercios de la longitud previa."
                        },
                        {
                            "topic": "Caos y fractales",
                            "q": "¿Qué expresa una dimensión fractal no entera?",
                            "options": [
                                "Un error aritmético obligatorio",
                                "Que la figura no puede estudiarse",
                                "Una relación de escala más compleja que las dimensiones enteras usuales",
                                "Que toda medida es negativa"
                            ],
                            "answerIndex": 2,
                            "explain": "La dimensión fractal cuantifica cómo cambia el detalle o cobertura con la escala."
                        },
                        {
                            "topic": "Caos y fractales",
                            "q": "¿Qué práctica mejora una simulación de un sistema sensible?",
                            "options": [
                                "Redondear todo al entero más próximo sin informar",
                                "Usar una sola iteración como prueba universal",
                                "Ignorar el parámetro",
                                "Comparar varias condiciones iniciales cercanas y reportar precisión"
                            ],
                            "answerIndex": 3,
                            "explain": "Comparar trayectorias permite analizar sensibilidad y límites numéricos."
                        }
                    ]
                }
            }
        },
        "modulo3": {
            "nombre": "Módulo 3: Acumulación, ecuaciones y métodos numéricos",
            "actividades": {
                "act3": {
                    "nombre": "Actividad 3: Acumulación, ecuaciones y métodos numéricos",
                    "desc": "Acumulación, ecuaciones y métodos numéricos",
                    "preguntas": 10,
                    "banco": [
                        {
                            "topic": "Acumulación, ecuaciones y métodos numéricos",
                            "q": "¿Qué aproxima una suma de Riemann?",
                            "options": [
                                "Una integral mediante sumas de aportes en subintervalos",
                                "La solución exacta de cualquier ecuación",
                                "Solo el perímetro de polígonos",
                                "Una constante sin relación con funciones"
                            ],
                            "answerIndex": 0,
                            "explain": "Se suman valores de la función multiplicados por anchos de subintervalos."
                        },
                        {
                            "topic": "Acumulación, ecuaciones y métodos numéricos",
                            "q": "Para f(x) = x en [0,2], ¿cuánto da la suma por extremos derechos con dos intervalos iguales?",
                            "options": [
                                "2",
                                "3",
                                "1",
                                "4"
                            ],
                            "answerIndex": 1,
                            "explain": "Los anchos son 1 y las alturas derechas son 1 y 2: 1 × 1 + 2 × 1 = 3."
                        },
                        {
                            "topic": "Acumulación, ecuaciones y métodos numéricos",
                            "q": "¿Cuánto aproxima el trapecio único para f(x) = x en [0,2]?",
                            "options": [
                                "1",
                                "3",
                                "2",
                                "4"
                            ],
                            "answerIndex": 2,
                            "explain": "El área es (2 − 0)(f(0) + f(2))/2 = 2; para una recta es exacta."
                        },
                        {
                            "topic": "Acumulación, ecuaciones y métodos numéricos",
                            "q": "¿Qué vincula el teorema fundamental del cálculo?",
                            "options": [
                                "Solo suma y multiplicación de matrices",
                                "Únicamente ángulos y longitudes",
                                "Solo sucesiones y números primos",
                                "Derivación e integración"
                            ],
                            "answerIndex": 3,
                            "explain": "Bajo las hipótesis correspondientes, integrar y derivar son operaciones inversas."
                        },
                        {
                            "topic": "Acumulación, ecuaciones y métodos numéricos",
                            "q": "Si A(x) = ∫ de 0 a x t² dt, ¿cuánto vale A′(x)?",
                            "options": [
                                "x²",
                                "2x",
                                "x³",
                                "0"
                            ],
                            "answerIndex": 0,
                            "explain": "Por el teorema fundamental, derivar la acumulación recupera el integrando en x."
                        },
                        {
                            "topic": "Acumulación, ecuaciones y métodos numéricos",
                            "q": "¿Qué es una ecuación diferencial?",
                            "options": [
                                "Una ecuación que solo contiene enteros",
                                "Una relación que incluye una función desconocida y alguna de sus derivadas",
                                "Una igualdad sin variables",
                                "Una lista finita de puntos"
                            ],
                            "answerIndex": 1,
                            "explain": "Estas ecuaciones modelan relaciones entre una magnitud y sus tasas de cambio."
                        },
                        {
                            "topic": "Acumulación, ecuaciones y métodos numéricos",
                            "q": "¿Qué función satisface y′ = y y y(0) = 1?",
                            "options": [
                                "y = x",
                                "y = x²",
                                "y = eˣ",
                                "y = 1"
                            ],
                            "answerIndex": 2,
                            "explain": "La derivada de eˣ es eˣ y su valor inicial es 1."
                        },
                        {
                            "topic": "Acumulación, ecuaciones y métodos numéricos",
                            "q": "¿Cuál es la actualización de Euler para y′ = f(t,y)?",
                            "options": [
                                "yₙ₊₁ = yₙ − h siempre",
                                "yₙ₊₁ = f(h,h) solamente",
                                "yₙ₊₁ = yₙ/h siempre",
                                "yₙ₊₁ = yₙ + h f(tₙ,yₙ)"
                            ],
                            "answerIndex": 3,
                            "explain": "Euler aproxima el cambio usando la pendiente actual multiplicada por el paso h."
                        },
                        {
                            "topic": "Acumulación, ecuaciones y métodos numéricos",
                            "q": "Con y′ = y, y(0) = 1 y paso h = 0.1, ¿cuál es el primer valor de Euler?",
                            "options": [
                                "1.1",
                                "1.01",
                                "0.9",
                                "2"
                            ],
                            "answerIndex": 0,
                            "explain": "La actualización da 1 + 0.1 × 1 = 1.1 en t = 0.1."
                        },
                        {
                            "topic": "Acumulación, ecuaciones y métodos numéricos",
                            "q": "¿Qué conviene hacer al evaluar la calidad de una aproximación numérica?",
                            "options": [
                                "Suponer exactitud por usar computadora",
                                "Comparar resultados con pasos menores y una referencia cuando exista",
                                "Ocultar el tamaño del paso",
                                "Usar siempre el mayor paso posible"
                            ],
                            "answerIndex": 1,
                            "explain": "El refinamiento y las referencias permiten estimar error y comprobar estabilidad del cálculo."
                        }
                    ]
                }
            }
        }
    }
};
