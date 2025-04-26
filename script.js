const humanScore = 0;
const computerScore = 0;

function getComputerChoice(){
    const options =  ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];

}
console.log(getComputerChoice());

function getPlayerChoice(){
    const choices = prompt("rock, paper, or scissors?");
    if (choices) {
        return choices.toLowerCase();
    }else {
        return null;
    }
}
console.log(getPlayerChoice());

function playRound(humanChoice, computerChoice){
    
}

const humanSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

console.log(playRound(humanSelection, computerSelection));
