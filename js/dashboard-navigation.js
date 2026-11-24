import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { SIMULADORES } from './questions/index.js';

const byId = id => document.getElementById(id);
const simulator = window.simulator;
let currentPath;

function firstActivity(trimestreId) {
    const materias = SIMULADORES[trimestreId].materias;
    const [materiaId] = Object.keys(materias);
    const [moduloId] = Object.keys(materias[materiaId].modulos);
    const [actividadId] = Object.keys(materias[materiaId].modulos[moduloId].actividades);
    return [trimestreId, materiaId, moduloId, actividadId];
}

function findActivity(path) {
    if (!Array.isArray(path) || path.length !== 4 || !path.every(id => typeof id === 'string')) return null;
    const [trimestre, materia, modulo, actividad] = path;
    return SIMULADORES[trimestre]?.materias[materia]?.modulos[modulo]?.actividades[actividad];
}

function text(parent, tag, value, className) {
    const element = document.createElement(tag);
    element.textContent = value;
    if (className) element.className = className;
    parent.appendChild(element);
    return element;
}

function selectActivity(path, refreshNavigation = false) {
    currentPath = path;
    const [trimestreId, materiaId, moduloId] = path;
    const trimestre = SIMULADORES[trimestreId];
    const materia = trimestre.materias[materiaId];
    const modulo = materia.modulos[moduloId];
    const actividad = findActivity(path);
    const names = [trimestre.nombre, materia.nombre, modulo.nombre, actividad.nombre];
    ['breadTrimestre', 'breadMateria', 'breadModulo', 'breadActividad'].forEach((id, i) => {
        byId(id).textContent = names[i];
    });
    byId('currentSimTitle').textContent = actividad.nombre;
    byId('currentSimPath').textContent = names.join(' → ');
    byId('materia-titulo').textContent = materia.nombre;
    byId('materia-descripcion').textContent = actividad.nombre;

    if (refreshNavigation) {
        renderTrimestres();
        renderMaterias();
    }
    updateActivityButtons();
    simulator.openActivity(path, actividad);
}

function renderTrimestres() {
    const container = byId('trimestresNav');
    container.replaceChildren();
    for (const [id, trimestre] of Object.entries(SIMULADORES)) {
        const active = id === currentPath[0];
        const button = text(container, 'button', trimestre.nombre, 'trimestre-tab');
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
        button.onclick = () => {
            if (id !== currentPath[0]) selectActivity(firstActivity(id), true);
        };
    }
}

function renderMaterias() {
    const [trimestreId, selectedMateria, selectedModulo] = currentPath;
    const container = byId('materiasContainer');
    container.replaceChildren();
    for (const [materiaId, materia] of Object.entries(SIMULADORES[trimestreId].materias)) {
        const item = text(container, 'details', '', 'materia-item');
        item.open = materiaId === selectedMateria;
        const summary = text(item, 'summary', '', 'materia-header');
        text(summary, 'span', materia.icono, 'materia-icon');
        const info = text(summary, 'span', '', 'materia-info');
        text(info, 'span', materia.nombre, 'materia-nombre');
        const modules = text(item, 'div', '', 'modulos-container show');
        for (const [moduloId, modulo] of Object.entries(materia.modulos)) {
            const group = text(modules, 'details', '', 'modulo-item');
            group.open = item.open && moduloId === selectedModulo;
            text(group, 'summary', modulo.nombre, 'modulo-titulo');
            const grid = text(group, 'div', '', 'actividades-grid');
            for (const [actId, actividad] of Object.entries(modulo.actividades)) {
                const path = [trimestreId, materiaId, moduloId, actId];
                const button = text(grid, 'button', '', 'actividad-btn');
                button.dataset.path = path.join('/');
                text(button, 'span', actId.replace('act', 'Act. '), 'actividad-numero');
                text(button, 'span', actividad.desc, 'actividad-desc');
                text(button, 'span', simulator.status(path), 'actividad-estado');
                button.onclick = () => {
                    if (button.dataset.path !== currentPath.join('/')) selectActivity(path);
                    if (window.matchMedia('(max-width: 900px)').matches) {
                        byId('simulador-container').scrollIntoView({ block: 'start' });
                        byId('qtitle').focus({ preventScroll: true });
                    }
                };
            }
        }
    }
}

function updateActivityButtons() {
    for (const button of byId('materiasContainer').querySelectorAll('.actividad-btn')) {
        const active = button.dataset.path === currentPath.join('/');
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
        button.querySelector('.actividad-estado').textContent = simulator.status(button.dataset.path.split('/'));
    }
}

document.addEventListener('simulator-progress', updateActivityButtons);

onAuthStateChanged(auth, user => {
    if (!user) {
        window.location.replace('index.html');
        return;
    }
    byId('userEmail').textContent = user.email;
    const saved = simulator.openUser(user.uid);
    selectActivity(findActivity(saved) ? saved : firstActivity('trimestre1'), true);
});

byId('logoutBtn').onclick = async () => {
    await signOut(auth);
    window.location.replace('index.html');
};
