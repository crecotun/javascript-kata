const { LibraryStore } = require('../../store/library')
const { booksData, magazinesData } = require('./mockData')

let libraryStore = null

beforeEach(() => {
	libraryStore = new LibraryStore()
})

describe('Library', () => {
	test('add books', () => {
		libraryStore.addItems('book', booksData)

		expect(libraryStore.getItemsByType('book').length).toBe(booksData.length)
	})
	test('add magazines', () => {
		libraryStore.addItems('magazine', magazinesData)

		expect(libraryStore.getItemsByType('magazine').length).toBe(
			magazinesData.length
		)
	})
	test('get by isbn', () => {
		// extract to beforeEach?
		libraryStore.addItems('book', booksData)
		libraryStore.addItems('magazine', magazinesData)

		expect(libraryStore.getItemByIsbn('2221-5548-8585').title).toBe(
			'Das Perfekte Dinner. Die besten Rezepte'
		)
	})
	test('get by email', () => {
		// extract to beforeEach?
		libraryStore.addItems('book', booksData)
		libraryStore.addItems('magazine', magazinesData)

		expect(
			libraryStore.getItemsByAuthorEmail('null-walter@echocat.org').length
		).toBe(6)
	})
})
