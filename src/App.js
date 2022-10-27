import logo from './logo.svg';
import './App.css';

import pkg from '../package.json';

import DarkMode from './components/DarkMode';

function App() {
  const appVersion = pkg.version;

  return (
    <div className='app'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo React' />
      </header>
      <main>
        <DarkMode />
      </main>
      <footer>
        <a href='https://github.com/livresaber/darkmode-react' target='_blank' rel='noreferrer'>Version {appVersion} @LivreSaber</a>
      </footer>
    </div>
  );
}

export default App;
