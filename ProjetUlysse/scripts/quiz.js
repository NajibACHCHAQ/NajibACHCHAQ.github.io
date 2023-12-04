const quizData = [
    {
        section: 'Accueil Administratif',
        score: 0,
        questions: [
            {
                question: "Vous participez à une nouvelle offre promotionnelle, vous devez:",
                answers: ['Soumettre une idée', "Distribuer l'offre", 'Participer au marketing', 'Je ne sais pas'],
                correctAnswer: "Distribuer l'offre"
            },
            {
                question: 'Un dossier de dernière minute arrive, vous devez le traiter immédiatement à la demande de votre supérieur :',
                answers: ['Ça tombe mal vous devez partir, ce sera à traiter demain',
                        'Vos dossier sont à jour, et vous pouvez traiter rapidement celui-ci sans trop dépasser vos horaires',
                        'Le moment est mal choisi, vous estimez que vous avez des dossiers plus urgents',
                        'Je ne sais pas'],
                correctAnswer: 'Vos dossier sont à jour, et vous pouvez traiter rapidement celui-ci sans trop dépasser vos horaires'
            },
            {
                question: "Encore une réunion prévue aujourd'hui",
                answers: ["Vous trouverez qu'il y a trop de réunion en semaine",
                 "Ces réunions successives reflètent l'incapacité de chacun à travailler en autonomie",
                  "C'est un moment d'échanges importants",
                   'Je ne sais pas'],
                correctAnswer: "C'est un moment d'échanges importants"
            },
            {
                question: "Dans la vie en général, vous êtes plutôt :",
                answers: ['Dans les délais', "En avance", 'Hors délais', 'Je ne sais pas'],
                correctAnswer: "Dans les délais"
            },
            {
                question: 'Vous avez bonne mémoire :',
                answers: ['Pas besoin de noter les taches, perdre du temps à colorier les moments importants sur votre agenda',
                        "Je note tout et comme cela je n'oublie rien et tiens compte des modifications",
                        'Les taches sont notées, barrées et parfois reportées',
                        'Je ne sais pas'],
                correctAnswer: "Je note tout et comme cela je n'oublie rien et tiens compte des modifications"
            },
            {
                question: "Le téléphone sonne :",
                answers: ["J'ai le temps de répondre, mon répondeur n'est pas activé",
                 "Je dois répondre avant la fin de la 3ème sonnerie",
                  "Je laisse sonner si je suis déjà en ligne",
                   'Je ne sais pas'],
                correctAnswer: "Je dois répondre avant la fin de la 3ème sonnerie"
            },
            {
                question: 'Vous êtes en congé le lendemain, que faites-vous ?',
                answers: ['Je préviens tous les collaborateurs par téléphone et je bascule le standard sur répondeur',
                        "J'envoie un mail à tout le monde pour prévenir",
                        "J'informe sur un agenda partagé mon absence et la marche à suivre",
                        'Je ne sais pas'],
                correctAnswer: "J'informe sur un agenda partagé mon absence et la marche à suivre"
            },
            {
                question: "Si je dois faire attendre une personne au téléphone, vous dites :",
                answers: ["Ne quittez pas",
                 "Merci de bien vouloir rester en ligne",
                  "Je ne sais pas, je me renseigne",
                   'Je ne sais pas'],
                correctAnswer: "Merci de bien vouloir rester en ligne"
            },
            {
                question: "On me demande de réaliser et de mettre à l'affichage une note d'information",
                answers: ["Ce n'est pas mon travail de créer cette note d'information, par contre je peux l'afficher",
                 "Je demande à la secrétaire de la faire et de me l'envoyer par mail pour l'afficher ensuite",
                  "Je la crée et je l'affiche",
                   'Je ne sais pas'],
                correctAnswer: "Je la crée et je l'affiche"
            },
            {
                question: "Vous devez faire un courrier, j'ai des connaissances sur les normes",
                answers: ['Agénor',
                        "Afnor",
                        "Agnor",
                        'Je ne sais pas'],
                correctAnswer: "Afnor"
            },
            {
                question: "Une personne se présente à l'accueil !",
                answers: ["Je la connais et donc je peux être familière",
                 "Je la connais et je peux la faire attendre et finir mon travail",
                  "Je traite tout le monde de la même façon",
                   'Je ne sais pas'],
                correctAnswer: "Je traite tout le monde de la même façon"
            },
            {
                question: "Quel logiciel vais-je utiliser pour créer un tableau pour créer un tableau de statistiques ?",
                answers: ["Logistat",
                 "Base de données",
                  "Tableur",
                   'Je ne sais pas'],
                correctAnswer: "Tableur"
            },
            {
                question: "J'écris un mail, je dois utiliser le même vocabulaire et même tournure de phrase ?",
                answers: ['Oui',
                        "Non",
                        'Je ne sais pas'],
                correctAnswer: "Non"
            },
            {
                question: "Je dois organiser une réunion à distance, je dois utiliser :",
                answers: ["Un vidéoprojecteur",
                 "Un site internet dédié",
                  "Un logiciel type diaporame",
                   'Je ne sais pas'],
                correctAnswer: "Un site internet dédié"
            },
            {
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

{
    section: 'Anglais',
    score: 0,
    questions: [
        {
            type: 'multiple-choice',
            question: "What's ______ name ?",
            answers: ['you', 'your', "you're", 'yours'],
            correctAnswers: 'your', // Mettez 'your' dans un tableau
        },
        {
            type: 'multiple-choice',
            question: 'There is______ apple on ______ kitchen table',
            answers: ['an-the', 'a-an', 'the-an', 'the-the'],
            correctAnswers: 'an-the', // Mettez 'an-the' dans un tableau
        },
        {
            type: 'multiple-choice',
            question: "______ are you from ?",
            answers: ['were', 'when', 'where', 'who'],
            correctAnswers: 'where', // Mettez 'where' dans un tableau
        }
    ]
},
