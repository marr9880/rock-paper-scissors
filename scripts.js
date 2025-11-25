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
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
               playerChoice === "paper" && computerChoice === "rock" ||
               playerChoice === "scissors" && computerChoice === "paper") {
               playerScore++;
               const youWin = document.createElement("p");
               youWin.innerText = `You win! ${playerChoice} beats ${computerChoice}.`;
               resultsDisplay.appendChild(youWin);
    } else if (playerChoice === computerChoice) {
               const youTied = document.createElement("p");
               youTied.innerText = "Tie! You both picked the same thing.";
               resultsDisplay.appendChild(youTied);
    }

    console.log(computerScore);
    console.log(playerScore);
};

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
let resultsDisplay = document.querySelector(".results");
let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";
    playRound(playerSelection, computerSelection);
});

btnPaper.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});
    
btnScissors.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
});    

    
    
    

    

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

playGame();






