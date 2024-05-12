import { render, screen } from '@testing-library/react';
import Header from "../components/Header";

test('renders Header component without crashing', () => {
  render(<Header />);
});

test('displays title correctly', () => {
  render(<Header />);
  expect(screen.getByText('NASA API Application')).toBeInTheDocument();
  expect(screen.getByText('NASA API Application')).toHaveClass('text-xl font-bold');
});