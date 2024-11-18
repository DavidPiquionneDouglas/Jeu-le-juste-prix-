let randomNumber = Math.floor(Math.random() * 10000) + 1;
let attemptsLeft = 10;

const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const replayButton = document.getElementById("replay");

submitButton.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10000) {
    message.innerHTML = "Veuillez entrer un nombre valide entre 1 et 10000.";
    message.className = "";
    return;
  }

  attemptsLeft--;
  attempts.innerHTML = `Nombre d'essais restants : ${attemptsLeft}`;

  if (userGuess === randomNumber) {
    message.innerHTML = "Bravo, vous avez trouvé le juste prix !";
    message.className = "success";
    endGame();
  } else if (userGuess < randomNumber) {
    message.innerHTML = "C'est plus !";
    message.className = "plus";
  } else {
    message.innerHTML = "C'est moins !";
    message.className = "moins";
  }

  if (attemptsLeft === 0 && userGuess !== randomNumber) {
    message.innerHTML = `Dommage ! Le juste prix était ${randomNumber}.`;
    message.className = "";
    endGame();
  }
});

function endGame() {
  guessInput.disabled = true;
  submitButton.disabled = true;
  replayButton.style.display = "block";
}

replayButton.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 10000) + 1;
  attemptsLeft = 10;
  message.innerHTML = "";
  attempts.innerHTML = "Nombre d'essais restants : 10";
  guessInput.disabled = false;
  guessInput.value = "";
  submitButton.disabled = false;
  replayButton.style.display = "none";
});
