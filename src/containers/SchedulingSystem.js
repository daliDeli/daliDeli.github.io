import React, { Component } from 'react';
import getEmployeesData from '../services/apiService';
import { todaysDate, employeeShifts } from '../utils/helper';
import WorkingWeek from './WorkingWeek';
import './schedulingSystem.css';

export default class SchedulingSystem extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          firstName: 'Miroslav',
          lastName: 'Delipara',
          avatar: 'https://image.flaticon.com/icons/png/128/236/236831.png',
          position: 'bartender',
        },
      ],
      shifts: [
        {
          name: 'Day',
          date: '11/29/2018',
          position: 'Bartender',
          employees: ['Nko', 'Niko'],
        },
      ],
      daysOfWeek: [
        'Mon, Nov 26',
        'Tue, Nov 27',
        'Wed, Nov 28',
        'Thu, Nov 29',
        'Fri, Nov 30',
        'Sat, Dec 1',
        'Sat, Dec 2',
      ],
    };
  }

  componentDidMount() {
    this.changeState();
  }

  changeState = () => {
    const { employeeData, shiftData } = getEmployeesData();
    this.setState({ employees: employeeData, shifts: shiftData });
  };

  render() {
    const { employees, shifts, daysOfWeek } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>EMPLOYEE</th>
            {daysOfWeek.map((day, i) => (
              <th className={day === todaysDate() ? 'today' : 'date'} id={i}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, i) => (
            <WorkingWeek
              employee={employee}
              shifts={employeeShifts(shifts, employee.firstName)}
              workingDays={daysOfWeek}
              key={i}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
