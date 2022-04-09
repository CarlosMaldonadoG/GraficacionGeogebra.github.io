export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 8.0;
        this.rHeight = 6.0;
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
        this.graphics.strokeStyle = 'lightgray';
        for (let j = -10; j <= 10; j += 0.2) {
            let numUno = Number(j.toFixed(1));
            if (!(Number.isInteger(numUno))) {
                this.drawLine(this.iX(-10), this.iY(numUno), this.iX(10), this.iY(numUno));
                this.drawLine(this.iX(numUno), this.iY(-10), this.iX(numUno), this.iY(10));
            }
        }
        this.graphics.strokeStyle = 'black';
        for (let i = -10; i <= 10; i++) {
            this.drawLine(this.iX(i), this.iY(-10), this.iX(i), this.iY(10));
            this.graphics.fillText(i + "", this.iX(i), this.iY(-0.3));
            this.drawLine(this.iX(-10), this.iY(i), this.iX(10), this.iY(i));
            this.graphics.fillText(i + "", this.iX(-0.2), this.iY(i));
        }
        this.graphics.strokeStyle = 'red';
        for (let x = -3; x <= 3; x += 0.1) {
            this.drawLine(this.iX(x), this.iY(this.fx(x)), this.iX(x + 0.1), this.iY(this.fx(x + 0.1)));
        }
    }
}
