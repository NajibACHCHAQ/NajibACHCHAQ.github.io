document.addEventListener("DOMContentLoaded", () => {
    // Code exécuté lorsque le DOM est complètement chargé


    // Sélection des éléments du premier formulaire
    const duplicateButton = document.getElementById("duplicateButton");
    const container = document.getElementById("container");
    const itemNameInput = document.querySelector("input");
    const validationButton = document.querySelector(".validation");
    const affichageObjetsStockés = document.getElementById("affichageObjetsStockés");
    const objetsStockesDropdown = document.getElementById("objetsStockesDropdown");
    const valeursdiv = document.querySelectorAll(".valeur");
    

    const listeObjetsStockés = [];

    // Gestion de l'événement de changement dans le dropdown des objets stockés
    objetsStockesDropdown.addEventListener("change", () => {
        const selectedIndex = objetsStockesDropdown.value;
        const selectedObjet = listeObjetsStockés[selectedIndex];
        const selectedDescription = objetsStockesDropdown.options[objetsStockesDropdown.selectedIndex].text.split(" - ")[1];

        valeursdiv.forEach((valeurdiv) => {
            valeurdiv.textContent = "";

            if (selectedObjet) {
                const selectedItem = selectedObjet.items.find(item => item.description === selectedDescription);
                if (selectedItem) {
                    const selectedQuantite = selectedItem.qteCondi;
                    valeurdiv.textContent = `${selectedQuantite}`;
                } else {
                    valeurdiv.textContent = "Item non trouvé dans l'objet";
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

        const listeObjetsStockésJSON = JSON.stringify(listeObjetsStockés);
        // Stocker les données dans le Local Storage
        localStorage.setItem('listeObjetsStockés', listeObjetsStockésJSON);

        

        afficherObjetsStockés();
        console.log("liste composant");
        console.log(listeObjetsStockés);
    });

    // Affichage des objets stockés dans le DOM
 
    function afficherObjetsStockés() {
        affichageObjetsStockés.innerHTML = "";
    
        listeObjetsStockés.forEach(objet => {
            const objetdiv = document.createElement("div");
            objetdiv.classList.add("objet");
            affichageObjetsStockés.appendChild(objetdiv);
    
            const nomdiv = document.createElement("div");
            nomdiv.textContent = `${objet.nomDuComposant},${objet.items[0].pcb}`;
            nomdiv.classList.add("nom-composant");
            objetdiv.appendChild(nomdiv);
    
            let quantitedivisée = objet.items[0].qteCondiTotaleDansObjet;
    
            objet.items.forEach(item => {
                const itemInfo = document.createElement("p");
                const quantiteActuelle = parseFloat(item.qteCondi);
                const quantiteMultiplier = quantitedivisée / quantiteActuelle;
                itemInfo.textContent = `${item.description},${item.qteCondi},${item.qteUnitaire}`;
                itemInfo.classList.add("item-info");
                objetdiv.appendChild(itemInfo);
    
                quantitedivisée = quantiteMultiplier;
            });
        });
    
        remplirMenuDeroulant();
        remplirMenuDeroulantGlobal(dropdownOperation);
        remplirMenuDeroulantGlobal(dropdownPf);
        

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
            const valeurdivComponent = itemComponentClone.querySelector(".valeur");

            dropdownComponent.selectedIndex = 0;
            valeurdivComponent.textContent = "";

            containerComponent.appendChild(itemComponentClone);

            if (existingItemsComponent + 1 === 9) {
                duplicateButtonComponent.disabled = true;
            }
                   
        }

    });


    const validationButtonComponent = document.querySelector(".validationComponent");

    // Gestion de la validation du deuxième formulaire
    validationButtonComponent.addEventListener("click", () => {
        const composéName = document.querySelector("#containerComponent input").value;
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
                const nomDuComposant = selectedOption.getAttribute("data-nom-composant");
                
                // Trouver le composant sélectionné dans la liste
                const selectedComposantObj = listeObjetsStockés.find(objet => objet.nomDuComposant === selecctedComposant);
    
                if (selectedComposantObj) {
                    const selectedItem = selectedComposantObj.items.find(item => item.description === selectedDescription);
    
                    if (selectedItem) {
                        itemsComponent.push({
                            nomDuComposant:selecctedComposant,
                            Qté_conditionnement: selectedQteParCondi,
                            description: selectedDescription,
                            qteCondi: selectedqteCondi,
                            qteCondiCompo: selectedItem.qteCondi,
                            pcb: selectedItem.pcb,
                            qteUnitaire: selectedItem.qteUnitaire
                        });
                    }
                }
            }
            
            qteCondiInput.value = "";
            dropdownComponent.selectedIndex = 0;
            duplicateButtonComponent.disabled = false;
        });
    
        const composéData = { nomDuComposé: composéName, items: itemsComponent };
        document.querySelector("#containerComponent input").value = "";
        listeComposés.push(composéData);
    
        containerComponent.querySelectorAll(".itemComponent").forEach(itemComponent => {
            if (itemComponent !== document.querySelector(".itemComponent")) {
                itemComponent.remove();
            }
        });

        const listeComposésJSON = JSON.stringify(listeComposés);
        localStorage.setItem('listeComposés', listeComposésJSON);
    
        // Appeler la fonction pour afficher les objets composés
        afficherComposés();
        console.log("liste composé");
        console.log(listeComposés);
    });

    function afficherComposés() {
        const affichageComposés = document.getElementById("affichageComposés");
        affichageComposés.innerHTML = "";
    
        listeComposés.forEach(composé => {
            const composédiv = document.createElement("div");
            composédiv.classList.add("composé");
            affichageComposés.appendChild(composédiv);
    
            const nomdiv = document.createElement("div");
            nomdiv.textContent = composé.nomDuComposé;
            nomdiv.classList.add("nom-composé");
            composédiv.appendChild(nomdiv);
    
            composé.items.forEach(item => {
                const itemInfo = document.createElement("p");
                itemInfo.textContent = `${item.nomDuComposant}, ${item.description}, ${item.qteCondi}`; // Utiliser item.nomDuComposant
                itemInfo.classList.add("item-info");
                composédiv.appendChild(itemInfo);
            });
            remplirMenuDeroulantGlobal(dropdownOperation)
            remplirMenuDeroulantGlobal(dropdownPf)
        });
    }
    
    // Affichage des objets PFs dans le DOM
    function afficherPf() {
        const affichagePf = document.getElementById("affichagePf");
        affichagePf.innerHTML = "";

        listePf.forEach(pf => {
            const pfdiv = document.createElement("div");
            pfdiv.classList.add("pf");
            affichagePf.appendChild(pfdiv);

            const nomdiv = document.createElement("div");
            nomdiv.textContent = pf.nomDuPf;
            nomdiv.classList.add("nom-pf");
            pfdiv.appendChild(nomdiv);

            pf.items.forEach(item => {
                const itemInfo = document.createElement("p");
                const type = item.description.includes("(Composant)") ? "composant" : "pf";
                itemInfo.textContent = `${item.nomDuComposant} - ${item.description}, ${item.qteCondi}`;
                itemInfo.classList.add("item-info");
                pfdiv.appendChild(itemInfo);
            });
        });
    }
    const dropdownOperation = document.getElementById("objets-operationStockesDropdown");
    const dropdownPf = document.querySelector("#objets-componentStockesDropdown")

    function remplirMenuDeroulantGlobal(dropdown) {
        dropdown.innerHTML = '<option value="">Sélectionner</option>';

        listeObjetsStockés.forEach((objet, index) => {
            objet.items.forEach(item => {
                const option = document.createElement("option");
                option.value = index;
                option.textContent = `${objet.nomDuComposant} - ${item.description}`;
                //option.setAttribute("data-type", "composant"); // Ajouter un attribut pour indiquer le type
                option.setAttribute("data-nom-composant", objet.nomDuComposant);
                dropdown.appendChild(option);
            });
        });

        listeComposés.forEach((composé, index) => {
            composé.items.forEach(item => {
                const option = document.createElement("option");
                option.value = index;
                option.textContent = `${composé.nomDuComposé} - ${item.description}`;
                option.setAttribute("data-type", "composé"); // Ajouter un attribut pour indiquer le type
                option.setAttribute("data-nom-composant", composé.nomDuComposé);
                dropdown.appendChild(option);
            });
        });

        listePf.forEach((pf, index) => {
            pf.items.forEach(item => {
                const option = document.createElement("option");
                option.value = index;
                option.textContent = `${pf.nomDuPf} - ${item.description}`;
                option.setAttribute("data-type", "pf"); // Ajouter un attribut pour indiquer le type
                dropdown.appendChild(option);
            });
        });
    }

    //--     3eme Formulaire      --//

        const duplicateButtonPf = document.getElementById("duplicateButtonPf");
        const containerPf = document.getElementById("containerPf");
        const listePf = [];

        duplicateButtonPf.addEventListener("click", () => {
            const existingItemsPf = document.querySelectorAll(".itemPf").length;

            if (existingItemsPf < 9) {
                const itemPfTemplate = document.querySelector(".itemPf");
                const itemPfClone = itemPfTemplate.cloneNode(true);

                const dropdownPf = itemPfClone.querySelector(".objets-componentStockesDropdownOriginal");
                const valeurdivPf = itemPfClone.querySelector(".valeurPf");
                const inputQteCondiPf = itemPfClone.querySelector(".inputqteCondi");

                dropdownPf.selectedIndex = 0;
                valeurdivPf.textContent = "";

                containerPf.appendChild(itemPfClone);

                if (existingItemsPf + 1 === 9) {
                    duplicateButtonPf.disabled = true;
                }

            }
    });

    const validationButtonPf = document.querySelector(".validationPf");

    
    validationButtonPf.addEventListener("click", () => {
        const composéName = document.querySelector("#containerPf input").value;
        const itemPfElements = document.querySelectorAll(".itemPf .infoPf");
    
        const itemsPf = [];
    
        itemPfElements.forEach(itemPfElement => {
            const dropdownPf = itemPfElement.querySelector(".objets-componentStockesDropdownOriginal");
            
            const qteCondiInputPf = itemPfElement.querySelector(".inputqteCondi");
            const valeurdivPf = itemPfElement.querySelector(".valeurPf");
    
            const selectedIndex = dropdownPf.selectedIndex;
            const selectedOption = dropdownPf.options[selectedIndex];
    
            const selectedDescription = selectedOption.text.split(" - ")[1];
            const selectedqteCondiPf = qteCondiInputPf.value;
            const nomDuComposant = selectedOption.getAttribute("data-nom-composant");
            
    
            if (selectedDescription.trim() !== "") {
                itemsPf.push({ nomDuComposant, description: selectedDescription, qteCondi: selectedqteCondiPf });
            }
    
            qteCondiInputPf.value = "";
            dropdownPf.selectedIndex = 0;
            duplicateButtonPf.disabled = false;
        });
    
        const pfData = { nomDuPf: composéName, items: itemsPf };
    
        document.querySelector("#containerPf input").value = "";
    
        listePf.push(pfData);
    
        containerPf.querySelectorAll(".itemPf").forEach(itemPf => {
            if (itemPf !== document.querySelector(".itemPf")) {
                itemPf.remove();
            }
        });

           
        afficherPf();
        remplirMenuDeroulantGlobal(dropdownOperation)
        console.log("liste Pf")
        console.log(listePf)

        const listePfJSON = JSON.stringify(listePf);
        localStorage.setItem('listePf', listePfJSON);


        
    });

    
    const duplicateButtonOp = document.getElementById("duplicateButtonOp");
    const containerOp = document.querySelector(".tableauOperation");
    const listeOp = [];
    
    duplicateButtonOp.addEventListener("click", () => {
        const existingItemsOp = document.querySelectorAll(".itemOp").length;
    
        if (existingItemsOp ) {
            const itemOpTemplate = document.querySelector(".itemOp"); // Template d'origine
            const itemOpClone = itemOpTemplate.cloneNode(true); // Cloner le template
    
            const dropdownOp = itemOpClone.querySelector(".objets-componentStockesDropdownOriginal");
    
            dropdownOp.selectedIndex = 0;
    
            // Trouver le conteneur approprié et ajouter le clone à l'intérieur
            const arrayContent = containerOp.querySelector(".arrayContent"); // Trouver le conteneur
            arrayContent.appendChild(itemOpClone); // Ajouter le clone à l'intérieur
    
           
        }
    });

    const validationButtonOp = document.querySelector(".validationOp");

    // Gestion de la validation 
    validationButtonOp.addEventListener("click", () => {
        const itemOpElements = document.querySelectorAll(".itemOp");
        const itemsOp = [];
    
        itemOpElements.forEach(itemOpElement => {
            const dropdownOp = itemOpElement.querySelector(".arrayContent .objets-componentStockesDropdownOriginal");
            const inputDescription = itemOpElement.querySelector(".descriptionOp");
            const inputTimePerOp = itemOpElement.querySelector(".timeOp");
    
            const description = inputDescription.value;
            const timePerOp = inputTimePerOp.value;
    
            const selectedIndex = dropdownOp.selectedIndex;
            const selectedOption = dropdownOp.options[selectedIndex];           
            const selectedDescription = selectedOption.text.split(" - ")[1];
            const selectedComposant = selectedOption.text.split(" - ")[0];
    
            // Trouver le composant sélectionné dans la liste
            const selectedComposantObj = listeObjetsStockés.find(objet => objet.nomDuComposant === selectedComposant);
    
            if (selectedDescription.trim() !== "" && selectedComposantObj) {
                const selectedItem = selectedComposantObj.items.find(item => item.description === selectedDescription);
                
                // Vérifier que l'élément est trouvé avant d'ajouter les informations
                if (selectedItem) {
                    itemsOp.push({
                        Composant: selectedComposant,
                        Conditonnement: selectedDescription,
                        timePerOp,
                        description,
                        qteCondi: selectedItem.qteCondi,
                        pcb: selectedItem.pcb,
                        qteUnitaire: selectedItem.qteUnitaire
                    });
                }
            }
    
            dropdownOp.selectedIndex = 0;
            duplicateButtonComponent.disabled = false;
        });
    

        const composéData = { items: itemsOp };
        
        listeOp.push(composéData);

        containerOp.querySelectorAll(".itemOp").forEach(itemOp => {
            if (itemOp !== document.querySelector(".itemOp")) {
                itemOp.remove();
            }
        });

        // Convertir les données en chaînes JSON
        const listeOpJSON = JSON.stringify(listeOp);

        // Stocker les données dans le Local Storage
        localStorage.setItem('listeOp', listeOpJSON);

        console.log(listeOp)
        
        
    });

    // Obtenir la fenêtre modale, le bouton de fermeture et la fenêtre de contenu
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn"); // Vous aurez besoin d'un élément déclencheur (un bouton, par exemple)
    var span = document.getElementsByClassName("close")[0];

    // Ouvrir la fenêtre modale lorsque la page est chargée
    window.onload = function() {
        modal.style.display = "block";
    }

    // Fermer la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fermer la fenêtre modale si l'utilisateur clique en dehors de celle-ci
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Appels initiaux
});



