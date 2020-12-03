'use strict';
const chunkyMonkey = require('../src/advent_3_chunky_monkey');
test('returns splitted array as two-dimensional array', () => {
    // arrange
    const value = ['a', 'b', 'c', 'd'];
    const size = 2;

    // act
    const result = chunkyMonkey(value, size);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toStrictEqual([['a', 'b'], ['c', 'd']]);
});
