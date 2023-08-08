function openGitHubLink() {
    chrome.tabs.create({ url: 'https://github.com/Itsparrotdude/AutoAutologout' });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelector('.foe-link');
    link.addEventListener('click', openGitHubLink);
  });

function getReloadIntervalFromStorage(callback) {
  chrome.storage.local.get('reloadInterval', (result) => {
    const intervalInSeconds = result.reloadInterval || 10; 
    callback(intervalInSeconds);
  });
}

function updateReloadInterval(intervalInSeconds) {
  chrome.storage.local.set({ reloadInterval: intervalInSeconds });
}

document.addEventListener('DOMContentLoaded', () => {
  const intervalInput = document.getElementById('reloadInterval');

  getReloadIntervalFromStorage((intervalInSeconds) => {
    intervalInput.value = intervalInSeconds;
  });

  intervalInput.addEventListener('change', () => {
    const delay = parseInt(intervalInput.value); 
    updateReloadInterval(delay);
  });
});