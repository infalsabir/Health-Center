// src/components/AddPatientForm.js
import React, { useState } from 'react';
import { addPatient } from './firebaseData'; 

const AddPatientForm = () => {
  const [patientData, setPatientData] = useState({ 
    name: '', 
    contactDetails: { phone: '', email: '' }, 
    medicalHistory: '' 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'contactDetails.phone' || name === 'contactDetails.email') {
      const [parentKey, childKey] = name.split('.');
      setPatientData((prev) => ({
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [childKey]: value,
        },
      }));
    } else {
      setPatientData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPatient(patientData);
    setPatientData({ name: '', contactDetails: { phone: '', email: '' }, medicalHistory: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={patientData.name} onChange={handleInputChange} placeholder="Name" required />
      <input name="contactDetails.phone" value={patientData.contactDetails.phone} onChange={handleInputChange} placeholder="Phone" required />
      <input name="contactDetails.email" value={patientData.contactDetails.email} onChange={handleInputChange} placeholder="Email" required />
      <textarea name="medicalHistory" value={patientData.medicalHistory} onChange={handleInputChange} placeholder="Medical History" required />
      <button type="submit">Add Appoinment</button>
    </form>
  );
};

export default AddPatientForm;
