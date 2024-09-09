let firstNum = 0;
let operator = "";
let secondNum = 0; 

function add (a, b){
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b; 
}

function multiply(a, b) {
    return +a * +b;
}

function divide (a, b){
    return +a - +b;
}

function operate (num1, num2, operator) {
    switch (operator) {
        case "add":
          return add(num1, num2);
        case "subtract": 
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2)
    }
}