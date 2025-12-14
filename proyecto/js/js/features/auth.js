(function () {
  function registerUser(username) {
    const users = window.StorageMS.getUsers();

    const exists = users.some(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );

    if (exists) return { ok: false, message: "El usuario ya existe." };

    users.push({
      username,
      createdAt: new Date().toISOString(),
    });

    window.StorageMS.saveUsers(users);
    return { ok: true, message: "Usuario registrado con éxito." };
  }

  window.AuthMS = { registerUser };
})();
