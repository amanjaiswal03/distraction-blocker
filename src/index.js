// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

chrome.storage.sync.get("blockedSites", (data) => {
  const blockedSites = data.blockedSites || [];
  
  ReactDOM.render(
    <React.StrictMode>
      <App blockedSites={blockedSites} />
    </React.StrictMode>,
    document.getElementById('root')
  );
});

reportWebVitals();
