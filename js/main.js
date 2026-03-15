// ============================================
// MAIN.JS - LÓGICA PRINCIPAL DEL SIMULADOR
// ============================================

// Elementos del DOM
const qtitle = document.getElementById("qtitle");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const correctEl = document.getElementById("correct");
const wrongEl = document.getElementById("wrong");
const scoreEl = document.getElementById("score");
const counterEl = document.getElementById("counter");
const barEl = document.getElementById("bar");
const reviewEl = document.getElementById("review");
const reviewListEl = document.getElementById("reviewList");

// Variables de estado
let quiz = [];
let idx = -1;
let selected = null;
let locked = false;
let correct = 0;
let wrong = 0;
let history = [];

// ========== FUNCIONES AUXILIARES ==========
function shuffle(a) {
    return [...a].sort(() => Math.random() - 0.5);
}

// Hacemos resetState global
window.resetState = function() {
    idx = -1;
    selected = null;
    locked = false;
    correct = 0;
    wrong = 0;
    history = [];
    updateStats();
    setProgress();
    feedbackEl.style.display = "none";
    reviewEl.classList.remove("show");
};

function updateStats() {
    correctEl.textContent = correct;
    wrongEl.textContent = wrong;
    let total = correct + wrong;
    scoreEl.textContent = (total ? Math.round((correct / total) * 100) : 0) + "%";
}

function setProgress() {
    let total = quiz.length || 0;
    let current = Math.max(0, idx + 1);
    counterEl.textContent = `${current} / ${total}`;
    barEl.style.width = (total ? (current / total) * 100 : 0) + "%";
}

function renderQuestion() {
    locked = false;
    selected = null;
    feedbackEl.style.display = "none";
    
    let item = quiz[idx];
    qtitle.textContent = `[${item.topic}] ${item.q}`;
    
    optionsEl.innerHTML = "";
    item.options.forEach((opt, i) => {
        let label = document.createElement("label");
        label.className = "opt";
        
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "opt";
        input.value = i;
        
        let span = document.createElement("span");
        span.textContent = opt;
        
        label.appendChild(input);
        label.appendChild(span);
        
        label.onclick = () => {
            if (locked) return;
            selected = i;
            optionsEl.querySelectorAll("input").forEach(r => r.checked = false);
            input.checked = true;
            checkBtn.disabled = false;
        };
        
        optionsEl.appendChild(label);
    });
    
    checkBtn.disabled = true;
    nextBtn.disabled = true;
    restartBtn.disabled = false;
    setProgress();
}

function markOptions(item) {
    [...optionsEl.querySelectorAll(".opt")].forEach((l, i) => {
        if (i === item.answerIndex) l.classList.add("correct");
        if (i === selected && i !== item.answerIndex) l.classList.add("wrong");
    });
}

function showFeedback(ok, item) {
    feedbackEl.style.display = "block";
    feedbackEl.className = "feedback show " + (ok ? "good" : "bad");
    feedbackEl.innerHTML = `<b>${ok ? "✅ Correcto" : "❌ Incorrecto"}</b><br>
    Tema: <b>${item.topic}</b><br>
    Tu respuesta: <b>${item.options[selected]}</b><br>
    Correcta: <b>${item.options[item.answerIndex]}</b><br><br>
    <b>Explicación:</b> ${item.explain}`;
}

function generarResumenRepaso() {
    const temasIncorrectos = {};
    const totalPorTema = {};
    
    history.forEach(item => {
        if (!item.isCorrect) {
            temasIncorrectos[item.topic] = (temasIncorrectos[item.topic] || 0) + 1;
        }
        totalPorTema[item.topic] = (totalPorTema[item.topic] || 0) + 1;
    });
    
    const temasRepaso = Object.keys(temasIncorrectos).map(tema => {
        const incorrectas = temasIncorrectos[tema];
        const total = totalPorTema[tema];
        const porcentajeError = Math.round((incorrectas / total) * 100);
        return { tema, incorrectas, total, porcentajeError };
    }).sort((a, b) => b.porcentajeError - a.porcentajeError);
    
    if (temasRepaso.length === 0) {
        return `<div style="color: var(--good); padding: 12px; text-align: center;">
            <b>🎉 ¡Excelente! No necesitas repasar ningún tema.</b>
        </div>`;
    }
    
    let resumenHTML = '<div style="margin-bottom: 15px; padding: 12px; background: rgba(255, 255, 255, 0.05); border-radius: 14px; border: 1px solid var(--border);">';
    resumenHTML += '<h3 style="margin: 0 0 10px; color: var(--warn);">📚 Temas que debes repasar:</h3>';
    resumenHTML += '<ol style="margin: 0; padding-left: 20px;">';
    
    temasRepaso.forEach(t => {
        const nivel = t.porcentajeError >= 70 ? '🔴 Prioritario' : (t.porcentajeError >= 40 ? '🟡 Intermedio' : '🟢 Repaso ligero');
        resumenHTML += `<li style="margin-bottom: 8px;">
            <b>${t.tema}</b> - ${t.incorrectas}/${t.total} incorrectas (${t.porcentajeError}%) 
            <span style="color: ${t.porcentajeError >= 70 ? '#ff6b6b' : (t.porcentajeError >= 40 ? '#ffcc66' : '#68f08b')};">${nivel}</span>
        </li>`;
    });
    
    resumenHTML += '</ol>';
    resumenHTML += '<p style="margin: 15px 0 0; color: var(--muted); font-size: 14px;">';
    resumenHTML += '💡 Concéntrate en los temas marcados como 🔴 Prioritarios para mejorar tu rendimiento.';
    resumenHTML += '</p></div>';
    
    return resumenHTML;
}

