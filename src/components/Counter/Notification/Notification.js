import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <Fragment>
    <h2> Statistics </h2>
    <div>
      <span> {message} </span>
    </div>
  </Fragment>
);
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
