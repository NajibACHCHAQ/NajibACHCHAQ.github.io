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
                correctAnswer: "Distribuer l'offre",
                delay:30
            },
            {
                id: 2,
                type: 'multiple-choice',
                question: 'Un dossier de dernière minute arrive, vous devez le traiter immédiatement à la demande de votre supérieur :',
                answers: ['Ça tombe mal vous devez partir, ce sera à traiter demain',
                        'Vos dossier sont à jour, et vous pouvez traiter rapidement celui-ci sans trop dépasser vos horaires',
                        'Le moment est mal choisi, vous estimez que vous avez des dossiers plus urgents',
                        'Je ne sais pas'],
                correctAnswer: 'Vos dossier sont à jour, et vous pouvez traiter rapidement celui-ci sans trop dépasser vos horaires',
                delay:30
            },
            {
                id: 3,
                type: 'multiple-choice',
                question: "Encore une réunion prévue aujourd'hui",
                answers: ["Vous trouverez qu'il y a trop de réunion en semaine",
                 "Ces réunions successives reflètent l'incapacité de chacun à travailler en autonomie",
                  "C'est un moment d'échanges importants",
                   'Je ne sais pas'],
                correctAnswer: "C'est un moment d'échanges importants",
                delay:30
            },
            {
                id: 4,
                type: 'multiple-choice',
                question: "Dans la vie en général, vous êtes plutôt :",
                answers: ['Dans les délais', "En avance", 'Hors délais', 'Je ne sais pas'],
                correctAnswer: "Dans les délais",
                delay:45
            },
            {
                id: 5,
                type: 'multiple-choice',
                question: 'Vous avez bonne mémoire :',
                answers: ['Pas besoin de noter les taches, perdre du temps à colorier les moments importants sur votre agenda',
                        "Je note tout et comme cela je n'oublie rien et tiens compte des modifications",
                        'Les taches sont notées, barrées et parfois reportées',
                        'Je ne sais pas'],
                correctAnswer: "Je note tout et comme cela je n'oublie rien et tiens compte des modifications",
                delay:30
            },
            {
                id: 6,
                type: 'multiple-choice',
                question: "Le téléphone sonne :",
                answers: ["J'ai le temps de répondre, mon répondeur n'est pas activé",
                 "Je dois répondre avant la fin de la 3ème sonnerie",
                  "Je laisse sonner si je suis déjà en ligne",
                   'Je ne sais pas'],
                correctAnswer: "Je dois répondre avant la fin de la 3ème sonnerie",
                delay:30
            },
            {
                id: 7,
                type: 'multiple-choice',
                question: 'Vous êtes en congé le lendemain, que faites-vous ?',
                answers: ['Je préviens tous les collaborateurs par téléphone et je bascule le standard sur répondeur',
                        "J'envoie un mail à tout le monde pour prévenir",
                        "J'informe sur un agenda partagé mon absence et la marche à suivre",
                        'Je ne sais pas'],
                correctAnswer: "J'informe sur un agenda partagé mon absence et la marche à suivre",
                delay:30
            },
            {
                id: 8,
                type: 'multiple-choice',
                question: "Si je dois faire attendre une personne au téléphone, vous dites :",
                answers: ["Ne quittez pas",
                 "Merci de bien vouloir rester en ligne",
                  "Je ne sais pas, je me renseigne",
                   'Je ne sais pas'],
                correctAnswer: "Merci de bien vouloir rester en ligne",
                delay:30
            },
            {
                id: 9,
                type: 'multiple-choice',
                question: "On me demande de réaliser et de mettre à l'affichage une note d'information",
                answers: ["Ce n'est pas mon travail de créer cette note d'information, par contre je peux l'afficher",
                 "Je demande à la secrétaire de la faire et de me l'envoyer par mail pour l'afficher ensuite",
                  "Je la crée et je l'affiche",
                   'Je ne sais pas'],
                correctAnswer: "Je la crée et je l'affiche",
                delay:30
            },
            {
                id: 10,
                type: 'multiple-choice',
                question: "Vous devez faire un courrier, j'ai des connaissances sur les normes",
                answers: ['Agénor',
                        "Afnor",
                        "Agnor",
                        'Je ne sais pas'],
                correctAnswer: "Afnor",
                delay:30
            },
            {
                id: 11,
                type: 'multiple-choice',
                question: "Une personne se présente à l'accueil !",
                answers: ["Je la connais et donc je peux être familière",
                 "Je la connais et je peux la faire attendre et finir mon travail",
                  "Je traite tout le monde de la même façon",
                   'Je ne sais pas'],
                correctAnswer: "Je traite tout le monde de la même façon",
                delay:30
            },
            {
                id: 12,
                type: 'multiple-choice',
                question: "Quel logiciel vais-je utiliser pour créer un tableau pour créer un tableau de statistiques ?",
                answers: ["Logistat",
                 "Base de données",
                  "Tableur",
                   'Je ne sais pas'],
                correctAnswer: "Tableur",
                delay:30
            },
            {
                id: 13,
                type: 'multiple-choice',
                question: "J'écris un mail, je dois utiliser le même vocabulaire et même tournure de phrase ?",
                answers: ['Oui',
                        "Non",
                        'Je ne sais pas'],
                correctAnswer: "Non",
                delay:30
            },
            {
                id: 14,
                type: 'multiple-choice',
                question: "Je dois organiser une réunion à distance, je dois utiliser :",
                answers: ["Un vidéoprojecteur",
                 "Un site internet dédié",
                  "Un logiciel type diaporame",
                   'Je ne sais pas'],
                correctAnswer: "Un site internet dédié",
                delay:30
            },
            {
                id: 15,
                type: 'multiple-choice',
                question: "Quand je fais une réunion à distance, qu'elles sont les contraintes de ce type de réunion ?",
                answers: ["Risque d'ennui",
                 "Risque de distraction (téléphone, jeux...)",
                  "Difficulté de créer une synergie",
                   'Je ne sais pas'],
                correctAnswer: "Difficulté de créer une synergie",
                delay:30
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
                correctAnswer: 'Une réduction commerciale liée à un préjudice',
                delay:30
            },
            {
                id: 17,
                type: 'multiple-choice',
                question: "La remise est :",
                answers: ['Une réduction commerciale liée à un préjudice',
                 'Une réduction financière',
                  "Une réduction commerciale liée au statut du client ou à l'importance de la commande",
                   'Je ne sais pas'],
                correctAnswer: "Une réduction commerciale liée au statut du client ou à l'importance de la commande",
                delay:30
            },
            {
                id: 18,
                type: 'multiple-choice',
                question: 'La ristourne est : ',
                answers: ["Une réduction commerciale liée à l'importance de la commande",
                 "Une réduction commerciale liée à l'importance des commandes sur une période",
                  'Une réduction commerciale liée à un préjudice', 
                  'Je ne sais pas'],
                correctAnswer: "Une réduction commerciale liée à l'importance des commandes sur une période",
                delay:30
            },
            {
                id: 19,
                type: 'multiple-choice',
                question: "L'escompte est :",
                answers: ["Une réduction financière liée au mode de paiement",
                 'Une réduction comemrciale liée au mode de paiement',
                 'Une réduction commerciale',
                 'je ne sais pas'],
                correctAnswer: 'Une réduction financière liée au mode de paiement',
                delay:30
            },
            {
                id: 20,
                type: 'multiple-choice',
                question: "La TVA est :",
                answers: ['Une taxe sur les ventes',
                 'Une taxe sur les achats',
                  "Une taxe sur les achats et les ventes",
                   'Je ne sais pas'],
                correctAnswer: "Une taxe sur les achats et les ventes",
                delay:30
            },
            {
                id: 21,
                type: 'open-ended',
                question: 'Que veut dire le sigle PGI ?',
                correctAnswer: ['progiciel de gestion intégré'],
                delay:30,
                numberOfInputs: 1
                
            },
            {
                id: 22,
                type: 'open-ended',
                question: 'Citez 3 mentions obligatoires d\'un courrier d\'entreprise.',
                correctAnswer: ['SIREN','nom entreprise','forme juridique','montant capital','adresse siège social','RCS'],
                numberOfInputs: 3,
                delay:30
                
            },
            {
                id: 23,
                type: 'open-ended',
                question: 'Citez 3 mentions obligatoires sur une facture',
                correctAnswer: ["date, numéro de facture, nom de l'entreprise", "adresse siège", 'adresse facturation', 'SIREN', "SIRET", "nom du client", "taux TVA", "Identifiant TVA"],
                numberOfInputs: 3,
                delay:30
                
            },
            {
                id: 24,
                type: 'open-ended',
                question: 'Citez 2 moyens de communication internes en entreprise',
                correctAnswer: ['mail', 'site internet', 'réseaux sociaux', 'téléphone', 'courrier', 'affichage'],
                numberOfInputs: 2,
                delay:30
                
            },
            {
                id: 25,
                type: 'open-ended',
                question: 'Citez 2 moyens de paiement professionnel',
                correctAnswer: ['chèque', 'prélévement', 'virement', 'carte bancaire', 'effet de commerce', 'lettre de change', 'billet à ordre'],
                numberOfInputs: 2,
                delay:30
                
            },
            {
                id: 26,
                type: 'open-ended',
                question: 'Citez 2 moyens de classement dans une entreprise',
                correctAnswer: ['alphabétique', 'alphanumérique', 'cloud', 'réseau', 'dossier suspendu', 'collaboratif', 'par auteur'],
                numberOfInputs: 2,
                delay:30
                
            }



        ]
    },
    {
        id: 3,
        section: 'Comptabilité',
        score: 0,
        questions: [
            {
                id: 27,
                type: 'multiple-choice',
                question: 'En quoi consiste la comptabilité générale ? En quoi consiste la comptabilité générale ?',
                answers: ['A remplir des tableaux sur Excel uniquement',
                 'À faire des factures',
                 'À enregistrer des écritures',
                  'Je ne sais pas'],
                correctAnswer: 'À enregistrer des écritures',
                delay:30
            },
            {
                id: 28,
                type: 'multiple-choice',
                question: "Quelle est la qualité première d’un comptable ?",
                answers: ['Etre fort en maths', 'Savoir lire', 'Rester longtemps assis', 'Je ne sais pas'],
                correctAnswer: 'Savoir lire',
                delay:30
            },
            {
                id: 29,
                type: 'multiple-choice',
                question: "Tenir une comptabilité est obligatoire ?",
                answers: ['Vrai', 'Faux', 'Je ne sais pas'],
                correctAnswer: 'Vrai',
                delay:30
            },
            {
                id: 30,
                type: 'multiple-choice',
                question: 'Laquelle de ces tâches n’est pas réalisée par le comptable dans une PME ?',
                answers: ['Démarcher les clients',
                 'Pointer le compte banque',
                 'Etablir le bilan',
                  'Je ne sais pas'],
                correctAnswer: 'Démarcher les clients',
                delay:30
            },
            {
                id: 31,
                type: 'multiple-choice',
                question: "Le bilan est composé de : ",
                answers: ['Du débit et du passif', 'Du débit et du crédit', "De l'actif et du passif", 'Je ne sais pas'],
                correctAnswer: "De l'actif et du passif",
                delay:30
            },
            {
                id: 32,
                type: 'multiple-choice',
                question: "On a l’obligation de faire le bilan tous les mois :",
                answers: ['Vrai', 'Faux', 'Je ne sais pas'],
                correctAnswer: 'Faux',
                delay:30
            },
            {
                id: 33,
                type: 'multiple-choice',
                question: 'Le bilan donne quelles informations de l’entreprise ?',
                answers: ["Les biens de l'entreprise et le bénéfice",
                 'Le nombre de salariés',
                 'Les biens et les ressources',
                  'Je ne sais pas'],
                correctAnswer: 'Les biens et les ressources',
                delay:30
            },
            {
                id: 34,
                type: 'multiple-choice',
                question: "Comment est déterminé le bénéfice ou la perte de l’entreprise ?",
                answers: ['Quand on a bien vendu', 
                'Quand l’entreprise ne règle pas ses dépenses', 
                'Quand on fait la différence entre ses charges et ses produits',
                 'Je ne sais pas'],
                correctAnswer: 'Quand on fait la différence entre ses charges et ses produits',
                delay:30
            },
            {
                id: 35,
                type: 'multiple-choice',
                question: "Comment appelle-t-on l’argent que nous doivent les clients ?",
                answers: ['Une dette client',
                 'Une ardoise client', 
                 'Une créance',
                 'Je ne sais pas'],
                correctAnswer: 'Une créance',
                delay:30
            },
            {
                id: 36,
                type: 'multiple-choice',
                question: 'Quand j’achète à crédit une voiture, elle appartient à qui ?',
                answers: ['Au vendeur',
                 'A la banque',
                 "A l'entreprise",
                  'Je ne sais pas'],
                correctAnswer: "A l'entreprise",
                delay:30
            },
            {
                id: 37,
                type: 'multiple-choice',
                question: "A quoi sert le compte d’exploitation ?",
                answers: ['À chiffrer les ventes de l’année', 
                'A déterminer le résultat de l’année', 
                "À renseigner comment l’entreprise est exploité", 
                'Je ne sais pas'],
                correctAnswer: "A déterminer le résultat de l’année",
                delay:30
            },
            {
                id: 38,
                type: 'multiple-choice',
                question: "A quoi sert une balance ?",
                answers: ['À peser pour évaluer les comptes', 
                'À lister les soldes des comptes',
                 'Ça n’existe pas',
                'Je ne sais pas'],
                correctAnswer: 'À lister les soldes des comptes',
                delay:30
            },
            {
                id: 39,
                type: 'multiple-choice',
                question: "Lorsqu’on achète à crédit de la marchandise, on doit l’argent à qui ?",
                answers: ['À la banque', 
                'À un organisme de crédit type Sofinco', 
                "Au fournisseur", 
                'Je ne sais pas'],
                correctAnswer: "Au fournisseur",
                delay:30
            },
            {
                id: 40,
                type: 'multiple-choice',
                question: "Mon client me paye comptant, est-ce qu’il a le droit de se déduire un % du montant de sa facture ?",
                answers: ['Oui il a le droit car il a demandé la permission', 
                'Non c’est interdit',
                 'Oui il peut, c’est inscrit sur sa facture',
                'Je ne sais pas'],
                correctAnswer: 'Oui il peut, c’est inscrit sur sa facture',
                delay:30
            },
            {
                id: 41,
                type: 'multiple-choice',
                question: "Qu’est-ce qu’une immobilisation ?",
                answers: ['Un immeuble', 
                'Les stocks',
                 "Les biens de l'entreprise",
                'Je ne sais pas'],
                correctAnswer: "Les biens de l'entreprise",
                delay:30
            },
            {
                id: 42,
                type: 'multiple-choice',
                question: "Qu’est-ce qu’un effet de commerce ?",
                answers: ['Une réduction financière', 
                'Un mode de paiement', 
                "Un chèque du CIC", 
                'Je ne sais pas'],
                correctAnswer: "Un mode de paiement",
                delay:30
            },
            {
                id: 43,
                type: 'multiple-choice',
                question: "Si le montant d’une facture est inexact, le comptable peut : ",
                answers: ['La modifier et la mettre dans ses comptes', 
                'La déchirer et en demander une autre',
                 'Réclamer un avoir',
                'Je ne sais pas'],
                correctAnswer: 'Réclamer un avoir',
                delay:30
            },
            {
                id: 44,
                type: 'multiple-choice',
                question: "La TVA coûte chère à l’entreprise ?",
                answers: ['Vrai', 
                'Faux',
                'Je ne sais pas'],
                correctAnswer: "Faux",
                delay:30
            },
            {
                id: 45,
                type: 'multiple-choice',
                question: "Quelle est le document que le comptable ne transcrit pas en comptabilité ?",
                answers: ['Une facture client', 
                'Un relevé du fournisseur', 
                "Un chèque", 
                'Je ne sais pas'],
                correctAnswer: "Un relevé du fournisseur",
                delay:30
            },
            {
                id: 46,
                type: 'multiple-choice',
                question: "Une écriture comptable comprend :",
                answers: ['Au moins un débit d’un compte et un crédit d’un autre compte', 
                'Le débit et le crédit du même compte',
                 'Au moins 3 lignes',
                'Je ne sais pas'],
                correctAnswer: 'Au moins un débit d’un compte et un crédit d’un autre compte',
                delay:30
            }
        ]
    },
    {
        id: 4,
        section: 'Facture',
        score: 0,
        questions: [ 
            {
                id: 47,
                type: 'open-ended',
                question: "D'après le document veuillez compléter : Remise 5% ",
                correctAnswer: ['44'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1,
                delay:45
            },
            {
                id: 48,
                type: 'open-ended',
                question: "D'après le document veuillez compléter : Sous-total remise reduite ",
                correctAnswer: ['836'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1,
                delay:45
            },
            {
                id: 49,
                type: 'open-ended',
                question: "D'après le document veuillez compléter : Total HT ",
                correctAnswer: ['876'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1,
                delay:45
            },
            {
                id: 50,
                type: 'open-ended',
                question: "D'après le document veuillez compléter : TVA 20% ",
                correctAnswer: ['175.20'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1,
                delay:45
            },
            {
                id: 51,
                type: 'open-ended',
                question: "D'après le document veuillez compléter : Total TTC ",
                correctAnswer: ['1051.20'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1,
                delay:45
            },
            {
                id: 52,
                type: 'open-ended',
                question: "L'article 2 coûte 110 € : si j'augmente mon prix de vente de 6%, quelle opération dois-je faire et quel est le résultat (exemple : 20,00 x 4,5 = 90,00)",
                correctAnswer: ['110,00 x 1,06 = 116,60'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1,
                delay:45
            },
            {
                id: 53,
                type: 'open-ended',
                question: "Je dois acheter une marchandise qui me coûte 235 € TTC, quelle est sa valeur en HT (TVA 20%)",
                correctAnswer: ['195,83'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1,
                delay:45
            },
            {
                id: 54,
                type: 'open-ended',
                question: "J'ai un chiffre d'affaires de 250 930 € HT, l'article 2 m'a rapporté 65 200€ qu'elle est la part de cet artcile par rapport au chiffre d'affaire total ? (en pourcentage)",
                correctAnswer: ['25,98'],
                image: '../assets/facture-test.png',
                numberOfInputs: 1,
                delay:45
            }
        ]
    },
    {
        id: 5,
        section: 'Français',
        score: 0,
        questions: [ 
            {
                id: 55,
                type: 'open-ended',
                question: "Conjuguer au présent de l'indicatif le verbe indiqué entre parenthèses : Tu (penser) t'inscrire à ce stage et tu (savoir) que si tu t'y (inscrire), tu t'(engager) à signer un contrat. ",
                correctAnswer: ['penses',' sais','inscris','engages'],
                image: '',
                numberOfInputs: 4,
                delay:50
            },
            {
                id: 56,
                type: 'open-ended',
                question: "Conjuguer au présent de l'indicatif le verbe indiqué entre parenthèses : Je (être) en vacances et je (prendre) le temps de me reposer.",
                correctAnswer: ['suis', 'prends'],
                image: '',
                numberOfInputs: 2,
                delay:45
            },
            {
                id: 57,
                type: 'open-ended',
                question: "Conjuguer au présent de l'indicatif le verbe indiqué entre parenthèses : Ils (mettre) toujours des shorts en été.",
                correctAnswer: ['mettent'],
                image: '',
                numberOfInputs: 1,
                delay:30
            },

            {
                id: 58,
                type: 'open-ended',
                question: "Mettez au passé composé les verbes entre parenthèses : Elle lui (couper) la parole.",
                correctAnswer: ['a coupé'],
                image: '',
                numberOfInputs: 1,
                delay:30
            },
            {
                id: 59,
                type: 'open-ended',
                question: "Mettez au passé composé les verbes entre parenthèses : Ces informations nous (sembler) erronées.",
                correctAnswer: ['ont semblé'],
                image: '',
                numberOfInputs: 1,
                delay:30
            },
            {
                id: 60,
                type: 'open-ended',
                question: "Mettez au passé composé les verbes entre parenthèses : Elle (préparer) plusieurs concours et s'(engager) à travailler.",
                correctAnswer: ["a préparé" ,"s'est engagée"],
                image: '',
                numberOfInputs: 2,
                delay:45
            },
            {
                id: 61,
                type: 'open-ended',
                question: "Mettez au passé composé les verbes entre parenthèses : Ce sont des films qu'il (voir) au cinéma. ",
                correctAnswer: ['a vus'],
                image: '',
                numberOfInputs: 1,
                delay:30
            },
            {
                id: 62,
                type: 'open-ended',
                question: "Mettez au passé composé les verbes entre parenthèses : Ils (parler) un peu pour se distraire.",
                correctAnswer: ['ont parlé'],
                image: '',
                numberOfInputs: 1,
                delay:45
            },
            {
                id: 63,
                type: 'open-ended',
                question: "Mettez au passé composé les verbes entre parenthèses : La discussion que nous (avoir) profitera à l'entreprise.",
                correctAnswer: ['avons eu'],
                image: '',
                numberOfInputs: 1,
                delay:45
            },
            {
                id: 64,
                type: 'open-ended',
                question: "Mettez à l'imparfait les verbes entre parenthèses : Jules (parler) très souvent à ses parents mais il les voit peu. ",
                correctAnswer: ['parlait'],
                image: '',
                numberOfInputs: 1,
                delay:45
            },
            {
                id: 65,
                type: 'open-ended',
                question: "Mettez à l'imparfait les verbes entre parenthèses : Nous (penser) que vous l'avez compris rapidement.",
                correctAnswer: ['pensions'],
                image: '',
                numberOfInputs: 1,
                delay:45
            },
            {
                id: 66,
                type: 'open-ended',
                question: "Mettez à l'imparfait les verbes entre parenthèses : Elles (appeler) toujours leurs amis par des surnoms qui leur plaisent. ",
                correctAnswer: ['parlait','plaisaient'],
                image: '',
                numberOfInputs: 1,
                delay:45
            }

        ]
    },
    {
        id: 6,
        section: 'Anglais',
        score: 0,
        questions: [
            {
                id: 67,
                type: 'multiple-choice',
                question: 'There is ______ apple on ______ kitchen table',
                answers: ['an / the',
                 'a / an',
                 'the / an',
                  'the / the'],
                correctAnswer: 'an / the',
                delay:30
            },
            {
                id: 68,
                type: 'multiple-choice',
                question: "What's ______ name ?",
                answers: ['you', 'your', "you're", 'yours'],
                correctAnswer: 'your',
                delay:30
            },
            {
                id: 69,
                type: 'multiple-choice',
                question: "______ are you from ?",
                answers: ['were', 'when', 'where','who'],
                correctAnswer: 'where',
                delay:30
            },
            {
                id: 70,
                type: 'multiple-choice',
                question: 'I have a sister, ______ name is sarah ?',
                answers: ['she',
                 'hers',
                 'her',
                  "she's"],
                correctAnswer: 'her',
                delay:30
            },
            {
                id: 71,
                type: 'multiple-choice',
                question: "She ______ in London.",
                answers: ['living', 'lives', "live", 'leave'],
                correctAnswer: 'lives',
                delay:30
            },
            {
                id: 72,
                type: 'multiple-choice',
                question: "We ______ at the moment.",
                answers: ['are studying', 'study', 'studies','are study'],
                correctAnswer: 'are studying',
                delay:30
            },
            {
                id: 73,
                type: 'multiple-choice',
                question: '______ you like something to drink ?',
                answers: ["would",
                 'do',
                 'are',
                  'have'],
                correctAnswer: 'would',
                delay:30
            },
            {
                id: 74,
                type: 'multiple-choice',
                question: "Our supplier ______ 12 different kinds copy machines",
                answers: ['carrys', 
                'carry', 
                'carries',
                 'ports'],
                correctAnswer: 'carries',
                delay:30
            },
            {
                id: 75,
                type: 'multiple-choice',
                question: "______ laptop is this ?",
                answers: ["who's",
                 'whose', 
                 'who',
                 'at who'],
                correctAnswer: 'whose',
                delay:30
            },
            {
                id: 76,
                type: 'multiple-choice',
                question: 'He ______ go to work yesterday, he was ill.',
                answers: ['not',
                 "don't",
                 "is not",
                  "didn't"],
                correctAnswer: "didn't",
                delay:30
            },
            {
                id: 77,
                type: 'multiple-choice',
                question: "This hotel ______ in the 1930's.",
                answers: ['found', 
                'was founded', 
                "was founding", 
                'founded'],
                correctAnswer: "was founded",
                delay:30
            },
            {
                id: 78,
                type: 'multiple-choice',
                question: "Our hotel is interested ______ purchasing 50 new double beds.",
                answers: ['by', 
                'from',
                 'to',
                'in'],
                correctAnswer: 'in',
                delay:30
            },
            {
                id: 79,
                type: 'multiple-choice',
                question: "She has been working here ______ 10 years.",
                answers: ['since', 
                'for', 
                "during", 
                'while'],
                correctAnswer: "for",
                delay:30
            },
            {
                id: 80,
                type: 'multiple-choice',
                question: "He's no longer works here, but he ______ manage the accounting department.",
                answers: ['was', 
                'use to',
                 'was used to',
                'used to'],
                correctAnswer: 'used to',
                delay:30
            },
            {
                id: 81,
                type: 'multiple-choice',
                question: "They're slowly ______ their new boss.",
                answers: ['getting used to', 
                'get used to',
                 "getting use to",
                'get use to'],
                correctAnswer: "getting used to",
                delay:30
            },
            {
                id: 82,
                type: 'multiple-choice',
                question: "I've bought my ticket, so next week ______ to Rome !",
                answers: ['I will flying', 
                'I will to fly', 
                "I am flying", 
                'I am fly'],
                correctAnswer: "I am flying",
                delay:30
            },
            {
                id: 83,
                type: 'multiple-choice',
                question: "When we ______ the design, we will send it to you",
                answers: ['have finish', 
                'finish',
                 'finished',
                'will finish'],
                correctAnswer: 'finish',
                delay:30
            },
            {
                id: 84,
                type: 'multiple-choice',
                question: "The CEO of our company has decided to ______ after 30 years in his post",
                answers: ['step down', 
                'step up',
                'step over','step around'],
                correctAnswer: "step down",
                delay:30
            },
            {
                id: 85,
                type: 'multiple-choice',
                question: "______ we go to the gym now?",
                answers: ["Let's", 
                'Did', 
                "Does", 
                'Shall'],
                correctAnswer: "Shall",
                delay:30
            },
            {
                id: 86,
                type: 'multiple-choice',
                question: "______ the time I'm 25, i will have travelled the world",
                answers: ['When', 
                'In',
                 'By',
                'On'],
                correctAnswer: 'By',
                delay:30
            },
            {
                id: 87,
                type: 'multiple-choice',
                question: "If we ______ you, we would have told you",
                answers: ['seen', 
                'were seen', 
                "have seen", 
                'had seen'],
                correctAnswer: "had seen",
                delay:30
            },
            {
                id: 88,
                type: 'multiple-choice',
                question: "Do you ______ if I open the window ?",
                answers: ['bother', 
                'mind',
                 'please',
                'matter'],
                correctAnswer: 'mind',
                delay:30
            },
            {
                id: 89,
                type: 'multiple-choice',
                question: "Once the plane has reached its cruising altitude, you can ______ your seat belts",
                answers: ['unfasten', 
                'undress', 
                "unlock", 
                'untie'],
                correctAnswer: "unfasten",
                delay:30
            },
            {
                id: 90,
                type: 'multiple-choice',
                question: "This device ______ take photos under water",
                answers: ['allows you', 
                'permits to',
                 'allows you to',
                'permits you'],
                correctAnswer: 'allows you to',
                delay:30
            },
            {
                id: 91,
                type: 'multiple-choice',
                question: "I'm always ______ that mistake too",
                answers: ['making', 
                'do',
                 "doing",
                'make'],
                correctAnswer: "making",
                delay:30
            },
            {
                id: 92,
                type: 'multiple-choice',
                question: "If I ______ the lottery, i would give money to charity",
                answers: ['winned', 
                'was winning', 
                "have won", 
                'won'],
                correctAnswer: "won",
                delay:30
            },
            {
                id: 93,
                type: 'multiple-choice',
                question: "He said ______ he write the report",
                answers: ['would', 
                'does',
                 'has',
                'will to'],
                correctAnswer: 'would',
                delay:30
            },
            {
                id: 94,
                type: 'multiple-choice',
                question: "We ______ renovate this old hotel, and we have succeeded",
                answers: ['set out', 
                'set out to',
                'wanted','set about'],
                correctAnswer: "set out to",
                delay:30
            },
            {
                id: 95,
                type: 'multiple-choice',
                question: "Last week our copy machine kept ______ ",
                answers: ["broke down", 
                'did break down', 
                "breaking down", 
                'breaking up'],
                correctAnswer: "breaking down",
                delay:30
            },
            {
                id: 96,
                type: 'multiple-choice',
                question: "I'd rather you ______ smoke in here",
                answers: ["don't to", 
                "wouldn't to",
                 "didn't",
                "aren't"],
                correctAnswer: "didn't",
                delay:30
            }
        ]
    }
    
];
export{quizData};