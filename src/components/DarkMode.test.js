import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import DarkMode from './DarkMode';

beforeEach(() => render(<DarkMode />));

test('renders dark mode', () => {
  const btn = screen.getByTestId('btn-mode');
  expect(btn).toBeInTheDocument();

  const darkmode = screen.getByText(/DarkMode/i);
  expect(darkmode).toBeInTheDocument();
  expect(document.body.classList.contains('darkmode')).toBeTruthy();
});

test('renders light mode', () => {
  const btn = screen.getByTestId('btn-mode');
  act(() => btn.dispatchEvent(new MouseEvent('click', { bubbles: true })));

  const lightmode = screen.getByText(/LightMode/i);
  expect(lightmode).toBeInTheDocument();
  expect(document.body.classList.contains('lightmode')).toBeTruthy();
});
