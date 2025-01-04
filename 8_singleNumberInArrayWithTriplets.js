/*
Time Complexity:
arrIn.reduce((a, b) => a + b, 0):

This reduces the array by iterating over all elements once.
Time complexity: O(n), where n is the number of elements in the input array arrIn.
[...new Set(arrIn)]:

Creating a Set removes duplicates, and the spread operator creates a new array.
This also requires iterating over the input array to remove duplicates.
Time complexity: O(n) for iterating over arrIn, and in the worst case, it could take O(n) for creating the unique array if no duplicates are removed.
.reduce((a, b) => a + b, 0) on the unique array:

This reduces the array of unique elements.
Time complexity: O(k), where k is the number of unique elements in the array, and in the worst case, k can be equal to n (when all elements are unique).
So, the overall time complexity is dominated by the operations involving iterating over the array, and it will be O(n).

Space Complexity:
new Set(arrIn):

A set is created to store unique values, which could be up to n elements in the worst case (when all elements in the array are unique).
Space complexity: O(n) for the set.
The spread operator [...new Set(arrIn)] creates a new array, which will also take O(n) space in the worst case.

Thus, the space complexity is O(n), primarily due to the space required to store the set and the unique array.

Summary:
Time Complexity: O(n)
Space Complexity: O(n)
*/

const singleNumber = function (arrIn) {
  const arrayValuesSum = arrIn.reduce((a, b) => a + b, 0);
  const uniqueArrayValuesSum = [...new Set(arrIn)].reduce((a, b) => a + b, 0);
  return (3 * uniqueArrayValuesSum - arrayValuesSum) / 2;
};

console.log(singleNumber([1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 4, 4, 5]));
