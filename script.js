const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playerOption = document.querySelector('.player-choice');
const computerOption = document.querySelector('.computer-choice');
const winner = document.querySelector('.winner');
const humanPoints = document.querySelector('.players-points');
const computerPoints = document.querySelector('.computers-points');


const choices = ['rock', 'paper', 'scissors']

let playerScore = 0;
let computerScore = 0;

//computer choice function
const computerRandom = () => {
    const number = Math.floor(Math.random() * choices.length);
    return choices[number];
}

//Who wins funcion
const determineResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return 'TIE';
    }
    
    switch (playerChoice) {
        case 'rock':
            return (computerChoice === 'scissors') ? 'WIN' : 'LOSE';
        case 'paper':
            return (computerChoice === 'rock') ? 'WIN' : 'LOSE';
        case 'scissors':
            return (computerChoice === 'paper') ? 'WIN' : 'LOSE';
        default:
            return 'TIE';
    }
};

//Updating result function
const updateGameResult = (result) => {
    switch (result) {
        case 'TIE':
            winner.textContent = "IT'S A TIE";
            winner.style.color = '#82caff';
            break;
        case 'WIN':
            winner.textContent = "YOU WIN";
            winner.style.color = '#35b365';
            playerScore++;
            humanPoints.textContent = `${playerScore}`;
            break;
        case 'LOSE':
            winner.textContent = "YOU LOSE";
            winner.style.color = '#DE0A26';
            computerScore++;
            computerPoints.textContent = `${computerScore}`;
            break;
    }
};

//final function with handles all the choices
const handleChoice  = (event) => {
    const playerChoice = event.currentTarget.id;


    if (playerChoice === 'rock') {
        playerOption.textContent = 'rock';
    } else if (playerChoice === 'paper'){
        playerOption.textContent = 'paper'
    } else if (playerChoice === 'scissors') {
        playerOption.textContent = 'scissors'
    }

    const computerChoice = computerRandom();
    computerOption.textContent = `${computerChoice}`;


    const result = determineResult(playerChoice, computerChoice);
    updateGameResult(result);
}

rock.addEventListener('click', handleChoice)
paper.addEventListener('click', handleChoice)
scissors.addEventListener('click', handleChoice)

