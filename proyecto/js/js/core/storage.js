// core/storage.js
window.StorageUtil = {
  key: "usuarios",

  getUsers() {
    const raw = localStorage.getItem(this.key);
    try {
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  saveUsers(users) {
    localStorage.setItem(this.key, JSON.stringify(users));
  }
};
;
