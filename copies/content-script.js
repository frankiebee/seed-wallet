function injectScript(filePath) {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(filePath);
  script.onload = () => script.remove();
  (document.head || document.documentElement).appendChild(script);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'ping') {
    console.log('📩 Message received in content script:', message);
    sendResponse({ type: 'pong', timestamp: Date.now() });
  }
});

window.addEventListener('message', (event) => {
  if (event.source !== window) return;
  if (event.data?.source !== 'seed-extension') return;

  console.log('📥 Message from injected script:', event.data);

  chrome.runtime.sendMessage({
    type: event.data.type,
    payload: event.data.payload
  });
});

injectScript('inject.js');
