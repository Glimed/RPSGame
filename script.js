let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const options =  ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];

}

function getPlayerChoice(){
    const choices = prompt("rock, paper, or scissors?");
    if (choices) {
        return choices.toLowerCase();
    }else {
        return null;
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("it is a tie");
    }else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
      ) {
        console.log("you win");
        humanScore++;
      }else {
        console.log("You lose");
        computerScore++;
        
      }
      console.log(`player score: ${humanScore}, computer score ${computerScore}`);
}

    

const humanSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);