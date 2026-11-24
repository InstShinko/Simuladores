const byId = id => document.getElementById(id);
const qtitle = byId("qtitle");
const options = byId("options");
const feedback = byId("feedback");
const mode = byId("quizMode");
const start = byId("startBtn");
const check = byId("checkBtn");
const next = byId("nextBtn");
const previous = byId("prevBtn");
const submit = byId("submitBtn");
const restart = byId("restartBtn");
const retry = byId("retryBtn");
const questionNav = byId("questionNav");

let storageKey;
let progress;
let activityKey;
let activity;
let attempt;
let resumed = false;

function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function shuffleOptions(question) {
    const order = shuffle(question.options.map((_, index) => index));
    return {
        ...question,
        options: order.map(index => question.options[index]),
        answerIndex: order.indexOf(question.answerIndex)
    };
}

function readProgress() {
    try {
        const stored = JSON.parse(localStorage.getItem(storageKey));
        if (stored?.activities && typeof stored.activities === "object") return stored;
    } catch {
        // Use the in-memory state if storage is unavailable or unreadable.
    }
    return null;
}

function save(updateAttempt = false) {
    const stored = readProgress();
    if (stored) {
        progress.activities = {
            ...progress.activities,
            ...stored.activities,
            ...(updateAttempt ? { [activityKey]: record() } : {})
        };
    }
    try {
        localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
        // The current session remains usable when browser storage is unavailable.
    }
}

function record() {
    return progress.activities[activityKey] ??= {};
}

window.simulator = {
    openUser(uid) {
        storageKey = "simulador:v1:" + uid;
        progress = readProgress() ?? { last: null, activities: {} };
        return progress.last;
    },

    status(path) {
        const entry = progress.activities[path.join("/")];
        if (entry?.attempt && !entry.attempt.finished) return "En curso";
        return entry?.completed ? "Completada" : "Pendiente";
    },

    openActivity(path, selectedActivity) {
        activity = selectedActivity;
        activityKey = path.join("/");
        progress.last = path;
        save();
        attempt = progress.activities[activityKey]?.attempt ?? null;
        resumed = Boolean(attempt && !attempt.finished);
        render();
    }
};

function appendText(parent, tag, value, className) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = value;
    parent.appendChild(node);
    return node;
}

function persistAttempt() {
    record().attempt = attempt;
    save(true);
    document.dispatchEvent(new Event("simulator-progress"));
}

function begin(questions, selectedMode, reviewing = false) {
    const limit = reviewing ? questions.length : activity.preguntas || 10;
    const quiz = shuffle(questions).slice(0, limit).map(shuffleOptions);
    attempt = {
        mode: selectedMode,
        reviewing,
        quiz,
        answers: quiz.map(() => null),
        checked: quiz.map(() => false),
        index: 0,
        finished: false
    };
    resumed = false;
    persistAttempt();
    render(true);
}

function finish() {
    attempt.finished = true;
    if (!attempt.reviewing) record().completed = true;
    persistAttempt();
    render(true);
}

function results() {
    return attempt.quiz.map((question, index) => ({
        question,
        answer: attempt.answers[index],
        correct: attempt.answers[index] === question.answerIndex
    }));
}

function showFeedback(question, answer) {
    const correct = answer === question.answerIndex;
    feedback.className = "feedback show " + (correct ? "good" : "bad");
    appendText(feedback, "strong", correct ? "Respuesta correcta" : "Respuesta incorrecta");
    appendText(feedback, "div", "Respuesta correcta: " + question.options[question.answerIndex]);
    appendText(feedback, "p", question.explain);
}

function showResults(items) {
    const list = byId("reviewList");
    const errors = new Map();
    for (const { question, correct } of items) {
        if (!correct) errors.set(question.topic, (errors.get(question.topic) ?? 0) + 1);
    }
    if (errors.size) {
        appendText(list, "h3", "Temas que conviene repasar");
        const topics = appendText(list, "ul", "");
        for (const [topic, count] of [...errors].sort((a, b) => b[1] - a[1])) {
            appendText(topics, "li", topic + " · " + count);
        }
    }
    for (const [index, { question, answer, correct }] of items.entries()) {
        const item = appendText(list, "div", "", "reviewItem");
        appendText(item, "div", correct ? "Correcta" : answer === null ? "Sin responder" : "Incorrecta",
            "tag " + (correct ? "good" : "bad"));
        appendText(item, "strong", (index + 1) + ". " + question.q);
        appendText(item, "div", "Tu respuesta: " + (question.options[answer] ?? "Sin responder"));
        appendText(item, "div", "Respuesta correcta: " + question.options[question.answerIndex]);
        appendText(item, "p", question.explain);
    }
}

