import React from 'react'
import { inject } from 'mobx-react'
import { toJS } from 'mobx'
import {LibraryItemType} from 'types/library'
import {LibraryItem} from './LibraryItem'

type LibraryPropsType = {
  items: LibraryItemType[]
}

export const LibraryComponent: React.FC<LibraryPropsType> = ({items}) => {
  return (<div>{items.map(item => LibraryItem(item))}</div>)
}

export const Library = inject(({ store: { libraryStore } }) => {
  return {
    items: toJS(libraryStore.items).sort((a: LibraryItemType, b: LibraryItemType) => {
      return a.title.localeCompare(b.title);
    })
  }
})(LibraryComponent)
