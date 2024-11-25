import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div>
      <h1>Контакты</h1>
      <div className={styles.contactContent}>
        <section className={styles.contacts}>
          <div className={styles.contactInfo}>
            <ul>
              <li>Телефон: +4 (123) 456-78-90</li>
              <li>Email: example@gmail.com</li>
            </ul>
            <form className={styles.form}>
              <div className={styles.formInput}>
                <input type="email" placeholder="Ваш email" required />
                <input type="text" placeholder="Ваше имя" required />
              </div>
              <textarea placeholder="Ваше сообщение" required></textarea>
            </form>
          </div>
          <div className={styles.socialLinks}>
            <p>Найдите нас на:</p>
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/snapchat-logo.svg" alt="Snapchat" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Facebook.svg" alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/twitter-logo.svg" alt="X (Twitter)" />
            </a>
          </div>
        </section>
        <button type="submit">Отправить</button>
      </div>
    </div>
  );
};

export default Contacts;
