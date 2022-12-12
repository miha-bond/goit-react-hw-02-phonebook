import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './ContactFilter/ContactFilter';
import ContactList from './ContactList/ContactList';
import React from 'react';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = deleteContactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== deleteContactId
      ),
    }));
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const loweredFilter = this.state.filter.toLowerCase();

    const filterContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(loweredFilter);
    });

    return (
      <div style={{ padding: '20px', marginLeft: '15px' }}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
