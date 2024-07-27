/*
PE
idea: compute distance between two strings. if they are not of equal length, cut off the longer one. "distance" +1 for every mismatched pair

DA
cut off longer string at equal length of shorter one
for each element of the two strings:
  add 1 to distance count if different
*/

class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }

  hammingDistance(argSequence) {
    let length = Math.min(argSequence.length, this.sequence.length);
    let count = 0;
    for (let i = 0; i < length; i++) {
      if (this.sequence[i] !== argSequence[i]) {
        count++;
      }
    }

    return count;
  }
}

module.exports = DNA;