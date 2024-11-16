/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';
import Home from './components/Home';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import "./style.css";

export default function App(){
  return(
  <div>
    <nav>
      <NavLink className="link" to="/">Главная</NavLink> | <NavLink className="link" to="/articles">Статьи</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticlesList />} />
      <Route path="/articles/:id" element={<Article />} />
    </Routes>
  </div>
);
}
