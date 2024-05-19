import { act } from "react";
import { render, screen } from "@testing-library/react";
import DarkMode from "./DarkMode";

beforeEach(() => render(<DarkMode />));

test("renders dark mode", () => {
  const btn = screen.getByTestId("btn-mode");
  expect(btn).toBeInTheDocument();

  const darkmode = screen.getByText(/DarkMode/i);
  expect(darkmode).toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem("darkmode"))).toBeTruthy();
  expect(document.body.classList.contains("darkmode")).toBeTruthy();
});

test("renders light mode", () => {
  const btn = screen.getByTestId("btn-mode");
  act(() => btn.dispatchEvent(new MouseEvent("click", { bubbles: true })));

  const lightmode = screen.getByText(/LightMode/i);
  expect(lightmode).toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem("darkmode"))).toBeFalsy();
  expect(document.body.classList.contains("lightmode")).toBeTruthy();
});
