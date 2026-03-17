// ============================================
// ARCHIVO PRINCIPAL QUE COMBINA TODAS LAS MATERIAS
// ============================================

// Importar todas las materias del Trimestre 1
import sociales1 from './trimestre1/ciencias-sociales.js';
import cultural1 from './trimestre1/cultura-digital.js';
import humanidades1 from './trimestre1/humanidades.js';
import ingles1 from './trimestre1/ingles.js';
import materiaInteracciones1 from './trimestre1/materia-interacciones.js';
import laboratorio1 from './trimestre1/laboratorio.js';
import lengua1 from './trimestre1/lengua-comunicacion.js';
import matematicas1 from './trimestre1/pensamiento-matematico.js';


// ============================================
// BANCO CENTRALIZADO DE PREGUNTAS - 6 TRIMESTRES
// ============================================

export const SIMULADORES = {
    trimestre1: {
        nombre: "Trimestre 1",
        materias: {
            sociales1: sociales1,
            cultural1: cultural1,
            humanidades1: humanidades1,
            ingles1: ingles1,
            materiaInteracciones: materiaInteracciones1,
            laboratorio: laboratorio1,
            lengua1: lengua1,
            matematicas1: matematicas1,
         
        }
    },
    
    trimestre2: {
        nombre: "Trimestre 2",
        materias: {
            // Aquí se importarán cuando las tengamos
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
export const CONFIG_SIMULADORES = {
    preguntasPorActividad: 10,
    tiempoPorActividad: 30 // minutos
};