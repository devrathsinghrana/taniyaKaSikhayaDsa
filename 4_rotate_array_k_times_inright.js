const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 234, 367, 8, 89];
const n = arr.length;
const numOfRotations = 0;
const k = numOfRotations % n;
const rotatedArray = [];
console.log("arr>>>", arr);
console.log("numOfRotations>>>", numOfRotations);
console.log("k>>>", k);
// Outplace method
function outPlaceMethod() {
  if (k === 0) {
    console.log("rotatedArray by ouplace>>>", arr);
    return;
  }
  for (let i = n - k; i < n; i++) {
    rotatedArray.push(arr[i]);
  }

  for (let i = 0; i < n - k; i++) {
    rotatedArray.push(arr[i]);
  }

  console.log("rotatedArray by ouplace>>>", rotatedArray);
}

outPlaceMethod();

// Inplace Method
function inplaceMethod() {
  if (k === 0) {
    console.log("rotatedArray by inplace>>>", arr);
    return;
  }
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

  let i = 0;
  let j = k - 1;
  while (i < k / 2 && j >= k / 2) {
    const backupValueToBeSwapped = arr[i];
    arr[i] = arr[j];
    arr[j] = backupValueToBeSwapped;
    i++;
    j--;
  }

  let y = k;
  let z = n - 1;
  while (y < n / 2 + 1 && z >= n / 2 + 1) {
    const backupValueToBeSwapped = arr[y];
    arr[y] = arr[z];
    arr[z] = backupValueToBeSwapped;
    y++;
    z--;
  }

  console.log("rotatedArray by inplace>>>", arr);
}

inplaceMethod();
