import React from 'react';
import {Provider} from 'react-redux';

import store from '../reducers';
import Navigation from './Navigation';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
