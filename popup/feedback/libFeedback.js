function randomEmoji(symbols){
	if(symbols === undefined)
		return "😵";
	return symbols[Math.round(Math.random() * (symbols.length - 1))]; 
}
