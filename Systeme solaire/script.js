
      import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

      // Créer une scène
      const scene = new THREE.Scene();

      // Créer une caméra
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;

      // Activer l'antialiasing
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Créer le Soleil (une sphère jaune)
      const sunGeometry = new THREE.SphereGeometry(5, 64, 64);
      const textureLoader = new THREE.TextureLoader();
      const sunTexture = textureLoader.load('soleil.jpg'); // Assurez-vous que le chemin de l'image est correct
      const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
      const sun = new THREE.Mesh(sunGeometry, sunMaterial);
      scene.add(sun);

      // Créer un groupe pour l'orbite de la Terre
      const earthOrbit = new THREE.Group();
      scene.add(earthOrbit);

      // Créer la Terre (une sphère avec texture)
      const earthGeometry = new THREE.SphereGeometry(2, 64, 64);

      const earthTexture = textureLoader.load('world.jpg'); // Assurez-vous que le chemin de l'image est correct
      const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
      const earth = new THREE.Mesh(earthGeometry, earthMaterial);

      // Positionner la Terre à une distance du Soleil
      const distanceFromSun = 10;
      earth.position.set(distanceFromSun, 0, 0);

      // Ajouter la Terre à l'orbite
      earthOrbit.add(earth);

      // Créer un groupe pour l'orbite de Mars
      const marsOrbit = new THREE.Group();
      scene.add(marsOrbit);

      // Créer Mars (une sphère avec une couleur)
      const marsGeometry = new THREE.SphereGeometry(1, 64, 64);
      const marsTexture = textureLoader.load('mars.jpg'); // Assurez-vous que le chemin de l'image est correct
      const marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
      const mars = new THREE.Mesh(marsGeometry, marsMaterial);

      // Positionner Mars à une distance du Soleil (plus éloignée que la Terre)
      const distanceFromSunMars = 15;
      mars.position.set(distanceFromSunMars, 0, 0);

      // Ajouter Mars à l'orbite de Mars
      marsOrbit.add(mars);

      // Fonction d'animation
      const animate = () => {
        requestAnimationFrame(animate);

        // Faites tourner l'orbite de la Terre
        earthOrbit.rotation.y += 0.005;

        earth.rotation.y += 0.1;

        // Faites tourner l'orbite de Mars plus lentement
        marsOrbit.rotation.y += 0.02;
        mars.rotation.y += 0.03;

        // Faites tourner le Soleil sur lui-même
        sun.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      // Appeler la fonction d'animation
      animate();

      // Créer une variable pour gérer le niveau de zoom
      let zoomLevel = 1;

      // Fonction pour gérer le zoom avant
      const zoomIn = () => {
        zoomLevel -= 0.1; // Vous pouvez ajuster le facteur de zoom selon vos besoins
        camera.position.z = 30 * zoomLevel;
      };

      // Fonction pour gérer le zoom arrière
      const zoomOut = () => {
        zoomLevel += 0.1; // Vous pouvez ajuster le facteur de zoom selon vos besoins
        camera.position.z = 30 * zoomLevel;
      };

      // Écouter les événements de la souris pour détecter le zoom
      document.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
          zoomIn();
        } else {
          zoomOut();
        }
      });

      // Créez une géométrie de texte en utilisant une police intégrée à Three.js
      const fontLoader = new THREE.FontLoader();
      fontLoader.load( 'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function ( font ) {
        const textGeometry = new THREE.TextGeometry( "Invests in space", {
          font: font,
          size: 4, // Taille du texte
          height: 0.2 // Épaisseur du texte
        } );

        // Créer un matériau pour le texte
        const textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );

        // Créer un objet Mesh pour le texte en utilisant la géométrie et le matériau
        const textMesh = new THREE.Mesh( textGeometry, textMaterial );

        // Positionnez le texte dans la scène
        textMesh.position.set( -23, 20, -12 ); // Ajustez les coordonnées selon vos besoins

        // Ajoutez le texte à la scène
        scene.add( textMesh );
      } );

      const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseClick(event) {
  // Coordonnées de la souris dans l'espace 2D
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Mettez à jour le rayon depuis la caméra
  raycaster.setFromCamera(mouse, camera);

  // Obtenez la liste des objets intersectés par le rayon
  const intersects = raycaster.intersectObjects([earth, mars,sun]);

  if (intersects.length > 0) {
    // Un objet a été cliqué
    const obj = intersects[0].object;

    if (obj === earth) {
      // La Terre a été cliquée
      console.log('La Terre a été cliquée !');
    } else if (obj === mars) {
      // Mars a été cliquée
      console.log('Mars a été cliquée !');
    } else if (obj === sun) {
      // Autre planète a été cliquée
      console.log('Soleil a été cliquée !');
    }
  }
}

// Ajoutez un gestionnaire d'événements de clic à la fenêtre
window.addEventListener('click', onMouseClick);

