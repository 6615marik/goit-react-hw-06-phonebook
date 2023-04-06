// import React, { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Form/Contacts';
import { Filtr } from './Form/Filtr';
// import Notiflix from 'notiflix';
// import { nanoid } from 'nanoid';

export const App = () => {
  // const [filtr, SetFiltr] = useState('');
  // const [contacts, SetContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //       { id: '1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: '2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: '3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: '4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  //   );
  // });

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onFormData = data => {
  //   console.log(data);

  //   if (contacts.find(contact => contact.name === data.name)) {
  //     alert(`${data.name} is already in contacts`);
  //     return;
  //   }
  //   const newContact = {
  //     id: nanoid(),
  //     ...data,
  //   };
  //   SetContacts(contacts => {
  //     return [...contacts, newContact];
  //   });
  // };

  // const onFiltrData = e => {
  //   const { value } = e.target;
  //   SetFiltr(value);
  // };

  // const onFilterContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filtr.toLowerCase())
  //   );
  // };
  // const onRemoveContact = id =>
  //   SetContacts(contacts => contacts.filter(contact => contact.id !== id));

  return (
    <>
      <Form />
      <Filtr />
      <Contacts />
    </>
  );
};
