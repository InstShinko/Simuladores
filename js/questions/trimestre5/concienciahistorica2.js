// ============================================
// CONCIENCIA HISTÓRICA II
// MÉXICO DURANTE EL EXPANSIONISMO CAPITALISTA
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const concienciaHistoricaII = {
    id: "concienciaHistoricaII",
    nombre: "CONCIENCIA HISTÓRICA II: MÉXICO DURANTE EL EXPANSIONISMO CAPITALISTA",
    icono: "📜",
    descripcion: "Estudio de la Independencia de México, sistema de castas, arte novohispano, Reformas Borbónicas, etapas de la Independencia, Ilustración y liberalismo, liberalismo mexicano, invasiones de Estados Unidos y Francia, Guerra de Reforma, Porfiriato, Revolución Mexicana, indigenismo, voto femenino, luchas obreras, Primera Guerra Mundial, Revolución Rusa, Reconstrucción Nacional, Cardenismo y Estado Benefactor.",
    modulos: {
        modulo1: {
            nombre: "Módulo 1: La Independencia y el Liberalismo Mexicano",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Época Colonial y Movimiento de Independencia",
                    desc: "Identificación del sistema de castas, arte novohispano, Reformas Borbónicas y factores de la Independencia.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Sistema de castas",
                            q: "¿Quiénes ocupaban la cima del sistema de castas en la Nueva España?",
                            options: ["Los criollos", "Los peninsulares", "Los mestizos", "Los indígenas"],
                            answerIndex: 1,
                            explain: "En la cima del sistema de castas se encontraban los peninsulares (españoles nacidos en Europa), quienes ocuparon los cargos públicos de primer nivel."
                        },
                        {
                            topic: "Criollos",
                            q: "¿Cuál era la principal ventaja de los criollos en la Nueva España?",
                            options: ["Ocupar cargos públicos", "El acceso a la educación", "Ser propietarios de minas", "Tener títulos nobiliarios"],
                            answerIndex: 1,
                            explain: "La mayor ventaja que tenían los criollos era el acceso a la educación tanto en la formación elemental como en la superior."
                        },
                        {
                            topic: "Mestizos",
                            q: "¿Quiénes constituyeron el mayor grupo poblacional de la Nueva España?",
                            options: ["Los peninsulares", "Los criollos", "Los mestizos", "Los indígenas"],
                            answerIndex: 2,
                            explain: "Los mestizos, producto de español e india, constituyeron de manera creciente el mayor grupo poblacional de la Nueva España."
                        },
                        {
                            topic: "Arte novohispano",
                            q: "¿Cuál fue el propósito principal del arte en la Nueva España durante el siglo XVI?",
                            options: ["La decoración", "La evangelización", "El comercio", "La política"],
                            answerIndex: 1,
                            explain: "El arte tuvo un fin: la evangelización. La iglesia católica era la encargada de evangelizar a los 'naturales' mediante el arte de forma didáctica."
                        },
                        {
                            topic: "Barroco novohispano",
                            q: "¿Qué estilo artístico predominó en la Nueva España durante el siglo XVII?",
                            options: ["Renacimiento", "Barroco", "Neoclásico", "Gótico"],
                            answerIndex: 1,
                            explain: "El Barroco fue un estilo exuberante que se desarrolló en la Nueva España durante el siglo XVII, con exponentes como Miguel Cabrera y José Ibarra."
                        },
                        {
                            topic: "Reformas Borbónicas",
                            q: "¿Qué dinastía implementó las Reformas Borbónicas en las colonias americanas?",
                            options: ["Los Austrias", "Los Borbones", "Los Habsburgo", "Los Trastámara"],
                            answerIndex: 1,
                            explain: "Las Reformas borbónicas fueron aplicadas por la dinastía Borbón, quienes también gobernaban Francia, y llegaron a España hacia el año 1700."
                        },
                        {
                            topic: "Carlos III",
                            q: "¿Qué tipo de monarca fue Carlos III de España?",
                            options: ["Monarca absoluto tradicional", "Déspota ilustrado", "Monarca constitucional", "Monarca parlamentario"],
                            answerIndex: 1,
                            explain: "Carlos III fue un destacado déspota ilustrado, es decir, un rey absolutista que adoptó la Ilustración para asuntos de administración pública."
                        },
                        {
                            topic: "Expulsión de los jesuitas",
                            q: "¿En qué año fueron expulsados los jesuitas del continente americano?",
                            options: ["1750", "1767", "1776", "1789"],
                            answerIndex: 1,
                            explain: "La expulsión de los jesuitas del continente americano ocurrió hacia 1767, y fue de gran impacto pues esta orden religiosa era la de mayor poder en la Nueva España."
                        },
                        {
                            topic: "Criollismo",
                            q: "¿Qué movimiento intelectual derivó en la Independencia de México?",
                            options: ["El liberalismo", "El criollismo o nacionalismo mexicano", "El conservadurismo", "El socialismo"],
                            answerIndex: 1,
                            explain: "El movimiento intelectual que derivó en la Independencia de México fue el llamado criollismo o nacionalismo mexicano, cuyos principales exponentes fueron los jesuitas expulsados."
                        },
                        {
                            topic: "Influencia intelectual externa",
                            q: "¿Qué autor escribió 'El Espíritu de las Leyes' y expuso la necesidad de la separación de poderes?",
                            options: ["John Locke", "Montesquieu", "Jean-Jacques Rousseau", "Voltaire"],
                            answerIndex: 1,
                            explain: "Montesquieu, con su obra 'El Espíritu de las Leyes', expuso la necesidad de que un gobierno tuviese la separación de poderes (legislativo, ejecutivo y judicial)."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: La Lucha por la Independencia",
                    desc: "Identificación de las etapas de la Independencia, personajes clave y acontecimientos principales.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Inicio de la Independencia",
                            q: "¿En qué año dio inicio la guerra de Independencia de México?",
                            options: ["1808", "1810", "1821", "1824"],
                            answerIndex: 1,
                            explain: "La guerra de Independencia de México dio inicio en 1810, cuando el padre Miguel Hidalgo dio el llamado en el curato de Dolores."
                        },
                        {
                            topic: "Conspiración de Querétaro",
                            q: "¿Quién cumplió un papel destacado al dar aviso de levantarse en armas en la Conspiración de Querétaro?",
                            options: ["Miguel Hidalgo", "Ignacio Allende", "Josefa Ortiz de Domínguez", "José María Morelos"],
                            answerIndex: 2,
                            explain: "Josefa Ortiz de Domínguez cumplió un destacado papel en la decisión de dar el aviso de levantarse en armas, al ser descubierta la conspiración."
                        },
                        {
                            topic: "Alhóndiga de Granaditas",
                            q: "¿Quién logró derribar la puerta de la Alhóndiga de Granaditas para permitir el asalto final?",
                            options: ["El Pípila", "Ignacio Allende", "Miguel Hidalgo", "José María Jiménez"],
                            answerIndex: 0,
                            explain: "Una figura popular conocida como 'El Pípila' logró derribar la puerta para permitir el asalto final a la Alhóndiga de Granaditas en Guanajuato."
                        },
                        {
                            topic: "El Despertador Americano",
                            q: "¿Cuál fue el primer periódico independiente de América?",
                            options: ["El Ilustrador Nacional", "El Despertador Americano", "El Pensador Mexicano", "El Sol de México"],
                            answerIndex: 1,
                            explain: "El Despertador Americano fue el 'primer periódico independiente de América', impreso durante la estancia de Hidalgo en Guadalajara."
                        },
                        {
                            topic: "Segunda etapa de la Independencia",
                            q: "¿Quién encabezó la etapa de Organización de la Independencia?",
                            options: ["Miguel Hidalgo", "José María Morelos", "Vicente Guerrero", "Agustín de Iturbide"],
                            answerIndex: 1,
                            explain: "La segunda etapa de la Independencia, denominada Organización, estuvo encabezada por José María Morelos y Pavón, reconocido como el Siervo de la Nación."
                        },
                        {
                            topic: "Constitución de Apatzingán",
                            q: "¿En qué documento plasmó Morelos sus ideales para una 'América libre'?",
                            options: ["Plan de Iguala", "Sentimientos de la Nación", "Plan de San Luis", "Tratados de Córdoba"],
                            answerIndex: 1,
                            explain: "Morelos organizó la promulgación de la Constitución de Apatzingán, fundamentada en 'Los Sentimientos de la Nación', documento donde plasmó sus ideales para una 'América libre' en 1813."
                        },
                        {
                            topic: "Etapa de Resistencia",
                            q: "¿Quién fue el guerrillero español que luchó contra el absolutismo de Fernando VII en la Nueva España?",
                            options: ["Francisco Javier Mina", "Fray Servando Teresa de Mier", "Juan Ruiz Apodaca", "Félix María Calleja"],
                            answerIndex: 0,
                            explain: "Francisco Javier Mina, un liberal español que luchó contra Bonaparte, llegó a la Nueva España y apoyó el movimiento de independencia, siendo fusilado en 1817."
                        },
                        {
                            topic: "Consumación de la Independencia",
                            q: "¿Qué documento firmaron Iturbide y Guerrero para conjuntar fuerzas y lograr la independencia?",
                            options: ["Plan de Iguala", "Tratados de Córdoba", "Plan de San Luis", "Plan de Tuxtepec"],
                            answerIndex: 0,
                            explain: "Iturbide y Guerrero firmaron el Plan de Iguala en 1821 para conjuntar fuerzas y lograr la independencia de México."
                        },
                        {
                            topic: "Primera República Federal",
                            q: "¿Quién fue el primer presidente de México en 1824?",
                            options: ["Guadalupe Victoria", "Vicente Guerrero", "Anastasio Bustamante", "Antonio López de Santa Anna"],
                            answerIndex: 0,
                            explain: "La Primera República Federal comenzó con la elección de Guadalupe Victoria como presidente en 1824, el único cuatrienio que se cumplió en este periodo."
                        },
                        {
                            topic: "Destino Manifiesto",
                            q: "¿Qué doctrina decretaba el derecho de los blancos anglosajones a poblar territorios del norte de México?",
                            options: ["Doctrina Monroe", "Destino Manifiesto", "Plan de San Luis", "Tratado de Guadalupe"],
                            answerIndex: 1,
                            explain: "El Destino Manifiesto era una filosofía expansionista e imperialista que decretaba el derecho de los blancos anglosajones a poblar territorios, primero del norte de México y luego el resto del continente."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Ilustración y Liberalismo",
                    desc: "Identificación del liberalismo, la Ilustración y los pensadores liberales mexicanos.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Liberalismo económico",
                            q: "¿Contra qué doctrina económica se opone el liberalismo?",
                            options: ["El capitalismo", "El mercantilismo", "El socialismo", "El feudalismo"],
                            answerIndex: 1,
                            explain: "El liberalismo es contrario en el aspecto económico al mercantilismo, el cual sostiene que la base de la economía descansa en una política de acumulación de metales preciosos y la marcada presencia del Estado."
                        },
                        {
                            topic: "Adam Smith",
                            q: "¿Quién fue uno de los máximos exponentes del liberalismo económico?",
                            options: ["John Locke", "Adam Smith", "Montesquieu", "Voltaire"],
                            answerIndex: 1,
                            explain: "Adam Smith fue un economista escocés y uno de los máximos exponentes del liberalismo, quien pugnaba por una libertad de comercio en consonancia con la libertad individual."
                        },
                        {
                            topic: "Revolución Gloriosa",
                            q: "¿Qué acontecimiento puso fin al absolutismo en Inglaterra en 1688?",
                            options: ["La Revolución Francesa", "La Revolución Gloriosa", "La Guerra de los Cien Años", "La Reforma Protestante"],
                            answerIndex: 1,
                            explain: "La Revolución Gloriosa de 1688 puso fin al absolutismo en Inglaterra, tras los intentos del rey Jacobo II de restaurarlo."
                        },
                        {
                            topic: "Ilustración",
                            q: "¿Qué movimiento científico-intelectual se desarrolló durante la segunda mitad del siglo XVIII conocido como el Siglo de las Luces?",
                            options: ["El Renacimiento", "La Ilustración", "El Romanticismo", "El Positivismo"],
                            answerIndex: 1,
                            explain: "La Ilustración o Iluminismo fue un movimiento científico-intelectual que se desarrolló durante la segunda mitad del siglo XVIII, conocido como el Siglo de las Luces."
                        },
                        {
                            topic: "Enciclopedia",
                            q: "¿Quiénes fueron los dos grandes intelectuales detrás de la Enciclopedia?",
                            options: ["Voltaire y Rousseau", "Diderot y D'Alembert", "Locke y Hume", "Montesquieu y Voltaire"],
                            answerIndex: 1,
                            explain: "Denis Diderot y Jean le Rond D'Alembert fueron los dos grandes intelectuales detrás de la Enciclopedia, que difundió los ideales de la Ilustración."
                        },
                        {
                            topic: "José María Luis Mora",
                            q: "¿Qué propuso el pensador liberal José María Luis Mora para México?",
                            options: ["Una monarquía", "Implementar una república similar a la de Estados Unidos", "Un régimen dictatorial", "Una teocracia"],
                            answerIndex: 1,
                            explain: "José María Luis Mora apoyaba la idea de implementar una república similar a la que se había creado en Estados Unidos y se oponía al monarquismo."
                        },
                        {
                            topic: "Guadalupe Victoria",
                            q: "¿Qué logró Guadalupe Victoria como primer presidente de México?",
                            options: ["La expropiación petrolera", "El reconocimiento de la Independencia por Gran Bretaña", "La Constitución de 1857", "La abolición de la esclavitud"],
                            answerIndex: 1,
                            explain: "Guadalupe Victoria mantuvo la defensa de la soberanía nacional y logró el reconocimiento de la Independencia de México por parte del gobierno de Gran Bretaña."
                        },
                        {
                            topic: "Vicente Guerrero",
                            q: "¿Qué decretó Vicente Guerrero al llegar a la presidencia en 1829?",
                            options: ["La expropiación petrolera", "La abolición de la esclavitud", "La reforma educativa", "La nacionalización de bienes del clero"],
                            answerIndex: 1,
                            explain: "Vicente Guerrero decretó la abolición de la esclavitud en 1829, estableciendo que 'queda abolida la esclavitud en la república'."
                        },
                        {
                            topic: "Benito Juárez",
                            q: "¿Qué promulgó Benito Juárez como presidente para establecer la nacionalización de bienes del clero y libertad de cultos?",
                            options: ["La Constitución de 1857", "Las Leyes de Reforma", "El Plan de San Luis", "Los Tratados de Córdoba"],
                            answerIndex: 1,
                            explain: "Juárez promulgó las Leyes de Reforma (1860) con las que se establecía la nacionalización de los bienes del clero, matrimonio civil, estado civil de las personas, secularización de los cementerios y libertad de cultos."
                        },
                        {
                            topic: "Constitución de 1857",
                            q: "¿Qué documento constitucional es considerado base del actual documento constitucional de 1917?",
                            options: ["La Constitución de 1824", "La Constitución de 1857", "La Constitución de 1917", "La Constitución de Apatzingán"],
                            answerIndex: 1,
                            explain: "Benito Juárez impulsó la promulgación de la Constitución de 1857, considerada como base del actual documento constitucional de 1917."
                        }
                    ]
                }
            }
        },
        modulo2: {
            nombre: "Módulo 2: México Independiente Durante el Siglo XIX",
            actividades: {
                act1: {
                    nombre: "Actividad 1: México Independiente Durante el Siglo XIX",
                    desc: "Identificación de la Segunda República Federal, invasiones de Estados Unidos y Francia, Guerra de Reforma, imperialismo y centralismo.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Tratado de Guadalupe-Hidalgo",
                            q: "¿Qué territorio cedió México a Estados Unidos con el Tratado de Guadalupe-Hidalgo?",
                            options: ["Texas", "Más de la mitad de su territorio", "California", "Nuevo México"],
                            answerIndex: 1,
                            explain: "Con el Tratado de Guadalupe-Hidalgo, México cedió más de la mitad de su territorio a Estados Unidos, más de dos millones doscientos mil kilómetros cuadrados."
                        },
                        {
                            topic: "Guerra contra Estados Unidos",
                            q: "¿En qué años se desarrolló la guerra contra Estados Unidos?",
                            options: ["1846-1848", "1862-1867", "1857-1860", "1910-1917"],
                            answerIndex: 0,
                            explain: "La guerra contra Estados Unidos se desarrolló entre 1846 y 1848, y fue quizás el mayor conflicto bélico sostenido por México en toda su historia."
                        },
                        {
                            topic: "Batalla del 5 de mayo",
                            q: "¿Quién comandó las tropas mexicanas en la Batalla del 5 de mayo de 1862 contra el ejército francés?",
                            options: ["Porfirio Díaz", "Ignacio Zaragoza", "Benito Juárez", "Miguel Miramón"],
                            answerIndex: 1,
                            explain: "El joven comandante Ignacio Zaragoza comandó las tropas mexicanas y logró derrotar al ejército francés en la Batalla de Puebla el 5 de mayo de 1862."
                        },
                        {
                            topic: "Segundo Imperio Mexicano",
                            q: "¿Quién fue el emperador del Segundo Imperio Mexicano?",
                            options: ["Agustín de Iturbide", "Maximiliano de Habsburgo", "Napoleón III", "Félix María Zuloaga"],
                            answerIndex: 1,
                            explain: "Maximiliano de Habsburgo llegó a Veracruz en 1864 para instaurar el Segundo Imperio Mexicano, aunque mantuvo vigentes las Leyes de Reforma."
                        },
                        {
                            topic: "Leyes de Reforma",
                            q: "¿Qué establecían las Leyes de Reforma promulgadas por Juárez?",
                            options: ["La nacionalización de bienes del clero, matrimonio civil y libertad de cultos", "La abolición de la esclavitud", "La reforma educativa", "La expropiación petrolera"],
                            answerIndex: 0,
                            explain: "Las Leyes de Reforma establecían la nacionalización de los bienes del clero, matrimonio civil, estado civil de las personas, secularización de los cementerios y libertad de cultos."
                        },
                        {
                            topic: "Doctrina Monroe",
                            q: "¿Qué doctrina establecía que América era para los americanos y repudiaba la presencia europea?",
                            options: ["Destino Manifiesto", "Doctrina Monroe", "Plan de San Luis", "Tratado de Guadalupe"],
                            answerIndex: 1,
                            explain: "La Doctrina Monroe surgió en 1823 bajo la presidencia de James Monroe, solicitando a Europa no colonizar América, y se resume en el lema 'América para los americanos'."
                        },
                        {
                            topic: "Congreso de Viena",
                            q: "¿Qué acordaron las potencias en el Congreso de Viena en 1815?",
                            options: ["La independencia de América", "Volver al antiguo régimen absolutista", "La abolición de la esclavitud", "La industrialización de Europa"],
                            answerIndex: 1,
                            explain: "En el Congreso de Viena, las potencias enemigas de Francia acordaron que lo mejor para Europa era volver al viejo régimen, el absolutismo, que prevalecía antes de la Revolución francesa."
                        },
                        {
                            topic: "Revolución Industrial",
                            q: "¿Qué movimiento iniciado en Inglaterra se extendió por Europa y afectó a la clase obrera?",
                            options: ["La Revolución Francesa", "La Revolución Industrial", "La Revolución Gloriosa", "La Revolución Rusa"],
                            answerIndex: 1,
                            explain: "La Revolución Industrial, iniciada en Inglaterra, se extendió rápidamente a otras partes del continente, afectando a la clase obrera con largas jornadas de trabajo a cambio de un pago miserable."
                        },
                        {
                            topic: "Manifiesto Comunista",
                            q: "¿Qué obra publicó Karl Marx en 1848 convocando a la clase obrera a destruir el capitalismo?",
                            options: ["El Capital", "El Manifiesto Comunista", "La Ideología Alemana", "La Cuestión Judía"],
                            answerIndex: 1,
                            explain: "En 1848, Karl Marx publicó su convocatoria a la clase obrera para destruir al capitalismo, conocida como el Manifiesto Comunista."
                        },
                        {
                            topic: "Conferencia de Berlín",
                            q: "¿Qué canciller alemán propuso la Conferencia de Berlín para el reparto de África?",
                            options: ["Guillermo II", "Otto von Bismarck", "Napoleón III", "Luis XIV"],
                            answerIndex: 1,
                            explain: "Otto von Bismarck, canciller alemán, propuso la famosa Conferencia de Berlín (1885) para la cuestión del reparto del continente africano a manos de siete naciones."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: El Régimen Porfirista",
                    desc: "Identificación del Porfiriato, sus etapas, características económicas y políticas.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Porfiriato",
                            q: "¿Qué periodo abarca el Porfiriato?",
                            options: ["1857-1872", "1877-1911", "1910-1917", "1862-1867"],
                            answerIndex: 1,
                            explain: "El Porfiriato abarca la etapa de 1877 a 1911, durante la cual Porfirio Díaz estuvo al mando de la presidencia de México."
                        },
                        {
                            topic: "Plan de Tuxtepec",
                            q: "¿Con qué documento llegó Porfirio Díaz a la presidencia bajo el lema de 'No reelección'?",
                            options: ["Plan de La Noria", "Plan de Tuxtepec", "Plan de San Luis", "Plan de Iguala"],
                            answerIndex: 1,
                            explain: "En 1876 se proclamó el Plan de Tuxtepec, que le dio la oportunidad a Díaz de llegar a la silla presidencial bajo el lema de 'No reelección'."
                        },
                        {
                            topic: "Etapas del Porfiriato",
                            q: "¿Cómo se dividen los años de gobierno de Porfirio Díaz según la historiadora Elisa Speckman?",
                            options: ["En una sola etapa", "En dos grandes momentos: 1877-1888 y 1888-1908", "En tres etapas", "En cuatro etapas"],
                            answerIndex: 1,
                            explain: "Speckman señala que los treinta y cuatro años de gobierno de Díaz se dividen en dos grandes momentos: 1877-1888 y 1888-1908."
                        },
                        {
                            topic: "Segunda etapa del Porfiriato",
                            q: "¿Qué caracterizó a la segunda etapa del Porfiriato?",
                            options: ["Pacificación y conciliación", "Acentuado centralismo y gobierno autoritario", "Reforma agraria", "Democracia participativa"],
                            answerIndex: 1,
                            explain: "La segunda etapa del Porfiriato (1888-1908) se caracterizó por un acentuado centralismo y por un gobierno cada vez más personalista y autoritario."
                        },
                        {
                            topic: "Inversión extranjera en el Porfiriato",
                            q: "¿Qué tipo de inversión extranjera atrajo el régimen porfirista?",
                            options: ["Solo minera", "Minería, extracción petrolera, infraestructura ferroviaria y comunicaciones", "Solo petrolera", "Solo ferroviaria"],
                            answerIndex: 1,
                            explain: "El Porfiriato atrajo inversiones en diversos campos como la minería, la extracción petrolera, la construcción de infraestructura en comunicaciones y ferroviarias."
                        },
                        {
                            topic: "Reconocimiento internacional",
                            q: "¿Con qué países restableció relaciones diplomáticas Porfirio Díaz tras la moratoria de Juárez?",
                            options: ["Solo Estados Unidos", "Francia, Inglaterra, Alemania y Bélgica", "Solo España", "Solo Francia"],
                            answerIndex: 1,
                            explain: "Díaz logró restablecer las relaciones diplomáticas con Francia, Inglaterra, Alemania y Bélgica, las cuales se habían roto tras la moratoria decretada por Juárez."
                        },
                        {
                            topic: "Cuerpo de Rurales",
                            q: "¿Qué función tenían los rurales en el Porfiriato?",
                            options: ["Cuidar las minas", "Vigilar los caminos y formar parte del aparato represor gubernamental", "Cuidar las haciendas", "Proteger a los campesinos"],
                            answerIndex: 1,
                            explain: "Los rurales eran un cuerpo policial que aparte de vigilar los caminos, formaban parte del aparato represor gubernamental."
                        },
                        {
                            topic: "Huelgas obreras",
                            q: "¿Cuáles fueron las dos grandes detonaciones sociales de la clase obrera previas a la Revolución?",
                            options: ["Cananea y Río Blanco", "Puebla y Oaxaca", "Sonora y Veracruz", "Guanajuato y Zacatecas"],
                            answerIndex: 0,
                            explain: "Cananea, Sonora, en 1906 y Río Blanco, Veracruz, en 1907 fueron las dos grandes detonaciones sociales de la clase obrera previas a la Revolución."
                        },
                        {
                            topic: "Entrevista Creelman",
                            q: "¿Qué afirmó Porfirio Díaz en la entrevista con James Creelman?",
                            options: ["Que se reelegiría indefinidamente", "Que al terminar su periodo se retiraría y que era posible hablar de democracia en México", "Que no habría elecciones", "Que apoyaría a Madero"],
                            answerIndex: 1,
                            explain: "En la entrevista con Creelman, Díaz afirmó que al terminar su periodo se retiraría y que en ese momento era posible hablar de democracia en México."
                        },
                        {
                            topic: "Penitenciaría de Lecumberri",
                            q: "¿Cuándo fue inaugurada la Penitenciaría de Lecumberri y hasta qué año funcionó?",
                            options: ["1890-1976", "1900-1976", "1900-1960", "1890-1950"],
                            answerIndex: 1,
                            explain: "La Penitenciaría de Lecumberri fue inaugurada en 1900 y funcionó hasta 1976, respondiendo a los requerimientos de una cárcel panóptica."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Indigenismo, Voto Femenino y Luchas Obreras",
                    desc: "Identificación del indigenismo, la lucha por el voto femenino y las luchas obreras como antecedentes de la Revolución.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Indigenismo",
                            q: "¿Qué fue el indigenismo en México?",
                            options: ["Una política para eliminar a los indígenas", "Una política histórica creada para integrar, asimilar e incorporar a los grupos indígenas en una única idea de nación", "Un movimiento para aislar a los indígenas", "Una política para expulsar a los indígenas"],
                            answerIndex: 1,
                            explain: "El indigenismo fue una política histórica creada por el Estado posrevolucionario que tenía el propósito de integrar, asimilar e incorporar a los grupos indígenas en torno a una única idea de nación."
                        },
                        {
                            topic: "Etapas del indigenismo",
                            q: "¿Qué etapas del indigenismo distinguió Gonzalo Aguirre Beltrán?",
                            options: ["Segregación, incorporación e integración", "Solo segregación", "Solo incorporación", "Solo integración"],
                            answerIndex: 0,
                            explain: "Aguirre Beltrán distinguió tres etapas del indigenismo: segregación (régimen colonial), incorporación (estados nacionales) e integración (después de la Revolución)."
                        },
                        {
                            topic: "Voto femenino en México",
                            q: "¿En qué fecha se reconoció constitucionalmente el derecho al voto de las mujeres en México?",
                            options: ["17 de octubre de 1953", "17 de octubre de 1955", "17 de octubre de 1950", "17 de octubre de 1948"],
                            answerIndex: 0,
                            explain: "El derecho a votar y ser votadas para las mujeres fue reconocido constitucionalmente el 17 de octubre de 1953."
                        },
                        {
                            topic: "Hermila Galindo",
                            q: "¿Quién triunfó como candidata a diputada en 1918 aunque el Colegio Electoral no le dio validez a su candidatura?",
                            options: ["Elvia Carrillo Puerto", "Hermila Galindo", "Rita Cetina Gutiérrez", "Beatriz Ponce"],
                            answerIndex: 1,
                            explain: "Hermila Galindo triunfó como candidata a diputada en 1918, aunque el Colegio Electoral no le dio validez a su candidatura, despojándola del puesto."
                        },
                        {
                            topic: "Rita Cetina Gutiérrez",
                            q: "¿Qué fundó Rita Cetina Gutiérrez en Yucatán durante el siglo XIX?",
                            options: ["La primera universidad", "La revista 'La Siempreviva' y dos escuelas para mujeres", "El primer sindicato", "La primera biblioteca pública"],
                            answerIndex: 1,
                            explain: "Rita Cetina Gutiérrez fundó la revista 'La Siempreviva' y dos escuelas para mujeres en Yucatán, promoviendo la educación y los derechos de la mujer."
                        },
                        {
                            topic: "Huelga de Cananea",
                            q: "¿En qué año se declaró la huelga de Cananea, Sonora?",
                            options: ["1905", "1906", "1907", "1910"],
                            answerIndex: 1,
                            explain: "La huelga de Cananea fue declarada el 1 de junio de 1906, motivada por un recorte de personal que aumentaría la carga de trabajo sin aumentar los sueldos."
                        },
                        {
                            topic: "Huelga de Río Blanco",
                            q: "¿Qué prohibiciones existían para los trabajadores de Río Blanco antes de la huelga de 1907?",
                            options: ["Prohibición de formar organizaciones, recibir visitas y leer periódicos no censurados", "Solo prohibición de formar organizaciones", "Solo prohibición de recibir visitas", "Solo prohibición de leer periódicos"],
                            answerIndex: 0,
                            explain: "Se prohibió a los trabajadores formar organizaciones, recibir visitas de amigos y parientes, y leer periódicos no censurados, además de tener jornadas de catorce horas diarias."
                        },
                        {
                            topic: "Sistema de raya",
                            q: "¿En qué consistía el sistema de raya?",
                            options: ["Un tipo de economía circular donde el trabajador compraba en la tienda del centro de trabajo", "Un sistema de transporte", "Un sistema educativo", "Un sistema electoral"],
                            answerIndex: 0,
                            explain: "El sistema de raya era un tipo de economía circular dentro de la fábrica o hacienda en la que el trabajador se veía obligado a comprar alimentos y artículos de primera necesidad dentro de la tienda del propio centro de trabajo."
                        },
                        {
                            topic: "Artículo 123 de la Constitución",
                            q: "¿En qué año se redactó el Artículo 123 sobre el trabajo digno en la Constitución Mexicana?",
                            options: ["1910", "1917", "1920", "1934"],
                            answerIndex: 1,
                            explain: "En 1917, en la redacción del artículo 123 de la Constitución, se establece que 'toda persona tiene derecho al trabajo digno y socialmente útil'."
                        },
                        {
                            topic: "Partido Liberal Mexicano",
                            q: "¿Qué organización dirigida por los hermanos Flores Magón apoyó a los trabajadores de Cananea y Río Blanco?",
                            options: ["Partido Revolucionario Institucional", "Partido Liberal Mexicano", "Partido Nacional Revolucionario", "Partido de la Revolución Mexicana"],
                            answerIndex: 1,
                            explain: "Los trabajadores comenzaron a organizarse de la mano del Partido Liberal Mexicano, dirigido por los hermanos Enrique y Ricardo Flores Magón."
                        }
                    ]
                }
            }
        },
        modulo3: {
            nombre: "Módulo 3: El Porfiriato y la Etapa Posrevolucionaria",
            actividades: {
                act1: {
                    nombre: "Actividad 1: Régimen Porfirista y la Revolución Mexicana",
                    desc: "Identificación del régimen porfirista, sus políticas y el inicio de la Revolución Mexicana.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Descontento social en el Porfiriato",
                            q: "¿Qué sectores empezaron a sentar las bases del descontento social durante el Porfiriato?",
                            options: ["Solo los campesinos", "Los sectores obreros, campesinos, clase media e intelectuales anarquistas", "Solo los obreros", "Solo los intelectuales"],
                            answerIndex: 1,
                            explain: "Los sectores obreros y campesinos, junto con la clase media e intelectuales anarquistas, empezarían a sentar las bases del descontento social contra el régimen porfirista."
                        },
                        {
                            topic: "Plan de San Luis",
                            q: "¿Qué documento redactó Francisco I. Madero convocando a levantarse en armas?",
                            options: ["Plan de Tuxtepec", "Plan de San Luis", "Plan de La Noria", "Plan de Iguala"],
                            answerIndex: 1,
                            explain: "Madero redactó el Plan de San Luis, con el que convocó a diversos sectores a levantarse en armas bajo el lema 'Sufragio efectivo, no reelección'."
                        },
                        {
                            topic: "Tratados de Ciudad Juárez",
                            q: "¿Qué documentos firmaron tras la renuncia de Porfirio Díaz en 1911?",
                            options: ["Tratados de Guadalupe-Hidalgo", "Tratados de Ciudad Juárez", "Tratados de Córdoba", "Tratados de Bucareli"],
                            answerIndex: 1,
                            explain: "Tras la renuncia de Díaz en mayo de 1911, se firmaron los Tratados de Ciudad Juárez, con los que concluyó un mandato de treinta años."
                        },
                        {
                            topic: "Decena Trágica",
                            q: "¿Qué periodo se conoce como la Decena Trágica?",
                            options: ["El golpe de estado contra Madero en febrero de 1913", "La guerra de Reforma", "La invasión francesa", "La huelga de Cananea"],
                            answerIndex: 0,
                            explain: "La Decena Trágica fue el golpe de estado que derrocó a Madero en febrero de 1913, en el que participaron Félix Díaz y Bernardo Reyes, con el respaldo de Estados Unidos."
                        },
                        {
                            topic: "Embajador Henry Lane Wilson",
                            q: "¿Qué papel jugó el embajador estadounidense Henry Lane Wilson en el derrocamiento de Madero?",
                            options: ["Apoyó a Madero", "Incitó el golpe contra Madero", "Se mantuvo neutral", "Ayudó a la fuga de Madero"],
                            answerIndex: 1,
                            explain: "El embajador Henry Lane Wilson incitó a llevar a cabo el golpe contra Madero, con el respaldo del presidente estadounidense William Howard Taft."
                        },
                        {
                            topic: "Victoriano Huerta",
                            q: "¿Quién asumió la presidencia tras el derrocamiento de Madero?",
                            options: ["Victoriano Huerta", "Venustiano Carranza", "Álvaro Obregón", "Plutarco Elías Calles"],
                            answerIndex: 0,
                            explain: "Victoriano Huerta, quien traicionó a Madero, asumió la presidencia instaurando una dictadura militar tras el asesinato de Madero y Pino Suárez."
                        },
                        {
                            topic: "Triple Alianza en la Primera Guerra Mundial",
                            q: "¿Qué países conformaban la Triple Alianza en la Primera Guerra Mundial?",
                            options: ["Francia, Rusia y Reino Unido", "Alemania, Italia y Austria-Hungría", "Estados Unidos, Japón y Bélgica", "Francia, Italia y Rusia"],
                            answerIndex: 1,
                            explain: "La Triple Alianza la encabezaron Alemania, Italia y el imperio de Austria-Hungría, con las alianzas del Imperio turco y Bulgaria."
                        },
                        {
                            topic: "Triple Entente",
                            q: "¿Qué países conformaban la Triple Entente en la Primera Guerra Mundial?",
                            options: ["Alemania, Italia y Austria-Hungría", "Francia, Rusia y Reino Unido", "Estados Unidos, Japón y Bélgica", "Alemania, Francia y Rusia"],
                            answerIndex: 1,
                            explain: "La Triple Entente o Entente Cordiale estuvo integrada por Francia, Rusia y Reino Unido, con el apoyo de Bélgica y más tarde Italia, Japón y Estados Unidos."
                        },
                        {
                            topic: "Tratado de Versalles",
                            q: "¿En qué año se firmó el Tratado de Versalles que puso fin a la Primera Guerra Mundial?",
                            options: ["1917", "1918", "1919", "1920"],
                            answerIndex: 2,
                            explain: "La Primera Guerra Mundial finalizó con la firma del Tratado de Versalles en 1919, en el que se culpó a Alemania de la guerra."
                        },
                        {
                            topic: "Revolución Rusa",
                            q: "¿Quién lideró la Revolución bolchevique de octubre de 1917?",
                            options: ["Kerensky", "Lenin", "Stalin", "Nicolás II"],
                            answerIndex: 1,
                            explain: "Vladímir Ilich Uliánov, conocido como Lenin, organizó a los bolcheviques y lideró la Revolución de octubre de 1917, creando el primer estado socialista del mundo."
                        }
                    ]
                },
                act2: {
                    nombre: "Actividad 2: Revolución Mexicana y Primera Guerra Mundial",
                    desc: "Identificación de la Revolución Mexicana y el contexto global de la Primera Guerra Mundial.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Emiliano Zapata",
                            q: "¿Quién lideró el movimiento agrarista durante la Revolución Mexicana?",
                            options: ["Francisco Villa", "Emiliano Zapata", "Álvaro Obregón", "Venustiano Carranza"],
                            answerIndex: 1,
                            explain: "Emiliano Zapata (1879-1919) lideró el movimiento agrarista durante la Revolución Mexicana, defendiendo las demandas de los campesinos."
                        },
                        {
                            topic: "Decena Trágica",
                            q: "¿Cómo se le conoce al periodo de diez días en que fue derrocado Madero?",
                            options: ["Decena Trágica", "Semana Negra", "Golpe de Estado", "Revolución de 1913"],
                            answerIndex: 0,
                            explain: "El derrocamiento de Madero se conoce como la Decena Trágica, periodo en el que finalmente fue asesinado junto a su vicepresidente Pino Suárez."
                        },
                        {
                            topic: "Plan de Agua Prieta",
                            q: "¿Qué documento encabezó el general Álvaro Obregón para desconocer a Venustiano Carranza?",
                            options: ["Plan de Tuxtepec", "Plan de Agua Prieta", "Plan de San Luis", "Plan de Iguala"],
                            answerIndex: 1,
                            explain: "En 1920, se promulgó el Plan de Agua Prieta encabezado por el general Álvaro Obregón, con el que se desconoció a Venustiano Carranza."
                        },
                        {
                            topic: "Tratados de Bucareli",
                            q: "¿Qué pacto firmó el gobierno de Obregón con Estados Unidos para ser reconocido?",
                            options: ["Tratados de Guadalupe-Hidalgo", "Tratados de Bucareli", "Tratados de Córdoba", "Tratados de Ciudad Juárez"],
                            answerIndex: 1,
                            explain: "Los Tratados de Bucareli (1923) fueron el pacto mediante el cual el gobierno de Obregón se comprometió a la reparación de los daños a propiedades estadounidenses y a cambio fue reconocido."
                        },
                        {
                            topic: "Guerra Cristera",
                            q: "¿En qué periodo se desarrolló la Guerra Cristera en México?",
                            options: ["1924-1927", "1926-1929", "1928-1930", "1925-1928"],
                            answerIndex: 1,
                            explain: "La Guerra Cristera se desarrolló entre 1926 y 1929, siendo el enfrentamiento más extenso y sangriento después de la Revolución mexicana."
                        },
                        {
                            topic: "Ley Calles",
                            q: "¿Qué ley restringía el culto católico y el número de sacerdotes, provocando la Guerra Cristera?",
                            options: ["Ley de Reforma", "Ley Calles", "Ley Juárez", "Ley Lerdo"],
                            answerIndex: 1,
                            explain: "La expedición de la Ley Calles, que restringía el culto católico y el número de sacerdotes, provocó el estallido de la Guerra Cristera."
                        },
                        {
                            topic: "Maximato",
                            q: "¿Qué etapa se conoce como el Maximato en la historia de México?",
                            options: ["El gobierno de Obregón", "La influencia de Calles sobre tres mandatarios", "El gobierno de Cárdenas", "La rebelión delahuertista"],
                            answerIndex: 1,
                            explain: "El Maximato es la etapa en la que Plutarco Elías Calles se proclamó como el Jefe Máximo de la Revolución y ejerció influencia sobre tres mandatarios: Portes Gil, Ortiz Rubio y Abelardo L. Rodríguez."
                        },
                        {
                            topic: "Partido Nacional Revolucionario",
                            q: "¿En qué año se creó el Partido Nacional Revolucionario (PNR), antecedente del PRI?",
                            options: ["1928", "1929", "1930", "1934"],
                            answerIndex: 1,
                            explain: "Calles fundó en 1929 el Partido Nacional Revolucionario (PNR), antecedente del Partido Revolucionario Institucional (PRI), para intentar aglutinar y controlar todas las corrientes políticas."
                        },
                        {
                            topic: "Asesinato de Obregón",
                            q: "¿Quién asesinó a Álvaro Obregón en 1928 en el Restaurante La Bombilla?",
                            options: ["José León Toral", "Plutarco Elías Calles", "Adolfo de la Huerta", "Pascual Ortiz Rubio"],
                            answerIndex: 0,
                            explain: "José León Toral, un ferviente católico, aprovechó una comida para dispararle y matar a Obregón en el Restaurante La Bombilla en 1928."
                        },
                        {
                            topic: "Rebelión delahuertista",
                            q: "¿Quién encabezó la rebelión contra Obregón en 1924?",
                            options: ["Adolfo de la Huerta", "Plutarco Elías Calles", "Pascual Ortiz Rubio", "Emilio Portes Gil"],
                            answerIndex: 0,
                            explain: "La rebelión delahuertista fue el levantamiento bajo la dirección de Adolfo de la Huerta en contra de Obregón y su sucesor Calles, durando seis meses."
                        }
                    ]
                },
                act3: {
                    nombre: "Actividad 3: Reconstrucción Nacional y Cardenismo",
                    desc: "Identificación de la Reconstrucción Nacional, el Cardenismo y el Estado Benefactor.",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Cardenismo",
                            q: "¿En qué periodo gobernó Lázaro Cárdenas del Río?",
                            options: ["1928-1934", "1934-1940", "1940-1946", "1924-1928"],
                            answerIndex: 1,
                            explain: "Lázaro Cárdenas del Río gobernó México de 1934 a 1940, marcando un interesante parteaguas en la historia nacional."
                        },
                        {
                            topic: "Expropiación petrolera",
                            q: "¿En qué año Lázaro Cárdenas llevó a cabo la expropiación del petróleo?",
                            options: ["1936", "1937", "1938", "1939"],
                            answerIndex: 2,
                            explain: "En 1938, Cárdenas llevó a cabo la expropiación del petróleo, amparado por el artículo 27 de la Constitución, creando Petróleos Mexicanos (PEMEX)."
                        },
                        {
                            topic: "Creación de PEMEX",
                            q: "¿Qué empresa estatal se creó tras la expropiación petrolera de 1938?",
                            options: ["CFE", "PEMEX", "NAFIN", "IMSS"],
                            answerIndex: 1,
                            explain: "Cárdenas propuso la creación de una compañía petrolera del Estado, Petróleos Mexicanos (PEMEX), tras la expropiación petrolera."
                        },
                        {
                            topic: "Educación socialista",
                            q: "¿Qué tipo de educación se estableció en el artículo 3º durante el Cardenismo?",
                            options: ["Laica", "Gratuita", "Socialista", "Religiosa"],
                            answerIndex: 2,
                            explain: "Durante el Cardenismo se modificó el Artículo 3º de la Constitución para establecer una educación socialista que promoviera una conciencia crítica, reflexiva y nacionalista."
                        },
                        {
                            topic: "Plan Sexenal",
                            q: "¿Qué plan elaboró Cárdenas como compromiso ante la nación para desarrollar una política social, económica y administrativa?",
                            options: ["Plan de San Luis", "Plan Sexenal", "Plan de Agua Prieta", "Plan de Iguala"],
                            answerIndex: 1,
                            explain: "A finales de 1933 se elaboró el Plan Sexenal, un compromiso ante la nación de desarrollar una política social, económica y administrativa que tradujera en hechos los postulados de la lucha armada."
                        },
                        {
                            topic: "Instituto Politécnico Nacional",
                            q: "¿En qué año se fundó el Instituto Politécnico Nacional (IPN)?",
                            options: ["1934", "1935", "1936", "1937"],
                            answerIndex: 2,
                            explain: "El Instituto Politécnico Nacional (IPN) fue fundado en 1936 durante el gobierno de Lázaro Cárdenas."
                        },
                        {
                            topic: "Estado Benefactor",
                            q: "¿Qué modelo de Estado se fortaleció durante el Cardenismo tras la crisis de 1929?",
                            options: ["Estado neoliberal", "Estado benefactor", "Estado mínimo", "Estado liberal"],
                            answerIndex: 1,
                            explain: "La depresión de 1929 y el inicio de la guerra mundial provocaron el fortalecimiento del Estado benefactor mediante su intervención económica y social a favor del bienestar de la población."
                        },
                        {
                            topic: "Teoría Keynesiana",
                            q: "¿Qué teoría económica sirvió como aliciente para el fortalecimiento del Estado benefactor en México?",
                            options: ["Teoría de Adam Smith", "Teoría Keynesiana", "Teoría de Marx", "Teoría de Ricardo"],
                            answerIndex: 1,
                            explain: "La teoría Keynesiana de John Maynard Keynes sobre el Estado de carácter interventor sirvió como aliciente para el fortalecimiento del Estado benefactor en México."
                        },
                        {
                            topic: "Confederación General de Obreros y Campesinos",
                            q: "¿Qué organización popular se fortaleció durante el gobierno de Cárdenas?",
                            options: ["CROM", "CTM", "CNC", "Todas las anteriores"],
                            answerIndex: 3,
                            explain: "El cardenismo fortaleció las organizaciones populares como los sindicatos de ferrocarrileros, petroleros, taxistas y la Confederación General de Obreros y Campesinos de México."
                        },
                        {
                            topic: "Instituto Nacional de Antropología e Historia",
                            q: "¿En qué año se fundó el Instituto Nacional de Antropología e Historia (INAH)?",
                            options: ["1937", "1938", "1939", "1940"],
                            answerIndex: 2,
                            explain: "El Instituto Nacional de Antropología e Historia (INAH) fue fundado en 1939 durante el gobierno de Lázaro Cárdenas."
                        }
                    ]
                }
            }
        }
    }
};

export default concienciaHistoricaII;