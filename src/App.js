// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [blockedSites, setBlockedSites] = useState([]);
  const [newSite, setNewSite] = useState('');

  const addSite = () => {
    if (newSite.trim() !== '') {
      setBlockedSites((prevSites) => [...prevSites, newSite.trim()]);
      setNewSite('');
    }
  };

  const removeSite = (site) => {
    setBlockedSites((prevSites) => prevSites.filter((s) => s !== site));
  };

  return (
    <div className="App">
      <h1>Website Blocker Dashboard</h1>
      <div>
        <input
          type="text"
          placeholder="Enter website to block"
          value={newSite}
          onChange={(e) => setNewSite(e.target.value)}
        />
        <button onClick={addSite}>Block</button>
      </div>
      <ul>
        {blockedSites.map((site) => (
          <li key={site}>
            {site}
            <button onClick={() => removeSite(site)}>Unblock</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

