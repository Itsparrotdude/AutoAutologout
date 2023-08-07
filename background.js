// background.js

// Define the URL you want to reload
const targetUrl = 'https://login.syd-1.linewize.net/logout?url=autologout.linewize.net&deviceid=mtalbert.tts&ip=10.100.16.156&mac=10:b5:88:68:cb:4d&&t=1691368456&h=85e839d8b5931aa5332b0ceda66de814217d8152';

// Function to reload the tab
function reloadTab(tabId) {
  chrome.tabs.reload(tabId);
}

// Listen for the tab being updated (e.g., URL change)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.url === targetUrl) {
    reloadTab(tabId);
  }
});
