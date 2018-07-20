export default {
  getNotes() {
    return JSON.parse(localStorage.getItem('notes')) || [];
  },
  getId() {
    return parseInt(window.localStorage.getItem('selected-id')) || null;
  },
};
