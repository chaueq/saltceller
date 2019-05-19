class Host{
	constructor(excluded, chosenFields, salt){
		if(excluded === undefined){
			excluded = false;
		}
		if(chosenFields === undefined){
			chosenFields = [];
		}
			
		this.excluded = excluded;
		this.chosenFields = chosenFields;
	}
}

