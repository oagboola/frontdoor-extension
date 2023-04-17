chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "highlight") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, message);
      chrome.storage.local.set({ highlight: message });
    });
  }
});
