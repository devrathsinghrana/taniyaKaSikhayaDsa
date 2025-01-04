/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
*/

/*
Time Complexity:
Outer for loop:

The for loop runs from i = 0 to i <= arrIn.length, i.e., n + 1 iterations in the worst case.
includes() method inside the loop:

The includes() method is called for each iteration of the loop.
The time complexity of includes() is 
𝑂
(
𝑛
)
O(n) because it performs a linear search through the array.
Overall time complexity:

The worst-case scenario occurs when the missing number is at the very end of the range, requiring all iterations of the loop.
In each iteration, the includes() method runs for 
𝑂
(
𝑛
)
O(n).
Total time complexity:
𝑂
(
(
𝑛
+
1
)
×
𝑛
)
=
𝑂
(
𝑛
2
)
O((n+1)×n)=O(n 
2
 )
Space Complexity:
Input array:

The input array is passed as a parameter, but it does not consume additional memory beyond its original size.
Variables:

The function uses only a few variables (n, i), which require 
𝑂
(
1
)
O(1) space.
No additional data structures:

No extra space is allocated.
Overall space complexity:

𝑂
(
1
)
O(1)
Final Complexity:
Time Complexity: 
𝑂
(
𝑛
2
)
O(n 
2
 )
Space Complexity: 
𝑂
(
1
)
O(1)
*/
const missingNumber = function (arrIn) {
  let n = arrIn.length;
  for (let i = 0; i <= n; i++) {
    if (!arrIn.includes(i)) return i;
  }
};

console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
Time Complexity:
The function uses a loop that iterates from i = 0 to i = n, where n is the length of the input array arrIn.
Inside the loop, it performs constant-time operations like additions and comparisons (totalSumOfRange += i and totalSumOfValuesOfInputArray += arrIn[i]).
The loop runs n+1 times, so the overall time complexity is O(n).
Space Complexity:
The function uses a constant amount of extra space, except for the input array arrIn.
The variables n, totalSumOfRange, and totalSumOfValuesOfInputArray are all scalars that take constant space.
Therefore, the space complexity is O(1) (constant space).
Summary:
Time Complexity: O(n)
Space Complexity: O(1)
*/
const missingNumberBySum = function (arrIn) {
  let n = arrIn.length;
  let totalSumOfRange = 0;
  let totalSumOfValuesOfInputArray = 0;
  for (let i = 0; i <= n; i++) {
    totalSumOfRange += i;
    if (i === n) break;
    totalSumOfValuesOfInputArray += arrIn[i];
  }
  return totalSumOfRange - totalSumOfValuesOfInputArray;
};

console.log(missingNumberBySum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
