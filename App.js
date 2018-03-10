import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store'; // Import the store
import Home from './src/views/home'; // Import the component file

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
