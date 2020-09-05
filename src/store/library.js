export class LibraryStore {
  constructor() {
    this.items = []
  }
  addItems(type, items = []) {
    if (!type || !items.length) {
      return
    }

    items.forEach(item => {
      this.items.push({
        type,
        ...item
      })
    })
  }

  getItemsByType(type) {
    if (!type) {
      return []
    }

    return this.items.filter(item => item.type === type)
  }

  getItems() {
    return this.items
  }
}
