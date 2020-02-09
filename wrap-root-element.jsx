import React from 'react';
import { Provider } from 'react-redux';
import store from './src/state/store';

// eslint-disable-next-line react/prop-types
const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

export default wrapRootElement;
