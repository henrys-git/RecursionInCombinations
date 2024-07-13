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

// Time complexity - O(2^n) - the decision tree has 2 branches at each node
// Space complexity - O(n^2) - because the slice operation creates a new array at each recursive call and the maximum depth of the decision tree is n

function subsetSum(nums, target) {
  // base cases
  if (target === 0) return true; // found a subset that sums up to target - running target on decision tree is 0
  if (!nums.length) return false; // no more numbers to consider - running nums array n decision tree is empty


  // uses short-circuiting to return true if either of the two recursive calls returns true
  // if the first recursive call returns true, the second one is not executed
  // if the first recursive call returns false, the second one is executed
  // this allows us to traverse the decision tree in a depth-first manner
  // the second option is what is driving the traversal, so if we reach a true - traversal stops

  return (subsetSum(nums.slice(1), target - nums[0]) // take it
          || // or
          subsetSum(nums.slice(1), target)); // leave it
}


/* Optimized version - no need to slice the array. uses an index parameter to keep track of the current position 
in the array. This avoids the need to create new arrays during each recursive call.
*/

function subsetSumOptimized(nums, target, index = 0) {
  // base cases
  if (target === 0) return true;
  if (index === nums.length) return false;

  return (subsetSumOptimized(nums, target - nums[index], index + 1) // take it
          || // or
          subsetSumOptimized(nums, target, index + 1)); // leave it
}


// Time complexity - O(2^n) - the decision tree has 2 branches at each node
// Space complexity - O(n) - the maximum depth of the decision tree is n




// TESTS
console.log(subsetSum([3, 7, 4, 2], 5)) // -> true (3 + 2)
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true (3 + 12 + 5 + 12)
console.log(subsetSum([8, 2, 4, 12], 13)) // -> false
console.log(subsetSum([8, -2, 1, -3], 6)) // -> true (8 + 1 + -3)

console.log(subsetSum([7, 2, 3], 0)) // -> true (a subset can be of size zero)
console.log(subsetSum([], 0)) // -> true
console.log(subsetSum([-4], -4)) // -> true
