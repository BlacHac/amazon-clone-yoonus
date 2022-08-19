import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Practice from './practice/Practice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Practice />
);

/*
<React.StrictMode>
    <App />
    <Practice />
</React.StrictMode>
*/