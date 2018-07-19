class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

let p1: Point = new Point(0, 10);
let p2 = new Point(10, 20);
let p3 = p1.add(p2);

console.log(`hello ${p3.x}, ${p3.y}`);
