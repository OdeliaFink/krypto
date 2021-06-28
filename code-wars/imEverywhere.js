/*


The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
The first letter should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word".
*/

const everywhere = function i(word) {
  const vowels = ['a', 'e', 'o', 'u', 'i'];
  const consonants = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    's',
    't',
    'v',
    'x',
    'z',
    'h',
    'r',
    'w',
    'y',
  ];

  if (word.charAt(0) === 'i' || word.charAt(0) === 'I') {
    return null;
  } else if (word.includes(vowels)) {
  } else {
    return word;
  }

  // console.log(word.includes(vowels));
};

console.log(everywhere('Island'));
console.log(everywhere('odelia'));
