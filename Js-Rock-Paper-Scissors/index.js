//Rock-Paper-Scissor


const choices=["rock","paper","scissor"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice= choices[Math.floor(Math.random()*3)];
    let result="";

    console.log(computerChoice);

    if(playerChoice===computerChoice){
        result="Its Tie, try again!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result= (computerChoice==="scissor")? "You win😁":"You lose😔";
                break;
            case "paper":
                result= (computerChoice==="rock")? "You win😁":"You lose😔";
                break;
            case "scissor":
                result= (computerChoice==="paper")? "You win😁":"You lose😔";
                break;
        }
    }

    playerDisplay.textContent=`Player: ${playerChoice} `;
    computerDisplay.textContent=`Computer:${computerChoice}`;
    resultDisplay.textContent=result;
    
    resultDisplay.classList.remove("greenText", "redText");


    switch(result){
        case "You win😁":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent=playerScore;
            break;
        case "You lose😔":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent=computerScore;
            break;    
    }
}

