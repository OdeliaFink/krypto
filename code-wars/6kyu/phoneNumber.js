function createPhoneNumber(numbers) {
  let areaCode = numbers.splice(0, 3).join('');
  let firstThree = numbers.splice(0, 3).join('');
  let lastFour = numbers.splice(0).join('');

  return `(${areaCode}) ${firstThree}-${lastFour}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); //"(123) 456-7890"
