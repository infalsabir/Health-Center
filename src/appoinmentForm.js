// src/components/AppointmentForm.js
import React, { useState } from 'react';
import AvailableAppointments from './database/availableAppoinment';

function AppointmentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${name} on ${date}`);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Date</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Book Now</button>
    </form>
    <AvailableAppointments/>
  </div>
  );
   
}

export default AppointmentForm;

