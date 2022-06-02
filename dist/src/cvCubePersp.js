import { CanvasLocal } from './canvasLocal.js';
import { Obj } from './obj.js';
export class CvCubePersp extends CanvasLocal {
    constructor(g, canvas) {
        super(g, canvas);
        this.obj = new Obj();
    }
    line(i, j) {
        let p = this.obj.vScr[i], q = this.obj.vScr[j];
        this.graphics.beginPath();
        this.graphics.moveTo(super.iX(p.x), super.iY(p.y));
        this.graphics.lineTo(super.iX(q.x), super.iY(q.y));
        this.graphics.closePath();
        this.graphics.stroke();
    }
    paint() {
        this.obj.d = this.obj.rho * this.pixelSize / this.obj.objSize;
        this.obj.eyeAndScreen();
        this.line(0, 1);
        this.line(1, 3);
        this.line(2, 3);
        this.line(0, 2);
        this.line(4, 5);
        this.line(5, 7);
        this.line(6, 7);
        this.line(4, 6);
        this.line(0, 4);
        this.line(1, 5);
        this.line(2, 6);
        this.line(3, 7);
    }
}
