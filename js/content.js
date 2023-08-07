const targetUrlPart = 'linewize.net';
if (window.location.href.includes(targetUrlPart)) {
    chrome.runtime.sendMessage({ reloadTab: true });
  }
