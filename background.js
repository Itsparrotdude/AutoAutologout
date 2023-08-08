function reloadTab(tabId) {
  chrome.tabs.reload(tabId);
}    

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.reloadTab) {
    
    chrome.storage.local.get('reloadInterval', (result) => {
      const delay = result.reloadInterval || 10000; 
      setTimeout(() => {
        reloadTab(sender.tab.id);
        console.log("Reloading tab as requested...");
      }, delay*1000);
    });
  }
});

