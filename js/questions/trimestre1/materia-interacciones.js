// ============================================
// LA MATERIA Y SUS INTERACCIONES I - TRIMESTRE 1
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const materiaInteracciones1 = {
    id: "materia1",
    nombre: "LA MATERIA Y SUS INTERACCIONES I",
    icono: "⚛️",
    descripcion: "Propiedades de la materia, modelos atómicos, calor, ciclos biogeoquímicos",
    modulos: {
        // ========== MÓDULO 1: LA MATERIA Y SUS PROPIEDADES ==========
        modulo1: {
            nombre: "Módulo 1: La Materia y sus Propiedades",
            actividades: {
                // ACTIVIDAD 1: Propiedades de la materia, estados de agregación
                act1: {
                    nombre: "Actividad 1: Propiedades y estados de la materia",
                    desc: "Definición de materia, propiedades generales, particulares, específicas, físicas, químicas, intensivas, extensivas, estados de agregación",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Materia",
                            q: "¿Qué es la materia?",
                            options: [
                                "Todo lo que tiene energía",
                                "Todo lo que ocupa un lugar en el espacio y tiene masa",
                                "Solo lo que se puede ver y tocar",
                                "Todo lo que tiene volumen"
                            ],
                            answerIndex: 1,
                            explain: "La materia se define como todo aquello que ocupa un lugar en el espacio y tiene masa."
                        },
                        {
                            topic: "Propiedades",
                            q: "¿Qué tipo de propiedad de la materia se puede observar sin modificar su composición?",
                            options: [
                                "Propiedad química",
                                "Propiedad física",
                                "Propiedad general",
                                "Propiedad particular"
                            ],
                            answerIndex: 1,
                            explain: "Las propiedades físicas son el conjunto de características que se pueden observar o medir en los materiales sin modificar su composición."
                        },
                        {
                            topic: "Propiedades",
                            q: "¿Qué tipo de propiedad presenta la materia al transformarse en otras sustancias diferentes alterando su estructura?",
                            options: [
                                "Propiedad física",
                                "Propiedad química",
                                "Propiedad extensiva",
                                "Propiedad intensiva"
                            ],
                            answerIndex: 1,
                            explain: "Las propiedades químicas las presenta la materia al transformarse de una sustancia a otras diferentes alterando su estructura."
                        },
                        {
                            topic: "Propiedades",
                            q: "¿Qué tipo de propiedad depende de la cantidad de materia?",
                            options: [
                                "Propiedad intensiva",
                                "Propiedad específica",
                                "Propiedad extensiva",
                                "Propiedad particular"
                            ],
                            answerIndex: 2,
                            explain: "Las propiedades extensivas dependen de la cantidad de materia, por ejemplo: masa, peso, volumen."
                        },
                        {
                            topic: "Propiedades",
                            q: "¿Qué tipo de propiedad NO depende de la cantidad de masa?",
                            options: [
                                "Propiedad extensiva",
                                "Propiedad intensiva",
                                "Propiedad general",
                                "Propuesta química"
                            ],
                            answerIndex: 1,
                            explain: "Las propiedades intensivas no dependen de la cantidad de masa que se estudie, por ejemplo: densidad, punto de ebullición."
                        },
                        {
                            topic: "Estados de agregación",
                            q: "¿Qué característica tienen los sólidos?",
                            options: [
                                "Forma indefinida y volumen definido",
                                "Forma y volumen definido",
                                "Sin forma ni volumen definido",
                                "Volumen indefinido"
                            ],
                            answerIndex: 1,
                            explain: "Los sólidos se caracterizan por tener forma y volumen definido, sus moléculas están fuertemente unidas."
                        },
                        {
                            topic: "Estados de agregación",
                            q: "¿Qué característica tienen los líquidos?",
                            options: [
                                "Forma y volumen definido",
                                "Forma indefinida y volumen definido",
                                "Sin forma ni volumen definido",
                                "Forma definida y volumen indefinido"
                            ],
                            answerIndex: 1,
                            explain: "Los líquidos tienen forma indefinida (adoptan la forma del recipiente) pero volumen definido."
                        },
                        {
                            topic: "Estados de agregación",
                            q: "¿Qué característica tienen los gases?",
                            options: [
                                "Forma y volumen definido",
                                "Forma indefinida y volumen definido",
                                "Sin forma ni volumen definido",
                                "Forma definida y volumen indefinido"
                            ],
                            answerIndex: 2,
                            explain: "Los gases no tienen forma ni volumen definido, sus moléculas están muy separadas y se mueven libremente."
                        },
                        {
                            topic: "Plasma",
                            q: "¿Cuál es el cuarto estado de la materia?",
                            options: [
                                "Sólido amorfo",
                                "Líquido cristalino",
                                "Plasma",
                                "Gas noble"
                            ],
                            answerIndex: 2,
                            explain: "El cuarto estado de la materia se llama Plasma, se caracteriza por tener gran cantidad de energía y temperaturas muy altas."
                        },
                        {
                            topic: "Fluidos",
                            q: "¿Qué son los fluidos?",
                            options: [
                                "Solo los líquidos",
                                "Sustancias capaces de fluir que se adaptan a la forma del recipiente",
                                "Solo los gases",
                                "Los sólidos y líquidos"
                            ],
                            answerIndex: 1,
                            explain: "Los fluidos son sustancias capaces de fluir y que se adaptan a la forma de los recipientes que los contienen, incluye líquidos y gases."
                        }
                    ]
                },
                // ACTIVIDAD 2: Ley conservación, sustancias puras, mezclas, métodos separación
                act2: {
                    nombre: "Actividad 2: Sustancias puras, mezclas y métodos de separación",
                    desc: "Ley de conservación de la masa, elementos, compuestos, mezclas homogéneas y heterogéneas, métodos de separación",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Ley de conservación",
                            q: "¿Quiénes formularon la Ley de Conservación de la Masa?",
                            options: [
                                "Dalton y Rutherford",
                                "Lomonósov y Lavoisier",
                                "Bohr y Schrödinger",
                                "Thomson y Chadwick"
                            ],
                            answerIndex: 1,
                            explain: "La Ley de Conservación de la Masa fue formulada por Mijaíl Lomonósov (1745) y Antoine Lavoisier (1785)."
                        },
                        {
                            topic: "Ley de conservación",
                            q: "¿Qué establece la Ley de Conservación de la Masa?",
                            options: [
                                "La masa se crea y se destruye",
                                "En un sistema aislado, la masa total permanece constante",
                                "La masa de los productos es mayor que los reactivos",
                                "La masa de los reactivos es mayor que los productos"
                            ],
                            answerIndex: 1,
                            explain: "La ley establece que en un sistema aislado, durante toda reacción química, la masa total permanece constante."
                        },
                        {
                            topic: "Sustancias puras",
                            q: "¿Qué son los elementos?",
                            options: [
                                "Combinación de dos o más sustancias",
                                "Tipo de materia más simple, formado por átomos de la misma especie",
                                "Mezcla de varias sustancias",
                                "Compuestos químicos"
                            ],
                            answerIndex: 1,
                            explain: "Los elementos son el tipo de materia más simple, están formados de átomos de la misma especie y no se pueden descomponer en sustancias más sencillas."
                        },
                        {
                            topic: "Compuestos",
                            q: "¿Qué son los compuestos?",
                            options: [
                                "Mezclas de elementos",
                                "Sustancias puras formadas por la unión de dos o más elementos en proporciones definidas",
                                "Elementos en estado puro",
                                "Mezclas homogéneas"
                            ],
                            answerIndex: 1,
                            explain: "Los compuestos son sustancias puras que se forman por la unión de dos o más elementos en proporciones definidas."
                        },
                        {
                            topic: "Mezclas",
                            q: "¿Qué característica tienen las mezclas homogéneas?",
                            options: [
                                "Tienen varias fases visibles",
                                "Se presentan en una sola fase y son uniformes",
                                "Sus componentes se ven a simple vista",
                                "Son siempre sólidas"
                            ],
                            answerIndex: 1,
                            explain: "Las mezclas homogéneas se presentan en una sola fase y son uniformes en toda su masa, también se llaman disoluciones."
                        },
                        {
                            topic: "Mezclas",
                            q: "¿Qué son las suspensiones?",
                            options: [
                                "Mezclas homogéneas",
                                "Mezclas heterogéneas con partículas pequeñas suspendidas que sedimentan",
                                "Compuestos químicos",
                                "Elementos puros"
                            ],
                            answerIndex: 1,
                            explain: "Las suspensiones son un tipo de mezcla heterogénea que contiene partículas pequeñas suspendidas que pueden sedimentarse por efecto de la gravedad."
                        },
                        {
                            topic: "Métodos de separación",
                            q: "¿Qué método se utiliza para separar un sólido de grano grueso de un líquido, vertiendo el líquido después de sedimentar?",
                            options: [
                                "Filtración",
                                "Decantación",
                                "Tamizado",
                                "Centrifugación"
                            ],
                            answerIndex: 1,
                            explain: "La decantación consiste en verter el componente líquido después de que ha sedimentado el sólido."
                        },
                        {
                            topic: "Métodos de separación",
                            q: "¿Qué método separa mezclas sólidas por diferencia de tamaño de partículas?",
                            options: [
                                "Filtración",
                                "Decantación",
                                "Tamizado",
                                "Imantación"
                            ],
                            answerIndex: 2,
                            explain: "El tamizado se emplea cuando la mezcla está formada por sólidos con partículas de diferentes tamaños, usando un tamiz o colador."
                        },
                        {
                            topic: "Métodos de separación",
                            q: "¿Qué método aprovecha las propiedades magnéticas de algunos materiales?",
                            options: [
                                "Decantación",
                                "Centrifugación",
                                "Imantación",
                                "Cromatografía"
                            ],
                            answerIndex: 2,
                            explain: "La imantación aprovecha la propiedad de algunos materiales de ser atraídos por un campo magnético."
                        },
                        {
                            topic: "Métodos de separación",
                            q: "¿Qué método separa líquidos por diferencia en sus puntos de ebullición?",
                            options: [
                                "Evaporación",
                                "Cristalización",
                                "Destilación",
                                "Sublimación"
                            ],
                            answerIndex: 2,
                            explain: "La destilación separa sustancias líquidas a partir de la diferencia en sus puntos de ebullición."
                        }
                    ]
                },
                // ACTIVIDAD 3: Unidades de concentración
                act3: {
                    nombre: "Actividad 3: Unidades de concentración",
                    desc: "Concentración, unidades físicas y químicas, porcentajes, ppm, molaridad, molalidad, fracción molar, normalidad",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Concentración",
                            q: "¿Qué indican las unidades físicas de concentración?",
                            options: [
                                "El número de átomos o moléculas",
                                "La masa o volumen del soluto en una cantidad fija de disolvente",
                                "Los equivalentes gramo",
                                "Los moles de soluto"
                            ],
                            answerIndex: 1,
                            explain: "Las unidades físicas indican la masa o volumen del soluto en una cantidad fija de disolvente (nivel macroscópico)."
                        },
                        {
                            topic: "Concentración",
                            q: "¿Qué significa % m/m?",
                            options: [
                                "Gramos de soluto en 100 mL de disolución",
                                "Partes de masa de soluto en 100 partes de masa de disolución",
                                "Mililitros de soluto en 100 mL de disolución",
                                "Gramos de soluto en 1000 mL"
                            ],
                            answerIndex: 1,
                            explain: "% m/m (porcentaje masa-masa) son las partes de masa de soluto disueltas en 100 partes de masa de disolución."
                        },
                        {
                            topic: "Concentración",
                            q: "¿Qué significa ppm?",
                            options: [
                                "Partes por millón",
                                "Porcentaje por mil",
                                "Partes por mil",
                                "Peso por molécula"
                            ],
                            answerIndex: 0,
                            explain: "ppm significa partes por millón (partes de un componente en 1,000,000 de partes de disolución)."
                        },
                        {
                            topic: "Molaridad",
                            q: "¿Qué significa M (molaridad)?",
                            options: [
                                "Moles de soluto por kilogramo de disolvente",
                                "Moles de soluto por litro de disolución",
                                "Gramos de soluto por litro",
                                "Equivalentes por litro"
                            ],
                            answerIndex: 1,
                            explain: "La molaridad (M) es el número de moles de soluto contenidos en un litro de disolución."
                        },
                        {
                            topic: "Molalidad",
                            q: "¿Qué significa m (molalidad)?",
                            options: [
                                "Moles de soluto por litro de disolución",
                                "Moles de soluto por kilogramo de disolvente",
                                "Gramos de soluto por kilogramo",
                                "Equivalentes por kilogramo"
                            ],
                            answerIndex: 1,
                            explain: "La molalidad (m) es el número de moles de soluto contenidos en un kilogramo de disolvente."
                        },
                        {
                            topic: "Fracción molar",
                            q: "¿Qué representa la fracción molar (X)?",
                            options: [
                                "Moles de soluto por litro",
                                "Moles de un componente entre moles totales",
                                "Gramos de soluto entre gramos totales",
                                "Volumen de soluto entre volumen total"
                            ],
                            answerIndex: 1,
                            explain: "La fracción molar es la relación entre los moles de un componente y los moles totales de la disolución. La suma de todas las fracciones molares es 1."
                        },
                        {
                            topic: "Normalidad",
                            q: "¿Qué significa N (normalidad)?",
                            options: [
                                "Moles de soluto por litro",
                                "Equivalentes de soluto por litro de disolución",
                                "Gramos de soluto por litro",
                                "Moles por kilogramo"
                            ],
                            answerIndex: 1,
                            explain: "La normalidad es la cantidad de equivalentes de soluto presentes en un litro de disolución."
                        },
                        {
                            topic: "Ejercicio",
                            q: "Si se disuelven 50g de etanol para obtener 300ml de disolución, ¿cuál es el % m/V?",
                            options: [
                                "10.5%",
                                "16.67%",
                                "20%",
                                "25%"
                            ],
                            answerIndex: 1,
                            explain: "% m/V = (g soluto / mL disolución) × 100 = (50/300) × 100 = 16.67%"
                        },
                        {
                            topic: "Ejercicio",
                            q: "¿Cuántas ppm hay en 2.5L de agua con 125mg de Cl-?",
                            options: [
                                "25 ppm",
                                "50 ppm",
                                "75 ppm",
                                "100 ppm"
                            ],
                            answerIndex: 1,
                            explain: "ppm = (g soluto / mL) × 1,000,000 = (0.125g / 2500mL) × 1,000,000 = 50 ppm"
                        },
                        {
                            topic: "Ejercicio",
                            q: "¿Cuál es la molaridad de una solución con 80g de NaOH (masa molar 40g/mol) en 0.5L?",
                            options: [
                                "2M",
                                "4M",
                                "6M",
                                "8M"
                            ],
                            answerIndex: 1,
                            explain: "Moles = 80g / 40 g/mol = 2 moles; M = moles/L = 2/0.5 = 4M"
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2: LA INFLUENCIA DE LA ENERGÍA EN LOS CAMBIOS DE LA MATERIA ==========
        modulo2: {
            nombre: "Módulo 2: La influencia de la energía en los cambios de la materia",
            actividades: {
                // ACTIVIDAD 1: Modelos atómicos, partículas subatómicas
                act1: {
                    nombre: "Actividad 1: Modelos atómicos",
                    desc: "Teorías atómicas de Dalton, Thomson, Rutherford, Bohr, Schrödinger, partículas subatómicas",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Modelos atómicos",
                            q: "¿Quién propuso la primera teoría atómica en 1803?",
                            options: [
                                "Thomson",
                                "Dalton",
                                "Rutherford",
                                "Bohr"
                            ],
                            answerIndex: 1,
                            explain: "John Dalton formuló la primera teoría atómica en 1803."
                        },
                        {
                            topic: "Dalton",
                            q: "Según Dalton, ¿cómo son los átomos de un mismo elemento?",
                            options: [
                                "Diferentes en masa",
                                "Idénticos en masa y propiedades",
                                "Pueden variar",
                                "Indestructibles pero diferentes"
                            ],
                            answerIndex: 1,
                            explain: "Dalton postuló que los átomos de los mismos elementos son idénticos en masa, proporciones y tienen las mismas propiedades."
                        },
                        {
                            topic: "Thomson",
                            q: "¿Qué partícula descubrió Thomson en 1897?",
                            options: [
                                "Protón",
                                "Neutrón",
                                "Electrón",
                                "Quark"
                            ],
                            answerIndex: 2,
                            explain: "Thomson descubrió el electrón mediante experimentos con rayos catódicos."
                        },
                        {
                            topic: "Thomson",
                            q: "¿Cómo describía Thomson su modelo atómico?",
                            options: [
                                "Núcleo denso con electrones alrededor",
                                "Esfera positiva con electrones incrustados",
                                "Órbitas circulares cuantizadas",
                                "Orbitales de probabilidad"
                            ],
                            answerIndex: 1,
                            explain: "Thomson propuso un modelo de esfera cargada positivamente con electrones flotando al azar (pastel de pasas)."
                        },
                        {
                            topic: "Rutherford",
                            q: "¿Qué descubrió Rutherford con su experimento de la lámina de oro?",
                            options: [
                                "El electrón",
                                "El núcleo atómico",
                                "Los neutrones",
                                "Los quarks"
                            ],
                            answerIndex: 1,
                            explain: "Rutherford descubrió la existencia del núcleo atómico al observar que algunas partículas alfa rebotaban en la lámina de oro."
                        },
                        {
                            topic: "Bohr",
                            q: "¿Qué incorporó Bohr a su modelo atómico?",
                            options: [
                                "La teoría de cuantos de energía de Planck",
                                "Los orbitales",
                                "Los neutrones",
                                "Los quarks"
                            ],
                            answerIndex: 0,
                            explain: "Bohr incorporó la teoría de cuantos de energía de Max Planck y el efecto fotoeléctrico de Einstein."
                        },
                        {
                            topic: "Schrödinger",
                            q: "¿Qué describe la ecuación de Schrödinger?",
                            options: [
                                "La masa del átomo",
                                "El comportamiento y energía del electrón como onda",
                                "La carga del núcleo",
                                "Los protones"
                            ],
                            answerIndex: 1,
                            explain: "La ecuación de Schrödinger describe el comportamiento y la energía del electrón como ondas de materia."
                        },
                        {
                            topic: "Partículas subatómicas",
                            q: "¿Quién descubrió el neutrón?",
                            options: [
                                "Rutherford",
                                "Thomson",
                                "Chadwick",
                                "Bohr"
                            ],
                            answerIndex: 2,
                            explain: "El neutrón fue descubierto por Chadwick."
                        },
                        {
                            topic: "Partículas subatómicas",
                            q: "¿Qué carga tiene el protón?",
                            options: [
                                "Negativa",
                                "Neutra",
                                "Positiva",
                                "Variable"
                            ],
                            answerIndex: 2,
                            explain: "El protón tiene carga positiva (+)."
                        },
                        {
                            topic: "Partículas subatómicas",
                            q: "¿Dónde se encuentran los electrones?",
                            options: [
                                "En el núcleo",
                                "Girando alrededor del núcleo",
                                "Junto con los protones",
                                "En el núcleo con los neutrones"
                            ],
                            answerIndex: 1,
                            explain: "Los electrones giran alrededor del núcleo atómico."
                        }
                    ]
                },
                // ACTIVIDAD 2: Calor, temperatura, calor específico
                act2: {
                    nombre: "Actividad 2: Calor y temperatura",
                    desc: "Temperatura, calorimetría, capacidad calorífica, calor específico, tabla de calores específicos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Temperatura",
                            q: "¿Qué es la temperatura?",
                            options: [
                                "La cantidad de calor de un cuerpo",
                                "La magnitud que indica qué tan caliente o frío está un cuerpo",
                                "La energía total de un sistema",
                                "El movimiento molecular"
                            ],
                            answerIndex: 1,
                            explain: "La temperatura es la magnitud física que indica qué tan caliente o frío se encuentra un cuerpo o sustancia."
                        },
                        {
                            topic: "Temperatura",
                            q: "¿Qué tipo de propiedad es la temperatura?",
                            options: [
                                "Extensiva",
                                "Intensiva",
                                "Química",
                                "General"
                            ],
                            answerIndex: 1,
                            explain: "La temperatura es independiente de la cantidad de materia, por lo tanto es una propiedad intensiva."
                        },
                        {
                            topic: "Termómetro",
                            q: "¿Quién construyó el primer termómetro?",
                            options: [
                                "Newton",
                                "Galileo Galilei",
                                "Fahrenheit",
                                "Celsius"
                            ],
                            answerIndex: 1,
                            explain: "El primero en construir un termómetro fue Galileo Galilei en 1603."
                        },
                        {
                            topic: "Capacidad calorífica",
                            q: "¿Qué es la capacidad calorífica?",
                            options: [
                                "Calor necesario para elevar 1°C una unidad de masa",
                                "Relación entre calor absorbido e incremento de temperatura",
                                "Calor específico por unidad de volumen",
                                "Energía térmica total"
                            ],
                            answerIndex: 1,
                            explain: "La capacidad calorífica es la relación entre la cantidad de calor absorbido y el incremento de temperatura (C = Q/ΔT)."
                        },
                        {
                            topic: "Calor específico",
                            q: "¿Qué es el calor específico?",
                            options: [
                                "Calor total del sistema",
                                "Cantidad de calor por unidad de masa para elevar 1°C la temperatura",
                                "Capacidad calorífica total",
                                "Energía cinética promedio"
                            ],
                            answerIndex: 1,
                            explain: "El calor específico es la cantidad de energía calorífica que absorbe un cuerpo por unidad de masa para elevar su temperatura 1°C."
                        },
                        {
                            topic: "Calor específico",
                            q: "¿Cuál es el calor específico del agua líquida en cal/g·°C?",
                            options: [
                                "0.5",
                                "0.24",
                                "1.00",
                                "0.09"
                            ],
                            answerIndex: 2,
                            explain: "El calor específico del agua líquida es 1.00 cal/g·°C."
                        },
                        {
                            topic: "Fórmula",
                            q: "¿Cuál es la fórmula para calcular la cantidad de calor?",
                            options: [
                                "Q = m × Ce × ΔT",
                                "Q = m / Ce × ΔT",
                                "Q = Ce / (m × ΔT)",
                                "Q = ΔT / (m × Ce)"
                            ],
                            answerIndex: 0,
                            explain: "La cantidad de calor se calcula con Q = m × Ce × ΔT."
                        },
                        {
                            topic: "Unidades",
                            q: "¿En qué unidades se mide el calor específico?",
                            options: [
                                "J/mol",
                                "cal/g·°C o J/kg·K",
                                "°C/g",
                                "J/°C"
                            ],
                            answerIndex: 1,
                            explain: "El calor específico se mide en cal/g·°C o J/kg·K."
                        },
                        {
                            topic: "Materiales",
                            q: "¿Qué material tiene mayor calor específico según la tabla?",
                            options: [
                                "Aluminio",
                                "Cobre",
                                "Agua",
                                "Hierro"
                            ],
                            answerIndex: 2,
                            explain: "El agua tiene el mayor calor específico (1.00 cal/g·°C), lo que significa que requiere más energía para calentarse."
                        },
                        {
                            topic: "Ejemplo",
                            q: "Para calcular el calor necesario para calentar 3500g de cobre de 20°C a 100°C, ¿qué datos se necesitan?",
                            options: [
                                "Masa, calor específico del cobre y ΔT",
                                "Solo masa y ΔT",
                                "Volumen y densidad",
                                "Presión y temperatura"
                            ],
                            answerIndex: 0,
                            explain: "Se necesita la masa (3500g), el calor específico del cobre (0.093 cal/g·°C) y el cambio de temperatura (80°C)."
                        }
                    ]
                },
                // ACTIVIDAD 3: Cambios de fase, calor latente, presión atmosférica
                act3: {
                    nombre: "Actividad 3: Cambios de fase y presión",
                    desc: "Cambios de estado, calor latente de fusión y vaporización, presión atmosférica, barómetros",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Cambios de fase",
                            q: "¿Qué ocurre durante un cambio de fase?",
                            options: [
                                "Aumenta la temperatura constantemente",
                                "La energía se usa para vencer fuerzas intermoleculares sin cambiar la temperatura",
                                "Disminuye la energía interna",
                                "Las moléculas dejan de moverse"
                            ],
                            answerIndex: 1,
                            explain: "Durante el cambio de fase, la energía se emplea para vencer las fuerzas intermoleculares y no aumenta la temperatura."
                        },
                        {
                            topic: "Cambios de fase",
                            q: "¿Cómo se llama el cambio de sólido a líquido?",
                            options: [
                                "Solidificación",
                                "Fusión",
                                "Evaporación",
                                "Sublimación"
                            ],
                            answerIndex: 1,
                            explain: "El cambio de sólido a líquido se llama fusión."
                        },
                        {
                            topic: "Calor latente",
                            q: "¿Qué es el calor latente?",
                            options: [
                                "Calor necesario para cambiar la temperatura",
                                "Cantidad de calor para un cambio de fase por unidad de masa",
                                "Calor específico por mol",
                                "Energía cinética molecular"
                            ],
                            answerIndex: 1,
                            explain: "El calor latente es la cantidad de calor que se necesita para un cambio de fase por unidad de masa (L = Q/m)."
                        },
                        {
                            topic: "Calor latente",
                            q: "¿Cómo se llama el calor latente para el cambio de sólido a líquido?",
                            options: [
                                "Calor de vaporización",
                                "Calor de fusión",
                                "Calor de sublimación",
                                "Calor de condensación"
                            ],
                            answerIndex: 1,
                            explain: "El cambio de sólido a líquido requiere calor latente de fusión (Lf)."
                        },
                        {
                            topic: "Calor latente",
                            q: "¿Cuál es el calor latente de fusión del agua en kJ/kg?",
                            options: [
                                "2260",
                                "334",
                                "106",
                                "214"
                            ],
                            answerIndex: 1,
                            explain: "El calor latente de fusión del agua es 334 kJ/kg."
                        },
                        {
                            topic: "Ejercicio",
                            q: "¿Cuánto calor se requiere para fundir 20 kg de cobre si Lf = 22.5 kJ/kg?",
                            options: [
                                "225 kJ",
                                "450 kJ",
                                "675 kJ",
                                "900 kJ"
                            ],
                            answerIndex: 1,
                            explain: "Q = Lf × m = 22.5 kJ/kg × 20 kg = 450 kJ."
                        },
                        {
                            topic: "Presión atmosférica",
                            q: "¿Qué es la presión atmosférica?",
                            options: [
                                "Presión en el fondo del mar",
                                "El peso del aire que ejerce presión sobre la Tierra",
                                "Presión dentro de un recipiente",
                                "Fuerza de gravedad"
                            ],
                            answerIndex: 1,
                            explain: "La presión atmosférica es el aire que se encuentra en la Tierra y que ejerce una presión sobre ella."
                        },
                        {
                            topic: "Presión atmosférica",
                            q: "¿Con qué instrumento se mide la presión atmosférica?",
                            options: [
                                "Termómetro",
                                "Barómetro",
                                "Manómetro",
                                "Higrómetro"
                            ],
                            answerIndex: 1,
                            explain: "La presión atmosférica se mide con barómetros (de mercurio o aneroides)."
                        },
                        {
                            topic: "Clima",
                            q: "¿Qué clima se espera cuando la presión atmosférica es alta?",
                            options: [
                                "Nublado y lluvioso",
                                "Soleado y sin lluvia",
                                "Tormentas",
                                "Viento fuerte"
                            ],
                            answerIndex: 1,
                            explain: "Cuando la presión atmosférica es alta, el clima es soleado y sin lluvia."
                        },
                        {
                            topic: "Fórmula",
                            q: "¿Cómo se calcula la presión atmosférica?",
                            options: [
                                "P = altura × densidad × gravedad",
                                "P = fuerza / área",
                                "P = masa × gravedad",
                                "P = densidad × volumen"
                            ],
                            answerIndex: 0,
                            explain: "La presión atmosférica se calcula con: Presión atmosférica = altura de la atmósfera × densidad × gravedad."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3: CICLOS BIOGEOQUÍMICOS Y TECNOLOGÍA ==========
        modulo3: {
            nombre: "Módulo 3: Ciclos Biogeoquímicos y tecnología",
            actividades: {
                // ACTIVIDAD 1: Ciclos biogeoquímicos (carbono y agua)
                act1: {
                    nombre: "Actividad 1: Ciclos biogeoquímicos",
                    desc: "Ciclos del carbono y del agua, procesos, reservorios, importancia ambiental",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Ciclos biogeoquímicos",
                            q: "¿Qué son los ciclos biogeoquímicos?",
                            options: [
                                "Ciclos de energía en el ecosistema",
                                "Movimiento y transformación de elementos por reacciones químicas y actividades biológicas",
                                "Procesos geológicos",
                                "Ciclos del agua solamente"
                            ],
                            answerIndex: 1,
                            explain: "Los ciclos biogeoquímicos son el movimiento y transformación de los elementos por medio de reacciones químicas y actividades biológicas en la biosfera."
                        },
                        {
                            topic: "Carbono",
                            q: "¿En qué formas se encuentra el carbono en la atmósfera?",
                            options: [
                                "Carbono puro y grafito",
                                "Dióxido de carbono (CO₂) y metano (CH₄)",
                                "Monóxido de carbono y carbonatos",
                                "Hidrocarburos"
                            ],
                            answerIndex: 1,
                            explain: "En la atmósfera el carbono existe principalmente como dióxido de carbono (CO₂) y metano (CH₄)."
                        },
                        {
                            topic: "Carbono",
                            q: "¿Qué función tienen el CO₂ y CH₄ en la atmósfera?",
                            options: [
                                "Enfriar la Tierra",
                                "Regular la temperatura como gases de efecto invernadero",
                                "Producir oxígeno",
                                "Eliminar radiación"
                            ],
                            answerIndex: 1,
                            explain: "Estos gases participan en la regulación de la temperatura de la tierra como gases de efecto invernadero."
                        },
                        {
                            topic: "Carbono",
                            q: "¿Qué reservorio natural contiene más CO₂?",
                            options: [
                                "La atmósfera",
                                "Los océanos",
                                "El suelo",
                                "Las rocas"
                            ],
                            answerIndex: 1,
                            explain: "Los océanos contienen 60 veces más CO₂ que el aire de la Tierra."
                        },
                        {
                            topic: "Agua",
                            q: "¿Qué impulsa el ciclo del agua?",
                            options: [
                                "La gravedad",
                                "La energía del Sol",
                                "El viento",
                                "La rotación terrestre"
                            ],
                            answerIndex: 1,
                            explain: "El ciclo del agua es impulsado por la energía del Sol que calienta la superficie del océano y otras aguas superficiales."
                        },
                        {
                            topic: "Agua",
                            q: "¿Cómo se llama el proceso de conversión directa de sólido a gas?",
                            options: [
                                "Evaporación",
                                "Sublimación",
                                "Condensación",
                                "Fusión"
                            ],
                            answerIndex: 1,
                            explain: "La sublimación es el paso directo de sólido (hielo) a gaseoso (vapor)."
                        },
                        {
                            topic: "Agua",
                            q: "¿Qué es la transpiración en las plantas?",
                            options: [
                                "Absorción de agua por las raíces",
                                "Evaporación de agua a través de los estomas de las hojas",
                                "Fotosíntesis",
                                "Respiración celular"
                            ],
                            answerIndex: 1,
                            explain: "En la transpiración, el agua entra por las raíces y se evapora a través de poros llamados estomas en las hojas."
                        },
                        {
                            topic: "Agua",
                            q: "¿Qué son los acuíferos?",
                            options: [
                                "Ríos subterráneos",
                                "Depósitos de agua subterránea",
                                "Lagos artificiales",
                                "Glaciares"
                            ],
                            answerIndex: 1,
                            explain: "Los acuíferos son depósitos de agua subterránea, generalmente fuente de agua potable o de riego."
                        },
                        {
                            topic: "Agua",
                            q: "¿Cuándo ocurre la escorrentía superficial?",
                            options: [
                                "Cuando el agua se evapora",
                                "Cuando el suelo está saturado o la superficie no absorbe",
                                "Cuando llueve poco",
                                "Solo en zonas áridas"
                            ],
                            answerIndex: 1,
                            explain: "El agua fluye como escorrentía si el suelo está saturado, la lluvia es muy fuerte o la superficie es impermeable."
                        },
                        {
                            topic: "Ciclos",
                            q: "¿Qué elementos son transportados por la escorrentía superficial?",
                            options: [
                                "Solo agua",
                                "Carbono, nitrógeno, fósforo y azufre",
                                "Minerales pesados",
                                "Sales"
                            ],
                            answerIndex: 1,
                            explain: "La escorrentía superficial ayuda a mover elementos como carbono, nitrógeno, fósforo y azufre entre ecosistemas."
                        }
                    ]
                },
                // ACTIVIDAD 2: Efecto invernadero, macromoléculas sintéticas
                act2: {
                    nombre: "Actividad 2: Efecto invernadero y polímeros",
                    desc: "Efecto invernadero, radiación, gases de efecto invernadero, cambio climático, polímeros sintéticos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Efecto invernadero",
                            q: "¿Qué temperatura promedio tendría la Tierra sin efecto invernadero?",
                            options: [
                                "15°C",
                                "-18°C",
                                "0°C",
                                "-50°C"
                            ],
                            answerIndex: 1,
                            explain: "Sin gases de efecto invernadero (solo O₂ y N₂), la temperatura de la Tierra sería de -18°C."
                        },
                        {
                            topic: "Efecto invernadero",
                            q: "¿Cuáles son los componentes principales de la atmósfera (99%)?",
                            options: [
                                "CO₂ y vapor de agua",
                                "Oxígeno (O₂) y nitrógeno (N₂)",
                                "Metano y ozono",
                                "Argón y neón"
                            ],
                            answerIndex: 1,
                            explain: "El oxígeno (O₂) y el nitrógeno (N₂) son los componentes principales de la atmósfera (99%)."
                        },
                        {
                            topic: "Efecto invernadero",
                            q: "¿Cómo se comporta el aire con la radiación de onda larga?",
                            options: [
                                "Transparente",
                                "Opaco",
                                "Reflectante",
                                "Absorbente total"
                            ],
                            answerIndex: 1,
                            explain: "El aire es transparente a la radiación de onda corta y opaco a la radiación de onda larga."
                        },
                        {
                            topic: "Gases de efecto invernadero",
                            q: "¿Qué concentración de CO₂ había antes de la industrialización?",
                            options: [
                                "180 ppmv",
                                "280 ppmv",
                                "370 ppmv",
                                "450 ppmv"
                            ],
                            answerIndex: 1,
                            explain: "Antes de la industrialización, el CO₂ tenía una concentración de 280 ppmv."
                        },
                        {
                            topic: "Gases de efecto invernadero",
                            q: "¿Qué fenómeno climático aumenta la temperatura?",
                            options: [
                                "La Niña",
                                "El Niño",
                                "El Monzón",
                                "El Huracán"
                            ],
                            answerIndex: 1,
                            explain: "El Niño es un fenómeno climático que aumenta la temperatura."
                        },
                        {
                            topic: "Ozono",
                            q: "¿Por qué es dañino el ozono en la atmósfera baja?",
                            options: [
                                "Porque destruye la capa de ozono",
                                "Porque produce irritación de mucosas y piel",
                                "Porque causa lluvia ácida",
                                "Porque es tóxico"
                            ],
                            answerIndex: 1,
                            explain: "El aumento de ozono en la atmósfera baja produce irritación de las mucosas y la piel."
                        },
                        {
                            topic: "Polímeros sintéticos",
                            q: "¿De dónde provienen las materias primas para polímeros sintéticos?",
                            options: [
                                "Plantas",
                                "Petróleo",
                                "Minerales",
                                "Agua"
                            ],
                            answerIndex: 1,
                            explain: "Los polímeros sintéticos emplean materias primas derivadas del petróleo."
                        },
                        {
                            topic: "Polímeros sintéticos",
                            q: "¿Qué son los polímeros sintéticos?",
                            options: [
                                "Moléculas naturales",
                                "Moléculas fabricadas artificialmente por el ser humano",
                                "Compuestos inorgánicos",
                                "Minerales"
                            ],
                            answerIndex: 1,
                            explain: "Los polímeros sintéticos son moléculas que el ser humano fabrica de manera artificial."
                        },
                        {
                            topic: "Materias primas",
                            q: "¿Cuál es una materia prima para polímeros sintéticos?",
                            options: [
                                "Agua",
                                "Etileno",
                                "Aire",
                                "Sal"
                            ],
                            answerIndex: 1,
                            explain: "El etileno es una materia prima derivada del petróleo para fabricar polímeros sintéticos."
                        },
                        {
                            topic: "Clasificación",
                            q: "¿Cómo se clasifican los polímeros?",
                            options: [
                                "Por su color",
                                "Por el tipo de reacción responsable de su formación",
                                "Por su densidad",
                                "Por su origen"
                            ],
                            answerIndex: 1,
                            explain: "Los polímeros son clasificados de acuerdo al tipo de reacción responsable de su formación."
                        }
                    ]
                },
                // ACTIVIDAD 3: Método científico, nanotecnología
                act3: {
                    nombre: "Actividad 3: Método científico y nanotecnología",
                    desc: "Ciencia, método científico (etapas), reproducibilidad, refutabilidad, nanotecnología",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Ciencia",
                            q: "¿Qué es la ciencia?",
                            options: [
                                "Conocimientos obtenidos solo por experimentación",
                                "Conjunto de conocimientos obtenidos por observación y razonamiento",
                                "Estudio de la naturaleza",
                                "Tecnología aplicada"
                            ],
                            answerIndex: 1,
                            explain: "La ciencia es el conjunto de conocimientos obtenidos a través de la observación y el razonamiento."
                        },
                        {
                            topic: "Método científico",
                            q: "¿Cuáles son los dos pilares del método científico?",
                            options: [
                                "Observación y experimentación",
                                "Reproducibilidad y refutabilidad",
                                "Hipótesis y teoría",
                                "Análisis y conclusión"
                            ],
                            answerIndex: 1,
                            explain: "El método científico se basa en la reproducibilidad (experimento repetible) y la refutabilidad (posibilidad de ser falseado)."
                        },
                        {
                            topic: "Método científico",
                            q: "¿Qué significa reproducibilidad?",
                            options: [
                                "Que el experimento sea único",
                                "Capacidad de repetir un experimento en cualquier lugar y por cualquier persona",
                                "Que los resultados sean iguales",
                                "Que se pueda publicar"
                            ],
                            answerIndex: 1,
                            explain: "Reproducibilidad significa la capacidad de repetir un determinado experimento en cualquier lugar y por cualquier persona."
                        },
                        {
                            topic: "Observación",
                            q: "¿Cómo deben ser las observaciones científicas?",
                            options: [
                                "Subjetivas",
                                "Exactas y con registro escrito",
                                "Emocionales",
                                "Rápidas"
                            ],
                            answerIndex: 1,
                            explain: "Las observaciones deben ser exactas, sin sesgos, y constar un registro escrito, en película o cualquier otra forma."
                        },
                        {
                            topic: "Hipótesis",
                            q: "¿Qué son las hipótesis?",
                            options: [
                                "Resultados finales",
                                "Explicaciones tentativas del fenómeno investigado",
                                "Preguntas de investigación",
                                "Teorías comprobadas"
                            ],
                            answerIndex: 1,
                            explain: "Las hipótesis son explicaciones tentativas del fenómeno investigado formuladas como proposiciones."
                        },
                        {
                            topic: "Variables",
                            q: "¿Qué es la variable independiente?",
                            options: [
                                "El efecto del fenómeno",
                                "La causa del fenómeno",
                                "Lo que se mide",
                                "El resultado"
                            ],
                            answerIndex: 1,
                            explain: "La variable independiente es la causa de un fenómeno; la variable dependiente es el efecto."
                        },
                        {
                            topic: "Teoría",
                            q: "¿Cuándo una hipótesis se transforma en teoría?",
                            options: [
                                "Cuando se publica",
                                "Cuando es apoyada por muchas observaciones y experimentos con el mismo resultado",
                                "Cuando es aceptada por la comunidad",
                                "Después de un experimento"
                            ],
                            answerIndex: 1,
                            explain: "Una hipótesis apoyada en muchas observaciones y experimentos que dan el mismo resultado se transforma en teoría."
                        },
                        {
                            topic: "Nanotecnología",
                            q: "¿Qué estudia la nanotecnología?",
                            options: [
                                "Moléculas grandes",
                                "La materia a nivel atómico para desarrollar tecnología nanométrica",
                                "Partículas subatómicas",
                                "Microorganismos"
                            ],
                            answerIndex: 1,
                            explain: "La nanotecnología estudia la materia a nivel atómico para desarrollar tecnología a nivel nanométrico."
                        },
                        {
                            topic: "Nanotecnología",
                            q: "¿Quién utilizó por primera vez el término nanotecnología?",
                            options: [
                                "Eric Dexter",
                                "Norio Taniguchi",
                                "Gerd Binnig",
                                "Henrich Rohrer"
                            ],
                            answerIndex: 1,
                            explain: "El término nanotecnología fue utilizado por primera vez por Norio Taniguchi en 1974."
                        },
                        {
                            topic: "Nanotecnología",
                            q: "¿Cuál es uno de los propósitos de la nanotecnología?",
                            options: [
                                "Construir edificios más altos",
                                "Proporcionar energía limpia y renovable",
                                "Crear plásticos",
                                "Mejorar motores"
                            ],
                            answerIndex: 1,
                            explain: "Uno de los propósitos de la nanotecnología es proporcionar energía limpia y renovable."
                        }
                    ]
                }
            }
        }
    }
};

export default materiaInteracciones1;