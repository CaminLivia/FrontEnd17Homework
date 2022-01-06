// variable that never change
const gameOptions = ["Rock", "Scissors", "Paper"];

// variables that changes its value through the algorithm
let userScore = 0,
  robotScore = 0,
  userChoice,
  robotChoice = "",
  roundCounter = 0,
  text = "";

function randomRobotChoice(arrOptions) {
  // generate a random number: 0, 1 or 2
  let indexOption = Math.floor(Math.random() * 3);
  // robotChoice gets the value stored at that random position in the array with options
  robotChoice = arrOptions[indexOption];
}

// using if and switch structures to determine the score
function computeScore() {
  if (userChoice === "Rock") {
    switch (robotChoice) {
      case "Rock":
        text = "Draw.";
        break;
      case "Paper":
        text = "Point for robot.";
        robotScore++;
        break;
      case "Scissors":
        text = "Point for you.";
        userScore++;
        break;
    }
  } else if (userChoice === "Scissors") {
    switch (robotChoice) {
      case "Rock":
        text = "Point for robot.";
        robotScore++;
        break;
      case "Paper":
        text = "Point for you.";
        userScore++;
        break;
      case "Scissors":
        text = "Draw.";
        break;
    }
  } else if (userChoice === "Paper") {
    switch (robotChoice) {
      case "Rock":
        text = "Point for you.";
        userScore++;
        break;
      case "Paper":
        text = "Draw.";
        break;
      case "Scissors":
        text = "Point for robot.";
        robotScore++;
        break;
    }
  } else {
    text = "Something went wrong. Please try again.";
  }
}

// function called every time submit button is pressed
function gamePlay() {
  roundCounter++;

  // if the round number is lower then 3, the round is displayed,
  // user and robot choices are stored and displayed,
  // the score is computed and displayed
  userChoice = document.querySelector(
    "input[type=radio][name=option]:checked"
  ).value;

  console.log(userChoice);
  randomRobotChoice(gameOptions);

  document.querySelector(".rounds").innerHTML =
    "Round: " +
    roundCounter +
    "<br> User: " +
    userChoice +
    " - Robot: " +
    robotChoice;

  computeScore();

  document.querySelector("#score").innerHTML =
    text + " User: " + userScore + " - Robot: " + robotScore;

  // if the round number is 3 then the winner is declared and the game is reset
  if (roundCounter === 3) {
    if (userScore > robotScore) {
      document.querySelector("#end").innerHTML = "End game. You won.";
      console.log("End game. You won.");
    } else if (userScore < robotScore) {
      document.querySelector("#end").innerHTML = "End game. Robot won.";
      console.log("End game. Robot won.");
    } else {
      document.querySelector("#end").innerHTML = "End game. Draw.";
      console.log("End game. Draw.");
    }
    roundCounter = 0;
    robotScore = 0;
    userScore = 0;
    document.querySelector("#send").style.display = "none";
    return false;
  } else {
    return false;
  }
}
