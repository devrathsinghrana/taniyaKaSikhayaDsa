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

const getUniqueSingleNumberInAnArray = (arrIn) =>
  arrIn.reduce((a, b) => a ^ b, 0);

console.log(getUniqueSingleNumberInAnArray(myArray));
