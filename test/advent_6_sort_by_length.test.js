'use strict';
const sortByLength = require('../src/advent_6_sort_by_length');
test('returns sorted elements in list', () => {
    // arrange
    const strs = ['ab', 'aaa', 'abc', '', 'b', 'yyy'];

    // act
    const result = sortByLength(strs);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toStrictEqual(['', 'b', 'ab', 'aaa', 'abc', 'yyy']);
});
