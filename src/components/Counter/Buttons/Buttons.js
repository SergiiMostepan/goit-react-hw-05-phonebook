import React from 'react';
import styles from './Buttons.module.css';

const Buttons = ({ type, onIncrementStatistick }) => (
  <div className={styles.buttonSection}>
    <button type={type} name="good" onClick={onIncrementStatistick}>
      Goog
    </button>
    <button type={type} name="neutral" onClick={onIncrementStatistick}>
      Neutral
    </button>
    <button type={type} name="bad" onClick={onIncrementStatistick}>
      Bad
    </button>
  </div>
);

export default Buttons;
