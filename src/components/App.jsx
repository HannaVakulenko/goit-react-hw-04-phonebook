import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { ContactsForm } from './ContactsForm/ContactsForm';
import initialContacts from './contacts.json';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

// render > didMount > getItem > setState > update > render > didUpdate > setItem

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    //Якщо в LS вже є збережені дані, то пишемо це в state
    return JSON.parse(savedContacts);
  } else {
    //Якщо в LS ще нічого немає, то пишемо initialContacts в state
    return initialContacts;
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevState => [newContact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <Layout>
      <Section title="Phonebook">
        <ContactsForm onAddContact={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
