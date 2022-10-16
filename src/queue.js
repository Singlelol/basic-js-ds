const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
/*class Queue {
  constructor() {
    this.element = {};
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    return this.elements;
  }

  enqueue(value) {
    this.elements[this.tail] = value;
  }

  dequeue() {
    const i = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return i;
  }
}*/

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }

  getUnderlyingList() {
    return this.elements;
  }
}

module.exports = {
  Queue
};
