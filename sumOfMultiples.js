class SumOfMultiples {
  static to(int) {
    return new SumOfMultiples(3, 5).to(int);
  }

  constructor(...nums) {
    this.nums = nums;
  }

  to(int) {
    let sum = 0;

    for (let idx = 1; idx < int; idx++) {
      if (this.nums.some(num => idx % num === 0)) {
        sum += idx;
      }
    }
    
    return sum;
  }
}

module.exports = SumOfMultiples;