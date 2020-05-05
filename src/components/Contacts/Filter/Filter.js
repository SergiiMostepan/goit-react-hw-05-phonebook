import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <div className={styles.container}>
    <div> Find contacts by name </div>
    <input
      className={styles.inputFeld}
      type="text"
      name="filter"
      value={value}
      onChange={onChangeFilter}
      // placeholder="Type to filter tasks..."
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
