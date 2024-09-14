import React, { useState } from 'react';
import '../EmployeeForm.css';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    position: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', employee);
    setEmployee({
      name: '',
      email: '',
      position: '',
    });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Position:
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
