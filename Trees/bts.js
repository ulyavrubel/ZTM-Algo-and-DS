class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value == currentNode.value) return;

        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        } else {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        }
      }
    }

    return newNode;
  }

  lookup(value) {}
}

const bts = new BinarySearchTree();
bts.insert(9);
console.log(bts);
bts.insert(4);
console.log(bts);
bts.insert(20);
console.log(bts);
bts.insert(170);
console.log(bts);
