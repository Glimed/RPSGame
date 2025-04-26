function getComputerChoice(){
    const options =  ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];

}
console.log(getComputerChoice());

function getPlayerChoice(){
    const choices = prompt("rock", "paper", "scissors");
    return choices;
}
console.log(getPlayerChoice());