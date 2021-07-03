function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array

  const sum = marks.reduce((a, b) => a + b, 0);
  return sum / marks.length;

  // let total = 0;
  // // for (let i = 0; i < marks.length; i++) {
  // console.log(marks.length);
  // // }
}

console.log(getAverage([2, 2, 2, 2])); //2;
