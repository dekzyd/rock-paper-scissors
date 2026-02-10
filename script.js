let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const results = document.querySelector('#results')
const humScore = document.querySelector('#humScore')
const comScore = document.querySelector('#comScore')
const comChoice = document.querySelector('#comChoice')
const restart = document.querySelector('#restart')

rock.addEventListener('click', (e) => playRound(e))
paper.addEventListener('click', (e) => playRound(e))
scissors.addEventListener('click', (e) => playRound(e))
restart.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  humScore.textContent = 0;
  comScore.textContent = 0;
  results.textContent = '';
  comChoice.textContent = '';
});

humScore.textContent = humanScore;
comScore.textContent = computerScore

function getComputerChoice (){

    // Init comChoice variable
    let comChoice;

    // Get random number from 1 - 10
    const randomNumber = Math.floor((Math.random() * 10) + 1)    
    
    // If random number is 1-3 assign rock, else if random number is 4-6 assign paper else assign scissors.
    if (randomNumber >= 1 && randomNumber <= 3) {
        comChoice = 'rock'
    } else if (randomNumber >= 4 && randomNumber <= 6) {
        comChoice = 'paper'
    } else {
        comChoice = 'scissors'
    }
    // return comChoice
    return comChoice;
}

function getHumanChoice (e) {
    // Get user choice
    return e.target.id
}

function playRound(e) {
  // If game already ended, do nothing
  if (humanScore >= winningScore || computerScore >= winningScore) {
    return;
  }

  const human = getHumanChoice(e);
  const com = getComputerChoice();

  comChoice.textContent = `Computer chose ${com}`;

  if (human === com) {
    results.textContent = "It's a Tie!";
    return;
  }

  let humanWins = false;

  if (human === 'rock' && com === 'scissors') humanWins = true;
  if (human === 'paper' && com === 'rock') humanWins = true;
  if (human === 'scissors' && com === 'paper') humanWins = true;

  if (humanWins) {
    humanScore++;
    humScore.textContent = humanScore;
    results.textContent = `You Win! ${human} beats ${com}.`;
  } else {
    computerScore++;
    comScore.textContent = computerScore;
    results.textContent = `You Lose! ${com} beats ${human}.`;
  }

  // Check for winner
  if (humanScore >= winningScore) {
    results.textContent = "You win the game!! 🎉";
    showRestartButton();
  } else if (computerScore >= winningScore) {
    results.textContent = "Computer wins the game!! 🤖";
    showRestartButton();
  }

  function showRestartButton() {
  // Avoid creating multiple buttons
  if (restart.querySelector('button')) return;

  const restartBtn = document.createElement('button');
  restartBtn.textContent = 'Restart';

  restartBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    humScore.textContent = 0;
    comScore.textContent = 0;
    results.textContent = '';
    comChoice.textContent = '';
    restart.innerHTML = '';
  });

  restart.appendChild(restartBtn);
}
}

