var myName = ['M', 'a', 'r', 'i', 'o', ' ', 'e', 's', ' ', 'e', 'l', ' ', 'm', 'e', 'u', ' ', 'n', 'o', 'm'];
var results = [];

myName.forEach(function(char) {
    results[char] = (results[char] || 0) + 1;

});
console.log(results);