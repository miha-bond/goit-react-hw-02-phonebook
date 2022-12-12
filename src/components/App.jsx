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

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      this.state.contact.find(
        contact => contact.name.toLowerCase() === name.toLowercase()
      )
    ) {
      alert(`${name} is already in your contact list`);
      return;
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contact],
    }));
  };

  deleteContact = deleteContactId => {
    this.setState(prevState => ({
      contact: prevState.contact.filter(
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
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
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
