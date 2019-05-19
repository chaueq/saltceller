function onError() {
	window.location.href = "/popup/feedback/sthWentWrong.html";
}

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

function getActiveHostname(tabs) {
	return tabs[0].url.split("/")[0] + "//" + tabs[0].url.split("/")[2];
}

function exclude(hostname) {
	
	function onDataLoad(hosts) {
		if(hosts[hostname] === undefined) {
			hosts[hostname] = new Host(true, []);
		}
		else {
			hosts[hostname].excluded = true;
		}
		browser.storage.sync.set(hosts);
	}

	const getting = browser.storage.sync.get("hosts");
	getting.then(onDataLoad, onError);
}

