function candies(children, candy) {
    if (candy%children != 0) {
        var rest = candy%children;
        var result = candy - rest;
        return result;
    } else {
        return candy;
    }
};

module.exports = candies;
// console.log(candies(3,10))
