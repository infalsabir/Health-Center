
import React, { useState } from 'react';


const doctors = [
  { id: 1, name: "Dr. Smith", schedule: ["2024-11-05T09:00:00", "2024-11-05T10:00:00"] },
  { id: 2, name: "Dr. Jones", schedule: ["2024-11-05T11:00:00", "2024-11-05T12:00:00"] },
];

const PatientInterface = () => {
  const [appointments, setAppointments] = useState([]);

  const bookAppointment = (slot) => {
    setAppointments((prev) => [...prev, slot]);
    alert(`Appointment booked for ${new Date(slot).toLocaleString()}`);
  };

  return (
    <div className="patient-interface-container">
      <h2>Patient Interface</h2>
      <h3>Available Doctors</h3>
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <h4>{doctor.name}</h4>
          <div className="available-slots">
            {doctor.schedule.map((slot, index) => (
              <button key={index} onClick={() => bookAppointment(slot)}>
                {new Date(slot).toLocaleString()}
              </button>
            ))}
          </div>
        </div>
      ))}
      <h3>Your Appointments</h3>
      <ul className="appointment-list">
        {appointments.map((appointment, index) => (
          <li key={index}>
            {new Date(appointment).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientInterface;
