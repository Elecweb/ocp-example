export {};

enum Role {
  CEO,
  HR,
  SELL,
  EMPLOYEE,
  FREELANCER,
}

const payMoney = (role: Role) => {
  const rate = {
    [Role.CEO]: 60,
    [Role.HR]: 38,
    [Role.SELL]: 20,
    [Role.EMPLOYEE]: 38,
    [Role.FREELANCER]: 15,
  };

  return rate[role] * getWorkHours(role);
};

const getWorkHours = (role: Role) => {
  const hoursPerDay = {
    [Role.CEO]: 12,
    [Role.HR]: 8,
    [Role.SELL]: 8,
    [Role.EMPLOYEE]: 8,
    [Role.FREELANCER]: 10,
  };

  const daysOfMonth = 30;

  return hoursPerDay[role] * daysOfMonth;
};

console.log('CEO: ', payMoney(Role.CEO));
console.log('HR: ', payMoney(Role.HR));
console.log('SELL: ', payMoney(Role.SELL));
console.log('EMPLOYEE: ', payMoney(Role.EMPLOYEE));
console.log('FREELANCER: ', payMoney(Role.FREELANCER));
