// ============================================
// CULTURA DIGITAL I - TRIMESTRE 1
// 9 ACTIVIDADES - 90 PREGUNTAS
// ============================================

const culturaDigital1 = {
    id: "cultural1",
    nombre: "CULTURA DIGITAL I",
    icono: "💻",
    descripcion: "Ciudadanía digital, hardware, software, internet y algoritmos",
    modulos: {
        // ========== MÓDULO 1 ==========
        modulo1: {
            nombre: "Módulo 1: Ciudadanía digital y resolución de problemas",
            actividades: {
                // ACTIVIDAD 1: Unidades de almacenamiento, software y sistemas operativos
                act1: {
                    nombre: "Actividad 1: Unidades de almacenamiento, software y SO",
                    desc: "Bits, bytes, dispositivos de almacenamiento, clasificación de software y sistemas operativos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Unidades de almacenamiento",
                            q: "¿Cuál es la unidad más pequeña de almacenamiento de información?",
                            options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
                            answerIndex: 1,
                            explain: "El bit (b) es la unidad más pequeña y se representa con 1 o 0."
                        },
                        {
                            topic: "Unidades de almacenamiento",
                            q: "¿A cuánto equivale 1 Kilobyte (KB)?",
                            options: ["1024 Bytes", "1000 Bytes", "1024 Megas", "1000 Megas"],
                            answerIndex: 0,
                            explain: "1 KB equivale a 1024 Bytes, aproximadamente cuatro hojas de texto."
                        },
                        {
                            topic: "Unidades de almacenamiento",
                            q: "¿Cuál es la unidad de almacenamiento más grande que se comercializa actualmente?",
                            options: ["Gigabyte", "Terabyte", "Megabyte", "Petabyte"],
                            answerIndex: 1,
                            explain: "El Terabyte (TB) es la unidad más grande que se comercializa actualmente, equivale a 1024 GB."
                        },
                        {
                            topic: "Dispositivos de almacenamiento",
                            q: "¿Cuál es el dispositivo de almacenamiento más popular en el mundo debido a su portabilidad?",
                            options: ["Disco Duro", "Memoria USB", "CD", "DVD"],
                            answerIndex: 1,
                            explain: "La memoria USB es el dispositivo de almacenamiento más popular debido a su portabilidad."
                        },
                        {
                            topic: "Dispositivos de almacenamiento",
                            q: "¿Qué capacidad de almacenamiento tiene un DVD estándar?",
                            options: ["700 MB", "4.7 GB", "25 GB", "1 TB"],
                            answerIndex: 1,
                            explain: "La capacidad de almacenamiento estándar de un DVD es de 4.7 Gigabytes."
                        },
                        {
                            topic: "Software",
                            q: "¿Qué es el software?",
                            options: [
                                "Las piezas físicas de la computadora",
                                "Los programas necesarios para realizar tareas en la computadora",
                                "El monitor y el teclado",
                                "Los cables de conexión"
                            ],
                            answerIndex: 1,
                            explain: "El software son todos los programas (aplicaciones) necesarios para realizar una tarea en la computadora."
                        },
                        {
                            topic: "Software",
                            q: "¿Qué tipo de software es Microsoft Word?",
                            options: [
                                "Software de sistema",
                                "Software de aplicación",
                                "Software de programación",
                                "Software de diagnóstico"
                            ],
                            answerIndex: 1,
                            explain: "Microsoft Word es un software de aplicación, específicamente de ofimática."
                        },
                        {
                            topic: "Sistemas operativos",
                            q: "¿Cuál es la función principal del sistema operativo?",
                            options: [
                                "Editar textos",
                                "Permitir que la computadora funcione y administrar recursos",
                                "Navegar por internet",
                                "Diseñar gráficos"
                            ],
                            answerIndex: 1,
                            explain: "El sistema operativo es el principal programa que permite a la computadora funcionar y administra sus recursos."
                        },
                        {
                            topic: "Sistemas operativos",
                            q: "¿Qué caracteriza a un sistema operativo propietario?",
                            options: [
                                "Es gratuito y de código abierto",
                                "Su propiedad intelectual pertenece a una empresa y tiene limitaciones de uso",
                                "Puede ser modificado por cualquier usuario",
                                "Es mantenido por programadores altruistas"
                            ],
                            answerIndex: 1,
                            explain: "Los sistemas operativos propietarios pertenecen a una empresa y el usuario tiene limitaciones para usarlo, modificarlo o redistribuirlo."
                        },
                        {
                            topic: "Sistemas operativos",
                            q: "¿Cuál es un ejemplo de sistema operativo libre?",
                            options: ["Windows", "macOS", "GNU/Linux", "iOS"],
                            answerIndex: 2,
                            explain: "GNU/Linux es un ejemplo de sistema operativo libre, donde los creadores renuncian a obtener utilidades por las licencias."
                        }
                    ]
                },
                // ACTIVIDAD 2: Internet, navegadores, buscadores, correo electrónico, redes sociales y nube
                act2: {
                    nombre: "Actividad 2: Internet y servicios digitales",
                    desc: "Internet, navegadores, buscadores, correo electrónico, redes sociales y computación en la nube",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Internet",
                            q: "¿Qué es internet?",
                            options: [
                                "Una red de computadoras local",
                                "La interconexión de una gran cantidad de redes de computadoras",
                                "Un programa de navegación",
                                "Un tipo de software"
                            ],
                            answerIndex: 1,
                            explain: "Internet es la interconexión de una gran cantidad de redes de computadoras, conocida como 'la red de redes'."
                        },
                        {
                            topic: "Internet",
                            q: "¿Qué servicio de internet permite la compra y venta de productos a través de redes sociales o páginas web?",
                            options: [
                                "Correo electrónico",
                                "Comercio electrónico",
                                "Redes sociales",
                                "Búsqueda de información"
                            ],
                            answerIndex: 1,
                            explain: "El comercio electrónico consiste en la compra y venta de productos o servicios a través de redes sociales o páginas web."
                        },
                        {
                            topic: "Navegadores web",
                            q: "¿Qué es un navegador web?",
                            options: [
                                "Un motor de búsqueda",
                                "Un software que permite visualizar la información de una página web",
                                "Una red social",
                                "Un servicio de correo"
                            ],
                            answerIndex: 1,
                            explain: "El navegador web es un software que permite visualizar la información que contiene una página web."
                        },
                        {
                            topic: "URL",
                            q: "¿Qué significa la sigla URL?",
                            options: [
                                "Uniform Resource Locator",
                                "Universal Resource Link",
                                "Uniform Research Language",
                                "United Reference Location"
                            ],
                            answerIndex: 0,
                            explain: "URL significa Uniform Resource Locator (Localizador Uniforme de Recursos)."
                        },
                        {
                            topic: "Dominios",
                            q: "¿Qué significa el dominio de nivel superior .edu?",
                            options: [
                                "Compañías comerciales",
                                "Centros educativos",
                                "Organizaciones sin fines de lucro",
                                "Instituciones de gobierno"
                            ],
                            answerIndex: 1,
                            explain: "El dominio .edu está destinado a centros educativos."
                        },
                        {
                            topic: "Motores de búsqueda",
                            q: "¿Cuál es la función principal de los motores de búsqueda?",
                            options: [
                                "Enviar correos electrónicos",
                                "Recopilar páginas web sobre un tema y clasificarlas",
                                "Almacenar archivos en la nube",
                                "Diseñar diagramas de flujo"
                            ],
                            answerIndex: 1,
                            explain: "Los motores de búsqueda recopilan páginas web que contienen información sobre el tema buscado y las clasifican jerárquicamente."
                        },
                        {
                            topic: "Correo electrónico",
                            q: "¿Qué significa CCO en un correo electrónico?",
                            options: [
                                "Copia carbón oculta",
                                "Copia con origen",
                                "Correo certificado original",
                                "Copia de contacto oficial"
                            ],
                            answerIndex: 0,
                            explain: "CCO (Copia Carbón Oculta) permite enviar una copia del correo sin que los destinatarios vean las direcciones de los demás."
                        },
                        {
                            topic: "Redes sociales",
                            q: "¿Qué red social fue adquirida por Google Inc. en 2006?",
                            options: ["Facebook", "Twitter", "YouTube", "LinkedIn"],
                            answerIndex: 2,
                            explain: "YouTube fue adquirida por Google Inc. en 2006."
                        },
                        {
                            topic: "Computación en la nube",
                            q: "¿Qué es la computación en la nube?",
                            options: [
                                "Almacenar archivos en un disco duro externo",
                                "Servicio de cómputo a través de redes empresariales privadas o internet",
                                "Un tipo de software de oficina",
                                "Una red social profesional"
                            ],
                            answerIndex: 1,
                            explain: "La computación en la nube es un servicio de cómputo a través de redes empresariales privadas o internet."
                        },
                        {
                            topic: "Almacenamiento en la nube",
                            q: "¿Qué capacidad de almacenamiento gratuito ofrece Google Drive?",
                            options: ["5 GB", "10 GB", "15 GB", "20 GB"],
                            answerIndex: 2,
                            explain: "Google Drive ofrece 15 Gigabytes de espacio gratuito."
                        }
                    ]
                },
                // ACTIVIDAD 3: Ciudadanía digital, netiqueta, ética tecnológica y desarrollo sostenible
                act3: {
                    nombre: "Actividad 3: Ética digital y sostenibilidad",
                    desc: "Ciudadanía digital, netiqueta, implicaciones éticas, desastres tecnológicos, bien común y energías limpias",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Ciudadanía digital",
                            q: "¿Qué es un ciudadano digital?",
                            options: [
                                "Una persona que vive en una ciudad",
                                "Un usuario que utiliza las TIC para interactuar de manera adecuada y responsable",
                                "Alguien que trabaja en una empresa de tecnología",
                                "Una persona con cuenta de correo electrónico"
                            ],
                            answerIndex: 1,
                            explain: "Un ciudadano digital es un usuario que utiliza las TIC para interactuar con otros de manera adecuada y responsable a través de internet."
                        },
                        {
                            topic: "Netiqueta",
                            q: "¿Quién redactó las diez normas de conducta en la red (netiqueta) en 1994?",
                            options: ["Bill Gates", "Virginia Shea", "Steve Jobs", "Mark Zuckerberg"],
                            answerIndex: 1,
                            explain: "Virginia Shea, en 1994, redactó diez normas de conducta en la red conocidas como netiqueta."
                        },
                        {
                            topic: "Netiqueta",
                            q: "Según las normas de netiqueta, ¿qué significa escribir todo en mayúsculas?",
                            options: [
                                "Enfatizar el mensaje",
                                "Se considera como gritar y dificulta la lectura",
                                "Es la forma correcta de escribir",
                                "Indica que el mensaje es importante"
                            ],
                            answerIndex: 1,
                            explain: "Escribir todo en mayúsculas se considera como gritar y además dificulta la lectura."
                        },
                        {
                            topic: "Implicaciones éticas",
                            q: "¿Qué desastre nuclear ocurrió en Ucrania en 1986?",
                            options: ["Hiroshima", "Nagasaki", "Chernobyl", "Fukushima"],
                            answerIndex: 2,
                            explain: "El 26 de abril de 1986 en Chernobyl (Ucrania) explotó un reactor nuclear liberando enormes cantidades de material radioactivo."
                        },
                        {
                            topic: "Implicaciones éticas",
                            q: "¿Qué es la ciberdelincuencia?",
                            options: [
                                "El uso educativo de internet",
                                "Actividad ilícita realizada con ayuda de redes de comunicación",
                                "La creación de software libre",
                                "La navegación segura"
                            ],
                            answerIndex: 1,
                            explain: "La ciberdelincuencia es la actividad ilícita que se realiza con ayuda de redes de comunicación (virus, accesos no autorizados, ataques)."
                        },
                        {
                            topic: "Conflictos éticos",
                            q: "¿Qué es el sexting?",
                            options: [
                                "Envío de mensajes de texto",
                                "Envío y recepción de contenido multimedia con contenido sexual",
                                "Compartir enlaces",
                                "Publicar fotos de vacaciones"
                            ],
                            answerIndex: 1,
                            explain: "El sexting es el envío y recepción en redes sociales de contenido multimedia con contenido sexual."
                        },
                        {
                            topic: "Bien común",
                            q: "¿Cuál es un ejemplo del uso de la tecnología para el bien común en la educación?",
                            options: [
                                "Videojuegos violentos",
                                "Bibliotecas virtuales y educación a distancia",
                                "Redes sociales para entretenimiento",
                                "Publicidad en línea"
                            ],
                            answerIndex: 1,
                            explain: "Las bibliotecas virtuales y la educación a distancia son ejemplos del uso de la tecnología para el bien común en la educación."
                        },
                        {
                            topic: "Energías limpias",
                            q: "¿Qué es la energía eólica?",
                            options: [
                                "Energía obtenida del sol",
                                "Energía obtenida de la fuerza de los vientos",
                                "Energía obtenida del agua",
                                "Energía obtenida de las mareas"
                            ],
                            answerIndex: 1,
                            explain: "La energía eólica es obtenida de la fuerza de los vientos y tiene su origen en el sol."
                        },
                        {
                            topic: "Desarrollo sostenible",
                            q: "¿Qué definición dio la Asamblea General de la ONU en 1987 sobre desarrollo sostenible?",
                            options: [
                                "Maximizar la producción industrial",
                                "Satisfacer necesidades del presente sin comprometer futuras generaciones",
                                "Aumentar el consumo de energía",
                                "Explotar todos los recursos disponibles"
                            ],
                            answerIndex: 1,
                            explain: "El desarrollo sostenible satisface las necesidades del presente sin comprometer la capacidad de las futuras generaciones."
                        },
                        {
                            topic: "Principios éticos",
                            q: "¿Qué establece el principio de prudencia en el uso de la tecnología?",
                            options: [
                                "Usar la tecnología sin límites",
                                "Evitar aplicar tecnología sin certeza científica de sus consecuencias",
                                "Priorizar la creación de armamento",
                                "Maximizar el consumo energético"
                            ],
                            answerIndex: 1,
                            explain: "El principio de prudencia se refiere a evitar la aplicación de tecnología sin poseer certeza científica de las consecuencias."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 2 ==========
        modulo2: {
            nombre: "Módulo 2: Acceso Responsable dentro del Ciberespacio",
            actividades: {
                // ACTIVIDAD 1: Hardware, componentes internos y periféricos
                act1: {
                    nombre: "Actividad 1: Hardware y periféricos",
                    desc: "Componentes internos, tarjeta madre, microprocesador, memoria RAM, disco duro y clasificación de periféricos",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Hardware",
                            q: "¿Qué es el hardware?",
                            options: [
                                "Los programas de la computadora",
                                "Todas las piezas físicas y tangibles de una computadora",
                                "El sistema operativo",
                                "Las aplicaciones de oficina"
                            ],
                            answerIndex: 1,
                            explain: "Hardware son todas las piezas físicas y tangibles (memorias, discos duros, cables, teclado, monitor) que integran una computadora."
                        },
                        {
                            topic: "Tarjeta madre",
                            q: "¿Cuál es la función principal de la tarjeta madre?",
                            options: [
                                "Almacenar información",
                                "Interconectar todos los dispositivos de la computadora",
                                "Realizar cálculos",
                                "Mostrar imágenes"
                            ],
                            answerIndex: 1,
                            explain: "La tarjeta madre es la placa de circuitos más grande y su función principal es interconectar todos los dispositivos."
                        },
                        {
                            topic: "Microprocesador",
                            q: "¿Cómo se llama también al microprocesador?",
                            options: ["RAM", "HDD", "CPU", "USB"],
                            answerIndex: 2,
                            explain: "El microprocesador también se llama CPU (Unidad Central de Procesamiento)."
                        },
                        {
                            topic: "Memoria RAM",
                            q: "¿Qué característica tiene la memoria RAM?",
                            options: [
                                "Almacena información permanentemente",
                                "Pierde su contenido cuando se apaga la computadora",
                                "Es el principal dispositivo de almacenamiento",
                                "Solo almacena fotos"
                            ],
                            answerIndex: 1,
                            explain: "La memoria RAM almacena temporalmente las instrucciones y pierde su contenido cuando se apaga la computadora."
                        },
                        {
                            topic: "Disco duro",
                            q: "¿Cuál es la función del disco duro?",
                            options: [
                                "Ejecutar programas",
                                "Almacenar permanentemente la información del usuario",
                                "Conectar periféricos",
                                "Mostrar video"
                            ],
                            answerIndex: 1,
                            explain: "El disco duro se encarga de almacenar permanentemente toda la información del usuario y los programas instalados."
                        },
                        {
                            topic: "Periféricos",
                            q: "¿Qué son los periféricos?",
                            options: [
                                "Componentes internos del gabinete",
                                "Hardware independiente que se conecta externamente al gabinete",
                                "Programas de aplicación",
                                "Sistemas operativos"
                            ],
                            answerIndex: 1,
                            explain: "Periférico es cualquier hardware independiente que se conecta externamente al gabinete para expandir sus funciones."
                        },
                        {
                            topic: "Periféricos de entrada",
                            q: "¿Cuál es un ejemplo de periférico de entrada?",
                            options: ["Monitor", "Impresora", "Teclado", "Bocinas"],
                            answerIndex: 2,
                            explain: "El teclado es un periférico de entrada porque introduce datos a la computadora."
                        },
                        {
                            topic: "Periféricos de salida",
                            q: "¿Cuál es un ejemplo de periférico de salida?",
                            options: ["Mouse", "Escáner", "Monitor", "Micrófono"],
                            answerIndex: 2,
                            explain: "El monitor es un periférico de salida porque extrae información de la computadora para mostrarla."
                        },
                        {
                            topic: "Periféricos",
                            q: "¿Qué función tiene el plotter?",
                            options: [
                                "Escanear documentos",
                                "Imprimir a gran escala, como planos de arquitectos",
                                "Reproducir sonido",
                                "Capturar video"
                            ],
                            answerIndex: 1,
                            explain: "El plotter es similar a las impresoras pero más grande, permite imprimir a gran escala como planos de arquitectos."
                        },
                        {
                            topic: "Periféricos",
                            q: "¿Para qué se utiliza la webcam?",
                            options: [
                                "Reproducir audio",
                                "Introducir imágenes y videos grabados en tiempo real",
                                "Imprimir documentos",
                                "Almacenar archivos"
                            ],
                            answerIndex: 1,
                            explain: "La webcam permite introducir a la computadora imágenes y videos grabados en tiempo real, muy utilizada en videoconferencias."
                        }
                    ]
                },
                // ACTIVIDAD 2: Suite de oficina y procesador de textos (Microsoft Word)
                act2: {
                    nombre: "Actividad 2: Suite de oficina y Word",
                    desc: "Suite de oficina, procesador de textos, acceso a Word y pantalla inicial",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Suite de oficina",
                            q: "¿Qué programas incluye una suite de oficina típica?",
                            options: [
                                "Navegador, antivirus, reproductor",
                                "Procesador de textos, presentador gráfico, hoja de cálculo",
                                "Editor de video, editor de audio, editor de fotos",
                                "Compresor, descargador, gestor de descargas"
                            ],
                            answerIndex: 1,
                            explain: "Una suite de oficina incluye procesador de textos, presentador gráfico, hoja de cálculo y administrador de base de datos."
                        },
                        {
                            topic: "Microsoft Office",
                            q: "¿Cuál es la versión más reciente de Microsoft Office mencionada en el texto?",
                            options: ["Office 2016", "Office 2019", "Office 365", "Office 2020"],
                            answerIndex: 1,
                            explain: "Microsoft Office 2019 salió a la venta el 24 de septiembre de 2018."
                        },
                        {
                            topic: "Microsoft Word",
                            q: "¿Qué es un procesador de textos?",
                            options: [
                                "Software para editar imágenes",
                                "Software que permite redactar documentos digitales",
                                "Programa para navegar por internet",
                                "Aplicación para enviar correos"
                            ],
                            answerIndex: 1,
                            explain: "Un procesador de textos es un software que permite redactar documentos digitales (cartas, informes, tareas, libros)."
                        },
                        {
                            topic: "Microsoft Word",
                            q: "¿Cuál es el procesador de textos más utilizado en el mundo?",
                            options: ["Writer", "Pages", "WordPerfect", "Microsoft Word"],
                            answerIndex: 3,
                            explain: "Microsoft Word es el procesador de textos más utilizado en el mundo."
                        },
                        {
                            topic: "Microsoft Word",
                            q: "¿Qué muestra la pantalla inicial de Word 2016 en el lado derecho?",
                            options: [
                                "Documentos recientes",
                                "Plantillas prediseñadas",
                                "Configuración de impresión",
                                "Opciones de guardado"
                            ],
                            answerIndex: 1,
                            explain: "En el lado derecho de la pantalla inicial se muestra una serie de plantillas prediseñadas."
                        },
                        {
                            topic: "Microsoft Word",
                            q: "¿Cuál es la opción más utilizada al crear un nuevo documento en Word?",
                            options: [
                                "Plantilla de currículum",
                                "Documento en blanco",
                                "Plantilla de carta",
                                "Plantilla de informe"
                            ],
                            answerIndex: 1,
                            explain: "La opción más utilizada es crear un nuevo documento en blanco."
                        },
                        {
                            topic: "Microsoft Word",
                            q: "¿Qué método NO es válido para acceder a Microsoft Word?",
                            options: [
                                "Escribir Word en la búsqueda de la barra de tareas",
                                "Buscarlo en la lista de aplicaciones",
                                "A través de un acceso directo",
                                "Escribir comandos en la terminal"
                            ],
                            answerIndex: 3,
                            explain: "Escribir comandos en la terminal no es un método para acceder a Word; los métodos válidos son búsqueda, lista de aplicaciones o acceso directo."
                        },
                        {
                            topic: "Microsoft Word",
                            q: "¿Qué se puede hacer con la opción 'Abrir otros archivos' en Word?",
                            options: [
                                "Crear una plantilla nueva",
                                "Abrir archivos almacenados localmente o en OneDrive",
                                "Cerrar el documento",
                                "Imprimir el documento"
                            ],
                            answerIndex: 1,
                            explain: "La opción 'Abrir otros archivos' permite abrir archivos almacenados localmente en la computadora o en la nube vía OneDrive."
                        },
                        {
                            topic: "Suite de oficina",
                            q: "¿Cuál es un ejemplo de suite de oficina de software libre?",
                            options: ["Microsoft Office", "iWork", "LibreOffice", "Office 365"],
                            answerIndex: 2,
                            explain: "LibreOffice y Apache OpenOffice son ejemplos de suites de oficina de software libre."
                        },
                        {
                            topic: "Suite de oficina",
                            q: "¿Qué programa de Microsoft Office es un gestor de base de datos?",
                            options: ["Word", "Excel", "PowerPoint", "Access"],
                            answerIndex: 3,
                            explain: "Access es el gestor de base de datos incluido en Microsoft Office."
                        }
                    ]
                },
                // ACTIVIDAD 3: Microsoft Word 2016 - Interfaz y herramientas avanzadas
                act3: {
                    nombre: "Actividad 3: Word avanzado",
                    desc: "Interfaz de Word 2016, cintas de opciones y herramientas de formato",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Interfaz de Word",
                            q: "¿Qué muestra la barra de título en Word?",
                            options: [
                                "Las herramientas de acceso rápido",
                                "El nombre del archivo actual y botones de control",
                                "Los menús principales",
                                "El número de página"
                            ],
                            answerIndex: 1,
                            explain: "La barra de título indica el nombre del archivo actual y muestra los botones de minimizar, maximizar y cerrar."
                        },
                        {
                            topic: "Interfaz de Word",
                            q: "¿Qué contiene la cinta de opciones en Word?",
                            options: [
                                "El nombre del documento",
                                "Los comandos de los distintos grupos dentro de cada menú",
                                "La barra de estado",
                                "El zoom del documento"
                            ],
                            answerIndex: 1,
                            explain: "La cinta de opciones muestra los comandos de los distintos grupos dentro de cada menú."
                        },
                        {
                            topic: "Vistas de documento",
                            q: "¿Qué hace la vista 'Modo de lectura' en Word?",
                            options: [
                                "Muestra el documento para impresión",
                                "Divide el documento en dos páginas a pantalla completa",
                                "Acerca el documento",
                                "Muestra reglas y cuadrículas"
                            ],
                            answerIndex: 1,
                            explain: "El Modo de lectura divide el documento en dos páginas a pantalla completa para facilitar su lectura."
                        },
                        {
                            topic: "Menú Archivo",
                            q: "¿Cuál es la diferencia entre Guardar y Guardar como?",
                            options: [
                                "No hay diferencia",
                                "Guardar como permite cambiar nombre o ubicación; Guardar guarda cambios sobre el mismo documento",
                                "Guardar es para documentos nuevos; Guardar como para existentes",
                                "Guardar como solo sirve para PDF"
                            ],
                            answerIndex: 1,
                            explain: "Guardar como permite cambiar el nombre o la ubicación del archivo, mientras que Guardar solo guarda cambios sobre el mismo documento."
                        },
                        {
                            topic: "Menú Inicio",
                            q: "¿Qué grupo del menú Inicio contiene los comandos para cambiar tipo y tamaño de letra?",
                            options: ["Portapapeles", "Fuente", "Párrafo", "Estilos"],
                            answerIndex: 1,
                            explain: "El grupo Fuente contiene todos los comandos para manipular las letras (tamaño, color, tipo, efectos)."
                        },
                        {
                            topic: "Menú Insertar",
                            q: "¿Qué opción del menú Insertar permite agregar una portada prediseñada?",
                            options: ["Tablas", "Ilustraciones", "Páginas", "Encabezado"],
                            answerIndex: 2,
                            explain: "La opción Páginas permite agregar una de las portadas prediseñadas."
                        },
                        {
                            topic: "Menú Diseño",
                            q: "¿Para qué sirve la opción 'Marca de agua' en el menú Diseño?",
                            options: [
                                "Cambiar el color de la página",
                                "Agregar un texto detrás del contenido de la página",
                                "Poner bordes a la página",
                                "Cambiar la orientación"
                            ],
                            answerIndex: 1,
                            explain: "La marca de agua permite agregar un texto detrás del contenido de la página."
                        },
                        {
                            topic: "Menú Referencias",
                            q: "¿Para qué tipo de documentos son especialmente útiles las opciones del menú Referencias?",
                            options: [
                                "Cartas comerciales",
                                "Tesis, tesinas y monografías",
                                "Memorandos",
                                "Invitaciones"
                            ],
                            answerIndex: 1,
                            explain: "Las opciones del menú Referencias son muy utilizadas en tesis, tesinas y monografías."
                        },
                        {
                            topic: "Menú Revisar",
                            q: "¿Qué función tiene el comando 'Ortografía y gramática'?",
                            options: [
                                "Traducir el texto",
                                "Comprobar errores ortográficos y gramaticales",
                                "Contar palabras",
                                "Proteger el documento"
                            ],
                            answerIndex: 1,
                            explain: "El comando Ortografía y gramática comprueba errores ortográficos y gramaticales en el documento."
                        },
                        {
                            topic: "Menú Vista",
                            q: "¿Para qué sirve la opción Zoom en el menú Vista?",
                            options: [
                                "Cambiar el tipo de letra",
                                "Acercar o alejar el documento",
                                "Guardar el archivo",
                                "Imprimir el documento"
                            ],
                            answerIndex: 1,
                            explain: "La opción Zoom acerca o aleja el documento para verlo con más detalle o de forma general."
                        }
                    ]
                }
            }
        },
        // ========== MÓDULO 3 ==========
        modulo3: {
            nombre: "Módulo 3: Soluciones Algorítmicas",
            actividades: {
                // ACTIVIDAD 1: Algoritmos, pseudocódigo y diagramas de flujo
                act1: {
                    nombre: "Actividad 1: Algoritmos y diagramas de flujo",
                    desc: "Definición de algoritmo, características, pseudocódigo y diagramas de flujo",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Algoritmos",
                            q: "¿De quién proviene la palabra 'algoritmo'?",
                            options: [
                                "Del matemático griego Pitágoras",
                                "Del matemático árabe Al-Khuwarizmi",
                                "Del filósofo francés Descartes",
                                "Del científico inglés Newton"
                            ],
                            answerIndex: 1,
                            explain: "La palabra algoritmo proviene del matemático árabe del siglo IX llamado Al-Khuwarizmi."
                        },
                        {
                            topic: "Algoritmos",
                            q: "¿Qué es un algoritmo?",
                            options: [
                                "Un programa de computadora",
                                "Una serie de pasos para dar solución a un problema",
                                "Un lenguaje de programación",
                                "Un tipo de hardware"
                            ],
                            answerIndex: 1,
                            explain: "Un algoritmo es una serie de pasos para dar una solución a un problema."
                        },
                        {
                            topic: "Características de algoritmos",
                            q: "¿Qué significa que un algoritmo debe ser 'preciso'?",
                            options: [
                                "Que debe ser corto",
                                "Que las instrucciones deben ser claras sin dejar duda",
                                "Que debe usar muchos recursos",
                                "Que debe ser complicado"
                            ],
                            answerIndex: 1,
                            explain: "La precisión significa que las instrucciones del algoritmo deben ser claras y no dejar ninguna duda."
                        },
                        {
                            topic: "Características de algoritmos",
                            q: "¿Qué significa que un algoritmo debe ser 'finito'?",
                            options: [
                                "Que debe ser pequeño",
                                "Que tiene un principio y un fin",
                                "Que solo usa números",
                                "Que es temporal"
                            ],
                            answerIndex: 1,
                            explain: "Un algoritmo finito tiene un principio y un fin, y todos los pasos llevan a otro paso sin quedar incompletos."
                        },
                        {
                            topic: "Metodología",
                            q: "¿Cuál es el primer paso en la metodología para resolver problemas?",
                            options: [
                                "Desarrollar la alternativa",
                                "Identificación del problema",
                                "Evaluación de la solución",
                                "Elección de una alternativa"
                            ],
                            answerIndex: 1,
                            explain: "El primer paso es la identificación del problema: conocer causas, elementos y qué se espera obtener."
                        },
                        {
                            topic: "Pseudocódigo",
                            q: "¿Qué es el pseudocódigo?",
                            options: [
                                "Un lenguaje de programación ejecutable",
                                "Una forma no gráfica de representar un algoritmo con palabras clave",
                                "Un diagrama de flujo",
                                "Un tipo de hardware"
                            ],
                            answerIndex: 1,
                            explain: "El pseudocódigo es una forma no gráfica de representar un algoritmo que consiste en una lista ordenada de palabras clave."
                        },
                        {
                            topic: "Pseudocódigo",
                            q: "¿Qué significa la palabra clave 'Leer' en pseudocódigo?",
                            options: [
                                "Mostrar información en pantalla",
                                "Guardar en memoria un valor introducido por el usuario",
                                "Iniciar el algoritmo",
                                "Finalizar el algoritmo"
                            ],
                            answerIndex: 1,
                            explain: "Leer guarda en memoria un valor introducido por medio de un periférico de entrada."
                        },
                        {
                            topic: "Diagramas de flujo",
                            q: "¿Qué es un diagrama de flujo?",
                            options: [
                                "Un tipo de algoritmo escrito",
                                "Una forma gráfica de representar un algoritmo con símbolos",
                                "Un programa de computadora",
                                "Un lenguaje de programación"
                            ],
                            answerIndex: 1,
                            explain: "Un diagrama de flujo es una forma gráfica de representar un algoritmo utilizando diferentes símbolos conectados por flechas."
                        },
                        {
                            topic: "Diagramas de flujo",
                            q: "¿Para qué se utilizan los diagramas de flujo en las empresas?",
                            options: [
                                "Para vender productos",
                                "Para diseñar los pasos a seguir en sus procedimientos",
                                "Para contratar personal",
                                "Para enviar correos"
                            ],
                            answerIndex: 1,
                            explain: "Los diagramas de flujo son utilizados por muchas empresas para diseñar los pasos a seguir en sus procedimientos."
                        },
                        {
                            topic: "Diagramas de flujo",
                            q: "¿Qué símbolo representa el inicio o fin en un diagrama de flujo?",
                            options: [
                                "Un rectángulo",
                                "Un rombo",
                                "Un óvalo o rectángulo con bordes redondeados",
                                "Un círculo"
                            ],
                            answerIndex: 2,
                            explain: "El óvalo (o rectángulo con bordes redondeados) se utiliza para representar el inicio o fin del diagrama."
                        }
                    ]
                },
                // ACTIVIDAD 2: Diseño de diagramas de flujo con software DIA
                act2: {
                    nombre: "Actividad 2: Software DIA",
                    desc: "Aplicaciones para diagramas de flujo, uso de DIA, exportación de diagramas",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Software DIA",
                            q: "¿Cuál es la página oficial para descargar el software DIA?",
                            options: [
                                "www.dia.com",
                                "www.dia-installer.de",
                                "www.diagramas.org",
                                "www.softwarelibre.dia"
                            ],
                            answerIndex: 1,
                            explain: "La página oficial para descargar DIA es www.dia-installer.de."
                        },
                        {
                            topic: "Software DIA",
                            q: "¿Qué tipo de software es DIA?",
                            options: [
                                "Software propietario de pago",
                                "Software libre para diseñar diagramas de flujo",
                                "Un procesador de textos",
                                "Un navegador web"
                            ],
                            answerIndex: 1,
                            explain: "DIA es una aplicación libre para diseñar diagramas de flujo."
                        },
                        {
                            topic: "Software DIA",
                            q: "¿Qué se debe hacer después de descargar el instalador de DIA?",
                            options: [
                                "Ejecutarlo directamente desde la web",
                                "Dar doble clic al archivo y seguir las instrucciones",
                                "Copiarlo a una memoria USB",
                                "Extraerlo con WinRAR"
                            ],
                            answerIndex: 1,
                            explain: "Una vez descargado, se debe dar doble clic al archivo y seguir las instrucciones del instalador."
                        },
                        {
                            topic: "Software DIA",
                            q: "¿Cómo se puede iniciar el programa DIA en Windows?",
                            options: [
                                "Solo desde el escritorio",
                                "Escribiendo DIA en la herramienta de búsqueda de la barra de tareas",
                                "Desde el panel de control",
                                "Desde el explorador de archivos"
                            ],
                            answerIndex: 1,
                            explain: "Se puede iniciar escribiendo DIA en la herramienta de búsqueda de la barra de tareas o buscándolo en la lista de aplicaciones."
                        },
                        {
                            topic: "Software DIA",
                            q: "¿Qué contiene la sección principal del entorno de trabajo de DIA?",
                            options: [
                                "Las herramientas para formato de texto",
                                "Los principales símbolos para diseñar diagramas de flujo",
                                "Las opciones de guardado",
                                "Las vistas previas"
                            ],
                            answerIndex: 1,
                            explain: "La sección principal contiene los principales símbolos utilizados para diseñar diagramas de flujo."
                        },
                        {
                            topic: "Software DIA",
                            q: "¿Cómo se dibuja un diagrama de flujo en DIA?",
                            options: [
                                "Escribiendo código",
                                "Seleccionando símbolos y arrastrándolos al área de trabajo",
                                "Importando imágenes",
                                "Dibujando a mano alzada"
                            ],
                            answerIndex: 1,
                            explain: "Para dibujar un diagrama se seleccionan los símbolos deseados y se arrastran hacia el área de trabajo."
                        },
                        {
                            topic: "Software DIA",
                            q: "¿Qué se debe hacer para guardar un diagrama en DIA?",
                            options: [
                                "Presionar F12",
                                "Dar clic en el ícono de guardar y elegir nombre y carpeta",
                                "Cerrar el programa",
                                "Exportar automáticamente"
                            ],
                            answerIndex: 1,
                            explain: "Para guardar hay que dar clic en el ícono de guardar y en la nueva ventana escribir un nombre y elegir una carpeta."
                        },
                        {
                            topic: "Software DIA",
                            q: "¿Qué formatos de imagen se recomiendan para exportar diagramas desde DIA?",
                            options: [".bmp o .gif", ".jpeg o .png", ".pdf o .doc", ".txt o .rtf"],
                            answerIndex: 1,
                            explain: "Se recomienda exportar a formato .jpeg o .png para obtener una imagen."
                        },
                        {
                            topic: "Software DIA",
                            q: "¿Qué permite hacer la imagen generada al exportar un diagrama de DIA?",
                            options: [
                                "Solo verse en DIA",
                                "Ser impresa, editada o utilizada en un procesador de textos",
                                "Ejecutarse como programa",
                                "Convertirse en algoritmo"
                            ],
                            answerIndex: 1,
                            explain: "La imagen puede ser impresa, editada o utilizada en un procesador de textos u otro programa similar."
                        },
                        {
                            topic: "Software DIA",
                            q: "¿Qué opción permite definir el grosor y estilo de las líneas en DIA?",
                            options: [
                                "El menú Archivo",
                                "Las opciones de formato en el entorno de trabajo",
                                "El botón de guardar",
                                "La vista previa"
                            ],
                            answerIndex: 1,
                            explain: "Las opciones de formato permiten definir el grosor y estilo de las líneas y flechas, así como cambiar colores."
                        }
                    ]
                },
                // ACTIVIDAD 3: Lenguaje ensamblador, código binario y conversiones
                act3: {
                    nombre: "Actividad 3: Lenguaje ensamblador y binario",
                    desc: "Lenguaje ensamblador, código binario, conversiones entre sistemas decimal y binario",
                    preguntas: 10,
                    banco: [
                        {
                            topic: "Lenguaje ensamblador",
                            q: "¿Qué es el lenguaje ensamblador?",
                            options: [
                                "Un lenguaje de alto nivel como Java",
                                "Un lenguaje de programación de bajo nivel cercano al hardware",
                                "Un tipo de diagrama de flujo",
                                "Un sistema operativo"
                            ],
                            answerIndex: 1,
                            explain: "El lenguaje ensamblador es un lenguaje de programación de bajo nivel, es decir, el lenguaje que más se acerca al hardware del ordenador."
                        },
                        {
                            topic: "Lenguaje máquina",
                            q: "¿Qué codifica el lenguaje máquina?",
                            options: [
                                "Instrucciones en español",
                                "Instrucciones bit a bit (0 y 1)",
                                "Diagramas de flujo",
                                "Algoritmos escritos"
                            ],
                            answerIndex: 1,
                            explain: "El lenguaje máquina codifica instrucciones bit a bit (0 y 1), que es lo que ejecuta directamente el procesador."
                        },
                        {
                            topic: "Código binario",
                            q: "¿Qué dígitos utiliza el sistema binario?",
                            options: ["0 al 9", "0 y 1", "1 al 10", "A y B"],
                            answerIndex: 1,
                            explain: "El sistema binario utiliza solo los dígitos 0 y 1 (bits)."
                        },
                        {
                            topic: "Código binario",
                            q: "¿Cómo se llama cada dígito en el sistema binario?",
                            options: ["Byte", "Bit", "Kilobyte", "Carácter"],
                            answerIndex: 1,
                            explain: "Cada dígito en el sistema binario se denomina bit (contracción de binary digit)."
                        },
                        {
                            topic: "Conversión binario a decimal",
                            q: "¿Cuál es el número decimal equivalente al binario 1001?",
                            options: ["6", "8", "9", "10"],
                            answerIndex: 2,
                            explain: "1001 en binario equivale a 9 en decimal: 1×2³ + 0×2² + 0×2¹ + 1×2⁰ = 8 + 0 + 0 + 1 = 9."
                        },
                        {
                            topic: "Conversión binario a decimal",
                            q: "En la conversión de binario a decimal, ¿por qué exponente se empieza a numerar los bits?",
                            options: ["Desde 1", "Desde 0", "Desde la izquierda", "Desde el bit más grande"],
                            answerIndex: 1,
                            explain: "Se numeran los bits de derecha a izquierda comenzando desde el exponente 0."
                        },
                        {
                            topic: "Conversión decimal a binario",
                            q: "¿Cuál es el número binario equivalente al decimal 28?",
                            options: ["11010", "11100", "10110", "10010"],
                            answerIndex: 1,
                            explain: "28 en decimal equivale a 11100 en binario (divisiones sucesivas entre 2)."
                        },
                        {
                            topic: "Conversión decimal a binario",
                            q: "¿Qué se anota en una columna a la derecha al convertir decimal a binario?",
                            options: [
                                "El cociente de la división",
                                "El resto de la división (0 si es par, 1 si es impar)",
                                "El número original",
                                "La mitad del número"
                            ],
                            answerIndex: 1,
                            explain: "Al dividir entre dos, se anota el resto: 0 si el resultado es par y 1 si es impar."
                        },
                        {
                            topic: "Conversión decimal a binario",
                            q: "¿Qué número se toma como primera cifra del número binario resultante?",
                            options: [
                                "El primer resto",
                                "El último cociente (siempre será 1)",
                                "El número original",
                                "La suma de los restos"
                            ],
                            answerIndex: 1,
                            explain: "La primera cifra del número binario es el último cociente (siempre 1), seguido de todos los restos de abajo arriba."
                        },
                        {
                            topic: "Lenguajes de programación",
                            q: "¿Cuáles son ejemplos de lenguajes de programación de alto nivel?",
                            options: [
                                "Ensamblador y máquina",
                                "Java y Python",
                                "Binario y octal",
                                "DIA y Visio"
                            ],
                            answerIndex: 1,
                            explain: "Java y Python son ejemplos de lenguajes de programación de alto nivel."
                        }
                    ]
                }
            }
        }
    }
};

export default culturaDigital1;