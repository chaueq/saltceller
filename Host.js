class Host{
	constructor(excluded, chosenFields, salt){
		if(excluded === undefined){
			excluded = false;
		}
		if(chosenFields === undefined){
			chosenFields = [];
		}
		if(salt === undefined){
			salt = '';
		}
			
		this.excluded = excluded;
		this.chosenFields = chosenFields;
		this.salt = salt;
	}
}

