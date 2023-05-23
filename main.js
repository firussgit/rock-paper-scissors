// AI choices list
const choices = ["🧱", "🧾", "✂"]

// Score
let playerScore = 0
let aiScore = 0

// Select buttons and attach event listeners to them
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", () => {
    playerChoice("🧱")
})
paper.addEventListener("click", () => {
    playerChoice("🧾")
})
scissors.addEventListener("click", () => {
    playerChoice("✂")
})

// Select scores and results
const pScore = document.querySelector("#pScore")
const aScore = document.querySelector("#aScore")
const tScore = document.querySelector("#tScore")

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
        round.textContent = "Draw 🙂"
    } else if ((playerMove === "🧾" && aiMove === "🧱") || (playerMove === "🧱" && aiMove === "✂") || (playerMove === "✂" && aiMove === "🧾")) {
        round.textContent = "You win 🎉"
        playerScore++
    } else {
        round.textContent = "Computer wins 😭"
        aiScore++
    }

    // Update score
    pScore.textContent = playerScore
    aScore.textContent = aiScore
}