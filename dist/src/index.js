import { CanvasLocal } from './canvasLocal.js';
let canvas;
let graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
const miCanvas = new CanvasLocal(graphics, canvas);
let inteRval;
let reproducir = false;
function animate() {
    miCanvas.paint();
}
function iniciar() {
    inteRval = setInterval(animate, 90);
}
function pausa() {
    clearInterval(inteRval);
}
document.getElementById('Reproducir').addEventListener('click', iniciar, false);
document.getElementById('Pausa').addEventListener('click', pausa, false);
