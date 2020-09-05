import { observable } from 'mobx'
import { AuthorType } from 'types/author'

export class AuthorsStore {
	@observable authors: AuthorType[] = []

	addData(authors: AuthorType[] = []) {
		if (authors.length) {
			this.authors = authors
		}
	}

	getAuthor = (email: string): AuthorType | undefined => {
		if (!email) {
			return
		}

		return this.authors.find((author) => author.email === email)
	}
}
