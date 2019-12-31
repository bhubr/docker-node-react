import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const fetchData = async () => fetch('/api/')
      .then(res => res.json())
      .then(({ message }) => setMessage(message));
    fetchData();
  }, [message]);
  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;
