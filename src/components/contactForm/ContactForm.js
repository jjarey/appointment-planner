import React from "react";

export const ContactForm = ({
  // via props
  currentName,
  currentPhone,
  currentEmail,
  setCurrentName,
  setCurrentPhone,
  setCurrentEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} >
      <label>Name</label>
      <input type='text' value={currentName} onChange={(e) => setCurrentName(e.target.value)}></input>

      <label>Phone</label>
      <input type='tel' value={currentPhone} onChange={(e) => setCurrentPhone(e.target.value)}></input>

      <label>Email</label>
      <input type='email' value={currentEmail} onChange={(e) => setCurrentEmail(e.target.value)}></input>
      
      <input type='submit'></input>
    </form>
  );
};
