// script.js

let score = JSON.parse(localStorage.getItem('rpsScore')) || { wins: 0, losses: 0, ties: 0 };

updateScoreDisplay();

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
    document.querySelector('.moves-text').innerHTML = `You <img src = "images/${userChoice}.png" alt = "${userChoice}" class="moveicon"> <img src = "images/${computerChoice}.png" alt = "${computerChoice}" class="moveicon">  Computer 
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