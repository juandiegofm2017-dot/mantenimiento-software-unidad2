// ui/alerts.js
window.UI = {
  showMessage(text, type = "info") {
    const el = document.getElementById("mensaje");
    if (!el) return;

    el.textContent = text;

    // estilo simple según tipo
    if (type === "success") el.style.color = "green";
    else if (type === "error") el.style.color = "crimson";
    else el.style.color = "black";
  }
};
