import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./User";
import UserForm from "./UserForm";
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="form">
        <User />
        <UserForm />
      </div>
    </Provider>
  );
};

export default App;