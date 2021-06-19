// 1. Create two variables, firstCard and secondCard
// Set their values to a random number between 2-11
let firstCard, secondCard;
firstCard = Math.round(2 + Math.random()*(11-2));
secondCard = Math.round(2 + Math.random()*(11-2));

// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;
console.log(sum);

// 3. Create a conditional to implement the objective of the game
if (sum < 21) {
    console.log("Would you like to draw a new card?")
} else if (sum === 21) {
    console.log("Congratulations! You've got Blackjack!")
} else {
    console.log("Sorry! You're out of the game")
}