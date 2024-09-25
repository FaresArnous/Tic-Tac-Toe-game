const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;

const player = [
  {
    name: "",
    Symbol: "X",
  },
  {
    name: "",
    Symbol: "O",
  },
];

const openModel = document.getElementById("config-overlay");
const backDrop = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorOutput = document.getElementById("config-errors");
const toastMsg = document.getElementById("toast-msg");
const boardArea = document.getElementById("active-game");
const gameBoardElements = document.querySelectorAll("#game-board li");
const activePlayerNameElement = document.getElementById("active-player-name");

const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");
const closeModel = document.getElementById("Cancel-btn");
const startNewGame = document.getElementById("start-game-btn");

editPlayer1Btn.addEventListener("click", openPlayerconfig);
editPlayer2Btn.addEventListener("click", openPlayerconfig);

closeModel.addEventListener("click", closePlayerconfig);
backDrop.addEventListener("click", closePlayerconfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGame.addEventListener("click", startGame);

for (const gameBoardElement of gameBoardElements) {
  gameBoardElement.addEventListener("click", selectGameField);
}
