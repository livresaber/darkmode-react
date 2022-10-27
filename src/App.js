import logo from './logo.svg';
import './App.css';

import DarkMode from './components/DarkMode';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
      </header>
      <main>
        <DarkMode />
      </main>
    </div>
  );
}

export default App;
