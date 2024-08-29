// Placeholder to host a component
// components/Hours.js
import React from 'react';

const Hours = () => {
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const today = new Date();
  const dayName = daysOfWeek[today.getDay()];
  const currentHour = today.getHours();
  const currentDay = new Date().getDate();
  let openingHours;

  if (currentDay >= 1 && currentDay <= 5){
    openingHours = '10 a.m  - 4 p.m';
  } else if (currentDay === 0 && currentDay === 6){
    openingHours = '9 a.m   -  8 p.m';
  } else {
    openingHours = 'Closed';
  }

  return (
    <div>
      <h2>Hoy es {dayName}</h2>
      <h2> Shelter Hours</h2>
        <p>Today's  Hours: {openingHours}</p>
    </div>
  );
};

export default Hours;
