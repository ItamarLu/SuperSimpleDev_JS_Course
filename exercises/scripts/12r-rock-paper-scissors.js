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

const autoPlayElm = document.querySelector('.js-auto-play-button');

autoPlayElm.addEventListener('click', () => {
    autoPlay();
  });

function autoPlay() {
  if (!isAutoPLaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPLaying = true;
    autoPlayElm.innerHTML = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPLaying = false;
    autoPlayElm.innerHTML = 'Auto Play';
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

document.body.addEventListener('keydown', event => (event.key === 'a') ? autoPlay(event) : false);

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
  .addEventListener('click', () => askReset());

document.body.addEventListener('keydown', event => (event.key === 'Backspace') ? askReset() : false);

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

function askReset() {
  resetConfirmation();
}

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


const resetPara = document.createElement('p');
const resetText = document.createTextNode('Are you sure you want to reset score?');
resetPara.appendChild(resetText);
resetPara.classList.add('reset-para');

const element = document.body;

const buttonYes = document.createElement('button');
const yesText = document.createTextNode('Yes');
buttonYes.appendChild(yesText);
buttonYes.classList.add('reset-button-yes');


const buttonNo = document.createElement('button');
const noText = document.createTextNode('No');
buttonNo.appendChild(noText);
buttonNo.classList.add('reset-button-no');

function resetConfirmation() {
  document.body.appendChild(resetPara);
  document.body.appendChild(buttonYes);
  document.body.appendChild(buttonNo);

  document.querySelector('.reset-button-yes')
    .addEventListener('click', () => {
      resetScore();
      clearConfirmation();
      console.log('a');
    });
  document.querySelector('.reset-button-no')
    .addEventListener('click', () => {
      clearConfirmation();
      console.log('b');
    });
}

function clearConfirmation() {
  element.removeChild(resetPara);
  document.body.removeChild(buttonYes);
  document.body.removeChild(buttonNo);
}

// working but giving an error in console, but i'm not gonna fix it now