export {};

enum Role {
  CEO,
  HR,
  SELL,
  EMPLOYEE,
  FREELANCER,
}

const payMoney = (
  role: Role,
  commission: number,
  newEmployee: number,
  employeeOT: number
) => {
  const rate = {
    [Role.CEO]: 60,
    [Role.HR]: 38,
    [Role.SELL]: 20,
    [Role.EMPLOYEE]: 38,
    [Role.FREELANCER]: 15,
  };

  if (role === Role.HR) {
    const employeeSalary =
      rate[Role.EMPLOYEE] * getWorkHours(Role.EMPLOYEE, employeeOT);
    return (
      rate[role] * getWorkHours(role, 0) + employeeSalary * newEmployee * 0.1
    );
  }

  if (role === Role.SELL) {
    return rate[role] * getWorkHours(role, 0) + commission;
  }

  return rate[role] * getWorkHours(role, employeeOT);
};

const getWorkHours = (role: Role, employeeOT: number) => {
  const hoursPerDay = {
    [Role.CEO]: 12,
    [Role.HR]: 8,
    [Role.SELL]: 8,
    [Role.EMPLOYEE]: 8,
    [Role.FREELANCER]: 10,
  };

  const daysOfMonth = 30;

  return hoursPerDay[role] * daysOfMonth + employeeOT;
};

console.log('CEO: ', payMoney(Role.CEO, 0, 0, 0));
console.log('HR: ', payMoney(Role.HR, 0, 5, 4));
console.log('SELL: ', payMoney(Role.SELL, 300, 0, 0));
console.log('EMPLOYEE: ', payMoney(Role.EMPLOYEE, 0, 0, 4));
