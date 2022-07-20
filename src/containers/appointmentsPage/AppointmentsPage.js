import React, { useState } from "react";

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList"; 

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContact, setCurrentContact] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    props.addAppointment(currentTitle, currentContact, currentDate, currentTime);
    setCurrentTitle('');
    setCurrentContact('');
    setCurrentDate('');
    setCurrentTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={props.contacts}

          currentTitle={currentTitle}
          currentContact={currentContact}
          currentDate={currentDate}
          currentTime={currentTime}

          setCurrentTitle={setCurrentTitle}
          setCurrentContact={setCurrentContact}
          setCurrentDate={setCurrentDate}
          setCurrentTime={setCurrentTime}

          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={props.appointments}/>
      </section>
    </div>
  );
};
