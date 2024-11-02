// src/components/AddAppointmentForm.js
import React, { useState } from 'react';
import { addAppointment } from './firebaseData';
import AvailableAppointments from './availableAppoinment';

const AddAppointmentForm = () => {
  const [appointmentData, setAppointmentData] = useState({ 
    doctorId: '', 
    patientId: '', 
    dateTime: '', 
    notes: '' 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addAppointment(appointmentData);
    setAppointmentData({ doctorId: '', patientId: '', dateTime: '', notes: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="doctorId" value={appointmentData.doctorId} onChange={handleInputChange} placeholder="Doctor ID" required />
      <input name="patientId" value={appointmentData.patientId} onChange={handleInputChange} placeholder="Patient ID" required />
      <input type="datetime-local" name="dateTime" value={appointmentData.dateTime} onChange={handleInputChange} required />
      <textarea name="notes" value={appointmentData.notes} onChange={handleInputChange} placeholder="Notes" />
      <button type="submit">Add Appointment</button>
    </form>
  );
};
<AvailableAppointments/>
export default AddAppointmentForm;
