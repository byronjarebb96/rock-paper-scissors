/*Function Declarations*/
function getComputerChoice()
{
    randomInteger=Math.round(Math.random()*(3-1)+1);
    switch(randomInteger)
    {
        case 1:
            return("rock");
        case 2:
            return ("paper");
        case 3:
            return("scissors");
    }
}

function playRound(/*playerSelection, computerSelection*/)
{
    const playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(`Player chose ${playerSelection}, computer chose ${computerSelection}`)
    if (playerSelection === computerSelection)
    {
        console.log("It's a tie!");
    }

    else if (playerSelection == 'rock')
    {
        if (computerSelection == 'paper')
        {
            console.log("Paper beats rock, you lose.");
            return computerScore += 1;
        }
        else
        {
            console.log("Rock beats scissors, you win!");
            return playerScore += 1;
        }
    }
    else if (playerSelection == 'paper')
    {
        if (computerSelection == 'rock')
        {
            console.log("Paper beats rock, you win.");
            return playerScore += 1;
        }
        else
        {
            console.log("Scissors beats paper, you lose!");
            return computerScore += 1;
        }
    }
    else if (playerSelection == 'scissors')
    {
        if (computerSelection == 'paper')
        {
            console.log("Scissors beats paper! You win.");
            return playerScore += 1;
        }
        else
        {
            console.log("Rock beats scissors! You lose.");
            return computerScore += 1;
        }
    }
    else
    {
        console.log("Invalid selection. Try again.");
    }
}

function game(rounds)
{
    for (i=0; i<rounds; i++)
    {
        playRound();
        console.log(`Player: ${playerScore} | Computer: ${computerScore}`)
    }
}
/*Script Section */

let playerScore = 0;
let computerScore = 0;
let rounds = 5;

//game(rounds);
if (playerScore > computerScore)
{
    console.log("======\nYou win.\n======");
}
else if (playerScore < computerScore)
{
    console.log("======\nYou lose.\n======");
}
else
{
    console.log("======\nIt's a tie.\n======");
}

/*
const playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
*/


//This is a test comment.
const body = document.querySelector('body');
const content = document.createElement('div');
const h1 = document.createElement('h1');
const flavorText = document.createElement('p');
const buttonRow = document.createElement('div');
const rock = document.createElement('div');
const paper = document.createElement('div'); 
const scissors = document.createElement('div'); 


h1.textContent = ("Rock, Paper, Scissors");
flavorText.textContent = ("Some simple flavor text. Let's play!");
rock.textContent = ("rock");
buttonRow.classList.add('buttonRow');
rock.classList.add('rpsButton');
paper.classList.add('rpsButton');
scissors.classList.add('rpsButton');

body.appendChild(content);
content.appendChild(h1);
content.appendChild(flavorText);
content.appendChild(buttonRow);
buttonRow.appendChild(rock);
buttonRow.append 