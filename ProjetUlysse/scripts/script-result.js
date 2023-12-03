document.addEventListener('DOMContentLoaded', function() {
    // Récupérez les scores depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const totalScore = parseInt(urlParams.get('totalScore')) || 0;
    const sectionScoresString = urlParams.get('sectionScores');

    // Parsez la chaîne JSON pour obtenir un tableau JavaScript
    const sectionScores = JSON.parse(sectionScoresString);

    // Récupérez les noms des sections depuis le localStorage
    const sectionNames = JSON.parse(localStorage.getItem('sectionNames')) || [];

    // Récupérez quizData du localStorage
    const quizData = JSON.parse(localStorage.getItem('quizData')) || [];

    // Calculez le nombre total de questions dans le quiz
    const totalQuestions = quizData.reduce((total, section) => total + section.questions.length, 0);

    // Affichez le score total sur la page au format "1/3"
    const totalScoreElement = document.getElementById('total-score-value');
    if (totalScoreElement) {
        totalScoreElement.innerText = `${totalScore} / ${totalQuestions}`;
    }

    // Affichez les scores de chaque section sur la page
    const sectionScoresElement = document.getElementById('section-scores');
    if (sectionScoresElement) {
        sectionScores.forEach((score, index) => {
            const scoreElement = document.createElement('p');
            const sectionName = sectionNames[index] || "Section inconnue";
            const nbQuestionsInSection = quizData[index].questions.length;
            const sectionScoreString = `${score} / ${nbQuestionsInSection}`;
            
            scoreElement.innerText = `${sectionName} : ${sectionScoreString}`;
            sectionScoresElement.appendChild(scoreElement);
        });
    }
});
