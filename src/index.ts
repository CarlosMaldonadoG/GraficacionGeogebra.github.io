import { CanvasLocal } from './canvasLocal.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

const miCanvas:CanvasLocal = new CanvasLocal(graphics, canvas);

//miCanvas.paint();
let inteRval;
let reproducir = false;

function animate() {
    miCanvas.paint();
}

function iniciar(){
    inteRval = setInterval(animate, 90);
}

function pausa(){
    clearInterval(inteRval);
}

document.getElementById('Reproducir').addEventListener('click', iniciar, false);
document.getElementById('Pausa').addEventListener('click', pausa, false);