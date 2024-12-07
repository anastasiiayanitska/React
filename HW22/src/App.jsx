import React from "react";
import Quote from "./components/Quote";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">Случайные цитаты</h1>
      <Quote />
    </div>
  );
}

export default App;
