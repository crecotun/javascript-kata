import React from 'react';
import { inject } from 'mobx-react'
import { toJS } from 'mobx'
import PropTypes from 'prop-types'
import { LibraryItem } from './LibraryItem';

const Library = ({ items }) => {
  return <div>{items.map(item => LibraryItem(item))}</div>
}

Library.propTypes = {
  items: PropTypes.any
}

export default inject(({ store: { libraryStore } }) => {
  return {
    items: toJS(libraryStore.items).sort((a, b) => {
      return a.title.localeCompare(b.title);
    })
  }
})(Library)
