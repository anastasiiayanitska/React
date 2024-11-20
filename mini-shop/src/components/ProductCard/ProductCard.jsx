import React from "react";

import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.Wrapper}>
      <div>
        <img src={product.image} alt={product.name} />
        <span>{product.name}</span>
      </div>
      <div className={styles.CardBottom}>
        <div>{product.price}</div>
        <button className={styles.Button}></button>
      </div>
    </div>
  );
}
