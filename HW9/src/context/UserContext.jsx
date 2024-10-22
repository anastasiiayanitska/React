/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";
import { set } from "react-hook-form";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userName, setUserName] = useState(null);
  const [userSecondName, setSecondName] = useState(null);

  function logIn(name, secondName) {
    setUserName(name);
    setSecondName(secondName);
  }

  function logOut() {
    setUserName(null);
    setSecondName(null);
  }

  return (
    <UserContext.Provider
      value={{
        userName,
        userSecondName,
        logIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
