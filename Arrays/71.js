function mergeSorted(array1, array2) {
  const result = [];
  let j = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] <= array2[j] || !array2[j]) {
      result.push(array1[i]);
    } else {
      result.push(array2[j]);
      j++;
      i--;
    }
  }

  return [...result, ...array2.slice(j)];
}

console.log(
  mergeSorted([0, 3, 4, 31, 60, 66, 75, 80, 900], [4, 6, 30, 90, 100])
);
