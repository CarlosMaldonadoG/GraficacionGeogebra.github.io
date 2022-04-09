export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 24.0;
        this.rHeight = 20.0;
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
