// highscore.js

// highscores.js
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve highScores from localStorage or use an empty array
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Display high scores in the highscores-list element
    const highScoresList = document.getElementById('highscores-list');
    highScoresList.innerHTML = highScores
        .map(score => `<li>${score.initials}: ${score.score}</li>`)
        .join('');
});
