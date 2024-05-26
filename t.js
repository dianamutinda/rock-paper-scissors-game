let playerScore = 0;
let computerScore = 0;


let computerChoice = document.getElementById("emoji1");
let playerChoice = document.getElementById("emoji2");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let resultMessage = document.getElementById("winText");
let playerScoreBoard = document.getElementById("computerCount");
let computerScoreBoard = document.getElementById("playerCount");

function updateScore(){
    computerScoreBoard.textContent = computerScore;
    playerScoreBoard.textContent = playerScore;
}
function winner(){
    if(resultMessage == "player wins"){
        playerScore++;
    }else if(resultMessage == "computer wins"){
        computerScore++;
    }
updateScore();
}
rockBtn.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 3+1);
    if (num === 1){
        computerChoice.textContent = '✊';
    }else if(num === 2){
        computerChoice.textContent = '🤚';
    }else if(num === 3){
        computerChoice.textContent = '✌️';
    }
    playerChoice.textContent = '✊';

    if (num === 1){
        resultMessage.textContent = 'draw';
    }else if(num === 2){
        resultMessage.textContent = 'computer wins';
    }else if(num === 3){
        resultMessage.textContent = 'player wins';
    }
    winner();
})
paperBtn.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 3+1);
    if (num === 2){
        computerChoice.textContent = '🤚';
    }else if(num === 1){
        computerChoice.textContent = '✊';
    }else if(num === 3){
        computerChoice.textContent = '✌️';
    }
    playerChoice.textContent = '🤚';

    if (num === 2){
        resultMessage.textContent = 'draw';
    }else if(num === 3){
        resultMessage.textContent = 'computer wins';
    }else if(num === 1){
        resultMessage.textContent = 'player wins';
    }
    winner();
})
scissorsBtn.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 3+1);
    if (num === 3){
        computerChoice.textContent = '✌️';
    }else if(num === 1){
        computerChoice.textContent = '✊';
    }else if(num === 3){
        computerChoice.textContent = '🤚';
    }
    playerChoice.textContent = '✌️';

    if (num === 3){
        resultMessage.textContent = 'draw';
    }else if(num === 1){
        resultMessage.textContent = 'computer wins';
    }else if(num === 2){
        resultMessage.textContent = 'player wins';
    }
    winner();
})