export {};

// type SalaryConfig = {
//   hourRate: number;
//   workHoursPerDay: number;
// };

type RecruitedEmployee = {
  employeeSalary: EmployeeSalary;
  numOfRecruit: number;
};

abstract class Salary {
  protected daysOfMonth = 30;

  abstract get hourRate(): number;
  abstract get workHoursPerDay(): number;
  abstract payMoney(): number;
  abstract getWorkHours(): number;

  /**
   * NOTE: don't get me wrong because this approach it correct but i wanna show another cases via abstract function to get configs
  **/
  // constructor(salaryConfig: SalaryConfig) {
  //   this.hourRate = salaryConfig.hourRate;
  //   this.workHoursPerDay = salaryConfig.workHoursPerDay;
  // }

  permanentFunc() {
    // just example
    return this.hourRate * this.workHoursPerDay;
  }
}

class EmployeeSalary extends Salary {
  get hourRate(): number {
    return 38;
  }
  get workHoursPerDay(): number {
    return 8;
  }

  private overtime: number;

  constructor(overtime: number) {
    super();
    this.overtime = overtime;
  }

  payMoney(): number {
    return this.getWorkHours() * this.hourRate;
  }

  getWorkHours = () => {
    return this.workHoursPerDay * this.daysOfMonth + this.overtime;
  };
}

class SellSalary extends Salary {
  get hourRate(): number {
    return 20;
  }
  get workHoursPerDay(): number {
    return 8;
  }
  private commission: number;
  constructor(commission: number) {
    super();
    this.commission = commission;
  }

  payMoney = () => {
    return this.getWorkHours() * this.hourRate + this.commission;
  };

  getWorkHours = () => {
    return this.workHoursPerDay * this.daysOfMonth;
  };
}

class HRSalary extends Salary {
  get hourRate(): number {
    return 38;
  }
  get workHoursPerDay(): number {
    return 8;
  }
  private recruitedEmployee: RecruitedEmployee;

  constructor(recruitedEmployee: RecruitedEmployee) {
    super();
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

  getWorkHours = () => {
    return this.workHoursPerDay * this.daysOfMonth;
  };
}

/**
 * NOTE:
 * in this case you can see here we have only one case is unnecessary to customize
 * the function payMoney right so i think we can use abstract function is better IMO
 **/
class CEOSalary extends Salary {
  get hourRate(): number {
    return 60;
  }
  get workHoursPerDay(): number {
    return 12;
  }

  payMoney(): number {
    return this.getWorkHours() * this.hourRate;
  }

  getWorkHours = () => {
    return this.workHoursPerDay * this.daysOfMonth;
  };
}

const ceoSalary = new CEOSalary();
const employeeSalary = new EmployeeSalary(4);
const sellSalary = new SellSalary(300);
const hrSalary = new HRSalary({
  employeeSalary,
  numOfRecruit: 5,
});

console.log('CEO: ', ceoSalary.payMoney());
console.log('HR: ', hrSalary.payMoney());
console.log('SELL: ', sellSalary.payMoney());
console.log('EMPLOYEE: ', employeeSalary.payMoney());
