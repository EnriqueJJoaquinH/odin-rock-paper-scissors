/*  getComputerChoice() will return randomly one of the following strings:
        "rock", "paper", or "scissors"
        
        Pseudocode:
    - Create a random number
    - Multiply that number three times
    - Round the number down
    - Depending on the number value, assign the result a different string
    - Return that string
*/
   
function getComputerChoice() {
    let randNum = Math.ceil(3 * Math.random());
    
    let choice = "";
    switch (randNum){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }

    console.log(`Computer's choice: ${choice}`);

    return choice;
}

/*  getHumanChoice() asks the user to enter one of the valid options:
        "rock", "paper", or "scissors"

    Pseudocode:
    - Show a message in the console, so the user knows what to type
    - Retrieve the user's answer and save it into a variable
    - Return that variable
*/

function getHumanChoice() {
    let choice = prompt('Type your choice (rock, paper, or scissors): ');

    console.log(`Your choice: ${choice}`)

    return choice.toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

/*  playRound() takes the human and computer choices, selects the result of
        the round, and logs a message in the console
    
    Pseudocode:
    - Given the human and computer choices, compares them as follows:
        - If human is rock and computer scissors, human is paper and computer rock,
          or human scissors and computer paper, then human won
        - If human is the same as computer, then nobody won
        - Else, the computer won
    - For each case, log a string in the console showing the round results
*/

function playRound(humanChoice, computerChoice) {
    const case1 = humanChoice == 'rock' && computerChoice == 'scissors';
    const case2 = humanChoice == 'paper' && computerChoice == 'rock';
    const case3 = humanChoice == 'scissors' && computerChoice == 'paper';

    if (case1 || case2 || case3){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    } else if (humanChoice == computerChoice){
        console.log(`It's a draw! Both of you chose ${humanChoice}`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);