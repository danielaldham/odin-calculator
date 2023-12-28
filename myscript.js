const buttons = document.querySelectorAll('.button');

const screen = document.querySelector('.screen');

function add(number1, number2) {
    return number1 + number2
}


function handleButtonClick(event) {
    const id = event.target.id;

    console.log(`${id} clicked`);

    screen.textContent = `${id}`;

}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});