function finalize() {
    qtitle.textContent = "🎉 ¡Has completado el simulador!";
    optionsEl.innerHTML = "";
    
    feedbackEl.style.display = "block";
    feedbackEl.className = "feedback show";
    
    let total = correct + wrong;
    let pct = total ? Math.round((correct / total) * 100) : 0;
    
    feedbackEl.innerHTML = `<b>Resultado final:</b> ${correct} / ${total} → <b>${pct}%</b><br><br>
    <b>Interpretación:</b> ${
        pct >= 90 ? "🌟 Excelente dominio." :
        pct >= 70 ? "👍 Buen nivel, pero revisa los temas sugeridos." :
        pct >= 50 ? "📖 Comprensión parcial. Dedica tiempo a repasar." :
        "⚠️ Es necesario estudiar nuevamente los fundamentos."
    }`;
    
    nextBtn.disabled = true;
    checkBtn.disabled = true;
    reviewEl.classList.add("show");
    
    const resumenHTML = generarResumenRepaso();
    
    reviewListEl.innerHTML = resumenHTML + history.map((h, i) => `<div class="reviewItem">
        <div class="tag ${h.isCorrect ? "good" : "bad"}">${h.isCorrect ? "Correcta" : "Incorrecta"}</div>
        <div style="font-weight:700">${i + 1}. [${h.topic}] ${h.q}</div>
        <div>Tu respuesta: <b>${h.chosen}</b><br>Correcta: <b>${h.right}</b></div>
        <div style="color:var(--muted); margin-top:8px;"><b>Explicación:</b> ${h.explain}</div>
    </div>`).join("");
}

// ========== EVENT LISTENERS ==========
startBtn.onclick = () => {
    console.log('Iniciar clickeado');
    console.log('preguntasActuales:', window.preguntasActuales);
    
    if (!window.preguntasActuales || window.preguntasActuales.length === 0) {
        alert('No hay preguntas disponibles para esta actividad');
        return;
    }
    
    window.resetState();  // ← AHORA USA LA FUNCIÓN GLOBAL
    quiz = shuffle(window.preguntasActuales).slice(0, window.totalPreguntas || 10);
    idx = 0;
    startBtn.disabled = true;
    renderQuestion();
};

checkBtn.onclick = () => {
    if (selected === null || locked) return;
    locked = true;
    
    let item = quiz[idx];
    let ok = selected === item.answerIndex;
    
    if (ok) correct++;
    else wrong++;
    
    history.push({
        topic: item.topic,
        q: item.q,
        chosen: item.options[selected],
        right: item.options[item.answerIndex],
        isCorrect: ok,
        explain: item.explain
    });
    
    updateStats();
    markOptions(item);
    showFeedback(ok, item);
    checkBtn.disabled = true;
    nextBtn.disabled = false;
};

nextBtn.onclick = () => {
    if (idx < quiz.length - 1) {
        idx++;
        renderQuestion();
    } else {
        setProgress();
        finalize();
    }
};

restartBtn.onclick = () => {
    startBtn.disabled = false;
    window.resetState();
    qtitle.textContent = `Presiona “Iniciar” para comenzar.`;
    optionsEl.innerHTML = "";
    checkBtn.disabled = true;
    nextBtn.disabled = true;
    reviewEl.classList.remove("show");
};

// Función para resetear desde dashboard-navigation.js
window.resetearSimuladorGlobal = function() {
    window.resetState();
    qtitle.textContent = "Selecciona una actividad para comenzar";
    optionsEl.innerHTML = "";
    checkBtn.disabled = true;
    nextBtn.disabled = true;
    reviewEl.classList.remove("show");
};