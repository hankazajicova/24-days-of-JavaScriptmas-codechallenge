'use strict';
const candies = require('../src/advent_1_candy');
test('returns ammount of total equal candy to be eaten', () => {
    // arrange
    const children = 3;
    const candy = 10;

    // act
    const result = candies(children, candy);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(9);
});
