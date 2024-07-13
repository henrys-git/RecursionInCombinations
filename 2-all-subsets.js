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













// Solution with Immediately Invoked Function Expression (IIFE) and explicitly declared current array

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

console.log(allSubsets([1, 7, 4])); 
console.log(allSubsets(["a","b","c"]));

function subsets(nums) {
  const result = [];

  function generateSubset(index, currentSubset) {
      // base case where we have reached the end of the array
      if (index === nums.length) {
          result.push([...currentSubset]); // make a copy of the current subset
          return;
      }

      // Exclude the current element
      generateSubset(index + 1, currentSubset);

      // Include the current element
      currentSubset.push(nums[index]); // Choose
      generateSubset(index + 1, currentSubset); // Explore
      currentSubset.pop();  // Backtrack
  }

  generateSubset(0, []); // start from the first element
  return result;
}

// Example usage:
const nums = [1, 7, 4];
const letters = ["a", "b", "c"];

console.log(subsets(nums));
console.log(subsets(letters));
