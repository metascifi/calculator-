let firstNum = "";
let operator = "";
let secondNum = ""; 
const displayText = document.querySelector("#display p")
displayText.textContent = "0";
const numberPanel = document.querySelector("#numbers-panel");
const operationsPanel = document.querySelector("#operations-panel")

function operate (num1, num2, operator) {
    switch (operator) {
        case "+":
          return +num1 + +num2;
        case "-": 
            return +num1 - +num2;
        case "x":
            return +num1 * +num2;
        case "÷":
            return +num1 / +num2
    }
}

numberPanel.addEventListener('click', (event) => {
    if (event.target.id === "numbers-panel") return "";
    if (operator === "") {
        console.log(event.target);
        if (displayText.textContent === "0") {
            firstNum += event.target.textContent;
            displayText.textContent = firstNum; 
        } else {
            firstNum += event.target.textContent;
            displayText.textContent = firstNum; 
            console.log(firstNum, secondNum);
        };
    } else {
        if (displayText.textContent === "") {
            secondNum = event.target.textContent;
            displayText.textContent = secondNum;
        } else {
            secondNum += event.target.textContent;
            displayText.textContent = secondNum;
        };
        console.log(firstNum, secondNum)
    } 
})

operationsPanel.addEventListener('click', (event) => {
    switch (event.target.textContent){
        case "÷":
        case "x":
        case "+":
        case "-":
            operator = event.target.textContent;
            break;
        case "C": 
            firstNum = ""
            operator = ""
            secondNum = ""
            displayText.textContent = "0";
            break;
        case "=": 
            firstNum = operate(firstNum, secondNum, operator);
            displayText.textContent = firstNum;
            secondNum = ""; 
            operator = "";       
    }
})