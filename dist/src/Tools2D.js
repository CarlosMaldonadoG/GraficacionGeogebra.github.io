export class Tools2D {
    static area2(a, b, c) {
        return (a.x - c.x) * (b.y - c.y) - (a.y - c.y) * (b.x - c.x);
    }
    static insideTriangle(a, b, c, p) {
        return (Tools2D.area2(a, b, p) >= 0 &&
            Tools2D.area2(b, c, p) >= 0 &&
            Tools2D.area2(c, a, p) >= 0);
    }
    static distance2(p, q) {
        let dx = p.x - q.x, dy = p.y - q.y;
        return dx * dx + dy * dy;
    }
}
