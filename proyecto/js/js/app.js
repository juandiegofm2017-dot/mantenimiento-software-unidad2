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
      setMsg("Error: scripts no cargaron. Revisa rutas en el HTML.");
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

  if (btnRegistrar) btnRegistrar.addEventListener("click", handleRegister);

  // Compatibilidad por si algún HTML viejo aún tiene onclick="registrar()"
  window.registrar = handleRegister;
})();


