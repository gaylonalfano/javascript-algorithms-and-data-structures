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

// = MY ATTEMPT
// function minSubArrayLen(arr, num) {
//   let minLen = 0;
//   let tempSum = 0;

//   if (!arr) return 0;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//       minLen = 1;
//       return minLen;
//     }

//     while (num > tempSum) {
//       tempSum = tempSum + arr[i];
//     }
//   }
// }

// = COLT'S SOLUTION
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
