import { observable } from 'mobx'
import { LibraryItemType, LibraryItemRawType } from 'types/library'

export class LibraryStore {
	@observable items: LibraryItemType[] = []

	addItems(type: LibraryItemType['type'], items: LibraryItemRawType[] = []) {
		if (!type || !items.length) {
			return
		}

		items.forEach((item) => {
			this.items.push({
				...item,
				type,
				authors: item.authors.split(','),
			})
		})
	}

	getItemsByType(type: LibraryItemType['type']) {
		if (!type) {
			return []
		}

		return this.items.filter((item) => item.type === type)
	}

	getItems() {
		return this.items
	}

	getItemsByIsbn(isbn: string) {
		if (!isbn) {
			return this.getItems()
		}

		return this.getItems().filter((item) => item.isbn === isbn)
	}

	getItemsByAuthorEmail(email: string) {
		if (!email) {
			return this.getItems()
		}

		return this.getItems().filter((item) => item.authors.includes(email))
	}
}
