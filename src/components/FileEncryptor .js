import React from 'react'
import CryptoJs, { enc } from 'crypto-js';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");
var SHA256 = require("crypto-js/sha256");
function FileEncryptor() {
    let message = SHA256('message');
    // hash = CryptoJS.SHA256(wordArray)
    // console.log(message.toString())
    const MY_OBJ = {
        name: "John Doe",
        age: 30,
    }

//     const secretKey = "my-secret-key";
    const jsonString = JSON.stringify(MY_OBJ);
//     for (const key in MY_OBJ) {
//         const element = `${MY_OBJ[key]}`
//         // console.log(element)
//         // console.log(CryptoJs.AES.encrypt(element,secretKey).toString());

//     }
//     let encrypt = CryptoJs.AES.encrypt("anas", secretKey)
//     var decryptedData = encrypt.toString(CryptoJS.enc.Utf8);
//     var ciphertextWA = enc.Hex.parse(encrypt);
//     // var keyWA = CryptoJS.enc.Utf8.parse(key);
//     // var ivWA = CryptoJS.enc.Utf8.parse(iv);
//     var ciphertextCP = { ciphertext: ciphertextWA };
// // 
//     var decrypted = AES.decrypt(
//         ciphertextCP,
//         secretKey,
//     );
//     console.log("encrypt", encrypt);
//     let decrypt = CryptoJs.AES.decrypt(encrypt, secretKey).toString()
//     console.log("encrypt", encrypt, "decrypt", decrypt);


    let encrypted = CryptoJS.AES.encrypt(jsonString, "Secret Passphrase"); 
    let decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    let decr = decrypted.toString(CryptoJS.enc.Utf8);
    console.log("encrypt", encrypted.toString(), "decrypt", decr);

    return (
        <div>
            <>
                hello world
            </>
        </div>
    )
}

export default FileEncryptor 
