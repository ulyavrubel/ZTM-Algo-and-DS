class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, quantity) {
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, quantity]);

    return this.data[index];
  }

  get(key) {
    const index = this._hash(key);
    return this.data[index]?.find(([storedKey]) => storedKey == key);
  }

  keys() {
    const keys = [];

    this.data.forEach(
      (item) => item.length && item.forEach(([key]) => keys.push(key))
    );

    return keys;
  }
}

const myHashTable = new HashTable(2);

myHashTable.set('tomatos', 777);
myHashTable.set('grapes', 999);
console.log(myHashTable.get('tomatos'));
console.log(myHashTable.keys());
