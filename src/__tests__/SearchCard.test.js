import { render, screen } from '@testing-library/react';
import SearchCard from '../components/SearchCard';

const mockData = {
  _source: {
    Accession: '123',
    'Project Title': 'Test Project',
    'Study Title': 'Test Study',
    'Study Description': 'This is a test study.',
    'Study Public Release Date': 1615891200, // March 16, 2021
    'Data Source Type': 'Test Source',
  },
};

test('renders SearchCard component without crashing', () => {
  render(<SearchCard data={mockData} />);
});


test('displays loading state correctly', () => {
  render(<SearchCard />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('displays data correctly', () => {
  render(<SearchCard data={mockData} />);
  expect(screen.getByText('Test Project')).toBeInTheDocument();
  expect(screen.getByText('This is a test study.')).toBeInTheDocument();
  expect(screen.getByText('Release Date:')).toBeInTheDocument();
  expect(screen.getByText('Source:')).toBeInTheDocument();
  expect(screen.getByText('Test Source')).toBeInTheDocument();
});