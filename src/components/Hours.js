// Placeholder to host a component
import React, { useState, useEffect } from 'react';

function Hours() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const   
 hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return   
 (
    <div>
      <h2>Hora actual:</h2>
      <p>{hours}:{minutes}:{seconds}</p>
    </div>
  );
}

export default Hours;