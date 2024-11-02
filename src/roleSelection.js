
import React, { useState } from 'react';
import AddPatientForm from './database/addPatient';
import AddAppointmentForm from './database/addAppoinment';
import AvailableAppointments from './database/availableAppoinment';
const RoleSelection = () => {
  const [userRole, setUserRole] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleRoleChange = (event) => {
    setUserRole(event.target.value);
    setShowForm(true); 
  };

  return (
    <div>
      <h2>Select Your Role</h2>
      <select onChange={handleRoleChange} value={userRole}>
        <option value="">Select Role</option>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>

      {showForm && userRole === 'patient' && (
        <>
          <AvailableAppointments /> {/* Show available appointments */}
          <AddPatientForm />
        </>
      )}
      {showForm && userRole === 'doctor' && <AddAppointmentForm />}
    </div>
  );
};

export default RoleSelection;
