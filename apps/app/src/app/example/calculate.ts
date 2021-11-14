enum Operator {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

const calculate = (
  operand: number,
  anotherOperand: number,
  operator: Operator
) => {
  switch (operator) {
    case Operator.ADD:
      return operand + anotherOperand;

    case Operator.SUBTRACT:
      return operand - anotherOperand;

    case Operator.MULTIPLY:
      return operand * anotherOperand;

    case Operator.DIVIDE:
      return operand / anotherOperand;
  }
};

console.log('Add', calculate(3, 5, Operator.ADD));
console.log('Subtract', calculate(3, 5, Operator.SUBTRACT));
console.log('Multiply', calculate(3, 5, Operator.MULTIPLY));
console.log('Divide', calculate(3, 5, Operator.DIVIDE));
