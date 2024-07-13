/*
  You are given a positive integer target.

  Return an array of all arrays of ordered (ascending) positive integers that sum up to the target.

  The arrays can be provided in any order.

  Example:
  partitionNumber(3) ->
  [
    [1, 1, 1],
    [1, 2],
    [3]
  ]

  partitionNumber(4) ->
  [
    [1, 1, 1, 1],
    [1, 1, 2],
    [1, 3],
    [2, 2],
    [4]
  ]

  The inner arrays must have ascending numbers, but can be provided in any order.

*/













function partitionNumber(num) {
  const result = [];
  const current = [];

  // recursive function to generate results
  (function generate(count = 1, target = num) {
    // base cases
    // found valid partition
    if (target === 0) {
      return result.push(current.slice());
    }
    // not valid path
    if (target < count) {
      return;
    }

    // take it
    current.push(count);
    generate(count, target - count);

    //leave it
    current.pop();
    generate(count + 1, target);
  })();

  return result;
}

console.log(partitionNumber(3));
console.log(partitionNumber(4));
