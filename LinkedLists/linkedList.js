class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    this.length++;
  }

  prepend(value) {
    const currentHead = this.head;
    this.head = new Node(value);
    this.head.next = currentHead;
    this.length++;
  }

  insert(index, value) {
    let node = this.head;
    let previous;

    while (index > 0) {
      previous = node;
      node = node.next;
      index--;
    }

    const newNode = new Node(value);
    previous.next = newNode;
    newNode.next = node;

    this.length++;
  }

  printList() {
    const values = [];
    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList);
myLinkedList.append(5);
console.log(myLinkedList);
myLinkedList.append(16);
console.log(myLinkedList);
myLinkedList.insert(2, 111);
myLinkedList.printList();
console.log(JSON.stringify(myLinkedList, null, 4));
