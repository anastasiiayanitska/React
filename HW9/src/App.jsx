/* eslint-disable no-unused-vars */

import React from "react";
import UserProvider from "./context/UserContext";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <UserProvider>
        <MainComponent />
      </UserProvider>
    </div>
  );
}

export default App;
