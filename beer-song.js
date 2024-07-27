class BeerSong {
  static verse(num) {
    return `${this.lineOne(num)}\n${this.lineTwo(num)}\n`;
  }

  static lineOne(num) {
    return `${this.amount(num)} ${this.plural(num)} of beer on the wall, ` +
    `${this.amountLower(num)} ${this.plural(num)} of beer.`;
  }

  static lineTwo(num) {
    let minusOne = this.numMinusOne(num);
    return `${this.whatToDo(num)}, ` +
    `${this.amountLower(minusOne)} ${this.plural(minusOne)} of beer on the wall.`;
  }

  static amount(num) {
    if (num === 0) return 'No more';
    return num.toString();
  }

  static amountLower(num) {
    return this.amount(num).toLowerCase();
  }

  static numMinusOne(num) {
    if (num === 0) return 99;
    return num - 1;
  }

  static plural(num) {
    if (num === 1) return 'bottle';
    return 'bottles';
  }

  static whatToDo(num) {
    if (num === 0) return 'Go to the store and buy some more';
    let pronoun = num === 1 ? 'it' : 'one';
    return `Take ${pronoun} down and pass it around`;
  }

  static verses(start, end) {
    let outputArr = [];

    for (let idx = start; idx >= end; idx--) {
      outputArr.push(this.verse(idx));
    }

    return outputArr.join('\n');
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;