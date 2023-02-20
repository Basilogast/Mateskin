const panorama = new PANOLENS.ImagePanorama( 'img/VR 4.jpg' );
const imageContainer = document.querySelector('.vrview');
const viewer = new PANOLENS.Viewer(
{
container: imageContainer,
});
viewer.add( panorama );

const panorama2 = new PANOLENS.ImagePanorama('img/VR 1.jpg');
const imageContainer2 = document.querySelector('.vrview2');
const viewer2 = new PANOLENS.Viewer(
{
container: imageContainer2,
});
viewer2.add( panorama2 );

let progress = document.getElementById('progress_bar');
window.onscroll = function() {
let progressHeight = window.pageYOffset*window.innerHeight/document.body.scrollHeight;
progress.style.height = (window.innerHeight/document.body.scrollHeight)*100 + "%";
progress.style.top = progressHeight + "px";
}

let particle = document.getElementById('Particles-BG');
particle.style.height = document.body.scrollHeight + "px";
particlesJS("Particles-BG", {
	"particles": {
	"number": {
	"value": 100,
	"density": {
	"enable": true,
	"value_area": 700 } },

    "color": {
	"value": "#00bcd4" },

    "shape": {
	"type": "circle",
	"stroke": {
	"width": 4,
	"color": "#00bcd4" },

	"polygon": {
	"nb_sides": 5 } },

	"opacity": {
	"value": 0.5,
	"random": false,
	"anim": {
	"enable": false,
	"speed": 0.1,
	"opacity_min": 0.1,
	"sync": false } },

	"size": {
	"value": 3,
	"random": true,
	"anim": {
	"enable": false,
	"speed": 10,
	"size_min": 0.1,
	"sync": false } },

	"line_linked": {
	"enable": true,
	"distance": 150,
	"color": "#00bcd4",
	"opacity": 0.4,
	"width": 2 },

	"move": {
	"enable": true,
	"speed": 2,
	"direction": "none",
	"random": false,
	"straight": false,
	"out_mode": "out",
	"bounce": false,
	"attract": {
	"enable": false,
	"rotateX": 600,
	"rotateY": 1200 } } },

	"interactivity": {
	"detect_on": "canvas",
	"events": {
	"onhover": {
	"enable": true,
	"mode": "grab" },

	"onclick": {
	"enable": true,
	"mode": "push" },

	"resize": true },

	"modes": {
	"grab": {
	"distance": 140,
	"line_linked": {
	"opacity": 1 } },

	"bubble": {
	"distance": 400,
	"size": 40,
	"duration": 2,
	"opacity": 8,
	"speed": 3 },

	"repulse": {
	"distance": 200,
	"duration": 0.4 },

	"push": {
	"particles_nb": 4 },

	"remove": {
	"particles_nb": 2 } } },

"retina_detect": true });
