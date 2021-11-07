function getFirstRecuredItem(array) {
  const itemMap = {};

  for (let i = 0; i < array.length; i++) {
    if (itemMap[array[i]]) return array[i];
    else itemMap[array[i]] = true;
  }

  return undefined;
}

console.log(getFirstRecuredItem([2, 3, 2, 5, 5]));
