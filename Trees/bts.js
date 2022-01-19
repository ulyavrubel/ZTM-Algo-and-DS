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

  lookup(value) {
    if (this.root) {
      let currentNode = this.root;

      while (currentNode) {
        if (value == currentNode.value) return currentNode;
        else if (value > currentNode.value) currentNode = currentNode.right;
        else if (value < currentNode.value) currentNode = currentNode.left;
      }
    }

    return undefined;
  }

  remove(value) {
    if (!this.root) return undefined;

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value == value) {
        // Option 1: no right child
        if (!currentNode.right) {
          if (!parentNode)
            //if current node is root
            this.root = currentNode.left;
          else {
            //if parent > cur value, make cur left child a child of parent
            if (currentNode.value < parentNode.value)
              parentNode.left = currentNode.left;
            //if parent < cur value, make left child the right child of parent
            else if (currentNode.value > parentNode.value)
              parentNode.right = currentNode.left;
          }
        } else if (!currentNode.right.left) {
          // Option 2: there is right child, which does not have left child
          if (!parentNode) this.root = currentNode.left;
          else {
            currentNode.right.left = currentNode.left;

            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } else {
          //Option 3: right child which has a left child
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }

        return value;
      }
    }
  }
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
