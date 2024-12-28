const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const n = arr.length;
const numOfRotations = 13;
const k = numOfRotations % n;
const rotatedArray = [];

// Outplace method
for (let i = n - k; i < n; i++) {
  rotatedArray.push(arr[i]);
}

for (let i = 0; i < n - k; i++) {
  rotatedArray.push(arr[i]);
}

console.log("rotatedArray>>>", rotatedArray);

// Inplace Method
const reverseArray = (inputArray) => {
  const n = inputArray.length;
  let i = 0;
  let j = n - 1;
  while (i < n / 2 && j >= n / 2) {
    const backupValueToBeSwapped = inputArray[i];
    inputArray[i] = inputArray[j];
    inputArray[j] = backupValueToBeSwapped;
    i++;
    j--;
  }
  //no need to return array as object is passed by reference
};

reverseArray(arr);

// Reversing first half of array

let i = 0;
let j = n / 2 - 1;
while (i < n / 2 && j >= 0) {
  const backupValueToBeSwapped = arr[i];
  arr[i] = arr[j];
  arr[j] = backupValueToBeSwapped;
  i++;
  j--;
}

// Reversing second half of array
let y = n / 2;
let z = n - 1;
while (y < n && z >= n / 2 - 1) {
  const backupValueToBeSwapped = arr[y];
  arr[y] = arr[z];
  arr[z] = backupValueToBeSwapped;
  y++;
  z--;
}

console.log("rotatedArray by inplace>>>", arr);
