import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './styles/global';

import { NavBar } from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <NavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);