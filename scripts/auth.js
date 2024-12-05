// auth.js

function checkAuthentication() {
    if (localStorage.getItem("isAuthenticated") !== "true") {
        alert("Você precisa fazer login para acessar esta página.");
        window.location.href = "../login/index.html"; // Redireciona para a tela de login
    }
}
