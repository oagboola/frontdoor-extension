import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [selectedText, setSelectedText] = useState("");

  useEffect(() => {
    chrome.tabs &&
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id!, { action: "highlight" });
      });
    chrome.onMessage.addListener((message, sender, sendResponse) => {
      console.log("happens?");
      if (message.type === "highlight") {
        setSelectedText(message.value);
      }
    });
  }, [setSelectedText]);

  return (
    <div>
      <p>Select some text from the page</p>
      <div>Selected text: {selectedText}</div>
    </div>
  );
}

export default App;
