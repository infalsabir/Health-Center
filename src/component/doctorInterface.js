// src/pages/DoctorInterface.js
import React, { useState } from 'react';


const DoctorInterface = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "John Doe", date: "2024-11-05T09:00:00" },
    { id: 2, patientName: "Jane Smith", date: "2024-11-05T10:00:00" },
  ]);

  const [schedule, setSchedule] = useState([
    { time: "09:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false }, // Example of a booked slot
  ]);

  return (
    <div className="doctor-interface-container">
      <h2>Doctor Interface</h2>
      <h3>Available Appointment Slots</h3>
      <div className="schedule">
        {schedule.map((slot, index) => (
          <div key={index} className={`slot ${slot.available ? 'available' : 'unavailable'}`}>
            {slot.time}
          </div>
        ))}
      </div>
      <h3>Upcoming Appointments</h3>
      <ul className="appointment-list">
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.patientName} - {new Date(appointment.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorInterface;
