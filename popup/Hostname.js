function setHostname(tabs) {
	document.getElementById("Hostname").innerHTML = getActiveHostname(tabs);
}

const querying = browser.tabs.query({ currentWindow: true, active: true });
querying.then(setHostname, onError);

