let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

let result;

if (operator === "+") {
    result = number1 + number2;
} else if (operator === "-") {
    result = number1 - number2;
} else if (operator === "*") {
    result = number1 * number2;
} else if (operator === "/") {
    if (number2 !== 0) {
        result = number1 / number2;
    } else {
        result = "Error: Division by zero!";
    }
} else {
    result = "Invalid operator.";
}

alert("Result: " + result);
