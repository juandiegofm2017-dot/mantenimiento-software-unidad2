(function () {
  function setMessage(el, text) {
    if (!el) return;
    el.textContent = text;
  }

  window.UIAlertsMS = { setMessage };
})();
