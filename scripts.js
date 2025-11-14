function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[(Math.floor(Math.random() * choices.length))];
    return computerChoice;
};

function getPlayerChoice() {
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    return playerChoice.toLowerCase();
};

function playGame() {
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === "rock" && computerChoice === "paper" || 
            playerChoice === "paper" && computerChoice === "scissors" ||
            playerChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
        } else if (playerChoice === "rock" && computerChoice === "scissors" ||
                   playerChoice === "paper" && computerChoice === "rock" ||
                   playerChoice === "scissors" && computerChoice === "paper") {
            playerScore++;
            console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
        } else if (playerChoice === computerChoice) {
            console.log("Tie! You both picked the same thing.");
        }
    };
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    };

    function declareScore() {
        if (playerScore > computerScore) {
            console.log("Congratulations you won " + playerScore + " to " + computerScore + "!");
        } else if (computerScore > playerScore) {
            console.log("Sorry you lost " + computerScore + " to " + playerScore + "!");
        } else {
            console.log("You tied!");
        }
    };

    declareScore();
};

playGame();






