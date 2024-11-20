import React, { useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import './App.css';
const App = () => {
 
  const userList = [
    { id: 1, name: 'Anastasiia' },
    { id: 2, name: 'Vadym' },
    { id: 3, name: 'Maksym' },
    { id: 4, name: 'Anna' },
      ];


  const [filter, setFilter] = useState('');

  const filterUsers = useCallback(
    (filterText) => {
      return userList.filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
    },
    [userList]
  );

  
  const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Filter users"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;