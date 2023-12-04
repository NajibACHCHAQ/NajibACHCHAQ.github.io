
function initializeQuiz() {
    const quizData = [
        {
            section: 'Accueil Administratif',
            score: 0,
            questions: [
                {
                    type: 'multiple-choice',
                    question: "Vous participez à une nouvelle offre promotionnelle, vous devez:",
                    answers: ['Soumettre une idée', "Distribuer l'offre", 'Participer au marketing', 'Je ne sais pas'],
                    correctAnswer: "Distribuer l'offre"
                },
                {
                    type: 'multiple-choice',
                    question: 'Un dossier de dernière minute arrive, vous devez le traiter immédiatement à la demande de votre supérieur :',
                    answers: ['Ça tombe mal vous devez partir, ce sera à traiter demain',
                            'Vos dossier sont à jour, et vous pouvez traiter rapidement celui-ci sans trop dépasser vos horaires',
                            'Le moment est mal choisi, vous estimez que vous avez des dossiers plus urgents',
                            'Je ne sais pas'],
                    correctAnswer: 'Vos dossier sont à jour, et vous pouvez traiter rapidement celui-ci sans trop dépasser vos horaires'
                },
                {
                    type: 'multiple-choice',
                    question: "Encore une réunion prévue aujourd'hui",
                    answers: ["Vous trouverez qu'il y a trop de réunion en semaine",
                     "Ces réunions successives reflètent l'incapacité de chacun à travailler en autonomie",
                      "C'est un moment d'échanges importants",
                       'Je ne sais pas'],
                    correctAnswer: "C'est un moment d'échanges importants"
                },
                {
                    type: 'multiple-choice',
                    question: "Dans la vie en général, vous êtes plutôt :",
                    answers: ['Dans les délais', "En avance", 'Hors délais', 'Je ne sais pas'],
                    correctAnswer: "Dans les délais"
                },
                {
                    type: 'multiple-choice',
                    question: 'Vous avez bonne mémoire :',
                    answers: ['Pas besoin de noter les taches, perdre du temps à colorier les moments importants sur votre agenda',
                            "Je note tout et comme cela je n'oublie rien et tiens compte des modifications",
                            'Les taches sont notées, barrées et parfois reportées',
                            'Je ne sais pas'],
                    correctAnswer: "Je note tout et comme cela je n'oublie rien et tiens compte des modifications"
                },
                {
                    type: 'multiple-choice',
                    question: "Le téléphone sonne :",
                    answers: ["J'ai le temps de répondre, mon répondeur n'est pas activé",
                     "Je dois répondre avant la fin de la 3ème sonnerie",
                      "Je laisse sonner si je suis déjà en ligne",
                       'Je ne sais pas'],
                    correctAnswer: "Je dois répondre avant la fin de la 3ème sonnerie"
                },
                {
                    type: 'multiple-choice',
                    question: 'Vous êtes en congé le lendemain, que faites-vous ?',
                    answers: ['Je préviens tous les collaborateurs par téléphone et je bascule le standard sur répondeur',
                            "J'envoie un mail à tout le monde pour prévenir",
                            "J'informe sur un agenda partagé mon absence et la marche à suivre",
                            'Je ne sais pas'],
                    correctAnswer: "J'informe sur un agenda partagé mon absence et la marche à suivre"
                },
                {
                    type: 'multiple-choice',
                    question: "Si je dois faire attendre une personne au téléphone, vous dites :",
                    answers: ["Ne quittez pas",
                     "Merci de bien vouloir rester en ligne",
                      "Je ne sais pas, je me renseigne",
                       'Je ne sais pas'],
                    correctAnswer: "Merci de bien vouloir rester en ligne"
                },
                {
                    type: 'multiple-choice',
                    question: "On me demande de réaliser et de mettre à l'affichage une note d'information",
                    answers: ["Ce n'est pas mon travail de créer cette note d'information, par contre je peux l'afficher",
                     "Je demande à la secrétaire de la faire et de me l'envoyer par mail pour l'afficher ensuite",
                      "Je la crée et je l'affiche",
                       'Je ne sais pas'],
                    correctAnswer: "Je la crée et je l'affiche"
                },
                {
                    type: 'multiple-choice',
                    question: "Vous devez faire un courrier, j'ai des connaissances sur les normes",
                    answers: ['Agénor',
                            "Afnor",
                            "Agnor",
                            'Je ne sais pas'],
                    correctAnswer: "Afnor"
                },
                {
                    type: 'multiple-choice',
                    question: "Une personne se présente à l'accueil !",
                    answers: ["Je la connais et donc je peux être familière",
                     "Je la connais et je peux la faire attendre et finir mon travail",
                      "Je traite tout le monde de la même façon",
                       'Je ne sais pas'],
                    correctAnswer: "Je traite tout le monde de la même façon"
                },
                {
                    type: 'multiple-choice',
                    question: "Quel logiciel vais-je utiliser pour créer un tableau pour créer un tableau de statistiques ?",
                    answers: ["Logistat",
                     "Base de données",
                      "Tableur",
                       'Je ne sais pas'],
                    correctAnswer: "Tableur"
                },
                {
                    type: 'multiple-choice',
                    question: "J'écris un mail, je dois utiliser le même vocabulaire et même tournure de phrase ?",
                    answers: ['Oui',
                            "Non",
                            'Je ne sais pas'],
                    correctAnswer: "Non"
                },
                {
                    type: 'multiple-choice',
                    question: "Je dois organiser une réunion à distance, je dois utiliser :",
                    answers: ["Un vidéoprojecteur",
                     "Un site internet dédié",
                      "Un logiciel type diaporame",
                       'Je ne sais pas'],
                    correctAnswer: "Un site internet dédié"
                },
                {
                    type: 'multiple-choice',
                    question: "Quand je fais une réunion à distance, qu'elles sont les contraintes de ce type de réunion ?",
                    answers: ["Risque d'ennui",
                     "Risque de distraction (téléphone, jeux...)",
                      "Difficulté de créer une synergie",
                       'Je ne sais pas'],
                    correctAnswer: "Difficulté de créer une synergie"
                },
            ]
        },
        {
            section: 'Communication Commerciale',
            score: 0,
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Le rabais est : ',
                    answers: ["Une réduction commerciale liée à l'importance de la commande",
                     'Une réduction financière',
                     'Une réduction commerciale liée à un préjudice',
                     'je ne sais pas'],
                    correctAnswer: 'Une réduction commerciale liée à un préjudice'
                },
                {
                    type: 'multiple-choice',
                    question: "La remise est :",
                    answers: ['Une réduction commerciale liée à un préjudice',
                     'Une réduction financière',
                      "Une réduction commerciale liée au statut du client ou à l'importance de la commande",
                       'Je ne sais pas'],
                    correctAnswer: "Une réduction commerciale liée au statut du client ou à l'importance de la commande"
                },
                {
                    type: 'multiple-choice',
                    question: 'La ristourne est : ',
                    answers: ["Une réduction commerciale liée à l'importance de la commande",
                     "Une réduction commerciale liée à l'importance des commandes sur une période",
                      'Une réduction commerciale liée à un préjudice', 
                      'Je ne sais pas'],
                    correctAnswer: "Une réduction commerciale liée à l'importance des commandes sur une période"
                },
                {
                    type: 'multiple-choice',
                    question: "L'escompte est :",
                    answers: ["Une réduction financière liée au mode de paiement",
                     'Une réduction comemrciale liée au mode de paiement',
                     'Une réduction commerciale',
                     'je ne sais pas'],
                    correctAnswer: 'Une réduction financière liée au mode de paiement'
                },
                {
                    type: 'multiple-choice',
                    question: "La TVA est :",
                    answers: ['Une taxe sur les ventes',
                     'Une taxe sur les achats',
                      "Une taxe sur les achats et les ventes",
                       'Je ne sais pas'],
                    correctAnswer: "Une taxe sur les achats et les ventes"
                },
                {
                    type: 'open-ended',
                    question: 'Citez 3 mentions obligatoires d\'un courrier d\'entreprise.',
                    correctAnswers: [
                        ['nom entreprise', 'forme juridique', 'montant capital', 'adresse siège social', 'SIREN', 'RCS'],
                    ]
                },
            ]
        },
        {
            section: 'Comptabilité',
            score: 0,
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'En quoi consiste la comptabilité générale ? En quoi consiste la comptabilité générale ?',
                    answers: ['A remplir des tableaux sur Excel uniquement',
                     'À faire des factures',
                     'À enregistrer des écritures',
                      'Je ne sais pas'],
                    correctAnswer: 'À enregistrer des écritures'
                },
                {
                    type: 'multiple-choice',
                    question: "Quelle est la qualité première d’un comptable ?",
                    answers: ['Etre fort en maths', 'Savoir lire', 'Rester longtemps assis', 'Je ne sais pas'],
                    correctAnswer: 'Savoir lire'
                },
                {
                    type: 'multiple-choice',
                    question: "Tenir une comptabilité est obligatoire ?",
                    answers: ['Vrai', 'Faux', 'Je ne sais pas'],
                    correctAnswer: 'Vrai'
                },
                {
                    type: 'multiple-choice',
                    question: 'Laquelle de ces tâches n’est pas réalisée par le comptable dans une PME ?',
                    answers: ['Démarcher les clients',
                     'Pointer le compte banque',
                     'Etablir le bilan',
                      'Je ne sais pas'],
                    correctAnswer: 'Démarcher les clients'
                },
                {
                    type: 'multiple-choice',
                    question: "Le bilan est composé de : ",
                    answers: ['Du débit et du passif', 'Du débit et du crédit', "De l'actif et du passif", 'Je ne sais pas'],
                    correctAnswer: "De l'actif et du passif"
                },
                {
                    type: 'multiple-choice',
                    question: "On a l’obligation de faire le bilan tous les mois :",
                    answers: ['Vrai', 'Faux', 'Je ne sais pas'],
                    correctAnswer: 'Faux'
                },
                {
                    type: 'multiple-choice',
                    question: 'Le bilan donne quelles informations de l’entreprise ?',
                    answers: ["Les biens de l'entreprise et le bénéfice",
                     'Le nombre de salariés',
                     'Les biens et les ressources',
                      'Je ne sais pas'],
                    correctAnswer: 'Les biens et les ressources'
                },
                {
                    type: 'multiple-choice',
                    question: "Comment est déterminé le bénéfice ou la perte de l’entreprise ?",
                    answers: ['Quand on a bien vendu', 
                    'Quand l’entreprise ne règle pas ses dépenses', 
                    'Quand on fait la différence entre ses charges et ses produits',
                     'Je ne sais pas'],
                    correctAnswer: 'Quand on fait la différence entre ses charges et ses produits'
                },
                {
                    type: 'multiple-choice',
                    question: "Comment appelle-t-on l’argent que nous doivent les clients ?",
                    answers: ['Une dette client',
                     'Une ardoise client', 
                     'Une créance',
                     'Je ne sais pas'],
                    correctAnswer: 'Une créance'
                },
                {
                    type: 'multiple-choice',
                    question: 'Quand j’achète à crédit une voiture, elle appartient à qui ?',
                    answers: ['Au vendeur',
                     'A la banque',
                     "A l'entreprise",
                      'Je ne sais pas'],
                    correctAnswer: "A l'entreprise"
                },
                {
                    type: 'multiple-choice',
                    question: "A quoi sert le compte d’exploitation ?",
                    answers: ['À chiffrer les ventes de l’année', 
                    'A déterminer le résultat de l’année', 
                    "À renseigner comment l’entreprise est exploité", 
                    'Je ne sais pas'],
                    correctAnswer: "A déterminer le résultat de l’année"
                },
                {
                    type: 'multiple-choice',
                    question: "A quoi sert une balance ?",
                    answers: ['À peser pour évaluer les comptes', 
                    'À lister les soldes des comptes',
                     'Ça n’existe pas',
                    'Je ne sais pas'],
                    correctAnswer: 'À lister les soldes des comptes'
                },
                {
                    type: 'multiple-choice',
                    question: "Lorsqu’on achète à crédit de la marchandise, on doit l’argent à qui ?",
                    answers: ['À la banque', 
                    'À un organisme de crédit type Sofinco', 
                    "Au fournisseur", 
                    'Je ne sais pas'],
                    correctAnswer: "Au fournisseur"
                },
                {
                    type: 'multiple-choice',
                    question: "Mon client me paye comptant, est-ce qu’il a le droit de se déduire un % du montant de sa facture ?",
                    answers: ['Oui il a le droit car il a demandé la permission', 
                    'Non c’est interdit',
                     'Oui il peut, c’est inscrit sur sa facture',
                    'Je ne sais pas'],
                    correctAnswer: 'Oui il peut, c’est inscrit sur sa facture'
                },
                {
                    type: 'multiple-choice',
                    question: "Qu’est-ce qu’une immobilisation ?",
                    answers: ['Un immeuble', 
                    'Les stocks',
                     "Les biens de l'entreprise",
                    'Je ne sais pas'],
                    correctAnswer: "Les biens de l'entreprise"
                },
                {
                    type: 'multiple-choice',
                    question: "Qu’est-ce qu’un effet de commerce ?",
                    answers: ['Une réduction financière', 
                    'Un mode de paiement', 
                    "Un chèque du CIC", 
                    'Je ne sais pas'],
                    correctAnswer: "Un mode de paiement"
                },
                {
                    type: 'multiple-choice',
                    question: "Si le montant d’une facture est inexact, le comptable peut : ",
                    answers: ['La modifier et la mettre dans ses comptes', 
                    'La déchirer et en demander une autre',
                     'Réclamer un avoir',
                    'Je ne sais pas'],
                    correctAnswer: 'Réclamer un avoir'
                },
                {
                    type: 'multiple-choice',
                    question: "La TVA coûte chère à l’entreprise ?",
                    answers: ['Vrai', 
                    'Faux',
                    'Je ne sais pas'],
                    correctAnswer: "Faux"
                },
                {
                    type: 'multiple-choice',
                    question: "Quelle est le document que le comptable ne transcrit pas en comptabilité ?",
                    answers: ['Une facture client', 
                    'Un relevé du fournisseur', 
                    "Un chèque", 
                    'Je ne sais pas'],
                    correctAnswer: "Un relevé du fournisseur"
                },
                {
                    type: 'multiple-choice',
                    question: "Une écriture comptable comprend :",
                    answers: ['Au moins un débit d’un compte et un crédit d’un autre compte', 
                    'Le débit et le crédit du même compte',
                     'Au moins 3 lignes',
                    'Je ne sais pas'],
                    correctAnswer: 'Au moins un débit d’un compte et un crédit d’un autre compte'
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
            sectionNameElement.innerText = `${section.section}`;
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
            answerButtonsElement.textContent = '';  // Utilisation de textContent au lieu de innerHTML
        
            if (question.type === 'open-ended') {
                // Ajoutez trois champs de saisie et un bouton pour les questions de type open-ended
                for (let i = 0; i < 3; i++) {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.placeholder = `Réponse ${i + 1}`;
                    answerButtonsElement.appendChild(input);
                }
        
                const submitButton = document.createElement('button');
                submitButton.innerText = 'Soumettre';
                submitButton.classList.add('btn');
                submitButton.addEventListener('click', () => {
                    console.log('Bouton Soumettre cliqué!');
                    const userAnswers = [];
                    for (let i = 0; i < 3; i++) {
                        const input = answerButtonsElement.querySelector(`input:nth-child(${i + 1})`);
                        userAnswers.push(input.value.trim());
                    }
                    selectAnswer(userAnswers, question.correctAnswers);
                });
                
        
                answerButtonsElement.appendChild(submitButton);
            } else {
                // Utilisez des boutons pour les questions à choix multiples
                question.answers.forEach(answer => {
                    const button = document.createElement('button');
                    button.innerText = answer;
                    button.classList.add('btn');
                    button.addEventListener('click', () => selectAnswer(answer, question.correctAnswer));
        
                    answerButtonsElement.appendChild(button);
                });
            }
        }
        
    
        startTimer(30, () => selectAnswer());
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
    
        const currentQuestion = quizData[currentSectionIndex].questions[currentQuestionIndex];
    
        if (currentQuestion.type === 'open-ended') {
            handleOpenEndedAnswer(selectedAnswer, currentQuestion.correctAnswers);
        } else {
            // Logique existante pour les questions à choix multiples
            handleMultipleChoiceAnswer(selectedAnswer, correctAnswer);
        }
    }
    
    function handleOpenEndedAnswer(userAnswers, correctAnswers) {
        console.log('Valeur de userAnswers:', userAnswers);
    
        // Comparer chaque réponse utilisateur avec les réponses correctes
        const isCorrect = userAnswers.every((userAnswer, index) =>
            userAnswer.trim() === correctAnswers[index]
        );
    
        if (isCorrect) {
            console.log('Correct!');
            updateScores(true);
        } else {
            console.log('Incorrect!');
            updateScores(false);
        }
    
        moveToNextQuestionOrSection();
    }
    
    
    
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
    
    function updateScores(isCorrect) {
        if (isCorrect) {
            // Mettez à jour le score pour la section actuelle
            quizData[currentSectionIndex].score++;
            // Mettez à jour le score global
            totalScore++;
        }
    }
    
    function moveToNextQuestionOrSection() {
        if (currentQuestionIndex < quizData[currentSectionIndex].questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(quizData[currentSectionIndex].questions[currentQuestionIndex]);
        } else if (currentSectionIndex < quizData.length - 1) {
            currentSectionIndex++;
            showSection(quizData[currentSectionIndex]);
        } else {
            console.log('Fin du quiz!');
            const sectionNames = quizData.map(section => section.section);
            localStorage.setItem('sectionNames', JSON.stringify(sectionNames));
            localStorage.setItem('quizData', JSON.stringify(quizData));
            window.location.href = `result.html?totalScore=${totalScore}&sectionScores=${encodeURIComponent(JSON.stringify(quizData.map(section => section.score)))}`;
        }
    }
    
    // Démarrez le quiz une fois que la page est chargée
    startQuiz();
}

// Appelez la fonction d'initialisation du quiz
initializeQuiz();

