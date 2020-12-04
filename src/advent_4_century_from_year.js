function centuryFromYear(num) {
    const century = Math.floor((num - 1)/100 + 1);
    return century;
}

module.exports = centuryFromYear;

console.log(centuryFromYear(2020));
