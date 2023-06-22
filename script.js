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

function playRound(playerSelection)
{   
    console.log('test')
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

/*Script Section */

let playerScore = 0;
let computerScore = 0;

//game(rounds);
/*
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
}*/

/*
const playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
*/


//This is a test comment.
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {playRound('rock')});
paper.addEventListener('click', () => {playRound('paper')});
scissors.addEventListener('click', () => {playRound('scissors')});
