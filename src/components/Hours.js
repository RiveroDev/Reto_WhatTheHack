// Placeholder to host a component
// components/Hours.js
import React from 'react';

const Hours = () => {
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const hoursOfDay = [
    '00:00 - 01:00', '01:00 - 02:00', '02:00 - 03:00', '03:00 - 04:00', '04:00 - 05:00', '05:00 - 06:00',
    '06:00 - 07:00', '07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
    '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00',
    '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00', '21:00 - 22:00', '22:00 - 23:00', '23:00 - 00:00'
  ];

  const today = new Date();
  const dayName = daysOfWeek[today.getDay()];
  const currentHour = today.getHours();

  return (
    <div>
      <h2>Hoy es {dayName}</h2>
      <ul>
        {hoursOfDay.map((hour, index) => (
          <li key={index} style={{ color: index === currentHour ? 'red' : 'black' }}>
            {hour}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hours;
