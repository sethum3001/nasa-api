import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import APOD from '../components/APOD';



describe('APOD Component', () => {
  test('renders without crashing', () => {
    render(<APOD />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  test('displays loading spinner initially', async () => {
    render(<APOD />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  }); 

  // test('fetches data based on selected date', async () => {
  //   render(<APOD />);
  //   const input = screen.getByPlaceholderText('Select Date and Time');
  //   userEvent.type(input, '2023-01-01'); // Example date
  //   await waitFor(() => expect(screen.getByText(/Astronomy Picture of the Day/i)).toBeInTheDocument());
  // });

  // test('handles image selection', async () => { 
  //   render(<APOD />);
  //   await waitFor(() => {
  //     expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
  //   });

  //   const images = screen.getAllByRole('img');
  //   expect(images.length).toBeGreaterThan(1);
  // });

  // test('handles network errors', async () => {
  //   global.fetch = jest.fn(() =>  
  //     Promise.reject(new Error('Network Error'))
  //   );
  //   render(<APOD />);
  //   expect(screen.getByText(/An error occurred/i)).toBeInTheDocument();
  // });

  // test('validates date input', async () => {
  //   render(<APOD />);
  //   const input = screen.getByPlaceholderText('Select Date and Time');
  //   userEvent.type(input, 'invalid-date'); // An invalid date
  //   expect(screen.getByText(/Please enter a valid date/i)).toBeInTheDocument();
  // });

  // test('displays previous images', async () => {
  //   render(<APOD />);
  //   await screen.findByText(/Last Week Images/i);
  // });
});
