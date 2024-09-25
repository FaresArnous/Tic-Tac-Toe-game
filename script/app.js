let editedPlayer = 0;

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

const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");
const closeModel = document.getElementById("Cancel-btn");

editPlayer1Btn.addEventListener("click", openPlayerconfig);
editPlayer2Btn.addEventListener("click", openPlayerconfig);

closeModel.addEventListener("click", closePlayerconfig);
backDrop.addEventListener("click", closePlayerconfig);

formElement.addEventListener("submit", savePlayerConfig);
