const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const game = document.querySelector('.game')
const results = document.querySelector('.results')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')
const p = document.createElement('p')
const options = document.querySelectorAll('.options')




let playerScore = 0;
let computerScore = 0;
  
  
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  

  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    
    p.innerText =  `It's a tie! Both picked ${playerSelection}`;
    results.appendChild(p)
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    
    p.innerText =  `You win! ${playerSelection} beats ${computerSelection}`;
    results.appendChild(p)
  } else {
    computerScore++
    
    p.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    results.appendChild(p)
  }
}

const checkWinner = (playerScore,computerScore) => {
  if ( playerScore === 5 ) {
    results.removeChild(p)
    options.forEach(button => {
      button.disabled = true;
    });
      
    const h2 = document.createElement('h2')
    h2.classList.add('player-won')
    h2.innerText = `You won ${playerScore} to ${computerScore} great job beating the computer!`
    results.append(h2)
    const resetBtn = document.createElement('button')
    resetBtn.setAttribute('id', 'reset')
    resetBtn.textContent = 'Play Again?'
    results.append(resetBtn)
    resetBtn.addEventListener('click',() => location.reload());
  }
  if (computerScore === 5) {
    results.removeChild(p)
    options.forEach(button => {
      button.disabled = true;
    });
    const h2 = document.createElement('h2')
    h2.classList.add('computer-won')
    h2.innerText = `You lost ${playerScore} to ${computerScore} better luck next time!`
    results.append(h2)
    const resetBtn = document.createElement('button')
    resetBtn.setAttribute('id', 'reset')
    resetBtn.textContent = 'Play Again?'
    results.append(resetBtn)
    resetBtn.addEventListener('click',() => location.reload());
  }
}

const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

 rockButton.addEventListener("click", () => {
   const computerSelection = getComputerChoice()
   const playerSelection = 'rock'
   playRound(playerSelection,computerSelection)
   updateScores(playerScore,computerScore)
   checkWinner(playerScore,computerScore)
 })
 paperButton.addEventListener("click", () => {
   const computerSelection = getComputerChoice()
   const playerSelection = 'paper'
   playRound(playerSelection,computerSelection)
   updateScores(playerScore,computerScore)
   checkWinner(playerScore,computerScore)
 })
 scissorsButton.addEventListener("click", () => {
   const computerSelection = getComputerChoice()
   const playerSelection = 'scissors'
   playRound(playerSelection,computerSelection)
   updateScores(playerScore,computerScore)
   checkWinner(playerScore,computerScore)
 })
