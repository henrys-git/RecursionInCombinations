/*

You are given an array of integers and a target number. Write a function that
returns true if there is a subset of the array that sums up to the target and
returns false otherwise A subset can be any size and the elemnts do not have
to appear consecutively in the array.

Positive, negative, and zero allowed. Some numbers may be duplicated.

subsetSum([3, 7, 4, 2], 5) -> true (3 + 2)
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12)
subsetSum([8, 2, 4, 12], 13) -> false
subsetSum([8, -2, 1, -3], 6) -> true (8 + 1 + -3)

subsetSum([7, 2, 3], 0) -> true (a subset can be of size zero)
subsetSum([], 0) -> true
subsetSum([-4], -4) -> true

*/




function subsetSum(nums, target) {
  // base cases
  if (target === 0) return true;
  if (!nums.length) return false;

  return (subsetSum(nums.slice(1), target - nums[0]) // take it
          || // or
          subsetSum(nums.slice(1), target)); // leave it
}











function subsetSumOptimized(nums, target, index = 0) {
  // base cases
  if (target === 0) return true;
  if (index === nums.length) return false;

  return (subsetSum(nums, target - nums[index], index + 1) // take it
          || // or
          subsetSum(nums, target, index + 1)); // leave it
}






// TESTS
console.log(subsetSum([3, 7, 4, 2], 5)) // -> true (3 + 2)
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true (3 + 12 + 5 + 12)
console.log(subsetSum([8, 2, 4, 12], 13)) // -> false
console.log(subsetSum([8, -2, 1, -3], 6)) // -> true (8 + 1 + -3)

console.log(subsetSum([7, 2, 3], 0)) // -> true (a subset can be of size zero)
console.log(subsetSum([], 0)) // -> true
console.log(subsetSum([-4], -4)) // -> true
