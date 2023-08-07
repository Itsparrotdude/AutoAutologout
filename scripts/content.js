// content.js

// Define the URL you want to reload
const targetUrl = 'https://login.syd-1.linewize.net/logout?url=autologout.linewize.net&deviceid=mtalbert.tts&ip=10.100.16.156&mac=10:b5:88:68:cb:4d&&t=1691364646&h=704f19308df72a75e4248ec8867f029b843e9f70';

// Check if the current tab's URL matches the target URL
if (window.location.href === targetUrl) {
  // Send a message to the background script indicating that the tab should be reloaded
  chrome.runtime.sendMessage({ reloadTab: true });
}
