// src/components/AvailableSlots.js
import React, { useState, useEffect } from 'react';
import { fetchDoctorsWithSlots } from '../database/firebaseData'; // Replace with your actual Firebase service path

const AvailableSlots = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    // Fetch doctors with their available slots
    const getDoctors = async () => {
      const doctorsData = await fetchDoctorsWithSlots();
      setDoctors(doctorsData);
    };
    getDoctors();
  }, []);

  return (
    <div>
      <h2>Available Slots</h2>
      <label>
        Select Doctor:
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option value="">--Choose a Doctor--</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name} - {doctor.specialization}
            </option>
          ))}
        </select>
      </label>

      {selectedDoctor && (
        <div>
          <h3>Available Slots for {doctors.find(d => d.id === selectedDoctor)?.name}</h3>
          <ul>
            {doctors
              .find((doctor) => doctor.id === selectedDoctor)
              ?.availableSlots.map((slot) => (
                <li key={slot.id}>
                  {`From ${new Date(slot.startTime).toLocaleString()} to ${new Date(slot.endTime).toLocaleString()}`}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvailableSlots;

