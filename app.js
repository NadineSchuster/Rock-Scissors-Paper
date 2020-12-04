const compuHand = document.querySelector("#computerHand");
const scissorsBtn = document.querySelector("#scissorsBtn");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const winnerOutput = document.querySelector(".winnerOutput");
let playerWins = document.querySelector(".counter-player");
let computerWins = document.querySelector(".counter-computer");
let roundCounter = document.querySelector(".round-counter");
let languageSelection = document.querySelector(".language-selection");

let userChoice;
const min = 1;
const max = 3;

let request = new XMLHttpRequest();
let xml;

/*
request.onload = () => {
  if (request.status == 200) {
    xml = request.responseXML;
    console.log(xml);
  } else {
    console.log("Problem with server");
  }
};

// languageSelection => value/index
*/


// Add Event Listener
scissorsBtn.addEventListener("click", chooseScissors);
paperBtn.addEventListener("click", choosePaper);
rockBtn.addEventListener("click", chooseRock);

function chooseScissors() {
  userChoice = "Scissors";
  compareChoices(playGame(), userChoice);
}

function choosePaper() {
  userChoice = "Paper";
  compareChoices(playGame(), userChoice);
}

function chooseRock() {
  userChoice = "Rock";
  compareChoices(playGame(), userChoice);
}

function playGame() {
  // Getting a random integer between two values, inclusive
  // The maximum is inclusive and the minimum is inclusive
  let getComputerChoice = Math.floor(Math.random() * (max - min + 1)) + min;
  let computerChoice;

  console.log(getComputerChoice);

  switch (getComputerChoice) {
    case 1: // Scissors
      return (computerChoice = "Scissors");
      break;
    case 2: // Rock
      return (computerChoice = "Rock");
      break;
    case 3: // Paper
      return (computerChoice = "Paper");
      break;
  }
}

function compareChoices(computerChoice, userChoice) {
  console.log(computerChoice, userChoice);

  roundCounter.innerText++;

  if (computerChoice === "Scissors" && userChoice === "Scissors") {
    // winnerOutput.innerText = "Scissors vs Scissors - unentschieden!";
    winnerOutput.innerText = "Scissors vs Scissors - both ... win?";
    playerWins.innerText++;
    computerWins.innerText++;
    compuHand.src = "img/scissors.png";
  } else if (computerChoice === "Scissors" && userChoice === "Rock") {
    //winnerOutput.innerText = "Du gewinnst gegen den Computer: Rock gewinnt gegen Scissors!";
    winnerOutput.innerText = "You won!";
    compuHand.src = "img/scissors.png";
    playerWins.innerText++;
  } else if (computerChoice === "Scissors" && userChoice === "Paper") {
    //winnerOutput.innerText = "Der Computer gewinnt: Scissors gewinnt gegen Paper!";
    winnerOutput.innerText = "The Computer won!";
    compuHand.src = "img/scissors.png";
    computerWins.innerText++;
  }

  if (computerChoice === "Rock" && userChoice === "Rock") {
    //winnerOutput.innerText = "Rock vs Rock - unentschieden!";
    winnerOutput.innerText = "Rock vs Rock!";
    compuHand.src = "img/rock.png";
  } else if (computerChoice === "Rock" && userChoice === "Scissors") {
    //winnerOutput.innerText = "The Computer won: Rock gewinnt gegen Scissors!";
    winnerOutput.innerText = "The Computer won!";
    compuHand.src = "img/rock.png";
    computerWins.innerText++;
  } else if (computerChoice === "Rock" && userChoice === "Paper") {
    //winnerOutput.innerText = "Du gewinnst: Paper gewinnt gegen Rock!";
    winnerOutput.innerText = "You won!";
    compuHand.src = "img/rock.png";
    playerWins.innerText++;
  }

  if (computerChoice === "Paper" && userChoice === "Paper") {
    //winnerOutput.innerText = "Paper vs Paper - unentschieden!";
    winnerOutput.innerText = "Paper vs Paper!";
    compuHand.src = "img/paper.png";
  } else if (computerChoice === "Paper" && userChoice === "Rock") {
    //winnerOutput.innerText = "The Computer won: Paper wins vs Rock!";
    winnerOutput.innerText = "The Computer won!";
    compuHand.src = "img/paper.png";
    computerWins.innerText++;
  } else if (computerChoice === "Paper" && userChoice === "Scissors") {
    //winnerOutput.innerText = "You won: Scissors wins vs Paper!";
    winnerOutput.innerText = "You won!";
    compuHand.src = "img/paper.png";
    playerWins.innerText++;
  }
}

/* request.open("GET", "./lang/lang.xml");
request.responseType = "document";
request.setRequestHeader("Accept", "text/xml");
request.send(); */