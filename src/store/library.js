export class LibraryStore {
  constructor(data) {
    this.books = data && data.books || []
    this.magazines = data && data.magazines || []
  }

  addItems(type, items = []) {
    if (type && items.length) {
      this[type] = items
    }
  }
}
