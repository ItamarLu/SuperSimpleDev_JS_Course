let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}
*/

let isAutoPLaying = false;
let intervalId;

// const autoPlay = () => {

// }

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  });

function autoPlay() {
  if (!isAutoPLaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPLaying = true;
  } else {
      clearInterval(intervalId);
      isAutoPLaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('Rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('Paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('Scissors');
});

document.body.addEventListener('keydown', (event) => {
  (event.key === 'r') ? playGame('Rock') : false;
  (event.key === 'p') ? playGame('Paper') : false;
  (event.key === 's') ? playGame('Scissors') : false;
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = ''; 

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You Lose.';
    }  else if (computerMove === 'Paper') {
      result = 'You Win.';
    } else if (computerMove === 'Scissors') {
      result = 'Tie.';
    }
  }

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';
    }  else if (computerMove === 'Paper') {
      result = 'You Lose.';
    } else if (computerMove === 'Scissors') {
      result = 'You Win.';
    }
  }
  
  if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You Win.';
    }  else if (computerMove === 'Paper') {
      result = 'Tie.';
    } else if (computerMove === 'Scissors') {
      result = 'You Lose.';
    }
  }

  if (result === 'You Win.') {
    score.wins += 1;
  } else if (result === 'You Lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;

  updateScoreElement();
}

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
  });

function updateScoreElement () {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >=2/3 && randomNumber <1) {
    computerMove = 'Scissors';
  }

  return computerMove;
}

