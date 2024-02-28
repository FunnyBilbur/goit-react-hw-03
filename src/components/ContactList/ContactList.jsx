import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(item => (
        <li key={item.id}>
          <Contact data={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
