// core/validators.js
window.Validators = {
  isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }
};
