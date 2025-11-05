chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: "index.html",
    type: "popup",
    width: 400,
    height: 500
  });
});
