function squareDigits(num) {
  let splitArr = num.toString();
  let result = [];

  for (let i = 0; i < splitArr.length; i++) {
    result[i] = splitArr[i] * splitArr[i];
  }

  return Number(result.join(''));
}

console.log(squareDigits(3212)); // 9414
squareDigits(2112); // 4114
