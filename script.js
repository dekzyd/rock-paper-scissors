let humanScore = 0;
let computerScore = 0;


function getComputerChoice (){

    // Init comChoice variable
    let comChoice;

    // Get random number from 1 - 10
    const randomNumber = Math.floor((Math.random() * 10) + 1)    
    
    // If random number is 1-3 assign rock, else if random number is 4-6 assign paper else assign scissors.
    if (randomNumber >= 1 && randomNumber <= 3) {
        comChoice = 'Rock'
    } else if (randomNumber >= 4 && randomNumber <= 6) {
        comChoice = 'Paper'
    } else {
        comChoice = 'Scissors'
    }
    // return comChoice
    return comChoice;
}

const getHumanChoice = () => {
    // Init var humanChoice of type string
    let humanChoice;
    // Get user to input options 1 for rock, 2 for paper, 3 for scissors
    const choice = parseInt(prompt('Type 1 for Rock, 2 for Paper or 3 for Scissors'))

    if (choice === 1) {
        humanChoice = 'Rock'
    } else if (choice === 2) {
        humanChoice = 'Paper'
    } else {
        humanChoice = 'Scissors'
    }
    //return humanChoice
    return humanChoice
}

console.log(getHumanChoice());
console.log(getComputerChoice());
