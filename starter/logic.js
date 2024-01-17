export const questions = [
    
// questions.js

    {
        question: "What does 'JS' stand for?",
        choices: ["Java Source", "JavaScript", "Just Saying", "Jungle Sound]"],
        correctIndex: 1,
    },
    {
        question: "Which operator is used for concatenation in JavaScript?",
        choices: ["+", "*", "&", "^"],
        correctIndex: 0,
    
    }, 
    {
        question: "What is the purpose of the 'if' statement in JavaScript?",
        choices: ["Looping", "Conditionally execute code", "Defining a function", "Creating an array"],
        correctIndex: 1,
    },
    {
    
        question: "What function is used to print content to the console in JavaScript?",
        choices: ["print()", "log()", "display()", "console()"],
        correctIndex: 1,
    },
            {
        question: "Which symbol is used for single-line comments in JavaScript?",
        choices: ["//", "/*", "#", "--"],
        correctIndex: 0,
    },
    {
    
        question: "What method is used to convert a string to an integer in JavaScript?",
        choices: ["toInt()", "parse()", "convertToInt()", "parentInt()"],
        correctIndex: 3,
    
    },
            {
        question: "In JavaScript, what type of data is 'true'?",
        choices: ["Boolean", "String", "Number", "Object"],
            },
     
        // End of questions.js
    
    ];
    

=======
>>>>>>> 8f619e967cb8969ef85e323ddcaac50cc30e7a46
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
submitButton.addEventListener('click', saveScore);
function startQuiz() {
    console.log("Start Quiz button clicked!");
}

function startQuiz() {
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

}

function updateTimer() {
    timeContainer.textContent = timeleft;
    if (timeleft <= 0) {
        endQuiz();
    } else {
        timeleft--;
    }
}

function saveScore() {
    const initials = initialsInput.ariaValueMax;
}
