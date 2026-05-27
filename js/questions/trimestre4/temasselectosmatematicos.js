// ============================================
// TEMAS SELECTOS DE MATEMÁTICAS I: CÁLCULO INTEGRAL
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const temasSelectosMatematicas = {
    id: "temasSelectosMatematicas",
    nombre: "TEMAS SELECTOS DE MATEMÁTICAS I: ÁREA BAJO CURVAS, MÉTODOS DE SOLUCIÓN",
    icono: "∫",
    descripcion: "Estudio de medición de figuras, integral definida e indefinida, teorema fundamental del cálculo, sumas de Riemann, integrales impropias, regla de la cadena para antiderivación, integración por sustitución, integración por partes, fracciones parciales, sustitución trigonométrica, ecuaciones diferenciales, longitud de curvas, sólidos de revolución (discos y coronas), centroides, teorema de Pappus.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: Explorando el Área Bajo una Curva",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Medición de Figuras e Integral Definida",
                    desc: "Comprensión de medición de áreas de figuras (cuadrados, rectángulos, triángulos), figuras amorfas, incrustación, integral definida y teorema fundamental del cálculo.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Unidad de área",
                            q: "¿Qué se debe partir para medir el área de una región en el plano?",
                            options: ["Una unidad de longitud", "Una unidad de área", "Una unidad de volumen", "Una unidad de tiempo"],
                            answerIndex: 1,
                            explain: "Para la medición del área de una región se debe partir de una unidad de área. De esta forma, todas las áreas se referirán a esta unidad o en fracciones de esta unidad."
                        },
                        {
                            topic: "Área de un rectángulo",
                            q: "¿Cómo se calcula el área de un rectángulo de lados de longitud a y b (números reales)?",
                            options: ["a + b", "a - b", "a × b", "a / b"],
                            answerIndex: 2,
                            explain: "Si las longitudes de los lados de un rectángulo son números reales a y b, entonces el área del rectángulo por definición será el número real a × b."
                        },
                        {
                            topic: "Área de un triángulo",
                            q: "¿Cuál es la fórmula general para el área de un triángulo?",
                            options: ["a × b", "½ (base × altura)", "base × altura", "½ (a + b)"],
                            answerIndex: 1,
                            explain: "El área de un triángulo se calcula con la fórmula: ½ × base × altura, independientemente de si es rectángulo o arbitrario."
                        },
                        {
                            topic: "Triangulación",
                            q: "¿Qué método se utiliza para calcular el área de figuras poligonales complejas?",
                            options: ["Cuadratura", "Triangulación (dividir la figura en triángulos independientes)", "Rectificación", "Integración directa"],
                            answerIndex: 1,
                            explain: "Para figuras poligonales complejas, lo recomendable para el cálculo del área es dividir cada figura en triángulos independientes, proceso conocido como triangulación."
                        },
                        {
                            topic: "Figuras amorfas",
                            q: "¿Cómo se pueden calcular áreas de figuras amorfas?",
                            options: ["Con fórmulas exactas", "Incrustando figuras conocidas como cuadrados, rectángulos y circunferencias", "Solo por medición directa", "No es posible calcularlas"],
                            answerIndex: 1,
                            explain: "Un método para facilitar el cálculo aproximado al valor de su área es incrustar en la figura amorfa figuras conocidas como el cuadrado, el rectángulo y la circunferencia."
                        },
                        {
                            topic: "Integral definida",
                            q: "¿Qué representa el símbolo ∫ en el cálculo integral?",
                            options: ["La derivada", "El límite", "La integral, que procede de la letra 'S' (summa)", "La sumatoria"],
                            answerIndex: 2,
                            explain: "El símbolo ∫ procede de la letra 'S' (summa) y se utiliza para representar la integral."
                        },
                        {
                            topic: "Constante de integración C",
                            q: "¿Por qué se agrega una constante '+ C' al resolver una integral indefinida?",
                            options: ["Porque la derivada de una constante es cero", "Porque la integral siempre tiene múltiples soluciones", "Porque es una regla arbitraria", "Porque la constante representa el área"],
                            answerIndex: 0,
                            explain: "Se agrega '+ C' porque si se derivan funciones como 2x² + 5, 2x² - 4 o 2x², su derivada es siempre 4x; la constante puede tener cualquier valor tanto positivo como negativo."
                        },
                        {
                            topic: "Teorema fundamental del cálculo",
                            q: "¿Qué establece el teorema fundamental del cálculo?",
                            options: ["Que la derivación e integración son operaciones inversas", "Que toda función es integrable", "Que la integral es siempre positiva", "Que la derivada es siempre continua"],
                            answerIndex: 0,
                            explain: "El teorema fundamental del cálculo manifiesta que la integración y la derivación de funciones son operaciones inversas; toda función continua integrable comprueba que la derivada de la integral es igual a ésta."
                        },
                        {
                            topic: "Regla de Barrow",
                            q: "¿Qué establece la regla de Barrow para integrales definidas?",
                            options: ["∫f(x)dx = F(a) - F(b)", "∫ₐᵇ f(x)dx = F(b) - F(a)", "∫ₐᵇ f(x)dx = F(a) + F(b)", "∫ₐᵇ f(x)dx = F(b)/F(a)"],
                            answerIndex: 1,
                            explain: "La regla de Barrow establece que ∫ₐᵇ f(x)dx = F(b) - F(a), donde F es la antiderivada de f."
                        },
                        {
                            topic: "Aproximación del área",
                            q: "Según el ejemplo de la función y = x² de 0 a 1, ¿cómo se puede aproximar el área bajo la curva?",
                            options: ["Aumentando el número de franjas (rectángulos)", "Disminuyendo el número de franjas", "Usando una sola franja", "Usando triángulos en lugar de rectángulos"],
                            answerIndex: 0,
                            explain: "Para aproximarse al área de una figura amorfa, si se aumenta el número de franjas (rectángulos) para obtener su área, al sumarlos todos, se acercará más al valor real del área."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Sumas de Riemann e Integrales Impropias",
                    desc: "Comprensión de sumas de Riemann, propiedades de la integral definida, cálculo de integrales definidas e integrales impropias.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Sumas de Riemann",
                            q: "¿Quién descubrió el método de aproximación de integrales definidas mediante sumatorias de rectángulos?",
                            options: ["Isaac Newton", "Gottfried Leibniz", "Bernhard Riemann", "Johann Bernoulli"],
                            answerIndex: 2,
                            explain: "El método de aproximación para la resolución de integrales definidas fue descubierto por el matemático alemán Bernhard Riemann."
                        },
                        {
                            topic: "Rectángulos circunscritos",
                            q: "¿Cómo se llaman los rectángulos que sobresalen del área de interés en las sumas de Riemann?",
                            options: ["Rectángulos inscritos", "Rectángulos circunscritos", "Rectángulos interiores", "Rectángulos exteriores"],
                            answerIndex: 1,
                            explain: "Cuando los rectángulos sobresalen del área de interés, reciben el nombre de rectángulos circunscritos."
                        },
                        {
                            topic: "Rectángulos inscritos",
                            q: "¿Cómo se llaman los rectángulos que están contenidos dentro del área de interés en las sumas de Riemann?",
                            options: ["Rectángulos circunscritos", "Rectángulos inscritos", "Rectángulos exteriores", "Rectángulos sobresalientes"],
                            answerIndex: 1,
                            explain: "Cuando los rectángulos están contenidos en el área de interés, son nombrados rectángulos inscritos."
                        },
                        {
                            topic: "Suma de Riemann fórmula",
                            q: "¿Cuál es la expresión general de la suma de Riemann para calcular el área bajo una curva?",
                            options: ["A = lim_{n→∞} Σ_{i=1}^{n} f(x_i) Δx", "A = Σ f(x) Δx", "A = ∫ f(x)dx", "A = lim_{x→0} Σ f(x)Δx"],
                            answerIndex: 0,
                            explain: "La fórmula para calcular el área es: A = lim_{n→∞} Σ_{i=1}^{n} f(x_i) Δx, donde Δx = (b-a)/n y x_i = a + iΔx."
                        },
                        {
                            topic: "Propiedad de integral en punto",
                            q: "¿Cuál es el valor de ∫ₐᵃ f(x)dx?",
                            options: ["f(a)", "1", "0", "∞"],
                            answerIndex: 2,
                            explain: "Toda integral que se extienda a un intervalo de un solo punto [a, a] es igual a cero."
                        },
                        {
                            topic: "Propiedad de intercambio de límites",
                            q: "¿Qué ocurre al intercambiar los límites de una integral definida?",
                            options: ["No cambia", "Se duplica", "Cambia de signo", "Se anula"],
                            answerIndex: 2,
                            explain: "Al intercambiar los límites de una integral, ésta resultará con un cambio de signo: ∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx."
                        },
                        {
                            topic: "Propiedad de aditividad",
                            q: "Si a < b < c, ¿qué relación se cumple para las integrales?",
                            options: ["∫ₐᶜ = ∫ₐᵇ + ∫ᵇᶜ", "∫ₐᶜ = ∫ₐᵇ - ∫ᵇᶜ", "∫ₐᶜ = ∫ᵇᶜ - ∫ₐᵇ", "∫ₐᶜ = ∫ₐᵇ × ∫ᵇᶜ"],
                            answerIndex: 0,
                            explain: "Si a < b < c, se cumple que ∫ₐᵇ f(x)dx + ∫ᵇᶜ f(x)dx = ∫ₐᶜ f(x)dx."
                        },
                        {
                            topic: "Integral impropia tipo 1",
                            q: "¿Qué caracteriza a una integral impropia de tipo 1?",
                            options: ["Tiene un punto de discontinuidad", "Uno o ambos límites de integración son infinitos", "La función es constante", "El intervalo es cerrado"],
                            answerIndex: 1,
                            explain: "Las integrales impropias de tipo 1 son aquellas con límites infinitos, cuando uno o ambos límites de la integral son infinitos."
                        },
                        {
                            topic: "Integral impropia tipo 2",
                            q: "¿Qué caracteriza a una integral impropia de tipo 2?",
                            options: ["Límites infinitos", "Un punto de discontinuidad en el intervalo de integración", "Función polinomial", "Integral definida normal"],
                            answerIndex: 1,
                            explain: "Las integrales impropias de tipo 2 tienen límites finitos, pero existe un punto de discontinuidad en el intervalo de integración o en cualquiera de los límites."
                        },
                        {
                            topic: "Cálculo de integral definida",
                            q: "¿Cuál es el resultado de ∫₁² x² dx?",
                            options: ["1/3", "7/3", "8/3", "3"],
                            answerIndex: 1,
                            explain: "∫₁² x² dx = [x³/3]₁² = (8/3) - (1/3) = 7/3."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Integrales Indefinidas y Aplicaciones",
                    desc: "Identificación de propiedades de integrales indefinidas, cálculo de integrales directas, aplicaciones en física y economía, integración de funciones trigonométricas.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Integral indefinida",
                            q: "¿Cuál es la principal diferencia entre una integral definida y una indefinida?",
                            options: ["La definida tiene límites; la indefinida no", "La indefinida tiene límites; la definida no", "No hay diferencia", "La definida siempre da cero"],
                            answerIndex: 0,
                            explain: "La integral definida tiene límites de integración (a y b), mientras que la integral indefinida no los tiene, por lo que su solución es una función del integrando más una constante C."
                        },
                        {
                            topic: "Fórmula básica de integración",
                            q: "¿Cuál es la fórmula para ∫ xⁿ dx (n ≠ -1)?",
                            options: ["xⁿ⁺¹ + C", "xⁿ⁺¹/(n+1) + C", "nxⁿ⁻¹ + C", "xⁿ⁺¹·(n+1) + C"],
                            answerIndex: 1,
                            explain: "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C, siempre que n ≠ -1."
                        },
                        {
                            topic: "Integral de eˣ",
                            q: "¿Cuál es el resultado de ∫ eˣ dx?",
                            options: ["eˣ + C", "xeˣ⁻¹ + C", "eˣ/x + C", "ln|eˣ| + C"],
                            answerIndex: 0,
                            explain: "∫ eˣ dx = eˣ + C, ya que la derivada de eˣ es eˣ."
                        },
                        {
                            topic: "Integral de 1/x",
                            q: "¿Cuál es el resultado de ∫ (1/x) dx?",
                            options: ["ln|x| + C", "eˣ + C", "x²/2 + C", "1 + C"],
                            answerIndex: 0,
                            explain: "∫ (1/x) dx = ln|x| + C, siempre que x ≠ 0."
                        },
                        {
                            topic: "Aplicación de integrales - movimiento",
                            q: "En el problema del proyectil lanzado verticalmente, ¿qué se debe integrar para obtener la velocidad?",
                            options: ["La aceleración", "La posición", "La masa", "La fuerza"],
                            answerIndex: 0,
                            explain: "La velocidad se obtiene integrando la aceleración: v(t) = ∫ a(t) dt. Con a(t) = -9.81 m/s² (gravedad)."
                        },
                        {
                            topic: "Aplicación de integrales - capital",
                            q: "En el problema de acumulación de bienes de capital, ¿qué relación existe entre la inversión y el capital?",
                            options: ["El capital es la derivada de la inversión", "El capital es la integral de la inversión", "No hay relación", "Son iguales"],
                            answerIndex: 1,
                            explain: "El capital k(t) es la integral de la función de inversión i(t): k(t) = ∫ i(t) dt."
                        },
                        {
                            topic: "Integral de sen x",
                            q: "¿Cuál es el resultado de ∫ sen x dx?",
                            options: ["cos x + C", "-cos x + C", "sen x + C", "-sen x + C"],
                            answerIndex: 1,
                            explain: "∫ sen x dx = -cos x + C, ya que la derivada de -cos x es sen x."
                        },
                        {
                            topic: "Integral de cos x",
                            q: "¿Cuál es el resultado de ∫ cos x dx?",
                            options: ["sen x + C", "-sen x + C", "cos x + C", "-cos x + C"],
                            answerIndex: 0,
                            explain: "∫ cos x dx = sen x + C, ya que la derivada de sen x es cos x."
                        },
                        {
                            topic: "Propiedad de linealidad",
                            q: "¿Qué propiedad permite separar la integral de una suma de funciones?",
                            options: ["∫[f(x)+g(x)]dx = ∫f(x)dx - ∫g(x)dx", "∫[f(x)+g(x)]dx = ∫f(x)dx + ∫g(x)dx", "∫[f(x)+g(x)]dx = f(x) + g(x) + C", "∫[f(x)+g(x)]dx = ∫f(x)dx·∫g(x)dx"],
                            answerIndex: 1,
                            explain: "La integral de una suma de funciones es igual a la suma de sus integrales: ∫[f(x)+g(x)]dx = ∫f(x)dx + ∫g(x)dx."
                        },
                        {
                            topic: "Aplicación de integrales - epidemias",
                            q: "En el problema de contagios de SARS-CoV2, ¿qué representa dn/dt = 120t - 3t²?",
                            options: ["La cantidad total de infectados", "La razón de cambio de personas infectadas por día", "La velocidad de recuperación", "La tasa de mortalidad"],
                            answerIndex: 1,
                            explain: "dn/dt representa la razón de cambio de personas infectadas por día, es decir, la velocidad a la que se extiende el virus."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Área Bajo Curvas: Métodos de Solución",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Regla de la Cadena, Sustitución e Integración por Partes",
                    desc: "Comprensión de la regla de la cadena para antiderivación, integración por sustitución o cambio de variable e integración por partes.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Regla de la cadena para antiderivación",
                            q: "¿Cuál es la fórmula de la regla de la cadena para antiderivación?",
                            options: ["∫f(g(x))dx = F(g(x)) + C", "∫f(g(x))[g'(x)dx] = F(g(x)) + C", "∫f(g(x))dx = g(F(x)) + C", "∫f(x)g'(x)dx = f(x)g(x) - ∫f'(x)g(x)dx"],
                            answerIndex: 1,
                            explain: "La regla de la cadena para antiderivación establece que ∫f(g(x))[g'(x)dx] = F(g(x)) + C, donde F es una antiderivada de f."
                        },
                        {
                            topic: "Integración por sustitución",
                            q: "¿Para qué sirve el método de integración por sustitución o cambio de variable?",
                            options: ["Para derivar funciones compuestas", "Para transformar integrales complejas en integrales más sencillas", "Para multiplicar funciones", "Para dividir polinomios"],
                            answerIndex: 1,
                            explain: "El método de sustitución consiste en realizar un reemplazo de variable adecuado que permite transformar el integrando en una integral directa, es decir, más sencilla."
                        },
                        {
                            topic: "Integración por partes fórmula",
                            q: "¿Cuál es la fórmula de integración por partes?",
                            options: ["∫udv = uv - ∫vdu", "∫udv = uv + ∫vdu", "∫udv = u/v - ∫vdu", "∫udv = uv·∫vdu"],
                            answerIndex: 0,
                            explain: "La fórmula de integración por partes es ∫udv = uv - ∫vdu, derivada de la diferencial del producto d(uv) = udv + vdu."
                        },
                        {
                            topic: "Origen de integración por partes",
                            q: "¿De qué expresión se deriva la fórmula de integración por partes?",
                            options: ["Del producto de funciones", "De la regla de la cadena", "De la diferencial del producto d(uv) = udv + vdu", "De la derivada de un cociente"],
                            answerIndex: 2,
                            explain: "La fórmula de integración por partes se deriva de la diferencial del producto: d(uv) = udv + vdu, despejando udv e integrando."
                        },
                        {
                            topic: "Ejemplo integración por partes",
                            q: "¿Cuál es el resultado de ∫xeˣ dx aplicando integración por partes?",
                            options: ["xeˣ - eˣ + C", "xeˣ + eˣ + C", "eˣ - xeˣ + C", "x²eˣ/2 + C"],
                            answerIndex: 0,
                            explain: "Haciendo u = x, dv = eˣdx, se obtiene du = dx, v = eˣ, entonces ∫xeˣdx = x·eˣ - ∫eˣdx = xeˣ - eˣ + C."
                        },
                        {
                            topic: "Cambio de variable - paso 1",
                            q: "¿Cuál es el primer paso para resolver una integral por cambio de variable?",
                            options: ["Calcular la integral directamente", "Elegir una expresión que se denominará u", "Derivar la función", "Multiplicar por un factor unitario"],
                            answerIndex: 1,
                            explain: "El primer paso en el método de sustitución es elegir una expresión (usualmente la más compleja) y denominarla u, t, o como se quiera."
                        },
                        {
                            topic: "Integral por partes - elección de u",
                            q: "En integración por partes, ¿qué criterio se suele usar para elegir u?",
                            options: ["La función más simple", "La función que se deriva fácilmente", "La función que al derivarse se simplifica (usando LIATE)", "Cualquier función sirve"],
                            answerIndex: 2,
                            explain: "Generalmente se elige u como la función que al derivarse se simplifica, utilizando el criterio LIATE (Logarítmica, Inversa trigonométrica, Algebraica, Trigonométrica, Exponencial)."
                        },
                        {
                            topic: "Sustitución trigonométrica",
                            q: "¿Qué técnica de integración se usa para integrales que contienen expresiones como √(a² - x²)?",
                            options: ["Fracciones parciales", "Sustitución trigonométrica", "Integración por partes", "Regla de la cadena"],
                            answerIndex: 1,
                            explain: "La sustitución trigonométrica se emplea para integrales que contienen expresiones como √(a² - u²), √(a² + u²) o √(u² - a²)."
                        },
                        {
                            topic: "Sustitución para √(a² - x²)",
                            q: "¿Qué sustitución trigonométrica se recomienda para √(a² - x²)?",
                            options: ["x = a sen θ", "x = a tan θ", "x = a sec θ", "x = a cos θ"],
                            answerIndex: 0,
                            explain: "Para la expresión √(a² - x²), se recomienda la sustitución x = a sen θ, lo que convierte √(a² - x²) en a cos θ."
                        },
                        {
                            topic: "Integración por partes - múltiple",
                            q: "¿Cuándo se necesita aplicar integración por partes más de una vez?",
                            options: ["Siempre es necesario", "Cuando la integral resultante ∫vdu sigue siendo un producto de funciones", "Nunca se necesita", "Solo para funciones exponenciales"],
                            answerIndex: 1,
                            explain: "Se necesita aplicar integración por partes más de una vez cuando la integral resultante ∫vdu sigue siendo un producto de funciones que no se puede integrar directamente."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Fracciones Parciales y Sustitución Trigonométrica",
                    desc: "Identificación de integración por fracciones parciales (factores lineales, cuadráticos) y sustitución trigonométrica.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Fracción impropia",
                            q: "¿Cuándo una fracción racional es impropia?",
                            options: ["Cuando el grado del numerador es menor que el del denominador", "Cuando el grado del numerador es igual o mayor que el del denominador", "Cuando el denominador es cero", "Cuando el numerador es cero"],
                            answerIndex: 1,
                            explain: "Una fracción es impropia si el grado del numerador es igual o mayor que el grado del denominador. En este caso, se resuelve dividiendo los términos."
                        },
                        {
                            topic: "Fracción propia",
                            q: "¿Cuándo una fracción racional es propia?",
                            options: ["Cuando el grado del numerador es menor que el del denominador", "Cuando el grado del numerador es mayor que el del denominador", "Cuando son iguales", "Cuando el denominador es 1"],
                            answerIndex: 0,
                            explain: "Una fracción es propia cuando el grado del numerador es menor que el grado del denominador."
                        },
                        {
                            topic: "Fracciones parciales - factores lineales",
                            q: "Para una fracción propia con denominador factorizado en factores lineales diferentes, ¿cómo se descompone?",
                            options: ["A/(x - a)", "A/(x - a) + B/(x - b)", "Ax + B", "A/(x - a)²"],
                            answerIndex: 1,
                            explain: "Si el denominador tiene factores lineales diferentes, se descompone como suma de fracciones con numeradores constantes: A/(x - a) + B/(x - b) + ..."
                        },
                        {
                            topic: "Factores cuadráticos irreducibles",
                            q: "Para un factor cuadrático irreducible (como x² + a²) en el denominador, ¿qué forma tiene su fracción parcial?",
                            options: ["A/(x² + a²)", "(Ax + B)/(x² + a²)", "A/x + B/x²", "A/(x + a)"],
                            answerIndex: 1,
                            explain: "Para un factor cuadrático irreducible, la fracción parcial tiene la forma (Ax + B)/(x² + a²), con numerador lineal."
                        },
                        {
                            topic: "Factores cuadráticos repetidos",
                            q: "Para un factor cuadrático repetido como (x² + a²)², ¿qué forma tiene su descomposición?",
                            options: ["A/(x² + a²) + B/(x² + a²)²", "(Ax + B)/(x² + a²) + (Cx + D)/(x² + a²)²", "A/x + B/x² + C/(x² + a²)", "A/(x + a) + B/(x - a)"],
                            answerIndex: 1,
                            explain: "Para factores cuadráticos repetidos, se incluye un término para cada potencia, con numeradores lineales: (Ax + B)/(x² + a²) + (Cx + D)/(x² + a²)²."
                        },
                        {
                            topic: "Sustitución trigonométrica para √(x² + a²)",
                            q: "¿Qué sustitución trigonométrica se recomienda para √(x² + a²)?",
                            options: ["x = a sen θ", "x = a tan θ", "x = a sec θ", "x = a cos θ"],
                            answerIndex: 1,
                            explain: "Para la expresión √(x² + a²), se recomienda la sustitución x = a tan θ, lo que convierte √(x² + a²) en a sec θ."
                        },
                        {
                            topic: "Sustitución trigonométrica para √(x² - a²)",
                            q: "¿Qué sustitución trigonométrica se recomienda para √(x² - a²)?",
                            options: ["x = a sen θ", "x = a tan θ", "x = a sec θ", "x = a cos θ"],
                            answerIndex: 2,
                            explain: "Para la expresión √(x² - a²), se recomienda la sustitución x = a sec θ, lo que convierte √(x² - a²) en a tan θ."
                        },
                        {
                            topic: "Identidades trigonométricas para sustitución",
                            q: "¿Qué identidad trigonométrica es fundamental para la sustitución x = a sen θ?",
                            options: ["1 + tan²θ = sec²θ", "sen²θ + cos²θ = 1", "1 + cot²θ = csc²θ", "tan²θ = sec²θ - 1"],
                            answerIndex: 1,
                            explain: "La identidad fundamental sen²θ + cos²θ = 1 permite transformar √(a² - x²) en a cos θ cuando se usa x = a sen θ."
                        },
                        {
                            topic: "Método de fracciones parciales",
                            q: "¿Para qué tipo de integrales es útil el método de fracciones parciales?",
                            options: ["Integrales de funciones trigonométricas", "Integrales de funciones racionales (cociente de polinomios)", "Integrales de funciones exponenciales", "Integrales de funciones logarítmicas"],
                            answerIndex: 1,
                            explain: "El método de fracciones parciales es útil para integrar funciones racionales (cocientes de polinomios) descomponiendo la fracción compleja en suma de fracciones más simples."
                        },
                        {
                            topic: "Cálculo de constantes en fracciones parciales",
                            q: "¿Qué método se puede usar para encontrar los valores de A, B, C en la descomposición en fracciones parciales?",
                            options: ["Asignar valores estratégicos a x para anular términos", "Resolver un sistema de ecuaciones", "Ambos métodos son válidos", "Solo por derivación"],
                            answerIndex: 2,
                            explain: "Se pueden usar dos métodos: 1) Asignar valores a x que anulen algunos términos para despejar directamente las constantes, o 2) Igualar coeficientes y resolver un sistema de ecuaciones."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Ecuaciones Diferenciales Ordinarias",
                    desc: "Comprensión de ecuaciones diferenciales ordinarias, resolución mediante integración directa de ambos lados.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Ecuación diferencial ordinaria",
                            q: "¿Qué es una ecuación diferencial ordinaria?",
                            options: ["Una ecuación que contiene derivadas de una función de una variable independiente", "Una ecuación algebraica", "Una ecuación trigonométrica", "Una ecuación con varias variables independientes"],
                            answerIndex: 0,
                            explain: "Una ecuación diferencial ordinaria es una ecuación que contiene derivadas de una función de una sola variable independiente."
                        },
                        {
                            topic: "Solución de ED por integración",
                            q: "¿Cómo se resuelve una ecuación diferencial de la forma dy = f(x)dx?",
                            options: ["Derivando ambos lados", "Integrando ambos lados", "Factorizando", "Despejando y"],
                            answerIndex: 1,
                            explain: "Para resolver dy = f(x)dx, se integran ambos lados: ∫dy = ∫f(x)dx, obteniendo y = F(x) + C."
                        },
                        {
                            topic: "Ejemplo de ED simple",
                            q: "¿Cuál es la solución general de la ecuación diferencial dy - eˣdx = 0?",
                            options: ["y = eˣ + C", "y = -eˣ + C", "y = xeˣ + C", "y = ln|x| + C"],
                            answerIndex: 0,
                            explain: "Despejando dy = eˣdx e integrando ambos lados: ∫dy = ∫eˣdx → y = eˣ + C."
                        },
                        {
                            topic: "Constante de integración en ED",
                            q: "¿Cómo se determina el valor de la constante C en la solución de una ecuación diferencial?",
                            options: ["Siempre es cero", "Mediante condiciones iniciales o valores conocidos", "No se puede determinar", "Se elige arbitrariamente"],
                            answerIndex: 1,
                            explain: "El valor de la constante C se determina utilizando condiciones iniciales o valores conocidos de la función en un punto específico."
                        },
                        {
                            topic: "Verificación de solución",
                            q: "¿Cómo se verifica que una función es solución de una ecuación diferencial?",
                            options: ["Derivando la función y sustituyendo en la ecuación", "Integrando la función", "Graficando la función", "Evaluando en un punto"],
                            answerIndex: 0,
                            explain: "Para verificar que una función es solución, se deriva y se sustituye en la ecuación diferencial; debe cumplirse la igualdad."
                        },
                        {
                            topic: "ED de primer orden",
                            q: "¿Qué orden tiene la ecuación diferencial dy/dx = 3x²?",
                            options: ["Orden 0", "Orden 1", "Orden 2", "Orden 3"],
                            answerIndex: 1,
                            explain: "El orden de una ecuación diferencial es el de la derivada más alta presente. Aquí aparece dy/dx (primera derivada), por lo tanto es de primer orden."
                        },
                        {
                            topic: "Solución particular",
                            q: "¿Qué diferencia hay entre la solución general y la solución particular de una ED?",
                            options: ["No hay diferencia", "La solución general tiene constantes arbitrarias; la particular satisface condiciones iniciales", "La particular tiene constantes; la general no", "Son lo mismo"],
                            answerIndex: 1,
                            explain: "La solución general contiene constantes arbitrarias (C). La solución particular se obtiene al determinar el valor de esas constantes usando condiciones iniciales."
                        },
                        {
                            topic: "Integración directa",
                            q: "¿Cuál es la solución de la ecuación diferencial dy/dx = 2x?",
                            options: ["y = x² + C", "y = 2x + C", "y = x²/2 + C", "y = 2 + C"],
                            answerIndex: 0,
                            explain: "Integrando ambos lados: ∫dy = ∫2x dx → y = x² + C."
                        },
                        {
                            topic: "Notación de ED",
                            q: "En la ecuación diferencial dy/dx = f(x), ¿qué representa dy/dx?",
                            options: ["La derivada de y respecto a x", "La integral de y respecto a x", "El producto de y y x", "La suma de diferenciales"],
                            answerIndex: 0,
                            explain: "dy/dx es la notación de Leibniz para la derivada de y con respecto a x."
                        },
                        {
                            topic: "Aplicación de ED",
                            q: "¿Qué tipo de problemas se pueden modelar con ecuaciones diferenciales?",
                            options: ["Solo problemas de física", "Crecimiento poblacional, movimiento, circuitos eléctricos, entre otros", "Solo problemas económicos", "Solo problemas geométricos"],
                            answerIndex: 1,
                            explain: "Las ecuaciones diferenciales tienen múltiples aplicaciones en física, biología, economía, ingeniería, etc., modelando fenómenos como crecimiento poblacional, movimiento, circuitos eléctricos, entre otros."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Áreas, Longitudes y Volúmenes en Sólidos de Revolución",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Área entre Gráficas y Sustitución de Variable",
                    desc: "Comprensión del área entre gráficas de funciones (intersección de funciones, integración de diferencias, regiones múltiples) y sustitución de variable.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Área entre dos curvas",
                            q: "Si f(x) ≥ g(x) en [a, b], ¿cómo se calcula el área entre las curvas?",
                            options: ["∫[f(x) - g(x)]dx", "∫[g(x) - f(x)]dx", "∫[f(x) + g(x)]dx", "∫[f(x)·g(x)]dx"],
                            answerIndex: 0,
                            explain: "El área entre las curvas cuando f(x) ≥ g(x) se calcula como ∫[f(x) - g(x)]dx, es decir, la función de arriba menos la función de abajo."
                        },
                        {
                            topic: "Puntos de intersección",
                            q: "¿Qué se debe determinar primero para calcular el área entre dos funciones?",
                            options: ["Las derivadas", "Los puntos de intersección de las gráficas", "Las integrales indefinidas", "El dominio de las funciones"],
                            answerIndex: 1,
                            explain: "Lo primero que se debe determinar son los puntos de intersección de las gráficas, igualando las funciones f(x) = g(x)."
                        },
                        {
                            topic: "Regiones múltiples",
                            q: "¿Cómo se calcula el área cuando las funciones se cruzan en varios puntos?",
                            options: ["Con una sola integral", "Sumando las integrales de cada región, considerando qué función está arriba en cada una", "No se puede calcular", "Con la integral de la suma"],
                            answerIndex: 1,
                            explain: "Se debe sumar las integrales de cada región, asegurándose de restar siempre la función de arriba menos la de abajo en cada subintervalo."
                        },
                        {
                            topic: "Newton y Leibniz",
                            q: "¿Quiénes desarrollaron el cálculo diferencial e integral de manera independiente en el siglo XVII?",
                            options: ["Descartes y Fermat", "Newton y Leibniz", "Euler y Gauss", "Pitágoras y Arquímedes"],
                            answerIndex: 1,
                            explain: "Isaac Newton (método de fluxión) y Gottfried Wilhelm Leibniz desarrollaron el cálculo diferencial e integral de manera independiente en el siglo XVII."
                        },
                        {
                            topic: "Cálculo diferencial origen",
                            q: "¿Qué problema dio origen al cálculo diferencial?",
                            options: ["El cálculo de áreas", "El estudio del movimiento y velocidad de los cuerpos", "La medición de volúmenes", "La geometría euclidiana"],
                            answerIndex: 1,
                            explain: "El cálculo diferencial surge al realizar estudios del movimiento y velocidad de los cuerpos al caer al vacío, donde la velocidad cambia en cada instante."
                        },
                        {
                            topic: "Área de región en primer cuadrante",
                            q: "En el ejemplo de cuatro funciones en el primer cuadrante, ¿cómo se determinaron los límites de integración?",
                            options: ["Por los puntos de intersección de las funciones", "Por valores arbitrarios", "Por el origen del plano", "Por el valor máximo de x"],
                            answerIndex: 0,
                            explain: "Los límites de integración se determinaron igualando las funciones para encontrar sus puntos de intersección en el primer cuadrante."
                        },
                        {
                            topic: "Sustitución de variable - propósito",
                            q: "¿Cuál es el propósito de la sustitución de variable en integración?",
                            options: ["Derivar funciones complejas", "Convertir una función complicada en otra más sencilla de integrar", "Multiplicar funciones", "Dividir funciones"],
                            answerIndex: 1,
                            explain: "La sustitución de variable se emplea para convertir una función complicada en otra más sencilla de integrar."
                        },
                        {
                            topic: "Pasos de sustitución de variable",
                            q: "Después de elegir u y calcular du, ¿qué se hace con dx en la integral original?",
                            options: ["Se elimina", "Se reemplaza por du/(du/dx)", "Se deja igual", "Se multiplica por u"],
                            answerIndex: 1,
                            explain: "Después de elegir u y calcular du, se despeja dx = du/(du/dx) y se reemplaza en la integral, cancelando términos cuando sea posible."
                        },
                        {
                            topic: "Área de parábola con recta",
                            q: "En el ejemplo de f(x)=3x³-x²-10x y g(x)=-x²+2x, ¿cuáles fueron los puntos de intersección?",
                            options: ["x = -2, 0, 2", "x = -1, 0, 1", "x = -3, 0, 3", "x = -2, 2"],
                            answerIndex: 0,
                            explain: "Igualando 3x³-x²-10x = -x²+2x → 3x³-12x = 0 → 3x(x²-4)=0 → x = -2, 0, 2."
                        },
                        {
                            topic: "Selección de función superior",
                            q: "En el ejemplo de f(x)=3x³-x²-10x y g(x)=-x²+2x, ¿qué función está arriba en el intervalo de -2 a 0?",
                            options: ["f(x)", "g(x)", "Ambas son iguales", "Alternan"],
                            answerIndex: 0,
                            explain: "La gráfica muestra que f(x) se encuentra sobre g(x) en el intervalo de -2 a 0, por lo que se integra f(x) - g(x)."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Longitud de Curvas y Sólidos de Revolución",
                    desc: "Identificación de fórmulas para longitud de curvas, sólidos de revolución (método de discos y método de coronas circulares).",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Longitud de arco fórmula",
                            q: "¿Cuál es la fórmula para calcular la longitud de una curva y = f(x) desde x = a hasta x = b?",
                            options: ["L = ∫√(1 + (dy/dx)) dx", "L = ∫√(1 + (dy/dx)²) dx", "L = ∫(1 + (dy/dx)²) dx", "L = ∫(dy/dx) dx"],
                            answerIndex: 1,
                            explain: "La fórmula para la longitud de una curva es L = ∫ₐᵇ √(1 + (dy/dx)²) dx, derivada del teorema de Pitágoras para elementos infinitesimales de arco."
                        },
                        {
                            topic: "Longitud de parábola semicúbica",
                            q: "En el ejemplo de la parábola semicúbica f(x)² = x³ entre (1,1) y (4,8), ¿qué valor aproximado se obtuvo?",
                            options: ["7.61 u", "7.63 u", "8.00 u", "6.50 u"],
                            answerIndex: 1,
                            explain: "El valor calculado mediante integración fue 7.63 u, mientras que la estimación por Pitágoras fue 7.61 u."
                        },
                        {
                            topic: "Sólido de revolución",
                            q: "¿Qué es un sólido de revolución?",
                            options: ["Un sólido formado por traslación", "Un sólido generado al girar una región plana alrededor de un eje", "Un sólido formado por extrusión", "Un sólido formado por reflexión"],
                            answerIndex: 1,
                            explain: "Un sólido de revolución se genera al girar una región plana (delimitada por funciones) alrededor de un eje de giro contenido en el mismo plano."
                        },
                        {
                            topic: "Método de discos",
                            q: "¿En qué consiste el método de discos para calcular volúmenes de revolución?",
                            options: ["Dividir el volumen en cilindros huecos", "Dividir el volumen en una infinidad de discos de espesor infinitesimal", "Dividir el volumen en esferas", "Dividir el volumen en conos"],
                            answerIndex: 1,
                            explain: "El método de discos consiste en dividir el volumen total en una infinidad de discos de espesor infinitesimal Δx, cada uno con volumen πr²Δx."
                        },
                        {
                            topic: "Volumen por discos fórmula",
                            q: "¿Cuál es la fórmula del volumen por el método de discos al girar alrededor del eje x?",
                            options: ["V = ∫π[f(x)]² dx", "V = ∫π[f(x)] dx", "V = ∫2π[f(x)]² dx", "V = ∫[f(x)]² dx"],
                            answerIndex: 0,
                            explain: "Cuando se gira alrededor del eje x, el radio de cada disco es f(x), por lo que el volumen es V = ∫ₐᵇ π[f(x)]² dx."
                        },
                        {
                            topic: "Método de coronas circulares",
                            q: "¿Cuándo se debe usar el método de coronas circulares en lugar del método de discos?",
                            options: ["Siempre es preferible", "Cuando el sólido tiene un hueco interior (corona circular)", "Cuando la función es lineal", "Cuando el eje de rotación es vertical"],
                            answerIndex: 1,
                            explain: "El método de coronas circulares se usa cuando el eje de rotación no se encuentra en el borde de la región plana y el sólido tiene un hueco interior."
                        },
                        {
                            topic: "Volumen por coronas fórmula",
                            q: "¿Cuál es la fórmula para el volumen usando el método de coronas circulares?",
                            options: ["V = ∫π[(g(x))² - (f(x))²] dx", "V = ∫π[(g(x))² + (f(x))²] dx", "V = ∫π[(g(x) - f(x))²] dx", "V = ∫π[g(x) - f(x)] dx"],
                            answerIndex: 0,
                            explain: "El volumen de una corona circular (diferencia de discos) es V = ∫ₐᵇ π[(g(x))² - (f(x))²] dx, donde g(x) es la curva exterior y f(x) la interior."
                        },
                        {
                            topic: "Volumen del cono por giro",
                            q: "En el ejemplo de la función y = x girada sobre el eje x de 0 a 5, ¿qué figura se genera?",
                            options: ["Un cilindro", "Un cono", "Una esfera", "Un toro"],
                            answerIndex: 1,
                            explain: "Girar la línea recta y = x alrededor del eje x genera un cono (sólido de revolución)."
                        },
                        {
                            topic: "Ejemplo volumen con √x",
                            q: "¿Cuál fue el volumen del sólido generado al girar y = √x de 0 a 1 alrededor del eje x?",
                            options: ["π/2 u³", "π u³", "π/3 u³", "2π u³"],
                            answerIndex: 0,
                            explain: "V = ∫₀¹ π(√x)² dx = ∫₀¹ πx dx = π[x²/2]₀¹ = π/2 u³."
                        },
                        {
                            topic: "Superficie de revolución",
                            q: "¿Qué se obtiene al girar una línea recta (como y = x) alrededor del eje x?",
                            options: ["Un sólido macizo", "Una superficie de revolución (hueca)", "Un volumen con contenido interior", "Una esfera"],
                            answerIndex: 1,
                            explain: "Al girar solo una línea (sin área interior), se genera una superficie de revolución (hueca), no un sólido macizo."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Centroides y Teorema de Pappus",
                    desc: "Comprensión de centroides (de línea, de área, de volumen), cálculo por integración y teorema de Pappus.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Centroide",
                            q: "¿Qué es el centroide en geometría?",
                            options: ["El centro de gravedad", "El punto producto de la intersección de los hiperplanos que forman parte de una figura u objeto", "El punto más alto de una figura", "El punto más bajo de una figura"],
                            answerIndex: 1,
                            explain: "El centroide es el punto producto de la intersección de los hiperplanos que forman parte de una figura u objeto, dependiendo de la forma del sistema que lo contenga."
                        },
                        {
                            topic: "Centroide de línea",
                            q: "¿Cuándo se habla de centroide de línea?",
                            options: ["Cuando la figura tiene tres dimensiones", "Cuando la figura es de una sola dimensión (grosor despreciable)", "Cuando la figura tiene dos dimensiones", "Cuando la figura es un punto"],
                            answerIndex: 1,
                            explain: "El centroide de línea se aplica cuando la figura es de tipo de una sola dimensión, es decir, con coordenadas de grosor despreciable."
                        },
                        {
                            topic: "Centroide de área",
                            q: "¿Qué tipo de figura requiere el cálculo de centroide de área?",
                            options: ["Figuras de una dimensión", "Figuras de dos dimensiones", "Figuras de tres dimensiones", "Figuras en el espacio"],
                            answerIndex: 1,
                            explain: "El centroide de área se aplica cuando la figura es de tipo de dos dimensiones (superficie), donde se obtiene proyectando líneas a la mitad de la base y la altura."
                        },
                        {
                            topic: "Centroide de volumen",
                            q: "¿Cómo se obtiene el centroide de un volumen?",
                            options: ["Proyectando líneas a la mitad de una dimensión", "Proyectando líneas a la mitad de la base y la altura", "Proyectando líneas a la mitad de la base, la altura y la profundidad", "No se puede calcular"],
                            answerIndex: 2,
                            explain: "Para un sólido tridimensional, el centroide de volumen se obtiene proyectando líneas a la mitad de la base, de la altura y de la profundidad."
                        },
                        {
                            topic: "Fórmulas de centroide",
                            q: "¿Qué fórmulas se usan para calcular las coordenadas del centroide de un área?",
                            options: ["x̄ = ∫x dA / ∫dA, ȳ = ∫y dA / ∫dA", "x̄ = ∫x dA, ȳ = ∫y dA", "x̄ = ∫x² dA, ȳ = ∫y² dA", "x̄ = ∫dA / ∫x dA, ȳ = ∫dA / ∫y dA"],
                            answerIndex: 0,
                            explain: "Las coordenadas del centroide se calculan como x̄ = (∫x dA)/(∫dA) y ȳ = (∫y dA)/(∫dA), donde ∫dA es el área total."
                        },
                        {
                            topic: "Teorema de Pappus",
                            q: "¿Qué establece el teorema de Pappus para volúmenes de revolución?",
                            options: ["El volumen es el producto del área por la distancia recorrida por su centroide", "El volumen es el área por la altura", "El volumen es la suma de áreas", "El volumen es el doble del área"],
                            answerIndex: 0,
                            explain: "El teorema de Pappus establece que el volumen del sólido de revolución generado es igual al producto del área de la región por la distancia recorrida por su centroide."
                        },
                        {
                            topic: "Aplicación teorema de Pappus",
                            q: "¿Qué figura geométrica se genera al aplicar el teorema de Pappus a una circunferencia girada alrededor de una recta a distancia b de su centro?",
                            options: ["Una esfera", "Un cilindro", "Un toro (forma de dona)", "Un cono"],
                            answerIndex: 2,
                            explain: "Al girar una circunferencia de radio r alrededor de una recta a distancia b de su centro (b > r), se genera un toro (figura con forma de dona)."
                        },
                        {
                            topic: "Primer momento de área",
                            q: "¿Qué representa Qy = ∫x dA?",
                            options: ["El área total", "El primer momento de área con respecto al eje y", "El centroide", "El momento de inercia"],
                            answerIndex: 1,
                            explain: "Qy = ∫x dA es el primer momento de área con respecto al eje y, utilizado en el cálculo del centroide x̄ = Qy/A."
                        },
                        {
                            topic: "Centroide de un triángulo",
                            q: "En el ejemplo del triángulo de base b y altura h, ¿cuál fue la coordenada x̄ del centroide?",
                            options: ["b/2", "b/3", "2b/3", "b"],
                            answerIndex: 2,
                            explain: "El centroide x̄ del triángulo calculado fue 2b/3 medido desde el eje y (o b/3 medido desde el lado recto)."
                        },
                        {
                            topic: "Centroide por integración",
                            q: "¿Qué elemento diferencial se usó en el ejemplo del centroide del triángulo?",
                            options: ["dA = y dx", "dA = x dy", "dA = dx dy", "dA = (h/b)x dx"],
                            answerIndex: 0,
                            explain: "Se usó dA = y dx, donde y = (h/b)x (ecuación de la hipotenusa del triángulo)."
                        }
                    ]
                }
            }
        }
    }
};

export default temasSelectosMatematicas;