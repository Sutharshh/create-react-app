import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = async () => {
    await fetch("http://backend:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });
    fetchUsers();
  };

  const fetchUsers = async () => {
    const res = await fetch("http://backend:5000/users");
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div>
      <h2>User Management App</h2>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={addUser}>Add User</button>
      <button onClick={fetchUsers}>Get Users</button>

      <ul>
        {users.map((u, i) => <li key={i}>{u.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
