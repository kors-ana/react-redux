import React from 'react';
import { Provider } from 'react-redux';

import Page from './components/Page';
import store from './redux/configureStore';

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Page />
      </Provider>
    </div>
  );
}