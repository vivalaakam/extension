chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        file: "js/app.bundle.js"
    });
});
