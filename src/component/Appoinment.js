// src/pages/AppointmentManagement.js
import React, { useState } from 'react';
import './Appoinment.css'
import AvailableSlots from './AvailableSlots';

const doctors = [
  { id: 1, name: "Dr. Smith", schedule: ["2024-11-05T09:00:00", "2024-11-05T10:00:00"] },
  { id: 2, name: "Dr. Jones", schedule: ["2024-11-05T11:00:00", "2024-11-05T12:00:00"] },
];

function AppointmentManagement() {
  const [appointments, setAppointments] = useState([]);

  const bookAppointment = (slot) => {
    setAppointments((prev) => [...prev, slot]);
    const appointmentDate = new Date(slot);
    const reminderTime = appointmentDate.getTime() - 30 * 60 * 1000; // 30 minutes before
    const now = Date.now();
    if (reminderTime > now) {
      setTimeout(() => alert(`Reminder: You have an appointment on ${slot}`), reminderTime - now);
    }
  };

  const cancelAppointment = (slot) => {
    setAppointments((prev) => prev.filter((s) => s !== slot));
  };

  return (
    <div className="appointment-management-container">
      <h1>Appointment Management</h1>
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-slot">
          <AvailableSlots doctor={{ ...doctor, bookAppointment }} />
        </div>
      ))}
      <h2>Your Appointments</h2>
      <ul className="appointment-list">
        {appointments.map((appointment, index) => (
          <li key={index}>
            {new Date(appointment).toLocaleString()}
            <button onClick={() => cancelAppointment(appointment)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentManagement;
