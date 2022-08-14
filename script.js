"use strict"

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess)

    if (!guess) {
        document.querySelector(".message").textContent = "No number!⛔";

    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number!👍🤩";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too High!📈";
            score--
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lost!🤣😂";
            document.querySelector(".score").textContent = 0;

        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too Low!📉";
            score--
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lost!🤣😂";
            document.querySelector(".score").textContent = 0;

        }


    }



})