function showQuestion(exam) {
    const { index, quiz, answers, checked } = attempt;
    const question = quiz[index];
    const locked = checked[index];
    qtitle.textContent = question.q;
    options.setAttribute("role", "radiogroup");
    options.setAttribute("aria-labelledby", "qtitle");
    question.options.forEach((option, i) => {
        const label = appendText(options, "label", "", "opt");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "opt";
        input.checked = answers[index] === i;
        input.disabled = locked;
        input.addEventListener("change", () => {
            answers[index] = i;
            check.disabled = false;
            persistAttempt();
            if (exam) updateExamNav();
        });
        label.appendChild(input);
        appendText(label, "span", option);
        if (locked && question.answerIndex === i) label.classList.add("correct");
        if (locked && input.checked && question.answerIndex !== i) label.classList.add("wrong");
    });
    check.disabled = locked || answers[index] === null;
    next.disabled = exam ? index === quiz.length - 1 : !locked;
    next.textContent = !exam && index === quiz.length - 1 ? "Ver resultado" : "Siguiente";
    previous.disabled = index === 0;
    if (locked) showFeedback(question, answers[index]);

    if (exam) {
        quiz.forEach((_, i) => {
            const button = appendText(questionNav, "button", String(i + 1));
            button.addEventListener("click", () => goTo(i));
        });
        updateExamNav();
    }
}

function updateExamNav() {
    const { answers, index } = attempt;
    const count = answers.filter(answer => answer !== null).length;
    submit.textContent = "Entregar examen (" + count + "/" + answers.length + ")";
    [...questionNav.children].forEach((button, i) => {
        button.classList.toggle("answered", answers[i] !== null);
        button.setAttribute("aria-current", i === index ? "step" : "false");
        button.setAttribute("aria-label", "Pregunta " + (i + 1) +
            (answers[i] === null ? ", sin responder" : ", respondida"));
    });
}

function render(focus = false) {
    const running = Boolean(attempt && !attempt.finished && !resumed);
    const finished = Boolean(attempt?.finished);
    const exam = running && attempt.mode === "examen";
    const items = finished || (running && !exam)
        ? results().filter((_, i) => finished || attempt.checked[i])
        : [];
    const correct = items.filter(item => item.correct).length;
    const total = attempt?.quiz.length ?? 0;

    options.replaceChildren();
    feedback.replaceChildren();
    feedback.className = "feedback";
    questionNav.replaceChildren();
    byId("reviewList").replaceChildren();
    byId("review").classList.toggle("show", finished);
    byId("marcador-container").hidden = exam;
    byId("correct").textContent = correct;
    byId("wrong").textContent = items.length - correct;
    byId("score").textContent = (items.length ? Math.round(correct / items.length * 100) : 0) + "%";
    byId("preguntas-info").textContent = "Preguntas: " + (attempt
        ? total : Math.min(activity.banco.length, activity.preguntas || 10));
    byId("counter").textContent = running ? "Pregunta " + (attempt.index + 1) + " de " + total
        : finished ? total + " preguntas revisadas" : "";
    byId("bar").style.width = (total ? 100 * (finished ? total : running ? attempt.index + 1 : 0) / total : 0) + "%";

    start.hidden = running;
    start.disabled = activity.banco.length === 0;
    start.textContent = resumed ? "Continuar" : finished ? "Iniciar otro intento" : "Iniciar actividad";
    check.hidden = !running || exam;
    next.hidden = !running;
    previous.hidden = !exam;
    submit.hidden = !exam;
    questionNav.hidden = !exam;
    restart.hidden = !(running || resumed);
    retry.hidden = !finished || correct === items.length;
    mode.disabled = running || resumed;
    if (mode.disabled) mode.value = attempt.mode;

    if (running) {
        showQuestion(exam);
    } else if (finished) {
        qtitle.textContent = "Resultado del intento";
        feedback.className = "feedback show";
        appendText(feedback, "strong", correct + " de " + total + " respuestas correctas");
        showResults(items);
    } else {
        qtitle.textContent = resumed ? "Tienes un intento en curso." : "Elige un modo para comenzar.";
    }
    if (focus) qtitle.focus();
}

function goTo(index) {
    attempt.index = index;
    persistAttempt();
    render(true);
}

start.onclick = () => {
    if (resumed) {
        resumed = false;
        render(true);
        return;
    }
    if (activity.banco.length) begin(activity.banco, mode.value);
};

check.onclick = () => {
    attempt.checked[attempt.index] = true;
    persistAttempt();
    render();
    feedback.setAttribute("tabindex", "-1");
    feedback.focus();
};

next.onclick = () => {
    if (attempt.index === attempt.quiz.length - 1) finish();
    else goTo(attempt.index + 1);
};

previous.onclick = () => goTo(attempt.index - 1);

submit.onclick = () => {
    const unanswered = attempt.answers.filter(answer => answer === null).length;
    if (!unanswered || window.confirm("Quedan " + unanswered + " preguntas sin responder. ¿Entregar el examen?")) finish();
};

restart.onclick = () => {
    if (!window.confirm("¿Descartar las respuestas del intento en curso?")) return;
    attempt = null;
    resumed = false;
    persistAttempt();
    render(true);
};

retry.onclick = () => {
    const mistakes = results().filter(item => !item.correct);
    const used = new Set(mistakes.map(({ question }) => question.q));
    const seen = new Set(attempt.quiz.map(question => question.q));
    const questions = mistakes.map(({ question }) => {
        const variants = question.variantGroup && activity.banco.filter(candidate =>
            candidate.variantGroup === question.variantGroup && !used.has(candidate.q));
        const variant = variants?.find(candidate => !seen.has(candidate.q)) ?? variants?.[0];
        if (variant) used.add(variant.q);
        return variant || question;
    });
    if (questions.length) begin(questions, "practica", true);
};
