//
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playerOption = document.querySelector('.player-choice');
const computerOption = document.querySelector('.computer-choice');
const winner = document.querySelector('.winner');
const humanPoints = document.querySelector('.players-points');
const computerPoints = document.querySelector('.computers-points');


const choices = ['rock', 'paper', 'scissors']

//computer choice function
const computerRandom = () => {
    const number = Math.floor(Math.random() * choices.length);
    return choices[number];
}


const handleChoice  = (event) => {
    const playerChoice = event.currentTarget.id;
    let playerScore = 0;
    let computerScore = 0;

    if (playerChoice === 'rock') {
        playerOption.textContent = 'rock';
    } else if (playerChoice === 'paper'){
        playerOption.textContent = 'paper'
    } else if (playerChoice === 'scissors') {
        playerOption.textContent = 'scissors'
    }

    const computerChoice = computerRandom();
    computerOption.textContent = `${computerChoice}`;

    if (playerChoice === computerChoice) {
        winner.textContent = "IT'S A TIE";
        winner.style.color = '#82caff'
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        winner.textContent = "YOU LOSE";
        winner.style.color = '#DE0A26'
        computerScore++;
        computerPoints.textContent = `${computerScore}`
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        winner.textContent = "YOU WIN";
        winner.style.color = '#35b365'
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        winner.textContent = "YOU WIN";
        winner.style.color = '#35b365'
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        winner.textContent = "YOU LOSE";
        winner.style.color = '#DE0A26'
        computerScore++;
        computerPoints.textContent = `${computerScore}`
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        winner.textContent = "YOU WIN";
        winner.style.color = '#35b365'
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        winner.textContent = "YOU LOSE";
        winner.style.color = '#DE0A26'
        computerScore++;
        computerPoints.textContent = `${computerScore++}`
    }
}




//listenery
rock.addEventListener('click', handleChoice)
paper.addEventListener('click', handleChoice)
scissors.addEventListener('click', handleChoice)

