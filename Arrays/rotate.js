// Given an array, rotate the array to the right by k steps, where k is non-negative.

function rotate(nums, k) {
  k = k % nums.length;
  const last = nums.splice(-k);
  nums.splice(0, 0, ...last);
  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 3));
