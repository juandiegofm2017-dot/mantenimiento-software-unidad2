(function () {
  const USERS_KEY = "ms_users";

  function getUsers() {
    const raw = localStorage.getItem(USERS_KEY);
    try {
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  window.StorageMS = { getUsers, saveUsers };
})();
