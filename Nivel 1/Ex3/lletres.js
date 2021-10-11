var myName = ['M', 'a', 'r', 'i', 'o', ' ', 'e', 's', ' ', 'e', 'l', ' ', 'm', 'e', 'u', ' ', 'n', 'o', 'm'];
var results = [{ '#': '0' }];

myName.map(countChars(myName));
console.log(results);

/**This method counts the chars and number of reps */
function countChars(array) {
    array.forEach(char => {
        results.forEach(c => {
            if (c === char) {
                results.push({ c: +1 });
            }
        });

    });
}