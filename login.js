function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;
  const msg = document.getElementById("mensagem");
  if (user === "admin" && pass === "1234") {
    window.location.href = "painel.html";
  } else {
    msg.textContent = "Usuário ou senha inválidos.";
  }
}