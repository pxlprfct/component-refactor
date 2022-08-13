import React from "react";

import styles from "./after.module.css";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className={styles.grid}>
      <p className={styles.header}>Clicker Count {count}</p>

      <div className={styles.buttons}>
        <button onClick={() => setCount((state) => (state += 1))}>
          Add one
        </button>
        <button onClick={() => setCount((state) => (state -= 1))}>
          Reduce by one
        </button>
      </div>
    </div>
  );
};
