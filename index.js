let player = {
    name: "John",
    chips: 250
}

let firstCard, secondCard;

// Creating an array to store the cards
let cards = [];

// Creating a variable, hasBlackjack, to keep a track if the player has Blackjack or not
let hasBlackjack = false;

// Creating a variable, isAlive, to check if the player is still in the game or not
let isAlive = false;

// Creating a variable, message, to store the message based on a player's sum
let message="";

let messageEl = document.getElementById("message-el");

let cardsEl = document.querySelector("#cards-el");

let sumEl = document.querySelector("#sum-el"); // based on a CSS selector

let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": €" + player.chips;

// Creating a function to generate a random card
function getRandomCard() {
    // Math.random() generates a random number in the range [0,1)
    // Math.random()*a generates a random number in the range [0,a)
    
    // For the sake of simplicity, we assume the value of the ace to be 11 at all times!
    // returning a number between 2 and 11
    let n = 2 + Math.floor(Math.random()*(11-1));
    return n;
}

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
    sumEl.textContent = "Sum: "+sum;
}

function startGame() {
    // Setting the starting state to true, now that the player has started the game
    isAlive = true;

    // Generating the initial cards and adding them to the cards array, now that the player has started the game
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];

    sum = firstCard + secondCard;

    renderGame();
}

function newCard() {
    // Allowing the user to draw a new card only if the user is alive as well as does not have a Blackjack
    if (isAlive === true && hasBlackjack === false) {
        console.log("Drawing a new card from the deck!");

        // Creating a new variable to assign the value of a new card
        let nCard = getRandomCard();

        // Adding the new card to the cards array
        cards.push(nCard);

        // Adding the value of the new card to the sum variable
        sum += nCard;

        // Calling the renderGame() function
        renderGame();
    }
}
