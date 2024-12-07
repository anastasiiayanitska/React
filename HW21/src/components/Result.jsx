import React from "react";
import { useSelector } from "react-redux";
import { selectResult } from "../questionnaireSlice";
import styles from "./Result.module.css";

function Result() {
  const result = useSelector(selectResult);

  return <div className={styles.result}>{result && <p>{result}</p>}</div>;
}

export default Result;
