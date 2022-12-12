import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => {
      return (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            {' '}
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

export default ContactList;

// {contact.map(({ name, number, id }) => (
//   <ContactItem
//     key={id}
//     name={name}
//     number={number}
//     onDeleteContact={onDeleteContact}
//   />
// ))}
