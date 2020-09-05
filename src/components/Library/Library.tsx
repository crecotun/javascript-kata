import React from 'react'
import { toJS } from 'mobx'
import { LibraryItemType } from 'types/library'
import { LibraryItem } from './LibraryItem'
import { inject } from 'utils/mobx'

type LibraryPropsType = {
	items: LibraryItemType[]
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

export const Library = inject(({ libraryStore }) => {
	return {
		items: toJS(libraryStore.items).sort(
			(a: LibraryItemType, b: LibraryItemType) => {
				return a.title.localeCompare(b.title)
			}
		),
	}
})(LibraryComponent)
