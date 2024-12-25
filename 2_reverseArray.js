const arr = [1, 2, 3, 4, 5];
const revArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  revArr.push(arr[i]);
}

console.log("revArr>>>", revArr);
