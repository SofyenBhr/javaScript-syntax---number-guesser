let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);
// console.log(generateTarget());

const compareGuesses =(humanGuess, computerGuess, secretNum) => {
    if (humanGuess < 0 || humanGuess > 9) {
        window.alert("Enter a number between 0 and 9.");
    } else if (Math.abs(secretNum - humanGuess) <= Math.abs(secretNum - computerGuess)) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(compareGuesses(3, 5, 2));

const updateScore = winner => {
    if (winner === "human") humanScore++;
    else computerScore++
}
// console.log(updateScore("human"));

const advanceRound = () => currentRoundNumber++;
// console.log(advanceRound());