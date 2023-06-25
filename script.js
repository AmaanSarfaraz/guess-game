"use strict";
let SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.getElementById("check1").addEventListener("click", function () {
  let guess = Number(document.getElementById("guess").value);
  if (!guess) {
    document.getElementById("message").textContent = "no number";
  } else if (guess === SecretNumber) {
    document.getElementById("message").textContent = "congratulations";
    document.getElementById("toguess").textContent = SecretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.getElementById("toguess").style.width = "300px";
    if (score > highScore) {
      highScore = score;
      document.getElementById("high").textContent = highScore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      document.getElementById("message").textContent =
        guess > SecretNumber ? "Too High Try Again" : "Too Low Try Again";
      score = score - 1; //or we can write score--
      document.getElementById("score").textContent = score;
    } else {
      document.getElementById("message").textContent = "You Lose";
    }
  }
});
document.getElementById("again").addEventListener("click", function () {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.getElementById("message").textContent = "Start Guessing...";
  document.getElementById("score").textContent = score;
  document.getElementById("toguess").textContent = "?";
  document.getElementById("guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.getElementById("toguess").style.width = "200px";
});
