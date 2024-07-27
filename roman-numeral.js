/*
all inputs integer

[I, V, X, L, C, D, M] = [1, 5, 10, 50, 100, 500, 1000]

data structure: include values for 4, 9, 40, 90, 400, 900

for each key in data structure:
  subtract corresponding value until you can't anymore
*/

class RomanNumeral {
  static NUMERAL_VALUES = {
    m: 1000,
    cm: 900,
    d: 500,
    cd: 400,
    c: 100,
    xc: 90,
    l: 50,
    xl: 40,
    x: 10,
    ix: 9,
    v: 5,
    iv: 4,
    i: 1
  }

  constructor(int) {
    this.value = int;
  }

  toRoman() {
    let val = this.value;
    let roman = '';
    for (let key in RomanNumeral.NUMERAL_VALUES) {
      let keyVal = RomanNumeral.NUMERAL_VALUES[key];
      while (val >= keyVal) {
        roman += key.toUpperCase();
        val -= keyVal;
      }
    }

    return roman;
  }
}

module.exports = RomanNumeral;