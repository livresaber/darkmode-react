import { act } from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import DarkModeReact from "./DarkModeReact";

beforeEach(() => render(<DarkModeReact />));

test("renders dark mode", () => {
  const btn = screen.getByTestId("btn-mode");
  expect(btn).toBeInTheDocument();

  const darkmodeReact = screen.getByText(/DarkMode/i);
  expect(darkmodeReact).toBeInTheDocument();

  const darkmode = localStorage.getItem("darkmode");
  expect(JSON.parse(darkmode ?? "false")).toBeTruthy();
  expect(document.body.classList.contains("darkmode")).toBeTruthy();
});

test("renders light mode", () => {
  const btn = screen.getByTestId("btn-mode");
  act(() => btn.dispatchEvent(new MouseEvent("click", { bubbles: true })));

  const lightmode = screen.getByText(/LightMode/i);
  expect(lightmode).toBeInTheDocument();

  const darkmode = localStorage.getItem("darkmode");
  expect(JSON.parse(darkmode ?? "false")).toBeFalsy();
  expect(document.body.classList.contains("lightmode")).toBeTruthy();
});
