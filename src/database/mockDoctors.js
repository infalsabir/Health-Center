// src/mockDoctors.js
const mockDoctors = [
    {
      id: 'doctorId_1',
      name: 'Dr. John Doe',
      specialization: 'Cardiologist',
      availableSlots: [
        { id: 'slotId_1', startTime: new Date(Date.now() + 3600000), endTime: new Date(Date.now() + 7200000) }, 
        <br></br>,
        { id: 'slotId_2', startTime: new Date(Date.now() + 10800000), endTime: new Date(Date.now() + 14400000) }, // 1 hour slot

      ],
      id: 'doctorId_2',
      name: 'ALice Smith',
      specialization: 'Dermatologist',
      availableSlots: [
        { id: 'slotId_1', startTime: new Date(Date.now() +   7200000 ), endTime: new Date(Date.now() +10800000) }, 

      ]
    },
    // Add more doctor objects as needed
  ];
  
  export default mockDoctors;
  