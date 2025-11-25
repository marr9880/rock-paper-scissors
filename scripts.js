function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[(Math.floor(Math.random() * choices.length))];
    return computerChoice;
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "paper" || 
        playerChoice === "paper" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        const youLose = document.createElement("p");
        youLose.innerText = `You lose! ${computerChoice} beats ${playerChoice}.`;
        resultsDisplay.appendChild(youLose);
        const compScoreUp = document.createElement("span");
        compScoreUp.innerText = `   ${computerScore}`
        computerScoreDisplay.appendChild(compScoreUp);
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
               playerChoice === "paper" && computerChoice === "rock" ||
               playerChoice === "scissors" && computerChoice === "paper") {
               playerScore++;
               const youWin = document.createElement("p");
               youWin.innerText = `You win! ${playerChoice} beats ${computerChoice}.`;
               resultsDisplay.appendChild(youWin);
               const playerScoreUp = document.createElement("span");
               playerScoreUp.innerText = `   ${playerScore}`
               playerSocreDisplay.appendChild(playerScoreUp);
    } else if (playerChoice === computerChoice) {
               const youTied = document.createElement("p");
               youTied.innerText = "Tie! You both picked the same thing.";
               resultsDisplay.appendChild(youTied);
    }

};

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
let resultsDisplay = document.querySelector(".results");
let playerSocreDisplay = document.querySelector(".player-score");
let computerScoreDisplay = document.querySelector(".computer-score");
let winner = document.querySelector(".winner");
let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    if (playerScore === 5) {
    const playerWins = document.createElement("h2");
    playerWins.innerText = `Congratulations! You win ${playerScore} - ${computerScore}!`;
    winner.appendChild(playerWins);
    } else if (computerScore === 5) {
    const computerWins = document.createElement("h2");
    computerWins.innerText = `Sorry! You lose ${playerScore} - ${computerScore}!`;
    winner.appendChild(playerWins);
    } else {};
});

btnPaper.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    if (playerScore === 5) {
    const playerWins = document.createElement("h2");
    playerWins.innerText = `Congratulations! You win ${playerScore} - ${computerScore}!`;
    winner.appendChild(playerWins);
    } else if (computerScore === 5) {
    const computerWins = document.createElement("h2");
    computerWins.innerText = `Sorry! You lose ${playerScore} - ${computerScore}!`;
    winner.appendChild(playerWins);
    } else {};
});
    
btnScissors.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    if (playerScore === 5) {
    const playerWins = document.createElement("h2");
    playerWins.innerText = `Congratulations! You win ${playerScore} - ${computerScore}!`;
    winner.appendChild(playerWins);
    } else if (computerScore === 5) {
    const computerWins = document.createElement("h2");
    computerWins.innerText = `Sorry! You lose ${playerScore} - ${computerScore}!`;
    winner.appendChild(playerWins);
    } else {};
});


    
    
    

    

    







