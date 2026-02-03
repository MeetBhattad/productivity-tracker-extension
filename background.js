// ==================== LISTENERS ====================
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  handleTabChange(tab);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    handleTabChange(tab);
  }
});

// ==================== HANDLE TAB CHANGE ====================
async function handleTabChange(tab) {
  if (!tab.url) return;

  const now = Date.now();
  chrome.storage.local.get(["currentTabUrl", "startTime"], (result) => {
    const prevTabUrl = result.currentTabUrl;
    const prevStart = result.startTime;

    if (prevTabUrl && prevStart) {
      const timeSpent = Math.floor((now - prevStart) / 1000); // convert ms → seconds
      sendToBackend(prevTabUrl, timeSpent);
    }

    // Save current tab info
    chrome.storage.local.set({
      currentTabUrl: tab.url,
      startTime: now,
    });
  });
}

// ==================== EXTRACT DOMAIN ====================
function extractDomain(url) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "unknown";
  }
}

// ==================== SEND DATA TO BACKEND ====================
function sendToBackend(url, timeSpent) {
  const domain = extractDomain(url);
  console.log("Sending to backend:", domain, url, timeSpent);

  fetch("http://localhost:5050/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, timeSpent }), // send full URL + time
  })
    .then(() => console.log("Sent ✅"))
    .catch((err) => console.log("Fetch error:", err));
}
