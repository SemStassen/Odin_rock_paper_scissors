

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

let computerSelection = computerPlay();
console.log(computerSelection)