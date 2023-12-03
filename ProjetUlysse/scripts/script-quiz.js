
function initializeQuiz() {
    const quizData = [
        {
            section: 'Géographie',
            score: 0,
            questions: [
                {
                    question: "Quelle est la capitale de l'Espagne ?",
                    answers: ['Paris', 'Berlin', 'Londres', 'Madrid'],
                    correctAnswer: 'Madrid'
                },
                {
                    question: 'Quel est le plus long fleuve du monde ?',
                    answers: ['Nil', 'Amazone', 'Yangtsé', 'Mississippi'],
                    correctAnswer: 'Amazone'
                },
                {
                    question: 'Quelle est la plus grande île au monde ?',
                    answers: ['Groenland', 'Australie', 'Borneo', 'Islande'],
                    correctAnswer: 'Groenland'
                },
            ]
        },
        {
            section: 'Sciences',
            score: 0,
            questions: [
                {
                    question: 'Quelle est la planète la plus proche du soleil ?',
                    answers: ['Vénus', 'Mercure', 'Mars', 'Jupiter'],
                    correctAnswer: 'Mercure'
                },
                {
                    question: "Quel est l'élément le plus abondant dans l'univers ?",
                    answers: ['Oxygène', 'Carbone', 'Hydrogène', 'Azote'],
                    correctAnswer: 'Hydrogène'
                },
                {
                    question: 'Quel est le plus grand mammifère terrestre ?',
                    answers: ['Éléphant', 'Baleine bleue', 'Rhinothéros', 'Girafe'],
                    correctAnswer: 'Éléphant'
                },
            ]
        },
        {
            section: 'Auto',
            score: 0,
            questions: [
                {
                    question: 'Quelle entreprise automobile a produit le modèle Mustang?',
                    answers: ['Ford', 'Chevrolet', 'Toyota', 'Honda'],
                    correctAnswer: 'Ford'
                },
                {
                    question: "Quelle est la première voiture produite en série dans le monde?",
                    answers: ['Ford Model T', 'Chevrolet Impala', 'Volkswagen Beetle', 'Toyota Corolla'],
                    correctAnswer: 'Ford Model T'
                },
                {
                    question: "Quelle est la principale source d'énergie pour les voitures électriques?",
                    answers: ['Essence', 'Diesel', 'Électricité', 'Hydrogène'],
                    correctAnswer: 'Électricité'
                }
            ]
        },
        {
            section: 'Programmation',
            score: 0,
            questions: [
                {
                    question: 'Quel langage de programmation est souvent utilisé pour créer des pages web interactives?',
                    answers: ['Java', 'Python', 'JavaScript', 'C#'],
                    correctAnswer: 'JavaScript'
                },
                {
                    question: "Qu'est-ce que l'acronyme HTML signifie en programmation web?",
                    answers: ['Hypertext Markup Language', 'High-level Text Modeling Language', 'Hyperlink and Text Management Language', 'Home Tool Markup Language'],
                    correctAnswer: 'Hypertext Markup Language'
                },
                {
                    question: "Dans la programmation, que signifie l'acronyme API?",
                    answers: ['Advanced Programming Interface', 'Application Programming Interface', 'Automated Processing Integration', 'Application Process Integration'],
                    correctAnswer: 'Application Programming Interface'
                }
            ]
        },
        
    ];


    let timer;
    let totalScore = 0;
    let currentQuestionIndex = 0;
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const timeDisplayElement = document.getElementById('time-display');

    let currentSectionIndex = 0;
    let scores = {};

    function startQuiz() {
        currentSectionIndex = 0;
        scores = {};
        showSection(quizData[currentSectionIndex]);
    }

    function showSection(section) {
        currentQuestionIndex = 0;

        // Mettez à jour le nom de la section sur la page
        const sectionNameElement = document.getElementById('section-name');
        if (sectionNameElement) {
            sectionNameElement.innerText = `Section : ${section.section}`;
        }

        showQuestion(section.questions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        resetTimer();
        var questionElement = document.getElementById('question');
        if (questionElement) {
            questionElement.innerText = question.question;
        }
    
        var answerButtonsElement = document.getElementById('answer-buttons');
        if (answerButtonsElement) {
            answerButtonsElement.innerHTML = '';
        }
    
        startTimer(30, () => selectAnswer());
    
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(answer, question.correctAnswer));
    
            if (answerButtonsElement) {
                answerButtonsElement.appendChild(button);
            }
        });
    }

    function startTimer(duration, callback) {
        let timeRemaining = duration;
        updateTimerDisplay(timeRemaining);
        timer = setInterval(() => {
            timeRemaining--;
            updateTimerDisplay(timeRemaining);

            if (timeRemaining < 0) {
                clearInterval(timer);
                callback();
            }
        }, 1000);
    }

    function updateTimerDisplay(time) {
        timeDisplayElement.innerText = time;
    }

    function resetTimer() {
        clearInterval(timer);
    }

    function selectAnswer(selectedAnswer, correctAnswer) {
        resetTimer();
    
        if (selectedAnswer === correctAnswer) {
            console.log('Correct!');
            // Mettez à jour le score pour la section actuelle
            quizData[currentSectionIndex].score++;
            // Mettez à jour le score global
            totalScore++;
        } else {
            console.log('Incorrect!');
        }
    
        if (currentQuestionIndex < quizData[currentSectionIndex].questions.length - 1) {
            // Passer à la question suivante de la section actuelle
            currentQuestionIndex++;
            showQuestion(quizData[currentSectionIndex].questions[currentQuestionIndex]);
        } else if (currentSectionIndex < quizData.length - 1) {
            // Passer à la section suivante
            currentSectionIndex++;
            showSection(quizData[currentSectionIndex]);
        } else {
            console.log('Fin du quiz!');
            const sectionNames = quizData.map(section => section.section);
            localStorage.setItem('sectionNames', JSON.stringify(sectionNames));
            localStorage.setItem('quizData', JSON.stringify(quizData));
            // Rediriger vers la page de résultats du quiz avec les scores
            window.location.href = `result.html?totalScore=${totalScore}&sectionScores=${encodeURIComponent(JSON.stringify(quizData.map(section => section.score)))}`;
        }
    }
    
    

    // Démarrez le quiz une fois que la page est chargée
    startQuiz();
}

// Appelez la fonction d'initialisation du quiz
initializeQuiz();

// Gérez le bouton "Accéder au Quiz"
document.getElementById('access-button').addEventListener('click', function() {
    // Récupérez les données du formulaire
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value;

    // Vérifiez si toutes les données sont remplies
    if (name && birthdate && email) {
        // Encodez les données pour les passer en paramètres d'URL
        const encodedName = encodeURIComponent(name);
        const encodedBirthdate = encodeURIComponent(birthdate);
        const encodedEmail = encodeURIComponent(email);

        // Redirigez vers la page du quiz en passant les données en paramètres d'URL
        window.location.href = `quiz.html?name=${encodedName}&birthdate=${encodedBirthdate}&email=${encodedEmail}`;
    } else {
        alert('Veuillez remplir tous les champs du formulaire.');
    }
});
