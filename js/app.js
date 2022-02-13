
function computerPlay(){
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break; 
        default:
            return null;
            break;
    }
}

function playerSelection(){
    let playerChoice = prompt('Rock? Paper? Scissor?', 'scissor');
    return playerChoice.toLowerCase();
}

// this function returns 0 if its a Tie 
// returns 1 if player wins
// returns 2 if computer wins
function playRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection ){
        return 0; 
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper'){
        return 1; 
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissor'){
        return 2;
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock'){
        return 2;
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissor'){
        return 1;
    }
    else if (computerSelection === 'scissor' && playerSelection === 'rock'){
        return 1;
    } 
    else if (computerSelection === 'scissor' && playerSelection === 'paper'){
        return 2;
    }
    else {
        return `one or both of the selection are not rock, paper or scissor`;
    }
}

function game(){
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++){
        const compChoice = computerPlay();
        const playChoice = playerSelection();
        const result = playRound(compChoice,playChoice);
        console.log(`computer choice:${compChoice}, player choice: ${playChoice}`);
        if (result === 0){
            console.log (`It's a tie!`);
        }
        else if (result === 1){
            playerScore++;
            console.log(`Player wins this round`);
        }
        else if (result === 2){
            compScore++;
            console.log(`Computer wins this round`);
        }
        console.log(`Player:${playerScore} vs Computer:${compScore}`);
    }
    return [playerScore, compScore]
}

const results = game();

if (results[0] > results[1]){
    console.log(`PLAYER WINS THE GAME!`);
}
else if (results[0] < results[1]){
    console.log(`COMPUTER WINS THE GAME!`);
}
else {
    console.log(`It's a tie!`);
}
