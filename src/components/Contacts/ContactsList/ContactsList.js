import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactTransition from '../transitions/Contacts.module.css';
import styles from './Contactlist.module.css';

const ContactList = ({ contacts, ondeleteContact }) =>
  contacts.length > 0 ? (
    <TransitionGroup component="ul" className={styles.continer}>
      {contacts.map(({ userName, userPhone, id }) => (
        <CSSTransition key={id} timeout={250} classNames={ContactTransition}>
          <li className={styles.contact}>
            <div className={styles.userData}>
              <div>{userName}</div> <div>{userPhone}</div>
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={() => ondeleteContact(id)}
            >
              <span>&#215;</span>
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  ) : (
    <h3> You don `t have any contacts</h3>
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      userName: PropTypes.string.isRequired,
      userPhone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  ondeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
