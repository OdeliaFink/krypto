function problem(x) {
  return isNaN(x) || x === '' ? 'Error' : x * 50 + 6;
}

console.log(problem('hello')); // "Error";
console.log(problem(6)); // "56";
console.log(problem(0)); // "6";
