
function login() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    if (user === 'Dudu' && pass === 'fer111984') {
        window.location.href = "painel.html";
    } else {
        document.getElementById('login-status').innerText = 'Usuário ou senha inválidos.';
    }
}
