import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);


var geometry = new THREE.CircleBufferGeometry(5, 32);
var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
var circle = new THREE.Mesh(geometry, material);
scene.add(circle);

camera.position.z = 10;

var animate = function () {
	requestAnimationFrame(animate);

	circle.rotation.x += 0.01;
	circle.rotation.y += 0.01;

	renderer.render(scene, camera);
};

animate();