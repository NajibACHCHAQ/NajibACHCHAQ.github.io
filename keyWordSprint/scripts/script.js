
let listeInputRadio = document.querySelectorAll(".zoneOptions input");
let userInput = document.getElementById("inputEcriture");
let buttonValidation = document.getElementById("btnValiderMot");
let displayWord = document.querySelectorAll(".zoneProposition span");
let displayScore = document.querySelectorAll(".zoneScore span");
let listProposition = list
let buttonSubmit = document.getElementById("btnEnvoyerMail");
let inputName = document.getElementById("nom");
let inputEmail = document.getElementById("email");

// Vérification de la validité de l'adresse mail
function verifierEmail(email) {
  let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
  let resultat = regex.test(email);
  return resultat; // retourne true si l'adresse est valide, sinon false
}
// Je vérifie que le nom contienne au moins 2 caractere
function verifierChamp(champ) {
  // Je test si le champ nom est rempli
  if (champ.length < 2) {
    return false; // retourne false si le champ est invalide
  } else {
    return true; // retourne true si le champ est valide
  }
}
// Je verifie que la verification de l'email et du nom soit true
function validerSendMail(champValide, emailValide) {
  if (champValide && emailValide) {
    console.log("Tout est valide");
    return true;
  } else {
    console.log("Tout n'est pas valide");
    return false;
  }
}

function readLetter(syllables) {
  const utterance = new SpeechSynthesisUtterance();
  let index = 0;
  utterance.rate = 1.8; // Augmenter la vitesse, par exemple, 2.0
  utterance.lang = "fr-FR"; // Définir la langue sur français
  utterance.onend = () => {
    index++;
    if (index < syllables.length) {
      utterance.text = syllables[index];
      speechSynthesis.speak(utterance);
    }
  };
  utterance.text = syllables[index];
  speechSynthesis.speak(utterance);
}

function readWordOrPhrase(text) {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  speechSynthesis.speak(utterance);
}

function afficherResultat(score, nbmots){

    // Je récupère l'élément du DOM ou je veux afficher le score
    let spanScore = document.querySelector(".zoneScore span");
    // Je définis les éléments à afficher
    let affichageScore = `${score} / ${nbmots}`;
    // J'ajoute les élément au span
    spanScore.innerText = affichageScore;

    // Affichage en console
    //console.log("votre score final est de "+ score + " sur "+ nbmots)
}

 // Définition de la fonction qui affiche le mot a recopier
function afficherProposition(motAffiche) {

  // Récupération de la partie du dom ou l'on veut afficher le mot à recopier
  let zoneProposition = document.querySelector(".zoneProposition span");
  // Insertion du mot à afficher dans le dom 
  zoneProposition.innerText = motAffiche;
  //readWordSyllableBySyllable(motAffiche);
  readWordOrPhrase(motAffiche)
  readLetter(motAffiche)
}

function afficherEmail(nom, email, score,nbmots) {

  let sujet = "Partage du score Azertype";
  let message = `je suis ${nom} et je viens de réaliser le score de ${score} sur ${nbmots} sur le site d'Azertype !`
  let mailto = `mailto:${email}?subject=${sujet}&body=${message}`;
  location.href = mailto
}


function lancerJeu() {
  let i = 0;
  let score = 0;

  // Je récupère l'élément bouton de validation
  let validationButton = document.getElementById("btnValiderMot");

  // Je récupère l'élément input saisie
  let reponse = document.getElementById("inputEcriture");
  reponse.focus();
  afficherProposition(listProposition[i]); // Afficher le mot à recopier

  function validerMot() {
    console.log(reponse.value);
    console.log(listProposition[i]);
  
    if (reponse.value === listProposition[i]) {
      score++;
    }
  
    i++; // Passe au mot suivant dans la liste
    afficherResultat(score, i);
    reponse.value = ""; // Je vide la zone input après chaque validation
  
    if (i < listProposition.length) {
      // Si i est inférieur au nombre de mots dans la liste, j'affiche le mot suivant
      afficherProposition(listProposition[i]); // Afficher le mot à recopier
    } else {
      // Sinon, je désactive le bouton et j'affiche que le jeu est fini
      afficherProposition("Le jeu est fini");
      validationButton.disabled = true;
      
    }
  }
  
  // J'écoute l'événement "keydown" pour la touche "Entrée" sur l'input
  reponse.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      validerMot();
    }
  });
  
  // J'écoute l'événement click sur le bouton de validation
  validationButton.addEventListener("click", validerMot);
  

  // Définition d'une variable représentant la liste de input a cocher 
  let optionChoice = document.querySelectorAll(".optionSource input[type=radio]");
  for (let index = 0; index < optionChoice.length; index++) {

    // j'écoute l'évenement change sur la variable optionChoice
    optionChoice[index].addEventListener("change", (event) => {
      // Je fais un console log de la value cible de l'événement
      console.log(event.target.value)
      // Si la value cible est = à list alors la variable list de proposition est = list
      if(event.target.value === "list"){
        listProposition = list
      }
      // Sinon listProposition sera = à list1
      else{
        listProposition = list1
      }
      // Appelle de la fonction afficherProposition
      afficherProposition(listProposition[i])
    })
 
}   
    afficherResultat(score,i);

    buttonSubmit.addEventListener("click", (event) => {
      // On empêche le comportement par défaut
      event.preventDefault();
      let nom = inputName.value;
      let email = inputEmail.value;
      console.log(nom)
      console.log(email)
      // je défini une variable faisant appelle a la fonction verifier champ et qui test le nom
      let champValide = verifierChamp(nom);
      // je défini une variable faisant appelle a la fonction verifier email et qui test le mail
      let emailValide = verifierEmail(email);
      // je défini une variable faisant appelle a la fonction verifiersendMail et qui test que les 2 fonctions précedente
      let envoiValide = validerSendMail(champValide, emailValide);

      // Je cree une condition qui test si envoiValide retourne true alors j'appelle la fonction afficher mail
      if (envoiValide) {
        afficherEmail(nom, email, score, i);
      // Sinon je log une erreur
      } else {
        console.log("Erreur");
      }
    
    });

  }

  // Sélectionnez le bouton "Partager"
const btnPartager = document.getElementById("btnPartager");

// Sélectionnez la popup et son arrière-plan
const popupBackground = document.querySelector(".popupBackground");
const popup = document.querySelector(".popup");

// Ajoutez un gestionnaire d'événements sur le bouton "Partager"
btnPartager.addEventListener("click", () => {
  // Affichez la popup en modifiant la classe CSS
  popupBackground.style.display = "flex";
});

// Ajoutez également un gestionnaire d'événements pour masquer la popup lorsque le bouton d'envoi est cliqué
const btnEnvoyerMail = document.getElementById("btnEnvoyerMail");
btnEnvoyerMail.addEventListener("click", () => {
  // Masquez la popup en modifiant la classe CSS
  popupBackground.style.display = "none";
});

// Sélectionnez la croix pour fermer la popup
const btnFermerPopup = document.getElementById("btnFermerPopup");

// Ajoutez un gestionnaire d'événements sur la croix pour masquer la popup
btnFermerPopup.addEventListener("click", () => {
  // Masquez la popup en modifiant la classe CSS
  popupBackground.style.display = "none";
});







