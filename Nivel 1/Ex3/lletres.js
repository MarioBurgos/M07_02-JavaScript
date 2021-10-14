var myName = ['m', 'a', 'r', 'i', 'o', ' ', 'e', 's', ' ', 'e', 'l', ' ', 'm', 'e', 'u', ' ', 'n', 'o', 'm'];
var results = {};

/** Solucion 2 */

results = myName.map(char => {
    results[char] = (results[char] || 0) + 1;
    return results;
});
console.log(results[0]);



/** Solucion 1 */
// myName.forEach(char => {
//     results[char] = (results[char] || 0) + 1;

// });
// console.log(results);