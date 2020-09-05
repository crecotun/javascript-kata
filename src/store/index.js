import { AuthorsStore } from './authors'
import { LibraryStore } from './library'

export class RootStore {
  constructor() {
    this.authorsStore = new AuthorsStore()
    this.libraryStore = new LibraryStore()
  }

  fetchData() {

  }
}
