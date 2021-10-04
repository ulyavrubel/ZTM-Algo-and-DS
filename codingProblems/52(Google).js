// How to: Work at Google — Example Coding/Engineering Interview
// https://www.youtube.com/watch?v=XKu_SEDAykw

// 1. sorted array

// function findTwoNumbers(array, sum) {
//   let result = [];
//   let min = 0;
//   let max = array.length -1;

//   while (min < max) {
//     console.log(min, max)
//     if (array[min] + array[max] == sum) {
//       result = [array[min], array[max]];
//       break;
//     }

//     if (array[min] + array[max] > sum)
//       max--;

//     if (array[min] + array[max] < sum)
//       min++;
//   }

//   return result;
// }

// console.log(findTwoNumbers([7, 2, 3, 4], 5))

// 2. array is not sorted

function findTwoNumbers(array, sum) {
  let differences = new Set();

  for (let i = 0; i < array.length; i++) {
    if (differences.has(array[i])) return true;

    differences.add(sum - array[i]);
  }

  return false;
}

console.log(findTwoNumbers([7, 2, 3, 4], 5));
