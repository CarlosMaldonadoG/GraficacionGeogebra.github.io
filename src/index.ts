import { CanvasLocal } from './canvasLocal.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

const inputUno = document.querySelector('.field-text') as HTMLInputElement;

function obtenerValores(){
    limpiarCanvas();
    let tamArray : number;
    let valueUno = inputUno.value;
    let valores = valueUno.split(',').map(elem => parseFloat(elem));
    tamArray = valores.length;
    if(inputUno.value === ""){
        alert("Ingrese los valores para poder graficar");
    }else{
        const miCanvas:CanvasLocal = new CanvasLocal(graphics, canvas, tamArray);
        miCanvas.paint(valores);
        inputUno.value = "";
    }
}

function limpiarCanvas(){
    graphics.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById('btn-valor').addEventListener('click', obtenerValores, false);