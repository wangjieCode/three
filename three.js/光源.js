import * as THREE from './tool/three.module.js';
const scene = new THREE.Scene();
let width = window.innerWidth;
let height = window.innerHeight;
// 透视相机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
// 正交相机
// const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 100, 1000);
const renderer = new THREE.WebGLRenderer({
	antialias: true,
	// alpha:true
});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(50, 50, 50);
var material = new THREE.MeshBasicMaterial({
	color: 0x00ff99
});

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 100 + 100 * 1.414;
camera.up.x = -10
camera.up.y = -10

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera)
}
animate()
