function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('Odelia is a loser'));

/* 
g tells to find all matches, not just the first.

i tells to be case insensitive.

What goes inside the // is the pattern.

[] tells to match any character in a set.

aeiou are the characters in the set.
*/
