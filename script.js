import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// 🔹 Credenciais do Firebase (preenchidas corretamente)
const firebaseConfig = {
    apiKey: "AIzaSyBHDwatGIjcMmFXmbdw_kH4dQW-xtZJgcA",
    authDomain: "controle-processo-nup.firebaseapp.com",
    projectId: "controle-processo-nup",
    storageBucket: "controle-processo-nup.appspot.com",
    messagingSenderId: "375467007404",
    appId: "1:375467007404:web:5f3942fcb6d6aa4d26ee09"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔹 Função de Login com E-mail e Senha
window.login = async function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "index.html"; // Redireciona para a página principal
    } catch (error) {
        alert("Erro ao fazer login: " + error.message);
    }
};

// 🔹 Função de Login com Google
window.loginGoogle = async function() {
    try {
        await signInWithPopup(auth, provider);
        window.location.href = "index.html";
    } catch (error) {
        alert("Erro ao fazer login com Google: " + error.message);
    }
};
