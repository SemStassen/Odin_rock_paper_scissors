//computerplay
function computerPlay() {
    // generate a number between 1 and 3 which represents:
    // 1 = rock
    // 2 = paper
    // 3 = scissors

    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber == 1) {
        return "rock"
    } else if (randomNumber == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function userPlay() {
    //ask the user for a choice
    let userChoice = prompt("Rock, Paper, or Scissors")
    //checking if userChoice is a valid option, else ask them again
    if (userChoice.toLowerCase() == "paper" || userChoice.toLowerCase() == "rock" || userChoice.toLowerCase() == "scissors") {
        return userChoice.toLowerCase();
    } else {
        alert("Invalid choice!")
        userPlay();
    }
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie! Both players chose " + playerSelection 
    } 
    
     if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore++;
            return "You lose. " + computerSelection + ' beats ' + playerSelection
        } else {
            playerScore++;
            return "you win! " + playerSelection + " beats " + computerSelection
        }

        //paper
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            computerScore++;
            return "You lose. " + computerSelection + ' beats ' + playerSelection
        } else {
            playerScore++;
            return "you win! " + playerSelection + " beats " + computerSelection
        }

        //scissors
    } else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            computerScore++;
            return "You lose. " + computerSelection + ' beats ' + playerSelection
        } else {
            playerScore++;
            return "you win! " + playerSelection + " beats " + computerSelection
        }
    } else {
        return "You cancelled the round"
    }
}
let playerScore = 0
let computerScore = 0

function game() {
    for (i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = userPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        console.log(`You won! Final score ${playerScore} - ${computerScore}`)
    } else if (computerScore > playerScore) {
        console.log(`You lose ): Final score ${playerScore} - ${computerScore}`)
    } else {
        console.log(`It's a tie. Final score ${playerScore} - ${computerScore}`)
    }
}

game();
