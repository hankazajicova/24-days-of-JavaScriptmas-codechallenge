'use strict';
function candies(children, candy) {
    if (candy % children !== 0) {
        const rest = candy % children;
        const result = candy - rest;
        return result;
    }
    return candy;
}


// function candies(children, candy) {
//     const candyPerChild = Math.floor(candy / children);
//     console.log(candyPerChild)
//     return candyPerChild * children;
// }

module.exports = candies;
console.log(candies(3, 10));

