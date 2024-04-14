import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <MessengerCustomerChat
    pageId='286761327848379'
    appId='953227036176112'
  />
    <App />
  </React.StrictMode>
);


