function hasTargetSum(array, target) { 
  if (array.length < 2) {
    return false;
}
const seenNumbers = new Set();
for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) {
        return true;
    }
    seenNumbers.add(number);
}
return false;
}
  // Write your algorithm here
  /* 
   - We are given an array of integers and a target integer
   - Our goal is to determine if any two numbers in the array sum up to the target integer 
   - If they do, we return true otherwise, we return false 
   */

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. Create an empty set (or lash map)
  2. Loop through the array 
  3. For each element calculate the diffrence between 
  the target and the current element (i.e target - currentElement)
  4. Check if this diffrence is already in the set 
  5. If it is, return true 
  6. If not, add the current element to the set and continue
  7. If no pair is found by the end, return false 
  function hasTargetSum(array , target)
    create a new set seenNumbers
    for each number in array 
      complement = target - number 
      if complement is in seenNumbers 
        return true 
        add number to seenNumbers 
        return false 
  */

/*
  Add written explanation of your solution here
  - O(n) because you only loop through the array once, and checking or adding elements 
  to a set happens in constant time (O(1))
  - O(n) because you're storing up to n elements in the set, where n is the number of elements in the array 
*/

// You can run `node index.js` to view these console logs
//if (require.main === module) {
  // add your own custom tests in here
  hasTargetSum([3, 8, 12, 4, 11, 7], 10)
  hasTargetSum([22, 19, 4, 6, 30], 25)
  hasTargetSum([1, 2, 5], 4)
  hasTargetSum([], 4)
  hasTargetSum([1, 2, 3], 6)
  hasTargetSum([10, -2, 4, 2], 8)
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));


module.exports = hasTargetSum;