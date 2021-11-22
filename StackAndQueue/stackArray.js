class ArrayStack {
  constructor() {
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    this.stack.pop();
  }

  isEmpty() {
    return this.length == 0;
  }
}

const myStack = new ArrayStack();

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
