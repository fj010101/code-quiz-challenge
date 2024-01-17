let highScores = [];

// logic.js

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

console.log('startButton:', startButton);
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // prevent form submission
    saveScore();
});

function startQuiz() {
    console.log("Start Quiz button clicked!");

    startButton.style.display = 'none';
    questionsContainer.classList.remove('hide');
    timer = setInterval(updateTimer, 1000);
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-title').textContent = currentQuestion.question;
    choicesContainer.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.addEventListener('click', () => checkAnswer(index));
        choicesContainer.appendChild(choiceButton);
    });
    
    }

    function checkAnswer(index) {
        const currentQuestion = questions[currentQuestionIndex];

        if (index === currentQuestion.correctIndex) {
            feedbackContainer.textContent = 'Correct!';
            score += 10;
        } else {
            feedbackContainer.textContent = 'Incorrect! -10 seconds';
            timeleft -= 10;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
    
        } else {
        endQuiz();
    }
}
function endQuiz() {
    clearInterval(timer);
    questionsContainer.classList.add('hide');
    document.getElementById('end-screen').classList.remove('hide');
    finalScoreContainer.textContent = score;

    // Store highScores in localStorage
    localStorage.setItem('highScores', JSON.stringify(highScores));

}

const scoresContainer = document.getElementById('highscores-list');
if (scoresContainer) {
} else {
}

function updateTimer() {
    timeContainer.textContent = timeleft;
    if (timeleft <= 0) {
        endQuiz();
    } else {
        timeleft--;
    }
}


// highscore.js

function saveScore() {
    const initials = initialsInput.value;
    console.log('User initials:', initials);

    // Store the score in the highScores array
    highScores.push({ initials, score });

    // Redirect to highscores.html
    window.location.href = 'highscores.html';
}

