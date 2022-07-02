// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

function encrypt(text, n) {
    if(n < 1 || !n) return text;
    if(text.length %2 === 0) {
        if(n % 3 === 0) return text;
        for(let i = 0; i < n % 3; i++) {
            text = singleShuffle(text);
        }
        return text;
    }
    if(n % 4 === 0) return text;
    for(let i = 0; i < n % 4; i++) {
        text = singleShuffle(text);
    }
    return text;
}

function decrypt(encryptedText, n) {
    if(n < 1 || !n) return encryptedText;
    if(encryptedText.length % 2 === 0) {
        console.log(`start text: ${encryptedText}`)
        if(n % 3 === 0 || n < 1) return encryptedText;
        for(let i = 0; i < 3 - (n % 3); i++) {
            encryptedText = singleShuffle(encryptedText);
            console.log(`In loop: i:${i} target:${3 - (n % 3)} currentText: ${encryptedText}`)
        }
        return encryptedText;
    } 
    if(n % 4 === 0) return encryptedText;
    for(let i = 0; i < 4 - (n % 4); i++) {
        encryptedText = singleShuffle(encryptedText);
    }
    return encryptedText;
}
function singleShuffle(input) {
    return input.split('').filter((c, i) => i % 2 !== 0).concat(input.split('').filter((c, i) => i % 2 === 0)).join('');
}


for(let i = 1; i <= 10; i++) {
    console.log(`encrypt:${i} => ${encrypt("This kata is very interesting!", i)} decrypt:${i} => ${decrypt(encrypt("This kata is very interesting!", i), i)}`)
}
console.log("This kata is very interesting!".length)