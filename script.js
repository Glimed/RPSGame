const humanScore = 0;
const computerScore = 0;
const humanSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);



function getComputerChoice(){
    const options =  ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];

}
console.log(getComputerChoice());

function getPlayerChoice(){
    const choices = prompt("rock, paper, or scissors?");
    return choices;
}
console.log(getPlayerChoice());

function playRound(humanChoice, computerChoice){
    
}


console.log(playRound(humanSelection, computerSelection));
