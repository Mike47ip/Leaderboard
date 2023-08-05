import './style.css';
import addNewScore from './modules/addNewScore.js';
import recentScores from './modules/recentScores.js';
import addScore from './modules/hitApi.js';
import showScores from './modules/showScores.js';
import displayScores from './modules/displayScore.js';

addNewScore();
recentScores();

const form = document.querySelector('form');
const userName = document.querySelector('#name');
const userScore = document.querySelector('#number');
const Scores = document.querySelector('#Scorelist');
const refreshButton = document.querySelector('#refresh');

const scoreContainer = () => {
  Scores.innerHTML = '';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (userName.value && userScore.value) {
    addScore(userName.value.trim(), userScore.value.trim());
    scoreContainer();
    form.reset();
    displayScores().then((obj) => showScores(obj, Scores));
  }
});

refreshButton.addEventListener('click', () => {
  scoreContainer();
  displayScores().then((obj) => showScores(obj, Scores));
});