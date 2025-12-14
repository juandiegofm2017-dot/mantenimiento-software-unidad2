(function () {
  const inputUsuario = document.getElementById("usuario");
  const btnRegistrar = document.getElementById("btnRegistrar");
  const pMensaje = document.getElementById("mensaje");

  function setMsg(text) {
    if (pMensaje) pMensaje.textContent = text;
  }

  function handleRegister() {
    if (!inputUsuario) return;

    const username = inputUsuario.value;

    if (!window.ValidatorsMS || !window.AuthMS || !window.UIAlertsMS) {
      setMsg("Error: scripts no cargaron. Revisa rutas en índice.html.");
      return;
    }

    if (!window.ValidatorsMS.required(username)) {
      window.UIAlertsMS.setMessage(pMensaje, "El nombre es obligatorio.");
      return;
    }

    if (!window.ValidatorsMS.minLength(username, 3)) {
      window.UIAlertsMS.setMessage(pMensaje, "El nombre debe tener mínimo 3 caracteres.");
      return;
    }

    const result = window.AuthMS.registerUser(username.trim());
    window.UIAlertsMS.setMessage(pMensaje, result.message);

    if (result.ok) inputUsuario.value = "";
  }

  // Si existe el botón con id, lo conectamos
  if (btnRegistrar) btnRegistrar.addEventListener("click", handleRegister);

  // Compatibilidad: si el HTML tiene onclick="registrar()"
  window.registrar = handleRegister;
})();

