import { useEffect } from "react";
import { useState } from "react";

import "./DarkModeReact.css";

import Sun from "../assets/sun.svg?react";
import Moon from "../assets/moon.svg?react";

type Props = {
  hiddenLabel?: boolean;
  hiddenIcon?: boolean;
  labelDark?: string;
  labelLight?: string;
};

function DarkMode(props: Props) {
  const btnName = "btn-mode";
  const labelDark = props.labelDark || "DarkMode";
  const labelLight = props.labelLight || "LightMode";
  const darkmode = localStorage.getItem("darkmode");
  const [mode, setMode] = useState(
    darkmode == null ? true : JSON.parse(darkmode)
  );

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(mode));

    if (mode) {
      document.body.classList.add("darkmode");
      document.body.classList.remove("lightmode");
    } else {
      document.body.classList.add("lightmode");
      document.body.classList.remove("darkmode");
    }
  }, [mode]);

  return (
    <button
      data-testid={btnName}
      className={`${btnName} ${props.hiddenLabel && "hiddenLabel"}`}
      type="button"
      onClick={() => setMode(!mode)}
    >
      {!props.hiddenIcon && (mode ? <Moon /> : <Sun />)}
      {mode ? labelDark : labelLight}
    </button>
  );
}

export default DarkMode;
