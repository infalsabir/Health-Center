// src/firebaseService.js

import { db } from '../firebase'; 
import { collection, addDoc, getDocs } from '../firebase';

// Function to add a patient
export const addPatient = async (patientData) => {
  try {
    const docRef = await addDoc(collection(db, 'patients'), patientData);
    console.log('Patient added with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding patient: ', e);
  }
};


export const fetchDoctorsWithSlots = async () => {
  try {
    const doctorsCollectionRef = collection(db, 'doctors');
    const doctorsSnapshot = await getDocs(doctorsCollectionRef);

    const doctorsData = await Promise.all(
      doctorsSnapshot.docs.map(async (docSnap) => {
        const doctorData = docSnap.data();
        const doctorId = docSnap.id;

        // Fetch schedule slots for each doctor
        const scheduleCollectionRef = collection(db, `doctors/${doctorId}/schedule`);
        const scheduleSnapshot = await getDocs(scheduleCollectionRef);

        const availableSlots = scheduleSnapshot.docs.map((slotDoc) => ({
          id: slotDoc.id,
          ...slotDoc.data(),
        }));

        return {
          id: doctorId,
          ...doctorData,
          availableSlots,
        };
      })
    );

    return doctorsData;
  } catch (error) {
    console.error("Error fetching doctors and slots:", error);
    return [];
  }
};


export const addAppointment = async (appointmentData) => {
    try {
      const appointmentsCollection = collection(db, 'appointments');
      await addDoc(appointmentsCollection, appointmentData);
    } catch (error) {
      console.error("Error adding appointment: ", error);
    }
  };
  

 
