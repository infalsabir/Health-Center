// src/dataManagement.js
import { addDoctorWithSchedule, addPatient, addAppointment } from './firebaseData';

export const addInitialData = async () => {
  const doctorData = {
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    contactInfo: "contact@example.com"
  };

  const scheduleSlots = [
    { startTime: new Date(), endTime: new Date(Date.now() + 3600000), available: true },
    { startTime: new Date(Date.now() + 7200000), endTime: new Date(Date.now() + 10800000), available: false }
  ];

  const patientData = {
    name: "Alice Smith",
    contactDetails: "alice@example.com",
    medicalHistory: "Previous surgery in 2018"
  };

  const appointmentData = {
    doctorId: "doctorId_1", // Replace with actual doctor ID
    patientId: "patientId_1", // Replace with actual patient ID
    dateTime: new Date(),
    notes: "Follow up appointment"
  };

  await addDoctorWithSchedule(doctorData, scheduleSlots);
  await addPatient(patientData);
  await addAppointment(appointmentData);
};
