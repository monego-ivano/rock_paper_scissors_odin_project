let computerScore = 0;
let playerScore = 0;


function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    let computerMove = moves[Math.floor(Math.random() * 3)];
    return computerMove;
}

function playRound(playerChoice, computerChoice) {

    /* if (playerChoice !== "rock" && playerChoice !== "scissors" && playerChoice !== "paper") {
        console.log("Please, write something meaningful.");
        playRound();
    } */

    console.log(`Player choice is ${playerChoice}, while computer choice is ${computerChoice}`)

    // PLAYER'S CHOICE IS ROCK

    if (playerChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("Rock and Rock. It's a tie!");
        } else if (computerChoice == "scissors") {
            console.log("Rock beats Scissors. Player 1 scores.");
            playerScore += 1;
        } else {
            console.log("Paper beats Rock. Computer scores.");
            computerScore += 1;
        }

        // PLAYER'S CHOICE IS SCISSORS
    } else if (playerChoice == "scissors") {
        if (computerChoice == "scissors") {
            console.log("Scissors and Scissors. It's a tie!");
        } else if (computerChoice == "paper") {
            console.log("Scissors beats Paper. Player 1 scores.");
            playerScore += 1;
        } else {
            console.log("Rock beats Scissors. Computer scores.");
            computerScore += 1;
        }

        // PLAYER'S CHOICE IS PAPER
    } else if (playerChoice == "paper") {
        if (computerChoice == "paper") {
            console.log("Paper and Paper. It's a tie!");
        } else if (computerChoice == "rock") {
            console.log("Paper beats Rock. Player 1 scores.");
            playerScore += 1;
        } else {
            console.log("Scissors beats Paper. Computer scores.");
            computerScore += 1;
        }


    }

    console.log(`Player score is: ${playerScore}`);
    console.log(`Computer score is: ${computerScore}`);
}

function game() {

    for (let i = 1; i < 6; i++) {
        let playerChoice = prompt("Player, make your choice.").toLowerCase();
        let computerChoice = computerPlay();
        playRound(playerChoice, computerChoice);

    }

    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (playerScore === computerScore) {
        console.log("It's a tie!");
    } else {
        console.log("Computer wins!");
    }
}
game();