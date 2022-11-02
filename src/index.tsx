import React from 'react';
import { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import '@scss/index.scss';

const App: React.FC = require( '@components/App/App' ).default;

const renderApp = () => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.querySelector( '#root' ),
  );
};

if ( module && module.hot ) {
  module.hot.accept();
  renderApp();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
