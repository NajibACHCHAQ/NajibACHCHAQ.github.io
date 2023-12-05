const quizData = [
    {
        id: 1,
        section: 'Accueil Administratif',
        score: 0,
        questions: [
            {
                id: 1,
                type: 'multiple-choice',
                question: "Vous participez à une nouvelle offre promotionnelle, vous devez:",
                answers: ['Soumettre une idée', "Distribuer l'offre", 'Participer au marketing', 'Je ne sais pas'],
                correctAnswer: "Distribuer l'offre"
            },
            {
                id: 2,
                type: 'multiple-choice',
                question: 'Un dossier de dernière minute arrive, vous devez le traiter immédiatement à la demande de votre supérieur :',
                answers: ['Ça tombe mal vous devez partir, ce sera à traiter demain',
                        'Vos dossier sont à jour, et vous pouvez traiter rapidement celui-ci sans trop dépasser vos horaires',
                        'Le moment est mal choisi, vous estimez que vous avez des dossiers plus urgents',
                        'Je ne sais pas'],
                correctAnswer: 'Vos dossier sont à jour, et vous pouvez traiter rapidement celui-ci sans trop dépasser vos horaires'
            },
            {
                id: 3,
                type: 'multiple-choice',
                question: "Encore une réunion prévue aujourd'hui",
                answers: ["Vous trouverez qu'il y a trop de réunion en semaine",
                 "Ces réunions successives reflètent l'incapacité de chacun à travailler en autonomie",
                  "C'est un moment d'échanges importants",
                   'Je ne sais pas'],
                correctAnswer: "C'est un moment d'échanges importants"
            },
            {
                id: 4,
                type: 'multiple-choice',
                question: "Dans la vie en général, vous êtes plutôt :",
                answers: ['Dans les délais', "En avance", 'Hors délais', 'Je ne sais pas'],
                correctAnswer: "Dans les délais"
            },
            {
                id: 5,
                type: 'multiple-choice',
                question: 'Vous avez bonne mémoire :',
                answers: ['Pas besoin de noter les taches, perdre du temps à colorier les moments importants sur votre agenda',
                        "Je note tout et comme cela je n'oublie rien et tiens compte des modifications",
                        'Les taches sont notées, barrées et parfois reportées',
                        'Je ne sais pas'],
                correctAnswer: "Je note tout et comme cela je n'oublie rien et tiens compte des modifications"
            },
            {
                id: 6,
                type: 'multiple-choice',
                question: "Le téléphone sonne :",
                answers: ["J'ai le temps de répondre, mon répondeur n'est pas activé",
                 "Je dois répondre avant la fin de la 3ème sonnerie",
                  "Je laisse sonner si je suis déjà en ligne",
                   'Je ne sais pas'],
                correctAnswer: "Je dois répondre avant la fin de la 3ème sonnerie"
            },
            {
                id: 7,
                type: 'multiple-choice',
                question: 'Vous êtes en congé le lendemain, que faites-vous ?',
                answers: ['Je préviens tous les collaborateurs par téléphone et je bascule le standard sur répondeur',
                        "J'envoie un mail à tout le monde pour prévenir",
                        "J'informe sur un agenda partagé mon absence et la marche à suivre",
                        'Je ne sais pas'],
                correctAnswer: "J'informe sur un agenda partagé mon absence et la marche à suivre"
            },
            {
                id: 8,
                type: 'multiple-choice',
                question: "Si je dois faire attendre une personne au téléphone, vous dites :",
                answers: ["Ne quittez pas",
                 "Merci de bien vouloir rester en ligne",
                  "Je ne sais pas, je me renseigne",
                   'Je ne sais pas'],
                correctAnswer: "Merci de bien vouloir rester en ligne"
            },
            {
                id: 9,
                type: 'multiple-choice',
                question: "On me demande de réaliser et de mettre à l'affichage une note d'information",
                answers: ["Ce n'est pas mon travail de créer cette note d'information, par contre je peux l'afficher",
                 "Je demande à la secrétaire de la faire et de me l'envoyer par mail pour l'afficher ensuite",
                  "Je la crée et je l'affiche",
                   'Je ne sais pas'],
                correctAnswer: "Je la crée et je l'affiche"
            },
            {
                id: 10,
                type: 'multiple-choice',
                question: "Vous devez faire un courrier, j'ai des connaissances sur les normes",
                answers: ['Agénor',
                        "Afnor",
                        "Agnor",
                        'Je ne sais pas'],
                correctAnswer: "Afnor"
            },
            {
                id: 11,
                type: 'multiple-choice',
                question: "Une personne se présente à l'accueil !",
                answers: ["Je la connais et donc je peux être familière",
                 "Je la connais et je peux la faire attendre et finir mon travail",
                  "Je traite tout le monde de la même façon",
                   'Je ne sais pas'],
                correctAnswer: "Je traite tout le monde de la même façon"
            },
            {
                id: 12,
                type: 'multiple-choice',
                question: "Quel logiciel vais-je utiliser pour créer un tableau pour créer un tableau de statistiques ?",
                answers: ["Logistat",
                 "Base de données",
                  "Tableur",
                   'Je ne sais pas'],
                correctAnswer: "Tableur"
            },
            {
                id: 13,
                type: 'multiple-choice',
                question: "J'écris un mail, je dois utiliser le même vocabulaire et même tournure de phrase ?",
                answers: ['Oui',
                        "Non",
                        'Je ne sais pas'],
                correctAnswer: "Non"
            },
            {
                id: 14,
                type: 'multiple-choice',
                question: "Je dois organiser une réunion à distance, je dois utiliser :",
                answers: ["Un vidéoprojecteur",
                 "Un site internet dédié",
                  "Un logiciel type diaporame",
                   'Je ne sais pas'],
                correctAnswer: "Un site internet dédié"
            },
            {
                id: 15,
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
        id: 2,
        section: 'Communication Commerciale',
        score: 0,
        questions: [
            {
                id: 16,
                type: 'multiple-choice',
                question: 'Le rabais est : ',
                answers: ["Une réduction commerciale liée à l'importance de la commande",
                 'Une réduction financière',
                 'Une réduction commerciale liée à un préjudice',
                 'je ne sais pas'],
                correctAnswer: 'Une réduction commerciale liée à un préjudice'
            },
            {
                id: 17,
                type: 'multiple-choice',
                question: "La remise est :",
                answers: ['Une réduction commerciale liée à un préjudice',
                 'Une réduction financière',
                  "Une réduction commerciale liée au statut du client ou à l'importance de la commande",
                   'Je ne sais pas'],
                correctAnswer: "Une réduction commerciale liée au statut du client ou à l'importance de la commande"
            },
            {
                id: 18,
                type: 'multiple-choice',
                question: 'La ristourne est : ',
                answers: ["Une réduction commerciale liée à l'importance de la commande",
                 "Une réduction commerciale liée à l'importance des commandes sur une période",
                  'Une réduction commerciale liée à un préjudice', 
                  'Je ne sais pas'],
                correctAnswer: "Une réduction commerciale liée à l'importance des commandes sur une période"
            },
            {
                id: 19,
                type: 'multiple-choice',
                question: "L'escompte est :",
                answers: ["Une réduction financière liée au mode de paiement",
                 'Une réduction comemrciale liée au mode de paiement',
                 'Une réduction commerciale',
                 'je ne sais pas'],
                correctAnswer: 'Une réduction financière liée au mode de paiement'
            },
            {
                id: 20,
                type: 'multiple-choice',
                question: "La TVA est :",
                answers: ['Une taxe sur les ventes',
                 'Une taxe sur les achats',
                  "Une taxe sur les achats et les ventes",
                   'Je ne sais pas'],
                correctAnswer: "Une taxe sur les achats et les ventes"
            },
            {
                id: 21,
                type: 'open-ended',
                question: 'Citez 3 mentions obligatoires d\'un courrier d\'entreprise.',
                correctAnswer: ['SIREN','nom entreprise','forme juridique','montant capital','adresse siège social','RCS'],
                numberOfInputs: 3
                
            },
        ]
    },
    {
        id: 3,
        section: 'Comptabilité',
        score: 0,
        questions: [
            {
                id: 22,
                type: 'multiple-choice',
                question: 'En quoi consiste la comptabilité générale ? En quoi consiste la comptabilité générale ?',
                answers: ['A remplir des tableaux sur Excel uniquement',
                 'À faire des factures',
                 'À enregistrer des écritures',
                  'Je ne sais pas'],
                correctAnswer: 'À enregistrer des écritures'
            },
            {
                id: 23,
                type: 'multiple-choice',
                question: "Quelle est la qualité première d’un comptable ?",
                answers: ['Etre fort en maths', 'Savoir lire', 'Rester longtemps assis', 'Je ne sais pas'],
                correctAnswer: 'Savoir lire'
            },
            {
                id: 24,
                type: 'multiple-choice',
                question: "Tenir une comptabilité est obligatoire ?",
                answers: ['Vrai', 'Faux', 'Je ne sais pas'],
                correctAnswer: 'Vrai'
            },
            {
                id: 25,
                type: 'multiple-choice',
                question: 'Laquelle de ces tâches n’est pas réalisée par le comptable dans une PME ?',
                answers: ['Démarcher les clients',
                 'Pointer le compte banque',
                 'Etablir le bilan',
                  'Je ne sais pas'],
                correctAnswer: 'Démarcher les clients'
            },
            {
                id: 26,
                type: 'multiple-choice',
                question: "Le bilan est composé de : ",
                answers: ['Du débit et du passif', 'Du débit et du crédit', "De l'actif et du passif", 'Je ne sais pas'],
                correctAnswer: "De l'actif et du passif"
            },
            {
                id: 27,
                type: 'multiple-choice',
                question: "On a l’obligation de faire le bilan tous les mois :",
                answers: ['Vrai', 'Faux', 'Je ne sais pas'],
                correctAnswer: 'Faux'
            },
            {
                id: 28,
                type: 'multiple-choice',
                question: 'Le bilan donne quelles informations de l’entreprise ?',
                answers: ["Les biens de l'entreprise et le bénéfice",
                 'Le nombre de salariés',
                 'Les biens et les ressources',
                  'Je ne sais pas'],
                correctAnswer: 'Les biens et les ressources'
            },
            {
                id: 29,
                type: 'multiple-choice',
                question: "Comment est déterminé le bénéfice ou la perte de l’entreprise ?",
                answers: ['Quand on a bien vendu', 
                'Quand l’entreprise ne règle pas ses dépenses', 
                'Quand on fait la différence entre ses charges et ses produits',
                 'Je ne sais pas'],
                correctAnswer: 'Quand on fait la différence entre ses charges et ses produits'
            },
            {
                id: 30,
                type: 'multiple-choice',
                question: "Comment appelle-t-on l’argent que nous doivent les clients ?",
                answers: ['Une dette client',
                 'Une ardoise client', 
                 'Une créance',
                 'Je ne sais pas'],
                correctAnswer: 'Une créance'
            },
            {
                id: 31,
                type: 'multiple-choice',
                question: 'Quand j’achète à crédit une voiture, elle appartient à qui ?',
                answers: ['Au vendeur',
                 'A la banque',
                 "A l'entreprise",
                  'Je ne sais pas'],
                correctAnswer: "A l'entreprise"
            },
            {
                id: 32,
                type: 'multiple-choice',
                question: "A quoi sert le compte d’exploitation ?",
                answers: ['À chiffrer les ventes de l’année', 
                'A déterminer le résultat de l’année', 
                "À renseigner comment l’entreprise est exploité", 
                'Je ne sais pas'],
                correctAnswer: "A déterminer le résultat de l’année"
            },
            {
                id: 33,
                type: 'multiple-choice',
                question: "A quoi sert une balance ?",
                answers: ['À peser pour évaluer les comptes', 
                'À lister les soldes des comptes',
                 'Ça n’existe pas',
                'Je ne sais pas'],
                correctAnswer: 'À lister les soldes des comptes'
            },
            {
                id: 34,
                type: 'multiple-choice',
                question: "Lorsqu’on achète à crédit de la marchandise, on doit l’argent à qui ?",
                answers: ['À la banque', 
                'À un organisme de crédit type Sofinco', 
                "Au fournisseur", 
                'Je ne sais pas'],
                correctAnswer: "Au fournisseur"
            },
            {
                id: 35,
                type: 'multiple-choice',
                question: "Mon client me paye comptant, est-ce qu’il a le droit de se déduire un % du montant de sa facture ?",
                answers: ['Oui il a le droit car il a demandé la permission', 
                'Non c’est interdit',
                 'Oui il peut, c’est inscrit sur sa facture',
                'Je ne sais pas'],
                correctAnswer: 'Oui il peut, c’est inscrit sur sa facture'
            },
            {
                id: 36,
                type: 'multiple-choice',
                question: "Qu’est-ce qu’une immobilisation ?",
                answers: ['Un immeuble', 
                'Les stocks',
                 "Les biens de l'entreprise",
                'Je ne sais pas'],
                correctAnswer: "Les biens de l'entreprise"
            },
            {
                id: 37,
                type: 'multiple-choice',
                question: "Qu’est-ce qu’un effet de commerce ?",
                answers: ['Une réduction financière', 
                'Un mode de paiement', 
                "Un chèque du CIC", 
                'Je ne sais pas'],
                correctAnswer: "Un mode de paiement"
            },
            {
                id: 38,
                type: 'multiple-choice',
                question: "Si le montant d’une facture est inexact, le comptable peut : ",
                answers: ['La modifier et la mettre dans ses comptes', 
                'La déchirer et en demander une autre',
                 'Réclamer un avoir',
                'Je ne sais pas'],
                correctAnswer: 'Réclamer un avoir'
            },
            {
                id: 39,
                type: 'multiple-choice',
                question: "La TVA coûte chère à l’entreprise ?",
                answers: ['Vrai', 
                'Faux',
                'Je ne sais pas'],
                correctAnswer: "Faux"
            },
            {
                id: 40,
                type: 'multiple-choice',
                question: "Quelle est le document que le comptable ne transcrit pas en comptabilité ?",
                answers: ['Une facture client', 
                'Un relevé du fournisseur', 
                "Un chèque", 
                'Je ne sais pas'],
                correctAnswer: "Un relevé du fournisseur"
            },
            {
                id: 41,
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
        id: 4,
        section: 'Facture',
        score: 0,
        questions: [ 
            {
                id: 42,
                type: 'open-ended',
                question: "D'après le document veuillez compléter : Remise 5% ",
                correctAnswer: ['44'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1
            },
            {
                id: 43,
                type: 'open-ended',
                question: "D'après le document veuillez compléter : Sous-total remise reduite ",
                correctAnswer: ['836'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1
            },
            {
                id: 44,
                type: 'open-ended',
                question: "D'après le document veuillez compléter : Total HT ",
                correctAnswer: ['876'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1
            },
            {
                id: 45,
                type: 'open-ended',
                question: "D'après le document veuillez compléter : TVA 20% ",
                correctAnswer: ['175.20'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1
            },
            {
                id: 46,
                type: 'open-ended',
                question: "D'après le document veuillez compléter : Total TTC ",
                correctAnswer: ['1051.20'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1
            },
            {
                id: 47,
                type: 'open-ended',
                question: "L'article 2 coûte 110 € : si j'augmente mon prix de vente de 6%, quelle opération dois-je faire et quel est le résultat (exemple : 20,00 x 4,5 = 90,00)",
                correctAnswer: ['110,00 x 1,06 = 116,60','1.06 x 110,00 = 116,60'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1
            },
            {
                id: 48,
                type: 'open-ended',
                question: "Je dois acheter une marchandise qui me coûte 235 € TTC, quelle est sa valeur en HT (TVA 20%)",
                correctAnswer: ['195,83'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1
            },
            {
                id: 49,
                type: 'open-ended',
                question: "J'ai un chiffre d'affaires de 250 930 € HT, l'article 2 m'a rapporté 65 200€ qu'elle est la part de cet artcile par rapport au chiffre d'affaire total ? (en pourcentage)",
                correctAnswer: ['25,98'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1
            }
        ]
    }
    
];
export{quizData};