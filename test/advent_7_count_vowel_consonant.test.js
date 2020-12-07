'use strict';
const countVowelConsonant = require('../src/advent_7_count_vowel_consonant');
test('returns total of vowel(1) and consonants', () => {
    const str = 'abcde';

    const result = countVowelConsonant(str);

    console.log('result: ', result);

    expect(result).toBe(8);
});
