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

console.log(allSubsets([1,7,4]));
