const wordElement = document.getElementById('word');
const textElement = document.getElementById('text');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const settingsButton = document.getElementById('settings-btn');
const settingsElement = document.getElementById('settings');
const difficultySelect = document.getElementById('difficulty');
const endGameContainer = document.getElementById('end-game-container');

let score = 0;
let time = 10;
let difficulty = 'medium';
let timerInterval;

const words = [
  "dependent", "dog", "superficial", "admit", "juice", "javascript", "developer",
  "airplane", "great", "fun", "manipulate", "cat", "transition", "school",
  "computer", "programming", "drag", "loving", "north"
];

textElement.focus();

function addWordToDOM() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  wordElement.textContent = randomWord;
}

function updateScore() {
  score++;
  scoreElement.textContent = score;
}

function updateTime() {
  time--;
  timeElement.textContent = `${time}s`;

  if (time === 0) {
    clearInterval(timerInterval);
    gameOver();
  }
}

function gameOver() {
  endGameContainer.innerHTML = `
    <h1>Time's Up!</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Play Again</button>
  `;
  endGameContainer.style.display = 'flex';
}

textElement.addEventListener('input', (e) => {
  const typedWord = e.target.value;
  const currentWord = wordElement.textContent;

  if (typedWord === currentWord) {
    updateScore();
    addWordToDOM();
    e.target.value = '';

    if (difficulty === 'easy') {
      time += 5;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 2;
    }

    updateTime();
  }
});

settingsButton.addEventListener('click', () => {
  settingsElement.classList.toggle('hide');
});

difficultySelect.addEventListener('change', (e) => {
  difficulty = e.target.value;

  if (difficulty === 'easy') {
    time = 15;
  } else if (difficulty === 'medium') {
    time = 10;
  } else {
    time = 5;
  }

  timeElement.textContent = `${time}s`;
});

function startGame() {
  addWordToDOM();
  timerInterval = setInterval(updateTime, 1000);
}

startGame();
