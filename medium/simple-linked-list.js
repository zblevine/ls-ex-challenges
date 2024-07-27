class Element {
  constructor(data, nextEle = null) {
    this.data = data;
    this.nextEle = nextEle;
  }

  datum() {
    return this.data;
  }

  next() {
    return this.nextEle;
  }

  isTail() {
    return this.next() === null;
  }
}

class SimpleLinkedList {
  static fromArray(arr) {
    let list = new SimpleLinkedList();
    if (!arr || !(arr.length)) return list;

    for (let idx = arr.length - 1; idx >= 0; idx--) {
      list.push(arr[idx]);
    }

    return list;
  }

  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(datum) {
    if (this.isEmpty()) {
      this.list.unshift(new Element(datum));
    } else {
      this.list.unshift(new Element(datum, this.list[0]));
    }
  }

  head() {
    if (this.isEmpty()) return null;
    return this.list[0];
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.list[0].datum();
  }

  pop() {
    return this.list.shift().datum();
  }

  toArray() {
    let arr = [];
    if (this.isEmpty()) return arr;

    let currElement = this.head();
    while (true) {
      arr.push(currElement.datum());
      if (currElement.isTail()) break;
      currElement = currElement.next();
    }

    return arr;
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }
}

module.exports = { SimpleLinkedList, Element };