const arr = [1,2,3];
const n = arr.length;
const numOfRotations = 3;
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
