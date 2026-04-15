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

import sociales2 from './trimestre2/sociales2.js';
import conservacionEnergia2 from './trimestre2/conservacionEnergia2.js';
import cultural2 from './trimestre2/cultural2.js';
import humanidades2 from './trimestre2/humanidades2.js';
import ingles2 from './trimestre2/ingles2.js';
import lengua2 from './trimestre2/lengua2.js';
import matematicas2 from './trimestre2/matematicas2.js';

import ingles3 from './trimestre3/ingles3.js';

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
        sociales2: sociales2,
        conservacionEnergia2: conservacionEnergia2,
        cultural2: cultural2,
        humanidades2: humanidades2,
        ingles2: ingles2,
        lengua2: lengua2,
        matematicas2: matematicas2,
      
    }
},
    
    trimestre3: {
        nombre: "Trimestre 3",
        materias: {
            ingles3: ingles3,
        }
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