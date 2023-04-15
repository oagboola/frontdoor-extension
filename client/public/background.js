chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "HIGHLIGHT_TEXT") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }
});
