import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';

import App from './App';
import { GlobalStyles } from './styles';
import { firebase } from 'lib/firebase.prod';

const FirebaseContext = createContext();

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
