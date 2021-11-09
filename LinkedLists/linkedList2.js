class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };

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
    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);

    const previous = this.traverseToIndex(index - 1);
    const currentIndexNode = previous.next;

    previous.next = newNode;
    newNode.next = currentIndexNode;

    this.length++;
  }

  remove(index) {
    if (index >= this.length) {
      console.log('No such index');
      return;
    }

    const previous = this.traverseToIndex(index - 1);
    const currentIndexNode = previous.next;
    previous.next = currentIndexNode.next;

    this.length--;
  }

  traverseToIndex(index) {
    let count = 0;
    let node = this.head;

    while (count != index) {
      node = node.next;
      count++;
    }

    return node;
  }

  printList() {
    const values = [];
    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(values);
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);

myLinkedList.append(16);

myLinkedList.insert(2, 111);
myLinkedList.printList();

myLinkedList.insert(9, 99);
myLinkedList.printList();

myLinkedList.remove(3);
myLinkedList.printList();
