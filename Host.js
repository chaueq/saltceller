class Host{
	constructor(excluded, chosenFields){
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

