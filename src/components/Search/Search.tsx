import React from 'react'
import { FilterByType } from 'types/library'

export type SearchPropsType = {
	searchBy: FilterByType
	setSearchType(type: FilterByType): void
	searchValue: string
	setSearchValue(type: string): void
}

const Search: React.FC<SearchPropsType> = ({
	searchBy,
	setSearchType,
	searchValue,
	setSearchValue,
}) => {
	function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchType(e.target.value as FilterByType)
	}
	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchValue(e.target.value)
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

			<input
				type="text"
				defaultValue={searchValue}
				onChange={handleInputChange}
			/>
		</form>
	)
}

export { Search }
