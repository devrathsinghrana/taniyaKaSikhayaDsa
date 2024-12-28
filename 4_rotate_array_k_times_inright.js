const arr = [1,2,3,4,5];
const n = arr.length;
const numOfRotations = 9;
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
    if (i === j) return;
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

  // Reverse first half of array
  let p = 0;
  let q = k - 1;
  if (p !== q) {
    while (p < k / 2 && q >= k / 2) {
      const backupValueToBeSwapped = arr[p];
      arr[p] = arr[q];
      arr[q] = backupValueToBeSwapped;
      p++;
      q--;
    }
  }

  // Reverse second half of array
  let x = k;
  let y = n - 1;
  if (x !== y) {
    while (x < k + (n - k) / 2 && y >= k + (n - k) / 2) {
      const backupValueToBeSwapped = arr[x];
      arr[x] = arr[y];
      arr[y] = backupValueToBeSwapped;
      x++;
      y--;
    }
  }

  console.log("rotatedArray by inplace>>>", arr);
}

inplaceMethod();
