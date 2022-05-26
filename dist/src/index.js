import { CvCubePersp } from './cvCubePersp.js';
let canvas;
let graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
const miCanvas = new CvCubePersp(graphics, canvas);
miCanvas.paint();
