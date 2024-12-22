// ? Global Variables to keep track of the scores
let computerScore = 0;
let humanScore = 0;
let roundCount = 0;

// ? DOM Global Variables
// Text headers
let roundTxt = document.querySelector('h1');
let winnerTxt = document.querySelector('h3');
// Player's information
let humanScoreTxt = document.querySelector('#human-score');
let computerScoreTxt = document.querySelector('#computer-score');
let humanChoiceImg = document.querySelectorAll('.choice')[0];
let computerChoiceImg = document.querySelectorAll('.choice')[1];
let computerChoiceTxt = document.querySelector('.button');
// Buttons
let btnPanel = document.querySelector('.buttons');
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let playAgainBtn = document.querySelector('#again')

/*  getComputerChoice() will return randomly one of the following strings:
        "rock", "paper", or "scissors" */
function getComputerChoice() {
    let randNum = Math.ceil(3 * Math.random());
    
    let choice = "";
    switch (randNum){
        case 1:
            choice = "rock";
            computerChoiceImg.textContent = '🪨';
            break;
        case 2:
            choice = "paper";
            computerChoiceImg.textContent = '📄';
            break;
        case 3:
            choice = "scissors";
            computerChoiceImg.textContent = '✂️';
            break;
    }

    computerChoiceTxt.textContent = `PC's choice: ${choice.toUpperCase()}`;

    return choice;
}

/*  getHumanChoice() asks the user to enter one of the valid options:
        "rock", "paper", or "scissors" */
function getHumanChoice(event) {
    switch (event.target.id) {
        case 'rock':
            humanChoiceImg.textContent = '🪨';
            break;
        case 'paper':
            humanChoiceImg.textContent = '📄';
            break;
        case 'scissors':
            humanChoiceImg.textContent = '✂️';
            break;
    }

    return event.target.id;
}

/*  playRound() takes the human and computer choices, selects the result of
        the round, and logs a message in the console */
function playRound(event) {
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();

    const case1 = humanChoice == 'rock' && computerChoice == 'scissors';
    const case2 = humanChoice == 'paper' && computerChoice == 'rock';
    const case3 = humanChoice == 'scissors' && computerChoice == 'paper';

    if (case1 || case2 || case3){
        winnerTxt.textContent = `🥳 You win! 🥳`;
        ++humanScore;
    } else if (humanChoice == computerChoice){
        winnerTxt.textContent = `😑 It's a draw! 😑`;
    } else {
        winnerTxt.textContent = `😭 You lose! 😭`;
        ++computerScore;
    }

    roundTxt.textContent = `ROUND ${++roundCount}`
    humanScoreTxt.textContent = `Your Score: ${humanScore}`;
    computerScoreTxt.textContent = `PC's Score: ${computerScore}`;
}

btnPanel.addEventListener('click', playRound);

/*  playGame() will play 5 rounds, keeping track of the scores so it can
        determine the winner at the end of the game */
function playGame() {
    console.clear();

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);
    if (humanScore > computerScore){
        console.log('Congratulations! You won!');
    } else if (computerScore > humanScore){
        console.log('Oh! You lost!');
    } else {
        console.log('You both got the same score! It\'s a draw!');
    }
}