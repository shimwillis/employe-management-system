import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function EmployeeList({ employees, onDeleteEmployee }) {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found. Please add an employee.</p>
      ) : (
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              <Link to={`/employees/${index}`}>
                {employee.name}
              </Link>
              <button onClick={() => onDeleteEmployee(index)} style={{ marginLeft: '10px' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  onDeleteEmployee: PropTypes.func.isRequired,
};

export default EmployeeList;