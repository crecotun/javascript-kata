import React, { useState } from 'react'
import { Provider } from 'mobx-react'
import { RootStore } from './store'
import { Library } from './components/Library/Library'
import { Search } from './components/Search/Search'
import { FilterByType } from 'types/library'

const store = new RootStore()

const App = () => {
	const [searchBy, setSearchType] = useState<FilterByType>('isbn')
	const [searchValue, setSearchValue] = useState('')

	return (
		<Provider {...store}>
			<Search
				searchBy={searchBy}
				setSearchType={setSearchType}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<Library filter={{ by: searchBy, value: searchValue }} />
		</Provider>
	)
}

export default App
