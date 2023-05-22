let playerScore = 0;
let aiScore = 0;

function playRound(playerMove, aiMove) {
    if (playerMove != "rock" && playerMove != "paper" && playerMove != "scissors") {
        console.log("You didn't pick a valid weapon! You lose..");
    } else if (aiMove === playerMove) {
        console.log("Draw.");
    } else if ((playerMove === "paper" && aiMove === "rock") || (playerMove === "rock" && aiMove === "scissors") || (playerMove === "scissors" && aiMove === "paper")) {
        console.log("Player win!");
        playerScore++;
    } else {
        console.log("AI win!");
        aiScore++;
    }
    
    console.log(`Player: ${playerScore} - AI: ${aiScore}`);
}

function game() {
    for (let i = 0; i < 5; i++) {
        const choices = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * choices.length);

        const playerMove = prompt("Choose your weapon: ").toLowerCase();
        console.log(`Player: ${playerMove}`);

        const aiMove = choices[random];
        console.log(`AI: ${aiMove}`);

        playRound(playerMove, aiMove);
    }
}

function result() {
    if (playerScore > aiScore) {
        console.log("Player wins the round!");
    } else if (aiScore > playerScore) {
        console.log("AI wins the round!");
    } else {
        console.log("This round is a Draw!");
    }
}

game();

result();