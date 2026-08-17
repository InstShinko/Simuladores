// ============================================
// CÁLCULO DIFERENCIAL
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const calculoDiferencial = {
    id: "calculoDiferencial",
    nombre: "CÁLCULO DIFERENCIAL: LÍMITES, DERIVADAS Y APLICACIONES",
    icono: "📐",
    descripcion: "Estudio de límites de funciones, definición formal de límite, regla de la cadena, derivadas de funciones trascendentes, derivadas de orden superior, derivadas parciales, optimización, regla de L'Hopital y aplicaciones de la derivada en diversos campos.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: Introducción a las Derivadas",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Límites de Funciones",
                    desc: "Comprensión del concepto de límite, definición intuitiva y formal, evaluación de límites mediante factorización y simplificación algebraica.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Concepto de Límite",
                            q: "Según Spivak, ¿qué significa que una función f tiende hacia el límite L cerca de a?",
                            options: ["Que f(a) = L", "Que se puede hacer que f(x) esté tan cerca como queramos de L haciendo que x esté suficientemente cerca de a, pero siendo distinto de a", "Que f es continua en a", "Que f está definida en a"],
                            answerIndex: 1,
                            explain: "Spivak define que 'la función f tiende hacia el límite L cerca de a, si se puede hacer que f (x) esté tan cerca como queramos de L haciendo que x esté suficientemente cerca de a, pero siendo distinto de a'."
                        },
                        {
                            topic: "Límite de una función",
                            q: "¿Cuál es el valor de lim_{x→1/2} (8x³ - 1)/(2x - 1)?",
                            options: ["0", "1", "3", "No existe"],
                            answerIndex: 2,
                            explain: "Factorizando la diferencia de cubos: (8x³ - 1)/(2x - 1) = (2x - 1)(4x² + 2x + 1)/(2x - 1) = 4x² + 2x + 1, evaluando en x = 1/2 se obtiene 4(1/4) + 1 + 1 = 1 + 1 + 1 = 3."
                        },
                        {
                            topic: "Límites unilaterales",
                            q: "¿Qué notación se usa para denotar que x tiende a a por la izquierda?",
                            options: ["x → a⁺", "x → a¯", "x → a", "x → ∞"],
                            answerIndex: 1,
                            explain: "Se usa la notación x → a¯ para denotar que x tiende a a por la izquierda y x → a⁺ para expresar que x tiende a a por la derecha."
                        },
                        {
                            topic: "Existencia del límite",
                            q: "¿Cuándo existe el límite lim_{x→a} f(x)?",
                            options: ["Siempre existe", "Cuando f está definida en a", "Cuando los límites unilaterales tienen un valor común", "Cuando f es continua"],
                            answerIndex: 2,
                            explain: "Si los límites unilaterales, lim_{x→a¯} f(x) y lim_{x→a⁺} f(x) tienen un valor común L, se dice entonces que lim_{x→a} f(x) = L existe."
                        },
                        {
                            topic: "Definición formal de límite",
                            q: "En la definición formal de límite, ¿qué significa que lim_{x→a} f(x) = L?",
                            options: ["Que f(a) = L", "Que para todo ε > 0 existe un δ > 0 tal que si 0 < |x - a| < δ, entonces |f(x) - L| < ε", "Que f es creciente", "Que f es decreciente"],
                            answerIndex: 1,
                            explain: "La definición formal establece que lim_{x→a} f(x) = L significa que para todo ε > 0 existe un δ > 0 tal que si 0 < |x - a| < δ, entonces |f(x) - L| < ε."
                        },
                        {
                            topic: "Límite de función lineal",
                            q: "¿Cuál es el valor de lim_{x→4} (2x + 1)?",
                            options: ["7", "8", "9", "10"],
                            answerIndex: 2,
                            explain: "Cuando x está cerca de 4, 2x + 1 está cerca de 2(4) + 1 = 9, por lo tanto lim_{x→4} (2x + 1) = 9."
                        },
                        {
                            topic: "Factorización en límites",
                            q: "¿Por qué se puede cancelar (x - 2) en lim_{x→2} (x² + 5x - 14)/(x - 2)?",
                            options: ["Porque x ≠ 2 en el límite", "Porque la función es continua", "Porque el límite ignora su comportamiento en x = 2", "Por ambas razones: x ≠ 2 y el límite ignora el comportamiento en a"],
                            answerIndex: 3,
                            explain: "La cancelación se puede hacer porque el límite ignora su comportamiento en x = 2 y recordando que (x - 2)/(x - 2) = 1, siempre que x no sea igual a 2."
                        },
                        {
                            topic: "Límite con factorización",
                            q: "¿Cuál es el valor de lim_{x→2} (x² + 5x - 14)/(x - 2)?",
                            options: ["5", "7", "9", "11"],
                            answerIndex: 2,
                            explain: "Factorizando: (x² + 5x - 14)/(x - 2) = (x - 2)(x + 7)/(x - 2) = x + 7, evaluando en x = 2 se obtiene 9."
                        },
                        {
                            topic: "Interpretación de límite",
                            q: "¿Qué significa que una función no esté definida en a para el cálculo del límite?",
                            options: ["Que el límite no existe", "Que la función no tiene límite", "Que la existencia del límite no depende de que f esté definida en a", "Que el límite es infinito"],
                            answerIndex: 2,
                            explain: "La existencia del límite de una función f en a no depende de que si f está realmente definida en a, sino solamente de si f está definida para x cerca de a."
                        },
                        {
                            topic: "Demostración formal de límite",
                            q: "Para demostrar que lim_{x→4} 2x = 8, ¿qué valor de δ se debe elegir para un ε dado?",
                            options: ["δ = ε", "δ = ε/2", "δ = 2ε", "δ = ε²"],
                            answerIndex: 1,
                            explain: "De la desigualdad |2x - 8| < ε → 2|x - 4| < ε → |x - 4| < ε/2, por lo tanto se toma δ = ε/2."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Regla de la Cadena",
                    desc: "Aplicación de la regla de la cadena para derivar funciones compuestas, incluyendo funciones racionales y polinomiales.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Regla de la Cadena",
                            q: "¿Cuál es la fórmula de la regla de la cadena para la derivada de una función compuesta?",
                            options: ["(f∘g)'(x) = f'(x)g'(x)", "(f∘g)'(x) = f'(g(x))g'(x)", "(f∘g)'(x) = f(g'(x))", "(f∘g)'(x) = f'(x)g(x)"],
                            answerIndex: 1,
                            explain: "Si g es diferenciable en x y f es diferenciable en g(x), entonces (f∘g)'(x) = f'(g(x))g'(x)."
                        },
                        {
                            topic: "Regla de la Cadena",
                            q: "Si h(x) = (2/(x - 1))⁶, ¿cuál es su derivada?",
                            options: ["-384/(x - 1)⁷", "384/(x - 1)⁷", "-384/(x - 1)⁶", "384/(x - 1)⁶"],
                            answerIndex: 0,
                            explain: "Aplicando la regla de la cadena: h'(x) = 6(2/(x - 1))⁵ · (-2/(x - 1)²) = -384/(x - 1)⁷."
                        },
                        {
                            topic: "Regla de la Cadena",
                            q: "¿Cómo se reescribe f(x) = 1/(3x³ + 4x² - 5x + 10) para aplicar la regla de la cadena?",
                            options: ["(3x³ + 4x² - 5x + 10)¹", "(3x³ + 4x² - 5x + 10)⁻¹", "(3x³ + 4x² - 5x + 10)²", "(3x³ + 4x² - 5x + 10)⁻²"],
                            answerIndex: 1,
                            explain: "Se escribe f(x) = (3x³ + 4x² - 5x + 10)⁻¹ para aplicar la regla de la cadena."
                        },
                        {
                            topic: "Regla de la Cadena",
                            q: "Derivando f(x) = (3x³ + 4x² - 5x + 10)⁻¹, ¿cuál es el numerador de la derivada?",
                            options: ["(9x² + 8x - 5)", "-(9x² + 8x - 5)", "(9x² + 8x + 5)", "-(9x² + 8x + 5)"],
                            answerIndex: 1,
                            explain: "f'(x) = -(3x³ + 4x² - 5x + 10)⁻² · (9x² + 8x - 5) = -(9x² + 8x - 5)/(3x³ + 4x² - 5x + 10)²."
                        },
                        {
                            topic: "Función compuesta",
                            q: "En la regla de la cadena, ¿qué representa f'(g(x))?",
                            options: ["La derivada de f evaluada en g(x)", "La derivada de g evaluada en f(x)", "El producto de f y g", "La derivada de la función compuesta"],
                            answerIndex: 0,
                            explain: "f'(g(x)) representa la derivada de la función f evaluada en g(x), que es la función interna."
                        },
                        {
                            topic: "Simplificación en regla de cadena",
                            q: "¿Qué se debe hacer cuando se calculan derivadas por medio de la regla de la cadena?",
                            options: ["Siempre escribir las funciones f y g", "En general no se escriben las funciones f y g", "Solo se escribe f", "Solo se escribe g"],
                            answerIndex: 1,
                            explain: "Cuando calculamos derivadas por medio de la regla de la cadena, en general no se escriben las funciones f y g, se aplica directamente."
                        },
                        {
                            topic: "Derivada de función compuesta",
                            q: "Si f(x) = (2x + 1)⁴, ¿cuál es su derivada aplicando la regla de la cadena?",
                            options: ["8(2x + 1)³", "4(2x + 1)³", "8(2x + 1)⁴", "4(2x + 1)⁴"],
                            answerIndex: 0,
                            explain: "Aplicando la regla de la cadena: f'(x) = 4(2x + 1)³ · 2 = 8(2x + 1)³."
                        },
                        {
                            topic: "Derivada de función compuesta",
                            q: "Si f(x) = sen(3x²), ¿cuál es su derivada?",
                            options: ["6x·cos(3x²)", "cos(3x²)", "3x·cos(3x²)", "6x·sen(3x²)"],
                            answerIndex: 0,
                            explain: "f'(x) = cos(3x²) · 6x = 6x·cos(3x²)."
                        },
                        {
                            topic: "Notación de derivada",
                            q: "¿Qué significa g'(x) en la regla de la cadena?",
                            options: ["La derivada de g evaluada en x", "La derivada de f evaluada en x", "La función compuesta", "El producto de funciones"],
                            answerIndex: 0,
                            explain: "g'(x) es la derivada de la función interna g evaluada en x."
                        },
                        {
                            topic: "Regla de la Cadena",
                            q: "La regla de la cadena es útil para derivar funciones que son:",
                            options: ["Sumas de funciones", "Productos de funciones", "Composiciones de funciones", "Cocientes de funciones"],
                            answerIndex: 2,
                            explain: "La regla de la cadena es útil para derivar funciones compuestas, es decir, funciones que son composición de otras funciones."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Derivadas de Funciones (Regla de la Cadena y Cociente)",
                    desc: "Aplicación de la regla de la cadena en combinación con la regla del cociente para derivar funciones racionales compuestas.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Regla de la Cadena y Cociente",
                            q: "Para derivar f(x) = ((2x+1)/(3x-1))⁴, ¿qué reglas se deben aplicar?",
                            options: ["Solo la regla de la cadena", "Solo la regla del cociente", "La regla de la cadena y la regla del cociente", "La regla del producto"],
                            answerIndex: 2,
                            explain: "Se debe aplicar la regla de la cadena combinada con la regla del cociente para derivar esta función racional compuesta."
                        },
                        {
                            topic: "Derivada de función compuesta con cociente",
                            q: "¿Cuál es el resultado de f'(x) para f(x) = ((2x+1)/(3x-1))⁴?",
                            options: ["-20(2x+1)³/(3x-1)⁵", "20(2x+1)³/(3x-1)⁵", "-20(2x+1)⁴/(3x-1)⁵", "20(2x+1)⁴/(3x-1)⁵"],
                            answerIndex: 0,
                            explain: "Aplicando la regla de la cadena y la regla del cociente: f'(x) = 4((2x+1)/(3x-1))³ · (-5/(3x-1)²) = -20(2x+1)³/(3x-1)⁵."
                        },
                        {
                            topic: "Derivada del cociente",
                            q: "¿Cuál es la derivada de (2x+1)/(3x-1) usando la regla del cociente?",
                            options: ["-5/(3x-1)²", "5/(3x-1)²", "-5/(3x-1)³", "5/(3x-1)³"],
                            answerIndex: 0,
                            explain: "Usando la regla del cociente: [(3x-1)(2) - (2x+1)(3)]/(3x-1)² = (6x-2 - 6x-3)/(3x-1)² = -5/(3x-1)²."
                        },
                        {
                            topic: "Regla del cociente",
                            q: "¿Cuál es la fórmula de la regla del cociente para derivar f(x) = u(x)/v(x)?",
                            options: ["(u'v + uv')/v²", "(u'v - uv')/v²", "(uv' - u'v)/v²", "(u' + v')/v²"],
                            answerIndex: 1,
                            explain: "La regla del cociente establece que (u/v)' = (u'v - uv')/v²."
                        },
                        {
                            topic: "Simplificación de derivada",
                            q: "En el ejemplo f(x) = ((2x+1)/(3x-1))⁴, ¿cuál es el exponente final en el denominador?",
                            options: ["3", "4", "5", "6"],
                            answerIndex: 2,
                            explain: "El exponente final en el denominador es 5, ya que (3x-1)³ · (3x-1)² = (3x-1)⁵."
                        },
                        {
                            topic: "Regla de la cadena con exponente",
                            q: "Si f(x) = ((2x+1)/(3x-1))⁴, ¿qué se hace primero al aplicar la regla de la cadena?",
                            options: ["Derivar el cociente", "Bajar el exponente 4", "Simplificar la fracción", "Derivar el denominador"],
                            answerIndex: 1,
                            explain: "Primero se baja el exponente 4 y se resta 1: 4((2x+1)/(3x-1))³, luego se multiplica por la derivada del cociente."
                        },
                        {
                            topic: "Combinación de reglas",
                            q: "¿Qué reglas se combinan para derivar funciones como ((2x+1)/(3x-1))⁴?",
                            options: ["Regla de la suma y regla del producto", "Regla de la cadena y regla del cociente", "Regla del producto y regla del cociente", "Regla de la suma y regla de la cadena"],
                            answerIndex: 1,
                            explain: "Se combinan la regla de la cadena (para el exponente 4) y la regla del cociente (para la fracción interna)."
                        },
                        {
                            topic: "Derivada con exponente",
                            q: "¿Cuál es la derivada de (x² + 1)³?",
                            options: ["6x(x² + 1)²", "3x(x² + 1)²", "6x(x² + 1)³", "3(x² + 1)²"],
                            answerIndex: 0,
                            explain: "Aplicando la regla de la cadena: f'(x) = 3(x² + 1)² · 2x = 6x(x² + 1)²."
                        },
                        {
                            topic: "Aplicación de reglas",
                            q: "Para derivar f(x) = ((x²+1)/(x-1))³, ¿qué se debe hacer primero?",
                            options: ["Derivar el denominador", "Bajar el exponente 3", "Simplificar la fracción", "Aplicar la regla del producto"],
                            answerIndex: 1,
                            explain: "Primero se baja el exponente 3 y se resta 1, luego se multiplica por la derivada del cociente interno."
                        },
                        {
                            topic: "Regla de la cadena anidada",
                            q: "Cuando una función tiene una potencia de un cociente, ¿cómo se aplica la regla de la cadena?",
                            options: ["Se deriva primero la potencia, luego el cociente", "Se deriva primero el cociente, luego la potencia", "Se deriva todo al mismo tiempo", "No se puede aplicar la regla de la cadena"],
                            answerIndex: 0,
                            explain: "Se deriva primero la potencia (bajando el exponente), luego se multiplica por la derivada del cociente interno."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Profundizando en las Derivadas",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Derivada de Funciones Trascendentes",
                    desc: "Identificación y cálculo de derivadas de funciones exponenciales, logarítmicas y trigonométricas.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Derivada de eˣ",
                            q: "¿Cuál es la derivada de eˣ?",
                            options: ["eˣ", "x·eˣ⁻¹", "eˣ/x", "ln eˣ"],
                            answerIndex: 0,
                            explain: "Para todos los números x, la derivada de eˣ es eˣ, ya que d/dx(eˣ) = eˣ."
                        },
                        {
                            topic: "Derivada de aˣ",
                            q: "Si f(x) = aˣ con a > 0, ¿cuál es su derivada?",
                            options: ["aˣ", "aˣ·ln a", "aˣ/a", "x·aˣ⁻¹"],
                            answerIndex: 1,
                            explain: "f'(x) = ln a · aˣ, ya que aˣ = e^(x·ln a)."
                        },
                        {
                            topic: "Derivada de logaritmo",
                            q: "¿Cuál es la derivada de log_a x?",
                            options: ["1/(x·ln a)", "1/x", "ln a/x", "x/ln a"],
                            answerIndex: 0,
                            explain: "g'(x) = 1/(x·ln a), para a > 0 y a ≠ 1."
                        },
                        {
                            topic: "Derivada de seno",
                            q: "¿Cuál es la derivada de sen x?",
                            options: ["sen x", "cos x", "-sen x", "-cos x"],
                            answerIndex: 1,
                            explain: "Dx(sen x) = cos x para todo número real x en el dominio de la función."
                        },
                        {
                            topic: "Derivada de coseno",
                            q: "¿Cuál es la derivada de cos x?",
                            options: ["sen x", "cos x", "-sen x", "-cos x"],
                            answerIndex: 2,
                            explain: "Dx(cos x) = -sen x para todo número real x en el dominio de la función."
                        },
                        {
                            topic: "Derivada de tangente",
                            q: "¿Cuál es la derivada de tan x?",
                            options: ["sec² x", "csc² x", "sec x·tan x", "-csc² x"],
                            answerIndex: 0,
                            explain: "Dx(tan x) = sec² x para todo número real x en el dominio de la función."
                        },
                        {
                            topic: "Derivada de cotangente",
                            q: "¿Cuál es la derivada de cot x?",
                            options: ["sec² x", "csc² x", "-csc² x", "-sec² x"],
                            answerIndex: 2,
                            explain: "Dx(cot x) = -csc² x para todo número real x en el dominio de la función."
                        },
                        {
                            topic: "Derivada de secante",
                            q: "¿Cuál es la derivada de sec x?",
                            options: ["sec x·tan x", "-csc x·cot x", "sec² x", "-sec x·tan x"],
                            answerIndex: 0,
                            explain: "Dx(sec x) = sec x·tan x para todo número real x en el dominio de la función."
                        },
                        {
                            topic: "Derivada de cosecante",
                            q: "¿Cuál es la derivada de csc x?",
                            options: ["sec x·tan x", "-csc x·cot x", "csc x·cot x", "-sec x·tan x"],
                            answerIndex: 1,
                            explain: "Dx(csc x) = -csc x·cot x para todo número real x en el dominio de la función."
                        },
                        {
                            topic: "Derivada de función exponencial",
                            q: "Si f(x) = 10ˣ, ¿cuál es su derivada?",
                            options: ["10ˣ", "ln 10 · 10ˣ", "10ˣ/ln 10", "x·10ˣ⁻¹"],
                            answerIndex: 1,
                            explain: "f'(x) = ln 10 · 10ˣ, ya que f(x) = e^(x·ln 10)."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Derivadas de Orden Superior",
                    desc: "Cálculo de derivadas segunda, tercera y de orden superior de funciones polinomiales y trascendentes.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Derivadas de orden superior",
                            q: "¿Qué representa la segunda derivada de una función?",
                            options: ["La derivada de la derivada", "La integral de la función", "La función original", "La pendiente de la recta secante"],
                            answerIndex: 0,
                            explain: "Si la primera derivada f' de una función derivable f es también derivable, su derivada se representa por f'' y se llama la segunda derivada de f."
                        },
                        {
                            topic: "Notación de derivada segunda",
                            q: "¿Cómo se escribe la segunda derivada en la notación d/dx?",
                            options: ["d²y/dx²", "dy/dx", "d³y/dx³", "d⁴y/dx⁴"],
                            answerIndex: 0,
                            explain: "En la notación d/dx, la derivada segunda se escribe d²y/dx²."
                        },
                        {
                            topic: "Derivada de orden superior",
                            q: "¿Cómo se representan la tercera, cuarta y quinta derivadas de f?",
                            options: ["f''', f⁴, f⁵", "f''', f⁽⁴⁾, f⁽⁵⁾", "f₃, f₄, f₅", "f³, f⁴, f⁵"],
                            answerIndex: 1,
                            explain: "Las derivadas tercera, cuarta, quinta se representan por f''', f⁽⁴⁾, f⁽⁵⁾."
                        },
                        {
                            topic: "Derivada de orden superior",
                            q: "Si f(x) = x⁵ - 4x³ + 2, ¿cuál es la sexta derivada?",
                            options: ["120x", "120", "0", "x"],
                            answerIndex: 2,
                            explain: "f⁽⁵⁾(x) = 120, por lo tanto f⁽⁶⁾(x) = 0."
                        },
                        {
                            topic: "Derivada de orden superior",
                            q: "Si f(x) = eˣ + 2x³, ¿cuál es la cuarta derivada?",
                            options: ["eˣ", "eˣ + 12", "eˣ + 24", "eˣ + 24x"],
                            answerIndex: 0,
                            explain: "f'(x) = eˣ + 6x², f''(x) = eˣ + 12x, f'''(x) = eˣ + 12, f⁽⁴⁾(x) = eˣ."
                        },
                        {
                            topic: "Derivada n-ésima",
                            q: "Si f(x) = eˣ + 2x³, ¿cuál es la derivada n-ésima?",
                            options: ["eˣ", "eˣ + 2x³", "eˣ + 0", "eˣ + 2xⁿ"],
                            answerIndex: 0,
                            explain: "La derivada n-ésima de eˣ es eˣ, y las derivadas de orden superior de 2x³ se anulan después de la cuarta derivada."
                        },
                        {
                            topic: "Derivada de orden superior",
                            q: "Si f(x) = x⁵ - 4x³ + 2, ¿cuál es la segunda derivada?",
                            options: ["20x³ - 12x", "20x³ - 24x", "5x⁴ - 12x²", "60x² - 24"],
                            answerIndex: 0,
                            explain: "f'(x) = 5x⁴ - 12x², f''(x) = 20x³ - 24x."
                        },
                        {
                            topic: "Derivada n-ésima de polinomio",
                            q: "¿Qué sucede con las derivadas de orden superior de un polinomio?",
                            options: ["Siempre son positivas", "Eventualmente se hacen cero", "Siempre son negativas", "Nunca se anulan"],
                            answerIndex: 1,
                            explain: "Las derivadas de orden superior de un polinomio eventualmente se hacen cero, ya que al derivar un polinomio de grado n, la derivada n-ésima es una constante y la (n+1)-ésima es cero."
                        },
                        {
                            topic: "Notación de derivada de orden superior",
                            q: "¿Qué significa f⁽ⁿ⁾(x)?",
                            options: ["La derivada n-ésima de f", "La función f elevada a la n", "La n-ésima potencia de f", "La integral n-ésima de f"],
                            answerIndex: 0,
                            explain: "f⁽ⁿ⁾(x) representa la derivada n-ésima de la función f."
                        },
                        {
                            topic: "Derivada de orden superior",
                            q: "Si f(x) = x⁵ - 4x³ + 2, ¿cuál es la tercera derivada?",
                            options: ["60x² - 24", "20x³ - 12x", "60x² + 24", "60x² - 24x"],
                            answerIndex: 0,
                            explain: "f''(x) = 20x³ - 24x, f'''(x) = 60x² - 24."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Derivadas Parciales",
                    desc: "Comprensión y cálculo de derivadas parciales de funciones de dos variables, interpretación geométrica y aplicación.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Derivada parcial",
                            q: "¿Qué es una derivada parcial de una función de dos variables?",
                            options: ["La derivada con respecto a una variable manteniendo la otra constante", "La derivada con respecto a ambas variables", "La integral de la función", "La derivada de la función compuesta"],
                            answerIndex: 0,
                            explain: "La derivada parcial de f con respecto a x se obtiene derivando f considerando y como constante, y viceversa."
                        },
                        {
                            topic: "Notación de derivada parcial",
                            q: "¿Qué notación se usa para la derivada parcial de f con respecto a x?",
                            options: ["fₓ", "fᵧ", "f'", "f''"],
                            answerIndex: 0,
                            explain: "La derivada parcial de f con respecto a x se denota como fₓ, ∂f/∂x o D₁f."
                        },
                        {
                            topic: "Derivada parcial",
                            q: "Si f(x, y) = 3x² - 2xy + y², ¿cuál es ∂f/∂x?",
                            options: ["6x - 2y", "6x - 2x", "6x - 2y + 2y", "6x - 2y - 2x"],
                            answerIndex: 0,
                            explain: "∂f/∂x = 6x - 2y, derivando término a término respecto a x, tratando y como constante."
                        },
                        {
                            topic: "Derivada parcial",
                            q: "Si f(x, y) = 3x² - 2xy + y², ¿cuál es ∂f/∂y?",
                            options: ["2y - 2x", "2y - 2x + 6x", "2y - 2", "2y - 2x²"],
                            answerIndex: 0,
                            explain: "∂f/∂y = 2y - 2x, derivando término a término respecto a y, tratando x como constante."
                        },
                        {
                            topic: "Interpretación geométrica",
                            q: "Geométricamente, ¿qué representan ∂f/∂x y ∂f/∂y en un punto de una superficie?",
                            options: ["Las pendientes de la superficie en las direcciones de x e y", "Las áreas bajo la curva", "Los volúmenes de la superficie", "Las asíntotas de la superficie"],
                            answerIndex: 0,
                            explain: "∂f/∂x y ∂f/∂y en un punto de una superficie denotan las pendientes de la superficie en las direcciones de x e y, respectivamente."
                        },
                        {
                            topic: "Derivada parcial evaluada",
                            q: "¿Cómo se denota la derivada parcial evaluada en un punto (a, b)?",
                            options: ["fₓ(a, b)", "f(a, b)", "f'(a, b)", "f''(a, b)"],
                            answerIndex: 0,
                            explain: "La derivada parcial evaluada en el punto (a, b) se denota por fₓ(a, b) o ∂f(a,b)/∂x."
                        },
                        {
                            topic: "Cálculo de derivada parcial",
                            q: "Para calcular ∂f/∂x, ¿qué se debe hacer con las variables diferentes a x?",
                            options: ["Derivarlas también", "Tratarlas como constantes", "Ignorarlas", "Sumarlas"],
                            answerIndex: 1,
                            explain: "Para calcular la derivada parcial con respecto a x, se tratan todas las otras variables como constantes."
                        },
                        {
                            topic: "Derivada parcial de suma",
                            q: "¿Cómo se calcula la derivada parcial de una suma de términos?",
                            options: ["Derivando cada término por separado", "Derivando solo el primer término", "Derivando solo el último término", "No se puede derivar una suma"],
                            answerIndex: 0,
                            explain: "La derivada parcial de una suma se calcula derivando cada término por separado respecto a la variable en cuestión."
                        },
                        {
                            topic: "Aplicación de derivada parcial",
                            q: "Si z = (1/2)√(24 - x² - 2y²), ¿cuál es ∂z/∂x?",
                            options: ["-x/(2√(24 - x² - 2y²))", "x/(2√(24 - x² - 2y²))", "-2x/(√(24 - x² - 2y²))", "-x/(√(24 - x² - 2y²))"],
                            answerIndex: 0,
                            explain: "∂z/∂x = (1/2)·(-2x)/(2√(24 - x² - 2y²)) = -x/(2√(24 - x² - 2y²))."
                        },
                        {
                            topic: "Derivada parcial mixta",
                            q: "¿Qué es una derivada parcial mixta?",
                            options: ["∂²f/∂x∂y = ∂²f/∂y∂x", "∂f/∂x + ∂f/∂y", "∂f/∂x · ∂f/∂y", "No existe"],
                            answerIndex: 0,
                            explain: "Una derivada parcial mixta es la derivada parcial de una derivada parcial, como ∂²f/∂x∂y = ∂²f/∂y∂x, que bajo condiciones de continuidad son iguales."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Aplicaciones de las Derivadas",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Optimización",
                    desc: "Aplicación de derivadas para resolver problemas de optimización: máximos y mínimos en situaciones reales.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Optimización",
                            q: "¿Qué es la optimización en el contexto del cálculo diferencial?",
                            options: ["Encontrar los máximos y mínimos de una función", "Calcular áreas bajo curvas", "Resolver integrales", "Derivar funciones compuestas"],
                            answerIndex: 0,
                            explain: "La optimización es un tipo de problema de aplicación donde se requiere encontrar los máximos y mínimos de una función."
                        },
                        {
                            topic: "Optimización de portería",
                            q: "Con una barra de 12m para construir una portería, ¿qué longitud deben tener los postes para maximizar el área?",
                            options: ["2m", "3m", "4m", "6m"],
                            answerIndex: 1,
                            explain: "Resolviendo s'(x) = 12 - 4x = 0, se obtiene x = 3m para los postes, y el larguero mide 6m."
                        },
                        {
                            topic: "Optimización de portería",
                            q: "Con una barra de 12m para construir una portería, ¿cuál es el área máxima que se puede obtener?",
                            options: ["12m²", "18m²", "24m²", "36m²"],
                            answerIndex: 1,
                            explain: "El área máxima es s(3) = 12(3) - 2(3)² = 36 - 18 = 18m²."
                        },
                        {
                            topic: "Criterio de la segunda derivada",
                            q: "Si s''(x) < 0 en un punto crítico, ¿qué tipo de punto es?",
                            options: ["Mínimo", "Máximo", "Punto de inflexión", "No se puede determinar"],
                            answerIndex: 1,
                            explain: "Si s''(x) < 0 en un punto crítico, entonces es un máximo local."
                        },
                        {
                            topic: "Optimización de sumandos",
                            q: "Para descomponer 15 en dos sumandos cuyo producto del primero por el cuadrado del segundo sea máximo, ¿cuáles son los sumandos?",
                            options: ["5 y 10", "7 y 8", "3 y 12", "6 y 9"],
                            answerIndex: 0,
                            explain: "Resolviendo s'(y) = 30y - 3y² = 0, se obtiene y = 10, x = 5, por lo tanto los sumandos son 5 y 10."
                        },
                        {
                            topic: "Aplicación de optimización",
                            q: "En el problema de la portería, ¿qué se debe igualar a cero para encontrar el punto crítico?",
                            options: ["La función", "La primera derivada", "La segunda derivada", "La integral"],
                            answerIndex: 1,
                            explain: "Para encontrar puntos críticos se iguala la primera derivada a cero."
                        },
                        {
                            topic: "Velocidad de vehículos",
                            q: "Si v(t) = t³/3 - 4t² + 15t + 10, ¿a qué hora se alcanza la velocidad máxima entre las 2pm y 8pm?",
                            options: ["2pm", "3pm", "5pm", "8pm"],
                            answerIndex: 1,
                            explain: "v'(t) = t² - 8t + 15 = (t-3)(t-5), con v''(3) = -2 < 0, por lo tanto t = 3 (3pm) es máximo."
                        },
                        {
                            topic: "Velocidad de vehículos",
                            q: "Si v(t) = t³/3 - 4t² + 15t + 10, ¿a qué hora se alcanza la velocidad mínima entre las 2pm y 8pm?",
                            options: ["2pm", "3pm", "5pm", "8pm"],
                            answerIndex: 2,
                            explain: "v'(t) = t² - 8t + 15 = (t-3)(t-5), con v''(5) = 2 > 0, por lo tanto t = 5 (5pm) es mínimo."
                        },
                        {
                            topic: "Criterio de la segunda derivada",
                            q: "Si s''(x) > 0 en un punto crítico, ¿qué tipo de punto es?",
                            options: ["Máximo", "Mínimo", "Punto de inflexión", "No se puede determinar"],
                            answerIndex: 1,
                            explain: "Si s''(x) > 0 en un punto crítico, entonces es un mínimo local."
                        },
                        {
                            topic: "Problema de optimización",
                            q: "En el problema de los dos sumandos, ¿qué se hizo con la segunda derivada para confirmar que y = 10 es máximo?",
                            options: ["s''(10) > 0", "s''(10) < 0", "s''(10) = 0", "s''(10) no existe"],
                            answerIndex: 1,
                            explain: "s''(10) = 30 - 6(10) = -30 < 0, por lo tanto y = 10 es un máximo."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Regla de la Cadena (Repaso)",
                    desc: "Reforzamiento de la regla de la cadena para derivar funciones compuestas con diferentes tipos de funciones.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Regla de la Cadena",
                            q: "Si h(x) = (2/(x-1))⁶, ¿cuál es el denominador de su derivada?",
                            options: ["(x-1)⁷", "(x-1)⁶", "(x-1)⁵", "(x-1)⁸"],
                            answerIndex: 0,
                            explain: "h'(x) = 6(2/(x-1))⁵ · (-2/(x-1)²) = -384/(x-1)⁷."
                        },
                        {
                            topic: "Regla de la Cadena",
                            q: "Si f(x) = (3x³ + 4x² - 5x + 10)⁻¹, ¿cuál es su derivada?",
                            options: ["-(9x²+8x-5)/(3x³+4x²-5x+10)²", "(9x²+8x-5)/(3x³+4x²-5x+10)²", "-(9x²+8x-5)/(3x³+4x²-5x+10)", "(9x²+8x-5)/(3x³+4x²-5x+10)"],
                            answerIndex: 0,
                            explain: "Aplicando la regla de la cadena: f'(x) = -(9x² + 8x - 5)/(3x³ + 4x² - 5x + 10)²."
                        },
                        {
                            topic: "Regla de la Cadena",
                            q: "¿Cuál es la derivada de (3x + 2)⁵?",
                            options: ["15(3x + 2)⁴", "5(3x + 2)⁴", "15(3x + 2)⁵", "5(3x + 2)⁵"],
                            answerIndex: 0,
                            explain: "f'(x) = 5(3x + 2)⁴ · 3 = 15(3x + 2)⁴."
                        },
                        {
                            topic: "Regla de la Cadena con exponente negativo",
                            q: "¿Cuál es la derivada de (x² + 1)⁻²?",
                            options: ["-4x(x²+1)⁻³", "4x(x²+1)⁻³", "-2x(x²+1)⁻³", "2x(x²+1)⁻³"],
                            answerIndex: 0,
                            explain: "f'(x) = -2(x²+1)⁻³ · 2x = -4x(x²+1)⁻³."
                        },
                        {
                            topic: "Regla de la Cadena con raíz",
                            q: "¿Cuál es la derivada de √(x² + 1)?",
                            options: ["x/√(x² + 1)", "1/√(x² + 1)", "2x/√(x² + 1)", "x/(2√(x² + 1))"],
                            answerIndex: 0,
                            explain: "f'(x) = (1/2)(x²+1)⁻¹/² · 2x = x/√(x²+1)."
                        },
                        {
                            topic: "Regla de la Cadena con función exponencial",
                            q: "¿Cuál es la derivada de e^(2x + 1)?",
                            options: ["2e^(2x+1)", "e^(2x+1)", "2e^(2x)", "e^(2x+1)/2"],
                            answerIndex: 0,
                            explain: "f'(x) = e^(2x+1) · 2 = 2e^(2x+1)."
                        },
                        {
                            topic: "Regla de la Cadena con función trigonométrica",
                            q: "¿Cuál es la derivada de sen(3x)?",
                            options: ["3cos(3x)", "cos(3x)", "3sen(3x)", "-3cos(3x)"],
                            answerIndex: 0,
                            explain: "f'(x) = cos(3x) · 3 = 3cos(3x)."
                        },
                        {
                            topic: "Regla de la Cadena con función logarítmica",
                            q: "¿Cuál es la derivada de ln(x² + 1)?",
                            options: ["2x/(x²+1)", "1/(x²+1)", "2/(x²+1)", "x/(x²+1)"],
                            answerIndex: 0,
                            explain: "f'(x) = 1/(x²+1) · 2x = 2x/(x²+1)."
                        },
                        {
                            topic: "Aplicación de la regla de la cadena",
                            q: "¿Para qué tipo de funciones es especialmente útil la regla de la cadena?",
                            options: ["Funciones lineales", "Funciones compuestas", "Funciones constantes", "Funciones cuadráticas"],
                            answerIndex: 1,
                            explain: "La regla de la cadena es especialmente útil para derivar funciones compuestas, donde una función está dentro de otra."
                        },
                        {
                            topic: "Regla de la Cadena",
                            q: "Si f(x) = (x² - 4)⁴, ¿cuál es su derivada?",
                            options: ["8x(x²-4)³", "4x(x²-4)³", "8x(x²-4)⁴", "4(x²-4)³"],
                            answerIndex: 0,
                            explain: "f'(x) = 4(x²-4)³ · 2x = 8x(x²-4)³."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Regla de L'Hopital y Aplicaciones",
                    desc: "Aplicación de la regla de L'Hopital para resolver límites indeterminados y reconocimiento de aplicaciones de la derivada en diversos campos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Regla de L'Hopital",
                            q: "¿Qué tipo de límites se pueden resolver con la regla de L'Hopital?",
                            options: ["Límites de la forma 0/0 o ∞/∞", "Límites de funciones continuas", "Límites infinitos", "Límites de funciones lineales"],
                            answerIndex: 0,
                            explain: "La regla de L'Hopital se aplica a límites indeterminados de la forma 0/0 o ∞/∞."
                        },
                        {
                            topic: "Regla de L'Hopital",
                            q: "¿Cuál es el valor de lim_{x→0} sen x / x?",
                            options: ["0", "1", "∞", "No existe"],
                            answerIndex: 1,
                            explain: "Aplicando L'Hopital: lim_{x→0} sen x / x = lim_{x→0} cos x / 1 = cos 0 = 1."
                        },
                        {
                            topic: "Regla de L'Hopital",
                            q: "¿Cuál es el valor de lim_{x→2} (x² - 4)/(x - 2)?",
                            options: ["2", "4", "6", "8"],
                            answerIndex: 1,
                            explain: "Aplicando L'Hopital: lim_{x→2} (x² - 4)/(x - 2) = lim_{x→2} 2x/1 = 2(2) = 4."
                        },
                        {
                            topic: "Regla de L'Hopital",
                            q: "¿Cuál es el valor de lim_{x→0} (x² + 3x)/(eˣ - 1)?",
                            options: ["0", "1", "2", "3"],
                            answerIndex: 3,
                            explain: "Aplicando L'Hopital: lim_{x→0} (x² + 3x)/(eˣ - 1) = lim_{x→0} (2x + 3)/eˣ = 3/1 = 3."
                        },
                        {
                            topic: "Aplicaciones de la derivada",
                            q: "¿Cuál es la derivada de la superficie de una esfera?",
                            options: ["La longitud", "El volumen", "El área", "El radio"],
                            answerIndex: 0,
                            explain: "La derivada de la superficie o área es la longitud. Por ejemplo, d/dr(πr²) = 2πr."
                        },
                        {
                            topic: "Aplicaciones de la derivada",
                            q: "¿Cuál es la derivada del volumen de una esfera?",
                            options: ["La superficie", "El radio", "El área", "La longitud"],
                            answerIndex: 0,
                            explain: "La derivada del volumen es la superficie. d/dr(4/3 πr³) = 4πr²."
                        },
                        {
                            topic: "Aplicaciones en física",
                            q: "¿En qué área de la física se aplica la derivada para estudiar el movimiento?",
                            options: ["Cinemática", "Termodinámica", "Electrostática", "Física de materiales"],
                            answerIndex: 0,
                            explain: "La derivada se aplica en cinemática para estudiar el movimiento, donde la velocidad es la derivada de la posición y la aceleración la derivada de la velocidad."
                        },
                        {
                            topic: "Aplicaciones en biología",
                            q: "¿Qué modelo biológico se estudió con derivadas en Pensamiento Matemático III?",
                            options: ["Crecimiento bacteriano", "Fotosíntesis", "Respiración celular", "Evolución de especies"],
                            answerIndex: 0,
                            explain: "El modelo de crecimiento bacteriano se analizó con derivadas en Pensamiento Matemático III."
                        },
                        {
                            topic: "Aplicaciones en economía",
                            q: "¿Qué tipo de cálculos se realizan con derivadas en economía?",
                            options: ["Cálculos marginales", "Cálculos de inflación", "Cálculos de impuestos", "Cálculos de inversión"],
                            answerIndex: 0,
                            explain: "En economía se utilizan cálculos marginales, como el costo marginal y el ingreso marginal, que son derivadas de funciones de costo e ingreso."
                        },
                        {
                            topic: "Aplicaciones de la derivada",
                            q: "¿En qué campo se aplican las derivadas para el diseño de vías y carreteras?",
                            options: ["Arquitectura", "Ingeniería", "Biología", "Medicina"],
                            answerIndex: 1,
                            explain: "En ingeniería se aplican las derivadas para el diseño de vías y carreteras, así como para problemas de optimización."
                        }
                    ]
                }
            }
        }
    }
};

export default calculoDiferencial;