function generate(){
	const host = document.getElementById('Host').value;
	const len = document.getElementById('Length').value;
	const salt = document.getElementById('Salt').value;
	const Password = document.getElementById('Password');
	const password = Password.value;
	
	Password.harden = harden;
	
	Password.harden(host + salt);
	Password.value = Password.value.substring(0, len);
	Password.type = 'text';
	Password.select();
	document.execCommand("copy");
	Password.type = 'password';
	Password.value = password;
	window.location.href = "feedback/copiedToClipboard.html";
}

document.getElementById('generateButton').addEventListener('click', generate);
