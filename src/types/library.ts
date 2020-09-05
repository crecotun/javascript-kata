export type LibraryItemRawType = LibraryItemType & {
	authors: string
}

export type LibraryItemType = {
	type: 'book' | 'magazine'
	title: string
	authors: string[]
	isbn: string
	publishedAt?: string
}
