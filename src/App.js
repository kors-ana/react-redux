import React from 'react';
import { Provider } from 'react-redux';

import  DataContainer from './containers/DataContainer';
import configureStore from './redux/configureStore';

const store = configureStore();

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <DataContainer />
      </Provider>
    </div>
  );
}

