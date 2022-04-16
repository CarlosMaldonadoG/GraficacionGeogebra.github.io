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
        let numHeight;
        let numWidth;
        let aY;
        let aX;
        let resY = ((this.rHeight % 2) == 0) ? numHeight = this.rHeight : numHeight = this.rHeight - 1;
        let resX = ((this.rWidth % 2) == 0) ? numWidth = this.rWidth : numWidth = this.rWidth - 1;
        aY = numHeight / 2;
        aX = numWidth / 2;
        this.graphics.strokeStyle = 'lightgray';
        for (let g = -aX; g <= aX; g += 0.2) {
            g = Number(g.toFixed(1));
            if (!(Number.isInteger(g))) {
                this.drawLine(this.iX(g), this.iY(-aY), this.iX(g), this.iY(aY));
            }
        }
        for (let h = -aY; h <= aY; h += 0.2) {
            h = Number(h.toFixed(1));
            if (!(Number.isInteger(h))) {
                this.drawLine(this.iX(-aX), this.iY(h), this.iX(aX), this.iY(h));
            }
        }
        this.graphics.strokeStyle = 'black';
        this.graphics.fillStyle = 'brown';
        for (let i = -aX; i <= aX; i++) {
            this.drawLine(this.iX(i), this.iY(-aY), this.iX(i), this.iY(aY));
            this.graphics.fillText("" + i, this.iX(i - 0.3), this.iY(-0.3));
        }
        for (let j = -aY; j <= aY; j++) {
            this.drawLine(this.iX(-aX), this.iY(j), this.iX(aX), this.iY(j));
            this.graphics.fillText("" + j, this.iX(-0.3), this.iY(j - 0.3));
        }
        this.graphics.strokeStyle = 'red';
        for (let x = -3; x <= 3; x += 0.1) {
            let x2 = Number(x.toFixed(1));
            this.drawLine(this.iX(x2), this.iY(this.fx(x2)), this.iX(x2 + 0.1), this.iY(this.fx(x2 + 0.1)));
        }
    }
}