// // Fonction pour ajouter des données au localStorage
// function ajouterAuLocalStorage(cle, nouvellesDonnees) {
//     // Récupérer les données actuelles du localStorage
//     const donneesExistantes = JSON.parse(localStorage.getItem(cle)) || [];

//     // Ajouter les nouvelles données aux données existantes
//     const donneesMisesAJour = [...donneesExistantes, ...nouvellesDonnees];

//     // Stocker les données mises à jour dans le localStorage
//     localStorage.setItem(cle, JSON.stringify(donneesMisesAJour));
// }

// // ...

// // Lors de la validation des formulaires et de l'ajout de données aux listes
// // listeOp et listeComposés sont des exemples. Vous pouvez l'adapter pour d'autres listes.
// listeOp.push(composeData);
// ajouterAuLocalStorage('donneesOp', [composeData]);

// // ...

// // Au chargement de la page, récupérez les données du localStorage et affichez-les dans le menu déroulant
// function chargerDonneesDepuisLocalStorage() {
//     const donneesOp = JSON.parse(localStorage.getItem('donneesOp')) || [];
//     const donneesComposes = JSON.parse(localStorage.getItem('donneesComposes')) || [];

//     // Appelez la fonction remplirMenuDeroulant avec les nouvelles données
//     remplirMenuDeroulant(donneesOp, donneesComposes);
// }

