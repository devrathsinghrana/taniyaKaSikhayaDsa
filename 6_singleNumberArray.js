
/*


### Code Analysis

The function `singleNumberArray` aims to identify a "single number" in an array using mathematical operations based on sums of unique and duplicate elements.

---

### **Time Complexity**

1. **Creating a `Set` (uniqueSum):**
   - The operation `new Set(arrIn)` involves iterating through the array to remove duplicates. 
   - **Time Complexity:** \( O(n) \), where \( n \) is the length of the input array.

2. **Summing the elements of the `Set`:**
   - The operation `[...uniqueSum].reduce((a, b) => a + b, 0)` iterates through the unique elements of the array.
   - In the worst case, where all elements in the array are unique, the size of the `Set` is \( n \).
   - **Time Complexity:** \( O(u) \), where \( u \) is the number of unique elements. Typically, \( u <= n \).

3. **Summing the elements of the input array:**
   - The operation `arrIn.reduce((a, b) => a + b, 0)` iterates through all \( n \) elements in the array.
   - **Time Complexity:** \( O(n) \).

4. **Arithmetic operations:**
   - The calculation `2 * totalUniqueSum - totalSum` is \( O(1) \).

---

**Total Time Complexity:**  
The overall time complexity is dominated by the \( O(n) \) operations, so the **time complexity** is:
\[ O(n) \]

---

### **Space Complexity**

1. **Space for the `Set`:**
   - A `Set` is created to store the unique elements of the input array. The size of the `Set` depends on the number of unique elements, \( u \).
   - **Space Complexity:** \( O(u) \).

2. **Space for the array spread operator (`[...uniqueSum]`):**
   - The spread operator creates a new array of unique elements from the `Set`.
   - **Space Complexity:** \( O(u) \).

3. **Intermediate variables (`totalUniqueSum` and `totalSum`):**
   - These are scalar values and do not grow with the size of the input array.
   - **Space Complexity:** \( O(1) \).

---

**Total Space Complexity:**  
The total space usage is proportional to the unique elements \( u \), so the **space complexity** is:
\[ O(u) \]

---

### **Final Answer**
- **Time Complexity:** \( O(n) \)
- **Space Complexity:** \( O(u) \), where \( u <= n \).
*/
const myArray = [1, 2, 3, 4, 1, 2, 3];

let result = 0;
const singleNumberArray = (arrIn) => {
  const uniqueSum = new Set(arrIn);
  const totalUniqueSum = [...uniqueSum].reduce((a, b) => a + b, 0);
  const totalSum = arrIn.reduce((a, b) => a + b, 0);
  return 2 * totalUniqueSum - totalSum;
};

console.log(singleNumberArray(myArray));

// Bitwise XOR returns 0 for same numbers - so it negates all the duplicates and give the only unique number in array

/*
The function getUniqueSingleNumberInAnArray utilizes the XOR (^) operator to find a unique number in an array. XOR has the property that:

𝑎
⊕
𝑎
=
0
a⊕a=0 (any number XORed with itself is 0).
𝑎
⊕
0
=
𝑎
a⊕0=a (any number XORed with 0 remains unchanged).
XOR is commutative and associative, so the order of operations doesn't matter.
This approach effectively cancels out all duplicate numbers, leaving only the unique number.

Time Complexity
Iterating through the array:

The reduce function iterates through all 
𝑛
n elements of the array, applying the XOR operation.
Time Complexity: 
𝑂
(
𝑛
)
O(n).
XOR operation:

The XOR operation itself is a constant time operation (
𝑂
(
1
)
O(1)).
Since it's applied 
𝑛
−
1
n−1 times (once for each pair), this does not increase the time complexity.
Total Time Complexity: 
𝑂
(
𝑛
)
O(n)

Space Complexity
Intermediate results during the reduce operation:
The reduce function uses constant space to store intermediate results during the XOR operation.
Space Complexity: 
𝑂
(
1
)
O(1).
Total Space Complexity: 
𝑂
(
1
)
O(1)

Final Answer
Time Complexity: 
𝑂
(
𝑛
)
O(n)
Space Complexity: 
𝑂
(
1
)
O(1)
This implementation is both time and space efficient compared to the first approach, making it an optimal solution for finding a unique single number in an array where every other number appears twice.
*/

const getUniqueSingleNumberInAnArray = (arrIn) =>
  arrIn.reduce((a, b) => a ^ b, 0);

console.log(getUniqueSingleNumberInAnArray(myArray));
