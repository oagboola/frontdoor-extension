document.addEventListener("mouseup", function () {
  var selectedText = window.getSelection().toString();
  if (selectedText !== "") {
    chrome.runtime.sendMessage({
      action: "highlight",
      selectedText: selectedText,
    });
  }
});
