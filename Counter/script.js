
let h1 = document.getElementById("count");

let increaseButton = document.getElementById("increase");

let decreaseButton = document.getElementById("decrease");

let resetButton = document.getElementById("reset");

let count = 100;
h1.textContent = count;

increaseButton.onclick = function() {
    count = count + 1;
    h1.textContent = count;
}

decreaseButton.onclick = function() {
    if (count != 0)
    count = count - 1;
    h1.textContent = count;
}

resetButton.onclick = function() {
    count = 0;
    h1.textContent = count;
}