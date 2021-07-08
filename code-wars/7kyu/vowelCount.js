function getCount(str) {
  var vowelsCount = 0;
  const vowel = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').filter((l) => vowel.indexOf(l) !== -1).length;
}

console.log(getCount('abracadabrai')); //, 5;
