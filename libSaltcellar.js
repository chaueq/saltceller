function onError() {
	window.location.href = "/popup/feedback/sthWentWrong.html";
}

class Host{
	constructor(excluded, useWhitelist, chosenFields){
		if(excluded === undefined){
			excluded = false;
		}
		if(useWhitelist === undefined){
			useWhitelist = false;
		}
		if(chosenFields === undefined){
			chosenFields = [];
		}
			
		this.excluded = excluded;
		this.useWhitelist = useWhitelist;
		this.chosenFields = chosenFields;
	}
}

function getActiveHostname(tabs) {
	if(tabs === undefined){
		onError();
		return null;
	}
	return tabs[0].url.split("/")[0] + "//" + tabs[0].url.split("/")[2];
}

function exclude(hostname) {
	
	function onDataLoad(hosts) {
		if(hosts[hostname] === undefined) {
			hosts[hostname] = new Host(true, false, []);
		}
		else {
			hosts[hostname].excluded = true;
		}
		browser.storage.sync.set(hosts);
	}

	const getting = browser.storage.sync.get("hosts");
	getting.then(onDataLoad, onError);
}

