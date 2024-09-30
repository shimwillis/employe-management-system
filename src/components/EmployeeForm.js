import React, { useState } from 'react';

function EmployeeForm({ onAddEmployee }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddEmployee = (event) => {
    event.preventDefault();
    const newEmployee = { name, email, phone };
    onAddEmployee(newEmployee);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleAddEmployee}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
