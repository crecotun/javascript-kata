import React from 'react';
import { Provider } from 'mobx-react';
import { RootStore } from './store'
import Library from './components/Library/Library'

const store = new RootStore()

const App = () => {
  return (<Provider store={ store }>
    <div>
      <Library />
    </div>
  </Provider>)
};

export default App;
