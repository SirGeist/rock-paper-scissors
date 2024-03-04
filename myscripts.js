// Function that randomly chooses rock, paper, or scissors;
// It then returns that value
let getComputerChoice = () => {
  // Generating a random number between 0-2 to assign
  // as our choices
  let choice = Math.floor(Math.random() * 3);

  // Assigning each choice
  switch (choice) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;

    case 2:
      choice = "scissors";
      break;

    default:
      console.log("Error");
  }

  return choice;
};

getComputerChoice();

// Getting user input
var playerSelection = prompt("What is your choice? Rock, Paper, or Scissors?");

let playGame = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection);
};

playGame(playerSelection, getComputerChoice());
