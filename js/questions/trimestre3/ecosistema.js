// ============================================
// ECOSISTEMAS: INTERACCIONES, ENERGÍA Y DINÁMICA - TERCER TRIMESTRE
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const ecosistemas = {
    id: "ecosistemas",
    nombre: "ECOSISTEMAS: INTERACCIONES, ENERGÍA Y DINÁMICA",
    icono: "🌿",
    descripcion: "Estudio del flujo de energía en procesos químicos, fotosíntesis, respiración celular, ciclos biogeoquímicos, redes tróficas, ecosistemas de México y cambio climático.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: Flujo de Energía en Procesos Químicos: Fotosíntesis",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Fotosíntesis y formas de nutrición",
                    desc: "Comprensión de la fotosíntesis, quimiosíntesis y clasificación de organismos según su nutrición.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Nutrición autótrofa",
                            q: "¿Qué organismos son capaces de fabricar su propio alimento a partir de sustancias inorgánicas simples?",
                            options: ["Heterótrofos", "Autótrofos", "Saprófitos", "Parásitos"],
                            answerIndex: 1,
                            explain: "Los autótrofos como plantas, algas y algunas bacterias son capaces de fabricar su propio alimento mediante fotosíntesis o quimiosíntesis."
                        },
                        {
                            topic: "Clorofila",
                            q: "¿Dónde se encuentra la clorofila dentro de la célula vegetal?",
                            options: ["En el núcleo", "En los tilacoides dentro de los cloroplastos", "En la vacuola", "En la pared celular"],
                            answerIndex: 1,
                            explain: "La clorofila se encuentra en los tilacoides dentro de los cloroplastos y es responsable del color verde de las plantas."
                        },
                        {
                            topic: "Fotosíntesis",
                            q: "¿Cuáles son las dos etapas de la fotosíntesis?",
                            options: ["Fase luminosa y fase oscura (Ciclo de Calvin)", "Glucólisis y Krebs", "Fermentación y respiración", "Oxidación y reducción"],
                            answerIndex: 0,
                            explain: "La fotosíntesis tiene dos etapas: la fase luminosa (dependiente de luz) donde se forma ATP y NADPH, y el Ciclo de Calvin (independiente de luz) donde se sintetizan azúcares."
                        },
                        {
                            topic: "Organismos heterótrofos",
                            q: "¿Cómo se clasifican los organismos holozoicos según su alimentación?",
                            options: ["Saprófitos y parásitos", "Herbívoros, carnívoros y omnívoros", "Autótrofos y quimiosintéticos", "Aerobios y anaerobios"],
                            answerIndex: 1,
                            explain: "Los holozoicos se clasifican en herbívoros (consumidores primarios), carnívoros (consumidores secundarios) y omnívoros (consumen vegetales y animales)."
                        },
                        {
                            topic: "Quimiosíntesis",
                            q: "¿Qué utilizan los organismos quimiosintéticos como fuente de energía?",
                            options: ["La luz solar", "La energía química de la oxidación de compuestos inorgánicos", "La materia orgánica de otros seres", "El calor geotérmico"],
                            answerIndex: 1,
                            explain: "La quimiosíntesis utiliza energía química a partir de la oxidación de productos inorgánicos como amoniaco, ácido sulfhídrico o hierro."
                        },
                        {
                            topic: "Organismos saprófitos",
                            q: "¿Cómo obtienen su alimento los organismos saprófitos?",
                            options: ["Cazando presas vivas", "De sustratos muertos mediante fermentos que secretan", "Fabricando su propio alimento", "Viviendo como parásitos"],
                            answerIndex: 1,
                            explain: "Los saprófitos (hongos y bacterias) adquieren su alimento de sustratos muertos y gracias a fermentos que secretan, digieren y solubilizan las sustancias."
                        },
                        {
                            topic: "Parasitismo",
                            q: "¿Cuál es la diferencia entre ectoparásitos y endoparásitos?",
                            options: ["Los ectoparásitos viven dentro del organismo; los endoparásitos fuera", "Los ectoparásitos viven fuera; los endoparásitos dentro del organismo", "Solo los ectoparásitos causan daño", "No hay diferencia"],
                            answerIndex: 1,
                            explain: "Los ectoparásitos se alimentan desde fuera (pulgas, garrapatas), mientras que los endoparásitos viven dentro del organismo al que invaden."
                        },
                        {
                            topic: "Clorofila a",
                            q: "¿Qué función única y crucial tiene la clorofila a?",
                            options: ["Dar color verde a las plantas", "Convertir la energía de la luz en energía química", "Proteger a la planta de los rayos UV", "Almacenar agua"],
                            answerIndex: 1,
                            explain: "La clorofila a tiene la función única y crucial de convertir la energía de la luz en energía química durante la fotosíntesis."
                        },
                        {
                            topic: "Carotenoides",
                            q: "¿Qué color tienen los pigmentos carotenoides y cuál es su función?",
                            options: ["Verdes; realizar la fotosíntesis", "Amarillos o anaranjados; amplían el espectro luminoso que aporta energía a la fotosíntesis", "Rojos; protegerse del sol", "Azules; atraer polinizadores"],
                            answerIndex: 1,
                            explain: "Los carotenoides son pigmentos de color amarillo o anaranjado que absorben longitudes de onda de la luz y amplían el espectro luminoso para la fotosíntesis."
                        },
                        {
                            topic: "Procariotas nitrificantes",
                            q: "¿Qué oxidan los procariotas nitrificantes?",
                            options: ["Hidrógeno", "Azufre", "Amoniaco en nitritos y nitritos en nitratos", "Hierro"],
                            answerIndex: 2,
                            explain: "Los procariotas nitrificantes oxidan el amoniaco en nitritos y los nitritos en nitratos, desempeñando un papel importante en la fertilidad de los suelos."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Flujo de energía y materia",
                    desc: "Comprensión del ciclo del carbono y las leyes de la termodinámica en los ecosistemas.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Primera ley de la termodinámica",
                            q: "¿Qué establece la Primera Ley de la Termodinámica?",
                            options: ["La energía se destruye en cada transformación", "La energía puede transformarse de una clase en otra, pero nunca se crea o destruye", "La energía solo se crea en la fotosíntesis", "La energía no se puede transformar"],
                            answerIndex: 1,
                            explain: "La Primera Ley de la Termodinámica establece que la energía puede transformarse de una clase en otra, pero nunca se crea o se destruye, solo se transforma."
                        },
                        {
                            topic: "Segunda ley de la termodinámica",
                            q: "¿Qué establece la Segunda Ley de la Termodinámica en relación con la energía?",
                            options: ["La energía se concentra", "Ningún proceso que implique transformación de energía se producirá espontáneamente a menos que ocurra degradación de energía concentrada a dispersa", "La energía se crea", "La energía no se transforma"],
                            answerIndex: 1,
                            explain: "La Segunda Ley establece que ningún proceso que implique transformación de energía ocurrirá espontáneamente a menos que haya degradación de energía de forma concentrada a dispersa."
                        },
                        {
                            topic: "Ciclo del carbono",
                            q: "¿En qué dos formas principales existe el carbono en la atmósfera?",
                            options: ["Monóxido de carbono y carbono puro", "Dióxido de carbono (CO2) y metano (CH4)", "Carbono orgánico e inorgánico", "Bicarbonato y carbonato"],
                            answerIndex: 1,
                            explain: "En la atmósfera el carbono existe en dos formas principales: dióxido de carbono (CO2) y metano (CH4)."
                        },
                        {
                            topic: "Océanos y CO2",
                            q: "¿Cuántas veces más CO2 contienen los océanos en comparación con el aire de la Tierra?",
                            options: ["10 veces", "30 veces", "60 veces", "100 veces"],
                            answerIndex: 2,
                            explain: "La cantidad de CO2 en los océanos es 60 veces mayor que la del aire de la Tierra."
                        },
                        {
                            topic: "Carbono orgánico del suelo",
                            q: "¿Qué es el carbono orgánico del suelo?",
                            options: ["El carbono de las rocas", "El carbono que permanece en el suelo después de la descomposición parcial de material producido por organismos vivos", "El carbono de la atmósfera", "El carbono disuelto en el agua"],
                            answerIndex: 1,
                            explain: "El carbono orgánico del suelo es el carbono que permanece en él después de la descomposición parcial de cualquier material producido por organismos vivos."
                        },
                        {
                            topic: "Ciclos biogeoquímicos",
                            q: "¿Qué son los ciclos biogeoquímicos?",
                            options: ["Solo el ciclo del agua", "Elementos y moléculas químicas que se mueven entre seres vivos, suelo, corteza terrestre, hidrosfera y atmósfera", "Solo el ciclo del carbono", "Procesos exclusivos de los océanos"],
                            answerIndex: 1,
                            explain: "Los ciclos biogeoquímicos son elementos y moléculas químicas que se mueven entre los seres vivos, el suelo, la corteza terrestre, la hidrosfera y la atmósfera."
                        },
                        {
                            topic: "Metano",
                            q: "¿Qué papel juega el metano (CH4) en la atmósfera?",
                            options: ["Es tóxico para las plantas", "Participa en la regulación de la temperatura terrestre y el efecto invernadero", "Es el principal componente del aire", "No tiene función"],
                            answerIndex: 1,
                            explain: "El metano junto con el CO2 son principales gases participantes en la regulación de la temperatura de la tierra e implicados en el efecto invernadero."
                        },
                        {
                            topic: "Transformación de energía",
                            q: "¿Qué sucede con la energía solar que captan los árboles durante la fotosíntesis?",
                            options: ["Se destruye", "Se transforma en energía química almacenada en biomasa", "Se pierde completamente", "Se convierte en calor sin utilidad"],
                            answerIndex: 1,
                            explain: "La energía solar es transformada en energía química mediante la fotosíntesis, que los árboles aprovechan para formar su estructura."
                        },
                        {
                            topic: "Descomponedores",
                            q: "¿Qué papel juegan los organismos desintegradores en el flujo de energía?",
                            options: ["Son productores primarios", "Convierten la materia orgánica en otro tipo de energía que ellos necesitan para sobrevivir", "Son consumidores primarios", "No participan en el flujo de energía"],
                            answerIndex: 1,
                            explain: "Los organismos desintegradores convierten la materia orgánica (como hojas caídas) en otro tipo de energía que necesitan para sobrevivir, incorporando nutrientes al suelo."
                        },
                        {
                            topic: "Efecto invernadero",
                            q: "¿Qué gases son los principales implicados en el efecto invernadero?",
                            options: ["Oxígeno y nitrógeno", "Dióxido de carbono y metano", "Hidrógeno y helio", "Ozono y argón"],
                            answerIndex: 1,
                            explain: "El dióxido de carbono (CO2) y el metano (CH4) son los principales gases participantes en la regulación de la temperatura de la tierra e implicados en el efecto invernadero."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Diversidad de ecosistemas",
                    desc: "Identificación de los ecosistemas de México, su clasificación y características.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Definición de ecosistema",
                            q: "¿Qué es un ecosistema?",
                            options: ["Un conjunto de especies sin interacción", "El conjunto de especies de un área que coexisten con su ambiente inerte mediante interacciones", "Solo el ambiente físico", "Solo los organismos de un lugar"],
                            answerIndex: 1,
                            explain: "Un ecosistema es el conjunto de especies de un área determinada que coexisten con su ambiente inerte mediante diversas interacciones."
                        },
                        {
                            topic: "Procesos ecológicos primordiales",
                            q: "¿Cuáles son los procesos ecológicos primordiales de los ecosistemas?",
                            options: ["Solo la depredación", "Ciclos biogeoquímicos, flujo de energía y cadenas tróficas", "Solo la fotosíntesis", "Solo la respiración"],
                            answerIndex: 1,
                            explain: "Los procesos ecológicos primordiales son: ciclos biogeoquímicos, flujo de energía, dinámica de comunidades y cadenas tróficas."
                        },
                        {
                            topic: "País megadiverso",
                            q: "¿Por qué México es considerado un país megadiverso?",
                            options: ["Por su gran extensión territorial", "Por su ubicación geográfica privilegiada y relieve diverso que brinda gran diversidad de ecosistemas", "Por su población", "Por su economía"],
                            answerIndex: 1,
                            explain: "México tiene una ubicación geográfica privilegiada y relieve diverso, lo que brinda una gran diversidad de ecosistemas, flora y fauna, colocándolo como país megadiverso."
                        },
                        {
                            topic: "Regiones biogeográficas de México",
                            q: "¿Qué dos zonas biogeográficas confluyen en el territorio mexicano?",
                            options: ["Neártica y Neotropical", "Paleártica y Oriental", "Australiana y Antártica", "Etiópica y Neártica"],
                            answerIndex: 0,
                            explain: "En México confluyen dos zonas biogeográficas importantes: la Neártica (zona templada) y la Neotropical (zona tropical)."
                        },
                        {
                            topic: "Bosque mesófilo de montaña",
                            q: "¿Por qué se le llama 'bosque de niebla' al bosque mesófilo de montaña?",
                            options: ["Porque siempre nieva", "Por las lluvias con frecuentes nubosidad, neblina y humedad atmosférica alta", "Por su altura", "Por su ubicación cerca del mar"],
                            answerIndex: 1,
                            explain: "Presenta lluvias con frecuentes nubosidad, neblina y humedad atmosférica alta la mayor parte de las estaciones, de ahí el nombre de bosque de niebla."
                        },
                        {
                            topic: "Bosques templados en México",
                            q: "¿Qué porcentaje del territorio mexicano ocupan los bosques templados?",
                            options: ["5%", "10%", "16%", "25%"],
                            answerIndex: 2,
                            explain: "Los bosques templados ocupan aproximadamente el 16% del territorio mexicano (323,300 km²)."
                        },
                        {
                            topic: "Matorrales",
                            q: "¿Qué porcentaje del territorio mexicano ocupan los matorrales?",
                            options: ["15%", "30%", "45%", "10%"],
                            answerIndex: 1,
                            explain: "Los matorrales ocupan aproximadamente el 30% del territorio mexicano."
                        },
                        {
                            topic: "Selvas húmedas",
                            q: "¿Cuál es la vegetación más exuberante de México?",
                            options: ["Los pastizales", "Los matorrales", "Las selvas húmedas", "Los bosques templados"],
                            answerIndex: 2,
                            explain: "Las selvas húmedas se consideran la vegetación más exuberante del país, con abundantes lianas, epífitas y palmas."
                        },
                        {
                            topic: "Arrecifes en México",
                            q: "¿Qué parte del Arrecife Mesoamericano se encuentra en México?",
                            options: ["Toda", "Una parte en la costa oriental de la Península de Yucatán", "Solo en Veracruz", "En el Pacífico"],
                            answerIndex: 1,
                            explain: "En la costa oriental de la Península de Yucatán se encuentra una parte de la segunda barrera arrecifal más grande del mundo, el 'Arrecife Mesoamericano'."
                        },
                        {
                            topic: "CONANP",
                            q: "¿Qué institución es responsable del manejo de las Áreas Naturales Protegidas (ANPs) en México?",
                            options: ["SEMARNAT", "CONANP", "PROFEPA", "INECC"],
                            answerIndex: 1,
                            explain: "Por decreto presidencial en el año 2000 se creó la Comisión Nacional de Áreas Naturales Protegidas (CONANP), responsable del manejo de las ANPs."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Dinámicas en las Redes Tróficas",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Biósfera, niveles tróficos y biomas",
                    desc: "Comprensión de la biósfera, los niveles tróficos, las redes tróficas y los biomas.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Biósfera",
                            q: "¿Qué es la biósfera?",
                            options: ["Solo la atmósfera", "La capa de la Tierra donde se manifiesta la actividad de todos los seres vivos", "Solo los océanos", "Solo la corteza terrestre"],
                            answerIndex: 1,
                            explain: "La biósfera es la capa de la Tierra donde se manifiesta la actividad de todos los seres vivos, desde las capas más altas hasta las mayores profundidades marinas."
                        },
                        {
                            topic: "Niveles tróficos",
                            q: "¿Quién ocupa el primer nivel trófico en un ecosistema?",
                            options: ["Los consumidores primarios", "Los productores primarios", "Los descomponedores", "Los consumidores secundarios"],
                            answerIndex: 1,
                            explain: "El primer nivel trófico siempre está ocupado por un productor primario (plantas en tierra o algas en ecosistemas acuáticos)."
                        },
                        {
                            topic: "Transferencia de energía",
                            q: "¿Qué porcentaje de energía se transfiere aproximadamente de un nivel trófico al siguiente?",
                            options: ["50%", "90%", "10%", "1%"],
                            answerIndex: 2,
                            explain: "En promedio, aproximadamente el 10% de la energía transferida en cada nivel trófico es almacenada en tejido corporal; el 90% restante se usa en metabolismo o no se asimila."
                        },
                        {
                            topic: "Cascada trófica",
                            q: "¿En qué consiste la teoría de la cascada trófica?",
                            options: ["En que los depredadores benefician indirectamente a las plantas al suprimir herbívoros", "En que las plantas controlan a los depredadores", "En que los herbívoros benefician a los depredadores", "En que no hay relación entre niveles"],
                            answerIndex: 0,
                            explain: "La cascada trófica establece que los depredadores benefician indirectamente a las plantas al suprimir a los herbívoros, afectando niveles tróficos no adyacentes."
                        },
                        {
                            topic: "Biomas",
                            q: "¿Cuántos tipos de biomas se distinguen a nivel mundial?",
                            options: ["5", "6", "8", "10"],
                            answerIndex: 2,
                            explain: "A nivel mundial es posible distinguir ocho tipos diferentes de biomas: bosque mediterráneo, tundra, selva tropical, desierto, bosque templado, sabana, pastizal y taiga."
                        },
                        {
                            topic: "Productores primarios",
                            q: "¿Qué porcentaje de la materia orgánica del mundo vivo constituyen las plantas y algas?",
                            options: ["50%", "75%", "90%", "99%"],
                            answerIndex: 3,
                            explain: "Los productores (plantas y algas) constituyen el 99% de toda la materia orgánica del mundo vivo; todos los heterótrofos combinados solo representan el 1%."
                        },
                        {
                            topic: "Hipótesis de Green World",
                            q: "¿Quiénes propusieron la hipótesis de Green World sobre las cascadas tróficas?",
                            options: ["Odum y Rockwood", "Hairston et al. (1960)", "Darwin y Wallace", "Linneo y Buffon"],
                            answerIndex: 1,
                            explain: "La teoría de la cascada trófica se remonta a Hairston et al. (1960), quienes propusieron la hipótesis de Green World."
                        },
                        {
                            topic: "Biomasa",
                            q: "¿Qué es la biomasa?",
                            options: ["La energía solar", "La materia orgánica que proviene de los seres vivos o de sus residuos", "Los minerales del suelo", "El agua de los ecosistemas"],
                            answerIndex: 1,
                            explain: "La biomasa es la materia orgánica que proviene de los seres vivos o de sus residuos, formada a partir de la energía solar mediante la fotosíntesis."
                        },
                        {
                            topic: "Regiones naturales",
                            q: "¿Cómo se denominan los conjuntos más o menos homogéneos, reconocibles y diferenciales de vida y soporte físico en la Tierra?",
                            options: ["Ecosistemas", "Regiones naturales", "Hábitats", "Nicho ecológico"],
                            answerIndex: 1,
                            explain: "A los conjuntos más o menos homogéneos, reconocibles y diferenciales de vida y soporte físico se les denomina regiones naturales."
                        },
                        {
                            topic: "Niveles tróficos",
                            q: "¿Qué es un consumidor secundario?",
                            options: ["Un herbívoro", "Un carnívoro que come a un herbívoro", "Un productor", "Un descomponedor"],
                            answerIndex: 1,
                            explain: "Un consumidor secundario es un carnívoro que se alimenta de un consumidor primario (herbívoro)."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Compuestos químicos de los seres vivos",
                    desc: "Identificación de carbohidratos, lípidos, proteínas, ácidos nucleicos y vitaminas.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Carbohidratos",
                            q: "¿Cuál es la fórmula general de los carbohidratos?",
                            options: ["CH4", "Cn(H2O)n", "CO2", "C6H6"],
                            answerIndex: 1,
                            explain: "La fórmula general de los carbohidratos es Cn(H2O)n, con proporción de dos átomos de hidrógeno por uno de oxígeno."
                        },
                        {
                            topic: "Polisacáridos",
                            q: "¿Cuál es la función de los polisacáridos?",
                            options: ["Solo energética", "Dar forma y firmeza a los organismos y reserva energética", "Solo estructural", "Solo de reserva"],
                            answerIndex: 1,
                            explain: "Los polisacáridos tienen función estructural (dar forma y firmeza) y de reserva energética tanto en plantas como en animales."
                        },
                        {
                            topic: "Lípidos",
                            q: "¿Qué propiedad tienen los lípidos debido a su estructura?",
                            options: ["Son hidrosolubles", "Son hidrofóbicos (repelen el agua)", "Son volátiles", "Son conductores"],
                            answerIndex: 1,
                            explain: "Los lípidos tienen propiedades hidrofóbicas debido a su estructura formada por carbono, hidrógeno y un grupo carboxilo."
                        },
                        {
                            topic: "Proteínas",
                            q: "¿De qué están formadas las proteínas?",
                            options: ["De monosacáridos", "De aminoácidos unidos por enlaces peptídicos", "De ácidos grasos", "De nucleótidos"],
                            answerIndex: 1,
                            explain: "Las proteínas son cadenas de monómeros llamados aminoácidos, unidos por enlaces peptídicos."
                        },
                        {
                            topic: "Aminoácidos esenciales",
                            q: "¿Qué son los aminoácidos esenciales?",
                            options: ["Los que el organismo puede sintetizar", "Los que el organismo no puede sintetizar y deben obtenerse de los alimentos", "Los más abundantes", "Los que no tienen función"],
                            answerIndex: 1,
                            explain: "Los aminoácidos esenciales (como lisina, leucina, valina) no pueden ser sintetizados por el organismo y deben obtenerse de alimentos como carne, huevo, pescado, soya y leche."
                        },
                        {
                            topic: "ADN",
                            q: "¿Cuál es la función del ADN?",
                            options: ["Solo energética", "Almacenar información genética, herencia, formar genes y sintetizar proteínas", "Digestión", "Transporte de oxígeno"],
                            answerIndex: 1,
                            explain: "El ADN almacena información genética, permite la herencia, forma las unidades de la herencia llamadas genes y expresa el mensaje genético para sintetizar proteínas."
                        },
                        {
                            topic: "Bases nitrogenadas del ADN",
                            q: "¿Qué bases nitrogenadas contiene el ADN?",
                            options: ["Adenina, guanina, citosina y uracilo", "Adenina, guanina, citosina y timina", "Adenina, timina, uracilo y guanina", "Citosina, uracilo, timina y guanina"],
                            answerIndex: 1,
                            explain: "Las bases nitrogenadas del ADN son adenina, guanina, citosina y timina. El ARN contiene uracilo en lugar de timina."
                        },
                        {
                            topic: "Vitaminas liposolubles",
                            q: "¿Cuáles son las vitaminas liposolubles?",
                            options: ["Complejo B y C", "A, D, E y K", "Ácido fólico y B12", "C y D"],
                            answerIndex: 1,
                            explain: "Las vitaminas liposolubles son A, D, E y K; son solubles en lípidos y se almacenan en tejidos adiposos e hígado."
                        },
                        {
                            topic: "Estructura primaria de proteínas",
                            q: "¿Qué es la estructura primaria de una proteína?",
                            options: ["La forma tridimensional", "La secuencia ordenada de aminoácidos unidos por enlaces peptídicos", "La unión de varias cadenas", "Los puentes de hidrógeno"],
                            answerIndex: 1,
                            explain: "La estructura primaria es la secuencia ordenada de aminoácidos unidos por enlaces peptídicos, como en la insulina."
                        },
                        {
                            topic: "Hemoglobina",
                            q: "¿Qué tipo de estructura proteica tiene la hemoglobina?",
                            options: ["Primaria", "Secundaria", "Terciaria", "Cuaternaria"],
                            answerIndex: 3,
                            explain: "La hemoglobina tiene estructura cuaternaria, formada por dos o más cadenas polipeptídicas unidas para formar una proteína gigante."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Ciclos biogeoquímicos",
                    desc: "Comprensión de los ciclos del fósforo, nitrógeno, carbono, azufre, agua y oxígeno.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Ciclo del fósforo",
                            q: "¿En qué se diferencia el ciclo del fósforo de otros ciclos biogeoquímicos?",
                            options: ["Es más rápido", "Nunca pasa por una fase gaseosa", "Solo ocurre en el agua", "No involucra seres vivos"],
                            answerIndex: 1,
                            explain: "El ciclo del fósforo difiere de otros ciclos porque nunca pasa por una fase gaseosa como los ciclos de nitrógeno o carbono."
                        },
                        {
                            topic: "Fijación de nitrógeno",
                            q: "¿Qué realizan las bacterias fijadoras de nitrógeno?",
                            options: ["Convierten nitratos en nitrógeno", "Convierten gas nitrógeno en amoníaco", "Convierten amoníaco en nitritos", "Realizan fotosíntesis"],
                            answerIndex: 1,
                            explain: "Las bacterias fijadoras de nitrógeno (diazotrofos) convierten el gas nitrógeno de la atmósfera en amoníaco mediante la enzima nitrogenasa."
                        },
                        {
                            topic: "Nitrificación",
                            q: "¿Qué bacterias participan en la transformación de amoníaco en nitrato?",
                            options: ["Nitrosomonas y Nitrobacter", "Escherichia coli", "Lactobacillus", "Clostridium"],
                            answerIndex: 0,
                            explain: "Nitrosomonas convierte amoníaco en dióxido de nitrógeno, y Nitrobacter agrega un tercer átomo de oxígeno para crear nitrato."
                        },
                        {
                            topic: "Desnitrificación",
                            q: "¿En qué condiciones ocurre la desnitrificación?",
                            options: ["En presencia de oxígeno", "En ausencia de oxígeno (condiciones anaerobias)", "Solo en el día", "Solo en agua dulce"],
                            answerIndex: 1,
                            explain: "La desnitrificación es realizada por bacterias anaerobias que convierten nitratos en gas nitrógeno en ausencia de oxígeno."
                        },
                        {
                            topic: "Ciclo del carbono",
                            q: "¿Dónde se encuentra la mayor cantidad de CO2 en la Tierra?",
                            options: ["En la atmósfera", "En los océanos", "En el suelo", "En los seres vivos"],
                            answerIndex: 1,
                            explain: "La cantidad de CO2 en los océanos es 60 veces mayor que la del aire de la Tierra."
                        },
                        {
                            topic: "Ciclo del azufre",
                            q: "¿Qué porcentaje del dióxido de azufre que llega a la atmósfera proviene de actividades humanas?",
                            options: ["50%", "70%", "90%", "30%"],
                            answerIndex: 2,
                            explain: "El 90% del dióxido de azufre que llega a la atmósfera proviene de actividades humanas como la quema de combustibles fósiles."
                        },
                        {
                            topic: "Ciclo del agua",
                            q: "¿Qué impulsa el ciclo del agua en la Tierra?",
                            options: ["La gravedad", "El viento", "La energía del Sol", "La rotación terrestre"],
                            answerIndex: 2,
                            explain: "El ciclo del agua es impulsado por la energía del Sol que calienta la superficie del océano y otras aguas superficiales, causando evaporación."
                        },
                        {
                            topic: "Transpiración",
                            q: "¿Qué es la transpiración en las plantas?",
                            options: ["La absorción de agua por raíces", "La evaporación de agua a través de poros llamados estomas en las hojas", "La fotosíntesis", "La respiración nocturna"],
                            answerIndex: 1,
                            explain: "En la transpiración, el agua entra por las raíces, viaja hacia arriba y se evapora a través de poros llamados estomas en las hojas."
                        },
                        {
                            topic: "Ciclo del oxígeno",
                            q: "¿Qué porcentaje del oxígeno terrestre es producido por algas en los océanos?",
                            options: ["50%", "70%", "90%", "30%"],
                            answerIndex: 2,
                            explain: "Las algas reemplazan aproximadamente un 90 por ciento de todo el oxígeno que se usa en la Tierra; las plantas terrestres hacen el resto."
                        },
                        {
                            topic: "Ozono",
                            q: "¿Qué función cumple la capa de ozono?",
                            options: ["Calentar el planeta", "Proteger la biosfera de la intensa radiación solar", "Producir oxígeno", "Regular las mareas"],
                            answerIndex: 1,
                            explain: "El ozono forma una capa en la alta atmósfera que protege la biosfera de la intensa radiación solar e impide que el calor escape."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Ecosistemas y su Interacción con el Humano: Cambio Climático",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Productividad en los ecosistemas",
                    desc: "Comprensión de la productividad primaria, características de poblaciones y dinámica de ecosistemas.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Producción primaria",
                            q: "¿Qué es la producción primaria en un ecosistema?",
                            options: ["La energía consumida por herbívoros", "La acumulación de energía en forma de biomasa por las plantas mediante fotosíntesis", "La energía de los descomponedores", "El calor liberado"],
                            answerIndex: 1,
                            explain: "La producción primaria es la acumulación de energía en forma de biomasa mediante la fijación de luz solar por las plantas."
                        },
                        {
                            topic: "Productividad primaria",
                            q: "¿Qué ecosistemas son más productivos?",
                            options: ["Los de zonas templadas", "Los de zonas tropicales", "Los desiertos", "Los polares"],
                            answerIndex: 1,
                            explain: "Los ecosistemas tropicales son más productivos que los de las zonas templadas, con mayor acumulación de materia orgánica."
                        },
                        {
                            topic: "Densidad poblacional",
                            q: "¿Qué es la densidad de una población?",
                            options: ["El número total de especies", "La magnitud de la población en relación con una unidad de espacio", "La tasa de crecimiento", "La distribución por edades"],
                            answerIndex: 1,
                            explain: "La densidad es la magnitud de la población en relación con alguna unidad de espacio, por ejemplo, 400 árboles por hectárea."
                        },
                        {
                            topic: "Crecimiento exponencial",
                            q: "¿Qué caracteriza a la forma de crecimiento poblacional tipo J?",
                            options: ["Aumento lento y constante", "La densidad aumenta rápidamente de manera exponencial y se detiene bruscamente", "Disminución gradual", "Crecimiento lineal"],
                            answerIndex: 1,
                            explain: "En la forma J, la densidad aumenta rápidamente de manera exponencial y se detiene luego bruscamente cuando la resistencia ambiental se hace eficaz."
                        },
                        {
                            topic: "Crecimiento sigmoide",
                            q: "¿Qué caracteriza a la forma de crecimiento poblacional sigmoide (en S)?",
                            options: ["Aumento rápido desde el inicio", "Aumento lento, luego rápido y finalmente gradual hasta un nivel asintótico", "Disminución constante", "Crecimiento sin límite"],
                            answerIndex: 1,
                            explain: "En la forma sigmoide, la población aumenta lentamente (fase de establecimiento), luego más rápido (fase logarítmica) y finalmente decrece gradualmente al aumentar la resistencia ambiental."
                        },
                        {
                            topic: "Mortalidad ecológica",
                            q: "¿Qué es la mortalidad ecológica o realizada?",
                            options: ["La pérdida teórica en condiciones ideales", "La pérdida de individuos en una condición ambiental dada, que varía con la población y el ambiente", "Una constante para la población", "La muerte por vejez"],
                            answerIndex: 1,
                            explain: "La mortalidad ecológica o realizada es la pérdida de individuos en una condición ambiental dada y varía con la población y las condiciones ambientales."
                        },
                        {
                            topic: "Natalidad máxima",
                            q: "¿Qué es la natalidad máxima o fisiológica?",
                            options: ["La producción real en condiciones ambientales dadas", "La producción teórica máxima en condiciones ideales sin factores limitativos", "La tasa de inmigración", "El número de muertes"],
                            answerIndex: 1,
                            explain: "La natalidad máxima es la producción teórica máxima de nuevos individuos en condiciones ideales (sin factores ecológicos limitativos)."
                        },
                        {
                            topic: "Distribución por edades",
                            q: "¿Qué indica una población con gran proporción de individuos jóvenes?",
                            options: ["Una población en decadencia", "Una población estable", "Una población en expansión rápida", "Una población sin reproducción"],
                            answerIndex: 2,
                            explain: "Una población en expansión rápida comprende una gran proporción de individuos jóvenes, mientras que una población decadente tiene más individuos viejos."
                        },
                        {
                            topic: "Distribución espacial",
                            q: "¿Cuál es el tipo de distribución espacial más corriente en la naturaleza?",
                            options: ["Al azar", "Uniforme", "Agrupada", "Regular"],
                            answerIndex: 2,
                            explain: "El agrupamiento en grado variable representa con mucho el tipo más corriente de distribución espacial en la naturaleza."
                        },
                        {
                            topic: "Hojarasca",
                            q: "¿Qué importancia tiene la hojarasca en el ecosistema?",
                            options: ["Ninguna", "Brinda frescura, humedad y en suelos limpios permite la germinación", "Solo decora", "Es un desecho sin función"],
                            answerIndex: 1,
                            explain: "La hojarasca brinda frescura y humedad, mantiene el suelo húmedo en sequías y permite a las bacterias fijar oxígeno en el suelo."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Factores bióticos y características de los seres vivos",
                    desc: "Identificación de factores bióticos intraespecíficos e interespecíficos y características de los seres vivos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Factores bióticos intraespecíficos",
                            q: "¿Qué son los factores bióticos intraespecíficos?",
                            options: ["Relaciones entre diferentes especies", "Relaciones que ocurren dentro de una misma población", "Relaciones con el ambiente abiótico", "Relaciones solo entre depredadores"],
                            answerIndex: 1,
                            explain: "Los factores bióticos intraespecíficos ocurren dentro de una población que comparte un área geográfica."
                        },
                        {
                            topic: "Asociaciones gregarias",
                            q: "¿Qué objetivo tienen las asociaciones gregarias en animales?",
                            options: ["Reproducción", "Migración o búsqueda de alimento", "Partición del trabajo", "Expansión territorial"],
                            answerIndex: 1,
                            explain: "Las asociaciones gregarias se dan por transporte o locomoción con el objetivo de migrar o buscar alimento."
                        },
                        {
                            topic: "Parasitismo",
                            q: "¿Qué es el parasitismo?",
                            options: ["Relación donde ambos se benefician", "Relación donde un organismo se beneficia de otro perjudicándolo sin causarle la muerte", "Relación donde un organismo se beneficia y el otro no es afectado", "Relación donde un organismo se alimenta de otro"],
                            answerIndex: 1,
                            explain: "El parasitismo es una relación donde un organismo se beneficia de otro, perjudicándolo o provocándole daño, pero sin causarle la muerte."
                        },
                        {
                            topic: "Comensalismo",
                            q: "¿En qué consiste el comensalismo?",
                            options: ["Ambos organismos se benefician", "Un organismo obtiene beneficio y el otro no es afectado", "Un organismo es perjudicado y el otro no", "Un organismo se alimenta del otro"],
                            answerIndex: 1,
                            explain: "En el comensalismo, un organismo obtiene un beneficio de una especie y la otra no se ve afectada, como las epífitas que usan árboles como soporte."
                        },
                        {
                            topic: "Mutualismo",
                            q: "¿Cuál es un ejemplo de mutualismo?",
                            options: ["Garrapata y perro", "Epífitas y árboles", "Líquenes (alga y hongo)", "León y antílope"],
                            answerIndex: 2,
                            explain: "Los líquenes son una simbiosis mutualista donde el hongo protege al alga de la deshidratación y el alga sintetiza carbohidratos que el hongo utiliza."
                        },
                        {
                            topic: "Amensalismo",
                            q: "¿Qué ocurre en el amensalismo?",
                            options: ["Ambos se benefician", "Un organismo se ve perjudicado y el otro no", "Ambos se perjudican", "Uno se beneficia y el otro no es afectado"],
                            answerIndex: 1,
                            explain: "En el amensalismo, un organismo se ve perjudicado en la relación, pero al otro no le perjudica (se mantiene neutro), como el hongo Penicillium que produce penicilina que impide el crecimiento de bacterias."
                        },
                        {
                            topic: "Homeostasis",
                            q: "¿Qué es la homeostasis?",
                            options: ["La capacidad de reproducirse", "La capacidad de los seres vivos de regular su medio interno", "El crecimiento", "La adaptación evolutiva"],
                            answerIndex: 1,
                            explain: "La homeostasis es la capacidad de los seres vivos de regular su medio interno, manteniendo su equilibrio aunque el ambiente externo cambie."
                        },
                        {
                            topic: "Irritabilidad",
                            q: "¿Qué es la irritabilidad en los seres vivos?",
                            options: ["La capacidad de enfadarse", "La capacidad de reaccionar a estímulos del medio externo e interno", "La capacidad de crecer", "La capacidad de reproducirse"],
                            answerIndex: 1,
                            explain: "La irritabilidad se define como la capacidad de reaccionar a estímulos recibidos del medio externo e interno, como los movimientos de un girasol ante el sol."
                        },
                        {
                            topic: "Metabolismo",
                            q: "¿Cuáles son los dos tipos de reacciones metabólicas?",
                            options: ["Rápidas y lentas", "Anabólicas y catabólicas", "Internas y externas", "Voluntarias e involuntarias"],
                            answerIndex: 1,
                            explain: "El metabolismo incluye reacciones anabólicas (construcción) y catabólicas (degradación), que ocurren simultáneamente en el organismo."
                        },
                        {
                            topic: "Adaptación",
                            q: "¿Qué ha dado lugar a la evolución y a los seres vivos actuales?",
                            options: ["La reproducción", "La capacidad de adaptación a condiciones cambiantes", "La homeostasis", "El metabolismo"],
                            answerIndex: 1,
                            explain: "La adaptación a través de millones de años ha dado lugar a la evolución y a los seres vivos que conocemos actualmente."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Recursos naturales, impacto ambiental y cambio climático",
                    desc: "Análisis de recursos naturales, impacto ambiental, contaminación y efectos del cambio climático.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Recursos inagotables",
                            q: "¿Cuál de los siguientes es un recurso natural inagotable?",
                            options: ["Petróleo", "Gas natural", "Energía solar", "Mineral de hierro"],
                            answerIndex: 2,
                            explain: "Los recursos inagotables incluyen la luz y energía solar, el aire, el viento, las mareas y el oleaje."
                        },
                        {
                            topic: "Recursos no renovables",
                            q: "¿Qué caracteriza a los recursos no renovables?",
                            options: ["Se regeneran rápidamente", "Su cantidad no crece con el tiempo y su consumo lleva al agotamiento", "Son infinitos", "Provienen de la energía solar"],
                            answerIndex: 1,
                            explain: "Los recursos no renovables tienen una cantidad existente o disponibilidad que no crece con el tiempo, por lo que su consumo lleva a su agotamiento."
                        },
                        {
                            topic: "Desarrollo sustentable",
                            q: "¿Qué principio del desarrollo sustentable se refiere a preservar recursos para generaciones futuras?",
                            options: ["Principio de uso sustentable", "Principio de equidad intergeneracional", "Principio de uso equitativo", "Principio de integración"],
                            answerIndex: 1,
                            explain: "El principio de equidad intergeneracional se refiere a la necesidad de preservar los recursos naturales para el beneficio de las generaciones futuras."
                        },
                        {
                            topic: "Impacto ambiental",
                            q: "¿Cómo define la LGEEPA el impacto ambiental?",
                            options: ["Solo la contaminación del agua", "Modificación del ambiente ocasionada por la acción del hombre o de la naturaleza", "Solo la deforestación", "Solo las erupciones volcánicas"],
                            answerIndex: 1,
                            explain: "La Ley General del Equilibrio Ecológico y la Protección al Ambiente (LGEEPA) define el impacto ambiental como la modificación del ambiente ocasionada por la acción del hombre o de la naturaleza."
                        },
                        {
                            topic: "Manifestación de Impacto Ambiental",
                            q: "¿Qué es la Manifestación de Impacto Ambiental (MIA)?",
                            options: ["Un documento administrativo", "Un estudio técnico-científico que mide efectos positivos y negativos de una obra en el ambiente", "Una multa ambiental", "Una licencia de construcción"],
                            answerIndex: 1,
                            explain: "La MIA es un estudio técnico-científico que mide los efectos positivos y negativos que puede ocasionar alguna obra o actividad en el medio ambiente."
                        },
                        {
                            topic: "Contaminación antropogénica",
                            q: "¿Qué es la contaminación antropogénica?",
                            options: ["La causada por erupciones volcánicas", "La producida por el hombre", "La natural de los ecosistemas", "La de los océanos"],
                            answerIndex: 1,
                            explain: "La contaminación antropogénica o antrópica es la producida por el hombre, que ha alcanzado niveles alarmantes de afectación a los recursos naturales."
                        },
                        {
                            topic: "DDT",
                            q: "¿Para qué fue utilizado el DDT inicialmente?",
                            options: ["Como fertilizante", "Como insecticida para exterminar plagas y erradicar enfermedades", "Como combustible", "Como conservador de alimentos"],
                            answerIndex: 1,
                            explain: "El DDT se usó como insecticida para exterminar plagas, aumentar la producción de cosechas y erradicar enfermedades al extinguir sus vectores."
                        },
                        {
                            topic: "Calentamiento global",
                            q: "¿Cuánto ha aumentado la temperatura terrestre debido a la era industrial?",
                            options: ["0.5° C", "1.5° C", "3° C", "5° C"],
                            answerIndex: 1,
                            explain: "El calentamiento global ha provocado un incremento de la temperatura de 1.5° C debido al aumento de liberación de gases como dióxido de carbono, metano y óxido nitroso."
                        },
                        {
                            topic: "Efecto albedo",
                            q: "¿Qué es el efecto albedo en relación con la deforestación?",
                            options: ["La absorción de calor", "La luz reflejada por plantas y árboles que evita la acumulación de calor", "La emisión de CO2", "La producción de oxígeno"],
                            answerIndex: 1,
                            explain: "El efecto albedo es la luz reflejada de un objeto; las plantas y árboles reflejan luz, lo que genera que se retenga menos energía y no se acumule calor constantemente."
                        },
                        {
                            topic: "Contaminación visual",
                            q: "¿Qué elementos causan contaminación visual?",
                            options: ["Solo el humo", "Anuncios espectaculares, carteles, cables y antenas", "Solo el ruido", "Solo los olores"],
                            answerIndex: 1,
                            explain: "La contaminación visual es causada por elementos como anuncios espectaculares, carteles, cables y antenas que alteran la estética del ambiente."
                        }
                    ]
                }
            }
        }
    }
};

export default ecosistemas;