import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contact}>
      <div>
        <div className={css.info}>
          <IoIosContact />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.info}>
          <FaPhoneAlt />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button className={css.submitButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
