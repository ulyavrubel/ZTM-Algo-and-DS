class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this.last;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.first == this.last) {
      this.last = null;
    }

    const currentFirst = this.first;
    this.first = currentFirst.next;

    this.length--;
    return currentFirst;
  }

  isEmpty() {
    return this.length == 0;
  }
}

const myQueue = new Queue();

console.log(myQueue);

console.log(myQueue.isEmpty());
myQueue.enqueue('first');
console.log(myQueue);

myQueue.enqueue('second');
console.log(myQueue);

myQueue.enqueue('third');
console.log(myQueue);
console.log(myQueue.peek());

myQueue.dequeue();
console.log(myQueue);

myQueue.dequeue();
console.log(myQueue);

myQueue.dequeue();
console.log(myQueue);
