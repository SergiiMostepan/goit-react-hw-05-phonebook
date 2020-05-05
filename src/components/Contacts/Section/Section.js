import React, { Fragment } from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ children }) => (
  <Fragment>
    <div className={styles.bodycontainet}>
      <div className={styles.container}> {children} </div>
    </div>
  </Fragment>
);

Section.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Section;
