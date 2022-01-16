import React from 'react';
import Store from './Store';
import ReactDOM from 'react-dom';
import './styling/index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <Store>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Store>,
  document.getElementById('root'),
);
