// // Créer une variable pour gérer le niveau de zoom
// let zoomLevel = 1;

// // Fonction pour gérer le zoom avant
// const zoomIn = () => {
//   zoomLevel -= 0.1; // Vous pouvez ajuster le facteur de zoom selon vos besoins
//   camera.position.z = 30 * zoomLevel;
// };

// // Fonction pour gérer le zoom arrière
// const zoomOut = () => {
//   zoomLevel += 0.1; // Vous pouvez ajuster le facteur de zoom selon vos besoins
//   camera.position.z = 30 * zoomLevel;
// };

// // Écouter les événements de la souris pour détecter le zoom
// document.addEventListener('wheel', (event) => {
//   if (event.deltaY > 0) {
//     zoomIn();
//   } else {
//     zoomOut();
//   }
// });
