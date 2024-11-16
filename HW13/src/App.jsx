import React from "react";
import Filter from "./components/Filter";
import UserList from "./components/UserList";


export default function App() {
  return (
    <div>
      <h1>User Filter</h1>
      <Filter />
      <UserList />
    </div>
  );
}
