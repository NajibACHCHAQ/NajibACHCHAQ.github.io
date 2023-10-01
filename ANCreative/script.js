
const menuBurger = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', function () {
    menu.classList.toggle('active'); // Ajoute ou supprime la classe 'active' au clic sur le burger
    menuBurger.classList.toggle('active'); // Ajoute ou supprime la classe 'active' au clic sur le burger
});

const appearWords = document.querySelectorAll('.appear-word');
// Fonction pour ajouter la classe 'appear' aux éléments au fur et à mesure du défilement
function handleScroll() {
    appearWords.forEach(function (word, index) {
        const bounding = word.getBoundingClientRect();

        if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
            word.classList.add('appear');
        } else {
            word.classList.remove('appear');
        }
    });
}
window.addEventListener('scroll', handleScroll);
handleScroll();

let buttonSubmit = document.getElementById("btnEnvoyerMail");
let inputName = document.getElementById("nom");
let inputEmail = document.getElementById("email");
let inputText = document.getElementById("text-form");

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

function afficherEmail(nom, email, message) {

    let sujet = "Message de "+ nom;
    email = "najib.achchaq@gmail.com";
    message = inputText.value;
    let mailto = `mailto:${email}?subject=${sujet}&body=${message}`;
    location.href = mailto
  }

  buttonSubmit.addEventListener("click", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();
    let nom = inputName.value;
    let email = "najib.achchaq@gmail.com"
    let message = inputText.value;
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
      afficherEmail(nom, email,message);
    // Sinon je log une erreur
    } else {
      console.log("Erreur");
    }
  
  });

