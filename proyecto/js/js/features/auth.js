// features/auth.js
window.Auth = {
  register(username) {
    if (!window.Validators.isNonEmptyString(username)) {
      return { ok: false, msg: "Por favor ingresa un nombre válido." };
    }

    const users = window.StorageUtil.getUsers();
    const name = username.trim();

    const exists = users.some(u => (u.nombre || "").toLowerCase() === name.toLowerCase());
    if (exists) {
      return { ok: false, msg: "El usuario ya existe. Intenta con otro nombre." };
    }

    users.push({ nombre: name, creadoEn: new Date().toISOString() });
    window.StorageUtil.saveUsers(users);

    return { ok: true, msg: "Usuario registrado con éxito" };
  }
};

