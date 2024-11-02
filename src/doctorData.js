

const doctors = [
    {
      id: 'doctor1',
      name: 'Dr. John Doe',
      schedule: [
        { startTime: '9:00 AM', endTime: '5:00 PM' }, // Monday
        { startTime: '10:00 AM', endTime: '4:00 PM' }, // Tuesday
        null,                                          // Wednesday (unavailable)
        { startTime: '8:00 AM', endTime: '3:00 PM' },  // Thursday
        { startTime: '9:00 AM', endTime: '5:00 PM' },  // Friday
        null,                                          // Saturday (unavailable)
        { startTime: '11:00 AM', endTime: '2:00 PM' }, // Sunday
      ],
      
    },
    {
        id: 'doctor2',
        name: 'Dr. Will Smith',
        schedule: [
          { startTime: '9:00 AM', endTime: '5:00 PM' },
           null,
          { startTime: '10:00 AM', endTime: '4:00 PM' },                                           
          { startTime: '8:00 AM', endTime: '3:00 PM' }, 
          null, 
          { startTime: '9:00 AM', endTime: '5:00 PM' }, 
          { startTime: '11:00 AM', endTime: '2:00 PM' },
          
        ],
        
      },
      {
        id: 'doctor2',
        name: 'Dr. Will Smith',
        schedule: [
          { startTime: '9:00 AM', endTime: '5:00 PM' },
          { startTime: '10:00 AM', endTime: '4:00 PM' },                                           
          { startTime: '8:00 AM', endTime: '3:00 PM' },
          null, 
          { startTime: '9:00 AM', endTime: '5:00 PM' }, 
          null,
          { startTime: '11:00 AM', endTime: '2:00 PM' },
          
        ],
        
      },

    // Add more doctors as needed...
  ];
  
  export default doctors;
  