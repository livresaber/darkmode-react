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
      <footer>Version {appVersion} @LivreSaber</footer>
    </div>
  );
}

export default App;
