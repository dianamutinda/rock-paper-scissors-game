const game = () => {
    let computerScore = 0;
    let playerScore = 0;
    
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const computerOptions = ['✊', '🤚', '✌️'];
    
    playerOptions.forEach(Option => {
        Option.addEventListener('click', function(){
            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];
    
            winner(this.innerText, computerChoice);
        })
    })
    
        const winner = (player, computer) => {
        const resultMessage = document.querySelector('.score-text');
        const computerScoreBoard = document.querySelector('.computerCount');
        const playerScoreBoard = document.querySelector('.playerCount');
        if(player === computer){
            resultMessage.textContent = 'You Tie';
        }else if(player == 'rock'){
            if(computer == 'paper'){
                resultMessage.textContent = 'computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else {
                resultMessage.textContent = 'player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }else if(player == 'paper'){
            if(computer == 'scissors'){
                resultMessage.textContent = 'computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else {
                resultMessage.textContent = 'player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }else if(player == 'scissors'){
            if(computer == 'rock'){
                resultMessage.textContent = 'computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else {
                resultMessage.textContent = 'player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
    
    }
    game();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    