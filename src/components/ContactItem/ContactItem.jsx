import { HiTrash } from 'react-icons/hi';
const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        <HiTrash />
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
