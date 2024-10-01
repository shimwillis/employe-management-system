import { render, screen } from '@testing-library/react';
import App from './App';
import { EmployeeProvider } from './context/EmployeeContext';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Add Employee header', () => {
  render(
    <Router>
      <EmployeeProvider>
        <App />
      </EmployeeProvider>
    </Router>
  );
  const headerElement = screen.getByText(/Add Employee/i);
  expect(headerElement).toBeInTheDocument();
});