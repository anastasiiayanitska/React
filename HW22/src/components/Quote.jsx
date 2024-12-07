import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomQuote } from "../quoteSlice";
import styles from "./Quote.module.css";

const Quote = () => {
  const dispatch = useDispatch();
  const { content, author, status, error } = useSelector(
    (state) => state.quote
  );

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div className={styles.quoteContainer}>
      {status === "loading" && <p>Загрузка...</p>}
      {status === "succeeded" && (
        <div className={styles.quote}>
          <p className={styles.content}>"{content}"</p>
          <p className={styles.author}>- {author}</p>
        </div>
      )}
      {status === "failed" && <p className={styles.error}>Ошибка: {error}</p>}
      <button onClick={handleNewQuote} className={styles.newQuoteButton}>
        Новая цитата
      </button>
    </div>
  );
};

export default Quote;
