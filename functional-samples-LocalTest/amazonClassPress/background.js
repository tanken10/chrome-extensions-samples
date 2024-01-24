chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request); // hello メッセージ
  console.log(sender); // 送られてきたタブに関する情報(タブIDや開いているURL/Titleなど)
  sendResponse({}); // 送り返すべきものがなければ空のObjectを返す
});
