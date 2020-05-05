import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children }) => (
  <div>
    <h2> Please leave feedback </h2> {children}
  </div>
);

export default Section;

Section.propTypes = {
  children: PropTypes.any,
};
