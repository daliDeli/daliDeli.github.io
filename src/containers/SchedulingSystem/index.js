import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { getEmployeesShifts, getEmployeesInfo } from '../../services/api';
import { todaysDate, employeeShifts, getAllDaysOfWeek, addTimestamp } from '../../utils/helper';
import WorkingWeek from '../../components/WorkingWeek';
import './index.css';

export default class SchedulingSystem extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      filteredEmployees: [],
      shifts: [],
      daysOfWeek: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.updateShiftsAndEmployees();
    this.updateDaysOfWeek();
  }

  componentDidUpdate({ match: oldMatch }) {
    const { match: currentMatch } = this.props;
    if (oldMatch.params.redirect !== currentMatch.params.redirect) {
      this.updateDaysOfWeek(currentMatch.params.redirect);
    }
  }

  filterEmployeesShifts = e => {
    const { employees } = this.state;
    const employeesName = e.target.value;

    if (employeesName === 'All Employees') {
      this.setState({ filteredEmployees: employees });
    } else {
      const filteredEmployees = employees.filter(employee => employee.firstName === e.target.value);
      this.setState({ filteredEmployees });
    }
  };

  updateDaysOfWeek(whichWeek) {
    const daysOfWeek = getAllDaysOfWeek(whichWeek);
    this.setState({ daysOfWeek, isLoading: false });
  }

  updateShiftsAndEmployees() {
    getEmployeesShifts().then(({ data }) => this.setState({ shifts: data, isLoading: false }));
    getEmployeesInfo()
      .then(({ data }) => addTimestamp(data))
      .then(data => {
        this.setState({ employees: data, filteredEmployees: data, isLoading: false });
      });
  }

  render() {
    const { employees, filteredEmployees, shifts, daysOfWeek, isLoading } = this.state;

    return isLoading ? (
      <ReactLoading height={667} width={375} />
    ) : (
      <main>
        <table>
          <thead>
            <tr>
              <th>
                EMPLOYEE
                <select onClick={this.filterEmployeesShifts}>
                  <option>All Employees</option>
                  {employees.map(employee => (
                    <option key={employee.id}>{employee.firstName}</option>
                  ))}
                </select>
              </th>
              {daysOfWeek.map(day => (
                <th className={day === todaysDate() ? 'today' : 'date'} key={day}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(employee => (
              <WorkingWeek
                employee={employee}
                shifts={employeeShifts(shifts, employee.firstName)}
                workingDays={daysOfWeek}
                key={employee.id}
              />
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

SchedulingSystem.propTypes = {
  match: PropTypes.object.isRequired,
};
