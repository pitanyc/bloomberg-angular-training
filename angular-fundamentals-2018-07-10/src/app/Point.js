class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}
let p1 = new Point(0, 10);
let p2 = new Point(10, 20);
let p3 = p1.add(p2);
console.log(`hello ${p3.x}, ${p3.y}`);
