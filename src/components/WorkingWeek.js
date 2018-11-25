import React from 'react';
import PropTypes from 'prop-types';
import { employeesShiftData } from '../utils/helper';
import Employee from './Employee';

export default function WorkingWeek({ employee, shifts, workingDays }) {
  if (shifts.length > 0) {
    return (
      <tr>
        <Employee employee={employee} />
        {workingDays.map(day => {
          const { workingHours, color } = employeesShiftData(shifts, day);
          return <td className={color}>{workingHours}</td>;
        })}
      </tr>
    );
  }
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td colSpan="7">This Week is Free</td>
    </tr>
  );
}

WorkingWeek.propTypes = {
  employee: PropTypes.object.isRequired,
  shifts: PropTypes.array.isRequired,
  workingDays: PropTypes.array.isRequired,
};
