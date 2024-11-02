// src/pages/DoctorSchedule.js
import React from 'react';

import doctors from './doctorData';

const DoctorSchedule = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="schedule-container">
      <h2>Weekly Doctor Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Doctor</th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              {daysOfWeek.map((day, index) => (
                <td key={day}>
                  {doctor.schedule[index] ? (
                    <div className="available">
                      <span>{doctor.schedule[index].startTime} - {doctor.schedule[index].endTime}</span>
                    </div>
                  ) : (
                    <div className="unavailable">Unavailable</div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorSchedule;

  