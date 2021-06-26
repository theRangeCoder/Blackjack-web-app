// Creating two variables, firstCard and secondCard
// Setting their values to a random number between 2-11
let firstCard, secondCard;
firstCard = Math.round(2 + Math.random()*(11-2));
secondCard = Math.round(2 + Math.random()*(11-2));

// Creating an array to store the cards
let cards = [firstCard, secondCard];

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

// Creating a renderGame() function to render the state of the game at every step
function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let card of cards) {
        cardsEl.textContent += card + " ";
    }
    
    if (sum <= 20) {
        message = "Would you like to draw a new card?";
    } else if (sum === 21) {
        message = "Congratulations! You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "Sorry! You're out of the game";
        isAlive = false;
    }
    
    messageEl.textContent = message;
    sumEl.textContent += " "+sum;
}

function startGame() {
    renderGame();
}

function newCard() {
    console.log("Drawing a new card from the deck!");

    // Creating a new variable to assign the value of a new card
    let nCard = Math.round(2 + Math.random()*(11-2));

    // Adding the new card to the cards array
    cards[cards.length] = nCard;

    // Adding the value of the new card to the sum variable
    sum += nCard;

    // Calling the renderGame() function
    renderGame();
}
