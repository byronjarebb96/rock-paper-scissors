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
            return("scissors");Paper
    }
}
function updateScore()
{
    if (playerScore == 5)
    {
        alert('You win!');
    }
    else if (computerScore == 5)
    {
        alert('You lose!');
    }
    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;
    if (playerScore == 5 || computerScore == 5) {playerScore = computerScore = 0}

}
function playRound(playerSelection)
{   
    updateScore();
    console.log('test')
    const computerSelection = getComputerChoice();
    computerChoiceDisplay.textContent = (`The computer chose ${computerSelection}.`);


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

const scoreboard = document.querySelector('#scoreboard');
const playerScoreContainer = document.querySelector('#playerScoreContainer');
const playerScoreDisplay = document.createElement('score');
playerScoreDisplay.textContent = playerScore;
playerScoreContainer.appendChild(playerScoreDisplay);
const computerScoreContainer = document.querySelector('#computerScoreContainer');
const computerScoreDisplay = document.createElement('score');
computerScoreDisplay.textContent = computerScore;
computerScoreContainer.appendChild(computerScoreDisplay);

const computerChoiceDisplay = document.createElement('span');
const computerChoice = document.querySelector('#computerChoice');
computerChoice.appendChild(computerChoiceDisplay);