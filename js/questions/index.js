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
import matematicas3 from './trimestre3/matematicas3.js';
import humanidades3 from './trimestre3/humanidades3.js';
import lengua3 from './trimestre3/lengua3.js';
import ecosistema from './trimestre3/ecosistema.js';

import ingles4 from './trimestre4/ingles4.js';
import sociales3 from './trimestre4/sociales3.js';
import concienciahistorica from './trimestre4/concienciahistorica.js';
import espacioysociedad from './trimestre4/espacioysociedad.js';
import pensamientoliterario from './trimestre4/pensamientoliterario.js';
import reaccionesquimicas from './trimestre4/reaccionesquimicas.js';
import tallerdeculturadigital from './trimestre4/tallerdeculturadigital.js';
import temasselectosmatematicos from './trimestre4/temasselectosmatematicos.js';

import administracion from './trimestre5/admin.js';
import concienciaHistorica2 from './trimestre5/concienciahistorica2.js';
import derecho from './trimestre5/derecho.js';
import diferencial from './trimestre5/diferencial.js';
import energia from './trimestre5/energia.js';
import salud from './trimestre5/salud.js';
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
            matematicas3: matematicas3,
            humanidades3: humanidades3,
            lengua3: lengua3,
            ecositema: ecosistema,
        }
    },
    
    trimestre4: {
        nombre: "Trimestre 4",
        materias: {
            ingles4: ingles4,
            sociales3: sociales3,
            concienciahistorica: concienciahistorica,
            espacioysociedad: espacioysociedad,
            pensamientoliterario: pensamientoliterario,
            reacionesquimicas: reaccionesquimicas,
            tallerdeculturadigital: tallerdeculturadigital,
            temasselectosmatematicos: temasselectosmatematicos
        }
    },
    
    trimestre5: {
        nombre: "Trimestre 5",
        materias: {
            administracion:administracion,
            concienciaHistorica2:concienciaHistorica2,
            derecho:derecho,
            diferencial:diferencial,
            energia:energia,
            salud:salud
        }
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