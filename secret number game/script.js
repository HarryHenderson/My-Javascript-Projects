let guessInput = document.getElementById('guessInput')
let guessButton = document.querySelector('.guess-btn')
let resetButton = document.querySelector('.reset-btn')
let resultDisplay = document.getElementById('result')
let resetDisplay = document.getElementById('Reset')

let secretNumber = Math.floor(Math.random() * 5) + 1
console.log(secretNumber)

guessButton.addEventListener('click', function () {
  let userInput = Number(guessInput.value);
  if (userInput === secretNumber) {
    resultDisplay.textContent = "🎉 Correct! You got it!"
  } else if (userInput < secretNumber) {
    resultDisplay.textContent = "⬇️ Too low! Try again."
  } else if (userInput > secretNumber) {
    resultDisplay.textContent = "⬆️ Too high! Try again."
  }
})

resetDisplay.addEventListener('click', function () {
  resultDisplay.textContent = ""
  guessInput.value = ""
})