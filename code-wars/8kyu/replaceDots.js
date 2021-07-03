var replaceDots = function (str) {
  // if (str.includes('.')) {
  return str.replace(/[.]/gi, '-');
  // }
};

console.log(replaceDots('one.two.three'));
