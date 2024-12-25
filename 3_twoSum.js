/*

input -> [1,2,3]
target -> 4

[0,2]

*/

const getTwoSumArray = (inputArr, target) => {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = inputArr.length - 1; j >= 0; j--) {
      if (j === i) {
        break;
      }
      if (inputArr[i] + inputArr[j] === target) return [i, j];
    }
  }
  return "Enter valid parameters";
};

const twoSumArr = getTwoSumArray([1, 2, 3, 4], 3);

console.log("twoSumArr>>>", twoSumArr);
