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
                    const selectedQuantite = selectedItem.qteCondi;
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

        if (existingItems < 10) {
            const newItem = document.querySelector(".item").cloneNode(true);

            newItem.querySelector(".description").value = "";
            newItem.querySelector(".inputqteCondi").value = "";

            container.appendChild(newItem);

            if (existingItems + 1 === 10) {
                duplicateButton.disabled = true;
            }
        }
    });


    // Gestion de la validation du premier formulaire
    validationButton.addEventListener("click", () => {
        const itemName = itemNameInput.value;
        const itemElements = document.querySelectorAll(".item .info");

        const items = [];
        let qteCondiTotaleDansObjet = 1; // Initialisation de la qteCondi totale dans l'objet

        itemElements.forEach(itemElement => {
            const descriptionInput = itemElement.querySelector(".description");
            const qteCondiInput = itemElement.querySelector(".inputqteCondi");

            const description = descriptionInput.value;
            const qteCondi = parseFloat(qteCondiInput.value); // Convertir la qteCondi en nombre
            

            if (description.trim() !== "" && !isNaN(qteCondi) && qteCondi !== 0) {
                qteCondiTotaleDansObjet *= qteCondi; // Mettre à jour la qteCondi totale dans l'objet

                const item = {
                    description,
                    qteCondi,
                    pcb: 0, // Initialisation, sera calculée plus tard
                    qteUnitaire: 0 // Initialisation, sera calculée plus tard
                };
                items.push(item);
            
            }
            return qteCondiTotaleDansObjet;

            descriptionInput.value = "";
            qteCondiInput.value = "";
            duplicateButton.disabled = false;
        });

        // Calculer la qteCondi totale dans l'item et la qteCondi divisée pour chaque item
        let qteUnitaire = qteCondiTotaleDansObjet;
        items.forEach(item => {
            item.pcb = qteCondiTotaleDansObjet;
            item.qteUnitaire = qteUnitaire / item.qteCondi;
            qteUnitaire = item.qteUnitaire; // Mettre à jour la qteCondi divisée pour l'item suivant
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
        console.log("liste composant");
        console.log(listeObjetsStockés);
    });

    // Affichage des objets stockés dans le DOM
 
    function afficherObjetsStockés() {
        affichageObjetsStockés.innerHTML = "";
    
        listeObjetsStockés.forEach(objet => {
            const objetDiv = document.createElement("div");
            objetDiv.classList.add("objet");
            affichageObjetsStockés.appendChild(objetDiv);
    
            const nomDiv = document.createElement("div");
            nomDiv.textContent = `${objet.nomDuComposant},${objet.items[0].pcb}`;
            nomDiv.classList.add("nom-composant");
            objetDiv.appendChild(nomDiv);
    
            let quantiteDivisée = objet.items[0].qteCondiTotaleDansObjet;
    
            objet.items.forEach(item => {
                const itemInfo = document.createElement("p");
                const quantiteActuelle = parseFloat(item.qteCondi);
                const quantiteMultiplier = quantiteDivisée / quantiteActuelle;
                itemInfo.textContent = `${item.description},${item.qteCondi},${item.qteUnitaire}`;
                itemInfo.classList.add("item-info");
                objetDiv.appendChild(itemInfo);
    
                quantiteDivisée = quantiteMultiplier;
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
                        option.setAttribute("data-nom-composant", objet.nomDuComposant); // Ajout de l'attribut personnalisé
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

    


    // Deuxième formulaire
    const duplicateButtonComponent = document.getElementById("duplicateButtonComponent");
    const containerComponent = document.getElementById("containerComponent");
    const listeComposés = [];
    let clonedItemCount = 0; // Variable pour suivre le nombre d'éléments clonés
    let selectedComponentName = ""; // Ajout de la variable pour stocker le nom du composant sélectionné

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
                updateValeurForClonedElement(valeurDivComponent, dropdownComponent);
                selectedComponentName = dropdownComponent.options[dropdownComponent.selectedIndex].getAttribute("data-nom-composant");
            });
        }
    });

    function updateValeurForClonedElement(valeurDivComponent, dropdownComponent) {
        const selectedIndex = dropdownComponent.selectedIndex;
        const selectedOption = dropdownComponent.options[selectedIndex];
        const selectedDescription = selectedOption.text.split(" - ")[1];
    
        valeurDivComponent.textContent = ""; // Réinitialisation de la valeur
    
        if (selectedDescription.trim() !== "") {
            const selectedComponentName = selectedOption.getAttribute("data-nom-composant");
    
            // Parcourir la liste d'objets stockés pour trouver l'objet correspondant
            for (const selectedObjet of listeObjetsStockés) {
                if (selectedObjet.nomDuComposant === selectedComponentName) {
                    const selectedItem = selectedObjet.items.find(item => item.description === selectedDescription);
    
                    if (selectedItem) {
                        const selectedQuantite = selectedItem.qteCondi;
                        valeurDivComponent.textContent = `${selectedQuantite}`;
                        break; // Sortir de la boucle dès que l'objet est trouvé
                    }
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
            nomDiv.textContent = `${composé.nomDuComposant}, ${composé.nomDuComposé}`; // Utilisation du nom du composant
            nomDiv.classList.add("nom-composé");
            composéDiv.appendChild(nomDiv);
        
            composé.items.forEach(item => {
                const itemInfo = document.createElement("p");
                itemInfo.textContent = `${item.description}, ${item.qteCondi}`;
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
            const qteCondiInput = itemComponentElement.querySelector(".inputqteCondi");
            const qteParCondi = itemComponentElement.querySelector(".valeur");
            

            const selectedOption = dropdownComponent.options[dropdownComponent.selectedIndex];
            const selectedDescription = selectedOption.text.split(" - ")[1];
            const selecctedComposant = selectedOption.text.split(" - ")[0];
            const selectedqteCondi = qteCondiInput.value;
            const selectedQteParCondi = qteParCondi.textContent;

            if (selectedDescription.trim() !== "") {
                const nomDuComposant = selectedOption.getAttribute("data-nom-composant"); // Récupérer le nom du composant
                itemsComponent.push({nomDuComposant,Qté_conditionnement:selectedQteParCondi, description: selectedDescription, qteCondi: selectedqteCondi, Compo:selecctedComposant }); // Ajouter le nom du composant
            }

            qteCondiInput.value = "";
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
        console.log("liste composé");
        console.log(listeComposés);
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
                itemInfo.textContent = `${item.nomDuComposant}, ${item.description}, ${item.qteCondi}`; // Utiliser item.nomDuComposant
                itemInfo.classList.add("item-info");
                composéDiv.appendChild(itemInfo);
            });
        });
    }

    // Appels initiaux
    afficherObjetsStockés();
    remplirMenuDeroulant();
    
});