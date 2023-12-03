

document.addEventListener('DOMContentLoaded', function() {
    // Récupérez les scores depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const totalScore = parseInt(urlParams.get('totalScore')) || 0;
    const sectionScoresString = urlParams.get('sectionScores');

    // Parsez la chaîne JSON pour obtenir un tableau JavaScript
    const sectionScores = JSON.parse(sectionScoresString);

    // Récupérez les noms des sections depuis le localStorage
    const sectionNames = JSON.parse(localStorage.getItem('sectionNames')) || [];

    // Affichez les scores dans la console pour le débogage
    console.log('Total Score:', totalScore);
    console.log('Section Scores:', sectionScores);

    // Affichez le score total sur la page
    const totalScoreElement = document.getElementById('total-score-value');
    if (totalScoreElement) {
        totalScoreElement.innerText = totalScore;
    }

    // Affichez les scores de chaque section sur la page
    const sectionScoresElement = document.getElementById('section-scores');
    if (sectionScoresElement) {
        sectionScores.forEach((score, index) => {
            const scoreElement = document.createElement('p');
            // Utilisez les noms des sections depuis le localStorage
            const sectionName = sectionNames[index] || "Section inconnue";
            scoreElement.innerText = `${sectionName} : ${score}`;
            sectionScoresElement.appendChild(scoreElement);
        });
    }
});

