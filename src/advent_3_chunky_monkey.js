function chunkyMonkey(values, size) {
    const first = values.slice(0, size);
    const second = values.slice(size);
    return [first, second];
}

module.exports = chunkyMonkey;
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
