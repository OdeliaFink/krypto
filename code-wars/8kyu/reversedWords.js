function reverseWords(str) {
  return str.split(/\s/).reverse().join(' ');
  // reverse().join().replace(',', ' ');
}

console.log(reverseWords('hello world!')); //"world! hello"
