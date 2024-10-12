import React, { useState } from "react";
import Answer from "./Answer.jsx";

export default function MathQuiz() {
  const [score, setScore] = useState(0);
  const [a, setA] = useState(Math.floor(Math.random() * 10));
  const [b, setB] = useState(Math.floor(Math.random() * 10));

  function updatePoints(userAnswer) {
    const correctAnswer = a + b;
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }

    setA(Math.floor(Math.random() * 10));
    setB(Math.floor(Math.random() * 10));
  }

  return (
    <div className="math_quiz">
      <p>
        What is {a} + {b}?
      </p>
      <p>Score: {score}</p>
      <Answer onSubmit={updatePoints} />
    </div>
  );
}
