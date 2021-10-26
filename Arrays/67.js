class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const itemToDelete = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return itemToDelete;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new MyArray();

console.log(arr);

arr.push('1');
arr.push('ds');
arr.push('7');
console.log(arr);

arr.delete(1);
console.log(arr);
