// src/components/AvailableAppointments.js
import React, { useState, useEffect } from 'react';
import mockDoctors from './mockDoctors'; 

const AvailableAppointments = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Instead of fetching from a service, use mock data for testing
    setDoctors(mockDoctors);
  }, []);

  return (
    <div>
      <h2>Available Appointments</h2>
      {doctors.length === 0 ? (
        <p>No doctors available at the moment.</p>
      ) : (
        doctors.map(doctor => (
          <div key={doctor.id}>
            <h3>{doctor.name} - {doctor.specialization}</h3>
            {doctor.availableSlots.length > 0 ? (
              <ul>
                {doctor.availableSlots.map(slot => (
                  <li key={slot.id}>
                    {`From ${new Date(slot.startTime).toLocaleString()} to ${new Date(slot.endTime).toLocaleString()}`}
                    
                  </li>
                ))}
              </ul>
            ) : (
              <p>No available slots</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AvailableAppointments;
