import React from 'react'
import { toJS } from 'mobx'
import { LibraryItemType, FilterByType } from 'types/library'
import { LibraryItem } from './LibraryItem'
import { inject } from 'utils/mobx'

type LibraryPropsType = {
	items: LibraryItemType[]
	filter: {
		by: FilterByType
		value: string
	}
}

export const LibraryComponent: React.FC<LibraryPropsType> = ({ items }) => {
	return (
		<div>
			{items.map((item) => (
				<LibraryItem key={item.isbn} {...item} />
			))}
		</div>
	)
}

export const Library = inject(
	({ libraryStore }, { filter }: LibraryPropsType) => {
		let result: LibraryItemType[] = []

		switch (filter.by) {
			case 'isbn':
				result = libraryStore.getItemsByIsbn(filter.value)
				break

			case 'email':
				result = libraryStore.getItemsByAuthorEmail(filter.value)
				break
		}

		return {
			items: toJS(result).sort((a: LibraryItemType, b: LibraryItemType) => {
				return a.title.localeCompare(b.title)
			}),
		}
	}
)(LibraryComponent)
