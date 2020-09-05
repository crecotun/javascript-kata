import React from 'react';
import { inject, PropTypes } from 'mobx-react'

const Library = ({ items }) => {
  console.log(items)
  return <div>123123</div>
}

Library.propTypes = {
  items: PropTypes.any
}

export default inject(({ libraryStore }) => {
  console.log(libraryStore)
  return {
    items: libraryStore.items
  }
})(Library)
