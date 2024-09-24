function openPlayerconfig() {
  openModel.style.display = "block";
  backDrop.style.display = "block";
}

function closePlayerconfig() {
  openModel.style.display = "none";
  backDrop.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("Playername");
}
