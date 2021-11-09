class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    const currentTail = this.tail;

    currentTail.next = newNode;
    newNode.previous = currentTail;
    this.tail = newNode;

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    const currentHead = this.head;

    currentHead.previous = newNode;
    newNode.next = currentHead;
    this.head = newNode;

    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);

    const currentIndexNode =
      index < this.length / 2
        ? this.traverseToIndex(index)
        : this.traverseToIndexReversed(index);

    const previousNode = currentIndexNode.previous;

    previousNode.next = newNode;
    newNode.previous = previousNode;

    newNode.next = currentIndexNode;
    currentIndexNode.previous = newNode;

    this.length++;
  }

  remove(index) {
    if (index >= this.length) {
      console.log('No such index');
      return;
    }

    const currentIndexNode =
      index < this.length / 2
        ? this.traverseToIndex(index)
        : this.traverseToIndexReversed(index);

    const previousNode = currentIndexNode.previous;
    const nextNode = currentIndexNode.next;

    previousNode.next = nextNode;
    nextNode.previous = previousNode;

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

  traverseToIndexReversed(index) {
    let count = 0;
    let node = this.tail;

    while (count < this.length - index - 1) {
      node = node.previous;
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

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(7);
myLinkedList.insert(2, 678);

myLinkedList.printList();

// myLinkedList.append(16)

// myLinkedList.insert(2, 111)
// myLinkedList.printList()

// myLinkedList.insert(9, 99)
// myLinkedList.printList()

// myLinkedList.remove(3)
// myLinkedList.printList()
