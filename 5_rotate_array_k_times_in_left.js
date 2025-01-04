const arr = [1,2,3,4];
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
  for (let i = k; i < n; i++) {
    rotatedArray.push(arr[i]);
  }

  for (let i = 0; i < k; i++) {
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
  const reverseArray = (inputArray, start, end) => {
    while (start < end) {
      const backupValueToBeSwapped = inputArray[start];
      inputArray[start] = inputArray[end];
      inputArray[end] = backupValueToBeSwapped;
      start++;
      end--;
    }
    //no need to return array as object is passed by reference
  };

  reverseArray(arr, 0, n - 1);

  // Reverse first half of array
  reverseArray(arr, 0, n - k - 1);

  // Reverse second half of array
  reverseArray(arr, n - k, n - 1);
  console.log("rotatedArray by inplace>>>", arr);
}

inplaceMethod();
