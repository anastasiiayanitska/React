/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';

export default function Article(){
  const { id } = useParams();
  const navigate = useNavigate();
  const goBackToArticles = () => {
    navigate('/articles');
  };

  return (
    <div>
      <h1>Статья {id}</h1>
      <p>Это содержимое статьи с идентификатором {id}.</p>
      <button onClick={goBackToArticles}>Вернуться к статьям</button>
    </div>
  );
};

