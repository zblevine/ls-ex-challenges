class PerfectNumber {
  static classify(num) {
    if (num < 0) throw new Error();

    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) sum += i;
    }

    if (sum === num) return 'perfect';
    if (sum < num) return 'deficient';
    return 'abundant';
  }
}

module.exports = PerfectNumber;