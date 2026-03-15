// js/auth.js
import { auth } from './firebase-config.js';
import { 
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Elementos del DOM
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');

// Permitir login con Enter
loginPassword.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        loginBtn.click();
    }
});

loginEmail.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        loginPassword.focus();
    }
});

// ========== LOGIN ==========
loginBtn.addEventListener('click', async () => {
    const email = loginEmail.value.trim();
    const password = loginPassword.value;
    
    // Validaciones básicas
    if (!email || !password) {
        loginError.textContent = 'Por favor completa todos los campos';
        return;
    }
    
    // Feedback visual de carga
    loginError.textContent = '';
    loginBtn.textContent = '⏳ Iniciando sesión...';
    loginBtn.disabled = true;
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Login exitoso:', userCredential.user.email);
        
        // Pequeña pausa para mostrar que funcionó
        loginBtn.textContent = '✅ Acceso concedido';
        
        // Redirigir al dashboard
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 500);
        
    } catch (error) {
        console.error('Error de login:', error);
        
        // Restaurar botón
        loginBtn.textContent = 'Iniciar sesión';
        loginBtn.disabled = false;
        
        // Mensajes amigables según el error
        switch(error.code) {
            case 'auth/user-not-found':
                loginError.textContent = '❌ Usuario no registrado';
                break;
            case 'auth/wrong-password':
                loginError.textContent = '❌ Contraseña incorrecta';
                break;
            case 'auth/invalid-email':
                loginError.textContent = '❌ El formato del correo no es válido';
                break;
            case 'auth/user-disabled':
                loginError.textContent = '❌ Esta cuenta ha sido deshabilitada';
                break;
            case 'auth/too-many-requests':
                loginError.textContent = '❌ Demasiados intentos fallidos. Intenta más tarde';
                break;
            default:
                loginError.textContent = '❌ Error al iniciar sesión. Verifica tus datos';
        }
        
        // Limpiar campo de contraseña por seguridad
        loginPassword.value = '';
        loginPassword.focus();
    }
});