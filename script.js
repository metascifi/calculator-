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
            firstNum = Number(num1) + Number(num2);
            return +firstNum.toFixed(1); 
        case "-": 
            firstNum = +num1 - +num2;
            return +firstNum.toFixed(1); 
        case "x":
            firstNum = +num1 * +num2;
            return +firstNum.toFixed(1); 
        case "÷":
            firstNum = +num1 / +num2;
            return +firstNum.toFixed(1);
        default:
            return firstNum = "";
    }
}

numberPanel.addEventListener('click', (event) => {
    if (event.target.id === "numbers-panel") return "";
    if (operator === "") {
        console.log(event.target);
        if (displayText.textContent === "0") {
            firstNum = event.target.textContent;
            if (firstNum === ".") return "";
            displayText.textContent = firstNum; 
        } else {
            if (firstNum === "0") {
               firstNum = event.target.textContent;
            } else {
                firstNum += event.target.textContent;
                // deletes more than one decimal point
                if (firstNum.slice().split("").filter((item) => {
                    if (item === ".") {
                        return true;
                    } 
                    return false;
                }).length > 1) {
                   let array = firstNum.split("");
                   array.pop();
                   firstNum = array.join("");
                }
                displayText.textContent = firstNum; 
                console.log(firstNum, secondNum);
            };   
        };
    } else {
        if (displayText.textContent === "" || secondNum === "0") {
            secondNum = event.target.textContent;
            displayText.textContent = secondNum;
        } else {
            secondNum += event.target.textContent;
            if (secondNum.slice().split("").filter((item) => {
                if (item === ".") {
                    return true;
                } 
                return false;
            }).length > 1) {
               let array = secondNum.split("");
               array.pop();
               secondNum = array.join("");
            };
            if (secondNum === ".") return "";
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
            if (operator === "") {
                operator = event.target.textContent;
            } 
            console.log(operator);
            if (secondNum !== "") {               
                firstNum = operate(firstNum, secondNum, operator);
                if (String(firstNum).includes(".0")) {
                    firstNum = Math.floor(firstNum);
                }
                console.log(typeof firstNum);
                if (firstNum === Infinity){
                    firstNum = "";
                    displayText.textContent = "NO WAY!";
                    operator = "";
                } else {
                    displayText.textContent = firstNum;
                    operator = event.target.textContent;
                }
                secondNum = "";
            };
            break;
        case "C": 
            firstNum = ""
            operator = ""
            secondNum = ""
            displayText.textContent = "0";
            break;
        case "=": 
            firstNum = operate(firstNum, secondNum, operator);
            if (String(firstNum).includes(".0")) {
                firstNum = Math.floor(firstNum);
            }
            displayText.textContent = firstNum;
            secondNum = ""; 
            operator = "";  
            if (firstNum === "") {
                displayText.textContent = "0";
            } 
    }
})
