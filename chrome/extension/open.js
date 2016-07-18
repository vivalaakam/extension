document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.executeScript({
        file: "js/app.bundle.js"
    });
});
