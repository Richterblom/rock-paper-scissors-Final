let userScore = 0;
let computerScore = 0;
const userscore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result p");
let rock_div = document.getElementById("Rock");
let paper_div = document.getElementById("Papper");
let scissors_div = document.getElementById("Scissors");

function computerPlay() {
  const choice = ["Rock", "Papper", "Scissors"];
  return choice[Math.floor(Math.random() * 3)];
}

function win(userChoice, computerChoice) {
  userScore++;
  userscore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  if (userScore < 5) {
    result_p.innerHTML = `Your ${userChoice} beats computer's ${computerChoice} You Win!! `;
  } else if (userScore === 5) {
    result_p.innerHTML = 'Game over, you win! Refresh to play again'
    endGame();
  };

}

function lose(userChoice, computerChoice) {
  computerScore++;
  userscore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  if (computerScore < 5) {
    result_p.innerHTML = `Computer's ${computerChoice} beats your ${userChoice} you Lose. `;
  } else if (computerScore === 5) {
    result_p.innerHTML = 'Game over, you lose! Refresh to play again'
    endGame();
  };
}

function draw(userChoice) {
  result_p.innerHTML = `It's a Tie you both chose ${userChoice} `;
}
   function game(userChoice) {

    const computerSelection = computerPlay();
    
    if (userChoice === computerSelection) {
      draw(userChoice, computerSelection);
    } else if (userChoice === 'Rock' && computerSelection === 'Scissors'){
      win(userChoice, computerSelection);  
    }else if (userChoice === 'Papper' && computerSelection === 'Rock'){
      win(userChoice, computerSelection);
    }else if (userChoice === 'Scissors' && computerSelection === 'Papper'){
      win(userChoice, computerSelection);
    }else{
      lose(userChoice, computerSelection);
    }  
  } 

  function endGame() { 
    rock_div.style.visibility = 'hidden';
    paper_div.style.visibility = 'hidden';
    scissors_div.style.visibility = 'hidden';
  }
  
  function restartGame() {
    restartScores();
    rock_div.style.visibility = 'visible';
    paper_div.style.visibility = 'visible';
    scissors_div.style.visibility = 'visible';
  }

  function restartScores() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = computerScore;
  }

function main() {
  rock_div.addEventListener("click", function () {
    game("Rock");
});
  paper_div.addEventListener("click", function () {
    game("Papper");
  });
  scissors_div.addEventListener("click", function () {
    game("Scissors");
  });
}
main();
