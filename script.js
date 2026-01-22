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

console.log(getComputerChoice());
