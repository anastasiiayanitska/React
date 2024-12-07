import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectQuestions,
  submitAnswers,
  selectResult,
} from "./questionnaireSlice";
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css";
function App() {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const result = useSelector(selectResult);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className="app">
      <h1>Анкета</h1>
      <div>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
      <button onClick={handleSubmit} className="submitButton">
        Отправить ответы
      </button>
      <Result />
      {result && (
        <div className="summary">
          <h3>Ваши ответы:</h3>
          <ul>
            {questions.map((q) => (
              <li key={q.id}>
                {q.text}: <strong>{q.answer || "Не ответил"}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
