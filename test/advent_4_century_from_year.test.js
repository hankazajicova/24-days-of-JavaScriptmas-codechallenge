'use strict';
const centuryFromYear = require('../src/advent_4_century_from_year');
test('returns correct century', () => {
    // arrange
    const num = 1905;

    // act
    const result = centuryFromYear(num);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(20);
});

test('returns edge century', () => {
    // arrange
    const num = 1700;

    // act
    const result = centuryFromYear(num);

    // log
    console.log('result 2: ', result);

    // assert
    expect(result).toBe(17);
});

test('returns another edge century', () => {
    // arrange
    const num = 1;

    // act
    const result = centuryFromYear(num);

    // log
    console.log('result 3: ', result);

    // assert
    expect(result).toBe(1);
});

test('returns century', () => {
    // arrange
    const num = 100;

    // act
    const result = centuryFromYear(num);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(1);
});
