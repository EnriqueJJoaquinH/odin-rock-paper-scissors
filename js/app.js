/*  getComputerChoice() will return randomly one of the following strings:
        "rock", "paper", or "scissors"
    Create a random number

    Pseudocode:
    Multiply that number three times
    Round the number down
    Depending on the number value, assign the result a different string
    Return that string
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
