import React from "react";

import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  currentTitle,
  setCurrentTitle,
  currentContact,
  setCurrentContact,
  currentDate,
  setCurrentDate,
  currentTime,
  setCurrentTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    /* callback function is passed via props for handling the form submission */
    <form onSubmit={handleSubmit}>
      {/* render ContactPicker component */}
      <ContactPicker contacts={contacts} onChange={(e) => setCurrentContact(e.target.value)} />

      <label>Title</label>
      <input type='text' value={currentTitle} onChange={(e) => setCurrentTitle(e.target.value)}></input>

      <label>Date</label>
      <input type='date' min={getTodayString} value={currentDate} onChange={(e) => setCurrentDate(e.target.value)}></input>

      <label>Time</label>
      <input type='time' value={currentTime} onChange={(e) => setCurrentTime(e.target.value)}></input>

      <label>Add Appointment</label>
      <input type='submit'></input>
    </form>

  );
};
