// logic.js

import questions from './questions.js';

const startButton = document.getElementById('start');
const questionContainer = document.getElementById('questions');
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