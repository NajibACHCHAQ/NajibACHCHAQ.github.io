import * as THREE from 'three';

// Créer une scène
const scene = new THREE.Scene();

// Créer une caméra
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// Créer un moteur de rendu WebGL
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Créer le Soleil (une sphère jaune)
const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Créer la Terre (une sphère bleue)
const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// Ajouter la Terre en orbite autour du Soleil
const earthOrbit = new THREE.Group();
scene.add(earthOrbit);
earthOrbit.add(earth);

// Fonction d'animation
const animate = () => {
  requestAnimationFrame(animate);

  // Faites tourner la Terre autour du Soleil
  earthOrbit.rotation.y += 0.005;

  renderer.render(scene, camera);
};

// Appeler la fonction d'animation
animate();
