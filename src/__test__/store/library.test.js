const { LibraryStore } = require('../../store/library');
const { booksData, magazinesData } = require('./mockData');

let libraryStore = null;

beforeAll(() => {
  libraryStore = new LibraryStore()
})

describe('Library', () => {
  test('add books', () => {
    libraryStore.addItems('book', booksData)

    expect(libraryStore.getItemsByType('book').length).toBe(booksData.length)
  })
  test('add magazines', () => {
    libraryStore.addItems('magazine', magazinesData)

    expect(libraryStore.getItemsByType('magazine').length).toBe(magazinesData.length)
  })
})
