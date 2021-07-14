function shortcut(string) {
  return string.replace(/[aeiou]/gi, '');
}

console.log(shortcut('hello')); //== 'hll'
