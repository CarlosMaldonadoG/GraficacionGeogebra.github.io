import { CanvasLocal } from './canvasLocal.js';
let canvas;
let graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
const inputUno = document.querySelector('.field-number');
const inputDos = document.querySelector('.number-filed');
function obtenerValores() {
    let valueUno = parseInt(inputUno.value);
    let valueDos = parseInt(inputDos.value);
    console.log(valueDos, valueUno);
    inputUno.value = "";
    inputDos.value = "";
    const miCanvas = new CanvasLocal(graphics, canvas, valueUno, valueDos);
    miCanvas.paint();
}
document.getElementById('btn-enviar').addEventListener('click', obtenerValores, false);
