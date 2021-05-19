/*
	Required:
	→	CryptoJS/rollups/sha3.js
	→	libCryptoSaltcellar.js
*/

function init(password) {
	password.addEventListener("change", harden);
}

const inputs = document.querySelectorAll("input[type=password]");
inputs.forEach(init);

