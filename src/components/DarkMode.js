import { useEffect } from 'react';
import { useState } from 'react';

import './DarkMode.css';

import { ReactComponent as Sun } from '../assets/sun.svg';
import { ReactComponent as Moon } from '../assets/moon.svg';

function DarkMode() {
  const darkmode = localStorage.getItem('darkmode');
  const [mode, setMode] = useState(
    darkmode == null ? true : JSON.parse(darkmode)
  );

  const setStyleVariables = (objectVariables) => {
    for(let { name, value } of objectVariables) {
      document.documentElement.style.setProperty(name, value)
    }
  }

  useEffect(() => {
    localStorage.setItem('darkmode', JSON.stringify(mode));
    if (mode) {
      document.body.classList.remove('lightmode')
      document.body.classList.add('darkmode')
      setStyleVariables([
        { name: '--color-text',       value: '#ffffff' },
        { name: '--color-background', value: '#222222' },
      ])
    } else {
      document.body.classList.remove('darkmode')
      document.body.classList.add('lightmode')
      setStyleVariables([
        { name: '--color-text',       value: '#222222' },
        { name: '--color-background', value: '#ffffff' },
      ])
    }
  }, [mode])

  return (
    <button className="btn-mode" type="button" onClick={() => setMode(!mode)}>
      {mode ? <Moon /> : <Sun />}
      {mode ? 'DarkMode' : 'LightMode' }
    </button>
  );
}

export default DarkMode;
