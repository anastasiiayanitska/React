import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "Ваш любимый цвет?",
      options: ["Синий", "Красный"],
      answer: null,
    },
    {
      id: 2,
      text: "Ваш любимый вид спорта?",
      options: ["Футбол", "Баскетбол"],
      answer: null,
    },
    {
      id: 3,
      text: "Ваш любимый вид отдыха?",
      options: ["Море", "Горы"],
      answer: null,
    },
  ],
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion(state, action) {
      const { questionId, answer } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) question.answer = answer;
    },
    submitAnswers(state) {
      state.result = state.questions.every((q) => q.answer !== null)
        ? "Спасибо за заполнение анкеты!"
        : "Пожалуйста, ответьте на все вопросы.";
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export const selectQuestions = (state) => state.questionnaire.questions;
export const selectResult = (state) => state.questionnaire.result;
export default questionnaireSlice.reducer;
