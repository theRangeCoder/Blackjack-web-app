// Creating two variables, firstCard and secondCard
// Setting their values to a random number between 2-11
let firstCard, secondCard;
firstCard = Math.round(2 + Math.random()*(11-2));
secondCard = Math.round(2 + Math.random()*(11-2));

// Creating a variable to keep a track if the player has Blackjack or not
let hasBlackjack = false;

// Creating a variable, sum, and setting it to the sum of the two cards
let sum = firstCard + secondCard;
console.log(sum);

// Creating a conditional to implement the objective of the game
if (sum <= 20) {
    console.log("Would you like to draw a new card?")
} else if (sum === 21) {
    console.log("Congratulations! You've got Blackjack!")
    hasBlackjack = true;
} else {
    console.log("Sorry! You're out of the game")
}