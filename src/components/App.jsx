import './App.css';
import { useState, useEffect } from 'react';
import initialPhoneBook from './phonebook.json';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';

const initialObj = [];

export default function App() {
  // const [contacts, setContacts] = useState(initialPhoneBook);
  const [contacts, setContacts] = useState(() => {
    const contactList = localStorage.getItem('contacts');
    console.log(contactList == null);
    if (contactList !== null) {
      return JSON.parse(contactList);
    }
    return initialObj;
  });

  const [filter, setFilter] = useState('');
  const showContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = taskID => {
    setContacts(prev => {
      return prev.filter(task => task.id !== taskID);
    });
  };

  const onAdd = newObj => {
    setContacts(prev => {
      return [...prev, newObj];
    });
  };

  //onUpdate value - update localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={onAdd}></ContactForm>
      <SearchBox value={filter} onFilter={setFilter}></SearchBox>
      <ContactList contacts={showContacts} onDelete={handleDelete}></ContactList>
    </div>
  );
}
