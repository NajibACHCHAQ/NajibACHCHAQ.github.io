document.addEventListener("DOMContentLoaded", () => {
    // Code exécuté lorsque le DOM est complètement chargé

    // --------------------------------------
    // Premier formulaire
    // --------------------------------------

    // Sélection des éléments du premier formulaire
    const duplicateButton = document.getElementById("duplicateButton");
    const container = document.getElementById("container");
    const itemNameInput = document.querySelector("h1 input");
    const validationButton = document.querySelector(".validation");
    const affichageObjetsStockés = document.getElementById("affichageObjetsStockés");
    const objetsStockesDropdown = document.getElementById("objetsStockesDropdown");
    const valeursDiv = document.querySelectorAll(".valeur");

    const listeObjetsStockés = [];

    // Gestion de l'événement de changement dans le dropdown des objets stockés
    objetsStockesDropdown.addEventListener("change", () => {
        const selectedIndex = objetsStockesDropdown.value;
        const selectedObjet = listeObjetsStockés[selectedIndex];
        const selectedDescription = objetsStockesDropdown.options[objetsStockesDropdown.selectedIndex].text.split(" - ")[1];

        valeursDiv.forEach((valeurDiv) => {
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
    });

    // Gestion de l'ajout d'éléments au premier formulaire
    duplicateButton.addEventListener("click", () => {
        const existingItems = document.querySelectorAll(".item").length;

        if (existingItems < 9) {
            const newItem = document.querySelector(".item").cloneNode(true);

            newItem.querySelector(".description").value = "";
            newItem.querySelector(".inputQuantité").value = "";

            container.appendChild(newItem);

            if (existingItems + 1 === 9) {
                duplicateButton.disabled = true;
            }
        }
    });

    // Gestion de la validation du premier formulaire
    validationButton.addEventListener("click", () => {
        const itemName = itemNameInput.value;
        const itemElements = document.querySelectorAll(".item .info");

        const items = [];
        itemElements.forEach(itemElement => {
            const descriptionInput = itemElement.querySelector(".description");
            const quantitéInput = itemElement.querySelector(".inputQuantité");

            const description = descriptionInput.value;
            const quantité = quantitéInput.value;

            if (description.trim() !== "") {
                items.push({ description, quantité });
            }

            descriptionInput.value = "";
            quantitéInput.value = "";
            duplicateButton.disabled = false;
        });

        const data = { nomDuComposant: itemName, items };

        itemNameInput.value = "";
        listeObjetsStockés.push(data);

        container.querySelectorAll(".item").forEach(item => {
            if (item !== container.querySelector(".item")) {
                item.remove();
            }
        });

        afficherObjetsStockés();
    });

    // Affichage des objets stockés dans le DOM
    function afficherObjetsStockés() {
        affichageObjetsStockés.innerHTML = "";

        listeObjetsStockés.forEach(objet => {
            const objetDiv = document.createElement("div");
            objetDiv.classList.add("objet");
            affichageObjetsStockés.appendChild(objetDiv);

            const nomDiv = document.createElement("div");
            nomDiv.textContent = objet.nomDuComposant;
            nomDiv.classList.add("nom-composant");
            objetDiv.appendChild(nomDiv);

            objet.items.forEach(item => {
                const itemInfo = document.createElement("p");
                itemInfo.textContent = `${item.description}, ${item.quantité}`;
                itemInfo.classList.add("item-info");
                objetDiv.appendChild(itemInfo);
            });
        });

        remplirMenuDeroulant();
    }

    // Remplissage du dropdown des objets stockés
    function remplirMenuDeroulant() {
        objetsStockesDropdown.innerHTML = '<option value="">Sélectionner composant</option>';
        const nomsObjetsAjoutés = [];

        listeObjetsStockés.forEach((objet, index) => {
            objet.items.forEach(item => {
                const nomObjetDescription = `${objet.nomDuComposant} - ${item.description}`;
                if (!nomsObjetsAjoutés.includes(nomObjetDescription)) {
                    const existingOption = Array.from(objetsStockesDropdown.options).find(option => option.textContent === nomObjetDescription);
                    if (!existingOption) {
                        const option = document.createElement("option");
                        option.value = index;
                        option.textContent = nomObjetDescription;
                        objetsStockesDropdown.appendChild(option);
                        nomsObjetsAjoutés.push(nomObjetDescription);
                    }
                }
            });
        });
    }

    // --------------------------------------
    // Deuxième formulaire
    // --------------------------------------

    // Sélection des éléments du deuxième formulaire


    // Deuxième formulaire
        const duplicateButtonComponent = document.getElementById("duplicateButtonComponent");
        const containerComponent = document.getElementById("containerComponent");
        const listeComposés = [];
        let clonedItemCount = 0; // Variable pour suivre le nombre d'éléments clonés

        duplicateButtonComponent.addEventListener("click", () => {
            const existingItemsComponent = document.querySelectorAll(".itemComponent").length;

            if (existingItemsComponent < 9) {
                const itemComponentTemplate = document.querySelector(".itemComponent");
                const itemComponentClone = itemComponentTemplate.cloneNode(true);

                clonedItemCount++;
                const uniqueId = `itemComponentClone_${clonedItemCount}`;
                itemComponentClone.id = uniqueId;

                const deroulantClone = itemComponentClone.querySelector(".deroulant");
                const dropdownComponent = deroulantClone.querySelector("select");
                const valeurDivComponent = itemComponentClone.querySelector(".valeur");

                dropdownComponent.selectedIndex = 0;
                valeurDivComponent.textContent = "";

                containerComponent.appendChild(itemComponentClone);

                if (existingItemsComponent + 1 === 9) {
                    duplicateButtonComponent.disabled = true;
                }
            
                // Utilisation de l'ID unique pour le dropdownComponent comme référence
                dropdownComponent.addEventListener("change", () => {
                    updateValeurForClonedElement(valeurDivComponent, dropdownComponent); // Utilise le dropdownComponent actuel
                });
            }
        });

    function updateValeurForClonedElement(valeurDivComponent, dropdownComponent) {
    const selectedIndex = dropdownComponent.selectedIndex;
    const selectedDescription = dropdownComponent.options[selectedIndex].text.split(" - ")[1];
    
    valeurDivComponent.textContent = ""; // Réinitialisation de la valeur

    if (selectedDescription.trim() !== "") {
        // Parcourir la liste d'objets stockés pour trouver l'objet correspondant
        for (const selectedObjet of listeObjetsStockés) {
            const selectedItem = selectedObjet.items.find(item => item.description === selectedDescription);

            if (selectedItem) {
                const selectedQuantite = selectedItem.quantité;
                valeurDivComponent.textContent = `${selectedQuantite}`;
                break; // Sortir de la boucle dès que l'objet est trouvé
            }
        }

        if (valeurDivComponent.textContent === "") {
            valeurDivComponent.textContent = "Item non trouvé dans l'objet";
        }
    }
}


   // Fonction pour afficher les objets composés
function afficherComposés() {
    const affichageComposés = document.getElementById("affichageComposés");
    affichageComposés.innerHTML = "";

    listeComposés.forEach(composé => {
        const composéDiv = document.createElement("div");
        composéDiv.classList.add("composé");
        affichageComposés.appendChild(composéDiv);

        const nomDiv = document.createElement("div");
        nomDiv.textContent = composé.nomDuComposé;
        nomDiv.classList.add("nom-composé");
        composéDiv.appendChild(nomDiv);

        composé.items.forEach(item => {
            const itemInfo = document.createElement("p");
            itemInfo.textContent = `${item.description}, ${item.quantité}`;
            itemInfo.classList.add("item-info");
            composéDiv.appendChild(itemInfo);
        });
    });
}

const validationButtonComponent = document.querySelector(".validationComponent");

// Gestion de la validation du deuxième formulaire
validationButtonComponent.addEventListener("click", () => {
    const composéName = document.querySelector("#containerComponent h1 input").value;
    const itemComponentElements = document.querySelectorAll(".itemComponent .infoComponent");

    const itemsComponent = [];
    
    itemComponentElements.forEach(itemComponentElement => {
        const dropdownComponent = itemComponentElement.querySelector(".deroulant select");
        const quantitéInput = itemComponentElement.querySelector(".inputQuantité");

        const selectedDescription = dropdownComponent.options[dropdownComponent.selectedIndex].text.split(" - ")[1];
        const selectedQuantité = quantitéInput.value;

        if (selectedDescription.trim() !== "") {
            itemsComponent.push({ description: selectedDescription, quantité: selectedQuantité });
        }

        quantitéInput.value = "";
        dropdownComponent.selectedIndex = 0;
        duplicateButtonComponent.disabled = false;
    });

    const composéData = { nomDuComposé: composéName, items: itemsComponent };

    document.querySelector("#containerComponent h1 input").value = "";

    listeComposés.push(composéData);

    containerComponent.querySelectorAll(".itemComponent").forEach(itemComponent => {
        if (itemComponent !== document.querySelector(".itemComponent")) {
            itemComponent.remove();
        }
    });

    // Appeler la fonction pour afficher les objets composés
    afficherComposés();
    console.log(listeComposés)
    
});

    // Affichage des composés stockés dans le DOM
    function afficherComposés() {
        const affichageComposés = document.getElementById("affichageComposés");
        affichageComposés.innerHTML = "";

        listeComposés.forEach(composé => {
            const composéDiv = document.createElement("div");
            composéDiv.classList.add("composé");
            affichageComposés.appendChild(composéDiv);

            const nomDiv = document.createElement("div");
            nomDiv.textContent = composé.nomDuComposé;
            nomDiv.classList.add("nom-composé");
            composéDiv.appendChild(nomDiv);

            composé.items.forEach(item => {
                const itemInfo = document.createElement("p");
                itemInfo.textContent = `${item.description}, ${item.quantité}`;
                itemInfo.classList.add("item-info");
                composéDiv.appendChild(itemInfo);
            });
        });
    }

    // Appels initiaux
    afficherObjetsStockés();
    remplirMenuDeroulant();
    
});