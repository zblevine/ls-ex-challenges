/*
every line ends in \n

can recursively do top and bottom
diamond bottom: add space on left and right
can keep rows as array to more easily add spaces
*/

class Diamond {
  static letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(char) {
    let idx = Diamond.letters.indexOf(char) + 1;
    return Diamond.makeTopArray(idx)
      .concat(Diamond.makeBottomArray(idx))
      .join('\n') + '\n';
  }

  static makeTopArray(charIdx) {
    if (charIdx === 1) return ['A'];
    let letter = Diamond.letters[charIdx - 1];
    return Diamond.makeTopArray(charIdx - 1)
      .map(str => ` ${str} `)
      .concat([`${letter}${' '.repeat((charIdx * 2) - 3)}${letter}`]);
  }

  static makeBottomArray(charIdx) {
    if (charIdx === 1) return [];
    return Diamond.makeTopArray(charIdx - 1)
      .reverse()
      .map(str => ` ${str} `);
  }
}

module.exports = Diamond;