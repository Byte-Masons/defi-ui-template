import React from 'react';
import Store from './Store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <Store>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Store>,
  document.getElementById('root')
);