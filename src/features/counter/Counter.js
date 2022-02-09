import React from 'react';
import styles from './Counter.module.css';

export function Counter() {
  let count =0;
  const incrementValue =  0;

  return (
    <div>
      <div className={styles.row}>
        Remove User
        <button
          className={styles.button}
          aria-label="Decrement value"
        //  onClick={() => dispatch(decrement())}
        >
          -
        </button>
        
        Add User
        <button
          className={styles.button}
          aria-label="Increment value"
         // onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
