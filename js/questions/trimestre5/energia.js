// ============================================
// LA ENERGÍA EN LOS PROCESOS DE LA VIDA DIARIA
// 9 ACTIVIDADES - 10 PREGUNTAS POR INTENTO
// ============================================

const energiaVidaDiaria = {
    id: "energiaVidaDiaria",
    nombre: "LA ENERGÍA EN LOS PROCESOS DE LA VIDA DIARIA: MOVIMIENTO, ENERGÍA, CAMPOS Y PROCESOS TERRESTRES",
    icono: "⚡",
    descripcion: "Estudio de la energía, trabajo y potencia, cinemática, leyes de Newton, momento lineal e impulso, campos eléctricos y magnéticos, electrostática, electrodinámica, respiración celular, flujo de materia y energía, dinámica de la Tierra, tectónica de placas, vulcanismo, sismicidad y erosión.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: Descubriendo la Dinámica: Movimiento, Energía y Fuerzas Involucradas",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Energía, Trabajo y Potencia",
                    desc: "Identificación de los tipos de energía, clasificación de fuentes, cálculo de energía cinética, potencial, trabajo y potencia.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Definición de Energía",
                            q: "¿Qué es la energía en términos físicos?",
                            options: ["La capacidad de producir un trabajo", "La fuerza aplicada a un cuerpo", "El desplazamiento de un objeto", "La velocidad de un cuerpo"],
                            answerIndex: 0,
                            explain: "La energía es la causante de producir un trabajo y se mide en joules (J)."
                        },
                        {
                            topic: "Fuentes de energía",
                            q: "¿Qué tipo de energía proviene del movimiento de las corrientes marinas?",
                            options: ["Eólica", "Hidráulica", "Mareomotriz", "Geotérmica"],
                            answerIndex: 2,
                            explain: "La energía mareomotriz es derivada del movimiento de las corrientes marinas."
                        },
                        {
                            topic: "Energía cinética",
                            q: "¿De qué depende la energía cinética de un cuerpo?",
                            options: ["Solo de su masa", "De su masa y velocidad", "Solo de su velocidad", "De su altura"],
                            answerIndex: 1,
                            explain: "La energía cinética depende de la masa y la velocidad del cuerpo, según la fórmula Ec = ½mv²."
                        },
                        {
                            topic: "Fórmula de energía cinética",
                            q: "¿Cuál es la fórmula para calcular la energía cinética?",
                            options: ["Ec = mgh", "Ec = ½mv²", "Ec = mv", "Ec = ½mv²h"],
                            answerIndex: 1,
                            explain: "La energía cinética se calcula con Ec = ½mv², donde m es la masa y v la velocidad."
                        },
                        {
                            topic: "Energía potencial gravitacional",
                            q: "¿De qué depende la energía potencial gravitacional de un cuerpo?",
                            options: ["De su masa, gravedad y altura", "Solo de su masa", "Solo de su altura", "De su velocidad"],
                            answerIndex: 0,
                            explain: "La energía potencial gravitacional depende de la masa, la gravedad y la altura, según Ep = mgh."
                        },
                        {
                            topic: "Trabajo en Física",
                            q: "¿Cómo se define el trabajo en términos físicos?",
                            options: ["Como una actividad remunerada", "Como la energía empleada al aplicar una fuerza que produce un desplazamiento paralelo a la fuerza", "Como la fuerza aplicada sin movimiento", "Como la potencia desarrollada"],
                            answerIndex: 1,
                            explain: "El trabajo es la energía empleada en un sistema al aplicar una fuerza sobre él que produce un desplazamiento paralelo a la fuerza."
                        },
                        {
                            topic: "Fórmula de trabajo",
                            q: "¿Cuál es la fórmula del trabajo con un ángulo de aplicación?",
                            options: ["W = F·d", "W = F·d·cosθ", "W = F·d·senθ", "W = F·d·tanθ"],
                            answerIndex: 1,
                            explain: "El trabajo se calcula con W = F·d·cosθ, donde θ es el ángulo con respecto a la línea de desplazamiento."
                        },
                        {
                            topic: "Unidad de trabajo y energía",
                            q: "¿Cuál es la unidad de medida del trabajo y la energía en el Sistema Internacional?",
                            options: ["Newton", "Joule", "Watt", "Caloría"],
                            answerIndex: 1,
                            explain: "La unidad de medida del trabajo y la energía es el joule (J), que equivale a N·m."
                        },
                        {
                            topic: "Relación caloría-joule",
                            q: "¿Cuál es la equivalencia entre caloría y joule?",
                            options: ["1 cal = 4.186 J", "1 cal = 1 J", "1 cal = 0.24 J", "1 cal = 4.186 kJ"],
                            answerIndex: 0,
                            explain: "La relación entre ambas unidades es 1 cal = 4.186 J."
                        },
                        {
                            topic: "Potencia",
                            q: "¿Qué es la potencia en términos físicos?",
                            options: ["La fuerza aplicada a un cuerpo", "La relación entre el trabajo y el tiempo empleado", "La energía almacenada", "La velocidad de un objeto"],
                            answerIndex: 1,
                            explain: "La potencia es la relación entre un trabajo y el tiempo que se emplea para realizarlo, según P = W/t."
                        },
                        {
                            topic: "Potencia mecánica",
                            q: "Dos motores realizan el mismo trabajo. Si uno tarda la mitad que el otro, ¿cuál es su potencia media?",
                            options: ["El doble", "La mitad", "La misma", "Cuatro veces mayor"],
                            answerIndex: 0,
                            explain: "La potencia media es el trabajo dividido entre el tiempo. Si el trabajo es el mismo y el tiempo se reduce a la mitad, la potencia se duplica."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Cinemática y Leyes de Newton",
                    desc: "Identificación de conceptos de cinemática, tipos de movimiento y aplicación de las leyes de Newton.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Distancia y desplazamiento",
                            q: "¿Cuál es la diferencia entre distancia y desplazamiento?",
                            options: ["La distancia es vectorial; el desplazamiento es escalar", "La distancia es la longitud recorrida; el desplazamiento es el cambio total de posición", "Son lo mismo", "El desplazamiento es la longitud recorrida; la distancia es el cambio de posición"],
                            answerIndex: 1,
                            explain: "La distancia es la longitud recorrida por una partícula; el desplazamiento es el cambio total de posición de un cuerpo."
                        },
                        {
                            topic: "Rapidez y velocidad",
                            q: "¿Cuál es la diferencia entre rapidez y velocidad?",
                            options: ["La rapidez es vectorial; la velocidad es escalar", "La rapidez es escalar; la velocidad es vectorial", "Son lo mismo", "La rapidez depende de la dirección; la velocidad no"],
                            answerIndex: 1,
                            explain: "La rapidez es una magnitud escalar (solo número y unidad), mientras que la velocidad es vectorial (número, unidad, dirección y sentido)."
                        },
                        {
                            topic: "Aceleración",
                            q: "¿Qué es la aceleración?",
                            options: ["La variación de la posición con respecto al tiempo", "La variación de la velocidad con respecto al tiempo", "La fuerza aplicada a un cuerpo", "La distancia recorrida en un tiempo"],
                            answerIndex: 1,
                            explain: "La aceleración es la variación de la velocidad con respecto al tiempo, representada por a = (vf - vi)/t."
                        },
                        {
                            topic: "Movimiento rectilíneo uniforme",
                            q: "¿Qué caracteriza al Movimiento Rectilíneo Uniforme (MRU)?",
                            options: ["La velocidad varía constantemente", "La velocidad permanece constante", "La aceleración es constante", "La trayectoria es circular"],
                            answerIndex: 1,
                            explain: "En el MRU, la velocidad permanece constante durante un período determinado de tiempo."
                        },
                        {
                            topic: "Primera Ley de Newton",
                            q: "¿Qué establece la Primera Ley de Newton o Ley de la Inercia?",
                            options: ["F = ma", "Todo cuerpo conservará su estado de reposo o movimiento rectilíneo uniforme a menos que se le aplique una fuerza externa", "A toda acción corresponde una reacción igual y opuesta", "La aceleración es proporcional a la fuerza"],
                            answerIndex: 1,
                            explain: "La Primera Ley de Newton establece que todo cuerpo conservará su estado de reposo o de movimiento rectilíneo uniforme, a menos que se le aplique una fuerza externa."
                        },
                        {
                            topic: "Segunda Ley de Newton",
                            q: "¿Qué establece la Segunda Ley de Newton?",
                            options: ["Todo cuerpo conserva su estado de reposo", "La aceleración es directamente proporcional a la fuerza e inversamente proporcional a la masa", "A toda acción corresponde una reacción igual y opuesta", "La fuerza es igual a la masa por la velocidad"],
                            answerIndex: 1,
                            explain: "La Segunda Ley de Newton establece que la aceleración es directamente proporcional a la magnitud de la fuerza e inversamente proporcional a la masa (F = m·a)."
                        },
                        {
                            topic: "Fuerza",
                            q: "¿Qué es la fuerza?",
                            options: ["Una magnitud escalar", "Una magnitud vectorial producida por agentes externos que modifica un cuerpo", "La energía almacenada", "La potencia desarrollada"],
                            answerIndex: 1,
                            explain: "La fuerza es una magnitud vectorial, producida por uno o varios agentes externos, que actúa sobre un cuerpo y lo modifica de alguna manera."
                        },
                        {
                            topic: "Peso",
                            q: "¿Qué es el peso de un cuerpo?",
                            options: ["La masa del cuerpo", "La fuerza que ejerce la Tierra sobre los cuerpos atrayéndolos hacia su centro", "La velocidad del cuerpo", "La energía potencial del cuerpo"],
                            answerIndex: 1,
                            explain: "El peso es la fuerza que ejerce la Tierra sobre todos los cuerpos que están sobre él, atrayéndolos hacia su centro por la acción gravitacional."
                        },
                        {
                            topic: "Fricción",
                            q: "¿En qué dirección actúa la fuerza de fricción?",
                            options: ["En la misma dirección de la fuerza aplicada", "En sentido opuesto a la fuerza aplicada", "Perpendicular al movimiento", "No tiene dirección"],
                            answerIndex: 1,
                            explain: "La fricción o fuerza de rozamiento siempre actúa en sentido opuesto a la fuerza que se aplique para lograr un movimiento."
                        },
                        {
                            topic: "Fuerza resultante",
                            q: "¿Cuándo un cuerpo se encuentra en equilibrio según la Primera Ley de Newton?",
                            options: ["Cuando su fuerza resultante es cero", "Cuando su fuerza resultante es máxima", "Cuando su velocidad es máxima", "Cuando su aceleración es constante"],
                            answerIndex: 0,
                            explain: "Para que un cuerpo esté en reposo o en equilibrio, es necesario que todas las fuerzas que actúan sobre él se encuentren en total equilibrio, es decir, su fuerza resultante sea cero."
                        },
                        {
                            topic: "Rapidez y velocidad media",
                            q: "Una persona recorre 30 m en línea recta y vuelve por el mismo camino en 20 s en total. ¿Cuál es su velocidad media?",
                            options: ["1.5 m/s hacia el punto de partida", "0 m/s", "3 m/s hacia el punto de partida", "3 m/s en la dirección de ida"],
                            answerIndex: 1,
                            explain: "La velocidad media depende del desplazamiento. Al regresar al punto de partida, el desplazamiento es cero y se recorren 60 m."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Momento Lineal e Impulso",
                    desc: "Identificación del impulso, cantidad de movimiento y la ley de conservación del momento lineal.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Impulso",
                            q: "¿Qué es el impulso mecánico?",
                            options: ["El producto de la masa por la velocidad", "El producto de la fuerza aplicada por el intervalo de tiempo en que actúa", "La energía cinética de un cuerpo", "La fuerza aplicada sobre un cuerpo"],
                            answerIndex: 1,
                            explain: "El impulso mecánico es el producto de la magnitud de la fuerza aplicada por el intervalo de tiempo en el cual actúa (J = F·Δt)."
                        },
                        {
                            topic: "Cantidad de movimiento",
                            q: "¿Qué es la cantidad de movimiento o momento lineal?",
                            options: ["El producto de la fuerza por el tiempo", "El producto de la masa por la velocidad", "El producto de la masa por la aceleración", "El producto de la fuerza por la distancia"],
                            answerIndex: 1,
                            explain: "La cantidad de movimiento o momento lineal es igual al producto de su masa por la magnitud de su velocidad (p = m·v)."
                        },
                        {
                            topic: "Relación impulso-cantidad de movimiento",
                            q: "¿Qué relación existe entre el impulso y la cantidad de movimiento?",
                            options: ["Son iguales", "El impulso genera un cambio en la cantidad de movimiento", "No están relacionados", "La cantidad de movimiento genera impulso"],
                            answerIndex: 1,
                            explain: "El impulso y la cantidad de movimiento están estrechamente ligados, ya que el impulso recibe un cuerpo es igual al cambio en su cantidad de movimiento (Ft = mvf - mvi)."
                        },
                        {
                            topic: "Ley de conservación del momento lineal",
                            q: "¿Qué establece la ley de conservación de la cantidad de movimiento?",
                            options: ["La energía total se conserva", "Cuando dos o más cuerpos chocan, la cantidad de movimiento es igual antes y después del choque", "La masa se conserva", "La velocidad se conserva"],
                            answerIndex: 1,
                            explain: "La ley de conservación de la cantidad de movimiento señala que cuando dos o más cuerpos chocan, la cantidad de movimiento es igual antes y después del choque (m1U1 + m2U2 = m1v1 + m2v2)."
                        },
                        {
                            topic: "Unidades de impulso",
                            q: "¿En qué unidades se mide el impulso en el Sistema Internacional?",
                            options: ["N·s", "kg·m/s", "J", "W"],
                            answerIndex: 0,
                            explain: "El impulso se mide en N·s (newton por segundo), que equivale a kg·m/s."
                        },
                        {
                            topic: "Unidades de cantidad de movimiento",
                            q: "¿En qué unidades se mide la cantidad de movimiento en el Sistema Internacional?",
                            options: ["N·s", "kg·m/s", "J", "W"],
                            answerIndex: 1,
                            explain: "La cantidad de movimiento se mide en kg·m/s."
                        },
                        {
                            topic: "Choque elástico",
                            q: "En un choque elástico, ¿qué se conserva además de la cantidad de movimiento?",
                            options: ["La masa", "La energía cinética", "La velocidad", "El tiempo"],
                            answerIndex: 1,
                            explain: "En un choque elástico, además de la cantidad de movimiento, se conserva la energía cinética total del sistema."
                        },
                        {
                            topic: "Segunda Ley de Newton y momento lineal",
                            q: "¿Cómo se relaciona la segunda ley de Newton con el momento lineal?",
                            options: ["F = m·a", "F = Δp/Δt", "F = m·v", "F = p·t"],
                            answerIndex: 1,
                            explain: "La segunda ley de Newton puede expresarse como F = Δp/Δt, donde Δp es el cambio en la cantidad de movimiento."
                        },
                        {
                            topic: "Vectorialidad del momento lineal",
                            q: "¿Qué tipo de magnitud es la cantidad de movimiento?",
                            options: ["Escalar", "Vectorial", "Adimensional", "Compleja"],
                            answerIndex: 1,
                            explain: "La cantidad de movimiento es una magnitud vectorial cuya dirección corresponde a la de la velocidad."
                        },
                        {
                            topic: "Conservación del momento lineal",
                            q: "¿Qué sucede con la cantidad de movimiento total de un sistema aislado?",
                            options: ["Se conserva", "Aumenta", "Disminuye", "Varía aleatoriamente"],
                            answerIndex: 0,
                            explain: "En un sistema aislado (sin fuerzas externas), la cantidad de movimiento total se conserva."
                        },
                        {
                            topic: "Conservación del momento lineal",
                            q: "Dos carritos iguales se mueven con velocidades de igual magnitud y sentidos opuestos. ¿Cuál es su momento lineal total?",
                            options: ["El doble del momento de uno en el sentido del primero", "El momento de uno solo", "Cero", "El doble del momento de uno en el sentido del segundo"],
                            answerIndex: 2,
                            explain: "Cada momento es el producto de la masa por la velocidad. Como los vectores son iguales en magnitud y opuestos, su suma es cero."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Importancia de los Campos Eléctricos y Magnéticos en el Desarrollo de la Vida",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Fuerzas y Espectro Electromagnético",
                    desc: "Identificación de tipos de fuerza, radiación electromagnética, espectro electromagnético y aplicaciones.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Fuerza de contacto",
                            q: "¿Qué tipo de fuerza se manifiesta cuando existe contacto físico entre cuerpos?",
                            options: ["Fuerza de acción a distancia", "Fuerza de contacto", "Fuerza magnética", "Fuerza eléctrica"],
                            answerIndex: 1,
                            explain: "Cuando el viento tiene un contacto físico moviendo una vela de barco se le llama fuerza de contacto."
                        },
                        {
                            topic: "Fuerza de acción a distancia",
                            q: "¿Qué tipo de fuerza se manifiesta sin contacto físico, como la caída de una manzana?",
                            options: ["Fuerza de contacto", "Fuerza de acción a distancia", "Fuerza de fricción", "Fuerza elástica"],
                            answerIndex: 1,
                            explain: "La caída de una manzana desde un árbol es un ejemplo de fuerza de acción a distancia, específicamente la fuerza de atracción de la Tierra."
                        },
                        {
                            topic: "Radiación electromagnética",
                            q: "¿Cómo se generan las radiaciones electromagnéticas?",
                            options: ["Por la propagación simultánea de campos magnéticos y eléctricos", "Por el movimiento de partículas subatómicas", "Por reacciones químicas", "Por ondas sonoras"],
                            answerIndex: 0,
                            explain: "Las radiaciones electromagnéticas se generan mediante la propagación simultánea de campos magnéticos y eléctricos."
                        },
                        {
                            topic: "Espectro electromagnético",
                            q: "¿Qué magnitudes permiten distinguir los diferentes tipos de radiación electromagnética?",
                            options: ["Su color y temperatura", "Su frecuencia y longitud de onda", "Su masa y volumen", "Su presión y densidad"],
                            answerIndex: 1,
                            explain: "Las radiaciones electromagnéticas se distinguen unas de otras por su frecuencia y longitud de onda."
                        },
                        {
                            topic: "Espectro visible",
                            q: "¿Qué rango de longitudes de onda comprende el espectro visible?",
                            options: ["100 a 300 nm", "400 a 700 nm", "700 a 1000 nm", "1000 a 2000 nm"],
                            answerIndex: 1,
                            explain: "La región visible del espectro electromagnético se extiende desde 400 nm (luz violeta) hasta 700 nm (luz roja)."
                        },
                        {
                            topic: "Velocidad de la luz",
                            q: "¿Cuál es la velocidad de la luz en el vacío?",
                            options: ["3 x 10⁶ m/s", "3 x 10⁸ m/s", "3 x 10¹⁰ m/s", "3 x 10⁵ m/s"],
                            answerIndex: 1,
                            explain: "La velocidad de la luz en el vacío es c = 3 x 10⁸ m/s, y se relaciona con la longitud de onda y la frecuencia mediante c = λ·f."
                        },
                        {
                            topic: "Espectro de emisión",
                            q: "¿Qué tipo de espectro produce un gas excitado eléctrica o térmicamente?",
                            options: ["Espectro continuo", "Espectro de líneas característico", "Espectro de absorción", "Rayos X"],
                            answerIndex: 1,
                            explain: "Cuando un gas es excitado eléctrica o térmicamente emite un espectro de líneas característico de él."
                        },
                        {
                            topic: "Beneficios de la electricidad",
                            q: "¿Cuál es un beneficio de la energía eléctrica mencionado en el contenido?",
                            options: ["Contaminación ambiental", "Iluminación eficiente y segura", "Destrucción de ecosistemas", "Emisión de gases de efecto invernadero"],
                            answerIndex: 1,
                            explain: "La electricidad nos permite iluminar espacios vitales de modo eficiente y seguro, así como utilizar electrodomésticos que nos facilitan la vida."
                        },
                        {
                            topic: "Combustibles fósiles",
                            q: "¿Qué gas producen en grandes cantidades los combustibles fósiles al quemarse?",
                            options: ["Oxígeno", "Dióxido de carbono (CO₂)", "Nitrógeno", "Hidrógeno"],
                            answerIndex: 1,
                            explain: "Los combustibles fósiles producen grandes cantidades de dióxido de carbono (CO₂) y otros gases de efecto invernadero."
                        },
                        {
                            topic: "Espectro óptico",
                            q: "¿Quién demostró que la luz blanca del Sol es una mezcla de siete colores al incidir un rayo sobre un prisma de cristal?",
                            options: ["Einstein", "Newton", "Galileo", "Coulomb"],
                            answerIndex: 1,
                            explain: "Isaac Newton demostró que la luz blanca del Sol es una mezcla de colores al incidir un rayo luminoso sobre un prisma de cristal."
                        },
                        {
                            topic: "Espectro electromagnético",
                            q: "¿Qué luz tiene mayor frecuencia, la violeta o la roja, al compararlas en el vacío?",
                            options: ["La roja, porque tiene mayor longitud de onda", "Ambas tienen la misma frecuencia porque viajan a la misma rapidez", "La roja, porque viaja más rápido en el vacío", "La violeta, porque tiene menor longitud de onda"],
                            answerIndex: 3,
                            explain: "En el vacío, la frecuencia es la rapidez de la luz dividida entre la longitud de onda. La luz violeta tiene menor longitud de onda y mayor frecuencia."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Electricidad y Magnetismo",
                    desc: "Identificación de conceptos de electricidad, magnetismo, imanes, electrostática, carga eléctrica y Ley de Coulomb.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Definición de electricidad",
                            q: "¿Qué estudia la electricidad como rama de la Física?",
                            options: ["Los fenómenos relacionados con las cargas eléctricas en reposo o movimiento", "Los fenómenos magnéticos", "Los fenómenos térmicos", "Los fenómenos ópticos"],
                            answerIndex: 0,
                            explain: "La electricidad es una rama de la Física que se encarga del estudio de todos los fenómenos relacionados con las cargas eléctricas en reposo o movimiento."
                        },
                        {
                            topic: "Electrostática",
                            q: "¿Qué estudia la electrostática?",
                            options: ["Las cargas eléctricas en movimiento", "Las cargas eléctricas en reposo", "Los campos magnéticos", "Los circuitos eléctricos"],
                            answerIndex: 1,
                            explain: "La electrostática estudia las características y propiedades de la electricidad cuando se encuentra en reposo."
                        },
                        {
                            topic: "Carga elemental",
                            q: "¿Cuál es el valor de la carga elemental del electrón?",
                            options: ["1.6 x 10⁻¹⁹ C", "1.6 x 10¹⁹ C", "9.1 x 10⁻³¹ C", "1.67 x 10⁻²⁷ C"],
                            answerIndex: 0,
                            explain: "El electrón tiene una carga elemental de 1.6 x 10⁻¹⁹ C (negativa), y el protón tiene la misma carga pero positiva."
                        },
                        {
                            topic: "Conservación de la carga eléctrica",
                            q: "¿Qué establece el principio de conservación de la carga eléctrica?",
                            options: ["La carga se crea y se destruye", "La carga eléctrica no se crea ni se destruye, solo se transfiere", "La carga siempre aumenta", "La carga siempre disminuye"],
                            answerIndex: 1,
                            explain: "La carga eléctrica no se crea ni se destruye, sólo se transfiere de un cuerpo o material a otro."
                        },
                        {
                            topic: "Materiales conductores",
                            q: "¿Qué caracteriza a un material conductor?",
                            options: ["No permite el movimiento de cargas eléctricas", "Permite el movimiento de cargas eléctricas", "Solo permite el movimiento de cargas en una dirección", "No tiene electrones"],
                            answerIndex: 1,
                            explain: "Un material conductor permite el movimiento de las cargas eléctricas (electrones) en respuesta a una fuerza eléctrica. Los metales son buenos conductores."
                        },
                        {
                            topic: "Ley de Coulomb",
                            q: "¿Qué establece la Ley de Coulomb?",
                            options: ["La fuerza entre dos masas", "La fuerza eléctrica entre dos cargas es proporcional al producto de ellas e inversamente proporcional al cuadrado de la distancia", "La fuerza entre dos imanes", "La corriente eléctrica en un circuito"],
                            answerIndex: 1,
                            explain: "La Ley de Coulomb establece que la fuerza entre dos cargas eléctricas es proporcional al producto de ellas e inversamente proporcional al cuadrado de la distancia que las separa (F = k·q₁·q₂/r²)."
                        },
                        {
                            topic: "Constante de Coulomb",
                            q: "¿Cuál es el valor de la constante k en la Ley de Coulomb para el vacío?",
                            options: ["9 x 10⁹ N·m²/C²", "8.85 x 10⁻¹² N·m²/C²", "6.67 x 10⁻¹¹ N·m²/kg²", "3 x 10⁸ m/s"],
                            answerIndex: 0,
                            explain: "La constante de proporcionalidad k en el vacío es 9 x 10⁹ N·m²/C²."
                        },
                        {
                            topic: "Campo eléctrico",
                            q: "¿Qué es el campo eléctrico?",
                            options: ["Una región del espacio donde las cargas eléctricas ejercen su influencia", "Una corriente eléctrica", "Un imán", "Una onda electromagnética"],
                            answerIndex: 0,
                            explain: "El campo eléctrico es una zona del espacio donde las cargas eléctricas ejercen su influencia, es intangible pero su fuerza ejerce acciones sobre los objetos cargados."
                        },
                        {
                            topic: "Intensidad del campo eléctrico",
                            q: "¿Cómo se calcula la intensidad del campo eléctrico?",
                            options: ["E = F/q", "E = q/F", "E = F·q", "E = F/q²"],
                            answerIndex: 0,
                            explain: "La intensidad del campo eléctrico E se define como la fuerza F que experimenta una carga positiva pequeña dividida entre la carga q (E = F/q)."
                        },
                        {
                            topic: "Imanes naturales",
                            q: "¿Qué son los imanes naturales?",
                            options: ["Barras de hierro imantadas artificialmente", "Minerales extraídos de la tierra con poder magnético", "Imanes temporales", "Imanes permanentes"],
                            answerIndex: 1,
                            explain: "Los imanes naturales son extraídos de la tierra, poseen poder magnético y están formados por óxidos de materiales ferromagnéticos como la magnetita."
                        },
                        {
                            topic: "Ley de Coulomb",
                            q: "Si la distancia entre dos cargas puntuales se duplica y las cargas se mantienen, ¿qué sucede con la magnitud de la fuerza?",
                            options: ["Se reduce a la cuarta parte", "Se reduce a la mitad", "Se duplica", "Se mantiene igual"],
                            answerIndex: 0,
                            explain: "La fuerza electrostática es inversamente proporcional al cuadrado de la distancia. Al duplicar la distancia, se multiplica por 1/4."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Electrodinámica",
                    desc: "Identificación de corriente eléctrica, resistencia, Ley de Ohm, potencia, energía y circuitos eléctricos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Corriente eléctrica",
                            q: "¿Qué es la corriente eléctrica?",
                            options: ["El flujo de electrones que circulan a través de un material conductor", "La carga en reposo", "El campo eléctrico", "La resistencia de un material"],
                            answerIndex: 0,
                            explain: "La corriente eléctrica es el flujo de electrones que circulan a través de un material conductor, es decir, el transporte de carga eléctrica de un punto a otro."
                        },
                        {
                            topic: "Intensidad de corriente",
                            q: "¿Cuál es la fórmula para calcular la intensidad de corriente eléctrica?",
                            options: ["I = q/t", "I = t/q", "I = q·t", "I = V/R"],
                            answerIndex: 0,
                            explain: "La intensidad de corriente se calcula con I = q/t, donde q es la carga que pasa por el conductor y t es el tiempo."
                        },
                        {
                            topic: "Resistencia eléctrica",
                            q: "¿Qué es la resistencia eléctrica?",
                            options: ["El flujo de electrones", "El obstáculo natural que presentan los materiales al paso de la corriente eléctrica", "La diferencia de potencial", "La potencia consumida"],
                            answerIndex: 1,
                            explain: "La resistencia eléctrica es el obstáculo natural que presentan todos los materiales al paso de una corriente eléctrica."
                        },
                        {
                            topic: "Fórmula de resistencia",
                            q: "¿Cómo se calcula la resistencia eléctrica de un conductor rectilíneo?",
                            options: ["R = ρ·L/A", "R = A/ρ·L", "R = ρ·A/L", "R = L·A/ρ"],
                            answerIndex: 0,
                            explain: "La resistencia R de un conductor es proporcional a su longitud L e inversamente proporcional al área de su sección transversal A: R = ρ·L/A."
                        },
                        {
                            topic: "Ley de Ohm",
                            q: "¿Qué establece la Ley de Ohm?",
                            options: ["V = I·R", "I = V·R", "R = V·I", "V = R/I"],
                            answerIndex: 0,
                            explain: "La Ley de Ohm establece que la intensidad de corriente es directamente proporcional a la diferencia de potencial e inversamente proporcional a la resistencia: I = V/R o V = I·R."
                        },
                        {
                            topic: "Potencia eléctrica",
                            q: "¿Cómo se calcula la potencia eléctrica?",
                            options: ["P = V·I", "P = V/I", "P = I/V", "P = V²·I"],
                            answerIndex: 0,
                            explain: "La potencia eléctrica se calcula con P = V·I, donde V es el voltaje e I la intensidad de corriente."
                        },
                        {
                            topic: "Energía eléctrica",
                            q: "¿Cómo se calcula la energía eléctrica consumida?",
                            options: ["E = P·t", "E = V·t", "E = I·t", "E = R·t"],
                            answerIndex: 0,
                            explain: "La energía eléctrica se calcula con E = P·t, donde P es la potencia y t el tiempo."
                        },
                        {
                            topic: "Circuito en serie",
                            q: "¿Cómo se calcula la resistencia equivalente en un circuito en serie?",
                            options: ["RE = R₁ + R₂ + R₃", "1/RE = 1/R₁ + 1/R₂ + 1/R₃", "RE = R₁·R₂/R₁+R₂", "RE = R₁/R₂"],
                            answerIndex: 0,
                            explain: "En un circuito en serie, la resistencia equivalente es la suma de todas las resistencias: RE = R₁ + R₂ + R₃."
                        },
                        {
                            topic: "Circuito en paralelo",
                            q: "¿Cómo se calcula la resistencia equivalente en un circuito en paralelo?",
                            options: ["RE = R₁ + R₂ + R₃", "1/RE = 1/R₁ + 1/R₂ + 1/R₃", "RE = R₁·R₂/R₁+R₂", "RE = R₁/R₂"],
                            answerIndex: 1,
                            explain: "En un circuito en paralelo, la resistencia equivalente se calcula con 1/RE = 1/R₁ + 1/R₂ + 1/R₃."
                        },
                        {
                            topic: "Corriente alterna",
                            q: "¿Qué caracteriza a la corriente alterna?",
                            options: ["El flujo de cargas siempre en la misma dirección", "El flujo de cargas se mueve de un lado a otro dentro del conductor", "Es generada por pilas", "No cambia de dirección"],
                            answerIndex: 1,
                            explain: "La corriente alterna es aquella donde el flujo de cargas se mueve de un lado a otro dentro del conductor, es decir, las cargas 'van y regresan' constantemente."
                        },
                        {
                            topic: "Circuitos en paralelo",
                            q: "Se conectan en paralelo dos resistencias de 6 Ω. ¿Cuál es su resistencia equivalente?",
                            options: ["6 Ω", "3 Ω", "12 Ω", "36 Ω"],
                            answerIndex: 1,
                            explain: "En paralelo se suman los inversos de las resistencias. En este caso, 1/R = 1/6 + 1/6 = 1/3."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Energía Involucrada en los Procesos de la Tierra",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Respiración Celular",
                    desc: "Identificación de los tipos de respiración celular (aerobia y anaerobia), sus etapas y procesos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Respiración celular",
                            q: "¿Qué es la respiración celular?",
                            options: ["La inhalación de oxígeno", "El conjunto de reacciones químicas mediante las cuales se obtiene energía a partir de la degradación de sustancias orgánicas", "La exhalación de dióxido de carbono", "El intercambio de gases en los pulmones"],
                            answerIndex: 1,
                            explain: "La respiración celular es el conjunto de reacciones químicas mediante las cuales se obtiene energía a partir de la degradación de sustancias orgánicas, como los azúcares y los ácidos."
                        },
                        {
                            topic: "Respiración aerobia",
                            q: "¿Dónde ocurre la respiración aerobia en las células eucariotas?",
                            options: ["En el citosol", "En las mitocondrias", "En el núcleo", "En los ribosomas"],
                            answerIndex: 1,
                            explain: "En la respiración aerobia se produce energía en presencia de oxígeno molecular dentro de las mitocondrias de las células eucariotas."
                        },
                        {
                            topic: "Glucólisis",
                            q: "¿Dónde ocurre la glucólisis?",
                            options: ["En la mitocondria", "En el citosol de la célula", "En el núcleo", "En los lisosomas"],
                            answerIndex: 1,
                            explain: "La glucólisis ocurre en el citosol de la célula y se puede dividir en dos fases: cuando se requiere energía y cuando se libera energía."
                        },
                        {
                            topic: "Ciclo de Krebs",
                            q: "¿Dónde se lleva a cabo el ciclo de Krebs?",
                            options: ["En el citosol", "En la matriz de la mitocondria", "En el núcleo", "En la membrana celular"],
                            answerIndex: 1,
                            explain: "El ciclo de Krebs se lleva a cabo en la matriz de la mitocondria. La conversión del piruvato en acetil-CoA ocurre antes del ciclo. El acetil-CoA aporta el grupo acetilo que entra en el ciclo."
                        },
                        {
                            topic: "ATP",
                            q: "¿Qué función tiene el ATP en el organismo?",
                            options: ["Almacenar energía", "Transportar oxígeno", "Digestión de alimentos", "Síntesis de proteínas"],
                            answerIndex: 0,
                            explain: "La hidrólisis del ATP libera energía utilizable para procesos celulares como el transporte activo y la contracción muscular."
                        },
                        {
                            topic: "Respiración anaerobia",
                            q: "¿Qué caracteriza a la respiración anaerobia?",
                            options: ["Requiere oxígeno", "Se realiza sin presencia de oxígeno", "Solo ocurre en animales", "Solo ocurre en plantas"],
                            answerIndex: 1,
                            explain: "La respiración anaerobia es el proceso de producción de energía que se realiza sin la presencia de oxígeno."
                        },
                        {
                            topic: "Fermentación alcohólica",
                            q: "¿Qué producen las levaduras en la fermentación alcohólica?",
                            options: ["Ácido láctico", "Etanol, dióxido de carbono y ATP", "Ácido acético", "Ácido butírico"],
                            answerIndex: 1,
                            explain: "La fermentación alcohólica, elaborada principalmente por las levaduras, produce etanol, dióxido de carbono y ATP a partir de ciertos azúcares."
                        },
                        {
                            topic: "Fermentación láctica",
                            q: "¿Qué produce la fermentación láctica en las células musculares animales?",
                            options: ["Etanol", "Lactato", "Ácido acético", "Ácido butírico"],
                            answerIndex: 1,
                            explain: "La fermentación láctica convierte piruvato en lactato y regenera NAD⁺, lo que permite que la glucólisis siga produciendo ATP."
                        },
                        {
                            topic: "Fermentación acética",
                            q: "¿Qué transforma la fermentación acética?",
                            options: ["Glucosa en etanol", "Alcohol etílico en ácido acético (vinagre)", "Glucosa en ácido láctico", "Glucosa en ácido butírico"],
                            answerIndex: 1,
                            explain: "La fermentación acética, propia de bacterias del género Acetobacter, transforma el alcohol etílico en ácido acético, es decir, el alcohol en vinagre."
                        },
                        {
                            topic: "Ecuación de respiración aerobia",
                            q: "¿Cuál es la ecuación general de la respiración aerobia?",
                            options: ["C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O", "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + 2ATP", "C₆H₁₂O₆ + 6O₂ + 12KNO₃ → 6CO₂ + 6H₂O + 12KNO₂ + 2ATP", "C₆H₁₂O₆ → 2C₃H₆O₃ + 2ATP"],
                            answerIndex: 0,
                            explain: "La ecuación general de la respiración aerobia es C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O."
                        },
                        {
                            topic: "Glucólisis",
                            q: "¿En qué molécula se transforma la glucosa al finalizar la glucólisis?",
                            options: ["En dos moléculas de acetil-CoA", "En una molécula de glucógeno", "En dos moléculas de piruvato", "En una molécula de lactato"],
                            answerIndex: 2,
                            explain: "La glucólisis divide la glucosa de seis carbonos en dos moléculas de piruvato de tres carbonos cada una."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Flujo de Materia y Energía",
                    desc: "Identificación de la Primera y Segunda Ley de la Termodinámica y los ciclos biogeoquímicos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Primera Ley de la Termodinámica",
                            q: "¿Qué establece la Primera Ley de la Termodinámica?",
                            options: ["La energía se destruye", "La energía puede transformarse de una clase en otra, pero nunca se crea o se destruye", "La energía solo se crea", "La energía no se transforma"],
                            answerIndex: 1,
                            explain: "La Primera Ley de la Termodinámica menciona que la energía puede transformarse de una clase en otra, pero que nunca se crea o se destruye, solo se transforma."
                        },
                        {
                            topic: "Segunda Ley de la Termodinámica",
                            q: "¿Qué establece la Segunda Ley de la Termodinámica?",
                            options: ["La energía se crea", "La energía se destruye", "Ningún proceso que implique transformación de energía se producirá espontáneamente a menos que ocurra degradación de energía concentrada a dispersa", "La energía siempre se concentra"],
                            answerIndex: 2,
                            explain: "La Segunda Ley de la Termodinámica establece que ningún proceso que implique transformación de energía se producirá espontáneamente, a menos que ocurra degradación de la energía de una forma concentrada a una forma dispersa."
                        },
                        {
                            topic: "Fotosíntesis",
                            q: "¿Qué proceso realizan los árboles con la energía solar?",
                            options: ["Respiración celular", "Fotosíntesis", "Fermentación", "Combustión"],
                            answerIndex: 1,
                            explain: "Los árboles necesitan energía solar para llevar a cabo el proceso de la fotosíntesis, transformándola en energía química."
                        },
                        {
                            topic: "Ciclos biogeoquímicos",
                            q: "¿Qué son los ciclos biogeoquímicos?",
                            options: ["El movimiento del agua en el planeta", "El movimiento de elementos y moléculas químicas entre los seres vivos y los compartimientos de la biosfera", "El ciclo del carbono", "El ciclo del nitrógeno"],
                            answerIndex: 1,
                            explain: "Los ciclos biogeoquímicos son el movimiento de elementos y moléculas químicas entre los seres vivos, el suelo, la corteza terrestre, la hidrosfera y la atmósfera."
                        },
                        {
                            topic: "Biosfera",
                            q: "¿Cuáles son los compartimientos de la biosfera?",
                            options: ["Atmósfera, litosfera e hidrosfera", "Suelo, agua y aire", "Continentes y océanos", "Plantas y animales"],
                            answerIndex: 0,
                            explain: "Los compartimientos de la biosfera son la atmósfera, la litosfera y la hidrosfera."
                        },
                        {
                            topic: "Transformación de energía en ecosistemas",
                            q: "¿Qué ocurre con la energía en los sistemas ecológicos?",
                            options: ["Se destruye", "Se transforma continuamente pero nunca se destruye", "Solo se almacena", "Solo se libera"],
                            answerIndex: 1,
                            explain: "La energía sufre diversas transformaciones en los sistemas ecológicos, pero jamás es destruida, en un ciclo continuo."
                        },
                        {
                            topic: "Energía química",
                            q: "¿En qué tipo de energía se transforma la energía solar en la fotosíntesis?",
                            options: ["Energía cinética", "Energía química", "Energía térmica", "Energía eléctrica"],
                            answerIndex: 1,
                            explain: "La energía solar se transforma en energía química durante la fotosíntesis, misma que aprovecha el individuo para formar su follaje."
                        },
                        {
                            topic: "Organismos desintegradores",
                            q: "¿Qué función tienen los organismos desintegradores en el flujo de energía?",
                            options: ["Producen energía", "Convierten la materia orgánica en otro tipo de energía", "Consumen energía", "Almacenan energía"],
                            answerIndex: 1,
                            explain: "Los organismos desintegradores convierten la materia orgánica en otro tipo de energía que ellos necesitan para poder sobrevivir."
                        },
                        {
                            topic: "Primera Ley aplicada a la ecología",
                            q: "¿Cómo se aplica la Primera Ley de la Termodinámica en la ecología?",
                            options: ["La energía solo se pierde", "La energía solo se almacena", "La energía se transforma pero no se destruye en los procesos ecológicos", "La energía no se transforma"],
                            answerIndex: 2,
                            explain: "La Primera Ley de la Termodinámica se aplica en ecología al entender que la energía se transforma continuamente en los ecosistemas, pero jamás es destruida."
                        },
                        {
                            topic: "Ciclo del agua",
                            q: "¿Qué tipo de ciclo es el ciclo del agua?",
                            options: ["Un ciclo biogeoquímico", "Un ciclo energético", "Un ciclo térmico", "Un ciclo eléctrico"],
                            answerIndex: 0,
                            explain: "El ciclo del agua es un ciclo biogeoquímico, donde las moléculas de agua se mueven entre los diferentes compartimientos de la biosfera."
                        },
                        {
                            topic: "Flujo de energía",
                            q: "¿Qué proceso permite a los productores incorporar energía luminosa a un ecosistema?",
                            options: ["Respiración celular", "Fermentación", "Descomposición", "Fotosíntesis"],
                            answerIndex: 3,
                            explain: "La fotosíntesis transforma energía luminosa en energía química almacenada en compuestos orgánicos."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Dinámica de la Tierra",
                    desc: "Identificación de la tectónica de placas, vulcanismo, sismicidad, intemperismo, erosión y formación del relieve.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Deriva continental",
                            q: "¿Quién propuso la hipótesis de la deriva continental en 1912?",
                            options: ["Harry Hess", "Alfred Wegener", "Isaac Newton", "Charles Coulomb"],
                            answerIndex: 1,
                            explain: "Alfred Wegener propuso la hipótesis de la deriva continental en 1912, demostrando que todos los continentes estuvieron unidos en un supercontinente llamado Pangea."
                        },
                        {
                            topic: "Pangea",
                            q: "¿Cómo se llamaba el supercontinente que unía a todos los continentes según Wegener?",
                            options: ["Panthalassa", "Pangea", "Gondwana", "Laurasia"],
                            answerIndex: 1,
                            explain: "Wegener demostró que todos los continentes estuvieron unidos en un solo supercontinente denominado Pangea."
                        },
                        {
                            topic: "Tectónica de placas",
                            q: "¿Qué teoría explica el origen del desplazamiento de continentes y océanos?",
                            options: ["Teoría de la deriva continental", "Teoría de la expansión del fondo marino", "Teoría de la tectónica de placas", "Teoría de la gravedad"],
                            answerIndex: 2,
                            explain: "La teoría de la tectónica de placas explica el origen del desplazamiento de continentes y océanos, desarrollada con base en las hipótesis de Wegener y Hess."
                        },
                        {
                            topic: "Límites de placas divergentes",
                            q: "¿Qué ocurre en los límites divergentes de placas tectónicas?",
                            options: ["Las placas se separan y se forma nuevo fondo oceánico", "Las placas chocan y se forma una fosa", "Las placas se deslizan lateralmente", "Las placas se destruyen"],
                            answerIndex: 0,
                            explain: "En los límites divergentes, las placas se separan y las fracturas creadas se rellenan con roca fundida que asciende, formando nuevo fondo oceánico."
                        },
                        {
                            topic: "Límites convergentes",
                            q: "¿Qué ocurre en los límites convergentes de placas?",
                            options: ["Las placas se separan", "Una placa se desliza debajo de la otra en zonas de subducción", "Las placas se deslizan lateralmente", "No ocurre nada"],
                            answerIndex: 1,
                            explain: "En los límites convergentes, una placa más densa se dobla hacia abajo y se desliza debajo de la otra, formando zonas de subducción y fosas submarinas."
                        },
                        {
                            topic: "Límites transformantes",
                            q: "¿Qué ocurre en los límites transformantes?",
                            options: ["Las placas se separan", "Las placas chocan", "Las placas se deslizan lateralmente sin generar ni consumir litósfera", "Las placas se destruyen"],
                            answerIndex: 2,
                            explain: "En los límites transformantes, las placas se deslizan lateralmente una con respecto a la otra, sin generar litósfera nueva ni consumir litósfera antigua."
                        },
                        {
                            topic: "Sismicidad",
                            q: "¿Qué es la sismicidad?",
                            options: ["El estudio de los volcanes", "Una manifestación del dinamismo de la corteza terrestre mediante movimientos vibratorios", "El estudio de los océanos", "El estudio de los minerales"],
                            answerIndex: 1,
                            explain: "La sismicidad es una manifestación del dinamismo y evolución de la corteza terrestre, mediante movimientos vibratorios de breve duración."
                        },
                        {
                            topic: "Cinturón de Fuego del Pacífico",
                            q: "¿Qué zona de alta frecuencia sísmica se encuentra en los bordes del océano Pacífico?",
                            options: ["Cinturón de Fuego del Mediterráneo", "Cinturón de Fuego del Pacífico", "Cinturón de Fuego del Atlántico", "Anillo de Fuego del Caribe"],
                            answerIndex: 1,
                            explain: "El Cinturón de Fuego del Pacífico abarca países en los bordes del océano Pacífico, como México, Chile, Japón y Estados Unidos, entre otros."
                        },
                        {
                            topic: "Intemperismo",
                            q: "¿Qué es el intemperismo o meteorización?",
                            options: ["El transporte de sedimentos", "El proceso de descomposición y desintegración in situ de rocas y minerales expuestos", "La formación de montañas", "La erupción volcánica"],
                            answerIndex: 1,
                            explain: "El intemperismo es el proceso de descomposición y desintegración in situ de las rocas y minerales expuestos en la superficie terrestre."
                        },
                        {
                            topic: "Erosión eólica",
                            q: "¿Qué agente erosivo es más visible en las zonas desérticas?",
                            options: ["El agua", "El viento", "Los glaciares", "El hielo"],
                            answerIndex: 1,
                            explain: "La erosión eólica es producida por el viento que transporta finas partículas sueltas, siendo más visible en las zonas desérticas, donde forma dunas."
                        },
                        {
                            topic: "Procesos externos de la Tierra",
                            q: "Si el agua de un río arrastra fragmentos de roca aguas abajo, ¿qué proceso describe su desplazamiento?",
                            options: ["Transporte de sedimentos", "Meteorización química", "Sedimentación", "Subducción"],
                            answerIndex: 0,
                            explain: "El transporte desplaza los materiales erosionados. La sedimentación ocurre cuando esos materiales se depositan."
                        }
                    ]
                }
            }
        }
    }
};

export default energiaVidaDiaria;