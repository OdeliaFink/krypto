function sumOfMinimums(arr) {
  const sumOfMinNumbers = [];

  arr.forEach((minNum) => sumOfMinNumbers.push(Math.min(...minNum)));

  return sumOfMinNumbers.reduce((x, y) => x + y);
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);

//, 9));
