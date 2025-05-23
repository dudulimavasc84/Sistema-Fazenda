
function login() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    if (user === 'Dudu' && pass === 'fer111984') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
    } else {
        document.getElementById('login-status').innerText = 'Usuário ou senha inválidos.';
    }
}

function logout() {
    document.getElementById('app-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('login-status').innerText = '';
}

function showPage(pageId) {
    ['painel', 'lancamentos', 'estoque', 'historico', 'relatorios'].forEach(id => {
        document.getElementById(id).style.display = (id === pageId) ? 'block' : 'none';
    });
}
