import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { ContactsForm } from './ContactsForm/ContactsForm';
import initialContacts from './contacts.json';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

// render > didMount > getItem > setState > update > render > didUpdate > setItem

export class App extends Component {
  state = {
    // contacts: initialContacts,
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      //Якщо в LS вже є збережені дані, то пишемо це в state
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    } else {
      //Якщо в LS ще нічого немає, то пишемо initialContacts в state
      this.setState({
        contacts: initialContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactsForm onAddContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
