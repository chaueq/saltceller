function excludeActiveHost() {
	const querying = browser.tabs.query({ currentWindow: true, active: true });
	querying.then(
		(tabs) => {
			exclude(getActiveHostname(tabs));
			window.location.href = "feedback/ok.html";
		},
		onError
	);
}

document.getElementById('yes').addEventListener('click', excludeActiveHost);
