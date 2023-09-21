// Importer la bibliothèque Three.js depuis un CDN
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r122/three.module.js';

// Créer une scène pour contenir les objets 3D
const scene = new THREE.Scene();

// Créer une caméra perspective pour visualiser la scène
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);

// Créer un moteur de rendu WebGL
const renderer = new THREE.WebGLRenderer();

// Définir la taille du rendu en fonction de la fenêtre du navigateur
renderer.setSize(window.innerWidth, window.innerHeight);

// Ajouter le rendu au corps du document HTML
document.body.appendChild(renderer.domElement);

// Créer une sphère pour représenter la Terre
const geometry = new THREE.SphereGeometry(1, 32, 32);

// Utiliser un gestionnaire de chargement de textures
const textureLoader = new THREE.TextureLoader();

// Charger la texture de la Terre (remplacez 'world.jpg' par le chemin de votre image de Terre)
const texture = textureLoader.load('world.jpg');

// Créer un matériau de base avec la texture chargée
const material = new THREE.MeshBasicMaterial({ map: texture });

// Créer un maillage (Mesh) en utilisant la géométrie et le matériau
const earth = new THREE.Mesh(geometry, material);

// Ajouter la sphère (Terre) à la scène
scene.add(earth);

// Définir la position de la caméra en profondeur
camera.position.z = 5;
// Ajouter un plan pour le fond avec une texture
const backgroundGeometry = new THREE.PlaneGeometry(10, 10);
// Charger la texture du fond (remplacez 'background.jpg' par le chemin de votre image de fond)
const backgroundMaterial = new THREE.MeshBasicMaterial({ map: textureLoader.load('bgetoile.jpg') });
// Créer un maillage pour le fond
const background = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
// Ajouter le fond à la scène
scene.add(background);
// Créer une fonction d'animation pour mettre à jour la scène
const animate = () => {
    requestAnimationFrame(animate);
    // Faire tourner la Terre autour de son axe Y
    earth.rotation.y += 0.005;
    // Rendre la scène avec la caméra
    renderer.render(scene, camera);
};
// Appeler la fonction d'animation pour commencer l'animation
animate();



