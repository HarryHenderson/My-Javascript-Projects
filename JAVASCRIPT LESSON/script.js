

console.log("hello world!");

function Dice(){
    return Math.floor(Math.random()*6) + 1;
}

function Game() {
    if (Dice() == 6) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

Game();