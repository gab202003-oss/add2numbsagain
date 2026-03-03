"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const result = a !== "" && b !== "" ? parseFloat(a) + parseFloat(b) : null;

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.plus}>+</span>
          <h1 className={styles.title}>ADDER</h1>
        </div>
        <div className={styles.inputs}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>FIRST</label>
            <input
              className={styles.input}
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="0"
            />
          </div>
          <div className={styles.separator}>+</div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>SECOND</label>
            <input
              className={styles.input}
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="0"
            />
          </div>
        </div>
        <div className={styles.resultSection}>
          <div className={styles.equals}>=</div>
          <div className={`${styles.result} ${result !== null ? styles.active : ""}`}>
            {result !== null ? result : "—"}
          </div>
        </div>
      </div>
    </main>
  );
}
