export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 12;
        this.rHeight = 12;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 16;
        this.centerY = this.maxY / 8 * 7;
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
    drawRmboide(x1, y1, x2, y2, x3, y3, x4, y4, color) {
        this.graphics.fillStyle = color;
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.lineTo(x3, y3);
        this.graphics.lineTo(x4, y4);
        this.graphics.closePath();
        this.graphics.stroke();
        this.graphics.fill();
    }
    fx(x) {
        return Math.sin(x * 2.5);
    }
    maxH(h) {
        let max = h[0];
        for (let i = 1; i < h.length; i++) {
            if (max < h[i])
                max = h[i];
        }
        let res;
        let pot = 10;
        while (pot < max) {
            pot *= 10;
        }
        pot /= 10;
        res = Math.ceil(max / pot) * pot;
        return res;
    }
    paint() {
        let h = [27, 10, 16, 2, 50, 33];
        let maxEsc;
        let colors = ['magenta', 'red', 'green', 'yellow'];
        let xLar = h.length * 2;
        console.log(xLar);
        maxEsc = this.maxH(h);
        this.graphics.strokeStyle = 'black';
        this.drawLine(this.iX(0), this.iY(0), this.iX(8), this.iY(0));
        this.drawLine(this.iX(0), this.iY(0), this.iX(0), this.iY(6));
        let i = 0;
        for (let y = 0.6; y <= 6; y += 1.35) {
            this.drawLine(this.iX(0.6), this.iY(y), this.iX(8), this.iY(y));
            this.drawLine(this.iX(0), this.iY(y - 0.6), this.iX(0.6), this.iY(y));
            this.graphics.strokeText((maxEsc * i / 4) + "", this.iX(-0.5), this.iY(y - 0.7));
            i++;
        }
        this.graphics.strokeStyle = 'black';
        let ind = 0;
        let incremento = 8 / h.length;
        for (let i = 0.5; i <= 12; i += 2) {
            this.graphics.fillStyle = colors[ind];
            this.drawLine(this.iX(i), this.iY(6 * h[ind] / maxEsc - 0.1), this.iX(i), this.iY(0));
            this.graphics.fillRect(this.iX(i), this.iY(6 * h[ind] / maxEsc - 0.1), this.iX(2) - this.iX(1), this.iY(0.2) - this.iY(6 * h[ind] / maxEsc));
            this.drawRmboide(this.iX(i + 0.3), this.iY(6 * h[ind] / maxEsc + 0.2), this.iX(i + 1.3), this.iY(6 * h[ind] / maxEsc + 0.2), this.iX(i + 1), this.iY(6 * h[ind] / maxEsc - 0.1), this.iX(i), this.iY(6 * h[ind] / maxEsc - 0.1), colors[ind]);
            this.drawRmboide(this.iX(i + 1), this.iY(6 * h[ind] / maxEsc - 0.1), this.iX(i + 1.3), this.iY(6 * h[ind] / maxEsc + 0.2), this.iX(i + 1.3), this.iY(0.4), this.iX(i + 1), this.iY(0.1), colors[ind]);
            ind++;
        }
        ind = 0;
        for (let x = 0; x < 8; x += 2) {
            this.graphics.strokeText(colors[ind++], this.iX(x + 0.5), this.iY(-0.5));
        }
        for (let y = 0; y < h.length; y++) {
            this.graphics.strokeText(colors[y], this.iX(13), this.iY(5 - y));
            this.graphics.fillStyle = colors[y];
            this.graphics.fillRect(this.iX(12.5), this.iY(5 - y), 10, 10);
        }
    }
}
