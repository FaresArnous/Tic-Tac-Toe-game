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
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedCRow = selectedField.dataset.row - 1;

  if (gameData[selectedCRow][selectedColumn] > 0) {
    alert("Please select an empty feild!!");
    return;
  }

  selectedField.textContent = player[activePlayer].Symbol;
  selectedField.classList.add("disabled");

  gameData[selectedCRow][selectedColumn] = activePlayer + 1;

  console.log(gameData);
  switchPlayer();
}
