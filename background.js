function reloadTab(tabId) {
  chrome.tabs.reload(tabId);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.reloadTab) {
      setTimeout(() => {
        reloadTab(sender.tab.id);
        console.log("Reloading tab as requested...");
      }, 10000);
    }
  });