function hex2base64(hex) {
	const hexx = hex.toString();
	let str = "";
	for (let i = 0; i < hexx.length && hexx.substr(i, 2) !== "00"; i += 2)
		str += String.fromCharCode(parseInt(hexx.substr(i, 2), 16));
	return window.btoa(str);
}

function harden() {
	const pageIdentifier = window.location.href.split(window.location.host)[0] + window.location.host;
	this.value = hex2base64(CryptoJS.SHA3(this.value + pageIdentifier));
}

function init(password) {
	password.addEventListener("change", harden);
}

const inputs = document.querySelectorAll("input[type=password]");
inputs.forEach(init);

