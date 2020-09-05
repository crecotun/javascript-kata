const { AuthorsStore } = require('../../store/authors')
const { authorsData } = require('./mockData')

let authorsStore = null

beforeEach(() => {
	authorsStore = new AuthorsStore()
})

describe('Authors', () => {
	test('add data to the store', () => {
		authorsStore.addData(authorsData)

		expect(authorsStore.authors).toEqual(authorsData)
	})
})
