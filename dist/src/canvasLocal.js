export class CanvasLocal {
    constructor(g, canvas, rW, rH) {
        this.graphics = g;
        this.rWidth = rW;
        this.rHeight = rH;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
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
        return x * x;
    }
    paint() {
        let numAinicial;
        let aY;
        let bY;
        let res = ((this.rHeight % 2) == 0) ? numAinicial = this.rHeight : numAinicial = this.rHeight - 1;
        aY = numAinicial / -2;
        bY = numAinicial / 2;
        this.graphics.strokeStyle = 'lightgray';
        for (let j = aY; j <= bY; j += 0.2) {
            let numUno = Number(j.toFixed(1));
            if (!(Number.isInteger(numUno))) {
                this.drawLine(this.iX(aY), this.iY(numUno), this.iX(bY), this.iY(numUno));
                this.drawLine(this.iX(numUno), this.iY(aY), this.iX(numUno), this.iY(bY));
            }
        }
        this.graphics.strokeStyle = 'black';
        this.graphics.fillStyle = 'brown';
        for (let i = aY; i <= bY; i++) {
            this.drawLine(this.iX(i), this.iY(aY), this.iX(i), this.iY(bY));
            this.graphics.fillText("" + i, this.iX(i - 0.3), this.iY(-0.3));
            this.drawLine(this.iX(aY), this.iY(i), this.iX(bY), this.iY(i));
            this.graphics.fillText("" + i, this.iX(-0.3), this.iY(i - 0.3));
        }
        this.graphics.strokeStyle = 'red';
        for (let x = -3; x <= 3; x += 0.1) {
            let x2 = Number(x.toFixed(1));
            this.drawLine(this.iX(x2), this.iY(this.fx(x2)), this.iX(x2 + 0.1), this.iY(this.fx(x2 + 0.1)));
        }
    }
}
