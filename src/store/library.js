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
        ...item,
        type,
        authors: item.authors.split(',')
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

  getItemByIsbn(isbn) {
    if (!isbn) {
      return
    }

    return this.getItems().find(item => item.isbn === isbn)
  }

  getItemsByAuthorEmail(email) {
    if (!email) {
      return
    }

    return this.getItems().filter(item => item.authors.includes(email))
  }
}
