
import {quizData} from "./quiz.js";

function initializeQuiz() {
    // Initialisation des variables globales
    let timer;  // Déclarez la variable timer ici
    let totalScore = 0;
    let currentQuestionIndex = -1;
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const timeDisplayElement = document.getElementById('time-display');       
    let currentSectionIndex = 0;
    let scores = {};

    // Fonction pour démarrer le quiz
    function startQuiz() {
        currentSectionIndex = 0;
        scores = {};
        showSection(quizData[currentSectionIndex]);
    }

    // Fonction pour afficher une section spécifique du quiz
    function showSection(section) {
        currentQuestionIndex = 0;
        // Mettez à jour le nom de la section sur la page
        const sectionNameElement = document.getElementById('section-name');
        if (sectionNameElement) {
            sectionNameElement.innerText = `${section.section}`;
        }
        showQuestion(section.questions[currentQuestionIndex]);
    }

    // Fonction pour afficher une question spécifique
    function showQuestion(question) {
        resetTimer();
        // Calcul du décompte global des questions
    const totalQuestionsCount = quizData.reduce((acc, section) => acc + section.questions.length, 0);
    const globalQuestionIndex = quizData.reduce((acc, section, index) => {
        if (index < currentSectionIndex) {
            return acc + section.questions.length;
        }
        return acc;
    }, 0);

    // Mise à jour du décompte global des questions
    const questionCountElement = document.getElementById('question-count');
    if (questionCountElement) {
        questionCountElement.innerText = `${globalQuestionIndex + currentQuestionIndex + 1}/${totalQuestionsCount}`;
    }

        // Récupération des éléments du DOM
        const questionElement = document.getElementById('question');
        const answerButtonsElement = document.getElementById('answer-buttons');
        const questionImageElement = document.getElementById('question-image');       
        console.log('showQuestion called with:', question);
        console.log('Current section ID:', quizData[currentSectionIndex].id);
        console.log('Current question ID:', quizData[currentSectionIndex].questions[currentQuestionIndex].id);       
        // Vérification de la présence des éléments dans le DOM
        if (!questionElement || !answerButtonsElement || !questionImageElement) {
            console.error('Elements not found!');
            return;
        }       
        // Affichage de la question et gestion de l'image associée
        if (questionElement) {
            questionElement.innerText = question.question;
        }        
        if (questionImageElement) {
            if (question.image) {
                questionImageElement.src = question.image;
                questionImageElement.style.display = 'block';
            } else {
                questionImageElement.style.display = 'none';
            }
        }        
        // Génération des boutons de réponse en fonction du type de question
        if (answerButtonsElement) {
            answerButtonsElement.textContent = '';       
            if (question.type === 'open-ended') {
                // Pour les questions ouvertes, générer des champs de texte
                const numberOfInputs = question.numberOfInputs || 1;
                console.log('Number of inputs:', numberOfInputs);       
                for (let i = 0; i < numberOfInputs; i++) {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.placeholder = `Réponse ${i + 1}`;
                    answerButtonsElement.appendChild(input);
                }        
                // Ajouter un bouton Soumettre pour les questions ouvertes
                const submitButton = document.createElement('button');
                submitButton.id = 'submit-button';
                submitButton.innerText = 'Soumettre';
                submitButton.classList.add('btn');
                submitButton.addEventListener('click', handleSubmitButtonClick);        
                answerButtonsElement.appendChild(submitButton);
            } else {
                // Pour les questions à choix multiples, générer des boutons
                question.answers.forEach(answer => {
                    const button = document.createElement('button');
                    button.innerText = answer;
                    button.classList.add('btn');
                    button.addEventListener('click', () => selectAnswer(answer, question.correctAnswer));        
                    answerButtonsElement.appendChild(button);
                });
            }
        }        
        // Démarrer le timer pour la question actuelle
        startTimer(question.delay, () => moveToNextQuestionOrSection(() => selectAnswer()), () => {});
    }

    // Fonction appelée lorsqu'un utilisateur soumet une réponse à une question ouverte
    function handleSubmitButtonClick() {
        console.log('Bouton Soumettre cliqué!');        
        // Récupérer les réponses de l'utilisateur depuis les champs de texte
        const userAnswers = [];
        const answerInputs = document.querySelectorAll('#answer-buttons input');       
        answerInputs.forEach(input => {
            userAnswers.push(input.value.trim());
        });       

        // Appeler la fonction pour gérer les réponses ouvertes
        handleOpenEndedAnswer(userAnswers, quizData[currentSectionIndex].questions[currentQuestionIndex].correctAnswer);
        // Passer à la question suivante ou à la section suivante
        moveToNextQuestionOrSection(false); // Utilisez false car le temps n'est pas écoulé
        console.log('After moveToNextQuestionOrSection');
    }

    // Fonction pour démarrer le timer avec une durée spécifiée et des callbacks
    function startTimer(duration, callback, submitCallback) {
        console.log('startTimer called');       
        if (timer === null) {
            console.log('Timer is null');
            let timeRemaining = duration;
            console.log('Timer started');
            updateTimerDisplay(timeRemaining);
            timer = setInterval(() => {
                timeRemaining--;
                updateTimerDisplay(timeRemaining);        
                if (timeRemaining < 0) {
                    clearInterval(timer);
                    resetTimer();  // Réinitialiser le timer ici
                    callback();    // Utiliser le callback fourni à la place de moveToNextQuestionOrSection
                }
            }, 1000);       
            // Ajout de l'écouteur d'événements pour le bouton Soumettre

        }
    }

    // Fonction pour mettre à jour l'affichage du timer
    function updateTimerDisplay(time) {
        //console.log('Updating timer display:', time);
        timeDisplayElement.innerText = time;
    }       
    // Fonction pour réinitialiser le timer
    function resetTimer() {
        if (timer !== null) {
            console.log('Timer reset');
            clearInterval(timer);
            timer = null; // Réinitialiser la variable timer
        }
    }      
    // Fonction appelée lorsque l'utilisateur sélectionne une réponse
    function selectAnswer(selectedAnswer, correctAnswer) {
        const currentQuestion = quizData[currentSectionIndex].questions[currentQuestionIndex];       
        if (currentQuestion.type === 'open-ended') {
            handleOpenEndedAnswer(selectedAnswer, currentQuestion.correctAnswers);
        } else {
            handleMultipleChoiceAnswer(selectedAnswer, correctAnswer);
        }       
    }       
    // Fonction pour passer à la question suivante ou à la section suivante
    function moveToNextQuestionOrSection(isTimeUp) {
        if (currentQuestionIndex < quizData[currentSectionIndex].questions.length - 1) {
            // S'il y a une question suivante dans la section actuelle
            currentQuestionIndex++;
        } else {
            // Si toutes les questions de la section actuelle sont terminées
            if (currentSectionIndex < quizData.length - 1) {
                currentSectionIndex++;
                // Réinitialiser l'index de la question à 0 pour la nouvelle section
                currentQuestionIndex = 0;
                showSection(quizData[currentSectionIndex]);
            } else {
                // Fin du quiz
                console.log('Fin du quiz!');
                const sectionNames = quizData.map(section => section.section);
                localStorage.setItem('sectionNames', JSON.stringify(sectionNames));
                localStorage.setItem('quizData', JSON.stringify(quizData));
                window.location.href = `result.html?totalScore=${totalScore}&sectionScores=${encodeURIComponent(JSON.stringify(quizData.map(section => section.score)))}`;
                return; // Arrêtez l'exécution si le quiz est terminé
            }
        }        
       // Réinitialiser le timer ici, après avoir décidé si le temps est écoulé ou non
        resetTimer();

        // Si le temps est écoulé, passer à la question suivante
        if (isTimeUp && currentSectionIndex < quizData.length) {
            showQuestion(quizData[currentSectionIndex].questions[currentQuestionIndex]);
        }
        // Sinon, afficher la question suivante
        else {
            showQuestion(quizData[currentSectionIndex].questions[currentQuestionIndex]);
        }
    }
        
    function normalizeNumber(number) {
        // Normaliser le format des nombres décimaux (accepter à la fois la virgule et le point comme séparateurs)
        return number.replace(/[,.]/g, '.');
    }
    
    function normalizeString(str) {
        // Normaliser les caractères spéciaux, points, virgules, etc.
        const normalized = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    
        // Si la chaîne est un nombre décimal, normalisez le format du nombre
        if (!isNaN(normalized)) {
            return normalizeNumber(normalized);
        }
    
        // Remplacer '*' par 'x' et vice versa
        return normalized.replace(/\*/g, 'x').replace(/x/g, '*');
    }
    
    function handleOpenEndedAnswer(userAnswers, correctAnswers) {
        console.log('Valeur de userAnswers:', userAnswers);
        console.log('Valeur de correctAnswers:', correctAnswers);
    
        // Filtrer les réponses vides de l'utilisateur
        const trimmedUserAnswers = userAnswers.map(answer => normalizeString(answer));
    
        // Vérifier que correctAnswers est défini
        if (correctAnswers) {
            let correctCount = 0;
    
            // Vérifier le format du modèle de réponse correcte
            if (Array.isArray(correctAnswers)) {
                // Modèle avec une liste de chaînes séparées par des virgules
                const correctAnswerElements = correctAnswers
                    .flatMap(correctAnswer => correctAnswer.split(','))  // Divise également sur les virgules
                    .map(correctAnswer => normalizeString(correctAnswer.trim()));
    
                // Vérifier si au moins un élément de la réponse correcte correspond à la réponse de l'utilisateur
                correctCount = trimmedUserAnswers.reduce((count, userAnswer) => {
                    const normalizedUserAnswer = normalizeString(userAnswer);
    
                    // Comparer en ignorant la casse
                    if (correctAnswerElements.some(correctAnswerElement => normalizedUserAnswer.toLowerCase() === correctAnswerElement.toLowerCase() || isNumericMatch(normalizedUserAnswer, correctAnswerElement))) {
                        return count + 1;
                    }
                    return count;
                }, 0);
            }
    
            // Mettre à jour les scores et passer à la question suivante
            console.log(`Nombre de champs corrects : ${correctCount}`);
            updateScores(correctCount === trimmedUserAnswers.length);
            console.log(scores);
        }
    }
     
    function isNumericMatch(value1, value2) {
        const epsilon = 0.01;  // Marge d'erreur acceptable
        const num1 = parseFloat(value1.replace(',', '.'));
        const num2 = parseFloat(value2.replace(',', '.'));
    
        return Math.abs(num1 - num2) < epsilon;
    }

    // Fonction pour gérer les réponses aux questions à choix multiples
    function handleMultipleChoiceAnswer(selectedAnswer, correctAnswer) {
        if (selectedAnswer === correctAnswer) {
            console.log('Correct!');
            updateScores(true);
        } else {
            console.log('Incorrect!');
            updateScores(false);
        }
    
        moveToNextQuestionOrSection();
    }       
    // Fonction pour mettre à jour les scores en fonction de la validité des réponses
    function updateScores(isCorrect) {
        if (isCorrect) {
            // Mettre à jour le score pour la section actuelle
            quizData[currentSectionIndex].score++;
            // Mettre à jour le score global
            totalScore++;
        }
    }        
    // Démarrez le quiz une fois que la page est chargée
    startQuiz();       
}

// Appelez la fonction d'initialisation du quiz v4Lf4wEyg25WCPxw
initializeQuiz();


