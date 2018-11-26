import React from 'react';
import PropTypes from 'prop-types';
import { employeesShiftData } from '../../utils/helper';
import Employee from '../Employee';
import './index.css';

export default function WorkingWeek({ employee, shifts, workingDays }) {
  return (
    <tr>
      <Employee employee={employee} />
      {workingDays.map(day => {
        const { workingHours, color } = employeesShiftData(shifts, day);
        return (
          <td key={day} className={color}>
            {workingHours}
          </td>
        );
      })}
    </tr>
  );
}

WorkingWeek.propTypes = {
  employee: PropTypes.object.isRequired,
  shifts: PropTypes.array.isRequired,
  workingDays: PropTypes.array.isRequired,
};
