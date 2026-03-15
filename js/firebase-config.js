// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ⚠️ REEMPLAZA ESTOS VALORES CON LOS DE TU PROYECTO
// Puedes encontrarlos en Firebase Console → Configuración del proyecto
const firebaseConfig = {
  apiKey: "AIzaSyA-nLxzHDlz-quObz2vYUZ4KWAN41U_mAg",
  authDomain: "bachillerato-3d211.firebaseapp.com",
  projectId: "bachillerato-3d211",
  storageBucket: "bachillerato-3d211.firebasestorage.app",
  messagingSenderId: "610805533797",
  appId: "1:610805533797:web:432c1b9cebac2eb0a2ca8c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };