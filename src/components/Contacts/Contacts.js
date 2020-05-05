import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Section from './Section/Section';
import InputForm from './InputForm/InputForm';
import shortid from 'shortid';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import localStorageLoader from '../../utils/localStorage';
import HeaderTransition from './transitions/PhonebookHeader.module.css';
import Notify from '../../utils/Notification';
import NotifyTransition from './transitions/Notify.module.css';
import FilterTransition from './transitions/Filter.module.css';
import styles from './Contacts.module.css';

const taskFilte = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.userName.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class Contacts extends Component {
  state = {
    contacts: [],
    filter: '',
    isLoaded: false,
    isContactExist: false,
  };

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
    const contactsFromLS = localStorageLoader.load('contacts');
    if (contactsFromLS) {
      this.setState({
        contacts: contactsFromLS,
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorageLoader.save('contacts', this.state.contacts);
  }

  addContacts = newContacts => {
    if (
      this.state.contacts.find(
        item =>
          item.userName.toLowerCase() === newContacts.userName.toLowerCase(),
      )
    ) {
      this.setState({
        isContactExist: true,
      });
      setTimeout(
        () =>
          this.setState({
            isContactExist: false,
          }),
        1000,
      );

      return;
    }

    const contactToAdd = {
      ...newContacts,
      id: shortid.generate(),
    };
    this.setState(state => ({
      contacts: [...state.contacts, contactToAdd],
    }));
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilte = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const filteredTasks = taskFilte(this.state.contacts, this.state.filter);
    return (
      <Section>
        <CSSTransition
          in={this.state.isContactExist}
          timeout={250}
          classNames={NotifyTransition}
          unmountOnExit
        >
          <Notify />
        </CSSTransition>
        <CSSTransition
          in={this.state.isLoaded}
          timeout={500}
          classNames={HeaderTransition}
          unmountOnExit
        >
          <h1 className={styles.phoneBookHeader}> Phonebook </h1>
        </CSSTransition>
        <InputForm onAddContacts={this.addContacts}> </InputForm>
        {/* <h2> Contacts </h2> */}
        <CSSTransition
          in={this.state.contacts.length >= 2}
          timeout={250}
          classNames={FilterTransition}
          unmountOnExit
        >
          <Filter value={this.state.filter} onChangeFilter={this.changeFilte} />
        </CSSTransition>
        <ContactList
          contacts={
            this.state.contacts.length >= 2
              ? filteredTasks
              : this.state.contacts
          }
          ondeleteContact={this.deleteContact}
        ></ContactList>
      </Section>
    );
  }
}
