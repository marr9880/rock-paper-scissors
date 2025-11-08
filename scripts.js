function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

function getPlayerChoice() {
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    return playerChoice.toLowerCase();
};

function playGame() {
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats rock.");
        } else if (playerChoice === "rock" && computerChoice === "scissors") {
            playerScore++;
            console.log("You win! Rock beats scissors.");
        } else if (playerChoice === "paper" && computerChoice === "rock") {
            playerScore++;
            console.log("You win! Paper beats rock.");
        } else if (playerChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats paper.");
        } else if (playerChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("You lose! rock beats scissors.");
        } else if (playerChoice === "scissors" && computerChoice === "paper") {
            playerScore++;
            console.log("You win! Scissors beats paper.");
        } else if (playerChoice === computerChoice) {
            console.log("Tie! You both picked the same thing.")
        }
    };
    
    let playerScore = 0;
    let computerScore = 0;

    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());

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






