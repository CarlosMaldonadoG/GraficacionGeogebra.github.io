import { CanvasLocal } from './canvasLocal.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

const inputUno = <HTMLInputElement>document.querySelector('.field-number');
const inputDos = <HTMLInputElement>document.querySelector('.number-filed');

function obtenerValores(){
    let valueUno = parseInt(inputUno.value);
    let valueDos = parseInt(inputDos.value);
}

const miCanvas:CanvasLocal = new CanvasLocal(graphics, canvas);

miCanvas.paint();

document.getElementById('btn-enviar').addEventListener('click', obtenerValores, false);