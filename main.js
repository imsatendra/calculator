const operand1 = process.argv[2]++;
const operation = process.argv[3];
const operand2 = process.argv[4]++;

const addition = (operand1, operand2) => {
    return operand1 + operand2;
}

const subtraction = (operand1, operand2) => {
    return operand1 - operand2;
}

const multiplication = (operand1, operand2) => {
    return operand1 * operand2;
}

const division = (operand1, operand2) => {
    return operand1 / operand2;
}

const calculator = (operand1, operator, operand2) => {
    let result = 0;
    if (operator == "+") {
        result = addition(operand1, operand2);
    } else if (operator == "-") {
        result = subtraction(operand1, operand2);
    } else if (operator == "*") {
        result = multiplication(operand1, operand2);
    } else if (operator == "/") {
        result = division(operand1, operand2);
    }
    return result;
}

console.log(calculator(operand1, operation, operand1));
