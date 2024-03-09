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
    setResult("Error! Incorrect input!");
    return;
  }

  // Display a tie if both selections are the same
  if (playerSelection == computerSelection) {
    setResult("It's a tie! You both chose " + playerSelection + "!");
    return -1;
  } else {
    switch (true) {
      // If the player wins, appropriately display that information and tell them that they won
      case (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors"):
        setResult(
          playerSelection +
            " beats " +
            computerSelection +
            "! You win this round!"
        );
        return 1;

      // Otherwise, display that they lost
      default:
        setResult(
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

// Created a main container to attach everything to it
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Container that displays the results of both player and computer
const result = document.createElement("div");
result.classList.add("result");
container.appendChild(result);

// Created a container that will display the score
const score = document.createElement("div");
score.classList.add("score");
container.appendChild(score);

// Player's initial score as a <p>
const playerScore = document.createElement("p");
playerScore.textContent = "Player: 0";
score.appendChild(playerScore);

// Computers's initial score as a <p>
const computerScore = document.createElement("p");
computerScore.textContent = "Computer: 0";
score.appendChild(computerScore);

// Actuall value that will be updated after each round
let playerCount = 0;
let computerCount = 0;

// Creating a div for the 3 buttons
const buttons = document.createElement("div");
buttons.classList.add("buttons");
container.appendChild(buttons);

// Array of the choices to iterate through
// Doing this instead of create 3 individual buttons for each choice
const choices = ["rock", "paper", "scissors"];

// Iterating through each choice within the array to create a button
choices.forEach((choice) => {
  const button = document.createElement("button");
  button.textContent = choice.toUpperCase();
  button.addEventListener("click", () => {
    const roundResult = playGame(choice, getComputerChoice());
    updateScore(roundResult);
  });

  // After creating a button for each choice, append them all to the container
  buttons.appendChild(button);
});

// Function to update our scoreboard
function updateScore(result) {
  if (result === 1) {
    playerCount++;
  } else if (result === 0) {
    computerCount++;
  }

  // Displaying the current count for both players
  playerScore.textContent = "Player: " + playerCount;
  computerScore.textContent = "Computer: " + computerCount;

  if (playerCount === 5) {
    setResult("Player wins the game!");
    disableBtn();
  } else if (computerCount === 5) {
    setResult("Computer Wins the game!");
    disableBtn();
  }
}

// Once a player wins, we want to disable all of the buttons by looking at the class buttons
// and disabling all its button descendants
function disableBtn() {
  const buttons = document.querySelectorAll(".buttons button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

// Function to set the result message
function setResult(message) {
  result.textContent = message;
}
