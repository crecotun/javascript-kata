import React from 'react'

export type SearchPropsType = {
	searchBy: string
	setSearchType(type: string): void
}

const Search: React.FC<SearchPropsType> = ({ searchBy, setSearchType }) => {
	function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchType(e.target.value)
	}

	return (
		<form className={'search'}>
			<fieldset>
				<legend>Search by:</legend>
				<label>
					ISBN{' '}
					<input
						type={'radio'}
						name="search-by"
						value="isbn"
						checked={searchBy === 'isbn'}
						onChange={handleRadioChange}
					/>
				</label>
				<label>
					Author email{' '}
					<input
						type={'radio'}
						name="search-by"
						value="email"
						checked={searchBy === 'email'}
						onChange={handleRadioChange}
					/>
				</label>
			</fieldset>

			<input type="text" />
		</form>
	)
}

export { Search }
