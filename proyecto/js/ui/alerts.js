// ui/alerts.js
(function () {
  function setMessage(el, text, type = "info") {
    if (!el) return;
    el.textContent = text;

    // Estilo mínimo para evidenciar error/éxito
    if (type === "success") el.style.color = "green";
    else if (type === "error") el.style.color = "crimson";
    else el.style.color = "black";
  }

  window.UIAlertsMS = { setMessage };
})();
