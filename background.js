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


// background.js updated for user input controlled reload interval

// Define the URL you want to reload
const targetUrl = 'https://login.syd-1.linewize.net/logout?url=autologout.linewize.net&deviceid=mtalbert.tts&ip=10.100.16.156&mac=10:b5:88:68:cb:4d&&t=1691368456&h=85e839d8b5931aa5332b0ceda66de814217d8152';

// Function to reload the tab with a delay
function reloadTabWithDelay(tabId, delay) {
  setTimeout(() => {
    chrome.tabs.reload(tabId);
    console.log("Reloading tab as requested...");
    reloadTabWithDelay(tabId, delay); // Repeat the reload with the same delay
  }, delay);
}

// Listen for the tab being updated (e.g., URL change)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.url.includes(targetUrl)) {
    const delayKey = 'reloadDelay';
    chrome.storage.local.get(delayKey, (result) => {
      const delay = result[delayKey] || 10000; // Default to 10 seconds if not set
      reloadTabWithDelay(tabId, delay);
    });
  }
});


