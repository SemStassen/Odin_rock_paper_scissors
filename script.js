let computerSelection = computerPlay();
let playerSelection = userPlay();

//computerplay
function computerPlay() {
    // generate a number between 1 and 3 which represents:
    // 1 = rock
    // 2 = paper
    // 3 = scissors

    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber == 1) {
        return "Rock"
    } else if (randomNumber == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function userPlay() {
    //ask the user for a choice
    let userChoice = prompt("Rock, Paper, or Scissors")
    if (userChoice.toLowerCase() == "rock") {
        return "Rock"
    } else if (userChoice.toLowerCase() == "paper") {
        return "Paper"
    } else if (userChoice.toLowerCase() == "scissors") {
        return "Scissors"
    } else (
        alert("that's not an option")
    )
}




function playRound(computerSelection, playerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie! Both players chose " + playerSelection 
    } 

    //rock
    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return "You lose. " + computerSelection + ' beats ' + playerSelection
        } else {
            return "you win! " + playerSelection + " beats " + computerSelection
        }

        //paper
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            return "You lose. " + computerSelection + ' beats ' + playerSelection
        } else {
            return "you win! " + playerSelection + " beats " + computerSelection
        }

        //scissors
    } else {
        if (computerSelection == "Rock") {
            return "You lose. " + computerSelection + ' beats ' + playerSelection
        } else {
            return "you win! " + playerSelection + " beats " + computerSelection
        }
    }
}

console.log(playRound(computerSelection, playerSelection))




















