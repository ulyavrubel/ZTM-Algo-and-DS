class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const currentTop = this.top;
      this.top = newNode;
      this.top.next = currentTop;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.top == this.bottom) {
      this.bottom = null;
    }

    const currentTop = this.top;
    this.top = this.top.next;
    this.length--;
    return currentTop;
  }

  isEmpty() {
    return !this.bottom;
  }
}

const myStack = new Stack();

console.log(myStack);

console.log(myStack.isEmpty());
myStack.push('first');
console.log(myStack);

myStack.push('second');
console.log(myStack);

myStack.push('third');
console.log(myStack);
console.log(myStack.peek());

myStack.pop();
console.log(myStack);

myStack.pop();
console.log(myStack);

myStack.pop();
console.log(myStack);
