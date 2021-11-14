import {
  AddOperation,
  DivideOperation,
  MultiplyOperation,
  OperationStrategy,
  SubtractOperation,
} from './operation';

class CalculationBuilder {
  private strategy!: OperationStrategy;

  setStrategy(strategy: OperationStrategy) {
    this.strategy = strategy;
    return this;
  }

  calculate(operand: number, anotherOperand: number) {
    if (this.strategy === undefined) {
      throw 'please set Strategy before';
    }
    return this.strategy.calc(operand, anotherOperand);
  }
}

(() => {
  console.log(
    'Add',
    new CalculationBuilder().setStrategy(new AddOperation()).calculate(3, 5)
  );
  console.log(
    'Subtract',
    new CalculationBuilder()
      .setStrategy(new SubtractOperation())
      .calculate(3, 5)
  );
  console.log(
    'Multiply',
    new CalculationBuilder()
      .setStrategy(new MultiplyOperation())
      .calculate(3, 5)
  );
  console.log(
    'Divide',
    new CalculationBuilder().setStrategy(new DivideOperation()).calculate(3, 5)
  );
})();
