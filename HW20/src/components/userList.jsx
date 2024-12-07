import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../userSlice";

function UserList() {
  const users = useSelector(selectUsers);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
