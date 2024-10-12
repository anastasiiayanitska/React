import React, { useState } from "react";

export default function Answer({ onSubmit }) {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userAnswer);
    setUserAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="userAnswer"
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Your answer"
        required
      />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}
