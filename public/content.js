// public/content.js
console.log("Content script loaded");

chrome.storage.sync.get("blockedSites", (data) => {
  const blockedSites = data.blockedSites || [];

  function blockSite() {
    const hostname = window.location.hostname;
    if (blockedSites.includes(hostname)) {
      alert("This site is blocked!");
      window.location.href = "https://www.google.com"; // Redirect to Google, change as needed
    }
  }

  blockSite();
});


