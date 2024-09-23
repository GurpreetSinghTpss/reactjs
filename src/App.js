import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      {
        users && users.map(user => <p key={user.id}>{user.name} - {user.email}</p>)
      }
    </div>
  );
}

export default App;