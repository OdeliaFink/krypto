function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'o', 'i', 'u'];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getCount('odelia'));
