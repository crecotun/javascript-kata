import React, { useState } from 'react'
import { Provider } from 'mobx-react'
import { RootStore } from './store'
import { Library } from './components/Library/Library'
import { Search } from './components/Search/Search'

const store = new RootStore()

const App = () => {
	const [searchBy, setSearchType] = useState('isbn')

	return (
		<Provider {...store}>
			<Search searchBy={searchBy} setSearchType={setSearchType} />
			<Library />
		</Provider>
	)
}

export default App
