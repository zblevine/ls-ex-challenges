class Series {
  constructor(digits) {
    this.digits = digits;
  }

  slices(sliceLen) {
    let totalLength = this.digits.length;
    if (sliceLen > totalLength) throw new Error('slices are too long!');

    let sliceArr = [];
    let digitArr = this.digits.split('').map(digit => parseInt(digit, 10));
    
    for (let idx = 0; idx <= totalLength - sliceLen; idx++) {
      sliceArr.push(digitArr.slice(idx, idx + sliceLen));
    }

    return sliceArr;
  }
}

module.exports = Series;