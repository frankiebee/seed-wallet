/******/ (function() { // webpackBootstrap
/*!*****************************!*\
  !*** ./background/index.js ***!
  \*****************************/

chrome.runtime.onInstalled.addListener(() => {
  const contentScript = {
    id: "seed-content",
    js: ["content-script.js"],
    matches: ["<all_urls>"],
    runAt: "document_start",
  }
  chrome.scripting.registerContentScripts([contentScript])
  chrome.sidePanel.setOptions({
    path: "sidepanel.html",
    enabled: true
  })
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'my-injected-event') {
    console.log('📬 Extension got message from injected script:', message.payload);
  }
});

let isOpen = false
chrome.action.onClicked.addListener((tab) => {
  if (isOpen) {
    chrome.sidePanel.setOptions({
      enabled: false
    }, () => isOpen = false)
  } else {
    chrome.sidePanel.setOptions({
      path: "sidepanel.html",
      enabled: true
    }, () => isOpen = true)
    chrome.sidePanel.open({ windowId: tab.windowId });
  }
});

/******/ })()
;
//# sourceMappingURL=background.js.map