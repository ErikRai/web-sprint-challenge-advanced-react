import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const GoinDark = () => {

  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {

    e.preventDefault();

    setDarkMode(!darkMode);

  };
  return (

    <button onClick={toggleMode}>🌞</button>

  );
  
};

export default GoinDark;