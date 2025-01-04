const singleNumber = function (arrIn) {
  const arrayValuesSum = arrIn.reduce((a, b) => a + b, 0);
  const uniqueArrayValuesSum = [...new Set(arrIn)].reduce((a, b) => a + b, 0);
  return (3 * uniqueArrayValuesSum - arrayValuesSum) / 2;
};

console.log(singleNumber([1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 4, 4, 5]));
