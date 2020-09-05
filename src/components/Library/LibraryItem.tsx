import React from 'react';
import { LibraryItemType } from 'types/library';

const LibraryItem: React.FC<LibraryItemType> = ({ title, isbn, authors }) => {
  return (
    <div key={isbn} className={'libraryItem'}>
      title: {title} <br />
      isbn: {isbn}<br />
      author: {authors}<br />
    </div>
  )
}

export { LibraryItem }
