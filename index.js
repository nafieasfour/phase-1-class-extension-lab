// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((total, side) => total + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides === 3) {
        const [side1, side2, side3] = this.sides;
        return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
      }
      return false;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides === 4) {
        const [side1, side2, side3, side4] = this.sides;
        return side1 === side2 && side1 === side3 && side1 === side4;
      }
      return false;
    }
  
    get area() {
      if (this.isValid) {
        const [side] = this.sides;
        return side ** 2;
      }
      return null;
    }
  }
  