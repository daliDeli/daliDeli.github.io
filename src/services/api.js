import axios from 'axios';

export const getEmployeesInfo = () => {
  return axios.get('http://localhost:3000/employees');
};

export const getEmployeesShifts = () => {
  return axios.get('http://localhost:3000/shifts');
};
