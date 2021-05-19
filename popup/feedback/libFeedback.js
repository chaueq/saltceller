function randomString(strings){
	if(strings === undefined)
		return "😵";
	return strings[Math.round(Math.random() * (strings.length - 1))]; 
}
