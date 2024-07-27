class Clock {
  static at(hr, min = 0) {
    return new Clock(hr, min);
  }

  static mod(n, m) {
    return ((n % m) + m) % m;
  }

  constructor(hr, min) {
    this.hr = hr;
    this.min = min;
  }

  toString() {
    let hourString = this.hr < 10 ? `0${this.hr}` : this.hr.toString();
    let minString = this.min < 10 ? `0${this.min}` : this.min.toString();
    return `${hourString}:${minString}`;
  }

  add(num) {
    let totalMin = this.hr * 60 + this.min;
    let newTotal = Clock.mod(totalMin + num, 1440)
    return new Clock(Math.floor(newTotal / 60), Clock.mod(newTotal, 60));
  }

  subtract(num) {
    return this.add(-1 * num);
  }

  isEqual(clock2) {
    return this.hr === clock2.hr && this.min === clock2.min;
  }
}

module.exports = Clock;