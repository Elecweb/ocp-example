export {};

interface Operation {
  calc: (operand: number, anotherOperand: number) => number;
}

class AddOperation implements Operation {
  calc = (operand: number, anotherOperand: number) => {
    return operand + anotherOperand;
  };
}

class SubtractOperation implements Operation {
  calc = (operand: number, anotherOperand: number) => {
    return operand - anotherOperand;
  };
}

class MultiplyOperation implements Operation {
  calc = (operand: number, anotherOperand: number) => {
    return operand * anotherOperand;
  };
}

class DivideOperation implements Operation {
  calc = (operand: number, anotherOperand: number) => {
    return operand / anotherOperand;
  };
}

const calculate = (
  operand: number,
  anotherOperand: number,
  operation: Operation
) => {
  return operation.calc(operand, anotherOperand);
};

console.log('Add', calculate(3, 5, new AddOperation()));
console.log('Subtract', calculate(3, 5, new SubtractOperation()));
console.log('Multiply', calculate(3, 5, new MultiplyOperation()));
console.log('Divide', calculate(3, 5, new DivideOperation()));
