function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (const num of array) {
    const difference = target - num;
    if (seenNumbers.has(difference)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

/* 
Big O time complexity: O(n)
 - The function iterates through the array once, making it linear time.
*/

/* 
Pseudocode:
1. Initialize an empty Set (seenNumbers) to keep track of numbers seen.
2. Loop through the array.
3. For each number in the array, calculate the difference (target - num).
4. Check if the difference exists in seenNumbers. If yes, return true.
5. If not, add the current number to seenNumbers.
6. If the loop finishes without finding a pair, return false.
*/

/*
Explanation:
- The function uses a Set to efficiently keep track of numbers seen, allowing for a quick lookup to find pairs.
- It iterates through the array once, making it a linear time algorithm (O(n).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
