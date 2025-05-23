async function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const { data, error } = await supabase.from("usuarios").select("*").eq("usuario", usuario).eq("senha", senha);
  if (data.length > 0) {
    window.location.href = "painel.html";
  } else {
    document.getElementById("erro").innerText = "Usuário ou senha inválidos.";
  }
}