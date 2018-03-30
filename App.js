import React from 'react';
import { Provider } from 'react-redux';
import StorybookUI from './storybook';

import store from './src/store'; // Import the store
import Main from './src/controllers/main'; // Import the component file

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

// export default App;
export default StorybookUI;
