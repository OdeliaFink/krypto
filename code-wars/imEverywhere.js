/*

The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
The first target should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word".
*/

const everywhere = function i(word) {
  const i = (word) => {
    if (
      word === '' ||
      word[0].toLowerCase() === 'i' ||
      word[0] === word[0].toLowerCase()
    )
      return 'Invalid word';
    if (word.replace(/[aeiou]/gi, '').length * 2 <= word.length)
      return 'Invalid word';
    return `i${word}`;
  };
};

// console.log(everywhere('Island'));
console.log(everywhere('Phone'));
console.log(everywhere('Odelia'));
console.log(everywhere('tax'));
console.log(everywhere('odelia'));
