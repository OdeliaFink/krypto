function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
}

console.log(descendingOrder(98827374656));
