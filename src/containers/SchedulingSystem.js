import React, { Component } from 'react';
import getEmployeesData from '../services/apiService';
import { todaysDate, employeeShifts } from '../utils/helper';
import WorkingWeek from '../components/WorkingWeek';
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
      filteredEmployees: [],
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

  filterEmployeesShifts = e => {
    const { employees } = this.state;
    const shiftsFrom = e.target.value;

    if (shiftsFrom === 'All Employees') {
      this.setState({ filteredEmployees: employees });
    } else {
      const filteredEmployees = employees.filter(employee => employee.firstName === e.target.value);
      this.setState({ filteredEmployees });
    }
  };

  changeState = () => {
    const { employeeData, shiftData } = getEmployeesData();
    this.setState({ employees: employeeData, filteredEmployees: employeeData, shifts: shiftData });
  };

  render() {
    const { employees, filteredEmployees, shifts, daysOfWeek } = this.state;
    return (
      <div>
        <h1>Dunder Mifflin </h1>
        <table>
          <thead>
            <tr>
              <th>
                EMPLOYEE
                <select onClick={this.filterEmployeesShifts}>
                  <option>All Employees</option>
                  {employees.map(employee => (
                    <option>{employee.firstName}</option>
                  ))}
                </select>
              </th>
              {daysOfWeek.map((day, i) => (
                <th className={day === todaysDate() ? 'today' : 'date'} id={i}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, i) => (
              <WorkingWeek
                employee={employee}
                shifts={employeeShifts(shifts, employee.firstName)}
                workingDays={daysOfWeek}
                key={i}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
