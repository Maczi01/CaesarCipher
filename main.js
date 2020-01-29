const enter = document.querySelector(".enterButton");
const decodedValue = document.querySelector('.control__window--decodedValue');
let word;

enter.addEventListener('click', getValueToDecode);

function getValueToDecode() {
   word = document.getElementById("wordToCipher").value;
    console.log(word);
    caesar(word)
}


function caesar(word) {
    // let word = document.getElementById("wordToCipher").value;

    if (word.match("[a-zA-Z]" || word.length !== 0)) {
        const alph = "abcdefghijklmnopqrstuvwxyz";
        const alphabet = alph.split("");
        let wordArray = word.split("");
        let ciphercode = [];
        for (let i = 0; i < wordArray.length; i++) {
            let tempLetter = wordArray[i];
            let asciiValue1 = tempLetter.charCodeAt(0);
            let asciiValue2 = tempLetter.toLowerCase().charCodeAt(0);
            let indexOfLetter = alphabet.indexOf(tempLetter.toLowerCase());
            let newIndex = indexOfLetter + 13;
            if (asciiValue1 === asciiValue2) {
                ciphercode[i] = alphabet[newIndex % 26];
            } else {
                ciphercode[i] = alphabet[newIndex % 26].toUpperCase();
            }
        }
        // return ciphercode.join("");
        decodedValue.innerHTML = ciphercode.join("");
    }
    else {
        decodedValue.innerHTML = "Enter string of characters";
    }
}
