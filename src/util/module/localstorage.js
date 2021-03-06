export const proStorage = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  fetch(key) {
    const res = JSON.parse(localStorage.getItem(key))
    return res != null ? res : []
  },
  remove(key) {
    localStorage.removeItem(key)
  }
}
