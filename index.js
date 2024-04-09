function hasTargetSum(array, target) {
  // Create an empty set to store numbers encountered so far
  let seenNumbers = new Set();
  // Iterate through the array
  for (let num of array) {
    // Calculate the complement needed to reach the target with the current number
    let complement = target - num;
    // Check if the complement (needed number to achieve the target) exists in the seenNumbers set
    if (seenNumbers.has(complement)) {
      // If complement exists in the set, we found a pair that sums up to the target
      return true;
    }
    // Add the current number to the seenNumbers set
    seenNumbers.add(num);
  }
  // If no pair is found after iterating through the entire array, return false
  return false;
}

// Write the Big O time complexity of your function here
// This would be linear as it iterates through each.

//Psuedocode
function hasTargetSum(array, target):
    // Create an empty set to store seen numbers
    seenNumbers = new Set()

    // Iterate through each number 'num' in the array
    for num in array:
        // Calculate the complement needed to reach the target sum with 'num'
        complement = target - num
        
        // Check if the complement exists in the 'seenNumbers' set
        if complement is in seenNumbers:
            // If the complement exists, a pair (num, complement) sums up to the target
            return true
        
        // Add 'num' to the 'seenNumbers' set
        seenNumbers.add(num)

    // If no such pair is found in the array, return false
    return false

// Add written explanation of your solution here
// In summary, the hasTargetSum function uses a set (seenNumbers) to keep track of numbers as it goes through the array. For each number in the array, it calculates the complement needed to reach the target sum. If this complement has been seen before (stored in the set), it means a pair of numbers in the array adds up to the target, and the function returns true. If no such pair is found after checking all numbers in the array, the function returns false. This function is a practical example of how data structures like sets can be used to efficiently solve problems in programming.

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
