import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedText, setSelectedText] = useState("");

  function handleTextSelection() {
    const selection = window.getSelection();
    const text = selection?.toString();
    setSelectedText(text || "");
  }

  return (
    <div onMouseUp={handleTextSelection}>
      <p>Select some text here</p>
      <p>Selected Text: {selectedText}</p>
    </div>
  );
}

export default App;
