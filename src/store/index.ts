import Papa from 'papaparse'

import { AuthorsStore } from './authors'
import { LibraryStore } from './library'

export class RootStore {
	authorsStore: AuthorsStore
	libraryStore: LibraryStore

	constructor() {
		this.authorsStore = new AuthorsStore()
		this.libraryStore = new LibraryStore()

		this.fetchData()
	}

	fetchData() {
		// move out of store
		Papa.parse('./data/authors.csv', {
			download: true,
			header: true,
			skipEmptyLines: true,
			complete: (result: any) => {
				if (result.data) {
					this.authorsStore.addData(result.data)
				}
			},
		})
		Papa.parse('./data/books.csv', {
			download: true,
			header: true,
			skipEmptyLines: true,
			complete: (result: any) => {
				if (result.data) {
					this.libraryStore.addItems('book', result.data)
				}
			},
		})
		Papa.parse('./data/magazines.csv', {
			download: true,
			header: true,
			skipEmptyLines: true,
			complete: (result: any) => {
				if (result.data) {
					this.libraryStore.addItems('magazine', result.data)
				}
			},
		})
	}
}
