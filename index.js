// Creating two variables, firstCard and secondCard
// Setting their values to a random number between 2-11
let firstCard, secondCard;
firstCard = Math.round(2 + Math.random()*(11-2));
secondCard = Math.round(2 + Math.random()*(11-2));

// Creating a variable, hasBlackjack, to keep a track if the player has Blackjack or not
let hasBlackjack = false;

// Creating a variable, isAlive, to check if the player is still in the game or not
isAlive = true;

// Creating a variable, message, to store the message based on a player's sum
let message="";

// Creating a variable, sum, and setting it to the sum of the two cards
let sum = firstCard + secondCard;
console.log(sum);

let messageEl = document.getElementById("message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el"); // based on a CSS selector

// Creating a startGame() function (to be executed when the user hits the 'START GAME' button)
function startGame() {
    if (sum <= 20) {
        message = "Would you like to draw a new card?";
    } else if (sum === 21) {
        message = "Congratulations! You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "Sorry! You're out of the game";
        isAlive = false;
    }
    cardsEl.textContent += " "+firstCard+" "+secondCard;
    messageEl.textContent = message;
    sumEl.textContent += " "+sum;
}
