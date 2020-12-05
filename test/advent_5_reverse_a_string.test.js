'use strict';
const reverseAString = require('../src/advent_5_reverse_a_string');
test('returns reversed string', () => {
    // arrange
    const str = 'Silent Night';

    // act
    const result = reverseAString(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe('thgiN tneliS');
});
