const buttons = document.querySelectorAll('.button');

const screen = document.querySelector('.screen');

let number1 = "";
let number2 = "";
let operator = "";
let displayNumber = "";
let operatorClicked = false;

function add(number1, number2) {
    result = int(number1) + int(number2);
    return result
}

function subtract(number1, number2) {
    result = number1 - number2;
    return result
}

function multiply(number1, number2) {
    result = number1 * number2;
    return result
}

function divide(number1, number2) {
    result = number1 / number2;
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

    if (button.classList.contains('number')) {
        displayNumber = displayNumber.concat(event.target.id)
    } else if (button.classList.contains('operator')) {
        number1 = displayNumber
        operator = event.target.id
    }
    console.log(displayNumber);

    screen.textContent = `${displayNumber}`;
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

console.log(operate(number1, number1, 'multiply'))