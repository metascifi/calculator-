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
        case "*":
        case "x":
            firstNum = +num1 * +num2;
            return +firstNum.toFixed(1); 
        case "/":
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
            displayText.textContent += secondNum;
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
            displayText.textContent += event.target.textContent;
        };
        console.log(firstNum, secondNum)
    } 
})

document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (!"0123456789.".includes(event.key)) return "";
    if (operator === "") {
        if (displayText.textContent === "0") {
            firstNum = event.key;
            if (firstNum === ".") return "";
            displayText.textContent = firstNum; 
        } else {
            if (firstNum === "0") {
               firstNum = event.key;
            } else {
                firstNum += event.key;
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
                // console.log(firstNum, secondNum);
            };   
        };
    } else {
        if (displayText.textContent === "" || secondNum === "0") {
            secondNum = event.key;
            displayText.textContent += secondNum;
        } else {
            secondNum += event.key;
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
            displayText.textContent += event.key;
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
                if (event.target.textContent === "x") {
                   operator = "*"
                } else {
                    operator = event.target.textContent;
                }
                displayText.textContent += operator;
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
                    displayText.textContent += operator;
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
            secondNum = ""; 
            operator = ""; 
            if (firstNum === "" && displayText.textContent !== ""){
                firstNum = displayText.textContent;
                break;
            }
            displayText.textContent = firstNum;
            if (firstNum === "") {
                displayText.textContent = "0";
            }
            break;
        case "→":
            if (secondNum === ""){
                let array = String(firstNum).split("");
                array.pop();
                firstNum = array.join("");
                if (firstNum === "") firstNum = "0";  
                displayText.textContent = firstNum;
            } else {
                let array = String(secondNum).split("");
                array.pop();
                secondNum = array.join("");
                if (secondNum === "") secondNum = "0";  
                displayText.textContent = secondNum;
            }
    }
})

document.addEventListener("keydown", (event) => {
    switch (event.key){
        case "/":
        case "*":
        case "+":
        case "-":
            if (operator === "") {
                operator = event.key;
                displayText.textContent += operator;
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
                    operator = event.key;
                    displayText.textContent += operator;
                }
                secondNum = "";
            };
            break;
        case "Delete": 
            firstNum = ""
            operator = ""
            secondNum = ""
            displayText.textContent = "0";
            break;
        case "=":    
        case "Enter": 
            firstNum = operate(firstNum, secondNum, operator);
            if (String(firstNum).includes(".0")) {
                firstNum = Math.floor(firstNum);
            }
            secondNum = ""; 
            operator = "";
            if (firstNum === "" && displayText.textContent !== ""){
                firstNum = displayText.textContent;
                break;
            } 
            displayText.textContent = firstNum;
            if (firstNum === "") {
                displayText.textContent = "0";
            } 
            break;
        case "Backspace":
            if (secondNum === ""){
                let array = String(firstNum).split("");
                array.pop();
                firstNum = array.join("");
                if (firstNum === "") firstNum = "0";  
                displayText.textContent = firstNum;
            } else {
                let array = String(secondNum).split("");
                array.pop();
                secondNum = array.join("");
                if (secondNum === "") secondNum = "0";  
                displayText.textContent = secondNum;
            }
    }
})