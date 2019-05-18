function setHostname(tabs) {
    document.getElementById("Hostname").innerHTML =
        tabs[0].url.split("/")[0] + "//" + tabs[0].url.split("/")[2]
}

var querying = browser.tabs.query({ currentWindow: true, active: true })
querying.then(setHostname)
