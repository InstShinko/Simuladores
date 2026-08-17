// ============================================
// ADMINISTRACIÓN I
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const administracionI = {
    id: "administracionI",
    nombre: "ADMINISTRACIÓN I: FUNDAMENTOS, PROCESO ADMINISTRATIVO Y ENFOQUES TEÓRICOS",
    icono: "📊",
    descripcion: "Estudio de la conceptualización de la administración, características, ámbitos de aplicación, proceso administrativo (planeación, organización, dirección y control), y enfoques teóricos (basados en estructuras, personas, ambiente y actuales).",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: Fundamentos de la Administración",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Conceptualización de la Administración",
                    desc: "Comprensión de definiciones de administración, su naturaleza como ciencia social y arte, y su importancia en diversos ámbitos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Definición de Administración",
                            q: "Según la American Management Association, ¿qué es la administración?",
                            options: ["Una ciencia exacta", "La actividad por la cual se obtienen determinados resultados a través del esfuerzo y cooperación de otros individuos", "Un conjunto de leyes", "Un sistema de producción"],
                            answerIndex: 1,
                            explain: "La American Management Association define la administración como la actividad por la cual se obtienen determinados resultados a través del esfuerzo y la cooperación de otros individuos."
                        },
                        {
                            topic: "Definición de Administración",
                            q: "¿Cómo define Fernández Arena a la administración?",
                            options: ["Una ciencia social que persigue la satisfacción de objetivos institucionales mediante una estructura a través del esfuerzo humano coordinado", "Un arte", "Una técnica de producción", "Un sistema contable"],
                            answerIndex: 0,
                            explain: "Fernández Arena afirma que la administración es una ciencia social que persigue la satisfacción de objetivos institucionales por medio de una estructura a través del esfuerzo humano coordinado."
                        },
                        {
                            topic: "Definición de Administración",
                            q: "Para Cyril O'Donnell, ¿qué busca la administración?",
                            options: ["Maximizar ganancias", "La efectividad en alcanzar sus objetivos, fundada en la habilidad de conducir a sus integrantes", "Reducir costos", "Aumentar la producción"],
                            answerIndex: 1,
                            explain: "Cyril O'Donnell plantea que la administración es la dirección de un organismo social y busca la efectividad en alcanzar sus objetivos, fundada en la habilidad de conducir a sus integrantes."
                        },
                        {
                            topic: "Universalidad de la Administración",
                            q: "¿Por qué se dice que la administración tiene la característica de 'universalidad'?",
                            options: ["Porque solo se aplica en empresas grandes", "Porque está presente en todo tipo de organización, empresa y en la vida diaria", "Porque solo se aplica en el sector público", "Porque es una ciencia exacta"],
                            answerIndex: 1,
                            explain: "La administración es universal porque se aplica en todos los tipos de organización y empresas, así como en todos los niveles e incluso en la vida diaria."
                        },
                        {
                            topic: "Naturaleza de la Administración",
                            q: "¿Cómo se considera la administración en su aplicación?",
                            options: ["Solo como ciencia", "Solo como arte", "Tanto como arte como ciencia social", "Como una religión"],
                            answerIndex: 2,
                            explain: "La administración se aplica tanto como arte como ciencia social, de ella derivan la organización mediante objetivos, metas o propósitos a alcanzar."
                        },
                        {
                            topic: "Función de la Administración",
                            q: "¿Cuál es la función principal de la administración?",
                            options: ["Regular los aspectos que dan estabilidad a determinado sector", "Producir bienes", "Vender productos", "Contratar personal"],
                            answerIndex: 0,
                            explain: "La administración es la encargada de regular los aspectos que dan estabilidad a determinado sector, cubriendo necesidades, resolviendo problemas e implementando estrategias necesarias."
                        },
                        {
                            topic: "Recursos en la Administración",
                            q: "¿Qué tipo de recursos aprovecha la administración en una organización?",
                            options: ["Solo recursos materiales", "Solo recursos financieros", "Recursos de toda índole, materiales e inmateriales", "Solo recursos humanos"],
                            answerIndex: 2,
                            explain: "La administración aprovecha recursos de toda índole, materiales e inmateriales, todos aquellos necesarios para que una organización funcione."
                        },
                        {
                            topic: "Proceso Administrativo",
                            q: "¿Para qué existe el proceso administrativo?",
                            options: ["Para aumentar ganancias", "Para prevenir situaciones indeseadas en el futuro de la organización y controlar la eficiencia y eficacia de los recursos", "Para reducir personal", "Para eliminar competencia"],
                            answerIndex: 1,
                            explain: "El proceso administrativo existe y es necesario para prevenir situaciones indeseadas en el futuro de la organización y controlar la eficiencia y la eficacia de los recursos."
                        },
                        {
                            topic: "Flexibilidad en la Administración",
                            q: "¿Cómo deben ser las políticas, reglas y normas dentro del proceso administrativo?",
                            options: ["Rígidas e inamovibles", "Suficientemente flexibles para cambiar cada vez que sea necesario", "Inexistentes", "Solo para grandes empresas"],
                            answerIndex: 1,
                            explain: "Aunque existen políticas, reglas y normas dentro del proceso administrativo, estas deben ser lo suficientemente flexibles para cambiar cada vez que sea necesario."
                        },
                        {
                            topic: "Recurso Humano",
                            q: "¿Por qué es importante tratar adecuadamente al recurso humano en una organización?",
                            options: ["Porque es abundante", "Porque es escaso y posee sentimientos y valores propios", "Porque no es importante", "Porque es fácil de reemplazar"],
                            answerIndex: 1,
                            explain: "El recurso humano es escaso y debe ser de mano de obra calificada, posee sentimientos y valores propios, y debe tratarse adecuadamente para desarrollar mayor creatividad y productividad."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Características de la Administración",
                    desc: "Identificación de las características de la administración: universalidad, valor instrumental, unidad temporal, amplitud de ejercicio, especificidad, interdisciplinariedad y flexibilidad.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Características de la Administración",
                            q: "¿Cuántas características posee la administración que la diferencian de otras disciplinas?",
                            options: ["5", "7", "10", "3"],
                            answerIndex: 1,
                            explain: "La administración posee siete características que la diferencian de otras disciplinas: universalidad, valor instrumental, unidad temporal, amplitud de ejercicio, especificidad, interdisciplinariedad y flexibilidad."
                        },
                        {
                            topic: "Universalidad",
                            q: "¿En qué consiste la característica de 'universalidad' de la administración?",
                            options: ["Existente en cualquier grupo social, organización y/o empresa sin importar su índole", "Solo en empresas privadas", "Solo en el sector público", "Solo en organizaciones con fines de lucro"],
                            answerIndex: 0,
                            explain: "La universalidad significa que la administración existe en cualquier grupo social, organización y/o empresa sin importar su índole."
                        },
                        {
                            topic: "Valor instrumental",
                            q: "¿Qué significa el 'valor instrumental' como característica de la administración?",
                            options: ["Que tiene que ver con los medios para lograr un fin específico", "Que solo sirve para medir", "Que es un instrumento musical", "Que no tiene utilidad"],
                            answerIndex: 0,
                            explain: "El valor instrumental tiene que ver con los medios para lograr un fin específico, a fin de obtener resultados sólidos y viables."
                        },
                        {
                            topic: "Unidad temporal",
                            q: "¿Qué permite la 'unidad temporal' en la administración?",
                            options: ["Que solo exista en un momento", "La existencia simultánea en varias partes sin aislarse", "Que no tenga tiempo", "Que sea solo para el futuro"],
                            answerIndex: 1,
                            explain: "La unidad temporal permite que la administración exista simultáneamente en varias partes sin aislarse."
                        },
                        {
                            topic: "Amplitud de ejercicio",
                            q: "¿A qué se refiere la 'amplitud de ejercicio' como característica de la administración?",
                            options: ["Aplicable solo a niveles altos", "Aplicable a todos los niveles, sistemas y subsistemas de una organización formal", "Aplicable solo a sistemas", "Aplicable solo a subsistemas"],
                            answerIndex: 1,
                            explain: "La amplitud de ejercicio significa que la administración es aplicable a todos los niveles, sistemas y subsistemas de una organización formal."
                        },
                        {
                            topic: "Especificidad",
                            q: "¿Qué implica la 'especificidad' en la administración?",
                            options: ["Que se complica con otras ciencias", "Que no puede ni debe complicarse con otras ciencias o disciplinas", "Que es igual a otras disciplinas", "Que solo se aplica en una ciencia"],
                            answerIndex: 1,
                            explain: "La especificidad indica que la administración no puede ni debe complicarse con otras ciencias o disciplinas."
                        },
                        {
                            topic: "Interdisciplinariedad",
                            q: "¿En qué consiste la 'interdisciplinariedad' como característica de la administración?",
                            options: ["Existe una afinidad con las técnicas y ciencias relacionadas con la eficacia laboral", "No tiene relación con otras ciencias", "Solo se relaciona con la contabilidad", "Solo se relaciona con el derecho"],
                            answerIndex: 0,
                            explain: "La interdisciplinariedad se refiere a que existe una afinidad con las técnicas y ciencias que están relacionadas con la eficacia laboral."
                        },
                        {
                            topic: "Flexibilidad",
                            q: "¿Qué permite la 'flexibilidad' en la administración?",
                            options: ["Adaptarse a las necesidades de cualquier grupo social, organización o empresa", "No cambiar nunca", "Solo adaptarse a empresas grandes", "Solo adaptarse al sector público"],
                            answerIndex: 0,
                            explain: "La flexibilidad permite que la administración sea adaptable a las necesidades de cualquier grupo social, organización o empresa donde sea aplicable."
                        },
                        {
                            topic: "Proceso universal",
                            q: "¿Qué caracteriza al proceso administrativo como 'universal'?",
                            options: ["Solo se da en empresas privadas", "Puede darse en cualquier momento y lugar donde haya un grupo de personas con un fin común", "Solo en el sector público", "Solo en organizaciones con fines de lucro"],
                            answerIndex: 1,
                            explain: "El proceso administrativo es universal porque puede darse en cualquier momento y en cualquier lugar donde se encuentre un grupo de personas que persigan un fin común."
                        },
                        {
                            topic: "Proceso jerárquico",
                            q: "¿Cómo se describe el carácter 'jerárquico' del proceso administrativo?",
                            options: ["Todos tienen el mismo nivel", "Existe un orden de rangos en la organización", "No hay niveles", "Solo hay un nivel"],
                            answerIndex: 1,
                            explain: "El proceso administrativo es jerárquico porque existe un orden de rangos en la organización, de la alta gerencia al nivel más bajo."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Ámbitos de Aplicación de la Administración",
                    desc: "Identificación de los diferentes ámbitos donde se aplica la administración: sector público, ONG, empresas privadas, proyectos y vida cotidiana.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Sector Público",
                            q: "¿Qué ámbito de aplicación de la administración se encarga de la gestión de los recursos del Estado?",
                            options: ["Empresas privadas", "Sector Público", "ONG", "Vida cotidiana"],
                            answerIndex: 1,
                            explain: "La Administración Pública se encarga de la gestión de los recursos del Estado para satisfacer las necesidades de la sociedad."
                        },
                        {
                            topic: "ONG",
                            q: "¿Qué tipo de organizaciones aplican principios administrativos para lograr objetivos sociales como la protección del medio ambiente?",
                            options: ["Empresas privadas", "Sector Público", "Organizaciones sin Fines de Lucro (ONG)", "Proyectos"],
                            answerIndex: 2,
                            explain: "Las ONG, fundaciones y asociaciones aplican principios administrativos para lograr sus objetivos sociales, como la protección del medio ambiente, la asistencia social o el desarrollo cultural."
                        },
                        {
                            topic: "Empresas Privadas",
                            q: "¿Para qué es esencial la administración en las empresas privadas?",
                            options: ["Solo para contratar personal", "Para alcanzar objetivos de rentabilidad, crecimiento y competitividad", "Solo para vender", "Solo para producir"],
                            answerIndex: 1,
                            explain: "La administración es esencial en empresas de todos los tamaños y sectores para alcanzar sus objetivos de rentabilidad, crecimiento y competitividad."
                        },
                        {
                            topic: "Gestión de Proyectos",
                            q: "¿Qué aplica la gestión de proyectos para asegurar el éxito en tiempo, costo y calidad?",
                            options: ["Solo planeación", "Principios administrativos", "Solo control", "Solo organización"],
                            answerIndex: 1,
                            explain: "La gestión de proyectos aplica principios administrativos para planificar, organizar, dirigir y controlar proyectos de diversa índole."
                        },
                        {
                            topic: "Vida Cotidiana",
                            q: "¿Cómo se pueden aplicar los principios administrativos en la vida personal?",
                            options: ["No se pueden aplicar", "Para organizar tareas, gestionar el tiempo, alcanzar metas y optimizar recursos", "Solo para trabajar", "Solo para estudiar"],
                            answerIndex: 1,
                            explain: "Los principios administrativos pueden aplicarse en la vida personal para organizar tareas, gestionar el tiempo, alcanzar metas y optimizar recursos."
                        },
                        {
                            topic: "Interdisciplinariedad",
                            q: "¿Qué ciencias están relacionadas con la administración debido a su interdisciplinariedad?",
                            options: ["Solo matemáticas", "Ciencias sociales y exactas", "Solo biología", "Solo química"],
                            answerIndex: 1,
                            explain: "La administración tiene interdisciplinariedad con ciencias sociales y exactas, las cuales tienen una relación estrecha debido a su fundamentación técnica y proceso."
                        },
                        {
                            topic: "Ciencias Sociales",
                            q: "¿Qué tipo de ciencias tienen como objetivo y método aplicable a los fenómenos sociales?",
                            options: ["Ciencias exactas", "Ciencias sociales", "Ciencias naturales", "Ciencias físicas"],
                            answerIndex: 1,
                            explain: "Las ciencias sociales tienen como objetivo y método aplicar a los fenómenos sociales, y están relacionadas con la administración."
                        },
                        {
                            topic: "Ciencias Exactas",
                            q: "¿Qué tipo de ciencias están relacionadas con todo aquello que se pueda comprobar y demostrar?",
                            options: ["Ciencias sociales", "Ciencias exactas", "Ciencias humanas", "Ciencias políticas"],
                            answerIndex: 1,
                            explain: "Las ciencias exactas están estrechamente relacionadas con todo aquello que se pueda comprobar y demostrar."
                        },
                        {
                            topic: "Ámbitos de aplicación",
                            q: "¿Cuáles son los principales ámbitos de aplicación de la administración mencionados?",
                            options: ["Sector público, ONG, empresas privadas, proyectos y vida cotidiana", "Solo empresas privadas", "Solo sector público", "Solo ONG"],
                            answerIndex: 0,
                            explain: "Los principales ámbitos de aplicación de la administración son el sector público, las ONG, las empresas privadas, los proyectos y la vida cotidiana."
                        },
                        {
                            topic: "Universalidad de la Administración",
                            q: "¿Qué característica de la administración permite su aplicación en todos los ámbitos mencionados?",
                            options: ["Especificidad", "Universalidad", "Valor instrumental", "Amplitud de ejercicio"],
                            answerIndex: 1,
                            explain: "La universalidad de la administración permite su aplicación en todos los ámbitos, desde el sector público hasta la vida cotidiana."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: Proceso Administrativo",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Planeación y Organización Administrativa",
                    desc: "Comprensión de la planeación y organización administrativa como pilares fundamentales para el éxito de cualquier organización.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Planeación Administrativa",
                            q: "¿Qué es la planeación administrativa?",
                            options: ["Un proceso estratégico que establece los objetivos y acciones para alcanzarlos", "Un proceso de contratación", "Un proceso de ventas", "Un proceso de producción"],
                            answerIndex: 0,
                            explain: "La planeación administrativa es un proceso estratégico que establece los objetivos a corto, mediano y largo plazo de la organización, así como las estrategias y acciones necesarias para alcanzarlos."
                        },
                        {
                            topic: "Planeación Administrativa",
                            q: "¿Qué brinda la planeación administrativa a la organización?",
                            options: ["Confusión", "Una dirección clara y facilita la toma de decisiones", "Caos", "Incertidumbre"],
                            answerIndex: 1,
                            explain: "La planeación brinda una dirección clara a la organización, facilita la toma de decisiones efectivas, permite anticipar desafíos y optimiza el uso de recursos."
                        },
                        {
                            topic: "Organización Administrativa",
                            q: "¿Qué permite la organización administrativa en las instituciones?",
                            options: ["El funcionamiento eficiente de los recursos humanos, materiales y tecnológicos", "Solo la contratación de personal", "Solo la venta de productos", "Solo la producción"],
                            answerIndex: 0,
                            explain: "La organización administrativa permite el funcionamiento eficiente de los recursos humanos, materiales y tecnológicos con los que se cuenta."
                        },
                        {
                            topic: "Organización Administrativa",
                            q: "¿Qué establece la organización administrativa?",
                            options: ["Roles, responsabilidades y líneas de autoridad", "Solo responsabilidades", "Solo roles", "Solo líneas de autoridad"],
                            answerIndex: 0,
                            explain: "La organización administrativa define roles, responsabilidades y líneas de autoridad, establece canales de comunicación y facilita la coordinación."
                        },
                        {
                            topic: "Importancia de la Organización",
                            q: "¿Por qué es crucial la organización administrativa?",
                            options: ["Porque permite la toma de decisiones acertadas para identificar y resolver problemas", "Porque no es importante", "Solo para grandes empresas", "Solo para el sector público"],
                            answerIndex: 0,
                            explain: "La organización administrativa es crucial porque permite la toma de decisiones acertadas para identificar y resolver problemas de manera oportuna."
                        },
                        {
                            topic: "Beneficios de la Organización",
                            q: "¿Qué beneficio aporta la organización administrativa en el uso de recursos?",
                            options: ["Optimiza el uso de recursos y aumenta la eficiencia y productividad", "Desperdicia recursos", "No tiene impacto", "Solo organiza personal"],
                            answerIndex: 0,
                            explain: "La organización administrativa optimiza el uso de recursos y aumenta la eficiencia y la productividad."
                        },
                        {
                            topic: "Toma de Decisiones",
                            q: "¿Qué facilita la organización administrativa para la toma de decisiones?",
                            options: ["Identificar y resolver problemas de manera oportuna", "Crear problemas", "Ignorar problemas", "Aplazar decisiones"],
                            answerIndex: 0,
                            explain: "La organización administrativa permite la toma de decisiones acertadas para identificar y resolver problemas de manera oportuna."
                        },
                        {
                            topic: "Elementos de la Planeación",
                            q: "¿Qué elementos se establecen en la planeación administrativa?",
                            options: ["Objetivos, estrategias y acciones", "Solo objetivos", "Solo estrategias", "Solo acciones"],
                            answerIndex: 0,
                            explain: "La planeación administrativa establece los objetivos, las estrategias y las acciones necesarias para alcanzarlos."
                        },
                        {
                            topic: "Comunicación en la Organización",
                            q: "¿Qué establece la organización administrativa en cuanto a comunicación?",
                            options: ["Canales de comunicación efectivos", "No establece comunicación", "Comunicación informal", "Solo comunicación vertical"],
                            answerIndex: 0,
                            explain: "La organización administrativa establece canales de comunicación efectivos y facilita la coordinación y el trabajo en equipo."
                        },
                        {
                            topic: "Base de las Instituciones",
                            q: "¿Qué es la base principal de las instituciones u organizaciones según la administración?",
                            options: ["La producción", "La organización", "Las ventas", "El marketing"],
                            answerIndex: 1,
                            explain: "La organización es la base principal de las instituciones u organizaciones, pues con ella se ejerce el funcionamiento eficiente de los recursos."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Dirección y Control en la Administración",
                    desc: "Comprensión de la interrelación entre planeación y organización, así como de los fundamentos de la planeación y los elementos de la organización.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Interrelación Planeación-Organización",
                            q: "¿Qué define la planeación en una organización?",
                            options: ["El 'qué' y el 'para qué'", "El 'cómo'", "El 'dónde'", "El 'cuándo'"],
                            answerIndex: 0,
                            explain: "La planeación define el 'qué' y el 'para qué' de la organización, mientras que la organización define el 'cómo'."
                        },
                        {
                            topic: "Interrelación Planeación-Organización",
                            q: "¿Qué define la organización en una organización?",
                            options: ["El 'qué'", "El 'para qué'", "El 'cómo'", "El 'dónde'"],
                            answerIndex: 2,
                            explain: "La organización define el 'cómo' se van a ejecutar los planes y lograr los objetivos."
                        },
                        {
                            topic: "Fundamentos de la Planeación",
                            q: "¿Cuántos fundamentos básicos de la planeación mencionan Munch y García?",
                            options: ["10", "15", "7", "12"],
                            answerIndex: 1,
                            explain: "Munch y García mencionan 15 fundamentos básicos que muestran la importancia de la planeación."
                        },
                        {
                            topic: "Planeación y Riesgos",
                            q: "¿Qué permite la planeación en relación con los riesgos?",
                            options: ["Aumentar los riesgos", "Reducir al mínimo los riesgos y aprovechar al máximo las oportunidades", "Ignorar los riesgos", "No tiene relación con los riesgos"],
                            answerIndex: 1,
                            explain: "La planeación reduce al mínimo los riesgos y aprovecha al máximo las oportunidades."
                        },
                        {
                            topic: "Planeación y Eficiencia",
                            q: "¿Cómo promueve la planeación la eficiencia?",
                            options: ["Eliminando la improvisación", "Fomentando la improvisación", "Ignorando los procesos", "No tiene relación con la eficiencia"],
                            answerIndex: 0,
                            explain: "La planeación promueve la eficiencia al eliminar la improvisación."
                        },
                        {
                            topic: "Elementos de la Organización",
                            q: "¿Cuántos elementos integran el concepto de organización según Munch y García?",
                            options: ["3", "5", "7", "10"],
                            answerIndex: 1,
                            explain: "Munch y García dan a conocer cinco elementos que integran el concepto de organización."
                        },
                        {
                            topic: "Organización y Recursos",
                            q: "¿Qué estructuran los recursos en la organización?",
                            options: ["Solo recursos humanos", "Recursos humanos, materiales y tecnológicos", "Solo recursos materiales", "Solo recursos tecnológicos"],
                            answerIndex: 1,
                            explain: "En la organización se estructuran los recursos humanos, materiales y tecnológicos para ejecutar los planes."
                        },
                        {
                            topic: "Importancia de la Organización",
                            q: "¿Por qué la organización tiene un carácter continuo?",
                            options: ["Porque las organizaciones están siempre en cambios constantes", "Porque nunca cambian", "Porque son estáticas", "Porque no se adaptan"],
                            answerIndex: 0,
                            explain: "La organización tiene un carácter continuo dado que las organizaciones están siempre en cambios constantes."
                        },
                        {
                            topic: "Organización y Productividad",
                            q: "¿Qué ayuda a reducir la organización en una empresa?",
                            options: ["Costos e incrementar la productividad", "Solo costos", "Solo productividad", "No reduce nada"],
                            answerIndex: 0,
                            explain: "La organización ayuda a reducir los costos e incrementar la productividad."
                        },
                        {
                            topic: "Organización y Esfuerzos",
                            q: "¿Qué elimina la organización al delimitar funciones y responsabilidades?",
                            options: ["La duplicación de esfuerzos", "La comunicación", "La coordinación", "La planeación"],
                            answerIndex: 0,
                            explain: "La organización elimina por completo la duplicación de esfuerzos al delimitar funciones y responsabilidades."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Dirección y Control en la Administración",
                    desc: "Comprensión de la dirección y control como etapas del proceso administrativo, sus elementos y su importancia.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Dirección Administrativa",
                            q: "¿Qué etapa del proceso administrativo es esencial y muestra la unidad temporal?",
                            options: ["Planeación", "Organización", "Dirección", "Control"],
                            answerIndex: 2,
                            explain: "La dirección es la etapa esencial donde se muestra la unidad temporal y se manifiesta en toda su esencia."
                        },
                        {
                            topic: "Dirección Administrativa",
                            q: "¿Qué se hace en la etapa de dirección?",
                            options: ["Se motiva, guía y supervisa el trabajo del equipo", "Solo se planea", "Solo se organiza", "Solo se controla"],
                            answerIndex: 0,
                            explain: "En la etapa de dirección se motiva, guía y supervisa el trabajo del equipo para alcanzar los objetivos."
                        },
                        {
                            topic: "Control Administrativo",
                            q: "¿Cuál es la última etapa del proceso administrativo?",
                            options: ["Planeación", "Organización", "Dirección", "Control"],
                            answerIndex: 3,
                            explain: "El control es la última etapa del proceso administrativo, aunque en la práctica está relacionado con la planeación."
                        },
                        {
                            topic: "Control Administrativo",
                            q: "¿Qué se evalúa en la etapa de control?",
                            options: ["El desempeño y se toman medidas correctivas", "Solo el desempeño", "Solo las ventas", "Solo la producción"],
                            answerIndex: 0,
                            explain: "En el control se evalúa el desempeño y toma medidas correctivas para asegurar el cumplimiento de los planes."
                        },
                        {
                            topic: "Importancia del Control",
                            q: "¿Cuál es una de las importancias del control según Munch y García?",
                            options: ["Se establecen medidas para corregir actividades y lograr los planes", "No tiene importancia", "Solo mide resultados", "Solo establece estándares"],
                            answerIndex: 0,
                            explain: "Según Munch y García, el control establece medidas que sirven para corregir actividades que permiten lograr los planes."
                        },
                        {
                            topic: "Control y Retroalimentación",
                            q: "¿Qué es básico en el proceso de control para ajustar el sistema administrativo?",
                            options: ["La retroalimentación", "La planeación", "La organización", "La dirección"],
                            answerIndex: 0,
                            explain: "La retroalimentación es básica en el proceso de control para ajustar el sistema administrativo a lo largo de un periodo."
                        },
                        {
                            topic: "Estándares en el Control",
                            q: "¿Con qué se relacionan los estándares en el proceso de control?",
                            options: ["Con los objetivos definidos por la empresa", "Con las ventas", "Con la producción", "Con el marketing"],
                            answerIndex: 0,
                            explain: "Los estándares en el control se relacionan con los objetivos definidos por la empresa u organización."
                        },
                        {
                            topic: "Medición en el Control",
                            q: "¿Qué mide la medición de resultados en el proceso de control?",
                            options: ["La aplicación de estándares", "Las ventas", "La producción", "El personal"],
                            answerIndex: 0,
                            explain: "La medición de resultados mide la aplicación que debe definirse de acuerdo a los estándares."
                        },
                        {
                            topic: "Acción Correctiva",
                            q: "¿Qué acción se toma cuando hay desviaciones en el control?",
                            options: ["Acción correctiva para integrar las desviaciones", "Ignorar las desviaciones", "Aumentar las desviaciones", "No hacer nada"],
                            answerIndex: 0,
                            explain: "Se debe tomar acción correctiva para integrar las desviaciones en relación con los estándares."
                        },
                        {
                            topic: "Proceso Administrativo",
                            q: "¿Qué proporciona el proceso administrativo en conjunto?",
                            options: ["Un marco sólido para la gestión efectiva de las organizaciones", "Solo planeación", "Solo control", "Solo organización"],
                            answerIndex: 0,
                            explain: "El proceso administrativo proporciona un marco sólido para la gestión efectiva de las organizaciones, permitiendo optimizar recursos, aumentar la productividad y alcanzar objetivos."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: Enfoques Teóricos",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Enfoques Teóricos Basados en Estructuras",
                    desc: "Identificación de las escuelas de pensamiento administrativo, incluyendo administración científica, clásica, relaciones humanas, burocrática, neoclásica y teoría estructuralista.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Escuela de Administración Científica",
                            q: "¿Cuál era el enfoque principal de la Escuela de Administración Científica?",
                            options: ["Optimizar la eficiencia y productividad en el trabajo", "Establecer principios universales", "Enfatizar el factor humano", "Analizar estructuras burocráticas"],
                            answerIndex: 0,
                            explain: "La Escuela de Administración Científica se enfocaba en optimizar la eficiencia y la productividad en el trabajo mediante el estudio sistemático de tiempos y movimientos."
                        },
                        {
                            topic: "Escuela Clásica",
                            q: "¿Quién es reconocido como el fundador de la escuela clásica de la administración?",
                            options: ["Taylor", "Fayol", "Weber", "Mayo"],
                            answerIndex: 1,
                            explain: "Henry Fayol es reconocido como el fundador de la escuela clásica y el primero en sistematizar el comportamiento gerencial."
                        },
                        {
                            topic: "Escuela de Relaciones Humanas",
                            q: "¿Qué enfatiza la Escuela de las Relaciones Humanas?",
                            options: ["La eficiencia en el trabajo", "El factor humano en la productividad y bienestar", "Las estructuras burocráticas", "Los principios universales"],
                            answerIndex: 1,
                            explain: "La Escuela de las Relaciones Humanas enfatiza la importancia del factor humano en la productividad y el bienestar de las organizaciones."
                        },
                        {
                            topic: "Escuela Burocrática",
                            q: "¿Quién estudió la burocracia como la organización eficiente por excelencia?",
                            options: ["Fayol", "Taylor", "Weber", "Mayo"],
                            answerIndex: 2,
                            explain: "Max Weber estudió la burocracia y la definió como 'la organización eficiente por excelencia', basándose en un modelo burocrático con reglas y normas."
                        },
                        {
                            topic: "Escuela Neoclásica",
                            q: "¿Qué caracteriza a la Escuela Neoclásica de la administración?",
                            options: ["Enfoque rígido", "Enfoque ecléctico, pragmático y flexible", "Enfoque exclusivo en estructuras", "Enfoque exclusivo en personas"],
                            answerIndex: 1,
                            explain: "La Escuela Neoclásica se caracteriza por un enfoque ecléctico, pragmático y flexible, con una visión amplia y compleja de las organizaciones."
                        },
                        {
                            topic: "Henry Fayol",
                            q: "¿Cuál era la diferencia principal entre Fayol y Taylor?",
                            options: ["Taylor se enfocaba en la organización total, Fayol en funciones específicas", "Fayol se enfocaba en la organización total, Taylor en funciones específicas", "Ambos se enfocaban en lo mismo", "No tenían diferencias"],
                            answerIndex: 1,
                            explain: "Taylor centraba su interés en las funciones específicas de la organización, mientras que Fayol se enfocaba en la organización total, poniendo énfasis en la administración."
                        },
                        {
                            topic: "Principios de Fayol",
                            q: "¿Cuántos principios fundamentales de la administración estableció Fayol?",
                            options: ["10", "12", "14", "16"],
                            answerIndex: 2,
                            explain: "Fayol estableció 14 principios fundamentales de la administración, que incluyen división del trabajo, autoridad, disciplina, unidad de mando, entre otros."
                        },
                        {
                            topic: "Teoría Estructuralista",
                            q: "¿Qué busca la teoría estructuralista en las organizaciones?",
                            options: ["Un orden y control de los fines de la organización", "Relaciones humanas", "Eficiencia en el trabajo", "Desarrollo organizacional"],
                            answerIndex: 0,
                            explain: "La teoría estructuralista busca un orden y control de los fines de la organización, asegurando que con una racionalidad de la actividad colectiva se logrará una alta eficacia."
                        },
                        {
                            topic: "Principio de División del Trabajo",
                            q: "Según Fayol, ¿qué ocurre cuanto más se especialicen las personas en su trabajo?",
                            options: ["Menor eficiencia", "Mayor será la eficiencia para realizar su trabajo", "No hay cambio", "Se genera confusión"],
                            answerIndex: 1,
                            explain: "Según el principio de división del trabajo de Fayol, cuanto más se especialicen las personas, tanto mayor será la eficiencia para realizar su trabajo."
                        },
                        {
                            topic: "Principio de Unidad de Mando",
                            q: "¿Qué establece el principio de unidad de mando de Fayol?",
                            options: ["Cada empleado debe recibir instrucciones de una sola persona", "Los empleados deben recibir instrucciones de varias personas", "No hay jerarquía", "Todos mandan"],
                            answerIndex: 0,
                            explain: "El principio de unidad de mando establece que cada empleado debe recibir instrucciones de una sola persona."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Enfoques Teóricos Basados en Personas",
                    desc: "Comprensión de la teoría de las relaciones humanas de Elton Mayo y la teoría del desarrollo organizacional.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Elton Mayo",
                            q: "¿Quién estableció al individuo como un ser humano con sentimientos capaz de trabajar mejor sin someterlo a métodos rigurosos?",
                            options: ["Fayol", "Taylor", "Elton Mayo", "Weber"],
                            answerIndex: 2,
                            explain: "Elton Mayo estableció al individuo como un ser humano con sentimientos, capaz de trabajar mejor sin someterlo a métodos rigurosos."
                        },
                        {
                            topic: "Teoría de Relaciones Humanas",
                            q: "¿Qué concluyó Elton Mayo para una mejor administración?",
                            options: ["Se necesita una integración social y trabajo en equipo", "Se necesita más control", "Se necesita menos personal", "Se necesita más tecnología"],
                            answerIndex: 0,
                            explain: "Mayo concluyó que para una mejor administración se necesita de una 'integración social', donde trabajen en equipo y muestren importancia a grupos informales."
                        },
                        {
                            topic: "Grupos Informales",
                            q: "¿Qué son los grupos informales según la teoría de relaciones humanas?",
                            options: ["Personal que mantiene buena relación de amistad y compromiso", "Personal que no se relaciona", "Personal que solo trabaja", "Personal que no tiene compromiso"],
                            answerIndex: 0,
                            explain: "Los grupos informales son personal que mantiene una buena relación de amistad y compromiso, que comparte ideas, y por ello realizarán mejor su trabajo."
                        },
                        {
                            topic: "Teoría del Desarrollo Organizacional",
                            q: "¿Qué es la teoría del Desarrollo Organizacional?",
                            options: ["Un proceso dinámico que comprende el sistema total de una organización y su modificación planeada", "Un proceso estático", "Una teoría de control", "Una teoría de producción"],
                            answerIndex: 0,
                            explain: "La teoría del Desarrollo Organizacional es un proceso dinámico que comprende el sistema total de una organización y la modificación planeada para incrementar la eficacia."
                        },
                        {
                            topic: "Cambio Organizacional",
                            q: "¿Qué se necesita para lograr un desarrollo organizacional?",
                            options: ["Tomar en cuenta los cambios existentes en la sociedad", "Ignorar los cambios", "Mantener todo igual", "No adaptarse"],
                            answerIndex: 0,
                            explain: "Para lograr un desarrollo organizacional, es necesario tomar en cuenta los cambios que existen en la sociedad y debe existir una adaptación e interacción de las partes."
                        },
                        {
                            topic: "Características del DO",
                            q: "¿Qué característica del Desarrollo Organizacional se refiere a ver la organización como un todo?",
                            options: ["Enfoque holístico", "Cambio planeado", "Participación", "Apoyo a la organización"],
                            answerIndex: 0,
                            explain: "El enfoque holístico es una característica del Desarrollo Organizacional que se refiere a ver la organización como un sistema total."
                        },
                        {
                            topic: "Críticas a la Teoría de Relaciones Humanas",
                            q: "¿Qué crítica se ha hecho a la teoría de las relaciones humanas?",
                            options: ["Énfasis en las relaciones humanas dejando de lado aspectos formales", "Exceso de formalidad", "Falta de interés en las personas", "Demasiado control"],
                            answerIndex: 0,
                            explain: "La teoría de las relaciones humanas ha recibido críticas por su énfasis en las relaciones humanas, dejando de lado los aspectos formales."
                        },
                        {
                            topic: "Críticas al Desarrollo Organizacional",
                            q: "¿Qué crítica se hace a la teoría del Desarrollo Organizacional?",
                            options: ["Se considera terapéutica y solo trata aspectos emocionales con intereses económicos", "Es demasiado formal", "No toma en cuenta a las personas", "Es muy rígida"],
                            answerIndex: 0,
                            explain: "Se critica al Desarrollo Organizacional porque se considera que es terapéutica, que solo trata aspectos emocionales de la conducta con intereses económicos."
                        },
                        {
                            topic: "Cambio Planeado",
                            q: "¿Qué requiere el Desarrollo Organizacional para su implementación?",
                            options: ["Buena planeación, participación y comprensión a través del conocimiento", "Solo planeación", "Solo participación", "Solo conocimiento"],
                            answerIndex: 0,
                            explain: "El Desarrollo Organizacional requiere de una buena planeación, participación y comprensión a través del conocimiento para tener una mejor calidad de vida."
                        },
                        {
                            topic: "Elton Mayo y Taylor",
                            q: "¿Qué diferencia a Elton Mayo de Taylor?",
                            options: ["Mayo se enfocaba en métodos rigurosos, Taylor en relaciones humanas", "Mayo se enfocaba en relaciones humanas, Taylor en métodos rigurosos", "Ambos se enfocaban en lo mismo", "No tenían diferencias"],
                            answerIndex: 1,
                            explain: "Elton Mayo se enfocaba en las relaciones humanas y establecía al individuo como ser humano con sentimientos, mientras que Taylor se enfocaba en métodos rigurosos."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Enfoques Teóricos Basados en Ambiente y Actuales",
                    desc: "Identificación de enfoques basados en ambiente (neoestructuralismo) y enfoques teóricos actuales de la administración.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Enfoque basado en ambiente",
                            q: "¿De qué corriente surge el neoestructuralismo?",
                            options: ["Del estructuralismo", "Del conductismo", "Del humanismo", "Del funcionalismo"],
                            answerIndex: 0,
                            explain: "El neoestructuralismo surgió de los análisis novedosos de la corriente estructuralista de los años cincuenta y sesenta y de sus críticas."
                        },
                        {
                            topic: "Neoestructuralismo",
                            q: "¿Cuál es el propósito del nuevo estructuralismo en América Latina?",
                            options: ["Diseñar estrategias de desarrollo alternativas a la opción neoliberal", "Mantener el neoliberalismo", "Eliminar el desarrollo", "No tiene propósito"],
                            answerIndex: 0,
                            explain: "El nuevo estructuralismo tiene el propósito de diseñar estrategias de desarrollo alternativas a la opción neoliberal."
                        },
                        {
                            topic: "Enfoques Actuales",
                            q: "¿Cuál de los siguientes es un enfoque teórico actual de la administración?",
                            options: ["Competitividad sostenible", "Burocracia", "Administración científica", "Relaciones humanas"],
                            answerIndex: 0,
                            explain: "La competitividad sostenible es uno de los enfoques teóricos actuales de la administración, junto con tecnología de vanguardia, impulso al talento humano, entre otros."
                        },
                        {
                            topic: "Enfoques Actuales",
                            q: "¿Qué incluyen los enfoques teóricos actuales de la administración?",
                            options: ["Tecnología de vanguardia, impulso al talento humano y alianzas", "Solo tecnología", "Solo talento humano", "Solo alianzas"],
                            answerIndex: 0,
                            explain: "Los enfoques teóricos actuales incluyen competitividad sostenible, tecnología de vanguardia, impulso al talento humano, alianzas (Comakership), calidad total, desarrollo organizacional y outsourcing."
                        },
                        {
                            topic: "Calidad Total",
                            q: "¿Qué enfoque actual de la administración se enfoca en la mejora continua y la satisfacción del cliente?",
                            options: ["Calidad total", "Outsourcing", "Desarrollo organizacional", "Competitividad sostenible"],
                            answerIndex: 0,
                            explain: "La calidad total es un enfoque actual de la administración que se enfoca en la mejora continua y la satisfacción del cliente."
                        },
                        {
                            topic: "Outsourcing",
                            q: "¿Qué práctica administrativa actual consiste en contratar servicios externos para optimizar recursos?",
                            options: ["Outsourcing", "Calidad total", "Desarrollo organizacional", "Competitividad sostenible"],
                            answerIndex: 0,
                            explain: "El outsourcing es una práctica administrativa actual que consiste en contratar servicios externos para optimizar recursos y mejorar la eficiencia."
                        },
                        {
                            topic: "Alianzas Estratégicas",
                            q: "¿Cómo se denominan las alianzas estratégicas en los enfoques actuales de la administración?",
                            options: ["Comakership", "Outsourcing", "Calidad total", "Desarrollo organizacional"],
                            answerIndex: 0,
                            explain: "Las alianzas estratégicas en los enfoques actuales se denominan Comakership, que implica colaboración entre empresas para lograr objetivos comunes."
                        },
                        {
                            topic: "Teoría Moderna",
                            q: "¿Cómo se describe la teoría moderna de la administración?",
                            options: ["Una red compuesta por muchas teorías que han perdurado a través del tiempo", "Una teoría única", "Una teoría obsoleta", "Una teoría sin fundamento"],
                            answerIndex: 0,
                            explain: "La teoría moderna de la administración es una red compuesta por muchas teorías que han perdurado a través del tiempo."
                        },
                        {
                            topic: "Nuevo Estructuralismo",
                            q: "¿Qué busca el nuevo estructuralismo como renovación del pensamiento original?",
                            options: ["Diseñar estrategias de desarrollo alternativas", "Mantener el pensamiento original", "Eliminar el desarrollo", "No tiene objetivos"],
                            answerIndex: 0,
                            explain: "El nuevo estructuralismo podría ser considerado como renovación del pensamiento estructuralista original, con el propósito de diseñar estrategias de desarrollo alternativas."
                        },
                        {
                            topic: "Impulso al Talento Humano",
                            q: "¿Qué enfoque actual de la administración se centra en el desarrollo y potenciación de las personas?",
                            options: ["Impulso al talento humano", "Tecnología de vanguardia", "Competitividad sostenible", "Outsourcing"],
                            answerIndex: 0,
                            explain: "El impulso al talento humano es un enfoque actual que se centra en el desarrollo y potenciación de las personas como recurso clave para la organización."
                        }
                    ]
                }
            }
        }
    }
};

export default administracionI;