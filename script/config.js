function openPlayerconfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  openModel.style.display = "block";
  backDrop.style.display = "block";
}

function closePlayerconfig() {
  openModel.style.display = "none";
  backDrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutput.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("Playername").trim();

  if (enteredPlayerName === "") {
    event.target.firstElementChild.classList.add("error");
    errorOutput.textContent = "Pleas enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  // if (editedPlayer === 1) {
  //   player[0].name = enteredPlayerName;
  // } else {
  //   player[1].name = enteredPlayerName;
  // }other way to do so

  player[editedPlayer - 1].name = enteredPlayerName;

  closePlayerconfig();
}
