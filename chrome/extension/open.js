console.log(1);

document.addEventListener('DOMContentLoaded', function () {
    console.log(2);
    chrome.tabs.executeScript({
        file: "js/todoapp.bundle.js"
    });
});
