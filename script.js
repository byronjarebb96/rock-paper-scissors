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

function playRound(playerSelection, computerSelection)
{
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
        }
        else
        {
            console.log("Rock beats scissors, you win!");
        }
    }
    else if (playerSelection == 'paper')
    {
        if (computerSelection == 'rock')
        {
            console.log("Paper beats rock, you win.");
        }
        else
        {
            console.log("Scissors beats paper, you lose!");
        }
    }
    else if (playerSelection == 'scissors')
    {
        if (computerSelection == 'paper')
        {
            console.log("Scissors beats paper! You win.");
        }
        else
        {
            console.log("Rock beats scissors! You lose.");
        }
    }
    else
    {
        console.log("Invalid selection. Try again.");
    }
}


const playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);