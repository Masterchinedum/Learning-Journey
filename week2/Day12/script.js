// script.js

let score = JSON.parse(localStorage.getItem('rpsScore')) || { wins: 0, losses: 0, ties: 0 };
let autoPlayInterval;
let isAutoPlayOn = false; // Flag to track Auto Play status

updateScoreDisplay();

function toggleAutoPlay() {
    const autoPlayButton = document.querySelector('.autoplaybtn');
    if (isAutoPlayOn) {
        clearInterval(autoPlayInterval); // Stop Auto Play
        autoPlayButton.textContent = 'Auto Play';
    } else {
        autoPlayInterval = setInterval(function () {
            const userChoice = getRandomMove();
            playRound(userChoice);
        }, 1000);
        autoPlayButton.textContent = 'Stop';
    }
    isAutoPlayOn = !isAutoPlayOn; // Toggle the Auto Play status
    autoPlayButton.classList.toggle('active', isAutoPlayOn); // Toggle the "active" class
}

function getRandomMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
}


function playRound(userChoice) {
    const moves = ['rock', 'paper', 'scissors'];
    const computerChoice = moves[Math.floor(Math.random() * 3)];
    const result = getRoundResult(userChoice, computerChoice);
    displayUserAndComputerMoves(userChoice, computerChoice);
    updateScore(result);
}

function getRoundResult(userChoice, computerChoice) {
    // Modify this function to use lowercase strings for comparison
    userChoice = userChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (userChoice === computerChoice) return 'It\'s a Tie';
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You Win';
    }
    return 'You Lose';
}

function updateScore(result) {
    if (result === 'You Win') score.wins++;
    else if (result === 'You Lose') score.losses++;
    else if (result === 'It\'s a Tie') score.ties++;
    localStorage.setItem('rpsScore', JSON.stringify(score));
    displayScore();
    displayResult(result);
}

function resetGame() {
    score = { wins: 0, losses: 0, ties: 0 };
    localStorage.removeItem('rpsScore');
    updateScoreDisplay();
}

function displayUserAndComputerMoves(userChoice, computerChoice) {
    document.querySelector('.moves-text').innerHTML = `You <img src = "../Day11/images/${userChoice}.png" alt = "${userChoice}" class="moveicon"> <img src = "../Day11/images/${computerChoice}.png" alt = "${computerChoice}" class="moveicon">  Computer 
    <br><span style="margin-top: 10px; display: block;"> you picked <b>${userChoice}</b> an computer picked <b>${computerChoice}</b> <span>`;
}

function updateScoreDisplay() {
    displayScore();
    displayResult('');
    clearUserAndComputerMoves();
}

function displayScore() {
    document.querySelector('.score-text').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function displayResult(result) {
    document.querySelector('.result-text').innerHTML = result;
}

function clearUserAndComputerMoves() {
    document.querySelector('.moves-text').innerHTML = '';
};