import React, { useState } from 'react';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  const [userId, setUserId] = useState(1);

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <div className="App">
      <h1>Advanced React Component with Custom Hook</h1>
      <input
        type="number"
        value={userId}
        onChange={handleChange}
        min="1"
        max="10"
      />
      <UserDetails userId={userId} />
    </div>
  );
}

export default App;