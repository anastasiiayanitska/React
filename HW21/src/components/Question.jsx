import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion, selectQuestions } from "../questionnaireSlice";
import styles from "./Question.module.css";

function Question({ question }) {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const selectedAnswer = questions.find((q) => q.id === question.id)?.answer;

  const handleAnswer = (answer) => {
    dispatch(answerQuestion({ questionId: question.id, answer }));
  };

  return (
    <div className={styles.question}>
      <h3>{question.text}</h3>
      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswer(option)}
          className={`${styles.option} ${
            selectedAnswer === option ? styles.selected : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
