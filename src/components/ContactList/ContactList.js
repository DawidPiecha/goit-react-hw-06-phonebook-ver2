import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterStatus } from '../../redux/selectors';
import { deleteContact } from '../../redux/actions';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filterStatus = useSelector(getFilterStatus);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterStatus)
  );

  return (
    <ul className={contacts.length ? css.contactList : css.emptyList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactList__item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.deleteButton}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