// // ...

// // Appelez la fonction chargerDonneesDepuisLocalStorage au chargement de la page
// window.addEventListener('load', () => {
//     chargerDonneesDepuisLocalStorage();
// });




    
window.addEventListener('load', () => {
    // Récupérer les données depuis le Local Storage
    const listeOpJSON = localStorage.getItem('listeOp');
    const listeComposésJSON = localStorage.getItem('listeComposés');
    // ...

    // Si les données existent, les convertir en objets JavaScript
    if (listeOpJSON) {
        listeOp = JSON.parse(listeOpJSON);
    }
    if (listeComposésJSON) {
        listeComposés = JSON.parse(listeComposésJSON);
    }
    // ...

    // Appeler la fonction pour remplir le menu déroulant avec les données récupérées
    remplirMenuDeroulant(listeOp, listeComposés);
});


function remplirMenuDeroulant(listeOp, listeComposés) {
    const menuDeroulant = document.getElementById('menuDeroulant');

    menuDeroulant.innerHTML = '';

    listeOp.forEach((op, index) => {
        const option = document.createElement('option');
        option.value = JSON.stringify(op);
        option.textContent = `Opération ${index + 1}: ${op.items.length > 0 ? op.items[0].description : 'Aucune description'}`;
        menuDeroulant.appendChild(option);
    });

    listeComposés.forEach((composé, index) => {
        const option = document.createElement('option');
        option.value = JSON.stringify(composé);
        option.textContent = `Composé ${index + 1}: ${composé.items.length > 0 ? composé.items[0].description : 'Aucune description'}`;
        menuDeroulant.appendChild(option);
    });

    menuDeroulant.addEventListener('change', (event) => {
        const selectedData = JSON.parse(event.target.value);
        // Utilisez selectedData pour afficher ou manipuler les données sélectionnées
    });
}