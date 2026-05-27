// ============================================
// REACCIONES QUÍMICAS: CONSERVACIÓN DE LA MATERIA EN LA FORMACIÓN DE NUEVAS SUSTANCIAS
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const reaccionesQuimicas = {
    id: "reaccionesQuimicas",
    nombre: "REACCIONES QUÍMICAS: CONSERVACIÓN DE LA MATERIA EN LA FORMACIÓN DE NUEVAS SUSTANCIAS",
    icono: "⚗️",
    descripcion: "Estudio de modelos atómicos, partículas subatómicas, números cuánticos, tabla periódica, propiedades periódicas, enlaces químicos, tipos de reacciones, balanceo de ecuaciones, estequiometría, equilibrio químico, cinética química, química nuclear y química del aire.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: Propiedades Periódicas (Átomos, Modelos Atómicos y Enlaces Químicos)",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Modelos Atómicos y Partículas Subatómicas",
                    desc: "Comprensión de los modelos atómicos de Dalton, Thomson, Rutherford, Bohr y Schrödinger, partículas subatómicas y números cuánticos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Demócrito",
                            q: "¿Qué significa la palabra 'átomo' en griego?",
                            options: ["Divisible", "Indivisible", "Pequeño", "Invisible"],
                            answerIndex: 1,
                            explain: "Demócrito bautizó a las pequeñas partículas como 'átomos', palabra que significa indivisible."
                        },
                        {
                            topic: "Teoría atómica de Dalton",
                            q: "¿Cuál de los siguientes es un postulado de la teoría atómica de Dalton?",
                            options: ["Los átomos contienen electrones", "Los átomos de un mismo elemento son idénticos en masa y propiedades", "Los átomos tienen un núcleo", "Los electrones giran en órbitas cuantizadas"],
                            answerIndex: 1,
                            explain: "Dalton postuló que los átomos de los mismos elementos son idénticos en masa, proporciones y tienen las mismas propiedades físicas y químicas."
                        },
                        {
                            topic: "Descubrimiento del electrón",
                            q: "¿Quién descubrió el electrón mediante experimentos con rayos catódicos?",
                            options: ["Ernest Rutherford", "Joseph John Thomson", "Niels Bohr", "John Dalton"],
                            answerIndex: 1,
                            explain: "Joseph John Thomson demostró en 1897 la existencia de los electrones usando un dispositivo llamado rayos catódicos."
                        },
                        {
                            topic: "Modelo de Rutherford",
                            q: "¿Qué descubrió Rutherford con su experimento de la lámina de oro?",
                            options: ["Los electrones tienen carga negativa", "La existencia del núcleo atómico", "La estructura de Lewis", "Los números cuánticos"],
                            answerIndex: 1,
                            explain: "Rutherford observó que algunas partículas alfa rebotaban, lo que lo llevó a proponer en 1911 la existencia del núcleo atómico."
                        },
                        {
                            topic: "Modelo de Bohr",
                            q: "¿Qué concepto incorporó Niels Bohr a su modelo atómico?",
                            options: ["El núcleo atómico", "Los electrones como ondas", "La teoría de cuantos de energía de Max Planck", "Los números cuánticos"],
                            answerIndex: 2,
                            explain: "Bohr incorporó la teoría de cuantos de energía desarrollada por Max Planck y el efecto fotoeléctrico observado por Albert Einstein."
                        },
                        {
                            topic: "Modelo de Schrödinger",
                            q: "¿Cómo describe Schrödinger el comportamiento del electrón en su modelo atómico?",
                            options: ["Como partículas en órbitas circulares", "Como ondas de materia", "Como partículas sin movimiento", "Como esferas sólidas"],
                            answerIndex: 1,
                            explain: "Schrödinger describe a los electrones como ondas de materia que se distribuyen en el espacio según una función de ondas."
                        },
                        {
                            topic: "Partículas subatómicas",
                            q: "¿Cuáles son las tres partículas subatómicas fundamentales?",
                            options: ["Protón, neutrón y electrón", "Protón, positrón y neutrón", "Electrón, quark y fotón", "Neutrón, bosón y protón"],
                            answerIndex: 0,
                            explain: "Los modelos atómicos consideran tres partículas subatómicas básicas: protón (carga +), neutrón (sin carga) y electrón (carga -)."
                        },
                        {
                            topic: "Número atómico (Z)",
                            q: "¿Qué indica el número atómico (Z) de un elemento?",
                            options: ["El número de neutrones", "El número de protones en el núcleo", "El número de masa", "La masa atómica promedio"],
                            answerIndex: 1,
                            explain: "El número atómico (Z) indica el número de protones presentes en el núcleo y representa cuántos electrones posee un átomo."
                        },
                        {
                            topic: "Número de masa (A)",
                            q: "¿Cómo se calcula el número de masa (A) de un átomo?",
                            options: ["A = Z + electrones", "A = Z + N (protones + neutrones)", "A = masa atómica + Z", "A = N - Z"],
                            answerIndex: 1,
                            explain: "El número de masa (A) corresponde a la suma de protones (Z) y neutrones (N) presentes en el núcleo atómico."
                        },
                        {
                            topic: "Números cuánticos",
                            q: "¿Qué describe el número cuántico principal (n)?",
                            options: ["La forma del orbital", "La orientación del orbital", "El tamaño del orbital y la energía del electrón", "El giro del electrón"],
                            answerIndex: 2,
                            explain: "El número cuántico principal (n) es una medida del tamaño del orbital y es el factor principal para determinar la energía del electrón."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Tabla Periódica y Propiedades Periódicas",
                    desc: "Identificación de la tabla periódica, sus antecedentes, periodos, grupos y propiedades periódicas.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Mendeleiev",
                            q: "¿En qué año publicó Dmitri Mendeleiev su tabla periódica?",
                            options: ["1817", "1862", "1869", "1913"],
                            answerIndex: 2,
                            explain: "Mendeleiev publicó su tabla periódica en 1869 conteniendo 63 elementos químicos organizados por su masa atómica en orden creciente."
                        },
                        {
                            topic: "Ley de las octavas",
                            q: "¿Quién propuso la 'ley de las octavas' para organizar los elementos químicos?",
                            options: ["Döbereiner", "Newlands", "Mendeleiev", "Moseley"],
                            answerIndex: 1,
                            explain: "John Newlands observó que las características de los elementos se repetían en intervalos de cada siete y llamó a esto 'ley de las octavas'."
                        },
                        {
                            topic: "Tabla periódica moderna",
                            q: "¿Quién sugirió ordenar los elementos de acuerdo con su número atómico?",
                            options: ["Mendeleiev", "Moseley", "Meyer", "Döbereiner"],
                            answerIndex: 1,
                            explain: "En 1913, Moseley sugirió que los elementos se ordenaran de acuerdo con su número atómico en forma creciente."
                        },
                        {
                            topic: "Periodos",
                            q: "¿Qué son los periodos en la tabla periódica?",
                            options: ["Las columnas verticales", "Las filas horizontales", "Los bloques s, p, d, f", "Los grupos de elementos"],
                            answerIndex: 1,
                            explain: "Los periodos son las filas horizontales de la tabla periódica, de las cuales hay 7."
                        },
                        {
                            topic: "Electronegatividad",
                            q: "¿Qué es la electronegatividad?",
                            options: ["Capacidad de perder electrones", "Capacidad de un átomo para atraer y retener electrones", "Energía para eliminar un electrón", "Tamaño del átomo"],
                            answerIndex: 1,
                            explain: "La electronegatividad es la capacidad que tiene el átomo de un elemento para atraer y retener electrones hacia él cuando se combina químicamente."
                        },
                        {
                            topic: "Elemento más electronegativo",
                            q: "¿Cuál es el elemento más electronegativo de la tabla periódica?",
                            options: ["Oxígeno", "Cloro", "Flúor", "Francio"],
                            answerIndex: 2,
                            explain: "El elemento más electronegativo es el Flúor (4.0 en la escala de Pauling) y el menos electronegativo es el Francio (0.7)."
                        },
                        {
                            topic: "Energía de ionización",
                            q: "¿Qué es la energía de ionización?",
                            options: ["Energía liberada al añadir un electrón", "Energía necesaria para separar un electrón de un átomo en estado gaseoso", "Energía del enlace químico", "Energía cinética de los electrones"],
                            answerIndex: 1,
                            explain: "La energía de ionización es la energía necesaria para separar un electrón de un átomo en estado gaseoso, formando un catión."
                        },
                        {
                            topic: "Afinidad electrónica",
                            q: "¿Qué mide la afinidad electrónica?",
                            options: ["La capacidad de donar electrones", "La energía involucrada al añadir un electrón a un átomo gaseoso", "El tamaño del átomo", "La energía de los niveles electrónicos"],
                            answerIndex: 1,
                            explain: "La afinidad electrónica es la cantidad de energía que se absorbe cuando se añade un electrón a un átomo gaseoso aislado."
                        },
                        {
                            topic: "Radio atómico",
                            q: "¿Cómo varía el radio atómico en la tabla periódica?",
                            options: ["Aumenta de izquierda a derecha", "Disminuye de izquierda a derecha y aumenta de arriba abajo", "Aumenta de arriba abajo y de derecha a izquierda", "Es constante"],
                            answerIndex: 1,
                            explain: "El radio atómico disminuye de izquierda a derecha en un periodo y aumenta de arriba abajo en un grupo."
                        },
                        {
                            topic: "Bloques de la tabla periódica",
                            q: "¿Cuáles son los cuatro bloques de la tabla periódica moderna?",
                            options: ["A, B, C, D", "s, p, d, f", "1, 2, 3, 4", "I, II, III, IV"],
                            answerIndex: 1,
                            explain: "La tabla periódica cuenta con cuatro bloques denominados: s, p, d y f, que agrupan elementos según la terminación de su configuración electrónica."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Enlaces Químicos y Fuerzas Intermoleculares",
                    desc: "Comprensión de la regla del octeto, estructura de Lewis, tipos de enlace químico y fuerzas intermoleculares.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Regla del octeto",
                            q: "¿Qué establece la regla del octeto?",
                            options: ["Los átomos tienden a tener 2 electrones", "Los átomos tienden a tener 8 electrones en su última capa de valencia", "Los átomos tienden a perder electrones", "Los átomos no comparten electrones"],
                            answerIndex: 1,
                            explain: "La regla del octeto establece que los átomos tienden a adquirir una configuración electrónica similar a la de los gases nobles (8 electrones en la última capa de valencia)."
                        },
                        {
                            topic: "Estructura de Lewis",
                            q: "¿Qué representa la estructura de Lewis de un elemento?",
                            options: ["Los protones del núcleo", "Los electrones del nivel de valencia", "Los neutrones del átomo", "La masa atómica"],
                            answerIndex: 1,
                            explain: "La estructura de Lewis es la representación de los electrones del nivel de valencia alrededor del símbolo del elemento químico."
                        },
                        {
                            topic: "Enlace iónico",
                            q: "¿Cómo se forma un enlace iónico?",
                            options: ["Compartiendo electrones", "Transfiriendo uno o más electrones de valencia de un átomo a otro", "Por fuerzas de Van der Waals", "Por puentes de hidrógeno"],
                            answerIndex: 1,
                            explain: "El enlace iónico se presenta cuando se transfieren uno o más electrones de valencia de un átomo a otro átomo, formando iones de carga opuesta."
                        },
                        {
                            topic: "Enlace covalente",
                            q: "¿Qué caracteriza a un enlace covalente?",
                            options: ["Transferencia de electrones", "Compartir uno o más pares de electrones entre átomos", "Atracción electrostática", "Formación de iones"],
                            answerIndex: 1,
                            explain: "El enlace covalente es el resultado de compartir uno o más pares de electrones entre los átomos que se unen."
                        },
                        {
                            topic: "Enlace covalente polar",
                            q: "¿Cuándo se forma un enlace covalente polar?",
                            options: ["Cuando los átomos tienen la misma electronegatividad", "Cuando hay diferencia de electronegatividad entre 0.5 y 1.7", "Cuando se comparten 2 pares de electrones", "Cuando se forma entre metales"],
                            answerIndex: 1,
                            explain: "El enlace covalente polar se presenta cuando los átomos que se enlazan tienen una diferencia de electronegatividad entre 0.5 y 1.7, originando polos parciales."
                        },
                        {
                            topic: "Enlace metálico",
                            q: "¿Cómo se explica la conductividad eléctrica de los metales?",
                            options: ["Por sus bajos puntos de fusión", "Por la nube de electrones libres (mar de electrones)", "Por su fragilidad", "Por su baja densidad"],
                            answerIndex: 1,
                            explain: "En el enlace metálico, los electrones de valencia forman una nube de electrones alrededor de núcleos equidistantes, lo que permite que los electrones se muevan libremente y conduzcan electricidad."
                        },
                        {
                            topic: "Puente de hidrógeno",
                            q: "¿Qué tipo de interacción es el puente de hidrógeno?",
                            options: ["Un enlace covalente", "Una interacción dipolo-dipolo entre moléculas polares", "Un enlace iónico", "Un enlace metálico"],
                            answerIndex: 1,
                            explain: "El puente de hidrógeno es una interacción dipolo-dipolo que ocurre entre moléculas polares, donde el hidrógeno se enlaza con átomos electronegativos como flúor, nitrógeno u oxígeno."
                        },
                        {
                            topic: "Propiedades de los metales",
                            q: "¿Cuál es una característica del enlace metálico?",
                            options: ["Son malos conductores", "Tienen bajos puntos de fusión", "Son dúctiles y maleables", "Son frágiles"],
                            answerIndex: 2,
                            explain: "Entre las características del enlace metálico están que los metales son dúctiles, maleables, buenos conductores y tienen altos puntos de fusión."
                        },
                        {
                            topic: "Fuerzas de Van der Waals",
                            q: "¿Qué son las fuerzas de Van der Waals?",
                            options: ["Enlaces covalentes fuertes", "Interacciones moleculares débiles entre moléculas eléctricamente neutras", "Enlaces iónicos", "Puentes de hidrógeno"],
                            answerIndex: 1,
                            explain: "Las fuerzas de Van der Waals son interacciones moleculares muy débiles entre moléculas eléctricamente neutras, más débiles que los enlaces covalentes."
                        },
                        {
                            topic: "Metaloides",
                            q: "¿Qué son los metaloides o semimetales?",
                            options: ["Elementos con propiedades de metales", "Elementos con propiedades intermedias entre metales y no metales", "Elementos no metálicos", "Elementos radiactivos"],
                            answerIndex: 1,
                            explain: "Los metaloides o semimetales son elementos cuyas propiedades son intermedias entre los metales y los no metales."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Reacciones Químicas: Tipos, Energía y Equilibrio Químico",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Tipos de Reacciones Químicas y Balanceo",
                    desc: "Identificación de tipos de reacciones químicas, balanceo de ecuaciones por tanteo y método redox.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Reacción química",
                            q: "¿Qué es una reacción química?",
                            options: ["Un cambio físico de la materia", "El proceso por el cual reactivos se transforman en productos con diferentes propiedades", "Una mezcla de sustancias", "Un cambio de estado"],
                            answerIndex: 1,
                            explain: "Una reacción química es el proceso por el cual una o más sustancias (reactivos) se transforman en otra u otras sustancias (productos) con propiedades diferentes."
                        },
                        {
                            topic: "Reacción de síntesis",
                            q: "¿Cuál es la fórmula general de una reacción de síntesis o adición?",
                            options: ["AB → A + B", "A + B → AB", "AB + C → A + CB", "A + BC → AC + B"],
                            answerIndex: 1,
                            explain: "La reacción de síntesis tiene la fórmula general: A + B → AB, donde dos o más reactantes forman un solo producto."
                        },
                        {
                            topic: "Reacción de descomposición",
                            q: "¿Qué caracteriza a una reacción de descomposición?",
                            options: ["Dos o más reactivos forman un producto", "Una sustancia se transforma en dos o más productos", "Un elemento sustituye a otro en un compuesto", "Dos compuestos intercambian iones"],
                            answerIndex: 1,
                            explain: "La reacción de descomposición es inversa a la síntesis: una sola sustancia se transforma en dos o más productos (AB → A + B)."
                        },
                        {
                            topic: "Reacción de sustitución simple",
                            q: "¿Cuál es la forma general de una reacción de sustitución simple?",
                            options: ["A + B → AB", "AB → A + B", "AB + C → A + CB", "AB + CD → AD + CB"],
                            answerIndex: 2,
                            explain: "La reacción de sustitución simple tiene la forma: AB + C → A + CB, donde un elemento sustituye a otro dentro de un compuesto."
                        },
                        {
                            topic: "Reacción redox",
                            q: "¿Qué ocurre en una reacción de óxido-reducción (redox)?",
                            options: ["Solo se libera energía", "Hay transferencia de electrones entre especies químicas", "Se forman gases", "Se precipita un sólido"],
                            answerIndex: 1,
                            explain: "Una reacción redox implica transferencia de electrones entre especies químicas: algunas sufren oxidación (pérdida de electrones) y otras reducción (ganancia de electrones)."
                        },
                        {
                            topic: "Reacción endotérmica",
                            q: "¿Qué caracteriza a una reacción endotérmica?",
                            options: ["Desprende energía", "Absorbe energía en forma de luz o calor", "No cambia la energía", "Es espontánea siempre"],
                            answerIndex: 1,
                            explain: "Una reacción endotérmica absorbe energía en forma de luz o calor. La entalpía de los reactivos es menor que la de los productos."
                        },
                        {
                            topic: "Reacción exotérmica",
                            q: "¿Qué caracteriza a una reacción exotérmica?",
                            options: ["Absorbe energía", "Desprende energía en forma de luz o calor", "No hay cambio energético", "Requiere catalizador"],
                            answerIndex: 1,
                            explain: "Una reacción exotérmica desprende energía en forma de luz o calor. La entalpía de los reactivos es mayor que la de los productos."
                        },
                        {
                            topic: "Balanceo de ecuaciones",
                            q: "¿Qué ley debe cumplirse al balancear una ecuación química?",
                            options: ["Ley de Proust", "Ley de conservación de la masa (Lavoisier)", "Ley de Dalton", "Ley de Avogadro"],
                            answerIndex: 1,
                            explain: "Al balancear una ecuación química debe cumplirse la ley de conservación de la masa: la masa no se crea ni se destruye, solo se transforma."
                        },
                        {
                            topic: "Número de oxidación",
                            q: "¿Cuál es el número de oxidación de un átomo de un elemento libre?",
                            options: ["+1", "-1", "0", "Depende del elemento"],
                            answerIndex: 2,
                            explain: "Un átomo de un elemento libre tiene un número de oxidación de 0."
                        },
                        {
                            topic: "Ejemplo de fotosíntesis",
                            q: "¿Qué tipo de reacción es la fotosíntesis?",
                            options: ["Exotérmica", "Endotérmica", "Redox solo", "De síntesis solo"],
                            answerIndex: 1,
                            explain: "La fotosíntesis es una reacción endotérmica que absorbe energía en forma de luz para convertir CO₂ y H₂O en glucosa y oxígeno."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Estequiometría y Equilibrio Químico",
                    desc: "Comprensión de conceptos estequiométricos (mol, número de Avogadro, masa molar), leyes ponderales, relaciones estequiométricas, equilibrio químico y principio de Le Chatelier.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Mol",
                            q: "¿Quién creó la unidad 'mol' y en qué consiste?",
                            options: ["Dalton; masa atómica", "Ostwald; cantidad de sustancia que contiene 6.022x10²³ unidades fundamentales", "Avogadro; volumen de un gas", "Mendeleiev; peso atómico"],
                            answerIndex: 1,
                            explain: "Wilhelm Ostwald creó la unidad 'mol', definida como 'la cantidad de sustancia que contiene 6.022x10²³ unidades fundamentales'."
                        },
                        {
                            topic: "Número de Avogadro",
                            q: "¿Cuál es el valor del número de Avogadro?",
                            options: ["6.022x10²²", "6.022x10²³", "6.022x10²⁴", "6.022x10²¹"],
                            answerIndex: 1,
                            explain: "El número de Avogadro equivale a 6.022x10²³ partículas elementales (átomos o moléculas) por mol de cualquier sustancia."
                        },
                        {
                            topic: "Masa molar",
                            q: "¿Qué es la masa molar de un elemento?",
                            options: ["La masa atómica en gramos", "El número de átomos en un mol", "El volumen que ocupa un mol", "La masa molecular en uma"],
                            answerIndex: 0,
                            explain: "La masa molar (M) de un elemento es igual a su masa atómica expresada en gramos. Ejemplo: Na = 23 g/mol."
                        },
                        {
                            topic: "Volumen molar",
                            q: "¿Cuál es el volumen que ocupa un mol de cualquier gas en condiciones normales (CNPT)?",
                            options: ["22.4 L", "24.5 L", "11.2 L", "44.8 L"],
                            answerIndex: 0,
                            explain: "En condiciones normales de presión y temperatura (273.15 K y 1 atm), un mol de cualquier gas ocupa 22.4 litros."
                        },
                        {
                            topic: "Ley de conservación de la masa",
                            q: "¿Quién estableció la ley de conservación de la masa?",
                            options: ["Proust", "Lavoisier", "Dalton", "Richter"],
                            answerIndex: 1,
                            explain: "Antoine Laurent Lavoisier estableció la ley de conservación de la masa: 'En una reacción química, la suma de las masas de los reactivos es igual a la suma de las masas de los productos'."
                        },
                        {
                            topic: "Ley de Proust",
                            q: "¿Qué establece la ley de las proporciones constantes (Proust)?",
                            options: ["La masa se conserva", "Dos elementos se combinan siempre en la misma proporción de masa para formar un compuesto", "Dos elementos pueden combinarse en más de una proporción", "Los pesos de dos sustancias son equivalentes"],
                            answerIndex: 1,
                            explain: "Proust estableció que 'para formar un determinado compuesto, dos o más elementos químicos se unen siempre en la misma proporción de masa'."
                        },
                        {
                            topic: "Equilibrio químico",
                            q: "¿Cuándo se alcanza el equilibrio químico en una reacción reversible?",
                            options: ["Cuando los reactivos se agotan", "Cuando la velocidad de la reacción directa es igual a la velocidad de la reacción inversa", "Cuando la temperatura es constante", "Cuando no hay productos"],
                            answerIndex: 1,
                            explain: "El equilibrio químico se alcanza cuando las velocidades de las reacciones directa e inversa son iguales y las concentraciones de reactivos y productos permanecen constantes."
                        },
                        {
                            topic: "Constante de equilibrio (K)",
                            q: "¿Qué relación expresa la constante de equilibrio (K)?",
                            options: ["La velocidad de reacción", "La relación entre concentraciones de productos y reactivos en equilibrio", "La energía de activación", "El orden de reacción"],
                            answerIndex: 1,
                            explain: "La constante de equilibrio (K) describe la relación entre las concentraciones de los productos y los reactivos en equilibrio químico."
                        },
                        {
                            topic: "Principio de Le Chatelier",
                            q: "¿Qué establece el principio de Le Chatelier?",
                            options: ["La velocidad de reacción aumenta con la temperatura", "Un sistema en equilibrio sometido a un cambio se ajusta para contrarrestar ese cambio", "Los catalizadores afectan el equilibrio", "Las reacciones son irreversibles"],
                            answerIndex: 1,
                            explain: "El principio de Le Chatelier establece que un sistema en equilibrio sometido a un cambio en condiciones externas se ajustará para contrarrestar ese cambio y restaurar el equilibrio."
                        },
                        {
                            topic: "Factor que afecta el equilibrio",
                            q: "¿Qué factores pueden afectar el equilibrio químico?",
                            options: ["Solo la temperatura", "Concentración, presión, temperatura y volumen", "Solo la presión", "Solo los catalizadores"],
                            answerIndex: 1,
                            explain: "Los factores que afectan el equilibrio químico son: concentración de reactivos/productos, presión (en gases), temperatura, volumen y catalizadores (estos últimos afectan velocidad, no posición)."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Cinética Química",
                    desc: "Comprensión de energía cinética, cinética química, ley de rapidez y teoría de las colisiones.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Energía cinética",
                            q: "¿Cuál es la fórmula de la energía cinética?",
                            options: ["Ec = mgh", "Ec = ½ mv²", "Ec = mv", "Ec = m/v²"],
                            answerIndex: 1,
                            explain: "La energía cinética se calcula con la fórmula Ec = ½ mv², donde m es la masa y v la velocidad."
                        },
                        {
                            topic: "Cinética química",
                            q: "¿De qué se ocupa la cinética química?",
                            options: ["De las propiedades de los elementos", "Del estudio de la velocidad o rapidez con que ocurre una reacción química", "De la estructura del átomo", "De los enlaces químicos"],
                            answerIndex: 1,
                            explain: "La cinética química es el área de la química que estudia la velocidad o rapidez con que ocurre una reacción química."
                        },
                        {
                            topic: "Ley de rapidez",
                            q: "¿Qué expresa la ley de rapidez de una reacción?",
                            options: ["El equilibrio químico", "La relación matemática entre la rapidez, la constante de rapidez y las concentraciones de los reactivos", "La energía de activación", "El orden de reacción"],
                            answerIndex: 1,
                            explain: "La ley de rapidez expresa la relación matemática de la rapidez de una reacción con la constante de rapidez y la concentración de los reactivos elevados a alguna potencia."
                        },
                        {
                            topic: "Orden de reacción",
                            q: "¿Cómo se calcula el orden de reacción global?",
                            options: ["Sumando los coeficientes estequiométricos", "Sumando los exponentes a los que se elevan las concentraciones de reactivos en la ley de rapidez", "Multiplicando las concentraciones", "Dividiendo las velocidades"],
                            answerIndex: 1,
                            explain: "El orden de reacción global se define como la suma de los exponentes a los que se elevan todas las concentraciones de reactivos que aparecen en la ley de rapidez."
                        },
                        {
                            topic: "Teoría de las colisiones",
                            q: "¿Qué establece la teoría de las colisiones sobre las reacciones químicas?",
                            options: ["Las reacciones ocurren sin colisiones", "Las reacciones son resultado de las colisiones entre las moléculas de los reactivos", "Solo las colisiones con catalizador producen reacción", "Las colisiones siempre producen reacción"],
                            answerIndex: 1,
                            explain: "Según la teoría de las colisiones, las reacciones químicas son resultado de las colisiones entre las moléculas de los reactivos."
                        },
                        {
                            topic: "Efecto de la temperatura",
                            q: "¿Cómo afecta la temperatura a la velocidad de una reacción química?",
                            options: ["No la afecta", "Al incrementar la temperatura aumenta la velocidad de reacción", "Al incrementar la temperatura disminuye la velocidad", "Solo afecta a reacciones específicas"],
                            answerIndex: 1,
                            explain: "Al incrementar la temperatura, incrementa la energía cinética de las moléculas, lo que aumenta la velocidad de las reacciones químicas."
                        },
                        {
                            topic: "Efecto de la concentración",
                            q: "Según la teoría de las colisiones, ¿qué relación existe entre la concentración y la rapidez de reacción?",
                            options: ["No hay relación", "La rapidez es inversamente proporcional a la concentración", "La rapidez es directamente proporcional al número de colisiones moleculares", "La rapidez depende solo de la temperatura"],
                            answerIndex: 2,
                            explain: "Según la teoría de las colisiones, la rapidez de una reacción es directamente proporcional al número de colisiones moleculares por segundo (frecuencia de colisiones)."
                        },
                        {
                            topic: "Unidad de energía cinética",
                            q: "¿En qué unidad se mide la energía cinética en el Sistema Internacional?",
                            options: ["Newton (N)", "Joule (J)", "Watt (W)", "Pascal (Pa)"],
                            answerIndex: 1,
                            explain: "La energía cinética se mide en Joules (J) en el Sistema Internacional."
                        },
                        {
                            topic: "Aplicación de la cinética química",
                            q: "¿Para qué es útil el conocimiento de la rapidez de las reacciones?",
                            options: ["Solo para teoría", "Para el diseño de fármacos, control de contaminación y procesamiento de alimentos", "Solo para fines académicos", "Solo para la industria minera"],
                            answerIndex: 1,
                            explain: "El conocimiento de la rapidez de las reacciones es de gran utilidad para el diseño de fármacos, el control de la contaminación y el procesamiento de alimentos."
                        },
                        {
                            topic: "Ejemplo de aumento de velocidad",
                            q: "¿Por qué se cuece más rápido un huevo a 100°C que a 80°C?",
                            options: ["Por mayor presión", "Por mayor energía cinética molecular al aumentar la temperatura", "Por mayor volumen", "Por mayor concentración de sal"],
                            answerIndex: 1,
                            explain: "Al aumentar la temperatura, incrementa la energía cinética de las moléculas, aumentando la velocidad de las reacciones químicas, por lo que el huevo se cuece más rápido."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Importancia de las Reacciones Químicas en el Ambiente",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Química Nuclear y Radioactividad",
                    desc: "Comprensión de radioactividad, tipos de radiación, fisión y fusión nuclear.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Radioactividad",
                            q: "¿Qué es la radioactividad?",
                            options: ["La emisión de luz por los átomos", "La emisión espontánea de partículas y/o radiación electromagnética por núcleos inestables", "La reacción de los átomos con el oxígeno", "La formación de moléculas"],
                            answerIndex: 1,
                            explain: "La radioactividad es el fenómeno en el que núcleos inestables emiten partículas y/o radiación electromagnética espontáneamente."
                        },
                        {
                            topic: "Elementos radiactivos",
                            q: "¿Qué elementos son generalmente radiactivos?",
                            options: ["Todos los elementos", "Los que tienen número atómico menor a 83", "Los que tienen número atómico mayor a 83", "Solo los gases nobles"],
                            answerIndex: 2,
                            explain: "Todos los elementos que tienen un número atómico mayor que 83 son radioactivos."
                        },
                        {
                            topic: "Radiación no ionizante",
                            q: "¿Qué es la radiación no ionizante?",
                            options: ["Radiación que arranca electrones", "Radiación de menor intensidad cuya energía no es suficiente para arrancar electrones", "Radiación que solo emiten los reactores nucleares", "Radiación que es siempre peligrosa"],
                            answerIndex: 1,
                            explain: "La radiación no ionizante es un tipo de radiación de menor intensidad, cuya energía no es suficiente para arrancar electrones de los átomos o moléculas."
                        },
                        {
                            topic: "Radiación ionizante",
                            q: "¿Qué efecto tiene la radiación ionizante sobre la materia?",
                            options: ["Calienta la materia", "Produce cambios a nivel atómico, arrancando electrones y creando iones", "Refleja la luz", "No produce efectos"],
                            answerIndex: 1,
                            explain: "La radiación ionizante tiene energía capaz de arrancar electrones de los átomos o moléculas, produciendo cambios a nivel atómico y generando iones."
                        },
                        {
                            topic: "Partículas alfa",
                            q: "¿Qué son las partículas alfa?",
                            options: ["Electrones de alta energía", "Núcleos de helio (2 protones y 2 neutrones)", "Neutrones libres", "Rayos electromagnéticos"],
                            answerIndex: 1,
                            explain: "Las partículas alfa son núcleos de helio compuestos por dos protones y dos neutrones, emitidas durante la desintegración radiactiva."
                        },
                        {
                            topic: "Partículas beta",
                            q: "¿Qué son las partículas beta?",
                            options: ["Núcleos de helio", "Electrones emitidos por núcleos inestables", "Neutrones", "Rayos gamma"],
                            answerIndex: 1,
                            explain: "Las partículas beta son electrones emitidos por núcleos inestables durante la desintegración radiactiva, más penetrantes que las partículas alfa."
                        },
                        {
                            topic: "Rayos gamma",
                            q: "¿Qué son los rayos gamma?",
                            options: ["Partículas con carga positiva", "Partículas con carga negativa", "Radiación electromagnética similar a los rayos X", "Neutrones"],
                            answerIndex: 2,
                            explain: "Los rayos gamma son un tipo de radiación electromagnética, similar a los rayos X, utilizados en aplicaciones como el tratamiento del cáncer."
                        },
                        {
                            topic: "Fisión nuclear",
                            q: "¿Qué ocurre en la fisión nuclear?",
                            options: ["Dos núcleos ligeros se combinan", "Un núcleo pesado se divide en dos o más núcleos más ligeros", "Los núcleos emiten radiación gamma", "Los electrones se transfieren"],
                            answerIndex: 1,
                            explain: "La fisión nuclear ocurre cuando un núcleo pesado (como uranio-235) se divide en dos o más núcleos de átomos más ligeros, liberando neutrones, rayos gamma y grandes cantidades de energía."
                        },
                        {
                            topic: "Fusión nuclear",
                            q: "¿Dónde ocurre la fusión nuclear de forma natural?",
                            options: ["En los reactores nucleares", "En las bombas atómicas", "En el Sol", "En los aceleradores de partículas"],
                            answerIndex: 2,
                            explain: "La fusión nuclear ocurre naturalmente en el Sol, donde dos núcleos atómicos ligeros se combinan a temperaturas muy altas para formar un núcleo más pesado."
                        },
                        {
                            topic: "Reacción en cadena",
                            q: "¿Qué es una reacción nuclear en cadena?",
                            options: ["Una reacción que no se propaga", "Una secuencia autosostenida de reacciones de fisión nuclear", "Una reacción que requiere catalizador", "Una reacción endotérmica"],
                            answerIndex: 1,
                            explain: "Una reacción nuclear en cadena es una secuencia autosostenida de reacciones de fisión nuclear que se produce cuando hay suficientes núcleos para alcanzar una masa crítica."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Química del Aire y Contaminación",
                    desc: "Identificación de la composición del aire, contaminantes primarios y secundarios, esmog fotoquímico, IMECA y lluvia ácida.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Composición del aire",
                            q: "¿Qué porcentaje de oxígeno (O₂) contiene la atmósfera terrestre?",
                            options: ["71%", "21%", "1%", "50%"],
                            answerIndex: 1,
                            explain: "El oxígeno forma el 21% de los componentes del aire, mientras que el nitrógeno (N₂) constituye el 71%."
                        },
                        {
                            topic: "Origen del oxígeno atmosférico",
                            q: "¿Qué proceso biológico liberó el oxígeno a la atmósfera terrestre?",
                            options: ["Respiración", "Fotosíntesis", "Combustión", "Fermentación"],
                            answerIndex: 1,
                            explain: "La fotosíntesis realizada por organismos primitivos liberó oxígeno como producto secundario, enriqueciendo la atmósfera."
                        },
                        {
                            topic: "Contaminantes primarios",
                            q: "¿Qué son los contaminantes primarios del aire?",
                            options: ["Los que se forman por reacciones fotoquímicas", "Los gases que se emiten directamente a la atmósfera (NO, CO, hidrocarburos)", "Los que son inertes", "Los que provienen solo de erupciones volcánicas"],
                            answerIndex: 1,
                            explain: "Los contaminantes primarios son gases que escapan directamente de los automóviles e industrias, como NO, CO y varios hidrocarburos."
                        },
                        {
                            topic: "Esmog fotoquímico",
                            q: "¿Qué tipo de esmog se forma por la reacción de gases de automóviles con luz solar?",
                            options: ["Esmog industrial", "Esmog fotoquímico", "Esmog sulfuroso", "Esmog radiactivo"],
                            answerIndex: 1,
                            explain: "El esmog fotoquímico se forma por la reacción de los gases que emanan de los automóviles (NO, CO, hidrocarburos) en presencia de la luz solar."
                        },
                        {
                            topic: "IMECA",
                            q: "¿Qué significa la sigla IMECA?",
                            options: ["Índice de Mediciones Climáticas Ambientales", "Índice para la Medición de la Calidad del Aire", "Índice de Monitoreo Ecológico", "Investigación de Medición Ambiental"],
                            answerIndex: 1,
                            explain: "El IMECA es el Índice para la Medición de la Calidad del Aire, utilizado en México para informar a la población sobre la calidad del aire."
                        },
                        {
                            topic: "Lluvia ácida",
                            q: "¿Qué ácidos se forman durante la lluvia ácida?",
                            options: ["Ácido cítrico y acético", "Ácido sulfúrico (H₂SO₄) y ácido clorhídrico (HCl)", "Ácido carbónico y ácido nítrico", "Ácido fosfórico y sulfúrico"],
                            answerIndex: 1,
                            explain: "Los materiales tóxicos suspendidos en la atmósfera reaccionan con la humedad originando ácidos como el ácido sulfúrico (H₂SO₄) y el ácido clorhídrico (HCl)."
                        },
                        {
                            topic: "Contaminantes domésticos",
                            q: "¿Cuál es un contaminante común en espacios cerrados?",
                            options: ["Ozono", "Radón (Rn)", "Clorofluorocarbonos", "Metano"],
                            answerIndex: 1,
                            explain: "Entre los contaminantes domésticos más comunes se encuentran radón (Rn), monóxido de carbono, dióxido de carbono y formaldehído."
                        },
                        {
                            topic: "IMECA - categorías",
                            q: "¿Qué intervalo de IMECA se considera 'Buena' calidad del aire?",
                            options: ["0-50", "51-100", "101-150", "151-200"],
                            answerIndex: 0,
                            explain: "El intervalo de 0-50 se considera 'Buena' calidad del aire, sin riesgo para la salud."
                        },
                        {
                            topic: "Contaminante secundario",
                            q: "¿Cuál es un ejemplo de contaminante secundario?",
                            options: ["Monóxido de carbono (CO)", "Óxido nítrico (NO)", "Ozono (O₃)", "Hidrocarburos"],
                            answerIndex: 2,
                            explain: "Los contaminantes secundarios como el NO₂ y el O₃ se forman por reacciones fotoquímicas a partir de contaminantes primarios."
                        },
                        {
                            topic: "Lluvia ácida - consecuencias",
                            q: "¿Cuál es una consecuencia de la lluvia ácida?",
                            options: ["Mejora la calidad del suelo", "Corroe hojas, cortezas, agua y suelo", "Aumenta la biodiversidad", "Fertiliza los cultivos"],
                            answerIndex: 1,
                            explain: "La lluvia ácida corroe las hojas y cortezas, el agua y el suelo, impactando negativamente en la vida terrestre y acuática."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Impacto Ambiental de las Reacciones Químicas",
                    desc: "Análisis del DDT, Sistema Globalmente Armonizado, desarrollo sustentable y octanaje de combustible.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "DDT",
                            q: "¿Para qué fue utilizado inicialmente el DDT?",
                            options: ["Como fertilizante", "Como insecticida para exterminar plagas y erradicar enfermedades", "Como combustible", "Como conservador de alimentos"],
                            answerIndex: 1,
                            explain: "El DDT se usó como insecticida para exterminar plagas, aumentar la producción de cosechas y erradicar enfermedades al extinguir sus vectores."
                        },
                        {
                            topic: "Efectos del DDT en el ambiente",
                            q: "¿Dónde se acumula el DDT en los animales?",
                            options: ["En los huesos", "En el tejido adiposo y otros órganos", "En la sangre", "En el sistema digestivo"],
                            answerIndex: 1,
                            explain: "El DDT se acumula dentro del tejido adiposo como en otros órganos de los animales, ataca el sistema nervioso, provocando la muerte."
                        },
                        {
                            topic: "Sistema Globalmente Armonizado (ONU)",
                            q: "¿Qué organismo de la ONU revisa los peligros de sustancias químicas como el DDT?",
                            options: ["UNESCO", "Sistema Globalmente Armonizado", "OMS", "PNUMA"],
                            answerIndex: 1,
                            explain: "En 2002, las Naciones Unidas creó el Sistema Globalmente Armonizado, que revisa periódicamente los peligros de sustancias químicas como el DDT."
                        },
                        {
                            topic: "Desarrollo sustentable",
                            q: "¿Qué busca el desarrollo sustentable frente a los problemas de contaminación?",
                            options: ["Ignorar los problemas", "Ser la respuesta a los problemas generados por compuestos químicos, su uso y reacciones químicas durante su obtención", "Aumentar el uso de químicos", "Reducir la producción industrial"],
                            answerIndex: 1,
                            explain: "El desarrollo sustentable es la respuesta a los problemas generados por los compuestos químicos, no solo a su uso, sino también a las reacciones químicas presentes durante su obtención."
                        },
                        {
                            topic: "Octanaje de la gasolina",
                            q: "¿Qué mide el octanaje de un combustible?",
                            options: ["El contenido de carbono", "La resistencia a la detonación prematura en la cámara de combustión", "La cantidad de energía liberada", "La densidad del combustible"],
                            answerIndex: 1,
                            explain: "El octanaje mide la resistencia de un combustible a la detonación prematura en la cámara de combustión de un motor de combustión interna."
                        },
                        {
                            topic: "Octanaje y eficiencia",
                            q: "Según el texto, ¿en qué porcentaje puede reducir el consumo de combustible aumentar el octanaje?",
                            options: ["3%", "5%", "7%", "10%"],
                            answerIndex: 2,
                            explain: "Según un estudio de la Sociedad de Ingenieros Automotrices, aumentar el octanaje de la gasolina puede reducir el consumo de combustible en un 7%."
                        },
                        {
                            topic: "Octanaje y emisiones de CO₂",
                            q: "¿Cuántas toneladas anuales de CO₂ podrían reducirse al aumentar el octanaje de la gasolina?",
                            options: ["5 millones", "10 millones", "20 millones", "50 millones"],
                            answerIndex: 2,
                            explain: "Aumentar el octanaje podría reducir las emisiones de CO₂ en 20 millones de toneladas anuales en los vehículos de combustión."
                        },
                        {
                            topic: "Contaminación y DDT",
                            q: "¿Por qué el DDT no es selectivo en su acción?",
                            options: ["Solo mata insectos plaga", "Provoca la muerte no solo del insecto plaga sino también de insectos benéficos y otros organismos", "Solo afecta a los mamíferos", "No afecta a otros organismos"],
                            answerIndex: 1,
                            explain: "El DDT no es selectivo; provoca no solo la muerte del insecto plaga, sino la de insectos benéficos y, en mediano y largo plazo, a otros organismos como peces, aves y mamíferos."
                        },
                        {
                            topic: "Combustibles de mayor calidad",
                            q: "¿Qué número de octano RON se propone para reducir emisiones?",
                            options: ["95", "98", "102", "110"],
                            answerIndex: 2,
                            explain: "Una de las opciones es aumentar el número RON a 102 octanos para promover combustibles de mayor calidad."
                        },
                        {
                            topic: "Actitud frente a la contaminación",
                            q: "¿Qué actitud se recomienda frente a los problemas de contaminación?",
                            options: ["Indiferente", "Crítica, participativa y reflexiva", "Derrotista", "Conformista"],
                            answerIndex: 1,
                            explain: "Los resultados siempre serán más efectivos con una actitud crítica, participativa y reflexiva ante los problemas generales de contaminación que se tienen en el presente."
                        }
                    ]
                }
            }
        }
    }
};

export default reaccionesQuimicas;