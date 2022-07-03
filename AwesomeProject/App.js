import React from 'react';
import MainStack from './Navigate';
import {applyMiddleware, createStore} from 'redux';
import {photoReducer} from './src/reducers/photoReducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(photoReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
