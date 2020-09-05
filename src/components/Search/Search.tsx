import React from 'react'
import PropTypes from 'prop-types'

const Search = () => {
	return (
		<form className={'search'}>
			Search by: <br />
			<label>
				ISBN <input type={'radio'} name="search-by" />
			</label>
			<label>
				Author email <input type={'radio'} name="search-by" />
			</label>
			<div>
				<input type="text" />
			</div>
		</form>
	)
}

Search.propTypes = {
	title: PropTypes.string,
	isbn: PropTypes.string,
	authors: PropTypes.array,
}

export { Search }
