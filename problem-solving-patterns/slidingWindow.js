// NAIVE
// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }

//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     // NOTE We don't want to exceed the total number of
//     // items in the array, so if 'num' = 3, then we must
//     // stop third-to-last item to perform the sum calculation
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//     console.log(temp, max);
//   }

//   return max;
// }

// REFACTORED Time Complexity O(N) (linear complexity)
// NOTE Rather than re-calculating the ENTIRE sum, we
// simply move up 1, subtract the previous index value from
// our temporary sum value, then add the next/future index
// value to our sum value.
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
