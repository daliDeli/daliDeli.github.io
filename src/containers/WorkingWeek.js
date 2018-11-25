import React from 'react';
import { employeesShiftData } from '../utils/helper';
import Employee from '../components/Employee';

export default ({ employee, shifts, workingDays }) => {
  if (shifts.length > 0) {
    return (
      <tr>
        <td>
          <img src={employee.avatar} alt={employee.firstName} />
          <p>{`${employee.firstName} ${employee.lastName}`}</p>
          <p>{employee.position}</p>
        </td>
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
};
