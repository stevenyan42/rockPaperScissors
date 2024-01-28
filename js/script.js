let playScore = 0;
let comScore = 0;

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

function playRound(playSel, comSel){

    if ((playSel == "Rock" && comSel == "Scissor") || 
    (playSel == "Paper" && comSel == "Rock") || 
    (playSel == "Scissor" && comSel == "Paper")) {
        console.log("You Win the Round! " + playSel + " beats " + comSel);
        playScore++;
        return
    } else if (playSel == comSel) {
        console.log("Tie Round!");
        return
    } else {
        console.log("You Lose the Round! " + comSel + " beats " + playSel);
        comScore++;
        return
    }   
}

function getPlayerSel() {
    let playerSel = prompt("Rock, Paper, or Scissor?");
    return playerSel.charAt(0).toUpperCase() + playerSel.slice(1);
}

function game() {

    //game 1
    let comChoice = getComputerSel();
    console.log(comChoice);
    let playChoice = getPlayerSel();
    console.log(playChoice)
    playRound(playChoice, comChoice);
    
    //game 2
    comChoice = getComputerSel();
    console.log(comChoice);
    playChoice = getPlayerSel();
    console.log(playChoice)
    playRound(playChoice, comChoice);

    //game 3
    comChoice = getComputerSel();
    console.log(comChoice);
    playChoice = getPlayerSel();
    console.log(playChoice)
    playRound(playChoice, comChoice);

    //game 4
    comChoice = getComputerSel();
    console.log(comChoice);
    playChoice = getPlayerSel();
    console.log(playChoice)
    playRound(playChoice, comChoice);

    //game 5
    comChoice = getComputerSel();
    console.log(comChoice);
    playChoice = getPlayerSel();
    console.log(playChoice)
    playRound(playChoice, comChoice);

    if (playScore > comScore) {
        console.log("You Win!")
    } else if (comScore > playScore) {
        console.log("You Lose!")
    } else {
        console.log("Tie Game!")
    }
}

game();