function toFreetubeUrl(url) {
  return `freetube://${url}`;
}


const youtube = 'https://www.youtube.com/watch?v=';

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(youtube)) {
    freetube_url = toFreetubeUrl(tab.url)
    console.info(
      "Redirecting",
      `"${tab.url}"`,
      " to ",
      `"${freetube_url}"`
    );
    chrome.tabs.create({ url: freetube_url });
  }
});
