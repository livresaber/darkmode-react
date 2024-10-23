import NucleusReact from 'nucleus-react-js';
import { configApp } from './App.config';
import DarkModeReact from './components/DarkModeReact';
import './App.css'

function App() {
  return (
    <NucleusReact config={configApp}>
      <div className='content example'>
        <DarkModeReact />
      </div>
    </NucleusReact>
  )
}

export default App
