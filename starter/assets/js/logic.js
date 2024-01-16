// logic.js

import questions from './questions.js';

const startButton = document.getElementById('start');
const questionsContainer = document.getElementById('questions');
const choicesContainer = document.getElementById('choices');
const feedbackContainer = document.getElementById('feedback');
const timeContainer = document.getElementById('time');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit');
const finalScoreContainer = document.getElementById('final-score');

let currentQuestionIndex = 0;
let timer;
let timeleft = 60;
let score = 0;

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', saveScore);

function startQuiz() {
    startButton.style.display = 'none';
    questionsContainer.classList.remove('hide');
    timer = setInterval(updateTimer, 1000);
    showQuestion();
}