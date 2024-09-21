const mode =document.getElementById("mode");
const body = document.getElementById("game");

mode.addEventListener("click",event=>{
    if(mode.textContent === "🌙 Dark Mode"){
        body.style.color="white";
        mode.style.backgroundColor ="white";
        mode.style.color = "black"
        mode.textContent = "☀️ Light Mode";
        body.style.backgroundColor= "black";

    }
    else{
        
        body.style.color="black";
        mode.style.backgroundColor ="black";
        mode.style.color = "white"
        mode.textContent = "🌙 Dark Mode";
        body.style.backgroundColor= "white";
    }
});

//GAME LOGIC

const  choice = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDipslay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choice[Math.floor(Math.random()*3)];
    let result ="";
    if(playerChoice === computerChoice){
        result ="IT's A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!":"YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!":"YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!":"YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent =`COMPUTER: ${computerChoice}`;
    resultDipslay.textContent = result;
    resultDipslay.classList.remove("greenText","redText");

    switch(result){
        case "YOU WIN!":
            resultDipslay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDipslay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    if playerScore ==5{
        document.write("YOU WIN");
    }
    else{
        document.write("YOU LOSE");
    }

}
