/** onclick per a l'exercici 1 */
function doEx1Lvl1() {
    document.getElementById("resultEx1Lvl1").textContent = ``; // resetear el resultado
    inputText = document.getElementById('inputWord1').value;
    inputArray = Array.from(inputText);

    inputArray.forEach(char => {
        document.getElementById("resultEx1Lvl1").textContent += `${char}, `;
        console.log(char);
    });
}

/** onclick per a l'exercici 2 */
function doEx2Lvl1() {
    inputWord = document.getElementById('inputWord2').value;
    inputArray = Array.from(inputWord);
    inputArray.forEach(char => {
        isNumber(char);
    });

    /** La funcion detecta si el parámetro (caracter) es un VOCAL o no, entonces muestra un mensaje por consola */
    function isVowel(char) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            console.log(`He trobat la VOCAL: ${char}`);
        } else {
            console.log(`He trobat la CONSONTANT: ${char}`);
        }
    }

    /** La funcion detecta si el parámetro (caracter) es un NUMBER o no, entonces muestra un mensaje por consola */
    function isNumber(char) {

        if (!isNaN(char)) {
            console.log(`Els noms de persones no contenen el número: ${char}`);
        } else {
            isVowel(char);
        }


    }
}

/** onclick per a l'exercici 3 */
function doEx3Lvl1() {
    inputWord = document.getElementById('inputWord3').value;
    inputArray = Array.from(inputWord);
    results = {};

    results = inputArray.map(char => {
        results[char] = (results[char] || 0) + 1;
        return results;
    });
    console.log(results[0]);
}

/** onclick per a l'exercici 4 */