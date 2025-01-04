const myArray = [1, 2, 3, 4, 1, 2, 3];

let result = 0;
const singleNumberArray = (arrIn) => {
  const uniqueSum = new Set(arrIn);
  const totalUniqueSum = [...uniqueSum].reduce((a, b) => a + b, 0);
  const totalSum = arrIn.reduce((a, b) => a + b, 0);
  return 2 * totalUniqueSum - totalSum;
};

console.log(singleNumberArray(myArray));
