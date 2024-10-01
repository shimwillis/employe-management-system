import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../context/EmployeeContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './EmployeeForm.css';
import PropTypes from 'prop-types';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
});

function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employees, updateEmployee } = useContext(EmployeeContext);
  const employee = employees[id];

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: employee,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    updateEmployee(id, data);
    navigate('/');
  };

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  return (
    <div className="employee-form">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input type="text" {...register('name')} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register('email')} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" {...register('phone')} />
          {errors.phone && <span className="error">{errors.phone.message}</span>}
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

EmployeeDetails.propTypes = {
  // No props since we're using params and context
};

export default EmployeeDetails;
