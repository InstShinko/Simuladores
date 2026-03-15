// ============================================
// BANCO CENTRALIZADO DE PREGUNTAS - 6 TRIMESTRES
// ============================================

const SIMULADORES = {
    trimestre1: {
        nombre: "Trimestre 1",
        materias: {
            sociales1: {
                id: "sociales1",
                nombre: "CIENCIAS SOCIALES I",
                icono: "🌎",
                descripcion: "Introducción a las ciencias sociales",
                modulos: {
                    modulo1: {
                        nombre: "Módulo 1: Fundamentos",
                        actividades: {
                            act1: { 
                                nombre: "Actividad 1: Conceptos básicos", 
                                desc: "Definición y objeto de estudio",
                                preguntas: 10,
                                banco: [] // Se llenará con PDFs
                            },
                            act2: { 
                                nombre: "Actividad 2: Métodos de investigación", 
                                desc: "Técnicas cualitativas y cuantitativas",
                                preguntas: 10,
                                banco: []
                            },
                            act3: { 
                                nombre: "Actividad 3: Corrientes de pensamiento", 
                                desc: "Principales teóricos",
                                preguntas: 10,
                                banco: []
                            }
                        }
                    },
                    modulo2: {
                        nombre: "Módulo 2: Historia",
                        actividades: {
                            act1: { 
                                nombre: "Actividad 1: Edad Antigua", 
                                desc: "Primeras civilizaciones",
                                preguntas: 10,
                                banco: []
                            },
                            act2: { 
                                nombre: "Actividad 2: Edad Media", 
                                desc: "Feudalismo y cruzadas",
                                preguntas: 10,
                                banco: []
                            },
                            act3: { 
                                nombre: "Actividad 3: Edad Moderna", 
                                desc: "Renacimiento y descubrimientos",
                                preguntas: 10,
                                banco: []
                            }
                        }
                    },
                    modulo3: {
                        nombre: "Módulo 3: Geografía",
                        actividades: {
                            act1: { 
                                nombre: "Actividad 1: Geografía física", 
                                desc: "Relieve, clima, hidrografía",
                                preguntas: 10,
                                banco: []
                            },
                            act2: { 
                                nombre: "Actividad 2: Geografía humana", 
                                desc: "Población y migración",
                                preguntas: 10,
                                banco: []
                            },
                            act3: { 
                                nombre: "Actividad 3: Geografía económica", 
                                desc: "Actividades productivas",
                                preguntas: 10,
                                banco: []
                            }
                        }
                    }
                }
            },
            cultural1: {
                id: "cultural1",
                nombre: "CULTURA DIGITAL I",
                icono: "💻",
                descripcion: "Fundamentos de tecnología digital",
                modulos: {
                    modulo1: {
                        nombre: "Módulo 1: Introducción",
                        actividades: {
                            act1: { nombre: "Actividad 1: Conceptos básicos", desc: "Hardware y software", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Sistemas operativos", desc: "Funciones y tipos", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Redes e internet", desc: "Conectividad", preguntas: 10, banco: [] }
                        }
                    },
                    modulo2: {
                        nombre: "Módulo 2: Herramientas digitales",
                        actividades: {
                            act1: { nombre: "Actividad 1: Procesadores de texto", desc: "Word, Google Docs", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Hojas de cálculo", desc: "Excel, Google Sheets", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Presentaciones", desc: "PowerPoint, Canva", preguntas: 10, banco: [] }
                        }
                    },
                    modulo3: {
                        nombre: "Módulo 3: Seguridad digital",
                        actividades: {
                            act1: { nombre: "Actividad 1: Protección de datos", desc: "Privacidad", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Ciberseguridad", desc: "Amenazas y defensas", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Ciudadanía digital", desc: "Ética en línea", preguntas: 10, banco: [] }
                        }
                    }
                }
            },
            humanidades1: {
                id: "humanidades1",
                nombre: "HUMANIDADES I",
                icono: "📚",
                descripcion: "Introducción a las humanidades",
                modulos: {
                    modulo1: {
                        nombre: "Módulo 1: Filosofía",
                        actividades: {
                            act1: { nombre: "Actividad 1: Origen de la filosofía", desc: "Presocráticos", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Ética y moral", desc: "Valores", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Estética", desc: "Arte y belleza", preguntas: 10, banco: [] }
                        }
                    },
                    modulo2: {
                        nombre: "Módulo 2: Literatura",
                        actividades: {
                            act1: { nombre: "Actividad 1: Géneros literarios", desc: "Narrativa, lírica, drama", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Literatura universal", desc: "Obras clásicas", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Literatura mexicana", desc: "Autores y obras", preguntas: 10, banco: [] }
                        }
                    },
                    modulo3: {
                        nombre: "Módulo 3: Arte",
                        actividades: {
                            act1: { nombre: "Actividad 1: Artes visuales", desc: "Pintura, escultura", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Música", desc: "Historia y géneros", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Teatro y danza", desc: "Expresión escénica", preguntas: 10, banco: [] }
                        }
                    }
                }
            },
            ingles1: {
                id: "ingles1",
                nombre: "INGLÉS I",
                icono: "🇬🇧",
                descripcion: "Inglés básico",
                modulos: {
                    modulo1: {
                        nombre: "Módulo 1: Gramática básica",
                        actividades: {
                            act1: { nombre: "Actividad 1: Verb to be", desc: "Presente simple", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Pronombres", desc: "Personales y posesivos", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Artículos", desc: "A, an, the", preguntas: 10, banco: [] }
                        }
                    },
                    modulo2: {
                        nombre: "Módulo 2: Vocabulario",
                        actividades: {
                            act1: { nombre: "Actividad 1: Saludos y presentaciones", desc: "Greetings", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Números y fechas", desc: "Numbers, dates", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Familia y hogar", desc: "Family, home", preguntas: 10, banco: [] }
                        }
                    },
                    modulo3: {
                        nombre: "Módulo 3: Conversación",
                        actividades: {
                            act1: { nombre: "Actividad 1: Preguntas básicas", desc: "Questions", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Descripciones", desc: "Adjectives", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Direcciones", desc: "Giving directions", preguntas: 10, banco: [] }
                        }
                    }
                }
            },
            materiaInteracciones: {
                id: "materiaInteracciones",
                nombre: "LA MATERIA Y SUS INTERACCIONES",
                icono: "⚛️",
                descripcion: "Química y física básica",
                modulos: {
                    modulo1: {
                        nombre: "Módulo 1: La materia",
                        actividades: {
                            act1: { nombre: "Actividad 1: Propiedades", desc: "Intensivas/extensivas", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Estados", desc: "Sólido, líquido, gas", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Cambios", desc: "Físicos y químicos", preguntas: 10, banco: [] }
                        }
                    },
                    modulo2: {
                        nombre: "Módulo 2: Estructura atómica",
                        actividades: {
                            act1: { nombre: "Actividad 1: Modelos atómicos", desc: "Historia", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Partículas", desc: "Protones, neutrones", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Isótopos", desc: "Número atómico", preguntas: 10, banco: [] }
                        }
                    },
                    modulo3: {
                        nombre: "Módulo 3: Interacciones",
                        actividades: {
                            act1: { nombre: "Actividad 1: Enlaces", desc: "Iónico, covalente", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Reacciones", desc: "Tipos", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Energía", desc: "Calor, trabajo", preguntas: 10, banco: [] }
                        }
                    }
                }
            },
            laboratorio: {
                id: "laboratorio",
                nombre: "LABORATORIO DE INVESTIGACIÓN",
                icono: "🔬",
                descripcion: "Métodos y técnicas de investigación",
                modulos: {
                    modulo1: {
                        nombre: "Módulo 1: Método científico",
                        actividades: {
                            act1: { nombre: "Actividad 1: Observación", desc: "Planteamiento", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Hipótesis", desc: "Formulación", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Experimentación", desc: "Diseño", preguntas: 10, banco: [] }
                        }
                    },
                    modulo2: {
                        nombre: "Módulo 2: Instrumentación",
                        actividades: {
                            act1: { nombre: "Actividad 1: Material de laboratorio", desc: "Vidrio, medición", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Seguridad", desc: "Normas", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Técnicas básicas", desc: "Medición", preguntas: 10, banco: [] }
                        }
                    },
                    modulo3: {
                        nombre: "Módulo 3: Análisis",
                        actividades: {
                            act1: { nombre: "Actividad 1: Recopilación", desc: "Datos", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Análisis", desc: "Interpretación", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Conclusiones", desc: "Reportes", preguntas: 10, banco: [] }
                        }
                    }
                }
            },
            lengua1: {
                id: "lengua1",
                nombre: "LENGUA Y COMUNICACIÓN I",
                icono: "📝",
                descripcion: "Español y comunicación",
                modulos: {
                    modulo1: {
                        nombre: "Módulo 1: Gramática",
                        actividades: {
                            act1: { nombre: "Actividad 1: Sustantivos", desc: "Género y número", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Verbos", desc: "Conjugaciones", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Adjetivos", desc: "Calificativos", preguntas: 10, banco: [] }
                        }
                    },
                    modulo2: {
                        nombre: "Módulo 2: Redacción",
                        actividades: {
                            act1: { nombre: "Actividad 1: Oraciones", desc: "Sujeto y predicado", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Párrafos", desc: "Estructura", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Textos", desc: "Tipos", preguntas: 10, banco: [] }
                        }
                    },
                    modulo3: {
                        nombre: "Módulo 3: Comunicación",
                        actividades: {
                            act1: { nombre: "Actividad 1: Elementos", desc: "Emisor, receptor", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Funciones", desc: "Referencial, emotiva", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Barreras", desc: "Ruido, interferencias", preguntas: 10, banco: [] }
                        }
                    }
                }
            },
            matematicas1: {
                id: "matematicas1",
                nombre: "PENSAMIENTO MATEMÁTICO I",
                icono: "📊",
                descripcion: "Matemáticas básicas",
                modulos: {
                    modulo1: {
                        nombre: "Módulo 1: Aritmética",
                        actividades: {
                            act1: { nombre: "Actividad 1: Números", desc: "Naturales, enteros", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Operaciones", desc: "Suma, resta", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Fracciones", desc: "Simplificación", preguntas: 10, banco: [] }
                        }
                    },
                    modulo2: {
                        nombre: "Módulo 2: Álgebra",
                        actividades: {
                            act1: { nombre: "Actividad 1: Expresiones", desc: "Términos", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Ecuaciones", desc: "Primer grado", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Sistemas", desc: "2x2", preguntas: 10, banco: [] }
                        }
                    },
                    modulo3: {
                        nombre: "Módulo 3: Geometría",
                        actividades: {
                            act1: { nombre: "Actividad 1: Figuras", desc: "Perímetros", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Áreas", desc: "Cálculo", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Volúmenes", desc: "Cuerpos", preguntas: 10, banco: [] }
                        }
                    }
                }
            },
            socioemocionales1: {
                id: "socioemocionales1",
                nombre: "RECURSOS SOCIOEMOCIONALES I",
                icono: "🧠",
                descripcion: "Desarrollo personal y emocional",
                modulos: {
                    modulo1: {
                        nombre: "Módulo 1: Autoconocimiento",
                        actividades: {
                            act1: { nombre: "Actividad 1: Identidad", desc: "Quién soy", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Autoestima", desc: "Valoración", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Emociones", desc: "Identificación", preguntas: 10, banco: [] }
                        }
                    },
                    modulo2: {
                        nombre: "Módulo 2: Relaciones",
                        actividades: {
                            act1: { nombre: "Actividad 1: Comunicación", desc: "Asertividad", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Empatía", desc: "Ponerse en el lugar", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Resolución", desc: "Conflictos", preguntas: 10, banco: [] }
                        }
                    },
                    modulo3: {
                        nombre: "Módulo 3: Bienestar",
                        actividades: {
                            act1: { nombre: "Actividad 1: Estrés", desc: "Manejo", preguntas: 10, banco: [] },
                            act2: { nombre: "Actividad 2: Hábitos", desc: "Saludables", preguntas: 10, banco: [] },
                            act3: { nombre: "Actividad 3: Proyecto de vida", desc: "Metas", preguntas: 10, banco: [] }
                        }
                    }
                }
            }
        }
    },
    
    trimestre2: {
        nombre: "Trimestre 2",
        materias: {
            // Aquí irán las 10 materias del trimestre 2
            // Misma estructura que trimestre1
        }
    },
    
    trimestre3: {
        nombre: "Trimestre 3",
        materias: {}
    },
    
    trimestre4: {
        nombre: "Trimestre 4",
        materias: {}
    },
    
    trimestre5: {
        nombre: "Trimestre 5",
        materias: {}
    },
    
    trimestre6: {
        nombre: "Trimestre 6",
        materias: {}
    }
};

// Configuración global
const CONFIG_SIMULADORES = {
    preguntasPorActividad: 10,
    tiempoPorActividad: 30 // minutos
};