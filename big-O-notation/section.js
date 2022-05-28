// Sums all numbers from 1 to N
function sumUpTo(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    return sum;
  }
}

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// To compare
// let time1 = performance.now();
sumUpTo(10000000); // Or, addUpTo()
// let time2 = performance.now();
// console.log(`Time elasped: ${(time1 - time2) / 1000} seconds.`);

function countUpAndDown(n) {
  for (let i = 0; i <= n; i++) {
    console.log("Counting up: ", i);
  }
  for (let j = n - 1; j > 0; j--) {
    console.log("Counting down: ", j);
  }
}

console.log(countUpAndDown(10));

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
