
function game() {

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

    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt("Please enter your input for round" + round + ':');
        let computerSelection = getComputerChoice();
        let playResult = playRound(playerSelection, computerSelection);

        console.log('Result for round ' + round + ':' + playResult);

        if(playResult.startsWith('You Win')) {
            playerScore ++;
        } else if (playResult.startsWith('You Lose')) {
            computerScore ++;
        } 
    }

    if (playerScore > computerScore) {
        return 'You Won the game';
    } else if (computerScore > playerScore) {
        return 'You Lost the game';
    } else {
        return 'Its a tie';
    }

}


const play = game();

console.log(play);