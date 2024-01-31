let playScore = 0;
let comScore = 0;
let winText = document.querySelector(".winner");

function getComputerSel () {
    let num = Math.floor(Math.random()*3);
 
    if (num == 1) {
        return "Rock";
    } else if (num == 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function playRound(playSel){

    let comSel = getComputerSel();

    if ((playSel == "Rock" && comSel == "Scissor") || 
    (playSel == "Paper" && comSel == "Rock") || 
    (playSel == "Scissor" && comSel == "Paper")) {
        winText.textContent = "You Win the Round! " + playSel + " beats " + comSel;
        playScore++;
    } else if (playSel == comSel) {
        winText.textContent = "Tie Round!";
    } else {
        winText.textContent = "You Lose the Round! " + comSel + " beats " + playSel;
        comScore++;
    }
}

function updateScore(){

    let playScoreDisplay = document.querySelector(".player");
    let comScoreDisplay = document.querySelector(".computer");
    playScoreDisplay.textContent = "Player: " + playScore;
    comScoreDisplay.textContent = "Computer: " + comScore;

    if (playScore == 5){
        winText.textContent = "Player Wins!"
        return
    }

    if (comScore == 5){
        winText.textContent = "Computer Wins!"
        return
    }

}

function buttonHandler(event) {
    if (playScore == 5 || comScore == 5){
        return;
    }
    playRound(event.target.value);
    updateScore();

}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

rockButton.addEventListener("click", buttonHandler);
paperButton.addEventListener("click", buttonHandler);
scissorButton.addEventListener("click", buttonHandler);
