function reverseAString(str) {
    const splitInput = str.split('');
    const reverseInput = splitInput.reverse();
    return reverseInput.join('');
}

module.exports = reverseAString;
console.log(reverseAString('Merry Christmas'));
