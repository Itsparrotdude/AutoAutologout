// background.js

// Define the URL you want to reload
const targetUrl = 'https://login.syd-1.linewize.net/logout?url=autologout.linewize.net&deviceid=mtalbert.tts&ip=10.100.16.156&mac=10:b5:88:68:cb:4d&&t=1691364646&h=704f19308df72a75e4248ec8867f029b843e9f70';

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
