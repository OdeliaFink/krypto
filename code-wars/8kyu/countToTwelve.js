// let number = 0;
// while (number <= 12) {
//   console.log(number)
//   number += 2;
// }

function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number+4)
  }
}
countEvenToTwelve(0);