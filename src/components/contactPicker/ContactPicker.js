import React from "react";

// Receive props
export const ContactPicker = (props) => {

  // console.log(props)

  const names = props.contacts.map((contact, index) => {
    return <option key={index} value={contact.name}>{contact.name}</option>
  });

  return (
    
    <form>
      <label>Choose a contact:</label>
      {/* Render a select element with the onChange attribute set to the callback passed in via props */}
      <select onChange={props.onChange}>
        {/* Have a default first option element that indicates no contact is selected */}
        <option key='default' value='--' selected='selected'>--</option>
        {/* Add option elements using the values from the array passed in via props */}
        {names}
      </select>
    </form>

  );
};
