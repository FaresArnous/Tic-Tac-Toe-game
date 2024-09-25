function startGame() {
  if (player[0].name === "" || player[1].name === "") {
    toastMsg.style.display = "block";

    setTimeout(function () {
      toastMsg.style.display = "none";
    }, 4000);

    return;
  }

  boardArea.style.display = "block";
}
