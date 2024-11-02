
import React, { useState } from 'react';
import { addDoctorWithSchedule } from './firebaseData'; 

const AddDoctorForm = () => {
  const [doctorData, setDoctorData] = useState({ 
    name: '', 
    specialization: '', 
    contactInfo: { phone: '', email: '' }, 
    schedule: [] 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'contactInfo.phone' || name === 'contactInfo.email') {
      const [parentKey, childKey] = name.split('.');
      setDoctorData((prev) => ({
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [childKey]: value,
        },
      }));
    } else {
      setDoctorData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoctorWithSchedule(doctorData);
    setDoctorData({ name: '', specialization: '', contactInfo: { phone: '', email: '' }, schedule: [] }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={doctorData.name} onChange={handleInputChange} placeholder="Name" required />
      <input name="specialization" value={doctorData.specialization} onChange={handleInputChange} placeholder="Specialization" required />
      <input name="contactInfo.phone" value={doctorData.contactInfo.phone} onChange={handleInputChange} placeholder="Phone" required />
      <input name="contactInfo.email" value={doctorData.contactInfo.email} onChange={handleInputChange} placeholder="Email" required />
      <button type="submit">Add Doctor</button>
    </form>
  );
};

export default AddDoctorForm;

