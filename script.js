let computerSelection;
let playerSelection;

function getComputerChoice () {
    let x = Math.floor(Math.random() * 3);
    let string;

    switch (x) {
        case 0:
            string = "Rock";
            break;
        case 1:
            string = "Paper";
            break;
        case 2:
            string = "Scissors";
            break;
        default:
            string = " ";
    }
    return string;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")
    )   {
        return "Computer";
    } else {
        return "User";
    }
}

function capitalizeString (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game () {
    let winner;
    let computerScore = 0;
    let playerScore = 0;


    for (let i = 1; i <= 5; i++) {

        console.log("ROUND " + i + " OF 5");

        computerSelection = getComputerChoice().toLowerCase();

        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            playerSelection = prompt("ENTER:    Rock   or   Paper   or   Scissors").toLowerCase();
        }
        
        computerSelection = capitalizeString(computerSelection);
        playerSelection = capitalizeString(playerSelection);
        console.log("You chose " + playerSelection + ". Computer chooses " + computerSelection + ".")

        winner = playRound(playerSelection, computerSelection);

        switch (winner) {
            case "Tie":
                console.log("Tie!");
                console.log("SCORE  ||  User: " + playerScore + "    Computer: " + computerScore);
                break;
            case "Computer":
                computerScore++;
                console.log("You lose! " + computerSelection + " beats " + playerSelection + ".");
                console.log("SCORE  ||  User: " + playerScore + "    Computer: " + computerScore);
                break;
            case "User":
                playerScore++;
                console.log("You win! " + computerSelection + " beats " + playerSelection + ".");
                console.log("SCORE  ||  User: " + playerScore + "    Computer: " + computerScore);
                break;
        }

        console.log("");
    }

    if (playerScore == computerScore) {
        console.log("TIE");
    } else if (playerScore < computerScore) {
        console.log("DEFEAT");
    } else {
        console.log("VICTORY");
    }
}

game();