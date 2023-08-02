
document.addEventListener("DOMContentLoaded", function() {
    let rockBtn = document.getElementById("rock");
    let paperBtn = document.getElementById("paper");
    let scissorsBtn = document.getElementById("scissors");
    let playerScoreElement = document.getElementById("playerScore");
    let computerScoreElement = document.getElementById("computerScore");
    let outcomeElement = document.getElementById('outcome');

    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection) {
    
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
    
        if (playerSelection === computerSelection) {
            return 'Its a Tie!'
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock'
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return 'You Win! Paper beats Rock'
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return 'You Lose! Scissors beats Paper'
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return 'You Win! Scissors beats Paper'
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return 'You Lose! Rock beats Scissors'
        } else {
            return 'You Win! Rock beats Scissors'
        }
    }

    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };


    function updateDisplay() {
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    };

    function updateScores(playResult) {
        if(playResult.startsWith('You Win')) {
            playerScore ++;
        } else if (playResult.startsWith('You Lose')) {
            computerScore ++;
        } 

        updateDisplay();
        outcomeElement.textContent = playResult;
    }

    function determineOutcome() {
        if (playerScore > computerScore) {
            outcomeElement.textContent = 'You Won the game';
        } else if (computerScore > playerScore) {
            outcomeElement.textContent = 'You Lost the game';
        } else {
            outcomeElement.textContent ='Its a tie';
        }
    }

    function game(playerSelection) {

        const computerSelection = getComputerChoice();
        const playResult = playRound(playerSelection, computerSelection);
        updateScores(playResult);
        determineOutcome();
    }

    
    rockBtn.addEventListener('click', () => game('rock'));
    paperBtn.addEventListener('click', () => game('paper'));
    scissorsBtn.addEventListener('click', () => game('scissors'));
});

