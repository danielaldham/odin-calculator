const buttons = document.querySelectorAll('.button');

const screen = document.querySelector('.screen');

let number1 = "";
let number2 = "";
let operator = "";
let displayNumber = "";
let operatorClicked = false;
let numberClicked = false;

function add(number1, number2) {
    result = parseFloat(number1) + parseFloat(number2);
    return result
}

function subtract(number1, number2) {
    result = parseFloat(number1) - parseFloat(number2);
    return result
}

function multiply(number1, number2) {
    result = parseFloat(number1) * parseFloat(number2);
    return result
}

function divide(number1, number2) {
    result = parseFloat(number1) / parseFloat(number2);
    return result
}

function operate(number1, number2, operator) {
    if (operator === 'add') {
        result =  add(number1, number2)
    } else if (operator === 'subtract') {
        result = subtract(number1, number2)
    } else if (operator === 'multiply') {
        result = multiply(number1, number2)
    } else if (operator === 'divide') {
        result = divide(number1, number2)
    }
    return result
}

function handleButtonClick(event) {
    const button = event.target;
    console.log(numberClicked)

    if (button.classList.contains('number')) {
        if (!numberClicked) {
            displayNumber = ""
            numberClicked = true
        }
        displayNumber = displayNumber.concat(event.target.id)
    } else if (button.classList.contains('operator')) {
        if (button.id === 'clear') {
            displayNumber = "0";
            number1 = "";
            number2 = "";
            operator = "";
            operatorClicked = false;
            numberClicked = false;
        } else {
            if (!operatorClicked) {
                number1 = displayNumber
                operator = button.id
                displayNumber = "";
                operatorClicked = true;
            } else {
                number2 = displayNumber;
                displayNumber = operate(number1, number2, operator).toString();
                if (button.id === 'equal') {
                    number1 = "";
                    number2 = "";
                    operator = "";
                    operatorClicked = false;
                    numberClicked = false;
                } else {
                    number1 = displayNumber;
                    number2 = "";
                    operator = button.id;
                }
            }
        }
    }
    console.log(displayNumber);
    console.log(numberClicked)

    screen.textContent = `${displayNumber}`;
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// console.log(operate(number1, number1, 'multiply'))