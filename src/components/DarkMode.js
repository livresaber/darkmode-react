import { useEffect } from 'react';
import { useState } from 'react';

import './DarkMode.css';

import { ReactComponent as Sun } from '../assets/sun.svg';
import { ReactComponent as Moon } from '../assets/moon.svg';

function DarkMode() {
  const btnName = 'btn-mode';
  const darkmode = localStorage.getItem('darkmode');
  const [mode, setMode] = useState(darkmode == null ? true : JSON.parse(darkmode));

  useEffect(() => {
    localStorage.setItem('darkmode', JSON.stringify(mode))

    if(mode) {
      document.body.classList.add('darkmode')
      document.body.classList.remove('lightmode')
    } else {
      document.body.classList.add('lightmode')
      document.body.classList.remove('darkmode')
    }
  }, [mode])

  return (
    <button data-testid={btnName} className={btnName} type='button' onClick={() => setMode(!mode)}>
      {mode ? <Moon /> : <Sun />}
      {mode ? 'DarkMode' : 'LightMode' }
    </button>
  );
}

export default DarkMode;
