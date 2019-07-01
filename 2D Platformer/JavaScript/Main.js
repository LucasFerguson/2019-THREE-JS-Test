/**
 * @author LucasFerguson
 * @date 6/22/2019
 */


//// //// //// ////
let author = "author: LucasFerguson";
let date = "date : 6/22/2019";
let version = "version : 0.0.1";

console.log(author);
console.log(date);
console.log(version);
//// //// //// ////

var scene = new THREE.Scene();

var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var keyboard = new Keyboard();

var loader = new THREE.FontLoader();
loader.load('fonts/helvetiker_regular.typeface.json', function (font) {

    // var geometry = new THREE.TextGeometry('Hello three.js!', {
    //     font: font,
    //     size: 80,
    //     height: 5,
    //     curveSegments: 12,
    //     bevelEnabled: true,
    //     bevelThickness: 10,
    //     bevelSize: 8,
    //     bevelOffset: 0,
    //     bevelSegments: 5
    // });
});



var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function setup() {
    camera.position.z = 5;

    gameloop();
}

function gameloop() {
    update();
    render();

    requestAnimationFrame(gameloop);
}

function render() {
    renderer.render(scene, camera);
}

function update() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    cube.position.x += 0.01;
    cube.position.y += 0.01;
    cube.position.z += -0.01;

}

onkeydown = onkeyup = function (e) {
    e = e || event; // to deal with IE
    keyboard.keyCodes[e.keyCode] = e.type == 'keydown';
    /* insert conditional here */
    keyboard.update();
}

window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});


setup();