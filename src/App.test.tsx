import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

beforeEach(() => render(<App />));

test('renders react logo', () => {
  const logo = screen.getByAltText(/logo React/i);
  expect(logo).toBeInTheDocument();
});

test('renders btn mode', () => {
  const btn = screen.getByTestId('btn-mode');
  expect(btn).toBeInTheDocument();
});
