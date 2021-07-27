// function same(arr1, arr2) {
//   // Returns bool.
//   // Every value in arr1 has its corresponding value squared
//   // in arr2. Frequency of values must be the same.
//   // E.g., same([1,2,3], [4,1,9]) // true
//   // E.g., same([1,2,1], [4,4,1]) // false
//   // === NAIVE SOLUTION (Time Complexity = N^2 (quadratic time!))
//   // if (arr1.length !== arr2.length) {
//   //   return false;
//   // }

//   // for (let i = 0; i < arr1.length; i++) {
//   //   let correctIndex = arr2.indexOf(arr1[i] ** 2);
//   //   if (correctIndex === -1) {
//   //     return false;
//   //   }
//   //   console.log(arr2);
//   //   arr2.splice(correctIndex, 1);
//   // }
//   // return true;

//   // === REFACTORED Frequency Pattern (O^N Complexity)
//   // NOTE It's technically 3N (N is length of arrays)
//   // If arr.length is 1000, it's still better than nested loops (1000**1000)
//   // NOTE With Frequency Pattern you usually use an Object for fast retrieval
//   // to break down content of Array, then you can compare to other Objects
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// same([1, 2, 3, 2], [9, 1, 4, 4]);

// function validAnagram(s1, s2) {
//   // === MY SOLUTION
//   // E.g., cinema iceman true
//   // Check that args are equal length
//   if (s1.length !== s2.length) {
//     console.log("Not the same length!");
//     return false;
//   }

//   let frequencyCounterS1 = {};
//   let frequencyCounterS2 = {};

//   // Loop through args and build counters
//   for (let val of s1) {
//     // Init to 1 or increment by 1
//     frequencyCounterS1[val] = (frequencyCounterS1[val] || 0) + 1;
//   }
//   for (let val of s2) {
//     // Init to 1 or increment by 1
//     frequencyCounterS2[val] = (frequencyCounterS2[val] || 0) + 1;
//   }
//   console.log(frequencyCounterS1);
//   console.log(frequencyCounterS2);

//   // Compare the two counter objects
//   for (let key in frequencyCounterS1) {
//     if (frequencyCounterS2[key] !== frequencyCounterS1[key]) {
//       console.log(`Not same frequency of ${key}.`);
//       return false;
//     }
//   }
//   console.log(`Frequencies match, returning true`);
//   return true;

// === COLT'S SOLUTION
// NOTE This solution compares by reducing the frequency counts
// back to 0 e.g. {a: 0, n: 0, g: 0, r: 0, m: 0} => true/works
// if (first.length !== second.length) {
//   console.log("Not the same length!");
//   return false;
// }

// const lookup = {};

// for (let i = 0; i < first.length; i++) {
//   let letter = first[i]
//   lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
// }

// for (let i = 0; i < second.length; i++) {
//   let letter = second[i];
//   // Check whether letter freq is zero or letter non-existent
//   if (!lookup[letter]) {
//     return false;
//   } else {
//     lookup[letter] -= 1;
//   }
// }

// return true;
// }

// validAnagram("aaz", "zza");
// validAnagram("anagram", "nagaram");
// validAnagram("awesome", "awesom");
// validAnagram("texttwisttime", "timetwisttext");

// // === CHALLENGE: sameFrequency
// // sameFrequency(182, 281) // true
// // sameFrequency(34, 14) // false
// function sameFrequency(num1, num2) {
// // NOTE Can also use toString()
//   let num1_str = `${num1}`;
//   let num2_str = `${num2}`;

//   // console.log(num1_str, typeof num1_str);
//   // console.log(num2_str, typeof num2_str);

//   if (num1_str.length !== num2_str.length) {
//     console.log(
//       `Arguments length unequal: ${num1_str.length} !== ${num2_str.length}`
//     );
//     return false;
//   }

//   const lookup1 = {};
//   const lookup2 = {};

//   for (let i = 0; i < num1_str.length; i++) {
//     let digit = num1_str[i];
//     lookup1[digit] = (lookup1[digit] || 0) + 1;
//   }

//   for (let i = 0; i < num2_str.length; i++) {
//     let digit = num2_str[i];
//     lookup2[digit] = (lookup2[digit] || 0) + 1;
//   }

//   for (let key in lookup1) {
//     if (lookup1[key] !== lookup2[key]) {
//       console.log(`Not same frequency of ${key}`);
//       return false;
//     }
//   }
//   console.log(`Frequencies match!`);
//   return true;

//   // console.log(lookup1, lookup2);
// }

// sameFrequency(162, 126);
// // sameFrequency(1624, 126);
// // sameFrequency(22, 2222);

// === CHALLENGE: areThereDuplicates
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// Q: How to accept variable number of arguments?
// A: Use ...spread syntax, or use 'arguments' built-in variable
// function areThereDuplicates(...args) {
//   // Q: How to check if argument is Array?
//   // A: Use built-in Array.isArray(arg) method!
//   if (!Array.isArray(args)) {
//     console.log(`args is not typeof Array. It is type ${typeof args}`);
//     return false;
//   }
//   const lookup = {};
//   for (let i = 0; i < args.length; i++) {
//     let item = args[i];
//     lookup[item] ? (lookup[item] += 1) : (lookup[item] = 1);
//     // lookup[item] = (lookup[item] || 0) + 1;
//     if (lookup[item] > 1) {
//       console.log(`Duplicate item: ${item}`);
//       return true;
//     }
//   }
//   console.log(`No duplicates: ${lookup}`);
//   return false;
// }

// === areThereDuplicates Frequency Counter Solution
// NOTE Uses built-in arguments variable for multiple arguments
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

// === areThereDuplicates Multiple Pointers Solution
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a, b) => a > b);
//   let start = 0;
//   let next = 1;
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// === areThereDuplicates One-Liner using Sets Solution
function areThereDuplicates() {
  let result = new Set(arguments);
  console.log(result);
  return result.size !== arguments.length ? true : false;
  // return new Set(arguments).size !== arguments.length;
}

areThereDuplicates(134);
areThereDuplicates([134]);
areThereDuplicates(134, "a", true, "b", "a");
areThereDuplicates(134, "c", true, "b", "a");
