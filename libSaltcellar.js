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
	getting.then(onDataLoad);
}

