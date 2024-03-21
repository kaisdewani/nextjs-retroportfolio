import React, { useState, useEffect } from 'react';

const ClockComponent = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span className="mr-2">{time}</span>;
};

export default ClockComponent;
