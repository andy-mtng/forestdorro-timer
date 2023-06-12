import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const loader = new GLTFLoader();
renderer.setClearColor(0xffffff);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Moves the camera closer to the viewer and farther from the cube. z is depth
camera.position.z = 5;
camera.position.y = 1;

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x023020 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

loader.load( 'public/rubix-cube.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.y += 0.005;

	renderer.render( scene, camera );
}

// Called once to start the animation loop
animate();