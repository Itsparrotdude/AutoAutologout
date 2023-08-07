// content.js

// Define part of the URL you want to match
const targetUrlPart = 'autologout.linewize.net';

// Check if the current tab's URL contains the target URL part
if (window.location.href.includes(targetUrlPart)) {
  // Send a message to the background service worker indicating that the tab should be reloaded
  chrome.runtime.sendMessage({ reloadTab: true });
}
