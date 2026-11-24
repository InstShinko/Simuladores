// ============================================
// CIENCIAS DE LA SALUD I
// 9 ACTIVIDADES - 10 PREGUNTAS POR INTENTO
// ============================================

const cienciasSaludI = {
    id: "cienciasSaludI",
    nombre: "CIENCIAS DE LA SALUD I: INTRODUCCIÓN, SALUD Y ENFERMEDAD, SALUD INTEGRAL",
    icono: "🏥",
    descripcion: "Estudio de las ciencias de la salud, definición y objetivo, disciplinas, toma de decisiones vocacionales, conceptos de salud y enfermedad, modelo biopsicosocial, determinantes sociales de la salud, desarrollo humano, modelos biomédico y biopsicosocial, salud integral, autocuidado físico, emocional y relaciones personales.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: Introducción a las Ciencias de la Salud",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Definición y Objetivo de las Ciencias de la Salud",
                    desc: "Comprensión del concepto de ciencias de la salud, su objetivo general y el enfoque biopsicosocial desarrollado por George Engel.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Definición de Ciencias de la Salud",
                            q: "¿Qué son las ciencias de la salud?",
                            options: ["Un conjunto de disciplinas científicas enfocadas en el cuidado de la salud y la comprensión de las enfermedades", "Una sola disciplina médica", "Un área exclusiva de la biología", "Una rama de las matemáticas"],
                            answerIndex: 0,
                            explain: "Las ciencias de la salud son un conjunto de disciplinas científicas enfocadas en el cuidado de la salud y la comprensión de las enfermedades."
                        },
                        {
                            topic: "Dimensiones de las Ciencias de la Salud",
                            q: "¿Cuáles son las dimensiones que contemplan las ciencias de la salud?",
                            options: ["Investigación, aplicada y social", "Física, mental y espiritual", "Biológica, química y física", "Teórica, práctica y experimental"],
                            answerIndex: 0,
                            explain: "Las ciencias de la salud contemplan tres dimensiones: investigación (generar conocimientos), aplicada (mejorar procesos) y social (estrategias de prevención, diagnóstico y tratamiento)."
                        },
                        {
                            topic: "Enfoque Biopsicosocial",
                            q: "¿Quién desarrolló el enfoque biopsicosocial del ser humano?",
                            options: ["Sigmund Freud", "George Engel", "Louis Pasteur", "Hipócrates"],
                            answerIndex: 1,
                            explain: "El enfoque biopsicosocial fue desarrollado por George Engel en 1977, y comprende la salud de los seres humanos de forma holística."
                        },
                        {
                            topic: "Enfoque Biopsicosocial",
                            q: "¿Qué aspectos considera el enfoque biopsicosocial?",
                            options: ["Solo aspectos biológicos", "Aspectos biológicos, psicológicos y sociales", "Solo aspectos psicológicos", "Solo aspectos sociales"],
                            answerIndex: 1,
                            explain: "El enfoque biopsicosocial considera que la salud participa de aspectos biológicos, psicológicos y de carácter social."
                        },
                        {
                            topic: "Paradigma Biomédico",
                            q: "¿Qué cuestiona el enfoque biopsicosocial sobre el paradigma biomédico?",
                            options: ["La concepción dualista del ser humano", "La importancia de la medicina", "El uso de tecnología", "La prevención de enfermedades"],
                            answerIndex: 0,
                            explain: "El enfoque biopsicosocial cuestiona la concepción dualista del ser humano (mente-cuerpo separados) que ha derivado en que muchos médicos separaran 'la máquina-cuerpo' de la 'biografía' y las 'emociones' de la persona."
                        },
                        {
                            topic: "Modelo Causa-Efecto",
                            q: "¿Qué cuestionó el enfoque biopsicosocial sobre el modelo causa-efecto?",
                            options: ["Que los padecimientos son producto de una serie de sistemas que interactúan entre sí", "Que solo hay una causa para cada enfermedad", "Que los síntomas son lo más importante", "Que el tratamiento debe ser único"],
                            answerIndex: 0,
                            explain: "El enfoque biopsicosocial cuestionó el modelo 'causa-efecto' con el que se suelen explicar los padecimientos, anteponiendo que estos son producto de una serie de sistemas que interactúan unos con otros."
                        },
                        {
                            topic: "Humanismo y Salud",
                            q: "Según Ramón de la Fuente Muñiz, ¿qué papel juega el humanismo en la medicina?",
                            options: ["Es un complemento innecesario", "Es una dimensión necesaria de la medicina", "No tiene relación con la salud", "Solo es importante para los médicos"],
                            answerIndex: 1,
                            explain: "Ramón de la Fuente Muñiz señaló que 'el humanismo no es sólo un complemento sino una dimensión necesaria de la medicina', ya que la salud está influida por motivos, esperanzas, temores y contradicciones de las personas."
                        },
                        {
                            topic: "Medicina",
                            q: "¿Cuál es una de las caras más visibles de las ciencias de la salud?",
                            options: ["La enfermería", "La medicina", "La odontología", "La psicología"],
                            answerIndex: 1,
                            explain: "Una de las caras más visibles de las ciencias de la salud y la más extendida es la medicina, que se enfoca en brindar atención médica y diagnosticar y tratar enfermedades."
                        },
                        {
                            topic: "Enfermería",
                            q: "¿Qué abarca la enfermería según el Consejo Internacional de Enfermeras?",
                            options: ["Solo cuidados en hospitales", "Cuidados autónomos y en colaboración en todos los contextos", "Solo cuidados en casa", "Solo cuidados preventivos"],
                            answerIndex: 1,
                            explain: "La enfermería abarca los cuidados autónomos y en colaboración que se prestan a las personas de todas las edades, familias, grupos y comunidades, enfermas o sanas, en todos los contextos."
                        },
                        {
                            topic: "Epidemiología",
                            q: "¿En qué se enfoca la epidemiología?",
                            options: ["En el estudio de los dientes", "En estudiar y tratar los factores que favorecen la propagación de enfermedades", "En el estudio de la mente", "En el desarrollo de medicamentos"],
                            answerIndex: 1,
                            explain: "La epidemiología se enfoca en estudiar y tratar los distintos factores que favorecen la propagación de enfermedades, desde ámbitos regionales hasta espacios que abarcan varias naciones."
                        },
                        {
                            topic: "Disciplinas de la salud",
                            q: "¿Qué disciplina se enfoca en la evaluación y atención de problemas psicológicos y emocionales?",
                            options: ["Psicología clínica", "Odontología", "Nutrición", "Farmacología"],
                            answerIndex: 0,
                            explain: "La psicología clínica aborda el bienestar mental y emocional mediante la evaluación y la intervención psicológicas."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Disciplinas del Área de Ciencias de la Salud",
                    desc: "Identificación de las disciplinas que apoyan a las ciencias de la salud, divididas en diagnóstico y estudio de enfermedades.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Ciencia y Salud",
                            q: "Según Máxima (2019), ¿qué es la ciencia?",
                            options: ["Un conjunto de creencias", "La agrupación de conocimientos logrados mediante el método científico", "Una opinión personal", "Un sistema religioso"],
                            answerIndex: 1,
                            explain: "Máxima define como ciencia a la agrupación de conocimientos logrados aplicando una modalidad ordenada y sistemática de trabajo conocida como método científico."
                        },
                        {
                            topic: "Método Científico",
                            q: "¿Cuáles son los pasos del método científico mencionados en el contenido?",
                            options: ["Observación, experimentación y conclusión", "Formular hipótesis, parte práctica y conclusión", "Teoría, práctica y resultado", "Pregunta, respuesta y verificación"],
                            answerIndex: 1,
                            explain: "El método científico implica: primero se formula una hipótesis, después se realiza la parte práctica para la comprobación y al final se hace una conclusión."
                        },
                        {
                            topic: "Química Clínica",
                            q: "¿Para qué sirve la química clínica en el diagnóstico médico?",
                            options: ["Para tomar radiografías", "Para realizar análisis químicos que comprueben qué enfermedad presenta el paciente", "Para realizar cirugías", "Para dar terapia psicológica"],
                            answerIndex: 1,
                            explain: "La química clínica apoya al diagnóstico que el doctor cree que su paciente padece y para comprobar le pide que realice una serie de análisis químicos."
                        },
                        {
                            topic: "Biometría Hemática",
                            q: "¿Qué tipo de análisis es la biometría hemática?",
                            options: ["Un análisis de sangre para verificar procesos infecciosos o virales", "Un análisis de orina", "Una radiografía", "Una tomografía"],
                            answerIndex: 0,
                            explain: "La biometría hemática es un análisis de sangre que sirve para verificar si la persona está presentando un proceso infeccioso o viral."
                        },
                        {
                            topic: "Radiología",
                            q: "¿En qué casos se requiere la radiología?",
                            options: ["Para analisis de sangre", "En caso de fracturas o esguinces para observar cómo se encuentran los huesos", "Para estudiar enfermedades mentales", "Para analizar la nutrición"],
                            answerIndex: 1,
                            explain: "En caso de fracturas o esguinces se requiere hacer una toma de imagen (radiología) para observar cómo se encuentran los huesos del paciente."
                        },
                        {
                            topic: "Ginecología",
                            q: "¿Qué estudia la ginecología?",
                            options: ["Las enfermedades que pueden presentar los hombres", "Las enfermedades que pueden presentar las mujeres", "Las enfermedades de los niños", "Las enfermedades de los ancianos"],
                            answerIndex: 1,
                            explain: "La ginecología es la parte de la medicina que estudia las enfermedades que pueden presentar las mujeres."
                        },
                        {
                            topic: "Geriatría",
                            q: "¿Qué estudia la geriatría?",
                            options: ["Las enfermedades de los niños", "Las enfermedades que se presentan en la vejez", "Las enfermedades de las mujeres", "Las enfermedades mentales"],
                            answerIndex: 1,
                            explain: "La geriatría es la parte de la medicina que estudia las enfermedades que se presentan en la vejez."
                        },
                        {
                            topic: "Psiquiatría",
                            q: "¿Qué estudia la psiquiatría?",
                            options: ["Las enfermedades del cuerpo", "Las enfermedades del cerebro y mentales", "Las enfermedades de los huesos", "Las enfermedades del corazón"],
                            answerIndex: 1,
                            explain: "La psiquiatría es la rama de la medicina que ayuda al diagnóstico, tratamiento y prevención de enfermedades mentales, ya que así como se enferma el cuerpo también el cerebro puede enfermar."
                        },
                        {
                            topic: "Demografía",
                            q: "¿Cómo apoya la demografía a las ciencias de la salud?",
                            options: ["Estudiando las emociones", "Describiendo las características de la población para diagnósticos sanitarios", "Estudiando la cultura", "Analizando alimentos"],
                            answerIndex: 1,
                            explain: "La demografía es una rama de la estadística donde se describen las características de la población y estos datos son necesarios para la realización de un diagnóstico sanitario."
                        },
                        {
                            topic: "Antropología",
                            q: "¿Por qué es importante la antropología para la salud?",
                            options: ["Porque estudia el origen del hombre y sus creencias que pueden afectar la salud", "Porque estudia las leyes", "Porque analiza los alimentos", "Porque estudia los medicamentos"],
                            answerIndex: 0,
                            explain: "La antropología es el estudio del hombre y para realizar un diagnóstico se deben considerar las creencias que tiene la población, ya que de ahí pueden partir algunas actividades perjudiciales para el bienestar físico."
                        },
                        {
                            topic: "Nutrición",
                            q: "¿Qué disciplina estudia directamente la relación entre los alimentos y la salud?",
                            options: ["Odontología", "Nutrición", "Farmacología", "Anatomía"],
                            answerIndex: 1,
                            explain: "La nutrición examina cómo la alimentación se relaciona con el funcionamiento del organismo y la salud."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Toma de Decisiones para la Elección de una Profesión",
                    desc: "Identificación de aspectos para la toma de decisiones informadas en la elección de carrera en el área de la salud.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Orientación Vocacional",
                            q: "¿Qué es la orientación vocacional?",
                            options: ["Un proceso para explorar y comprender intereses, habilidades y valores para tomar decisiones sobre el futuro académico y profesional", "Una prueba de inteligencia", "Un curso obligatorio", "Una entrevista de trabajo"],
                            answerIndex: 0,
                            explain: "La orientación vocacional es un proceso diseñado para ayudar a explorar y comprender intereses, habilidades y valores, así como a tomar decisiones informadas sobre el futuro académico y profesional."
                        },
                        {
                            topic: "Habilidades y Fortalezas",
                            q: "¿Qué son las habilidades y las fortalezas en el contexto de la elección de carrera?",
                            options: ["Las debilidades de una persona", "Las capacidades y destrezas, y las áreas en las que una persona destaca", "Los intereses de una persona", "Las metas profesionales"],
                            answerIndex: 1,
                            explain: "Las habilidades se refieren a las capacidades y destrezas que una persona posee; las fortalezas son las áreas en las que una persona destaca o tiene ventajas."
                        },
                        {
                            topic: "Debilidades",
                            q: "¿Qué son las debilidades en el contexto de la elección de carrera?",
                            options: ["Las áreas en las que una persona puede mejorar", "Las fortalezas de una persona", "Los intereses de una persona", "Las metas profesionales"],
                            answerIndex: 0,
                            explain: "Las debilidades son las áreas en las que una persona puede mejorar y es importante identificarlas para el desarrollo personal y profesional."
                        },
                        {
                            topic: "Metas Profesionales",
                            q: "¿Qué son las metas profesionales?",
                            options: ["Los intereses de una persona", "Los objetivos que se desean alcanzar en el ámbito laboral", "Las debilidades de una persona", "Las habilidades de una persona"],
                            answerIndex: 1,
                            explain: "Las metas profesionales son los objetivos que se desean alcanzar en el ámbito laboral y es importante reflexionar sobre ellas para encontrar una carrera alineada con lo que realmente apasiona."
                        },
                        {
                            topic: "Oportunidades Laborales",
                            q: "¿Qué deben considerar las y los estudiantes sobre las oportunidades laborales?",
                            options: ["Solo el salario", "Las posibilidades de empleo y de desarrollo profesional en un campo específico", "Solo la ubicación", "Solo el prestigio"],
                            answerIndex: 1,
                            explain: "Deben considerar las oportunidades laborales, es decir, las posibilidades de empleo que existen en un campo específico, así como las oportunidades de desarrollo profesional."
                        },
                        {
                            topic: "Elección de Institución",
                            q: "¿Qué factores deben considerarse al elegir una institución educativa?",
                            options: ["Solo el costo", "Calidad educativa, validez oficial, planes de estudio, perfil de egreso, duración y costos", "Solo la ubicación", "Solo el prestigio"],
                            answerIndex: 1,
                            explain: "Al elegir una institución educativa se deben considerar: la calidad educativa, la validez oficial, los planes de estudio, el perfil de egreso, la duración de la carrera y los costos económicos."
                        },
                        {
                            topic: "Autoconocimiento",
                            q: "¿Qué aspectos debe reflexionar una persona para elegir una carrera?",
                            options: ["Solo sus habilidades", "Habilidades, fortalezas, debilidades, intereses y metas profesionales", "Solo sus intereses", "Solo sus metas"],
                            answerIndex: 1,
                            explain: "Es importante reflexionar sobre habilidades, fortalezas, debilidades, intereses y metas profesionales para encontrar una carrera que se alinee con lo que realmente apasiona."
                        },
                        {
                            topic: "FODA Personal",
                            q: "¿Qué herramienta se menciona para el autoconocimiento en la elección de carrera?",
                            options: ["El análisis FODA personal", "El currículum vitae", "La carta de presentación", "El portafolio de evidencias"],
                            answerIndex: 0,
                            explain: "Se menciona el FODA personal (Fortalezas, Oportunidades, Debilidades y Amenazas) como herramienta para el autoconocimiento en la elección de carrera."
                        },
                        {
                            topic: "Criterio Personal",
                            q: "¿Qué se recomienda sobre las modas pasajeras al elegir una carrera?",
                            options: ["Seguir las modas", "No dejarse llevar por modas pasajeras, manteniendo firme el propio criterio y convicciones", "Ignorar las modas", "Solo considerar las modas"],
                            answerIndex: 1,
                            explain: "Se recomienda no dejarse llevar por modas pasajeras, manteniendo firme el propio criterio y convicciones al elegir una carrera."
                        },
                        {
                            topic: "Decisión Informada",
                            q: "¿Por qué es importante tomar decisiones informadas para elegir una carrera universitaria?",
                            options: ["Porque es una etapa que marca la formación como adulto y el futuro profesional", "Porque es obligatorio", "Porque todos deben estudiar lo mismo", "Porque no hay otra opción"],
                            answerIndex: 0,
                            explain: "La elección de una carrera universitaria es una etapa importante en la vida ya que marca la formación como adultos y el futuro profesional, por lo que es importante tomar decisiones informadas y reflexionadas."
                        },
                        {
                            topic: "Elección profesional",
                            q: "Dos carreras de salud interesan por igual a una estudiante. ¿Qué le permitiría tomar una decisión más informada?",
                            options: ["Elegir solo por la duración del programa", "Seguir la elección de sus amistades", "Comparar los planes de estudio, sus habilidades y las oportunidades laborales", "Guiarse únicamente por el nombre de la carrera"],
                            answerIndex: 2,
                            explain: "La decisión informada integra intereses y habilidades con datos sobre la formación y el campo de trabajo."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Comprendiendo la Salud y la Enfermedad: Modelo Biopsicosocial",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Concepto de Salud y Enfermedad",
                    desc: "Comprensión de los conceptos de salud y enfermedad, historia natural de la enfermedad, triada ecológica y diferencia entre síntoma y signo.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Definición de Salud OMS",
                            q: "¿Cómo define la Organización Mundial de la Salud (OMS) la salud?",
                            options: ["La ausencia de enfermedad", "El estado completo de bienestar físico, mental y social", "La capacidad de trabajar", "La esperanza de vida"],
                            answerIndex: 1,
                            explain: "La OMS define la salud como 'el estado completo de bienestar físico, mental y social de una persona', no solo la ausencia de enfermedad."
                        },
                        {
                            topic: "Origen de Salud y Enfermedad",
                            q: "¿Qué origen tenían los conceptos de salud y enfermedad en la antigüedad?",
                            options: ["Científico", "Místico-religioso", "Filosófico", "Matemático"],
                            answerIndex: 1,
                            explain: "La relación de salud, bienestar y enfermedad tiene un origen místico-religioso. En la antigüedad se creía que las personas con problemas mentales estaban endemoniadas."
                        },
                        {
                            topic: "Hipócrates",
                            q: "¿Quién es considerado el padre de la Medicina?",
                            options: ["Louis Pasteur", "Hipócrates", "George Engel", "Janssen"],
                            answerIndex: 1,
                            explain: "Hipócrates (460 a.C-370 a.C.) es considerado el padre de la Medicina y postulaba la doctrina del equilibrio de los cuatro elementos."
                        },
                        {
                            topic: "Doctrina de Hipócrates",
                            q: "¿Qué postulaba Hipócrates en su doctrina del equilibrio?",
                            options: ["Que la enfermedad se produce por castigo divino", "Que cuando se rompe el orden y existe un desequilibrio se produce la enfermedad", "Que la enfermedad es causada por bacterias", "Que la enfermedad es hereditaria"],
                            answerIndex: 1,
                            explain: "Hipócrates postulaba en su doctrina del equilibrio de los cuatro elementos que cuando se rompe el orden, es decir que existe un desequilibrio, se produce la enfermedad."
                        },
                        {
                            topic: "Periodo Prepatogénico",
                            q: "¿Qué ocurre en el periodo prepatogénico de la historia natural de la enfermedad?",
                            options: ["Ya hay síntomas", "Es la interacción del huésped, el agente y el medio sin que se vea afectada la salud", "El paciente está en tratamiento", "La enfermedad ya está diagnosticada"],
                            answerIndex: 1,
                            explain: "El periodo prepatogénico es la interacción del huésped, el agente y el medio como factores potencialmente productores de la enfermedad, pero sin que se vea todavía afectada la salud."
                        },
                        {
                            topic: "Periodo Patogénico",
                            q: "¿Qué ocurre en el periodo patogénico?",
                            options: ["El paciente está sano", "Es el proceso evolutivo donde los estímulos se alteran y provocan respuestas que hacen perder el equilibrio al huésped", "Solo se aplica prevención", "No hay cambios en el huésped"],
                            answerIndex: 1,
                            explain: "El periodo patogénico es el proceso evolutivo de la enfermedad donde los estímulos se alteran y provocan respuestas en el huésped, haciendo que pierda el equilibrio inicial y resultando en la enfermedad."
                        },
                        {
                            topic: "Triada Ecológica",
                            q: "¿Qué tres factores conforman la triada ecológica?",
                            options: ["Agente, huésped y medio ambiente", "Síntoma, signo y diagnóstico", "Prevención, tratamiento y rehabilitación", "Biología, psicología y sociedad"],
                            answerIndex: 0,
                            explain: "La triada ecológica está conformada por tres factores: el agente (que infecta), el huésped (que se infecta) y el medio ambiente (donde ocurre la interacción)."
                        },
                        {
                            topic: "Tipos de Agentes",
                            q: "¿Cuál es un ejemplo de agente biológico causante de enfermedad?",
                            options: ["Veneno", "Virus, bacterias u hongos", "Accidente", "Anemia por deficiencia de hierro"],
                            answerIndex: 1,
                            explain: "Los agentes biológicos incluyen virus, bacterias y hongos que pueden causar enfermedades en el organismo."
                        },
                        {
                            topic: "Diferencia Síntoma y Signo",
                            q: "¿Cuál es la diferencia entre un síntoma y un signo clínico?",
                            options: ["El síntoma lo mide el médico; el signo lo siente el paciente", "El signo lo puede medir el médico; el síntoma lo siente el paciente", "Ambos son lo mismo", "El síntoma es más importante que el signo"],
                            answerIndex: 1,
                            explain: "Los signos clínicos son manifestaciones que el médico puede medir (como presión arterial y temperatura). Los síntomas son manifestaciones que siente el paciente (como dolor de cabeza) y no se pueden medir."
                        },
                        {
                            topic: "Prevención Primaria",
                            q: "¿Qué tipo de prevención se realiza en el periodo prepatogénico?",
                            options: ["Prevención terciaria", "Prevención secundaria", "Prevención primaria", "Rehabilitación"],
                            answerIndex: 2,
                            explain: "La prevención primaria se lleva a cabo en el periodo prepatogénico, donde las personas se encuentran sanas, realizando campañas de vacunación o promociones de la salud."
                        },
                        {
                            topic: "Tríada ecológica",
                            q: "En la tríada ecológica, ¿cómo se clasifica el entorno físico y social que rodea al huésped?",
                            options: ["Agente", "Huésped", "Periodo patogénico", "Ambiente"],
                            answerIndex: 3,
                            explain: "El ambiente reúne las condiciones externas en las que interactúan el agente y el huésped."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Determinantes Sociales de la Salud y Desarrollo Humano",
                    desc: "Comprensión de los determinantes sociales de la salud, su clasificación, y las etapas del desarrollo humano.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Determinantes Sociales de la Salud",
                            q: "¿Cómo define la OMS los determinantes sociales de la salud?",
                            options: ["Solo factores médicos", "Las circunstancias en que las personas nacen, crecen, viven, trabajan y envejecen, incluido el sistema de salud", "Solo factores genéticos", "Solo factores económicos"],
                            answerIndex: 1,
                            explain: "La Comisión de Determinantes Sociales de la Salud de la OMS los definió como 'las circunstancias en que las personas nacen, crecen, viven, trabajan y envejecen, incluido el sistema de salud'."
                        },
                        {
                            topic: "Clasificación de Determinantes",
                            q: "¿Cómo se clasifican los determinantes sociales de la salud?",
                            options: ["Responsabilidad del Estado y responsabilidad del sector salud", "Solo económicos", "Solo políticos", "Solo sociales"],
                            answerIndex: 0,
                            explain: "Los determinantes de la salud se dividen en dos grandes grupos: determinantes que son responsabilidad del Estado y determinantes que son responsabilidad del sector salud."
                        },
                        {
                            topic: "Determinantes del Estado",
                            q: "¿Qué determinan los ámbitos económico, social y político según los determinantes de la salud?",
                            options: ["Las condiciones de vida de las personas y su bienestar", "Solo los impuestos", "Solo la educación", "Solo la vivienda"],
                            answerIndex: 0,
                            explain: "En los ámbitos económico, social y político, las circunstancias están influenciadas por la distribución del dinero, el poder y los recursos, lo que determina las condiciones de vida y el bienestar."
                        },
                        {
                            topic: "Factores de Estilo de Vida",
                            q: "¿Qué tipo de determinantes incluyen la alimentación, actividad física y adicciones?",
                            options: ["Factores relacionados con el estilo de vida", "Factores ambientales", "Factores genéticos", "Factores de atención sanitaria"],
                            answerIndex: 0,
                            explain: "Los factores relacionados con el estilo de vida incluyen comportamientos como alimentación, actividad física, adicciones y conductas peligrosas."
                        },
                        {
                            topic: "Factores Ambientales",
                            q: "¿Qué incluyen los factores ambientales como determinantes de la salud?",
                            options: ["Contaminación atmosférica, química del suelo, agua y aire", "Solo la contaminación del aire", "Solo el agua", "Solo el suelo"],
                            answerIndex: 0,
                            explain: "Los factores ambientales incluyen factores físicos, biológicos, de contaminación atmosférica y química del suelo, agua y aire, así como factores socioculturales y psicosociales."
                        },
                        {
                            topic: "Desarrollo Físico",
                            q: "¿Qué estudia el desarrollo físico en el ser humano?",
                            options: ["Los procesos mentales", "El crecimiento del cuerpo y el cerebro, y las habilidades motrices", "Las emociones y la personalidad", "Las relaciones sociales"],
                            answerIndex: 1,
                            explain: "El desarrollo físico estudia el proceso de crecimiento del cuerpo y el cerebro, las pautas de cambio de las capacidades sensoriales y las habilidades motrices."
                        },
                        {
                            topic: "Desarrollo Cognoscitivo",
                            q: "¿Qué estudia el desarrollo cognoscitivo?",
                            options: ["El crecimiento del cuerpo", "Las pautas de cambio de los procesos mentales como aprendizaje, atención, memoria, lenguaje, pensamiento, razonamiento y creatividad", "Las emociones", "Las relaciones sociales"],
                            answerIndex: 1,
                            explain: "El desarrollo cognoscitivo estudia las pautas de cambio de los procesos mentales como aprendizaje, atención, memoria, lenguaje, pensamiento, razonamiento y creatividad."
                        },
                        {
                            topic: "Desarrollo Psicosocial",
                            q: "¿Qué estudia el desarrollo psicosocial?",
                            options: ["El crecimiento del cuerpo", "Los procesos mentales", "Las pautas de cambio de las emociones, la personalidad y las relaciones sociales", "Las habilidades motrices"],
                            answerIndex: 2,
                            explain: "El desarrollo psicosocial estudia las pautas de cambio de las emociones, la personalidad y las relaciones sociales."
                        },
                        {
                            topic: "Etapas del Desarrollo",
                            q: "Según Papalia, ¿cuáles son las etapas del ciclo vital?",
                            options: ["Prenatal, infancia, niñez temprana, niñez media, adolescencia, adultez temprana, adultez media y adultez tardía", "Solo infancia y adultez", "Solo niñez y vejez", "Solo adolescencia y adultez"],
                            answerIndex: 0,
                            explain: "Papalia clasifica las etapas del desarrollo en: prenatal, infancia, niñez temprana, niñez media, adolescencia, adultez temprana, adultez media y adultez tardía."
                        },
                        {
                            topic: "Importancia de las Etapas",
                            q: "¿Por qué son fundamentales la infancia y la adolescencia en el desarrollo humano?",
                            options: ["Porque son las etapas más cortas", "Porque en esas etapas se sientan las bases de lo que seremos como individuos", "Porque no tienen importancia", "Porque son las más fáciles"],
                            answerIndex: 1,
                            explain: "La infancia y la adolescencia son fundamentales ya que en esas etapas se sientan las bases de lo que seremos como individuos."
                        },
                        {
                            topic: "Determinantes sociales",
                            q: "¿Cuál situación ejemplifica un determinante social que dificulta el acceso a la atención de salud?",
                            options: ["Vivir lejos de un centro de salud sin transporte accesible", "Tener un grupo sanguíneo poco frecuente", "Heredar un rasgo físico de un familiar", "Presentar una reacción inmunitaria"],
                            answerIndex: 0,
                            explain: "La ubicación de los servicios y el transporte son condiciones del entorno que influyen en el acceso efectivo."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Modelo Biomédico vs Modelo Biopsicosocial",
                    desc: "Comprensión de las características y diferencias entre el modelo biomédico y el modelo biopsicosocial.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Modelo Biomédico",
                            q: "¿En qué se centra principalmente el modelo biomédico de la salud?",
                            options: ["En los aspectos psicológicos", "En los aspectos físicos y biológicos de la enfermedad", "En los aspectos sociales", "En los aspectos espirituales"],
                            answerIndex: 1,
                            explain: "El modelo biomédico se centra principalmente en los aspectos físicos y biológicos de la enfermedad."
                        },
                        {
                            topic: "Modelo Biopsicosocial",
                            q: "¿Qué considera el modelo biopsicosocial en la salud y la enfermedad?",
                            options: ["Solo factores biológicos", "La influencia de factores psicológicos, sociales y ambientales", "Solo factores ambientales", "Solo factores psicológicos"],
                            answerIndex: 1,
                            explain: "El modelo biopsicosocial considera la influencia de factores psicológicos, sociales y ambientales en la salud y en la enfermedad."
                        },
                        {
                            topic: "Causa de Enfermedad en Modelo Biomédico",
                            q: "Según el modelo biomédico, ¿dónde se encuentra la causa de la enfermedad?",
                            options: ["En anomalías o disfunciones físicas como infecciones o lesiones", "En factores psicológicos", "En factores sociales", "En factores ambientales"],
                            answerIndex: 0,
                            explain: "Para el modelo biomédico, la causa de la enfermedad se encuentra principalmente en anomalías o disfunciones físicas, como infecciones, lesiones o desequilibrios bioquímicos."
                        },
                        {
                            topic: "Causa de Enfermedad en Modelo Biopsicosocial",
                            q: "Según el modelo biopsicosocial, ¿cuál es la causa de la enfermedad?",
                            options: ["Una sola causa biológica", "Una interacción entre factores biológicos, psicológicos y sociales", "Solo factores psicológicos", "Solo factores sociales"],
                            answerIndex: 1,
                            explain: "Para el modelo biopsicosocial, la causa de la enfermedad es más compleja ya que involucra una interacción entre factores biológicos, psicológicos y sociales."
                        },
                        {
                            topic: "Enfoque de Tratamiento",
                            q: "¿Cuál es la diferencia en el enfoque de tratamiento entre ambos modelos?",
                            options: ["El biomédico busca eliminar síntomas; el biopsicosocial busca mejorar la calidad de vida", "Ambos buscan lo mismo", "El biomédico es más completo", "El biopsicosocial solo trata síntomas"],
                            answerIndex: 0,
                            explain: "Mientras que el modelo biomédico se centra principalmente en la eliminación de síntomas, el biopsicosocial busca mejorar la calidad de vida del paciente mediante cambios en su estilo de vida."
                        },
                        {
                            topic: "Definición de Modelos",
                            q: "Según Elio-Calvo, ¿cómo define los modelos biomédico y biopsicosocial?",
                            options: ["Como modelos conceptuales contrastantes que organizan pensamientos y conocimientos en medicina", "Como modelos idénticos", "Como modelos obsoletos", "Como modelos exclusivamente teóricos"],
                            answerIndex: 0,
                            explain: "Elio-Calvo define los modelos biomédico y biopsicosocial como 'modelos conceptuales contrastantes o marcos de referencia que organizan nuestros pensamientos, conocimientos y experiencia en medicina y práctica médica'."
                        },
                        {
                            topic: "Objetivo del Modelo Biopsicosocial",
                            q: "¿Qué busca el modelo biopsicosocial además de tratar la enfermedad?",
                            options: ["Solo curar síntomas", "Mejorar la calidad de vida y abordar necesidades físicas, emocionales y sociales", "Solo reducir costos", "Solo aumentar la esperanza de vida"],
                            answerIndex: 1,
                            explain: "El modelo biopsicosocial busca mejorar la calidad de vida del paciente identificando y abordando sus necesidades físicas, emocionales y sociales."
                        },
                        {
                            topic: "Limitación del Modelo Biomédico",
                            q: "¿Qué limitación tiene el modelo biomédico según el contenido?",
                            options: ["Es demasiado completo", "Descuida los aspectos psicológicos y sociales de la salud", "Es muy caro", "Es muy lento"],
                            answerIndex: 1,
                            explain: "El modelo biomédico se centra principalmente en los aspectos físicos y biológicos, descuidando los aspectos psicológicos y sociales de la salud."
                        },
                        {
                            topic: "Enfoque Biopsicosocial",
                            q: "¿Qué aspectos integra el modelo biopsicosocial para abordar la salud?",
                            options: ["Solo el aspecto físico", "Aspectos físicos, psicológicos y sociales", "Solo el aspecto social", "Solo el aspecto psicológico"],
                            answerIndex: 1,
                            explain: "El modelo biopsicosocial integra aspectos físicos, psicológicos y sociales para abordar la salud de manera integral."
                        },
                        {
                            topic: "Comparación de Modelos",
                            q: "¿Qué diferencia fundamental existe entre el modelo biomédico y el biopsicosocial?",
                            options: ["El biomédico es más moderno", "El biomédico se enfoca en la enfermedad; el biopsicosocial en la persona en su totalidad", "El biopsicosocial es más antiguo", "No hay diferencias significativas"],
                            answerIndex: 1,
                            explain: "El modelo biomédico se enfoca principalmente en la enfermedad y sus aspectos físicos, mientras que el biopsicosocial considera a la persona en su totalidad, integrando aspectos biológicos, psicológicos y sociales."
                        },
                        {
                            topic: "Modelo biopsicosocial",
                            q: "En una consulta, se consideran síntomas físicos, estrés y apoyo familiar. ¿Qué modelo ejemplifica esta evaluación?",
                            options: ["Biomédico centrado en la lesión", "Biopsicosocial", "Anatómico centrado en los órganos", "Genético centrado en la herencia"],
                            answerIndex: 1,
                            explain: "El modelo biopsicosocial integra los factores biológicos, psicológicos y sociales."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Salud Integral",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Salud Integral y Autocuidado",
                    desc: "Identificación del concepto de salud integral, autocuidado, modelo PERMA, resiliencia y comunicación asertiva.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Salud Integral",
                            q: "¿Qué es la salud integral?",
                            options: ["Solo el bienestar físico", "La integración de las dimensiones física, mental y social del ser humano", "Solo la ausencia de enfermedad", "Solo el bienestar social"],
                            answerIndex: 1,
                            explain: "La salud integral o bienestar integra las tres dimensiones del ser humano: física, mental y social, dando como resultado la salud integral."
                        },
                        {
                            topic: "Pilares de la Salud Integral",
                            q: "¿Cuáles son los pilares esenciales para construir una vida plena y satisfactoria según la salud integral?",
                            options: ["Conocer nuestro cuerpo, comprender nuestra forma de pensar y habilidades sociales, e identificar y satisfacer nuestras necesidades", "Solo hacer ejercicio", "Solo comer bien", "Solo dormir"],
                            answerIndex: 0,
                            explain: "Los pilares esenciales son: conocer nuestro cuerpo, comprender nuestra forma de pensar y habilidades sociales, e identificar y satisfacer nuestras necesidades inherentes."
                        },
                        {
                            topic: "Autocuidado",
                            q: "¿Qué es el autocuidado según Boff?",
                            options: ["Un modo de ser cuidado que valora aquello que tiene importancia", "Solo cuidar el cuerpo", "Solo cuidar la mente", "Solo cuidar las relaciones"],
                            answerIndex: 0,
                            explain: "Para Boff, el cuidado es un 'modo de ser cuidado' que valora aquello que tiene importancia y que por tanto se cuida, se respeta y se acoge como algo valioso."
                        },
                        {
                            topic: "Autocuidado Integral",
                            q: "¿Qué implica el autocuidado integral de la salud?",
                            options: ["Solo cuidar el cuerpo", "Identificar y tomar mejores decisiones sobre necesidades físicas, emocionales, mentales, financieras y espirituales", "Solo cuidar la mente", "Solo cuidar las finanzas"],
                            answerIndex: 1,
                            explain: "El autocuidado integral implica identificar y tomar mejores decisiones sobre nuestras necesidades físicas, emocionales, mentales, financieras y espirituales."
                        },
                        {
                            topic: "Beneficios del Autocuidado",
                            q: "¿Cuáles son algunos beneficios del autocuidado?",
                            options: ["Mejora la autoestima, relaciones personales, manejo del estrés y calidad de vida", "Solo mejora la salud física", "Solo mejora la salud mental", "Solo mejora las finanzas"],
                            answerIndex: 0,
                            explain: "Los beneficios del autocuidado incluyen mejora de la autoestima, relaciones personales más sanas, manejo del estrés y mejora de la calidad de vida."
                        },
                        {
                            topic: "Recomendaciones de Autocuidado",
                            q: "¿Cuántos minutos de actividad física recomienda la OMS para adultos a la semana?",
                            options: ["60 a 90 minutos", "150 a 300 minutos", "30 a 60 minutos", "300 a 400 minutos"],
                            answerIndex: 1,
                            explain: "La OMS recomienda al menos entre 150 a 300 minutos de actividad física de intensidad moderada a la semana para los adultos."
                        },
                        {
                            topic: "Modelo PERMA",
                            q: "¿Quién propuso el modelo PERMA de bienestar?",
                            options: ["George Engel", "Martin Seligman", "Hipócrates", "Louis Pasteur"],
                            answerIndex: 1,
                            explain: "El modelo PERMA fue propuesto por Martin Seligman, pionero del campo de la psicología positiva, y consta de cinco pilares que definen colectivamente el bienestar."
                        },
                        {
                            topic: "Resiliencia",
                            q: "¿Qué es la resiliencia?",
                            options: ["La capacidad de nunca sentirse triste", "La capacidad para recuperarse rápidamente después de una crisis o situación difícil", "La capacidad de no sentir emociones", "La capacidad de olvidar todo"],
                            answerIndex: 1,
                            explain: "La resiliencia es la capacidad para recuperarse rápidamente después de una crisis, un revés, un fracaso o una situación difícil que queda fuera de nuestro control."
                        },
                        {
                            topic: "Comunicación Asertiva",
                            q: "¿Qué caracteriza a la comunicación asertiva?",
                            options: ["Expresar lo que se piensa sin respetar a los demás", "Expresar con claridad lo que se piensa, siente o necesita, respetando a los interlocutores", "No expresar nada", "Solo expresar lo que los demás quieren escuchar"],
                            answerIndex: 1,
                            explain: "La comunicación asertiva consiste en expresar con claridad lo que se piensa, siente o necesita, teniendo en cuenta los derechos, sentimientos y valores de los interlocutores."
                        },
                        {
                            topic: "Ser Proactivo",
                            q: "¿Qué significa ser proactivo?",
                            options: ["Reaccionar a las circunstancias", "Tomar la iniciativa y responsabilidad de hacer que las cosas sucedan, anticipándose a los problemas", "Esperar a que otros tomen la delantera", "No hacer nada"],
                            answerIndex: 1,
                            explain: "Ser proactivo significa tomar la iniciativa y la responsabilidad de hacer que las cosas sucedan, anticipándose a los problemas y tomando medidas para lograr las metas."
                        },
                        {
                            topic: "Resiliencia",
                            q: "Tras un contratiempo, una persona busca apoyo y reorganiza sus actividades para recuperarse. ¿Qué capacidad demuestra?",
                            options: ["Aislamiento", "Negación", "Resiliencia", "Imitación"],
                            answerIndex: 2,
                            explain: "La resiliencia permite afrontar una dificultad, adaptarse y recuperarse."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Autocuidado de la Salud Física",
                    desc: "Identificación de hábitos para el autocuidado de la salud física: alimentación, hidratación, actividad física, descanso y manejo del estrés.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Dieta Correcta",
                            q: "¿Cuáles son las características de una dieta correcta según la NOM-043-SSA2-2005?",
                            options: ["Completa, equilibrada, inocua, suficiente, variada y adecuada", "Solo completa y equilibrada", "Solo variada y adecuada", "Solo inocua y suficiente"],
                            answerIndex: 0,
                            explain: "La NOM-043 establece que una dieta correcta debe ser: completa, equilibrada, inocua, suficiente, variada y adecuada."
                        },
                        {
                            topic: "Plato del Bien Comer",
                            q: "¿Qué grupos de alimentos incluye el plato del bien comer?",
                            options: ["Frutas y verduras, cereales y tubérculos, leguminosas y alimentos de origen animal", "Solo frutas y verduras", "Solo cereales", "Solo alimentos de origen animal"],
                            answerIndex: 0,
                            explain: "El plato del bien comer incluye tres grupos: frutas y verduras (vitaminas y minerales), cereales y tubérculos (energía), y leguminosas y alimentos de origen animal (proteínas)."
                        },
                        {
                            topic: "Jarra del Buen Beber",
                            q: "¿Para qué sirve la jarra del buen beber?",
                            options: ["Para promover hábitos de consumo responsable de bebidas", "Para medir el consumo de alimentos", "Para calcular calorías", "Para controlar el peso"],
                            answerIndex: 0,
                            explain: "La jarra del buen beber es una guía informativa que promueve hábitos de consumo responsable de bebidas y ayuda a identificar las bebidas que se deben consumir con moderación."
                        },
                        {
                            topic: "Hidratación",
                            q: "¿Cuánta agua simple se sugiere consumir al día?",
                            options: ["1 a 1.5 litros", "1.5 a 2 litros", "3 a 4 litros", "0.5 a 1 litro"],
                            answerIndex: 1,
                            explain: "Se sugiere un consumo de 1.5 a 2 litros (6-8 vasos) de agua simple al día, aunque la cantidad varía según la actividad física, estado de salud y edad."
                        },
                        {
                            topic: "Beneficios del Ejercicio",
                            q: "¿Cuál es un beneficio de la actividad física según NutrilMSS?",
                            options: ["Fortalece músculos, mejora el estado de ánimo, previene obesidad y controla glucosa", "Solo fortalece músculos", "Solo mejora el estado de ánimo", "Solo previene obesidad"],
                            answerIndex: 0,
                            explain: "Los beneficios incluyen: fortalecer músculos, mejorar el estado de ánimo, disminuir estrés y ansiedad, prevenir obesidad y controlar niveles de glucosa."
                        },
                        {
                            topic: "Recomendación de Actividad Física",
                            q: "¿Cuánto tiempo de actividad física recomienda NutrilMSS para adolescentes?",
                            options: ["30 minutos diarios", "60 minutos diarios", "90 minutos diarios", "120 minutos diarios"],
                            answerIndex: 1,
                            explain: "NutrilMSS recomienda a los adolescentes mínimo 60 minutos diarios de actividad física."
                        },
                        {
                            topic: "Definición de Estrés OMS",
                            q: "¿Cómo define la OMS el estrés?",
                            options: ["Como una enfermedad grave", "Como un estado de preocupación o tensión mental generado por una situación difícil", "Como una emoción positiva", "Como un estado de relajación"],
                            answerIndex: 1,
                            explain: "La OMS define el estrés como 'un estado de preocupación o tensión mental generado por una situación difícil'."
                        },
                        {
                            topic: "Sueño",
                            q: "¿Cuántas horas de sueño de buena calidad necesita la mayoría de los adultos?",
                            options: ["4 o más horas", "7 o más horas", "10 o más horas", "12 o más horas"],
                            answerIndex: 1,
                            explain: "La mayoría de los adultos necesita por lo menos 7 o más horas diarias de sueño de buena calidad, es decir, sueño reparador."
                        },
                        {
                            topic: "Buenos Hábitos de Sueño",
                            q: "¿Cuál es un buen hábito de sueño?",
                            options: ["Usar dispositivos electrónicos antes de dormir", "Mantener una rutina constante de sueño, acostándose y levantándose a la misma hora", "Dormir en un ambiente con mucha luz", "Dormir en un ambiente ruidoso"],
                            answerIndex: 1,
                            explain: "Mantener una rutina de sueño constante, que implica levantarse y acostarse todos los días a la misma hora, es un buen hábito de sueño."
                        },
                        {
                            topic: "Función del Sueño",
                            q: "Según Borquez, ¿qué permite el sueño al cuerpo?",
                            options: ["Solo descansar la mente", "Revitalizarse, renovarse, reponerse y relajarse, manteniendo en equilibrio los sistemas del cuerpo", "Solo descansar el cuerpo", "Solo soñar"],
                            answerIndex: 1,
                            explain: "El sueño permite al cuerpo revitalizarse, renovarse, reponerse y relajarse, manteniendo en equilibrio los sistemas inmunológico, cardiovascular, metabólico y neurológico."
                        },
                        {
                            topic: "Autocuidado físico",
                            q: "¿Qué función tiene el Plato del Bien Comer en el material de estudio?",
                            options: ["Diagnosticar deficiencias nutricionales", "Clasificar las bebidas por su contenido de azúcar", "Medir el gasto energético individual", "Orientar la selección variada y equilibrada de alimentos"],
                            answerIndex: 3,
                            explain: "Es una guía alimentaria que representa grupos de alimentos para orientar su combinación."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Autocuidado de la Salud Emocional y Relaciones Personales",
                    desc: "Identificación de la importancia de las emociones, manejo de la ansiedad, relación entre emociones y salud, y el papel de las relaciones personales.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Salud Emocional",
                            q: "¿Con qué comienza una buena salud emocional?",
                            options: ["Con ignorar las emociones", "Con ser consciente de los pensamientos, sentimientos y comportamientos", "Con reprimir las emociones", "Con evitar las relaciones sociales"],
                            answerIndex: 1,
                            explain: "Una buena salud emocional comienza con ser consciente de los pensamientos, sentimientos y comportamientos, y aprender formas saludables de lidiar con el estrés."
                        },
                        {
                            topic: "Emociones",
                            q: "¿Qué son las emociones?",
                            options: ["Reacciones psicofisiológicas que todos experimentamos a diario", "Solo sentimientos positivos", "Solo sentimientos negativos", "Decisiones racionales"],
                            answerIndex: 0,
                            explain: "Las emociones son reacciones psicofisiológicas que todos experimentamos a diario, generan cambios en la experiencia afectiva, activación fisiológica y conducta expresiva."
                        },
                        {
                            topic: "Emociones Básicas",
                            q: "¿Cuáles son las emociones básicas mencionadas?",
                            options: ["Miedo-ansiedad, ira, tristeza-depresión y asco", "Solo alegría y tristeza", "Solo miedo e ira", "Solo amor y odio"],
                            answerIndex: 0,
                            explain: "El miedo-ansiedad, la ira, la tristeza-depresión y el asco son reacciones emocionales básicas que se caracterizan por una experiencia afectiva desagradable o negativa."
                        },
                        {
                            topic: "Ansiedad",
                            q: "¿Cuándo la ansiedad se convierte en un trastorno?",
                            options: ["Cuando ayuda al organismo a prepararse para hacer algo importante", "Cuando se activa en situaciones habitualmente no amenazantes o de manera persistente, interfiriendo en la vida diaria", "Cuando siempre está presente", "Cuando no se siente"],
                            answerIndex: 1,
                            explain: "La ansiedad se convierte en trastorno cuando esta reacción se activa en situaciones habitualmente no amenazantes o de manera persistente, hasta el punto que interfiere de manera importante en la vida diaria."
                        },
                        {
                            topic: "Emociones Positivas",
                            q: "Según la Dra. Bárbara Fredrickson, ¿qué efecto tienen las emociones positivas?",
                            options: ["Expanden nuestra conciencia y nos abren a nuevas ideas", "Nos hacen ignorar los problemas", "Nos aíslan de los demás", "Nos vuelven más negativos"],
                            answerIndex: 0,
                            explain: "Fredrickson afirma que 'las emociones positivas expanden nuestra conciencia y nos abren a nuevas ideas, para que podamos crecer y sumar herramientas para la supervivencia'."
                        },
                        {
                            topic: "Resiliencia Emocional",
                            q: "¿Qué es la resiliencia emocional?",
                            options: ["Tener menos emociones negativas y recuperarse más rápido de las dificultades", "Nunca sentir emociones negativas", "Siempre estar feliz", "Ignorar los problemas"],
                            answerIndex: 0,
                            explain: "Las personas que están bien emocionalmente tienen menos emociones negativas y logran recuperarse más rápido de las dificultades, cualidad conocida como resiliencia."
                        },
                        {
                            topic: "Beneficios de Relaciones Personales",
                            q: "¿Cuál es un beneficio de tener buenas relaciones personales?",
                            options: ["Mayor tasa de ansiedad", "Menor autoestima", "Menor tasa de ansiedad o depresión y mayor autoestima", "Aislamiento social"],
                            answerIndex: 2,
                            explain: "Las personas con buenas relaciones personales tienen menor tasa de ansiedad o depresión, presentan mayor autoestima y empatía."
                        },
                        {
                            topic: "Efectos de la Soledad",
                            q: "¿Qué problemas puede causar la soledad en la salud?",
                            options: ["Patrones de sueño interrumpidos, presión arterial elevada, mayores índices de estrés y obesidad", "Solo tristeza", "Solo ansiedad", "Solo cansancio"],
                            answerIndex: 0,
                            explain: "La soledad puede causar patrones de sueño interrumpidos, presión arterial elevada, mayores índices de estrés y obesidad, afectando también al sistema inmunológico."
                        },
                        {
                            topic: "Redes Sociales y Soledad",
                            q: "¿Qué efecto paradójico pueden tener las redes sociales?",
                            options: ["Fomentan el contacto social pero pueden aumentar la soledad", "Siempre reducen la soledad", "Nunca afectan la soledad", "Solo afectan a los adultos"],
                            answerIndex: 0,
                            explain: "Resulta paradójico que una herramienta creada para fomentar el contacto social esté aumentando las vivencias de soledad, ya que la hiperconexión puede llevar al aislamiento."
                        },
                        {
                            topic: "Tipos de Conexiones Sociales",
                            q: "¿Cuáles son los tipos de conexiones sociales mencionados?",
                            options: ["Íntimas, relacionales y colectivas", "Solo familiares", "Solo amistades", "Solo laborales"],
                            answerIndex: 0,
                            explain: "Los tipos de conexiones sociales son: íntimas (familiares), relacionales (compañeros) y colectivas (personas con aficiones o ideologías compartidas)."
                        },
                        {
                            topic: "Relaciones y autocuidado emocional",
                            q: "¿Qué acción fortalece una red de apoyo ante la soledad?",
                            options: ["Buscar contacto significativo con personas de confianza", "Sustituir todas las conversaciones por actividades individuales", "Evitar hablar de las necesidades emocionales", "Esperar a que las demás personas adivinen lo que ocurre"],
                            answerIndex: 0,
                            explain: "Las relaciones de apoyo favorecen la conexión social y permiten expresar necesidades."
                        }
                    ]
                }
            }
        }
    }
};

export default cienciasSaludI;