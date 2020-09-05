const { LibraryStore } = require('../../store/library');
const { booksData, magazinesData } = require('./mockData');

let libraryStore = null;

beforeAll(() => {
  libraryStore = new LibraryStore()
})

describe('Library', () => {
  test('add books', () => {
    libraryStore.addItems('books', booksData)

    expect(libraryStore.books).toEqual(booksData)
  })
  test('add magazines', () => {
    libraryStore.addItems('magazines', magazinesData)

    expect(libraryStore.magazines).toEqual(magazinesData)
  })
})
