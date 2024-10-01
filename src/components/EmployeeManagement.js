import React, { useContext } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import { EmployeeContext } from '../context/EmployeeContext';

function EmployeeManagement() {
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useContext(EmployeeContext);

  return (
    <div className="employee-management">
      <EmployeeForm onAddEmployee={addEmployee} />
      <EmployeeList
        employees={employees}
        onUpdateEmployee={updateEmployee}
        onDeleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default EmployeeManagement;