function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber].toLowerCase();
  }
  

function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();
  
    // Define the winning combinations
    const winningCombinations = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };
  
    // Determine the winner
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (winningCombinations[playerSelection] === computerSelection) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  let playerSelection = 'rock';


  console.log(getComputerChoice);


  console.log(playRound('rock', getComputerChoice())); 
