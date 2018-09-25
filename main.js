// Elements
const textEncrpyt = document.querySelector("#text_encrypt");
const textEncrypted = document.querySelector("#text_encrypted");
const textDecrypt = document.querySelector("#text_decrypt");
const textDecrypted = document.querySelector("#text_decrypted");
const callEncryption = document.querySelector("#callEncryption");
const callDecryption = document.querySelector("#callDecryption");

// Functions
function encryptText(){
    // Get the value from the text area.
    const encryptValue = this.value;
    
    // Replace the value with different character codes.
    let newValue = encryptValue.replace(/[a-z]/gi, char =>{
        if(char === "y" || char === "Y" || char === "z" || char === "Z" || char === "x" || char === "X") {
            return String.fromCharCode(char.charCodeAt() - 1);
        } else {
            return String.fromCharCode(char.charCodeAt() + 3);
        }
    })

    showEncryption(newValue)
}

// Show the encryption in the other window in real-time.
function showEncryption(newValue) {
    textEncrypted.textContent = newValue;
}

function decryptText(){
    // Get the value that's put into the decryption window.
    const decryptValue = textDecrypt.value;
    showDecryption(decryptValue);
}
function showDecryption(decryptValue) {
    // Use the value from the decryption window to get a new value, with the original character codes - decrypted.
    let newValue = decryptValue.replace(/[a-z]/gi, char => {
        if(char === "y" || char === "Y" || char === "z" || char === "Z" || char === "x" || char === "X") {
            return String.fromCharCode(char.charCodeAt() + 1);
        } else {
            return String.fromCharCode(char.charCodeAt() - 3);
        }
    });
    textDecrypted.textContent = newValue;
}

// Event listeners
callDecryption.addEventListener("click", decryptText);
textEncrpyt.addEventListener("keyup", encryptText)