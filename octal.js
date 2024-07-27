/*
inputs are strings

can regex match 0-7... if it doesn't match return 0

use stack (pop) to count digits
*/

class Octal {
  constructor(numstr) {
    this.numstr = numstr;
  }

  invalid() {
    return /[^0-7]/.test(this.numstr);
  }

  toDecimal() {
    if (this.invalid()) return 0;

    let digits = this.numstr.split('').reverse();
    let decimal = 0;

    for (let i = 0; i < digits.length; i++) {
      decimal += parseInt(digits[i], 10) * (8 ** i);
    }

    return decimal;
  }
}

module.exports = Octal;