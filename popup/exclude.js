function excludeActiveHost() {
	const querying = browser.tabs.query({ currentWindow: true, active: true });
	querying.then(
		(tabs) => {
			exclude(getActiveHostname(tabs));
		},
		onError
	);
}

document.getElementById('yes').addEventListener('click', excludeActiveHost);
