// AI choices list
const choices = ["rock", "paper", "scissors"]

// Score
let playerScore = 0
let aiScore = 0

// Select buttons and attach event listeners to them
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", () => {
    playerChoice("rock")
})
paper.addEventListener("click", () => {
    playerChoice("paper")
})
scissors.addEventListener("click", () => {
    playerChoice("scissors")
})

// Select scores and results
const pScore = document.querySelector("#pScore")
const aScore = document.querySelector("#aScore")

const pMove = document.querySelector("#pMove")
const aMove = document.querySelector("#aMove")

const round = document.querySelector("#round")

// Function that sends the value of the button clicked to the game function
function playerChoice(choice) {
    game(choice)
}

function game(choice) {
    // Generating a random number each time the function is called
    const random = Math.floor(Math.random() * choices.length)

    // Setting the player's choice and updating the DOM
    const playerMove = choice
    pMove.textContent = playerMove

    // Setting the AI's choice and updating the DOM
    const aiMove = choices[random]
    aMove.textContent = aiMove

    // Send both choices for comparison
    playRound(playerMove, aiMove)
}

function playRound(playerMove, aiMove) {
    // Check for a winner and increment scores
    if (aiMove === playerMove) {
        round.textContent = "Draw."
    } else if ((playerMove === "paper" && aiMove === "rock") || (playerMove === "rock" && aiMove === "scissors") || (playerMove === "scissors" && aiMove === "paper")) {
        round.textContent = "Player win!"
        playerScore++
    } else {
        round.textContent = "AI win!"
        aiScore++
    }

    // Update score
    pScore.textContent = playerScore
    aScore.textContent = aiScore
}