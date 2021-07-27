// function sumZero(arr) {
//   // === MY SOLUTION
//   // NOTE arr must be sorted of this doesn't work!
//   // Need to create my two pointers
//   let leftPointer = 0;
//   let rightPointer = arr.length - 1;

//   // Want to loop over arr while these pointer indices don't match
//   // NOTE If pointers indices match then return undefined as there is no pair
//   // that sums to zero.
//   while (leftPointer < rightPointer) {
//     console.log("leftPointer: ", leftPointer);
//     console.log("rightPointer: ", rightPointer);
//     // Q: Need a another for loop? Don't think so...
//     // A: Nope!
//     if (arr[leftPointer] + arr[rightPointer] == 0) {
//       console.log(`We have a pair! ${[arr[leftPointer], arr[rightPointer]]}`);
//       return [arr[leftPointer], arr[rightPointer]];
//     }
//     // Check whether the sum is negative or positive to determine
//     // whether to increment/decrement the pointers
//     // E.g., if negative, then increment LEFT
//     if (arr[leftPointer] + arr[rightPointer] < 0) {
//       leftPointer += 1;
//     }
//     // E.g., if positive, then decrement RIGHT
//     if (arr[leftPointer] + arr[rightPointer] > 0) {
//       rightPointer -= 1;
//     }
//   }
//   console.log("No pair exists that sums to zero! Returning undefined");
//   console.log("leftPointer: ", leftPointer);
//   console.log("rightPointer: ", rightPointer);
//   return undefined;

//   // // === COLT'S SOLUTION
//   // let left = 0;
//   // let right = arr.length - 1;
//   // while (left < right) {
//   //   let sum = arr[left] + arr[right];
//   //   if (sum === 0) {
//   //     console.log(`We have a pair! ${[arr[left], arr[right]]}`);
//   //     return [arr[left], arr[right]];
//   //   } else if (sum > 0) {
//   //     right--;
//   //   } else {
//   //     left++;
//   //   }
//   //   console.log("leftPointer: ", left);
//   //   console.log("rightPointer: ", right);
//   // }
// }

// // sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
// sumZero([-2, 0, 1, 3]); // undefined

// MY FAILED ATTEMPT!
// function countUniqueValues(arr) {
//   // NOTE arr is sorted!
//   // E.g. [1, 1, 1, 3] => 2
//   // E.g. [-4, -2, 0, 5, 5, 5, 6] => 5
//   // NOTE The objective is to use the two pointers to solve,
//   // but I also think you could make an object and count keys

//   // We're going to need two pointers. One will be from the loop,
//   // the other I need to create.
//   let j = 1;

//   // Going to have result variable to keep count of unique values
//   let uniqueCount = 0;

//   for (let i in arr) {
//     // Make sure j stays within limits
//     if (j > arr.length - 1) {
//       j = arr.length - 1;
//     }

//     let x = arr[i];
//     let y = arr[j];

//     if (x === y) {
//       console.log("EQUAL: ", x, y, "uniqueCount: ", uniqueCount);
//       // Check whether uniqueCount is still zero
//       if (uniqueCount === 0) {
//         uniqueCount += 1;
//       }
//       // Check whether previous x equals previous i index value
//       // If it does not, then we have another unique value
//       if (x !== arr[i - 1]) {
//         console.log("x !== arr[i - 1]", arr[i - 1]);
//         uniqueCount += 1;
//         console.log("Adding one to uniqueCount: ", uniqueCount);
//       }
//       // If it does, then we finish current iteration without adding to count
//       if (x === arr[i - 1]) {
//         console.log("x === arr[i - 1]", arr[i - 1]);
//         console.log("Continuing. Not adding to count: ", uniqueCount);
//         // NOTE continue will exit current iteration, so need to increment
//         // j pointer!
//         j++;
//         continue;
//       }
//     } else if (x !== y) {
//       uniqueCount += 1;
//       console.log("NOT EQUAL:", x, y, "uniqueCount: ", uniqueCount);
//     }

//     // Increment our j pointer
//     j++;
//   }

//   console.log("FINAL uniqueCount: ", uniqueCount);
// }

// COLT'S SOLUTION
function countUniqueValues(arr) {
  // NOTE The high-level summary is that he compares the two pointers,
  // and when there is not a match, he increments i++ to move up one index,
  // and then he takes the value of the front pointer (arr[j]) and inserts
  // it (mutates the arr) at i's new index.
  // NOTE E.g. [1,1,2,3,3,4,5,6,6,7] => [1,2,3,4,5,6,7,6,6,7], where i ends up
  // at the first 7, and j ends up at last 7. We then just want the array up to
  // and including i, => [1,2,3,4,5,6,7].
  // Check that an empty array returns zero
  if (arr.length === 0) return 0;
  // NOTE Interesting he reversed the pointers
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      // Increment i
      i++;
      // Insert the value of front pointer (arr[j]) at new i index
      // NOTE Mutating the array!
      arr[i] = arr[j];
    }
  }
  // Our final i index position includes the last unique count value
  // So since we're 0 based index, need to add 1 to get the full count
  return i + 1;
}

// ANOTHER SOLUTION USING SETS
// NOTE Apparently still O(n) time complexity but a little slower than for loop
function countUniqueValues(arr) {
  return new Set(arr).size;
}

// countUniqueValues([1, 1, 1, 1, 2]);
//countUniqueValues([]);
// countUniqueValues([-2, -1, -1, 0, 1]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
