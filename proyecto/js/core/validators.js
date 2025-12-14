// core/validators.js
(function () {
  function required(value) {
    return value !== null && value !== undefined && String(value).trim().length > 0;
  }

  function minLength(value, n) {
    return String(value).trim().length >= n;
  }

  window.ValidatorsMS = { required, minLength };
})();
