import { Tria } from './Tria.js';
import { Tools2D } from './Tools2D.js';
export class Polygon3D {
    constructor(vnrs) {
        let n = vnrs.length;
        this.nrs = new Array(n);
        for (let i = 0; i < n; i++)
            this.nrs[i] = vnrs[i];
    }
    ;
    getNrs() { return this.nrs; }
    getA() { return this.a; }
    getB() { return this.b; }
    getC() { return this.c; }
    getH() { return this.h; }
    setAbch(a, b, c, h) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.h = h;
    }
    getT() { return this.t; }
    triangulate(obj) {
        let n = this.nrs.length;
        let next;
        this.t = new Tria[n - 2];
        let vScr = obj.getVScr();
        let iA = 0, iB, iC;
        let j = n - 1;
        for (let i = 0; i < n; i++) {
            next[j] = i;
            j = i;
        }
        for (let k = 0; k < n - 2; k++) {
            let a, b, c;
            let found = false;
            let count = 0, nA = -1, nB = 0, nC = 0, nj;
            while (!found && ++count < n) {
                iB = next[iA];
                iC = next[iB];
                nA = Math.abs(this.nrs[iA]);
                a = vScr[nA];
                nB = Math.abs(this.nrs[iB]);
                b = vScr[nB];
                nC = Math.abs(this.nrs[iC]);
                c = vScr[nC];
                if (Tools2D.area2(a, b, c) >= 0) {
                    j = next[iC];
                    nj = Math.abs(this.nrs[j]);
                    while (j != iA &&
                        (nj == nA || nj == nB || nj == nC ||
                            !Tools2D.insideTriangle(a, b, c, vScr[nj]))) {
                        j
                            = next[j];
                        nj = Math.abs(this.nrs[j]);
                    }
                    if (j == iA) {
                        this.t[k] = new Tria(nA, nB, nC);
                        next[iA] = iC;
                        found = true;
                    }
                }
                iA = next[iA];
            }
            if (count == n) {
                if (nA >= 0) {
                    this.t[k] = new Tria(nA, nB, nC);
                }
                else {
                    console.log("Nonsimple polygon");
                }
            }
        }
    }
}
