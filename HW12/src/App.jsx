import React, { useState } from "react";
import "./App.css";
import ValueDisplay from "./ValueDisplay";

export default function App() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Value Tracker</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <ValueDisplay value={value} />
    </div>
  );
}
