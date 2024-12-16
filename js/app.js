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

    return choice.toLowerCase();
}

let computerScore = 0;
let humanScore = 0;