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

// Function that takes in both user and computer input to determine who wins
let playGame = (playerSelection, computerSelection) => {
  // We first lowercase the playerSelection so we can compare to the computer
  // Display error if incorrect input
  playerSelection = playerSelection.toLowerCase();

  if (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  ) {
    console.log("Error! Incorrect input!");
    return;
  }

  // Display a tie if both selections are the same
  if (playerSelection == computerSelection) {
    console.log("It's a tie! You both chose " + playerSelection + "!");
    return -1;
  } else {
    switch (true) {
      // If the player wins, appropriately display that information and tell them that they won
      case (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors"):
        console.log(
          playerSelection +
            " beats " +
            computerSelection +
            "! You win this round!"
        );
        return 1;

      // Otherwise, display that they lost
      default:
        console.log(
          "Computer chose " +
            computerSelection +
            ". You chose " +
            playerSelection +
            ". You lose this round"
        );
        return 0;
    }
  }
};

var playerCount = 0;
var computerCount = 0;
var round = 1;
while (playerCount < 5 && computerCount < 5) {
  console.log("Round " + round);
  var computerSelection = getComputerChoice();

  // Getting user input
  var playerSelection = prompt(
    "What is your choice? Rock, Paper, or Scissors?"
  );

  // Calling the function
  let winner = playGame(playerSelection, getComputerChoice());

  if (winner == 1) {
    playerCount++;
  } else if (winner == 0) {
    computerCount++;
  }

  round++;

  if (playerCount == 5) {
    console.log("You are the winner!");
  } else if (computerCount == 5) {
    console.log("You lose");
  }
}
