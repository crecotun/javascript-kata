export class AuthorsStore {
  constructor(authors) {
    this.authors = authors || []
  }

  addData(authors = []) {
    if (authors.length) {
      this.authors = authors
    }
  }
}
