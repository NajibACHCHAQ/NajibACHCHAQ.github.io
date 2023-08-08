
// Cet événement s'active lorsque le document HTML est complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // On récupère des éléments spécifiques du DOM
    const duplicateButton = document.getElementById("duplicateButton");
    const container = document.getElementById("container");
    const itemNameInput = document.querySelector("h1 input");
    const validationButton = document.querySelector(".validation");
    const affichageObjetsStockés = document.getElementById("affichageObjetsStockés");
    
    // Création d'une liste pour stocker les objets générés
    const listeObjetsStockés = [];
    const objetsStockesDropdown = document.getElementById("objetsStockesDropdown");
    const valeurDiv = document.querySelector(".valeur");


// Lorsqu'une option est sélectionnée dans le menu déroulant
objetsStockesDropdown.addEventListener("change", () => {
    const selectedIndex = objetsStockesDropdown.value; // Index de l'objet sélectionné
    const selectedObjet = listeObjetsStockés[selectedIndex]; // Objet correspondant

    // Obtenez la description sélectionnée dans le menu déroulant
        // objetsStockesDropdown.options : Cela fait référence aux options disponibles dans le menu déroulant objetsStockesDropdown.
        // objetsStockesDropdown.selectedIndex : C'est l'index de l'option actuellement sélectionnée dans le menu déroulant.
        // .text : Cela renvoie le texte de l'option sélectionnée, c'est-à-dire le texte qui est affiché aux utilisateurs.
        // .split(" - ") : C'est une méthode pour diviser une chaîne de caractères en plusieurs parties, en utilisant " - " comme séparateur. Dans ce contexte, cela divise le texte en deux parties : la première partie correspond au nom du composant et la deuxième partie correspond à la description de l'item.
        // [1] : Cela sélectionne la deuxième partie résultant de la division, c'est-à-dire la description de l'item.
    const selectedDescription = objetsStockesDropdown.options[objetsStockesDropdown.selectedIndex].text.split(" - ")[1];

    // Vide la div de la valeur
    valeurDiv.textContent = "";

    if (selectedObjet) {
        const selectedItem = selectedObjet.items.find(item => item.description === selectedDescription);
        if (selectedItem) {
            const selectedQuantite = selectedItem.quantité;
            valeurDiv.textContent = `${selectedQuantite}`;
        } else {
            valeurDiv.textContent = "Item non trouvé dans l'objet";
        }
    }
});

// Lorsque le bouton "Dupliquer" est cliqué
duplicateButton.addEventListener("click", () => {

    // je cree une variable contenant le nombre d'item cloné
    const existingItems = document.querySelectorAll(".item").length;
    
    // si le nombre d'élément cloner est inférieur à 
    if (existingItems < 9) {
        // On clone l'élément ".item" pour créer une nouvelle entrée
        const newItem = document.querySelector(".item").cloneNode(true);

        // On vide les champs de saisie dans le nouvel élément cloné
        newItem.querySelector(".description").value = "";
        newItem.querySelector(".inputQuantité").value = "";

        // On ajoute le nouvel élément cloné au conteneur
        container.appendChild(newItem);

        // Si le nombre d'éléments clonés atteint 10, désactive le bouton
        if (existingItems + 1 === 9) {
            duplicateButton.disabled = true;
        }
    }
});

    // Lorsque le bouton "Valider" est cliqué
    validationButton.addEventListener("click", () => {
        // On récupère le nom du composant depuis le champ de saisie
        const itemName = itemNameInput.value;
        
        // On sélectionne tous les éléments ".info" dans les éléments ".item"
        const itemElements = document.querySelectorAll(".item .info");

        const items = [];
        // On parcourt chaque élément ".info"
        itemElements.forEach(itemElement => {
            // On récupère les champs de saisie à l'intérieur de chaque élément ".info"
            const descriptionInput = itemElement.querySelector(".description");
            const quantitéInput = itemElement.querySelector(".inputQuantité");

            // On extrait les valeurs des champs de saisie
            const description = descriptionInput.value;
            const quantité = quantitéInput.value;

            // Si le champ "Description" n'est pas vide, on ajoute les valeurs à l'array "items"
            if (description.trim() !== "") {
                items.push({ description, quantité });
            }

            // On vide les champs de saisie dans chaque élément ".info"
            descriptionInput.value = "";
            quantitéInput.value = "";

            duplicateButton.disabled = false;
            console.log(objetsStockesDropdown)
        });

        // On crée un objet contenant les données entrées
        const data = { nomDuComposant: itemName, items };
        console.log(data);

        // On vide le champ de saisie du nom du composant après validation
        itemNameInput.value = "";

        // On ajoute l'objet nouvellement créé à la liste des objets stockés
        listeObjetsStockés.push(data);

        // Suppression des éléments clonés du DOM
        container.querySelectorAll(".item").forEach(item => {
            if (item !== container.querySelector(".item")) {
                item.remove();
            }
        });

        // Appel de la fonction pour afficher les objets stockés
        afficherObjetsStockés();
        console.log(listeObjetsStockés)
    });

    // Fonction pour afficher les objets stockés dans le DOM
    function afficherObjetsStockés() {
        affichageObjetsStockés.innerHTML = "";
    
        listeObjetsStockés.forEach(objet => {
            // Création d'un élément <div> pour afficher l'objet
            const objetDiv = document.createElement("div");
            objetDiv.classList.add("objet"); // Ajouter une classe à la div
            affichageObjetsStockés.appendChild(objetDiv);
    
            // Création d'un élément <div> pour le nom du composant
            const nomDiv = document.createElement("div");
            nomDiv.textContent = objet.nomDuComposant;
            nomDiv.classList.add("nom-composant"); // Ajouter une classe au div du nom
            objetDiv.appendChild(nomDiv);
    
            // Affichage de chaque élément de l'objet
            objet.items.forEach(item => {
                const itemInfo = document.createElement("p");
                itemInfo.textContent = `${item.description}, ${item.quantité}`;
                itemInfo.classList.add("item-info"); // Ajouter une classe au div du nom
                objetDiv.appendChild(itemInfo);
            });

            
        });

            // Sélectionnez l'élément de la liste déroulante
            const objetsStockesDropdown = document.getElementById("objetsStockesDropdown");

            // Utilisé pour garder une trace des noms d'objets déjà ajoutés à la liste déroulante
            const nomsObjetsAjoutés = [];

            // Remplissez la liste déroulante avec les options des objets stockés
            listeObjetsStockés.forEach((objet, index) => {
                objet.items.forEach(item => {
                    const nomObjetDescription = `${objet.nomDuComposant} - ${item.description}`;
                    
            // Vérifier si le nom de l'objet avec la description a déjà été ajouté
            if (!nomsObjetsAjoutés.includes(nomObjetDescription)) {
                // Vérifier si l'option n'existe pas déjà
                const existingOption = Array.from(objetsStockesDropdown.options).find(option => option.textContent === nomObjetDescription);

            // Si l'option n'existe pas déjà, ajoutez-la
            if (!existingOption) {
                // Créez un élément <option> pour chaque objet
                const option = document.createElement("option");
                option.value = index; // Utilisez l'index pour identifier l'objet sélectionné
                option.textContent = nomObjetDescription;

                // Ajoutez l'élément <option> à la liste déroulante
                objetsStockesDropdown.appendChild(option);

                // Ajoutez le nom de l'objet à la liste des noms ajoutés
                nomsObjetsAjoutés.push(nomObjetDescription);
            }

            
        }

        
    });

    

    
});
    }
});






















