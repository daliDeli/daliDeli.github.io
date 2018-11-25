import React from 'react';
import PropTypes from 'prop-types';

export default function Employee({ employee }) {
  return (
    <td>
      <img src={employee.avatar} alt={employee.firstName} />
      <p>{`${employee.firstName} ${employee.lastName}`}</p>
      <p>{employee.position}</p>
    </td>
  );
}

Employee.propTypes = {
  employee: PropTypes.object.isRequired,
};
