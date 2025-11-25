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
        console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
               playerChoice === "paper" && computerChoice === "rock" ||
               playerChoice === "scissors" && computerChoice === "paper") {
               playerScore++;
               console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
    } else if (playerChoice === computerChoice) {
               console.log("Tie! You both picked the same thing.");
    }

    console.log(computerScore);
    console.log(playerScore);
};

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', () => {
    let playerSelection = "rock";
    playRound(playerSelection, computerSelection);
});

btnPaper.addEventListener('click', () => {
    let playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});
    
btnScissors.addEventListener('click', () => {
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






