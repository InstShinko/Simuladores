// js/dashboard-navigation.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { SIMULADORES } from './questions/index.js';  // 👈 IMPORTA DESDE INDEX
// Estado actual de navegación
let estadoActual = {
    trimestre: 'trimestre1',
    materia: 'quimica1',
    modulo: 'modulo1',
    actividad: 'act1'
};

// ========== VERIFICACIÓN DE AUTENTICACIÓN ==========
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.replace('index.html');
    } else {
        document.getElementById('userEmail').textContent = user.email;
        inicializarNavegacion();
    }
});

// ========== CERRAR SESIÓN ==========
document.getElementById('logoutBtn').addEventListener('click', async () => {
    await signOut(auth);
    window.location.replace('index.html');
});

// ========== INICIALIZAR NAVEGACIÓN ==========
function inicializarNavegacion() {
    renderizarTrimestres();
    renderizarMaterias();
    actualizarBreadcrumb();
    actualizarInfoSimulador();
}

// ========== RENDERIZAR PESTAÑAS DE TRIMESTRES ==========
function renderizarTrimestres() {
    const trimestresNav = document.getElementById('trimestresNav');
    trimestresNav.innerHTML = '';
    
    Object.keys(SIMULADORES).forEach((trimestreId, index) => {
        const trimestre = SIMULADORES[trimestreId];
        const tab = document.createElement('button');
        tab.className = `trimestre-tab ${trimestreId === estadoActual.trimestre ? 'active' : ''}`;
        tab.textContent = trimestre.nombre;
        tab.dataset.trimestre = trimestreId;
        
        tab.addEventListener('click', () => {
            estadoActual.trimestre = trimestreId;
            // Resetear a primera materia, primer módulo, primera actividad
            const primeraMateria = Object.keys(SIMULADORES[trimestreId].materias)[0];
            estadoActual.materia = primeraMateria;
            const primerModulo = Object.keys(SIMULADORES[trimestreId].materias[primeraMateria].modulos)[0];
            estadoActual.modulo = primerModulo;
            const primeraAct = Object.keys(SIMULADORES[trimestreId].materias[primeraMateria].modulos[primerModulo].actividades)[0];
            estadoActual.actividad = primeraAct;
            
            // Re-renderizar todo
            document.querySelectorAll('.trimestre-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderizarMaterias();
            actualizarBreadcrumb();
            actualizarInfoSimulador();
            
            // Resetear simulador
            resetearSimulador();
        });
        
        trimestresNav.appendChild(tab);
    });
}

// ========== RENDERIZAR MATERIAS CON MÓDULOS Y ACTIVIDADES ==========
function renderizarMaterias() {
    const container = document.getElementById('materiasContainer');
    const trimestre = SIMULADORES[estadoActual.trimestre];
    container.innerHTML = '';
    
    Object.entries(trimestre.materias).forEach(([materiaId, materia]) => {
        const materiaItem = document.createElement('div');
        materiaItem.className = 'materia-item';
        
        // Header de la materia
        const header = document.createElement('div');
        header.className = `materia-header ${materiaId === estadoActual.materia ? 'expanded' : ''}`;
        header.innerHTML = `
            <div class="materia-icon">${materia.icono}</div>
            <div class="materia-info">
                <div class="materia-nombre">${materia.nombre}</div>
                <div class="materia-progreso">${Object.keys(materia.modulos).length} módulos • 9 actividades</div>
            </div>
            <div class="materia-expand-icon">▼</div>
        `;
        
        // Contenedor de módulos
        const modulosContainer = document.createElement('div');
        modulosContainer.className = `modulos-container ${materiaId === estadoActual.materia ? 'show' : ''}`;
        
        // Renderizar módulos
        Object.entries(materia.modulos).forEach(([moduloId, modulo]) => {
            const moduloDiv = document.createElement('div');
            moduloDiv.className = 'modulo-item';
            moduloDiv.innerHTML = `<div class="modulo-titulo">${modulo.nombre}</div>`;
            
            // Grid de actividades
            const actividadesGrid = document.createElement('div');
            actividadesGrid.className = 'actividades-grid';
            
            Object.entries(modulo.actividades).forEach(([actId, actividad]) => {
                const isActive = materiaId === estadoActual.materia && 
                                 moduloId === estadoActual.modulo && 
                                 actId === estadoActual.actividad;
                
                const actBtn = document.createElement('button');
                actBtn.className = `actividad-btn ${isActive ? 'active' : ''}`;
                actBtn.innerHTML = `
                    <span class="actividad-numero">${actId.replace('act', 'Act. ')}</span>
                    <span class="actividad-desc">${actividad.desc}</span>
                `;
                
                actBtn.addEventListener('click', () => {
                    estadoActual.materia = materiaId;
                    estadoActual.modulo = moduloId;
                    estadoActual.actividad = actId;
                    
                    // Actualizar UI
                    actualizarActividadSeleccionada();
                    actualizarBreadcrumb();
                    actualizarInfoSimulador();
                    
                    // Cargar preguntas de esta actividad
                    cargarActividad(materiaId, moduloId, actId);
                });
                
                actividadesGrid.appendChild(actBtn);
            });
            
            moduloDiv.appendChild(actividadesGrid);
            modulosContainer.appendChild(moduloDiv);
        });
        
        // Toggle expandir/colapsar
        header.addEventListener('click', (e) => {
            if (e.target.closest('.actividad-btn')) return;
            
            const wasExpanded = header.classList.contains('expanded');
            
            // Colapsar todas
            document.querySelectorAll('.materia-header').forEach(h => {
                h.classList.remove('expanded');
            });
            document.querySelectorAll('.modulos-container').forEach(c => {
                c.classList.remove('show');
            });
            
            // Expandir esta si no estaba expandida
            if (!wasExpanded) {
                header.classList.add('expanded');
                modulosContainer.classList.add('show');
                estadoActual.materia = materiaId;
            } else {
                estadoActual.materia = null;
            }
        });
        
        materiaItem.appendChild(header);
        materiaItem.appendChild(modulosContainer);
        container.appendChild(materiaItem);
    });
}

// ========== ACTUALIZAR ACTIVIDAD SELECCIONADA ==========
function actualizarActividadSeleccionada() {
    document.querySelectorAll('.actividad-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Encontrar y marcar la actividad activa
    const selector = `[data-materia="${estadoActual.materia}"][data-modulo="${estadoActual.modulo}"][data-actividad="${estadoActual.actividad}"]`;
    const activa = document.querySelector(selector);
    if (activa) activa.classList.add('active');
}

// ========== ACTUALIZAR BREADCRUMB ==========
function actualizarBreadcrumb() {
    const trimestre = SIMULADORES[estadoActual.trimestre];
    const materia = trimestre.materias[estadoActual.materia];
    const modulo = materia?.modulos[estadoActual.modulo];
    const actividad = modulo?.actividades[estadoActual.actividad];
    
    document.getElementById('breadTrimestre').textContent = trimestre.nombre;
    document.getElementById('breadMateria').textContent = materia?.nombre || '';
    document.getElementById('breadModulo').textContent = modulo?.nombre || '';
    document.getElementById('breadActividad').textContent = actividad?.nombre || '';
}

// ========== ACTUALIZAR INFO DEL SIMULADOR ==========
function actualizarInfoSimulador() {
    const trimestre = SIMULADORES[estadoActual.trimestre];
    const materia = trimestre.materias[estadoActual.materia];
    const modulo = materia?.modulos[estadoActual.modulo];
    const actividad = modulo?.actividades[estadoActual.actividad];
    
    if (actividad) {
        document.getElementById('currentSimTitle').textContent = actividad.nombre;
        document.getElementById('currentSimPath').textContent = 
            `${trimestre.nombre} → ${materia.nombre} → ${modulo.nombre} → ${actividad.nombre}`;
        
        document.getElementById('materia-titulo').textContent = 
            `${materia.nombre} - ${modulo.nombre}`;
        document.getElementById('materia-descripcion').textContent = 
            actividad.nombre;
        
        // Habilitar botón iniciar
        document.getElementById('startBtn').disabled = false;
    }
}

// Al final de cargarActividad()
function cargarActividad(materiaId, moduloId, actividadId) {
    const actividad = SIMULADORES[estadoActual.trimestre]
        .materias[materiaId]
        .modulos[moduloId]
        .actividades[actividadId];
    
    // ESTAS LÍNEAS SON CRÍTICAS:
    window.preguntasActuales = actividad.banco;  // Guarda las preguntas
    window.totalPreguntas = actividad.preguntas; // Guarda el total
    
    console.log('Preguntas cargadas:', window.preguntasActuales.length); // Debug
}

// ========== RESETEAR SIMULADOR ==========
function resetearSimulador() {
    // Función para resetear el simulador (se conecta con main.js)
    if (typeof window.resetearSimuladorGlobal === 'function') {
        window.resetearSimuladorGlobal();
    }
    
    document.getElementById('qtitle').textContent = 
        'Presiona "Iniciar actividad" para comenzar';
    document.getElementById('startBtn').disabled = false;
    document.getElementById('checkBtn').disabled = true;
    document.getElementById('nextBtn').disabled = true;
}

// Hacer disponible globalmente para main.js
window.estadoActual = estadoActual;