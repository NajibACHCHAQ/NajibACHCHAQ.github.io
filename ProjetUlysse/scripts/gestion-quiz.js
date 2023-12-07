// Récupérer le formulaire de modification/suppression
const modifyQuestionForm = document.getElementById('modifyQuestionForm');
const modifyQuestionBtn = document.getElementById('modifyQuestionBtn');
const deleteQuestionBtn = document.getElementById('deleteQuestionBtn');

// // Gestionnaire d'événement pour le bouton de modification
// modifyQuestionBtn.addEventListener('click', function () {
//     // Logique de modification ici
//     // Vous devrez implémenter la logique de mise à jour de la question
// });

// // Gestionnaire d'événement pour le bouton de suppression
// deleteQuestionBtn.addEventListener('click', function () {
//     // Logique de suppression ici
//     // Vous devrez implémenter la logique de suppression de la question
// });

function ajouterChamp() {
    // Créer un nouveau champ d'entrée
    var nouveauChamp = document.createElement('input');
    nouveauChamp.className = 'reponse';
    nouveauChamp.type = 'text';
    nouveauChamp.placeholder = 'Saisissez une réponse';

    // Ajouter le nouveau champ à votre conteneur
    document.getElementById('reponses-container').appendChild(nouveauChamp);
}
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez la modal
    const modal = document.getElementById('questionModal');

    // Gestionnaire d'événements pour ouvrir la modal
    const openModalButtons = document.querySelectorAll('.open-modal-button');
    openModalButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            modal.style.display = 'block';
            console.log("click")
        });
    });

    // Sélectionnez le bouton pour fermer la modal
    const closeButton = document.querySelector('.close');
    // Gestionnaire d'événements pour fermer la modal en cliquant sur le bouton de fermeture
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Gestionnaire d'événements pour fermer la modal en cliquant en dehors de la modal
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const modalQuestionForm = document.getElementById('modalQuestionForm');
    modalQuestionForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Ajoutez le code pour traiter le formulaire ici
        modal.style.display = 'none';
    });
});
