import { Play } from "./play.js";
export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.mallaSize = 50;
        this.rWidth = this.mallaSize * 1.33;
        this.rHeight = this.mallaSize;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 12 * 1.5;
        this.centerY = this.maxY - 2;
        this.step = 0;
        this.blockSize = this.iX(1) - this.iX(0);
        this.juego = new Play(this.mallaSize);
        this.juego.generaMatriz2();
    }
    iX(x) { return Math.round(this.centerX + x / this.pixelSize); }
    iY(y) { return Math.round(this.centerY - y / this.pixelSize); }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
    fx(x) {
        return Math.sin(x * 2.5);
    }
    getGraphics() {
        return this.graphics;
    }
    paint() {
        let res;
        this.graphics.fillStyle = 'white';
        this.graphics.fillRect(0, 0, this.maxX, this.maxY);
        this.graphics.strokeStyle = 'lightgray';
        res = this.juego.getMat();
        this.graphics.fillStyle = 'black';
        for (let i = 0; i < this.mallaSize; i++) {
            for (let j = 0; j < this.mallaSize; j++) {
                if (res[i][j] == 1)
                    this.graphics.fillRect(this.iX(i), this.iY(j), this.blockSize, this.blockSize);
            }
        }
        res = this.juego.juegoDeLaVida(this.juego.getMat());
        this.juego.setMat(res);
    }
}
