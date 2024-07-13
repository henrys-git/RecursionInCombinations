/*

Given an array of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets. Order does not matter.

Example:

Input: [1,7,4]
Output:
[
  [ 1, 7, 4 ],
  [ 1, 7 ],
  [ 1, 4 ],
  [ 1 ],
  [ 7, 4 ],
  [ 7 ],
  [ 4 ],
  []
]

*/

// Solution with Immediately Invoked Function Expression (IIFE) and explicitly declared current array, backtracking 

function allSubsets(nums) {
  const result = [];
  const current = [];

  // function to recursively generate results
  (function generate(index) {
    // base case
    if (index === nums.length) return result.push(current.slice());

    // take it
    current.push(nums[index]);
    generate(index + 1);
    // leave it
    current.pop();
    generate(index + 1);
  })(0);

  return result;
}

// Test cases
console.log("allSubsets:", allSubsets([1, 7, 4]));
console.log("allSubsets:", allSubsets(["a","b","c"]));


// Solution with explicitly invoked helper function and backtracking
function allSubsetsTwo(nums) {
  const result = [];

  function generateSubset(index, currentSubset) {
      // Base case: if we've considered all elements / reached the end of the array
      if (index === nums.length) {
          result.push([...currentSubset]); // make a copy of the current subset
          return;
      }

      // Exclude the current element (leave it)
      generateSubset(index + 1, currentSubset);

      // Include the current element (take it)
      currentSubset.push(nums[index]); // Choose
      generateSubset(index + 1, currentSubset); // Explore
      currentSubset.pop();  // Backtrack
  }

  generateSubset(0, []); // start from the first element
  return result;
}

// Test cases
console.log("allSubsetsTwo:", allSubsetsTwo([1, 7, 4]));
console.log("allSubsetsTwo:", allSubsetsTwo(["a", "b", "c"]));

// Solution with spread operator and new arrays instead of backtracking
function allSubsetsSpreadOperator(nums) {
  const result = [];

  function generateSubset(index, currentSubset) {
      // Base case: if we've considered all elements // reached the end of the array
      if (index === nums.length) {
          result.push(currentSubset); // Add the current subset to the result
          return;
      }

      // Exclude the current element (leave it)
      generateSubset(index + 1, [...currentSubset]);

      // Include the current element (take it)
      generateSubset(index + 1, [...currentSubset, nums[index]]);
  }

  generateSubset(0, []); // Start from the first element
  return result;
}

// Test cases
console.log("allSubsetsSpreadOperator:", allSubsetsSpreadOperator([1, 7, 4])); // Expected output: all subsets of [1, 7, 4]
console.log("allSubsetsSpreadOperator:", allSubsetsSpreadOperator(["a", "b", "c"])); // Expected output: all subsets of ["a", "b", "c"]