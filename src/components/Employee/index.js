import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function Employee({ employee }) {
  return (
    <td>
      <img className="avatar" src={employee.avatar} alt={employee.firstName} />
      <p>{`${employee.firstName} ${employee.lastName}`}</p>
      <p>{employee.position}</p>
    </td>
  );
}

Employee.propTypes = {
  employee: PropTypes.object.isRequired,
};
