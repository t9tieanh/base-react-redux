import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders greeting text', () => {
  render(<App />);
  const textElement = screen.getByText(/hello.*pham tien anh/i);
  expect(textElement).toBeInTheDocument();
});

test('renders logo image', () => {
  render(<App />);
  const logoImg = screen.getByAltText(/logo/i);
  expect(logoImg).toBeInTheDocument();
});
