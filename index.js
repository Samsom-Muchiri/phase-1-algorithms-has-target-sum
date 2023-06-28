function hasTargetSum(array, target) {
  // Write your algorithm here
  // Create a set to store the complements of visited numbers
  const complements = new Set();

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const complement = target - num;

    // Check if the complement exists in the set
    if (complements.has(complement)) {
      return true; // Found a pair that adds up to the target
    }

    // Add the current number to the set
    complements.add(num);
  }

  // No pair found
  return false;
}

/* 
  Write the Big O time complexity of your function here

    Creating a Set: const complements = new Set(); - This operation has
    a time complexity of O(1) because it is a constant-time operation to
    create an empty Set.

    Iterating over the array: The for loop iterates over each element in 
    the array once, resulting in a linear time complexity of O(n),
    where n is the length of the array.

    Checking if a complement exists in the Set: complements.has(complement) 
    - This operation has a time complexity of O(1) on average because 
    Set lookup is generally constant-time. However, in the worst-case
    scenario, when there are many hash collisions, it can be O(n), 
    where n is the number of elements in the Set. But this is highly
      unlikely with numeric values.
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target):
    complements = new Set()
    
    for each number in array:
        complement = target - number
        if complements contains complement:
            return true
        else:
            add number to complements
    
    return false

*/

/*
  Add written explanation of your solution here

  The function iterates through the array, checking if the 
  complement of each number (target minus the current number)
   exists in the set of complements. If a pair is found, 
   it returns true. If the loop completes without finding
    a pair, it returns false.
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
