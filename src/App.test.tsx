import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

beforeEach(() => render(<App />));

test('renders btn mode', () => {
  const btn = screen.getByTestId('btn-darkmode');
  expect(btn).toBeInTheDocument();
});
