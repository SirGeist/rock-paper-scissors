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

const container = document.querySelector(".container");
const result = document.querySelector(".result");

const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
let playerCount = 0;
let computerCount = 0;

const rockBtn = document.createElement("button");
rockBtn.setAttribute("style", "padding: 25px;");
rockBtn.textContent = "ROCK";
rockBtn.addEventListener("click", () => {
  switch (playGame("rock", getComputerChoice())) {
    case -1:
  }
});

const paperBtn = document.createElement("button");
paperBtn.setAttribute("style", "padding: 25px;");
paperBtn.textContent = "PAPER";
paperBtn.addEventListener("click", () => {
  playGame("paper", getComputerChoice());
});

const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute("style", "padding: 25px;");
scissorsBtn.textContent = "SCISSORS";
scissorsBtn.addEventListener("click", () => {
  playGame("scissors", getComputerChoice());
});

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);
