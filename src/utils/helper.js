export const todaysDate = () => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
};

export const employeeShifts = (allShifts, employeeName) => {
  return allShifts.filter(shift => shift.employees.includes(employeeName));
};

export const employeesShiftData = (shifts, day) => {
  const shiftData = shifts.find(shift => shift.date === day);
  if (shiftData) {
    return { workingHours: shiftData.name, color: shiftData.position.color };
  }
  return { workingHours: 'No Shift', color: 'white' };
};

export const addTimestamp = data => {
  return data.map((obj, i) => ({ ...obj, id: i + new Date().getTime() }));
};

export const getAllDaysOfWeek = whichWeek => {
  switch (whichWeek) {
    case 'last':
      return [
        'Mon, Nov 19',
        'Tue, Nov 20',
        'Wed, Nov 21',
        'Thu, Nov 22',
        'Fri, Nov 23',
        'Sat, Nov 24',
        'Sat, Nov 25',
      ];
    case 'next':
      return [
        'Mon, Dec 3',
        'Tue, Dec 4',
        'Wed, Dec 5',
        'Thu, Dec 6',
        'Fri, Dec 7',
        'Sat, Dec 8',
        'Sat, Dec 9',
      ];
    default:
      return [
        'Mon, Nov 26',
        'Tue, Nov 27',
        'Wed, Nov 28',
        'Thu, Nov 29',
        'Fri, Nov 30',
        'Sat, Dec 1',
        'Sat, Dec 2',
      ];
  }
};
