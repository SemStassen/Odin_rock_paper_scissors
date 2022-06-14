//adding eventListeners to rps buttons
const rpsButtons = document.querySelectorAll('button')
rpsButtons.forEach(button => {
    button.addEventListener('click', userPlay)
});

// playing round when button is pressed
function userPlay() {
    game(this.id)
}

//computerPlay
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

//logic for checking who wins
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
    } 
}

//defining playerScore and hud element selectors
let playerScore = 0
let computerScore = 0
let round = 1
const score = document.querySelector(".score")
const roundInfo = document.querySelector(".roundResult h3")
const roundCounter = document.querySelector(".roundCounter h3")

//changing hud based on the round result
function game(playerPick) {
   roundResult = playRound(playerPick, computerPlay())
   round++
   score.textContent = `${playerScore} - ${computerScore}`
   roundInfo.textContent = `${roundResult}` 
   roundCounter.textContent = `Round ${round}`
 
}
