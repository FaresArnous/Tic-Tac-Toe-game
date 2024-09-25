function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOver.firstElementChild.innerHTML =
    'You won!, <span id="winner-name">PLAYER NAME</span>';
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameboardItem = gameBoardElements.children[gameBoardIndex];
      gameboardItem.textContent = "";
      gameboardItem.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startGame() {
  if (player[0].name === "" || player[1].name === "") {
    toastMsg.style.display = "block";

    setTimeout(function () {
      toastMsg.style.display = "none";
    }, 4000);

    return;
  }

  activePlayerNameElement.textContent = player[activePlayer].name;

  boardArea.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = player[activePlayer].name;
}

function selectGameField(event) {
  if (gameIsOver) {
    return;
  }
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedCRow = selectedField.dataset.row - 1;

  if (gameData[selectedCRow][selectedColumn] > 0) {
    alert("Please select an empty field!!");
    return;
  }

  selectedField.textContent = player[activePlayer].Symbol;
  selectedField.classList.add("disabled");

  gameData[selectedCRow][selectedColumn] = activePlayer + 1;

  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOver.style.display = "block";

  if (winnerId > 0) {
    const winnerName = player[winnerId - 1].name;
    gameOver.firstElementChild.firstElementChild.textContent = winnerName;
  } else {
    gameOver.firstElementChild.textContent = "It's a draw";
  }
}
