import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import './EmployeeForm.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
});

function EmployeeForm({ onAddEmployee }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    onAddEmployee(data);
    reset();
  };

  return (
    <div className="employee-form">
      <h2>Add Employee</h2>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

EmployeeForm.propTypes = {
  onAddEmployee: PropTypes.func.isRequired,
};

export default EmployeeForm;