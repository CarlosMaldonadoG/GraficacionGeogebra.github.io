import { CanvasLocal } from './canvasLocal.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

const inputUno = <HTMLInputElement>document.querySelector('.field-number');
const inputDos = <HTMLInputElement>document.querySelector('.number-filed');

function obtenerValores(){
    limpiarCanvas();
    let valueUno = parseInt(inputUno.value);
    let valueDos = parseInt(inputDos.value);
    if(inputUno.value === '' || inputDos.value === ''){
        valueUno = 24;
        valueDos = 22;
    }else{
        valueUno = valueUno;
        valueDos = valueDos;
    }
    if(valueUno < 0 || valueDos < 0){
        alert("Numeros negativos no  son aceptados");
        dibujoPorDefecto();
        inputUno.value = "";
        inputDos.value = "";
    }else{
        inputUno.value = "";
        inputDos.value = "";
        const miCanvas:CanvasLocal = new CanvasLocal(graphics, canvas, valueUno, valueDos);
        miCanvas.paint();
    }
}

function limpiarCanvas(){
    graphics.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujoPorDefecto(){
    let valorUnoInicial = 20;
    let valorDosInicial = 18;
    const miCanvas : CanvasLocal = new CanvasLocal(graphics, canvas, valorUnoInicial, valorDosInicial);
    miCanvas.paint(); 
}

dibujoPorDefecto();

document.getElementById('btn-enviar').addEventListener('click', obtenerValores, false);