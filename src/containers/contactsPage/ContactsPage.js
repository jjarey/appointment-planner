import React, { useState, useEffect } from "react";

// Import ContactForm and TileList
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

// To use props, pass in props as an argument in the function component
export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  // default contact data to an empty string
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');

  // track a duplicate name (should be false by default)
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if (!duplicate) {
      props.addContact(currentName, currentPhone, currentEmail);
      // set values back to defaults
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  // ^^^ To Do!

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {/* render ContactForm with the local state variables,
         their setter functions and handleSubmit callback function */}
        <ContactForm
          currentName={currentName}
          currentPhone={currentPhone}
          currentEmail={currentEmail}
          setCurrentName={setCurrentName}
          setCurrentPhone={setCurrentPhone}
          setCurrentEmail={setCurrentEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {/* render TileList with the contact array passed via props */}
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};