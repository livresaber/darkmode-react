import NucleusReact, { NucleusBox } from "nucleus-react-js";
import { configApp } from "./App.config";
import DarkModeReact from "./components/DarkModeReact";
import "./App.css";

function App() {
  return (
    <NucleusReact config={configApp}>
      <NucleusBox className="example">
        <DarkModeReact data-testid="btn-darkmode" />
      </NucleusBox>
    </NucleusReact>
  );
}

export default App;
