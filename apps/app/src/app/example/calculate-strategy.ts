import { AddOperation, DivideOperation, MultiplyOperation, OperationStrategy, SubtractOperation } from "./operation";

class Calculation {
  private strategy: OperationStrategy;

  constructor(strategy: OperationStrategy) {
    this.strategy = strategy;
  }

  calculate(operand: number, anotherOperand: number) {
    return this.strategy.calc(operand, anotherOperand);
  }
}

(() => {
  console.log('Add', new Calculation(new AddOperation()).calculate(3, 5));
  console.log(
    'Subtract',
    new Calculation(new SubtractOperation()).calculate(3, 5)
  );
  console.log(
    'Multiply',
    new Calculation(new MultiplyOperation()).calculate(3, 5)
  );
  console.log('Divide', new Calculation(new DivideOperation()).calculate(3, 5));
})();
