import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import Application from './Application/Application';
import Reducer from './Application/Reducer';

let store = createStore(Reducer, applyMiddleware(thunk));

let App = React.memo(function App(props) {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
});

export default App;
