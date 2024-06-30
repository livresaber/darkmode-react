import reactLogo from './assets/react.svg'
import pkg from '../package.json';
import DarkModeReact from './components/DarkModeReact';
// import DarkModeReact from 'darkmode-react-component';
import './App.css'

function App() {
  const appVersion = pkg.version;

  return (
    <div className='app'>
      <header className='app-header'>
        <img src={reactLogo} className='app-logo' alt='logo React' />
      </header>
      <main>
        <DarkModeReact />
      </main>
      <footer>
        <a href='https://github.com/livresaber/darkmode-react' target='_blank' rel='noreferrer'>Version {appVersion} @LivreSaber</a>
      </footer>
    </div>
  )
}

export default App
