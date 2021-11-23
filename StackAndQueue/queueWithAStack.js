class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// class MyQueue {
//   constructor () {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   push(value) {
//     //push as top
//     const newNode = new Node(value);

//     if (this.isEmpty()) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const currentTop = this.top;
//       this.top = newNode;
//       this.top.next = currentTop;
//     }
//     this.length++;
//   }

//   pop() {
//     const bottom = this.bottom;

//     if (this.isEmpty())
//       return null;

//     if (this.top == this.bottom) {
//       this.top = null;
//       this.bottom = null;
//     } else {
//       let prevToBottom = this.top;

//       while(prevToBottom.next != this.bottom)
//         prevToBottom = prevToBottom.next;

//       prevToBottom.next = null;
//       this.bottom = prevToBottom;
//     }
//     this.length--;
//     return bottom;
//   }

//   peek() {
//     //return bottom
//     return this.bottom;
//   }

//   isEmpty() {
//     return this.length == 0;
//   }
// }

class MyQueue {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    //push as top
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
    const bottom = this.bottom;

    if (this.isEmpty()) return null;

    if (this.top == this.bottom) {
      this.top = null;
      this.bottom = null;
    } else {
      let prevToBottom = this.top;

      while (prevToBottom.next != this.bottom) prevToBottom = prevToBottom.next;

      prevToBottom.next = null;
      this.bottom = prevToBottom;
    }
    this.length--;
    return bottom;
  }

  peek() {
    //return bottom
    return this.bottom;
  }

  isEmpty() {
    return this.length == 0;
  }
}

const myQueue = new MyQueue();
myQueue.push('1');
console.log(myQueue);
myQueue.push('2');
console.log(myQueue);
myQueue.push('3');
console.log(myQueue);
myQueue.pop();
console.log(myQueue);
myQueue.pop();
console.log(myQueue);
myQueue.pop();
console.log(myQueue);
