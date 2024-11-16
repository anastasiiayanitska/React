/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function Home() {
  const navigate = useNavigate();

  const goToArticles = () => {
    navigate('/articles');
  };

  return (
    <div>
      <h1>Добро пожаловать в блог</h1>
      <p>Здесь вы найдете интересные статьи.</p>
      <button onClick={goToArticles}>Перейти к статьям</button>
    </div>
  );
};

