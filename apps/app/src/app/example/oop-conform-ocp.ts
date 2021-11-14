export {};

type SalaryConfig = {
  hourRate: number;
  workHoursPerDay: number;
};

abstract class Salary {
  protected hourRate: number;
  protected workHoursPerDay: number;
  protected daysOfMonth = 30;

  constructor(salaryConfig: SalaryConfig) {
    this.hourRate = salaryConfig.hourRate;
    this.workHoursPerDay = salaryConfig.workHoursPerDay;
  }

  payMoney = () => {
    return this.getWorkHours() * this.hourRate;
  };

  getWorkHours = () => {
    return this.workHoursPerDay * this.daysOfMonth;
  };
}

class EmployeeSalary extends Salary {
  private overtime: number;

  constructor(salaryConfig: SalaryConfig, overtime: number) {
    super(salaryConfig);
    this.overtime = overtime;
  }

  getWorkHours = () => {
    return this.workHoursPerDay * this.daysOfMonth + this.overtime;
  };
}

class SellSalary extends Salary {
  private commission: number;
  constructor(salaryConfig: SalaryConfig, commission: number) {
    super(salaryConfig);
    this.commission = commission;
  }

  payMoney = () => {
    return this.getWorkHours() * this.hourRate + this.commission;
  };
}

type RecruitedEmployee = {
  employeeSalary: EmployeeSalary;
  numOfRecruit: number;
};

class HRSalary extends Salary {
  private recruitedEmployee: RecruitedEmployee;

  constructor(
    salaryConfig: SalaryConfig,
    recruitedEmployee: RecruitedEmployee
  ) {
    super(salaryConfig);
    this.recruitedEmployee = recruitedEmployee;
  }

  payMoney = () => {
    return (
      this.getWorkHours() * this.hourRate +
      this.recruitedEmployee.numOfRecruit *
        this.recruitedEmployee.employeeSalary.payMoney() *
        0.1
    );
  };
}

class CEOSalary extends Salary {}

class FreelancerSalary extends Salary {
  private paidJobDone: number;

  constructor(salaryConfig: SalaryConfig, paidJobDone: number) {
    super(salaryConfig);
    this.paidJobDone = paidJobDone;
  }

  payMoney = () => {
    return this.getWorkHours() * this.hourRate + this.paidJobDone;
  };
}

const ceoSalary = new CEOSalary({
  hourRate: 60,
  workHoursPerDay: 12,
});

const employeeSalary = new EmployeeSalary(
  {
    hourRate: 38,
    workHoursPerDay: 8,
  },
  4
);

const sellSalary = new SellSalary(
  {
    hourRate: 20,
    workHoursPerDay: 8,
  },
  300
);

const hrSalary = new HRSalary(
  {
    hourRate: 38,
    workHoursPerDay: 8,
  },
  {
    employeeSalary,
    numOfRecruit: 5,
  }
);

console.log('CEO: ', ceoSalary.payMoney());
console.log('HR: ', hrSalary.payMoney());
console.log('SELL: ', sellSalary.payMoney());
console.log('EMPLOYEE: ', employeeSalary.payMoney());
