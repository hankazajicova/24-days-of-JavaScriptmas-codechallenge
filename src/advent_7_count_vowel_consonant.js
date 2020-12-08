// version 1
function countVowelConsonant(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const splitted = str.split('');
    const addCount = splitted.map((item) => (vowels.includes(item)) ? 1 : 2 );
    return addCount.reduce((total, item) => total + item);
};
// version 2
// function countVowelConsonant(str) {
//     const splitted = str.split('');
//     const result = splitted.map(map_me);
//     return result.reduce((total, item) => total + item);
// };
// function map_me(letter) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (vowels.includes(letter)) {
//         return 1;
//     }
//     return 2;
// };
// version 3
// function countVowelConsonant(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let countOfVowelAndConsonant = 0;
//     const splitted = str.split('');
//     for (let i = 0; i < splitted.length; i++) {
//         if (vowels.includes(splitted[i])) {
//             countOfVowelAndConsonant++;
//         } else {
//             countOfVowelAndConsonant += 2;
//         }
//     }
//     return countOfVowelAndConsonant;
// };
// version 4
// function countVowelConsonant(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const chars = str.split('');
//     const total = chars.reduce((acc, char) => {
//         if (vowels.includes(char)) {
//             return acc + 1;
//         }
//         return acc + 2;
//     }, 0);
//     return total;
// };
module.exports = countVowelConsonant;
console.log(countVowelConsonant('hello'));
