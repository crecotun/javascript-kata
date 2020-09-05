import React from 'react';
import { inject } from 'mobx-react'
import { toJS } from 'mobx'
import PropTypes from 'prop-types'

const LibraryItem = ({ title, isbn, authors }) => {
  return (
    <div key={isbn} className={'libraryItem'}>
      title: {title} <br />
      isbn: {isbn}<br />
      author: {authors}<br />
    </div>
  )
}

LibraryItem.propTypes = {
  title: PropTypes.string,
  isbn: PropTypes.string,
  authors: PropTypes.array
}

const Library = ({ items }) => {
  return <div>{items.map(item => LibraryItem(item))}</div>
}

Library.propTypes = {
  items: PropTypes.any
}

export default inject(({ store: { libraryStore } }) => {
  return {
    items: toJS(libraryStore.items)
  }
})(Library)
