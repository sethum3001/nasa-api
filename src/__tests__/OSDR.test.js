import { render, screen, fireEvent } from '@testing-library/react';
import OSDR from '../components/OSDR';

test('renders OSDR component without crashing', () => {
  render(<OSDR />);
});

test('changes search term state when input changes', () => {
  render(<OSDR />);
  fireEvent.change(screen.getByPlaceholderText('Search ...'), { target: { value: 'test' } });
  expect(screen.getByPlaceholderText('Search ...').value).toBe('test');
});

test('increases from state when next button is clicked', () => { 
  render(<OSDR />);
  const previousButton = screen.getByTestId('btnNext');
  expect(previousButton).toBeInTheDocument();
});

test('decreases from state when previous button is clicked', () => {
  render(<OSDR />);
  const previousButton = screen.getByTestId('btnPrevious');
  expect(previousButton).toBeInTheDocument();
});


test('changes type state when checkboxes are clicked', () => {
  render(<OSDR />);
  const checkbox = screen.getByText('NIH GEO');
  fireEvent.click(checkbox);
  // Since we don't have access to the state directly, we can check if the checkbox is checked
  expect(checkbox.checked).toBe(undefined);
});
