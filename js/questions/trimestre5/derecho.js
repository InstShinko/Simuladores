// ============================================
// DERECHO I
// 9 ACTIVIDADES - 10 PREGUNTAS POR INTENTO
// ============================================

const derechoI = {
    id: "derechoI",
    nombre: "DERECHO I: ORIGEN, ESTADO, LEYES Y CONSTITUCIÓN",
    icono: "⚖️",
    descripcion: "Estudio del concepto y acepciones del Derecho, antecedentes históricos del Derecho mexicano, normas de conducta, fuentes del Derecho, Estado y sus elementos, formas de Estado y gobierno, relación entre Estado y Derecho, proceso legislativo, división de poderes, Constitución Política, derechos humanos, garantías individuales y jerarquía de las leyes.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: La Importancia y Origen del Derecho",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Concepto y Principales Acepciones del Derecho",
                    desc: "Identificación del concepto de Derecho, sus acepciones (natural, positivo, vigente, objetivo, subjetivo, adjetivo y sustantivo) y su importancia.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Origen de la palabra Derecho",
                            q: "¿De qué palabra latina proviene el término 'Derecho' según García Máynez?",
                            options: ["Directum", "Derecho", "Lex", "Ius"],
                            answerIndex: 0,
                            explain: "García Máynez menciona que la palabra derecho proviene del latín directum, que se entiende como lo que está conforme a la regla, es decir, lo que es recto."
                        },
                        {
                            topic: "Concepto de Derecho",
                            q: "Según Villoro Toranzo, ¿qué es el Derecho?",
                            options: ["Un conjunto de normas que regulan la conducta social", "Un sistema racional de normas sociales de conducta declaradas obligatorias por la autoridad", "Un conjunto de facultades reconocidas a los individuos", "Una ley divina"],
                            answerIndex: 1,
                            explain: "Villoro Toranzo define el Derecho como 'un sistema racional de normas sociales de conducta, declaradas obligatorias por la autoridad, por considerarlas soluciones justas a los problemas surgidos de la realidad histórica'."
                        },
                        {
                            topic: "Derecho Natural",
                            q: "¿Qué corriente filosófica sostiene que existen normas jurídicas con un valor intrínseco, ideal o natural?",
                            options: ["Positivismo jurídico", "Iusnaturalismo", "Realismo jurídico", "Empirismo"],
                            answerIndex: 1,
                            explain: "El iusnaturalismo menciona que existen normas jurídicas que tienen un valor intrínseco, ideal o natural; son derechos que ya se tienen por el simple hecho de existir."
                        },
                        {
                            topic: "Derecho Positivo",
                            q: "¿Quién es considerado el precursor del positivismo jurídico?",
                            options: ["Aristóteles", "Tomás Hobbes", "John Locke", "Montesquieu"],
                            answerIndex: 1,
                            explain: "Thomas Hobbes es considerado el precursor del positivismo jurídico; habla sobre la ley civil y que no es necesario conocer el Derecho natural para ejercer derechos, con la ley civil basta."
                        },
                        {
                            topic: "Derecho Vigente",
                            q: "¿Qué caracteriza al Derecho Vigente?",
                            options: ["Es el conjunto de leyes que están en observancia y en vigor", "Es el conjunto de normas ideales", "Es el derecho que existió en el pasado", "Es el derecho que se aplica solo en tribunales"],
                            answerIndex: 0,
                            explain: "El Derecho Vigente es el conjunto de leyes que están en observancia y en vigor; es decir, con fuerza de obligar."
                        },
                        {
                            topic: "Derecho Objetivo",
                            q: "¿Qué es el Derecho Objetivo?",
                            options: ["El conjunto de normas jurídicas que impone deberes y concede facultades", "Las facultades reconocidas a los individuos por la ley", "El derecho que existe solo en la conciencia", "El derecho que se aplica solo a los extranjeros"],
                            answerIndex: 0,
                            explain: "El Derecho Objetivo es el conjunto de normas jurídicas que impone deberes y concede facultades, regulando la conducta de los individuos; existe independientemente del hombre."
                        },
                        {
                            topic: "Derecho Subjetivo",
                            q: "¿Qué es el Derecho Subjetivo?",
                            options: ["El conjunto de normas jurídicas que impone deberes", "El conjunto de facultades reconocidas a los individuos por la ley para satisfacer sus propios intereses", "El derecho que no está escrito", "El derecho que se aplica solo al Estado"],
                            answerIndex: 1,
                            explain: "El Derecho Subjetivo es el conjunto de facultades reconocidas a los individuos por la ley, para realizar determinados actos en satisfacción de sus propios intereses."
                        },
                        {
                            topic: "Derecho Adjetivo",
                            q: "¿Qué regula el Derecho Adjetivo?",
                            options: ["Los derechos y obligaciones de las personas", "Los procedimientos legales por cada materia", "Los principios generales del Derecho", "Las normas religiosas"],
                            answerIndex: 1,
                            explain: "El Derecho Adjetivo se entiende como todas las normas y principios que regulan las relaciones jurídicas, incluyendo las leyes procedimentales."
                        },
                        {
                            topic: "Importancia del Derecho",
                            q: "¿Qué filósofo afirmó que 'el hombre es un animal político' que necesita de los demás para salir adelante?",
                            options: ["Platón", "Aristóteles", "Sócrates", "Cicerón"],
                            answerIndex: 1,
                            explain: "Aristóteles en su obra Zoon Politikon afirma que el hombre es un animal político, ya que necesita de los demás para salir adelante en todos los aspectos de su vida."
                        },
                        {
                            topic: "Propósito del Derecho",
                            q: "¿Cuál es el sentido e importancia del Derecho según el contenido?",
                            options: ["Castigar a los delincuentes", "Lograr que los individuos se desarrollen de manera armónica y resolver conflictos con justicia y equidad", "Crear riqueza para el Estado", "Controlar a la población"],
                            answerIndex: 1,
                            explain: "El sentido e importancia del Derecho es lograr que los individuos se desarrollen de manera armónica y si tienen conflicto se resuelva con justicia y equidad al normar los vínculos como la convivencia y la supervivencia del grupo social."
                        },
                        {
                            topic: "Derecho objetivo y subjetivo",
                            q: "Una norma reconoce una facultad y la persona titular la ejerce. ¿Qué acepción corresponde a esa facultad?",
                            options: ["Derecho subjetivo", "Derecho objetivo", "Derecho adjetivo", "Derecho histórico"],
                            answerIndex: 0,
                            explain: "El derecho subjetivo es la facultad reconocida a una persona por las normas del derecho objetivo."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Antecedentes Históricos del Derecho Mexicano y Normas de Conducta",
                    desc: "Identificación de los antecedentes históricos del Derecho mexicano, las normas de conducta, sus características y clasificación.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Época Prehispánica",
                            q: "¿Cómo se llamaba la clase social del pueblo en la civilización azteca?",
                            options: ["Pipiltin", "Macehualtín", "Pochtecas", "Tlatacotin"],
                            answerIndex: 1,
                            explain: "Los macehualtín eran el pueblo, constituidos por una familia grande o calpulli, considerados la base de la organización política, social y jurídica."
                        },
                        {
                            topic: "Época Prehispánica",
                            q: "¿Quién era la más alta autoridad en la civilización azteca?",
                            options: ["El sacerdote", "El tlatoani", "El comerciante", "El guerrero"],
                            answerIndex: 1,
                            explain: "El tlatoani era la más alta autoridad, gobernaba y presidía el tribunal supremo en la civilización azteca."
                        },
                        {
                            topic: "Época Novohispana",
                            q: "¿Qué cuerpos legales surgieron durante la época novohispana?",
                            options: ["El derecho azteca y el derecho maya", "El derecho español y el derecho indiano", "El derecho francés y el derecho inglés", "El derecho romano y el derecho griego"],
                            answerIndex: 1,
                            explain: "Durante la época novohispana surgieron dos órdenes jurídicas: el derecho español como ley general y el derecho indiano como ley supletoria."
                        },
                        {
                            topic: "Leyes de Indias",
                            q: "¿Qué intención tenían las Leyes de Indias?",
                            options: ["Proteger a los españoles", "Proteger a los indios de la brutal explotación", "Favorecer a los criollos", "Establecer la Inquisición"],
                            answerIndex: 1,
                            explain: "Las Leyes de Indias tenían la intención de proteger a los indios de la brutal explotación de la que eran objeto, reconociéndoles la categoría de seres humanos."
                        },
                        {
                            topic: "Constitución de Cádiz de 1812",
                            q: "¿Qué tipo de ordenamiento fue la Constitución de Cádiz de 1812?",
                            options: ["Conservador", "Liberal", "Socialista", "Monárquico"],
                            answerIndex: 1,
                            explain: "La Constitución de Cádiz de 1812 fue un ordenamiento jurídico de corte liberal que reconocía que la soberanía residía en la nación."
                        },
                        {
                            topic: "Constitución de Apatzingán de 1814",
                            q: "¿Qué régimen de gobierno establecía la Constitución de Apatzingán?",
                            options: ["Monárquico", "Republicano", "Dictatorial", "Teocrático"],
                            answerIndex: 1,
                            explain: "La Constitución de Apatzingán de 1814 establecía un régimen republicano de gobierno."
                        },
                        {
                            topic: "Constitución de 1824",
                            q: "¿Qué forma de gobierno estableció la primera Constitución del México Independiente?",
                            options: ["Centralista", "Federal", "Monárquico", "Unitario"],
                            answerIndex: 1,
                            explain: "La Constitución Federal de los Estados Unidos Mexicanos de 1824 estableció el federalismo como forma de gobierno de una república representativa."
                        },
                        {
                            topic: "Constitución de 1857",
                            q: "¿Qué institución jurídica se estableció en la Constitución de 1857?",
                            options: ["El juicio de amparo", "La no reelección", "El reparto agrario", "La educación socialista"],
                            answerIndex: 0,
                            explain: "La Constitución de 1857 estableció el juicio de amparo, además de garantías individuales y el sistema federal."
                        },
                        {
                            topic: "Constitución de 1917",
                            q: "¿Qué artículo de la Constitución de 1917 establece las condiciones de trabajo?",
                            options: ["Artículo 27", "Artículo 123", "Artículo 3", "Artículo 49"],
                            answerIndex: 1,
                            explain: "El artículo 123 de la Constitución de 1917 establece las condiciones de trabajo, como consecuencia de la Revolución mexicana."
                        },
                        {
                            topic: "Normas Jurídicas",
                            q: "¿Qué característica distingue a las normas jurídicas de las demás normas?",
                            options: ["Son autónomas", "Son coercibles", "Son interiores", "Son unilaterales"],
                            answerIndex: 1,
                            explain: "Las normas jurídicas son coercibles; si el hombre no cumple con la norma, tendrá una sanción impuesta por el Estado aún en contra de su voluntad."
                        },
                        {
                            topic: "Normas de conducta",
                            q: "Una norma impone un deber a una persona y faculta a otra a exigir su cumplimiento. ¿Qué característica describe?",
                            options: ["Autonomía", "Bilateralidad", "Interioridad", "Incoercibilidad"],
                            answerIndex: 1,
                            explain: "La bilateralidad relaciona la obligación de una parte con la facultad de la otra para exigir su cumplimiento."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Fuentes del Derecho",
                    desc: "Identificación de las fuentes del Derecho: formales, reales e históricas, y la relación hombre-naturaleza como sujetos de derecho.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Fuentes del Derecho",
                            q: "¿Qué se entiende por fuentes del Derecho?",
                            options: ["Los documentos históricos del Derecho", "Los procesos de creación de las normas jurídicas", "Las leyes vigentes", "Los tribunales"],
                            answerIndex: 1,
                            explain: "Las fuentes del Derecho son aquellos artificios que ayudan a la creación y formación de la norma, que día a día se desarrollan gracias a las necesidades que el hombre presenta."
                        },
                        {
                            topic: "Fuentes Formales",
                            q: "¿Cuál es una fuente formal del Derecho?",
                            options: ["La costumbre", "La Revolución Mexicana", "El Código de Hammurabi", "La moral"],
                            answerIndex: 0,
                            explain: "Las fuentes formales son los procedimientos que confieren a las reglas de conducta las características para elevarse a categoría de jurídicamente obligatorias; entre ellas se encuentran la costumbre, la jurisprudencia y la legislación."
                        },
                        {
                            topic: "Principios Generales del Derecho",
                            q: "¿Qué son los principios generales del Derecho?",
                            options: ["Leyes escritas", "Verdades jurídicas notorias de carácter general que sirven como fuente supletoria", "Documentos históricos", "Normas religiosas"],
                            answerIndex: 1,
                            explain: "Los principios generales del Derecho son verdades jurídicas notorias, indiscutibles, de carácter general, creadas mediante procedimientos jurídico-filosóficos de generalización; constituyen una fuente supletoria de la ley."
                        },
                        {
                            topic: "Jurisprudencia",
                            q: "¿Qué es la jurisprudencia?",
                            options: ["La creación de nuevas leyes", "La interpretación que los juzgadores hacen de las normas jurídicas cuando no son claras", "La publicación de leyes en el Diario Oficial", "El veto presidencial"],
                            answerIndex: 1,
                            explain: "La jurisprudencia es la interpretación que los juzgadores hacen de las normas jurídicas cuando éstas no son claras, con la finalidad de resolver casos concretos y tiene carácter obligatorio."
                        },
                        {
                            topic: "Fuentes Reales",
                            q: "¿Cuál es un ejemplo de fuente real del Derecho?",
                            options: ["Las XII Tablas", "La Revolución Mexicana", "El Código Civil", "La jurisprudencia"],
                            answerIndex: 1,
                            explain: "Las fuentes reales son el conjunto de factores que influyen y determinan la aparición de las normas jurídicas. La Revolución Mexicana es un ejemplo, ya que su consecuencia fue la redacción de los artículos 27 y 123 Constitucional."
                        },
                        {
                            topic: "Fuentes Históricas",
                            q: "¿Qué es una fuente histórica del Derecho?",
                            options: ["Las leyes vigentes", "Los documentos o textos de Derecho positivo no vigente que sirven de inspiración", "La costumbre", "La jurisprudencia"],
                            answerIndex: 1,
                            explain: "Las fuentes históricas son los documentos o textos de Derecho positivo no vigente que sirven de inspiración o antecedente para la formalización del Derecho."
                        },
                        {
                            topic: "Código de Hammurabi",
                            q: "¿Qué tipo de fuente del Derecho es el Código de Hammurabi?",
                            options: ["Fuente formal", "Fuente real", "Fuente histórica", "Fuente material"],
                            answerIndex: 2,
                            explain: "El Código de Hammurabi es un ejemplo de fuente histórica, ya que es un documento que existió en el pasado y que ayuda a la creación de la norma."
                        },
                        {
                            topic: "Relación Hombre-Naturaleza",
                            q: "Según Cartay, ¿qué plantea la relación entre el hombre y la naturaleza?",
                            options: ["Que la naturaleza debe ser explotada sin límite", "Diversos problemas éticos, morales y jurídicos respecto a la naturaleza como sujeto de derechos", "Que el hombre es superior a la naturaleza", "Que no hay relación entre ambos"],
                            answerIndex: 1,
                            explain: "Cartay plantea que la relación entre el hombre y la naturaleza plantea diversos problemas éticos, morales y jurídicos, generando un debate respecto a la naturaleza como sujeto de derechos."
                        },
                        {
                            topic: "Declaración Universal de los Derechos de los Animales",
                            q: "¿En qué año fue aprobada la Declaración Universal de los Derechos de los Animales por la UNESCO?",
                            options: ["1948", "1966", "1978", "1989"],
                            answerIndex: 2,
                            explain: "La Declaración Universal de los Derechos de los Animales fue aprobada en 1978 por la UNESCO, siendo de las primeras legislaciones para la protección de la fauna."
                        },
                        {
                            topic: "Derecho Ambiental",
                            q: "¿Qué regula el derecho ambiental?",
                            options: ["Los derechos de los animales", "Los comportamientos humanos que puedan alterar directa o indirectamente al medio ambiente", "Las relaciones entre Estados", "Los contratos comerciales"],
                            answerIndex: 1,
                            explain: "El derecho ambiental regula los comportamientos humanos que puedan alterar directa o indirectamente al medio ambiente, para prevenir y solucionar los problemas que alteran su equilibrio."
                        },
                        {
                            topic: "Fuentes del derecho",
                            q: "Si una transformación social motiva la creación de una norma, ¿qué clase de fuente representa la transformación?",
                            options: ["Fuente formal", "Fuente histórica", "Fuente real", "Fuente doctrinal"],
                            answerIndex: 2,
                            explain: "Las fuentes reales son hechos o condiciones sociales que motivan el contenido de las normas."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: El Estado y las Leyes",
            actividades: {
                act1: {
                    nombre: "Actividad 1: El Estado y las Leyes",
                    desc: "Identificación del concepto de Estado, sus elementos (población, territorio, gobierno), formas de Estado y formas de gobierno.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Concepto de Estado",
                            q: "Según Purón, ¿qué es el Estado?",
                            options: ["Un conjunto de leyes", "Una sociedad política organizada que ocupa un territorio determinado, tiene un sistema jurídico y un gobierno organizado", "Un grupo de personas sin organización", "Una institución religiosa"],
                            answerIndex: 1,
                            explain: "Purón define el Estado como 'una sociedad política organizada que ocupa un territorio determinado, tiene un sistema jurídico y un gobierno organizado. También contiene un conjunto de instituciones que poseen autoridad o imperio para crear las normas que gobiernan a la sociedad'."
                        },
                        {
                            topic: "Elementos del Estado",
                            q: "¿Cuáles son los elementos que conforman el Estado?",
                            options: ["Leyes, normas y sanciones", "Población, territorio y gobierno", "Poder legislativo, ejecutivo y judicial", "Constitución, leyes y reglamentos"],
                            answerIndex: 1,
                            explain: "El Estado se compone de tres elementos: población (grupo humano), territorio (porción de tierra que administra) y gobierno (forma de organización)."
                        },
                        {
                            topic: "Nacionalidad",
                            q: "¿Qué artículo de la Constitución establece las formas de adquirir la nacionalidad mexicana?",
                            options: ["Artículo 27", "Artículo 30", "Artículo 34", "Artículo 33"],
                            answerIndex: 1,
                            explain: "El artículo 30 de la Constitución Política de los Estados Unidos Mexicanos hace referencia a las formas en que se puede adquirir la nacionalidad mexicana (por nacimiento o por naturalización)."
                        },
                        {
                            topic: "Ciudadanía",
                            q: "¿Cuáles son los requisitos para ser ciudadano mexicano según el artículo 34 constitucional?",
                            options: ["Ser mayor de 21 años y tener propiedades", "Haber cumplido 18 años y tener un modo honesto de vivir", "Ser mayor de 25 años y estar casado", "Tener título profesional"],
                            answerIndex: 1,
                            explain: "El artículo 34 establece que son ciudadanos de la República los varones y mujeres que, teniendo la calidad de mexicanos, reúnan los requisitos de haber cumplido 18 años y tener un modo honesto de vivir."
                        },
                        {
                            topic: "Extranjeros",
                            q: "¿Qué artículo de la Constitución define a los extranjeros?",
                            options: ["Artículo 30", "Artículo 33", "Artículo 34", "Artículo 27"],
                            answerIndex: 1,
                            explain: "El artículo 33 de la Constitución define a los extranjeros como las personas que no posean las calidades determinadas en el artículo 30, y gozarán de los derechos humanos y garantías que reconoce la Constitución."
                        },
                        {
                            topic: "Territorio",
                            q: "¿Qué artículo de la Constitución menciona la extensión del territorio nacional?",
                            options: ["Artículo 40", "Artículo 42", "Artículo 43", "Artículo 49"],
                            answerIndex: 1,
                            explain: "El artículo 42 de la Constitución establece la extensión del territorio nacional, incluyendo las partes integrantes de la Federación, islas, plataforma continental, aguas marinas y el espacio situado sobre el territorio nacional."
                        },
                        {
                            topic: "Forma de Estado Federal",
                            q: "¿Qué forma de Estado tiene México según el artículo 40 constitucional?",
                            options: ["Unitario", "Federal", "Confederado", "Centralista"],
                            answerIndex: 1,
                            explain: "El artículo 40 establece que es voluntad del pueblo mexicano constituirse en una República representativa, democrática, laica y federal, compuesta por Estados libres y soberanos."
                        },
                        {
                            topic: "Forma de Gobierno de México",
                            q: "¿Qué tipo de gobierno tiene México según el artículo 40 constitucional?",
                            options: ["Monarquía", "República representativa, democrática, laica y federal", "Dictadura", "Teocracia"],
                            answerIndex: 1,
                            explain: "México se constituye como una República representativa, democrática, laica y federal, donde el gobernante además de ser elegido por el pueblo, también proviene de él."
                        },
                        {
                            topic: "Formas de Gobierno",
                            q: "¿Qué forma de gobierno se caracteriza porque el poder recae en un reducido grupo de personas de una misma clase social?",
                            options: ["Monarquía", "Autocracia", "Oligarquía", "Democracia"],
                            answerIndex: 2,
                            explain: "La oligarquía es una forma de gobierno donde el poder supremo lo ejerce un reducido grupo de personas que pertenecen a una misma clase social."
                        },
                        {
                            topic: "Tiranía",
                            q: "¿Qué es la tiranía como forma de gobierno?",
                            options: ["El gobierno ejercido por un rey por herencia", "El gobierno ejercido por un tirano que obtiene el poder contra derecho y lo rige sin justicia", "El gobierno donde el pueblo elige a sus representantes", "El gobierno donde el parlamento es el poder supremo"],
                            answerIndex: 1,
                            explain: "La tiranía es el gobierno ejercido por un tirano, una persona que obtiene contra derecho el poder de un Estado, especialmente si lo rige sin justicia y a medida de su voluntad."
                        },
                        {
                            topic: "Formas de Estado",
                            q: "¿Qué rasgo distingue al Estado federal del Estado unitario según el material?",
                            options: ["Las autoridades territoriales son delegaciones del gobierno central", "El territorio se administra exclusivamente desde un gobierno local", "Las entidades federadas actúan como países independientes", "Las entidades federadas tienen autonomía en su régimen interior"],
                            answerIndex: 3,
                            explain: "En el Estado federal, las entidades federadas cuentan con autonomía interna y forman parte de una federación."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Relación entre Estado y Derecho y Características de la Ley",
                    desc: "Identificación de la relación entre Estado y Derecho, el concepto de Estado de Derecho y las características de la ley.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Estado de Derecho",
                            q: "¿Qué es el Estado de Derecho?",
                            options: ["Cuando el poder no está regulado por la ley", "Cuando el poder y la actividad del Estado se encuentran regulados y controlados por la ley", "Cuando el Estado no tiene ley", "Cuando la ley no se aplica"],
                            answerIndex: 1,
                            explain: "El Estado de Derecho es cuando el poder y la actividad del Estado se encuentran regulados y controlados por la ley; se rige por el principio de legalidad."
                        },
                        {
                            topic: "Principio de Legalidad",
                            q: "¿Qué significa el principio de legalidad en el Estado de Derecho?",
                            options: ["Que la sociedad puede hacer lo que quiera", "Que la autoridad solo podrá actuar con fundamento en algún precepto legal", "Que no hay leyes", "Que las leyes no son obligatorias"],
                            answerIndex: 1,
                            explain: "El principio de legalidad significa que la sociedad debe tener la certeza de que la autoridad solo podrá actuar con fundamento en algún precepto legal."
                        },
                        {
                            topic: "Concepto de Ley",
                            q: "Según Purón, ¿qué es la ley?",
                            options: ["Una sugerencia para los ciudadanos", "El precepto dictado por la autoridad competente, en que se manda o prohíbe algo en consonancia con la justicia", "Una norma religiosa", "Una costumbre social"],
                            answerIndex: 1,
                            explain: "Purón define la ley como 'el precepto dictado por la autoridad competente, en que se manda o prohíbe algo en consonancia con la justicia y para el bien de los gobernados'."
                        },
                        {
                            topic: "Característica de Generalidad",
                            q: "¿Qué significa que la ley sea general?",
                            options: ["Que se crea para una sola persona", "Que es aplicable a todos los sujetos que se encuentren en las hipótesis previstas sin excepción", "Que solo aplica en un lugar", "Que solo aplica en un tiempo determinado"],
                            answerIndex: 1,
                            explain: "La generalidad de la ley significa que es aplicable a todos los sujetos que se encuentren en alguna de las hipótesis previstas por ella misma sin excepción alguna."
                        },
                        {
                            topic: "Característica de Abstracta",
                            q: "¿Qué significa que la ley sea abstracta?",
                            options: ["Que se crea para un caso concreto", "Que parte de supuestos o hipótesis jurídicas que el legislador prevé", "Que no tiene aplicación práctica", "Que solo es teórica"],
                            answerIndex: 1,
                            explain: "La ley es abstracta porque parte de supuestos o hipótesis jurídicas que el legislador tiene que prever en su intento de solucionar problemas, y que pueden o no presentarse."
                        },
                        {
                            topic: "Característica de Obligatoriedad",
                            q: "¿Qué significa que la ley sea obligatoria?",
                            options: ["Que se puede cumplir o no", "Que al entrar en vigor obliga a las personas a su observancia", "Que solo es obligatoria para los funcionarios", "Que no tiene sanción"],
                            answerIndex: 1,
                            explain: "La ley es obligatoria porque al momento de entrar en vigor, obliga a las personas a su observancia, y el hecho de desconocer su existencia no exime de su cumplimiento."
                        },
                        {
                            topic: "Característica de Permanencia",
                            q: "¿Qué significa que la ley sea permanente?",
                            options: ["Que dura solo un año", "Que no posee una vigencia exacta y solo dejará de tener vigencia hasta que sea abrogada o derogada", "Que se crea por tiempo indefinido sin posibilidad de cambio", "Que dura un sexenio"],
                            answerIndex: 1,
                            explain: "La ley es permanente porque no posee una vigencia exacta; es creada por un tiempo indefinido y solo dejará de tener vigencia hasta que sea abrogada o derogada por otra."
                        },
                        {
                            topic: "Abrogación y Derogación",
                            q: "¿Cuándo deja de tener vigencia una ley?",
                            options: ["Nunca", "Cuando es abrogada o derogada por otra ley", "Después de 10 años", "Cuando el presidente lo decide"],
                            answerIndex: 1,
                            explain: "La ley solo dejará de tener vigencia hasta que sea abrogada o derogada por otra ley."
                        },
                        {
                            topic: "Sanción por Incumplimiento",
                            q: "¿Qué ocurre en caso de incumplimiento de la ley?",
                            options: ["No pasa nada", "La ley misma establece una sanción como instrumento coercitivo", "Se da una advertencia", "Se cancela la ley"],
                            answerIndex: 1,
                            explain: "La ley es un mandato que debe acatarse; de no ser así, ella misma establece la sanción como instrumento coercitivo."
                        },
                        {
                            topic: "Principio de Legalidad para el Individuo",
                            q: "Según el principio de legalidad, ¿qué puede hacer el individuo?",
                            options: ["Todo lo que quiera", "Solo aquello que el derecho no le prohíba", "Solo lo que la autoridad le ordene", "Nada sin permiso"],
                            answerIndex: 1,
                            explain: "En el Estado de Derecho, el individuo solo podrá hacer aquello que el derecho no le prohíba."
                        },
                        {
                            topic: "Características de la ley",
                            q: "Una ley formula una regla para cualquier persona que se encuentre en una situación prevista, sin identificar a alguien por su nombre. ¿Qué característica destaca la ausencia de destinatarios identificados?",
                            options: ["Impersonalidad", "Permanencia", "Obligatoriedad", "Coercibilidad"],
                            answerIndex: 0,
                            explain: "Una ley impersonal formula sus destinatarios sin designar a individuos determinados."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Proceso Legislativo y División de Poderes",
                    desc: "Identificación del proceso legislativo en México y la división de poderes (Legislativo, Ejecutivo y Judicial).",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Proceso Legislativo",
                            q: "¿Qué artículos de la Constitución establecen el proceso de creación de leyes federales?",
                            options: ["Artículos 70 y 71", "Artículos 71 y 72", "Artículos 72 y 73", "Artículos 73 y 74"],
                            answerIndex: 1,
                            explain: "El artículo 71 y 72 de la Constitución Política de los Estados Unidos Mexicanos establecen el proceso de creación de leyes federales."
                        },
                        {
                            topic: "Iniciativa de Ley",
                            q: "Según el artículo 71 constitucional, ¿quiénes pueden iniciar leyes o decretos?",
                            options: ["Solo el Presidente", "El Presidente, Diputados, Senadores, Legislaturas estatales y ciudadanos", "Solo los Diputados", "Solo los ciudadanos"],
                            answerIndex: 1,
                            explain: "El artículo 71 establece que el derecho a iniciar las leyes o decretos le concierne al Presidente, a los Diputados y Senadores, a las Legislaturas de los Estados y a los ciudadanos en un número equivalente al 0.13% de la lista nominal de electores."
                        },
                        {
                            topic: "Cámara de Origen",
                            q: "¿Cómo se llama la Cámara que conoce en primera instancia una iniciativa de ley?",
                            options: ["Cámara revisora", "Cámara de origen", "Cámara de senadores", "Cámara de diputados"],
                            answerIndex: 1,
                            explain: "La Cámara que conoce en primera instancia la iniciativa de ley recibe el nombre de cámara de origen."
                        },
                        {
                            topic: "Sanción de la Ley",
                            q: "¿Qué es la sanción en el proceso legislativo?",
                            options: ["El castigo por no cumplir la ley", "El acto de aceptación de una iniciativa por parte del Poder Ejecutivo", "La publicación de la ley", "La discusión de la ley"],
                            answerIndex: 1,
                            explain: "La sanción es el acto de aceptación de una iniciativa de ley o decreto por parte del Poder Ejecutivo."
                        },
                        {
                            topic: "Veto Presidencial",
                            q: "¿Qué es el veto presidencial?",
                            options: ["La facultad del Presidente para rechazar total o parcialmente un proyecto de ley", "La facultad del Presidente para crear leyes", "La facultad del Presidente para publicar leyes", "La facultad del Presidente para interpretar leyes"],
                            answerIndex: 0,
                            explain: "El veto es la facultad exclusiva del Presidente de la República para rechazar total o parcialmente un proyecto de ley aprobado por el Congreso de la Unión."
                        },
                        {
                            topic: "Publicación de la Ley",
                            q: "¿En qué medio se publican las leyes en México?",
                            options: ["En el Periódico Oficial del Estado", "En el Diario Oficial de la Federación", "En los periódicos locales", "En la Gaceta del Congreso"],
                            answerIndex: 1,
                            explain: "La publicación de las leyes se realiza en el Diario Oficial de la Federación, órgano de difusión del Estado."
                        },
                        {
                            topic: "División de Poderes",
                            q: "¿Quién propuso la teoría de la división y contrapeso de poderes del Estado?",
                            options: ["John Locke", "Montesquieu", "Rousseau", "Voltaire"],
                            answerIndex: 1,
                            explain: "Montesquieu, pensador político francés, delineó la teoría de la división o separación y contrapeso de poderes del Estado: Ejecutivo, Legislativo y Judicial."
                        },
                        {
                            topic: "Poder Legislativo",
                            q: "¿Cómo se compone el Poder Legislativo en México según el artículo 50 constitucional?",
                            options: ["Una sola Cámara", "Un Congreso general dividido en dos Cámaras: Diputados y Senadores", "Tres Cámaras", "Cuatro Cámaras"],
                            answerIndex: 1,
                            explain: "El artículo 50 establece que el Poder Legislativo se deposita en un Congreso general, dividido en dos Cámaras: una de diputados y otra de senadores."
                        },
                        {
                            topic: "Poder Ejecutivo",
                            q: "¿Cuánto dura en su encargo el Presidente de la República?",
                            options: ["3 años", "4 años", "6 años", "5 años"],
                            answerIndex: 2,
                            explain: "El Presidente de la República durará en el encargo seis años, según el artículo 80 de la Constitución."
                        },
                        {
                            topic: "División de poderes",
                            q: "¿Qué poder resuelve controversias mediante la aplicación e interpretación de las normas jurídicas?",
                            options: ["Legislativo", "Judicial", "Ejecutivo", "Constituyente"],
                            answerIndex: 1,
                            explain: "El Poder Judicial ejerce la función jurisdiccional y resuelve controversias conforme al orden jurídico."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: La Constitución Política de los Estados Unidos Mexicanos",
            actividades: {
                act1: {
                    nombre: "Actividad 1: La Constitución Política de los Estados Unidos Mexicanos",
                    desc: "Identificación del concepto, estructura y partes de la Constitución Política de los Estados Unidos Mexicanos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Concepto de Constitución",
                            q: "¿Qué es la Constitución Política de los Estados Unidos Mexicanos?",
                            options: ["Un conjunto de leyes secundarias", "La ley fundamental que rige el Estado mexicano", "Un reglamento municipal", "Un tratado internacional"],
                            answerIndex: 1,
                            explain: "La Constitución es la ley fundamental que rige el Estado mexicano, promulgada el 5 de febrero de 1917."
                        },
                        {
                            topic: "Fecha de Promulgación",
                            q: "¿En qué fecha fue promulgada la Constitución Política de los Estados Unidos Mexicanos?",
                            options: ["5 de febrero de 1857", "5 de febrero de 1917", "5 de febrero de 1824", "5 de febrero de 1910"],
                            answerIndex: 1,
                            explain: "La Constitución Política de los Estados Unidos Mexicanos fue promulgada el 5 de febrero de 1917."
                        },
                        {
                            topic: "Estructura de la Constitución",
                            q: "¿De cuántos artículos consta la Constitución Política de los Estados Unidos Mexicanos?",
                            options: ["126", "136", "146", "156"],
                            answerIndex: 1,
                            explain: "La Constitución consta de 136 artículos integrados en 9 títulos."
                        },
                        {
                            topic: "Parte Dogmática",
                            q: "¿Qué comprende la Parte Dogmática de la Constitución?",
                            options: ["La organización de los poderes del Estado", "Todos los derechos humanos y sus garantías", "La división territorial", "El proceso legislativo"],
                            answerIndex: 1,
                            explain: "La Parte Dogmática comprende todos los derechos humanos y sus garantías, del artículo 1° al 29 de la Constitución."
                        },
                        {
                            topic: "Origen de la palabra Dogmática",
                            q: "¿De qué palabra proviene el término 'Dogmática'?",
                            options: ["Dogma", "Dólar", "Doctor", "Dogo"],
                            answerIndex: 0,
                            explain: "Dogmática proviene del latín dogma, que se entiende como una proposición que se asienta por firme y cierta y como principio innegable de una ciencia."
                        },
                        {
                            topic: "Parte Orgánica",
                            q: "¿Qué establece la Parte Orgánica de la Constitución?",
                            options: ["Los derechos humanos", "La organización y funcionamiento de los poderes del Estado", "Las garantías individuales", "Los tratados internacionales"],
                            answerIndex: 1,
                            explain: "La Parte Orgánica establece la organización y funcionamiento de los poderes del Estado (Legislativo, Ejecutivo y Judicial), así como la organización del Estado mismo."
                        },
                        {
                            topic: "Artículos de Derechos Humanos",
                            q: "¿Qué artículos de la Constitución comprenden la Parte Dogmática?",
                            options: ["Del 1 al 29", "Del 30 al 50", "Del 50 al 80", "Del 80 al 136"],
                            answerIndex: 0,
                            explain: "La Parte Dogmática comprende los artículos del 1 al 29, donde se exponen los derechos humanos y las llamadas Garantías Individuales."
                        },
                        {
                            topic: "Garantías Individuales",
                            q: "¿Qué son las Garantías Individuales?",
                            options: ["Derechos exclusivos para funcionarios", "Derechos fundamentales que los ciudadanos mexicanos gozan y se encuentran en la Constitución", "Obligaciones de los ciudadanos", "Leyes secundarias"],
                            answerIndex: 1,
                            explain: "Las Garantías Individuales son derechos fundamentales que los ciudadanos mexicanos gozan y se encuentran dentro de la Constitución, protegiendo la igualdad, libertad, propiedad y seguridad jurídica."
                        },
                        {
                            topic: "Garantía de Igualdad",
                            q: "¿Qué artículo de la Constitución establece que el varón y la mujer son iguales ante la ley?",
                            options: ["Artículo 1", "Artículo 2", "Artículo 3", "Artículo 4"],
                            answerIndex: 3,
                            explain: "El artículo 4 de la Constitución establece la garantía de igualdad cuando menciona que el varón y la mujer son iguales ante la ley."
                        },
                        {
                            topic: "Garantía de Libertad",
                            q: "¿Qué artículo de la Constitución reconoce la libertad de expresión?",
                            options: ["Artículo 4", "Artículo 5", "Artículo 6", "Artículo 7"],
                            answerIndex: 2,
                            explain: "El artículo 6 de la Constitución establece que las personas tienen la libertad de expresar sus ideas, siempre y cuando no ataque la moral, los derechos de terceros o perturbe el orden público."
                        },
                        {
                            topic: "Estructura constitucional",
                            q: "¿En qué parte de la Constitución se estudia la organización y las atribuciones de los poderes públicos?",
                            options: ["La parte dogmática", "Los artículos transitorios como conjunto", "La parte orgánica", "El apartado dedicado exclusivamente a los derechos humanos"],
                            answerIndex: 2,
                            explain: "La parte orgánica establece la estructura y las funciones de los órganos del Estado."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Derechos Humanos y Garantías Individuales",
                    desc: "Identificación de los derechos humanos, su clasificación por generaciones y las garantías individuales: igualdad, libertad, propiedad y seguridad jurídica.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Definición de Derechos Humanos",
                            q: "Según Purón, ¿qué son los derechos humanos?",
                            options: ["Solo derechos políticos", "El conjunto de prerrogativas sustentadas en la dignidad humana", "Solo derechos económicos", "Leyes secundarias"],
                            answerIndex: 1,
                            explain: "Purón define los derechos humanos como el conjunto de prerrogativas sustentadas en la dignidad humana, cuya realización efectiva resulta indispensable para el desarrollo integral de la persona."
                        },
                        {
                            topic: "Universalidad de los Derechos Humanos",
                            q: "¿Qué principio de los derechos humanos establece que son para todas las personas sin discriminación?",
                            options: ["Interdependencia", "Indivisibilidad", "Universalidad", "Progresividad"],
                            answerIndex: 2,
                            explain: "La universalidad es un principio de los derechos humanos que establece que son para todas las personas sin discriminación alguna."
                        },
                        {
                            topic: "Primera Generación de Derechos Humanos",
                            q: "¿Qué derechos comprende la primera generación de derechos humanos?",
                            options: ["Derechos económicos, sociales y culturales", "Derechos civiles y políticos", "Derechos de los pueblos", "Derecho a la información"],
                            answerIndex: 1,
                            explain: "La primera generación de derechos humanos comprende los derechos civiles y políticos, como el respeto a la vida, la integridad física y la libertad."
                        },
                        {
                            topic: "Segunda Generación de Derechos Humanos",
                            q: "¿Qué derechos comprende la segunda generación de derechos humanos?",
                            options: ["Derechos civiles y políticos", "Derechos económicos, sociales y culturales", "Derechos de los pueblos", "Derecho a la información"],
                            answerIndex: 1,
                            explain: "La segunda generación de derechos humanos comprende los derechos económicos, sociales y culturales, como el trabajo en condiciones justas, la protección social y la educación."
                        },
                        {
                            topic: "Tercera Generación de Derechos Humanos",
                            q: "¿Qué derechos comprende la tercera generación de derechos humanos?",
                            options: ["Derechos civiles y políticos", "Derechos económicos, sociales y culturales", "Derechos de los pueblos o de solidaridad", "Derecho a la información"],
                            answerIndex: 2,
                            explain: "La tercera generación de derechos humanos comprende los derechos de los pueblos o de solidaridad, como el derecho a la paz, a un medio ambiente sano y a la autodeterminación de los pueblos indígenas."
                        },
                        {
                            topic: "Cuarta Generación de Derechos Humanos",
                            q: "¿Qué derechos se consideran en la cuarta generación de derechos humanos?",
                            options: ["Derechos civiles y políticos", "Derecho a la información y acceso a la informática", "Derechos económicos y sociales", "Derechos de los pueblos"],
                            answerIndex: 1,
                            explain: "La cuarta generación de derechos humanos se encuentra en discusión y maneja el derecho a la información, acceso a la informática y a las nuevas tecnologías."
                        },
                        {
                            topic: "Garantías Individuales",
                            q: "Según Burgoa, ¿qué son las garantías Individuales?",
                            options: ["Derechos exclusivos para los mexicanos", "La obligación de todas las autoridades de someter sus actos al derecho", "Leyes secundarias", "Tratados internacionales"],
                            answerIndex: 1,
                            explain: "Burgoa menciona que las garantías Individuales denotan el principio de seguridad jurídica inherente a todo régimen democrático, que implica la obligación de todas las autoridades de someter sus actos al derecho."
                        },
                        {
                            topic: "Garantía de Igualdad",
                            q: "¿Qué artículo de la Constitución prohíbe la esclavitud?",
                            options: ["Artículo 4", "Artículo 5", "Artículo 1", "Artículo 12"],
                            answerIndex: 2,
                            explain: "El artículo 1 de la Constitución reconoce el derecho de igualdad y prohíbe la esclavitud, así como toda discriminación."
                        },
                        {
                            topic: "Garantía de Libertad",
                            q: "¿Qué artículo de la Constitución reconoce la libertad de profesar la religión que se desee?",
                            options: ["Artículo 11", "Artículo 24", "Artículo 10", "Artículo 6"],
                            answerIndex: 1,
                            explain: "El artículo 24 de la Constitución establece el derecho de profesar la religión o creencia que se desee, siempre y cuando sus actos no sean ilícitos."
                        },
                        {
                            topic: "Garantía de Seguridad Jurídica",
                            q: "¿Qué artículo de la Constitución establece que nadie puede ser privado de la libertad sino mediante juicio seguido ante tribunales?",
                            options: ["Artículo 14", "Artículo 16", "Artículo 22", "Artículo 20"],
                            answerIndex: 0,
                            explain: "El artículo 14 de la Constitución establece que nadie podrá ser privado de la libertad o de sus posesiones o derechos, sino mediante juicio seguido ante los tribunales previamente establecidos."
                        },
                        {
                            topic: "Principios de los derechos humanos",
                            q: "Si la vulneración del derecho a la educación dificulta el ejercicio de otros derechos, ¿qué principio ejemplifica?",
                            options: ["Universalidad", "Progresividad", "Generalidad", "Interdependencia"],
                            answerIndex: 3,
                            explain: "La interdependencia señala que los derechos se relacionan y que el ejercicio de uno puede influir en el de otros."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Jerarquía de las Leyes",
                    desc: "Identificación de la jerarquía de las leyes en México y la pirámide jurídica.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Jerarquía de las Leyes",
                            q: "¿Qué es la jerarquía del orden jurídico?",
                            options: ["La organización de las leyes por fecha de creación", "La gradación o disposición de normas jurídicas en grados sucesivos, ascendentes o descendentes", "La división de poderes", "El proceso legislativo"],
                            answerIndex: 1,
                            explain: "La jerarquía del orden jurídico se refiere a la gradación o disposición de normas jurídicas en grados sucesivos, ascendentes o descendentes."
                        },
                        {
                            topic: "Hans Kelsen",
                            q: "¿Quién propuso la teoría de la jerarquía de las leyes?",
                            options: ["Montesquieu", "Hans Kelsen", "John Locke", "Rousseau"],
                            answerIndex: 1,
                            explain: "Hans Kelsen propuso la teoría de la jerarquía de las leyes desde el siglo XX, estableciendo que las normas jurídicas llevan un orden para aplicarse."
                        },
                        {
                            topic: "Artículo 133 Constitucional",
                            q: "¿Qué artículo de la Constitución establece que la Constitución es la Ley Suprema de toda la Unión?",
                            options: ["Artículo 130", "Artículo 131", "Artículo 133", "Artículo 135"],
                            answerIndex: 2,
                            explain: "El artículo 133 de la Constitución establece que la Constitución, las leyes del Congreso que emanen de ella y los tratados internacionales serán la Ley Suprema de toda la Unión."
                        },
                        {
                            topic: "Leyes Locales",
                            q: "¿Qué lugar ocupan las Constituciones y leyes locales en la jerarquía de las leyes?",
                            options: ["Primer nivel", "Segundo nivel", "Tercer nivel", "Cuarto nivel"],
                            answerIndex: 1,
                            explain: "Las Constituciones y leyes locales se encuentran en el segundo nivel de la jerarquía, por debajo de la Constitución Federal y los tratados internacionales."
                        },
                        {
                            topic: "Reglamentos Municipales",
                            q: "¿Qué fundamento legal tienen los reglamentos municipales?",
                            options: ["Artículo 115 constitucional, fracción II", "Artículo 133 constitucional", "Artículo 40 constitucional", "Artículo 49 constitucional"],
                            answerIndex: 0,
                            explain: "El fundamento legal de los reglamentos municipales se encuentra dentro del artículo 115 constitucional, fracción II, que faculta a los ayuntamientos para aprobar bandos de policía y gobierno y reglamentos."
                        },
                        {
                            topic: "Normas Individualizadas",
                            q: "¿Qué son las normas individualizadas?",
                            options: ["Leyes generales", "Resoluciones judiciales y administrativas, o contratos entre particulares", "Tratados internacionales", "Constituciones locales"],
                            answerIndex: 1,
                            explain: "Las normas individualizadas son aquellas surgidas de la actividad de las autoridades (resoluciones judiciales y administrativas) o de la voluntad de los particulares (contratos)."
                        },
                        {
                            topic: "Sentencias Judiciales",
                            q: "¿Qué tipo de normas son las sentencias emitidas por los jueces?",
                            options: ["Normas generales", "Normas individualizadas de naturaleza pública", "Leyes federales", "Reglamentos"],
                            answerIndex: 1,
                            explain: "Las sentencias son resoluciones emitidas por los jueces que ponen fin a un juicio y son consideradas normas individualizadas de naturaleza pública."
                        },
                        {
                            topic: "Tratados Internacionales",
                            q: "Según el artículo 133 citado en el material, ¿quién aprueba los tratados celebrados por el presidente?",
                            options: ["La Cámara de Diputados", "El Senado", "Los ayuntamientos", "La Suprema Corte"],
                            answerIndex: 1,
                            explain: "El artículo 133 señala que los tratados deben estar de acuerdo con la Constitución y que los celebra el presidente con aprobación del Senado."
                        },
                        {
                            topic: "Artículo 115 Constitucional",
                            q: "¿Qué faculta el artículo 115 constitucional a los municipios?",
                            options: ["Crear su propia Constitución", "Aprobar sus propios reglamentos", "Declarar la guerra", "Firmar tratados internacionales"],
                            answerIndex: 1,
                            explain: "El artículo 115 faculta a los ayuntamientos para aprobar los bandos de policía y gobierno, los reglamentos, circulares y disposiciones administrativas de observancia general dentro de sus jurisdicciones."
                        },
                        {
                            topic: "Pirámide Jurídica",
                            q: "¿Cómo se observa la jerarquización de las leyes en México?",
                            options: ["En una línea horizontal", "En una pirámide con la Constitución en la cima", "En un círculo", "En una tabla"],
                            answerIndex: 1,
                            explain: "La jerarquización de las leyes en México se observa en una pirámide, donde la Constitución se encuentra en la cima como la ley suprema."
                        },
                        {
                            topic: "Jerarquía normativa",
                            q: "¿Qué relación debe guardar un reglamento con la ley que desarrolla?",
                            options: ["Debe ajustarse a la ley y facilitar su aplicación", "Puede reemplazar la ley si es posterior", "Tiene la misma jerarquía que la Constitución", "Puede cambiar el contenido de la ley sin reforma legislativa"],
                            answerIndex: 0,
                            explain: "El reglamento desarrolla disposiciones de la ley dentro de los límites que esta y la Constitución establecen."
                        }
                    ]
                }
            }
        }
    }
};

export default derechoI;