// popup.js

// Function to get the current enable/disable state from storage
function getExtensionState(callback) {
    chrome.storage.local.get('extensionEnabled', (result) => {
      const enabled = result.extensionEnabled !== false; // Default is true if not set
      callback(enabled);
    });
  }
  
  // Function to toggle the extension's enable/disable state
  function toggleExtensionState() {
    getExtensionState((enabled) => {
      const newState = !enabled;
      chrome.storage.local.set({ extensionEnabled: newState }, () => {
        updateButton(newState);
      });
    });
  }
  
  // Function to update the button text based on the extension state
  function updateButton(enabled) {
    const button = document.getElementById('toggleExtension');
    button.checked = enabled;
  }
  
  // Initialize the button state when the popup is opened
  document.addEventListener('DOMContentLoaded', () => {
    getExtensionState((enabled) => {
      updateButton(enabled);
    });
  
    // Add a change event listener to the checkbox
    const checkbox = document.getElementById('toggleExtension');
    checkbox.addEventListener('change', toggleExtensionState);
  });

  
  // popup.js

// Function to open the GitHub link in a new tab
function openGitHubLink() {
    chrome.tabs.create({ url: 'https://github.com/Itsparrotdude/AutoAutologout' });
  }
  
  // Initialize the link click event
  document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelector('.foe-link');
    link.addEventListener('click', openGitHubLink);
  });

  function getReloadInterval() {
    const intervalInput = document.getElementById('reloadInterval');
    const intervalInSeconds = parseInt(intervalInput.value);
    return intervalInSeconds * 1000; // Convert to milliseconds
  }
  
  // Function to reload the tab with the user-selected delay
  function reloadTabWithDelay(tabId, delay) {
    setTimeout(() => {
      chrome.tabs.reload(tabId);
      console.log("Reloading tab as requested...");
      reloadTabWithDelay(tabId, delay); // Repeat the reload with the same delay
    }, delay);
  }
  
  // Initialize the reload interval when the popup is opened
  document.addEventListener('DOMContentLoaded', () => {
    const intervalInput = document.getElementById('reloadInterval');
    intervalInput.addEventListener('change', () => {
      const delay = getReloadInterval();
      chrome.storage.local.set({ reloadDelay: delay });
    });

});