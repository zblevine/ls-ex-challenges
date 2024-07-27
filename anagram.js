class Anagram {
  static reorder(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  constructor(word) {
    this.word = word;
  }

  match(wordArr) {
    return wordArr.filter(word => this.matchWord(word));
  }

  matchWord(newWord) {
    if (this.word.toLowerCase() === newWord.toLowerCase()) return false;
    return Anagram.reorder(this.word) === Anagram.reorder(newWord);
  }
}

module.exports = Anagram;