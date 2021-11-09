///////////////////////////////////////////////////
////////// My Code For Code Challenge ////////////
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const score = 20;
let scoreNow = score;
let highscore = 0;

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😢 No number!';

    // When Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (scoreNow > highscore) {
      highscore = scoreNow;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is too high
  } else if (guess > secretNumber) {
    if (scoreNow > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      scoreNow--;
      document.querySelector('.score').textContent = scoreNow;
    } else {
      document.querySelector('.message').textContent = '🎃 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (scoreNow > 0) {
      document.querySelector('.message').textContent = '📉 Too low!';
      scoreNow--;
      document.querySelector('.score').textContent = scoreNow;
    } else {
      document.querySelector('.message').textContent = '🎃 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNow = score;

  document.querySelector('.score').textContent = scoreNow;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
