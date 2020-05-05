import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, posFeedback }) => (
  <Fragment>
    <h2> Statistics </h2>
    <ul className={styles.satisticSection}>
      <li> Good: {good} </li> <li> Neutral: {neutral} </li>
      <li> Bad: {bad} </li> <li> Total: {total} </li>
      <li> Positive Feedback: {posFeedback} % </li>
    </ul>
  </Fragment>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  posFeedback: PropTypes.number.isRequired,
};

export default Statistics;
