function add (a, b) {
  return a + b
}

function multiply (a, b) {
  return a * b
}

function subtract (a, b) {
  return a - b
}

function divide (a, b) {
  if (b == 0) {
    return "don't be stupid"
  }

  return a / b
}

let firstNumber = ''
let operator = null
let secondNumber = ''

// Get the result input field
let result = document.getElementById('result')

// Get all the buttons
let buttons = document.getElementsByClassName('btn')

// Add click event listener to each button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    // Check if button value is a number or '.'
    if (!isNaN(this.value) || this.value === '.') {
      // Append the button's value to the result input field
      result.value += this.value
    }
  })
}
