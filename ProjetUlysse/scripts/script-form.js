document.addEventListener("DOMContentLoaded", function () {
    var statutSelect = document.getElementById("statut");
    var poleEmploiDiv = document.getElementById("pole_emploi");

    // Gérer l'événement de changement de statut
    statutSelect.addEventListener("change", function () {
        // Afficher le champ d'identifiant Pôle Emploi uniquement si le statut est "Demandeur d'emploi"
        poleEmploiDiv.style.display = (statutSelect.value === "demandeur_emploi") ? "block" : "none";
    });
});