function reverseAString(str) {
    const splitInput = str.split('');
    const reverseInput = splitInput.reverse();
    return reverseInput.join('');
}

module.exports = reverseAString;
console.log(reverseAString('Merry Christmas'));

// let reversedStr = '';
// for(let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }
// return reversedStr;
