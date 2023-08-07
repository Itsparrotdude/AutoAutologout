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
    button.textContent = enabled ? 'Disable' : 'Enable';
  }
  
  // Initialize the button state when the popup is opened
  document.addEventListener('DOMContentLoaded', () => {
    getExtensionState((enabled) => {
      updateButton(enabled);
    });
    
    // Add a click event listener to the button
    const button = document.getElementById('toggleExtension');
    button.addEventListener('click', toggleExtensionState);
  });
  