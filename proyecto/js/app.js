// app.js
(function () {
  function handleRegister() {
    const inputUsuario = document.getElementById("usuario");
    const pMensaje = document.getElementById("mensaje");

    const username = inputUsuario ? inputUsuario.value : "";

    if (!window.ValidatorsMS.required(username)) {
      window.UIAlertsMS.setMessage(pMensaje, "El nombre es obligatorio.", "error");
      return;
    }

    if (!window.ValidatorsMS.minLength(username, 3)) {
      window.UIAlertsMS.setMessage(pMensaje, "El nombre debe tener mínimo 3 caracteres.", "error");
      return;
    }

    const result = window.AuthMS.registerUser(username);
    window.UIAlertsMS.setMessage(pMensaje, result.message, result.ok ? "success" : "error");

    if (result.ok && inputUsuario) inputUsuario.value = "";
  }

  document.addEventListener("DOMContentLoaded", function () {
    const btnRegistrar = document.getElementById("btnRegistrar");
    if (btnRegistrar) btnRegistrar.addEventListener("click", handleRegister);

    // Compatibilidad por si alguien usa onclick="registrar()"
    window.registrar = handleRegister;
  });
})();
