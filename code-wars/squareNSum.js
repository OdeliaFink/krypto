function squareSum(numbers) {
  let result;
  let square = numbers.forEach((number) => {
    let sq = number ** number;
    result += sq;
    console.log(result);
  });
}

squareSum([1, 2]);
