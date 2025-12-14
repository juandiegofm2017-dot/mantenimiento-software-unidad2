(function () {
  const inputUsuario = document.getElementById("usuario");
  const btnRegistrar = document.getElementById("btnRegistrar");
  const pMensaje = document.getElementById("mensaje");

  function handleRegister() {
    const username = inputUsuario.value;

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

  btnRegistrar.addEventListener("click", handleRegister);
})();
