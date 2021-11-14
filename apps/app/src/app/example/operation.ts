export interface OperationStrategy {
  calc: (operand: number, anotherOperand: number) => number;
}

export class AddOperation implements OperationStrategy {
  calc = (operand: number, anotherOperand: number) => {
    return operand + anotherOperand;
  };
}

export class SubtractOperation implements OperationStrategy {
  calc = (operand: number, anotherOperand: number) => {
    return operand - anotherOperand;
  };
}

export class MultiplyOperation implements OperationStrategy {
  calc = (operand: number, anotherOperand: number) => {
    return operand * anotherOperand;
  };
}

export class DivideOperation implements OperationStrategy {
  calc = (operand: number, anotherOperand: number) => {
    return operand / anotherOperand;
  };
}
