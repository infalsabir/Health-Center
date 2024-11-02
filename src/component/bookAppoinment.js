// src/components/BookAppointment.js
import React, { useState, useEffect } from 'react';
import { fetchDoctorsWithSlots, addAppointment,  } from '../database/firebaseData';

const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    // Fetch available slots for all doctors
    const loadDoctors = async () => {
      const data = await fetchDoctorsWithSlots();
      setDoctors(data);
    };
    loadDoctors();
  }, []);

  const handleBookAppointment = async () => {
    if (selectedDoctor && selectedSlot) {
      const appointmentData = {
        doctorId: selectedDoctor,
        patientId: 'patientId_1', 
        dateTime: selectedSlot.startTime,
        notes: "Patient appointment",
      };
      await addAppointment(appointmentData);
      alert('Appointment booked successfully');
     
    } else {
      alert('Please select a doctor and an available slot');
    }
  };

  const handleCancelAppointment = async () => {
    if (selectedDoctor && selectedSlot) {
      await (selectedDoctor, selectedSlot.id);
      alert('Appointment canceled');
      
    } else {
      alert('Please select a doctor and an appointment to cancel');
    }
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
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
          <h3>Available Slots</h3>
          <ul>
            {doctors
              .find((doctor) => doctor.id === selectedDoctor)
              ?.availableSlots.map((slot) => (
                <li key={slot.id}>
                  <input
                    type="radio"
                    name="slot"
                    value={slot.id}
                    onChange={() => setSelectedSlot(slot)}
                  />
                  {`From ${new Date(slot.startTime).toLocaleString()} to ${new Date(slot.endTime).toLocaleString()}`}
                </li>
              ))}
          </ul>
          <button onClick={handleBookAppointment}>Book Appointment</button> <br></br>
          <br></br>
          <button onClick={handleCancelAppointment}>Cancel Appointment</button>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
