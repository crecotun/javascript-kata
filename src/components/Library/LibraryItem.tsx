import React from 'react';
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

export { LibraryItem }
