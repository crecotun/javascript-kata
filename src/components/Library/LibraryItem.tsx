import React from 'react'
import { LibraryItemType } from 'types/library'
import { inject } from 'utils/mobx'

export type LibraryItemPropType = {
	title: string
	isbn: string
	authors: string[]
}

const LibraryItemComponent: React.FC<LibraryItemPropType> = ({
	title,
	isbn,
	authors,
}) => {
	return (
		<article className={'libraryItem'}>
			title: {title} <br />
			isbn: {isbn}
			<br />
			author:
			<ul>
				{authors.map((author) => (
					<li key={author}>{author}</li>
				))}
			</ul>
		</article>
	)
}

export const LibraryItem = inject(
	({ authorsStore }, { authors }: LibraryItemType) => {
		return {
			authors: authors
				.map((author) => {
					const item = authorsStore.getAuthor(author)
					if (!item) {
						return undefined
					}
					return `${item.firstname} ${item.lastname}`
				})
				.filter(Boolean),
		}
	}
)(LibraryItemComponent)
