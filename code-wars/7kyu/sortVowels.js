/* 
List all the Vowels on the right side of |
List every character except Vowels on the left side of |
Case doesn't matter
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
*/

const sortVowels = (s) =>
  typeof s !== 'string'
    ? ''
    : [...s]
        .map((vowel) => (/[aeiou]/i.test(vowel) ? `|${vowel}` : `${vowel}|`))
        .join('\n');

console.log(sortVowels('Codewars')); // 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
