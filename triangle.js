/* eslint-disable max-len */
class Triangle {
  constructor(side1, side2, side3) {
    this._validate(side1, side2, side3);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    let [new1, new2, new3] = [this.side1, this.side2, this.side3].sort((a, b) => a - b);
    if (new1 === new3) {
      return 'equilateral';
    } else if (new1 === new2 || new2 === new3) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  _validate(side1, side2, side3) {
    let [new1, new2, new3] = [side1, side2, side3].sort((a, b) => a - b);
    console.log([new1, new2, new3]);
    if (new1 <= 0) throw new Error('Need all sides positive');
    if (new1 + new2 <= new3) throw new Error('Need to obey triangle inequality');
  }
}

module.exports = Triangle;