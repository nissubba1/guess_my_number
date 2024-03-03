'use strict'

// Implement random number
// Get random number from 1 to 20
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);

// Score counter
let score  = 20;

// High score
let highScore = 0;

// Function to select message
const querySelectorMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// Function to select score
const querySelectorScore = function (score) {
    document.querySelector('.score').textContent = score;
}

// Add event handler when user clicks on the number
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    // Game Logic
    // Check to make sure input is not empty
    if (!guess) {
        // If input is empty, let them know
        querySelectorMessage('🚫 Not a number!!');
    } else if (guess === secretNumber) {
        // Strict check to make sure guessed number is same as secret random number
        querySelectorMessage('🎉🎉🎉 Congrats!!');

        // Change the screen to gree
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;

        // Check if the current high score is greater than score
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
            document.querySelector('.highscore-msg').textContent = '🥳💥🎉 You hit a new high score!!!';
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // If player still has lives left, tell them if their number is higher or lower
            querySelectorMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');

            score --; // decrease their score by 1 for each time they guess wrong
            querySelectorScore(score);
        } else {
            // They lost since their score is 0
            querySelectorScore(0);
            querySelectorMessage('💥 You lost the game!!');
        }
    }
})

// Reset to play again
document.querySelector('.again').addEventListener('click', function () {

    // reset the score
    score = 20;
    querySelectorScore(score);

    // Hide the high school message
    document.querySelector('.highscore-msg').textContent = '';

    // Reset the input to empty
    document.querySelector('.guess').value = '';

    // Reset the background color and width size
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    // Reset the secret number symbol
    document.querySelector('.number').textContent = '?';

    // Reset the random secret number
    secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
})