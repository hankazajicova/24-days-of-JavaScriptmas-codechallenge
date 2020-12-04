function chunkyMonkey(values, size) {
    const first = values.slice(0, size);
    const second = values.slice(size);
    return [first, second];
}

module.exports = chunkyMonkey;
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

// function chunkyMonkey(values, size) {
//     const nested = [];
//     let count = 0;
//     while(count < values.length) {
//         nested.push(values.slice(count, count += size));
//     }
//     return nested;
// }
