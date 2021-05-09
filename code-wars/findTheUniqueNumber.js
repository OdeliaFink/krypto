function findUniq(arr) {
  arr.reduce((tally, val) => {}, {});
}

console.log(findUniq([1, 1, 1, 2, 2, 1, 1]));

// let unique = new Set(arr);
// let secondArray = [...unique];
// let count = 0;
// for (let i = 0; i < 4; i++) {
//   if (arr[i] == secondArray[0]) {
//     count++;
//   }
// }
