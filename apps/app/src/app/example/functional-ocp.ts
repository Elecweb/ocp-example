export {};

type SalaryProperties = {
  hourRate: number;
  workHoursPerDay: number;
};

type SalaryMethods = {
  payMoney?: ({ getWorkHours }: { getWorkHours: () => number }) => number;
  getWorkHours?: ({ daysOfMonth }: { daysOfMonth: number }) => number;
};

const createSalary = (
  salaryProperties: SalaryProperties,
  methods: SalaryMethods
) => {
  const daysOfMonth = 30;

  const defaultPayMoney = () => {
    return salaryProperties.hourRate * getWorkHours({ daysOfMonth });
  };

  const defaultGetWorkHours = () => {
    return salaryProperties.workHoursPerDay * daysOfMonth;
  };

  const getWorkHours = methods.getWorkHours ?? defaultGetWorkHours;

  const payMoney = methods.payMoney
    ? () =>
        methods.payMoney!({ getWorkHours: () => getWorkHours({ daysOfMonth }) })
    : defaultPayMoney;

  return {
    payMoney,
  };
};

type EmployeeSalaryProperties = {
  overtime: number;
} & SalaryProperties;

const createEmployeeSalary = (employeeProperties: EmployeeSalaryProperties) => {
  return createSalary(
    {
      workHoursPerDay: employeeProperties.workHoursPerDay,
      hourRate: employeeProperties.hourRate,
    },
    {
      getWorkHours: ({ daysOfMonth }) => {
        return (
          employeeProperties.workHoursPerDay * daysOfMonth +
          employeeProperties.overtime
        );
      },
    }
  );
};

type HRSalaryProperties = {
  employeeSalary: number;
  numOfRecruit: 5;
} & SalaryProperties;

const createHrSalary = (hrProperties: HRSalaryProperties) => {
  return createSalary(
    {
      workHoursPerDay: hrProperties.workHoursPerDay,
      hourRate: hrProperties.hourRate,
    },
    {
      payMoney: ({ getWorkHours }) => {
        return (
          hrProperties.hourRate * getWorkHours() +
          hrProperties.employeeSalary * hrProperties.numOfRecruit * 0.1
        );
      },
    }
  );
};

type SellSalaryProperties = {
  commission: number;
} & SalaryProperties;

const createSellSalary = (sellProperties: SellSalaryProperties) => {
  return createSalary(
    {
      workHoursPerDay: sellProperties.workHoursPerDay,
      hourRate: sellProperties.hourRate,
    },
    {
      payMoney: ({ getWorkHours }) => {
        return (
          sellProperties.hourRate * getWorkHours() + sellProperties.commission
        );
      },
    }
  );
};

type CEOSalaryProperties = SalaryProperties;

const createCEOSalary = (ceoProperties: CEOSalaryProperties) => {
  return createSalary(
    {
      workHoursPerDay: ceoProperties.workHoursPerDay,
      hourRate: ceoProperties.hourRate,
    },
    {}
  );
};

const employeeSalary = createEmployeeSalary({
  hourRate: 38,
  overtime: 4,
  workHoursPerDay: 8,
});

const hrSalary = createHrSalary({
  hourRate: 38,
  workHoursPerDay: 8,
  employeeSalary: employeeSalary.payMoney(),
  numOfRecruit: 5,
});

const sellSalary = createSellSalary({
  hourRate: 20,
  workHoursPerDay: 8,
  commission: 300,
});

const ceoSalary = createCEOSalary({
  hourRate: 60,
  workHoursPerDay: 12,
});

console.log('CEO: ', ceoSalary.payMoney());
console.log('HR: ', hrSalary.payMoney());
console.log('SELL: ', sellSalary.payMoney());
console.log('EMPLOYEE: ', employeeSalary.payMoney());
