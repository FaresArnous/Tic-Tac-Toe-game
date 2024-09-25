function openPlayerconfig() {
  openModel.style.display = "block";
  backDrop.style.display = "block";
}

function closePlayerconfig() {
  openModel.style.display = "none";
  backDrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutput.textContent = "";
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
}
