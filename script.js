//html selectors
const rpsButtons = document.querySelectorAll('.container button')
const score = document.querySelector(".score")
const roundInfo = document.querySelector(".roundResult h3")
const roundCounter = document.querySelector(".roundCounter h3")
const modal = document.querySelector(".modal")
const gameWinner = document.querySelector(".gameResult")
const finalScore = document.querySelector(".finalScore")
const restartButton = document.querySelector(".modal-content button")

//score and round counters
let playerScore = 0
let computerScore = 0
let round = 1

//add eventlistener to restart button
restartButton.addEventListener('click', restart);

// add eventListener to each rps button
rpsButtons.forEach(button => {
    button.addEventListener('click', userPlay)
});

// play round when button is pressed
function userPlay() {
    game(this.id) // 'this.id' is either rock, paper or scissors
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
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose. " + computerSelection + ' beats ' + playerSelection
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lose. " + computerSelection + ' beats ' + playerSelection
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose. " + computerSelection + ' beats ' + playerSelection
    } else {
        playerScore++;
        return "you win! " + playerSelection + " beats " + computerSelection
    }
}

//changing hud based on the round
function game(playerPick) {
    roundResult = playRound(playerPick, computerPlay())
    round++
    score.textContent = `${playerScore} - ${computerScore}`
    roundInfo.textContent = `${roundResult}`
    roundCounter.textContent = `Round ${round}`
    if (playerScore >= 5 || computerScore >= 5) {
        gameOver();
    }
}

function gameOver() {
    finalScore.textContent = `${playerScore} - ${computerScore}`
    if (playerScore >= 5) {
        gameWinner.textContent = "You win!"
    } else {
        gameWinner.textContent = "You lose!"
    }
    modal.classList.toggle("show")
}

function restart() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    modal.classList.toggle("show")
}
