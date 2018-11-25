export const todaysDate = () => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
};

export const employeeShifts = (allShifts, employeeName) => {
  return allShifts.filter(shift => shift.employees.includes(employeeName));
};

export const employeesShiftData = (shifts, day) => {
  const smena = shifts.find(shift => shift.date === day);
  if (smena) {
    return { workingHours: smena.name, color: smena.position.color };
  }
  return { workingHours: 'No Shift', color: 'yellow' };
};
